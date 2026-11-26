// Fortune Cookie Funnies for Engineers — entry program.
// Reads the single fortune-cookie line from line.txt, validates it,
// and writes it to entry.txt in the output directory.
//
// Output directory resolution (in order):
//   1. MAKEFUN_OUTPUT_DIR  (the grader's writable output dir — preferred)
//   2. MAKEFUN_BOT_DIR     (fallback)
//   3. ./output            (local fallback)
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const linePath = join(here, "line.txt");

const raw = readFileSync(linePath, "utf8");

// The entry must be exactly one line of 1-120 characters.
const lines = raw.split("\n");
if (lines.length > 2 || (lines.length === 2 && lines[1] !== "")) {
  throw new Error("line.txt must contain exactly one line");
}
const line = lines[0];
if (line.length < 1 || line.length > 120) {
  throw new Error(
    `fortune line must be 1-120 characters, got ${line.length} — shorten it before submitting`
  );
}
if (line.trim().length === 0) {
  throw new Error("fortune line must not be only whitespace");
}
// Reject control characters (other than none expected here) so the sealed
// scorer never sees non-printable bytes in entry.txt.
if (/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(line)) {
  throw new Error("fortune line must not contain control characters");
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_BOT_DIR ||
  join(here, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${line.length}-char entry to ${join(outDir, "entry.txt")}`);
