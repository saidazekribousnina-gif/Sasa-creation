// Optimise les images produits/hero vers WebP (qualité 82) à chaque build.
// Idempotent : les WebP existants plus récents que la source sont sautés.
import { readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, join, basename, parse } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const IMG_DIR = resolve(__dirname, '../public/images');

const files = readdirSync(IMG_DIR).filter((f) => /\.(png|jpe?g)$/i.test(f));

let converted = 0;
let skipped = 0;
let savedKb = 0;

for (const file of files) {
  const src = join(IMG_DIR, file);
  const { name } = parse(file);
  const dest = join(IMG_DIR, `${name}.webp`);

  const srcInfo = statSync(src);
  if (existsSync(dest) && statSync(dest).mtimeMs > srcInfo.mtimeMs) {
    skipped++;
    continue;
  }

  const before = srcInfo.size;
  await sharp(src)
    .webp({ quality: 82, effort: 4 })
    .toFile(dest);
  const after = statSync(dest).size;
  savedKb += Math.max(0, (before - after) / 1024);

  console.log(
    `${file} -> ${basename(dest)} : ${(before / 1024).toFixed(0)} Ko -> ${(after / 1024).toFixed(0)} Ko`
  );
  converted++;
}

console.log(
  `\nOptimisation images : ${converted} converties, ${skipped} à jour, ${savedKb.toFixed(0)} Ko économisés`
);
