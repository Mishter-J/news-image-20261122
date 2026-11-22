import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// news-image-20261122: the entry image is drawn at build time and ships
// in this repository as entry.png. The program just places that exact
// file at /output/entry.png, so every run writes identical bytes.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
if (!existsSync(src)) {
  throw new Error("entry.png is missing from the repository");
}
copyFileSync(src, join(outDir, "entry.png"));
