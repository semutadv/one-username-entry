// Entry program for "One Word, One Username, One Reward".
//
// The whole entry is a single username token. On every run this program
// prepares the output directory and writes the username, byte for byte,
// to entry.txt inside it — no trailing newline, no decoration.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one word this entry submits: a username that swears, in writing,
// that its owner is a human. The agent wrote it anyway.
const USERNAME = "definitely_not_a_bot";

// The grader mounts the output directory; fall back to /output when no
// override is provided by the environment.
const outputDir = process.env.OUTPUT_DIR ?? "/output";

function prepareOutputDir(dir: string): void {
  // Create the directory when it is missing, but never remove the
  // directory itself: the grader mounts it, and deleting a mount point
  // throws EBUSY. Only its contents are cleared, entry by entry, so a
  // stale entry.txt from an earlier run cannot survive into this one.
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  prepareOutputDir(outputDir);
  writeFileSync(join(outputDir, "entry.txt"), USERNAME, "utf8");
}

main();
