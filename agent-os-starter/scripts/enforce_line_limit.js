const fs = require('fs');
const path = require('path');

const MAX_LINES = 500;
const IGNORE_PATTERNS = [
  'node_modules',
  '.git',
  'package-lock.json',
];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  if (lines.length > MAX_LINES) {
    console.error(`Error: File ${filePath} exceeds the ${MAX_LINES}-line limit.`);
    process.exit(1);
  }
}

function traverseDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (IGNORE_PATTERNS.some(pattern => fullPath.includes(pattern))) {
      return;
    }
    if (fs.lstatSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else {
      checkFile(fullPath);
    }
  });
}

console.log('Checking file line limits...');
traverseDir(path.join(__dirname, '..'));
console.log('All files are within the line limit.');
