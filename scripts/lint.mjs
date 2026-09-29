import { execFileSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const files = [];

function collectJsFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);

    if (entry.isDirectory() && entry.name !== 'node_modules') {
      collectJsFiles(path);
    } else if (entry.isFile() && path.endsWith('.js')) {
      files.push(path);
    }
  }
}

collectJsFiles('.');

for (const file of files) {
  execFileSync(process.execPath, ['--check', file], { stdio: 'inherit' });
}

console.log(`Lint passed: checked ${files.length} JavaScript file(s).`);