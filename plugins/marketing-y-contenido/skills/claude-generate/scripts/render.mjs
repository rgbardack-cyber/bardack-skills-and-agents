// Renderiza un archivo HTML/SVG a PNG (o PDF) con Chromium vía Playwright.
// Uso:  node render.mjs <entrada.html|svg> <salida.png|pdf> [ancho] [alto] [escala]
// Ej.:  node render.mjs thumb.html thumb.png 1280 720 2
// Requiere: npm i playwright (una vez) y  npx playwright install chromium
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const [, , input, output, w = '1280', h = '720', scale = '1'] = process.argv;
if (!input || !output) {
  console.error('Uso: node render.mjs <entrada> <salida.png|pdf> [ancho] [alto] [escala]');
  process.exit(1);
}

let chromium;
try {
  // busca playwright junto a este script y luego en el cwd
  const here = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
  try { ({ chromium } = createRequire(path.join(here, 'noop.js'))('playwright')); }
  catch { ({ chromium } = createRequire(path.join(process.cwd(), 'noop.js'))('playwright')); }
} catch {
  console.error('Falta Playwright. Ejecuta en la carpeta del proyecto:\n  npm i -D playwright && npx playwright install chromium');
  process.exit(2);
}

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: +w, height: +h },
  deviceScaleFactor: +scale,
});
await page.goto(pathToFileURL(path.resolve(input)).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts && document.fonts.ready);
if (output.toLowerCase().endsWith('.pdf')) {
  await page.pdf({ path: output, width: `${w}px`, height: `${h}px`, printBackground: true });
} else {
  await page.screenshot({ path: output, omitBackground: false });
}
await browser.close();
console.log('OK ->', output);
