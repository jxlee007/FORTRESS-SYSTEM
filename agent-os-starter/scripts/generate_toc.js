const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const IGNORE_PATTERNS = ['node_modules'];

function findMarkdownFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    if (IGNORE_PATTERNS.includes(item)) {
      continue;
    }

    const fullPath = path.join(dir, item);
    const stat = fs.lstatSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(findMarkdownFiles(fullPath));
    } else if (fullPath.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

function generateToc() {
  console.log('Generating table of contents for markdown files...');
  const markdownFiles = findMarkdownFiles(rootDir);

  for (const filePath of markdownFiles) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const toc = [];
    let inCodeBlock = false;

    for (const line of lines) {
      if (line.startsWith('```')) {
        inCodeBlock = !inCodeBlock;
      }
      if (inCodeBlock) {
        continue;
      }

      const match = line.match(/^(#+)\s+(.*)/);
      if (match) {
        const level = match[1].length;
        const title = match[2];
        const slug = title.toLowerCase().replace(/\s/g, '-').replace(/[^\w-]/g, '');
        toc.push(`${'  '.repeat(level - 1)}- [${title}](#${slug})`);
      }
    }

    if (toc.length > 0) {
      const tocString = '## Table of Contents\n' + toc.join('\n');
      // This is just an example. A real implementation would need to
      // decide where to insert the TOC in the file. For now, we'll just log it.
      console.log(`\nTable of Contents for ${path.relative(rootDir, filePath)}:\n${tocString}`);
    }
  }
  console.log('\nFinished generating table of contents.');
}

generateToc();
