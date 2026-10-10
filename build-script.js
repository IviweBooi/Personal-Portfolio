const fs = require('node:fs');
const path = require('node:path');
const source = path.join(__dirname, 'site');
const output = path.join(__dirname, 'dist');
for (const file of ['index.html', 'styles.css', 'app.js']) {
  if (!fs.existsSync(path.join(source, file))) throw new Error(`Missing site file: ${file}`);
}
fs.rmSync(output, { recursive: true, force: true });
fs.cpSync(source, output, { recursive: true });
console.log('Portfolio built successfully in dist/');
