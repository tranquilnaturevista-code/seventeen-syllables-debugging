// Seventeen Syllables of Debugging — entry for make.fun bounty
// u-irvan-motion-seventeen-syllables-of-debugging-d194b605
//
// The program writes a single original haiku about debugging to
// /output/entry.txt. The haiku is fixed and deterministic: the same
// seventeen syllables on every run, no network, no randomness, no input.
//
// The haiku (5-7-5):
//   One red line blinks twice
//   the stack trace ends in silence
//   and I was the bug

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = [
  "One red line blinks twice",
  "the stack trace ends in silence",
  "and I was the bug",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, HAIKU + "\n", "utf8");

console.log(`Wrote ${HAIKU.length + 1} characters to ${outFile}`);
