import { copyFile, mkdir, writeFile } from 'node:fs/promises';

export async function prepareAssets() {
  await mkdir('assets', { recursive: true });
  await mkdir('clips', { recursive: true });
  await copyFile('node_modules/gsap/dist/gsap.min.js', 'assets/gsap.min.js');

  const sampleRate = 48_000;
  const sampleCount = sampleRate * 5;
  const start = sampleRate * 2;
  const samples = Buffer.alloc(44 + sampleCount * 2);
  samples.write('RIFF', 0);
  samples.writeUInt32LE(samples.length - 8, 4);
  samples.write('WAVEfmt ', 8);
  samples.writeUInt32LE(16, 16);
  samples.writeUInt16LE(1, 20);
  samples.writeUInt16LE(1, 22);
  samples.writeUInt32LE(sampleRate, 24);
  samples.writeUInt32LE(sampleRate * 2, 28);
  samples.writeUInt16LE(2, 32);
  samples.writeUInt16LE(16, 34);
  samples.write('data', 36);
  samples.writeUInt32LE(sampleCount * 2, 40);
  for (let i = 0; i < 0.14 * sampleRate; i += 1) {
    const time = i / sampleRate;
    const envelope = Math.min(1, time / 0.003, (0.14 - time) / 0.012);
    const signal = Math.round(12_000 * envelope * Math.sin(2 * Math.PI * 880 * time));
    samples.writeInt16LE(signal, 44 + (start + i) * 2);
  }
  await writeFile('assets/pulso.wav', samples);
}
