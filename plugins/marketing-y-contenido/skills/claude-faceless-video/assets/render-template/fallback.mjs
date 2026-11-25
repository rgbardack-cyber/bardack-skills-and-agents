import { chromium } from 'playwright';
import { execFileSync, spawn } from 'node:child_process';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';
import { prepareAssets } from './assets.mjs';

await prepareAssets();
const frames = await mkdtemp(resolve('clips/.frames-'));
let browser;
let chrome;

async function connectToLocalChrome(executablePath) {
  const profile = join(frames, 'chrome-profile');
  const addressFile = join(profile, 'DevToolsActivePort');
  chrome = spawn(executablePath, [
    '--headless', '--disable-gpu', '--remote-debugging-port=0',
    `--user-data-dir=${profile}`, 'about:blank',
  ], { stdio: 'ignore' });
  let launchError;
  chrome.once('error', error => { launchError = error; });
  for (let attempt = 0; attempt < 100; attempt += 1) {
    if (launchError) throw launchError;
    if (chrome.exitCode !== null || chrome.signalCode) throw Error('Chrome terminó antes de iniciar');
    const address = await readFile(addressFile, 'utf8').catch(error => {
      if (error.code === 'ENOENT') return '';
      throw error;
    });
    const [port, route] = address.trim().split('\n');
    if (/^\d+$/.test(port) && route?.startsWith('/devtools/browser/')) {
      return chromium.connectOverCDP(`ws://127.0.0.1:${port}${route}`, { timeout: 15_000 });
    }
    await delay(150);
  }
  throw Error('Chrome no abrió su puerto local de depuración');
}
try {
  const executablePath = process.env.CHROME_EXECUTABLE || process.env.HYPERFRAMES_BROWSER_PATH;
  browser = executablePath
    ? await connectToLocalChrome(executablePath)
    : await chromium.launch({ timeout: 15_000 });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.route(/^https?:\/\//i, route => route.abort());
  await page.goto(pathToFileURL(resolve('index.html')).href, { waitUntil: 'domcontentloaded', timeout: 15_000 });
  for (let frame = 0; frame < 150; frame += 1) {
    await page.evaluate(time => { window.__timelines.main.seek(time); }, frame / 30);
    await page.screenshot({ path: join(frames, `${String(frame).padStart(6, '0')}.png`) });
  }
  execFileSync('ffmpeg', [
    '-v', 'error', '-y', '-framerate', '30', '-i', join(frames, '%06d.png'),
    '-i', 'assets/pulso.wav', '-map', '0:v', '-map', '1:a', '-t', '5',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-c:a', 'aac', 'clips/playwright-ffmpeg.mp4',
  ], { stdio: 'inherit' });
} finally {
  await browser?.close().catch(() => {});
  chrome?.kill();
  await rm(frames, { recursive: true, force: true });
}
