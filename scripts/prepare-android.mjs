import { mkdir, copyFile, access } from 'node:fs/promises';
import { spawn } from 'node:child_process';

async function run(cmd, args) {
  await new Promise((resolve, reject) => {
    const p = spawn(cmd, args, {
      stdio: 'inherit',
      shell: process.platform === 'win32'
    });
    p.on('error', reject);
    p.on('close', code =>
      code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`))
    );
  });
}

await mkdir('www', { recursive: true });
await copyFile('index.html', 'www/index.html');

try {
  await access('android');
  console.log('Android project already exists.');
} catch {
  console.log('Creating Android project...');
  await run('npx', ['cap', 'add', 'android']);
}

await run('npx', ['cap', 'sync', 'android']);
