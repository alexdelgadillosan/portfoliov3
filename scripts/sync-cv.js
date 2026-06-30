const fs = require('fs');
const path = require('path');

const cvDir = path.join(__dirname, '../src/assets/cv');
const jsonFile = path.join(cvDir, 'cv.json');

if (!fs.existsSync(cvDir)) {
  fs.mkdirSync(cvDir, { recursive: true });
}

const pdfs = fs
  .readdirSync(cvDir)
  .filter((file) => file.toLowerCase().endsWith('.pdf'));

let filename = '';

if (pdfs.length === 1) {
  filename = pdfs[0];
} else if (pdfs.length > 1) {
  const newest = pdfs
    .map((file) => ({
      file,
      mtime: fs.statSync(path.join(cvDir, file)).mtimeMs,
    }))
    .sort((a, b) => b.mtime - a.mtime)[0].file;

  console.warn(
    `[sync-cv] Multiple PDFs in src/assets/cv — using newest: ${newest}`
  );
  filename = newest;
} else {
  console.warn('[sync-cv] No PDF found in src/assets/cv/');
}

const url = filename ? `assets/cv/${filename}` : '';

fs.writeFileSync(
  jsonFile,
  JSON.stringify({ url }, null, 2) + '\n'
);

if (url) {
  console.log(`[sync-cv] CV URL: ${url}`);
}
