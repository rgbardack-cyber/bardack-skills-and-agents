import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { join, resolve } from 'node:path';
import { prepareAssets } from './assets.mjs';

const packagePath = resolve('node_modules/hyperframes');
const { bin } = JSON.parse(await readFile(join(packagePath, 'package.json'), 'utf8'));
const cli = join(packagePath, bin.hyperframes);
const env = {
  ...process.env,
  HYPERFRAMES_NO_TELEMETRY: '1',
  HYPERFRAMES_CONFIG_DIR: resolve('.hyperframes'),
  HYPERFRAMES_CACHE_DIR: resolve('.cache/hyperframes'),
};

function hyperframes(args, capture = false) {
  const result = spawnSync(process.execPath, [cli, ...args], {
    env, encoding: 'utf8', stdio: capture ? ['ignore', 'pipe', 'inherit'] : 'inherit',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw Error(`HyperFrames falló: ${args.join(' ')}`);
  return result.stdout;
}

const status = hyperframes(['telemetry', 'status'], true);
process.stdout.write(status);
if (!/Status:\s+disabled/i.test(status)) throw Error('No se confirmó que la telemetría esté desactivada');
await prepareAssets();
hyperframes(['lint']);
hyperframes(['render', '--fps', '30', '--quality', 'draft', '--workers', '1', '--output', 'clips/hyperframes.mp4']);
