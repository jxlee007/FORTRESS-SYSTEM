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

async function validateLinks() {
  console.log('Validating internal markdown links...');
  const markdownFiles = findMarkdownFiles(rootDir);
  let hasErrors = false;

  for (const filePath of markdownFiles) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const links = content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];

    for (const link of links) {
      const match = /\[([^\]]+)\]\(([^)]+)\)/.exec(link);
      const linkText = match[1];
      const linkTarget = match[2];

      if (linkTarget.startsWith('http') || linkTarget.startsWith('mailto:')) {
        continue; // Skip external links
      }

      // Handle anchor links
      const [targetFile, anchor] = linkTarget.split('#');
      const targetPath = path.resolve(path.dirname(filePath), targetFile || '');

      if (!fs.existsSync(targetPath)) {
        console.error(`Error: Broken link in ${path.relative(rootDir, filePath)}: [${linkText}](${linkTarget}) - File not found.`);
        hasErrors = true;
      }
    }
  }

  if (hasErrors) {
    console.error('Found broken internal links.');
    process.exit(1);
  } else {
    console.log('All internal links are valid.');
  }
}

validateLinks().catch(err => {
  console.error(err);
  process.exit(1);
});
