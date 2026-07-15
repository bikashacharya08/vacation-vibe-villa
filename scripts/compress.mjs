import sharp from "sharp";
import fs from "fs";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, "../public/images");
const tmpDir = os.tmpdir();

for (const file of fs.readdirSync(imagesDir)) {
  if (!file.match(/\.(jpg|jpeg)$/i)) continue;
  const src = path.join(imagesDir, file);
  try {
    const stat = fs.statSync(src);
    if (stat.size < 100_000) continue;

    const inputData = fs.readFileSync(src);
    const buf = await sharp(inputData).resize({ width: file.startsWith("gallery") ? 1000 : 1920, withoutEnlargement: true }).jpeg({ quality: 80 }).toBuffer();

    const oldSize = (stat.size / 1024 / 1024).toFixed(1);
    const newSize = (buf.length / 1024 / 1024).toFixed(1);

    const tmp = path.join(tmpDir, `villa_${file}`);
    fs.writeFileSync(tmp, buf);
    fs.rmSync(src, { force: true });
    fs.renameSync(tmp, src);
    console.log(`✓ ${file}: ${oldSize}MB -> ${newSize}MB`);
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}
console.log("Done");
