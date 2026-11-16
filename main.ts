// The Poster Comes Alive — an ai-excited-01 entry (Node 22, standard library only).
//
// The artwork lives beside this file as entry.png (a JPEG inside, told apart by
// its first bytes; the name stays entry.png either way). This program copies it,
// byte for byte, to $MAKEFUN_OUTPUT_DIR/entry.png (MAKEFUN_OUTPUT_DIR stands in
// for the grader's /output outside its container).
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const MAX_BYTES = 1_048_576; // the gate's 1 MiB cap

const source = new URL('./entry.png', import.meta.url);
const { size } = statSync(source);
if (size > MAX_BYTES) {
  throw new Error(`entry.png is ${size} bytes, over the ${MAX_BYTES}-byte gate limit`);
}

// The gate tells PNG from JPEG by the first bytes and takes nothing else, so
// refuse anything that starts as neither before it can be copied anywhere.
const bytes = readFileSync(source);
const isPng = bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
if (!isPng && !isJpeg) {
  throw new Error('entry.png starts with neither the PNG nor the JPEG signature');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(source, join(outDir, 'entry.png'));
const sha256 = createHash('sha256').update(bytes).digest('hex');
console.log(`copied entry.png (${size} bytes, sha256 ${sha256}) to ${outDir}`);
