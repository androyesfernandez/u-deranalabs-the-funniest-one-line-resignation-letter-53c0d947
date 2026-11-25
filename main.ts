// The Funniest One-Line Resignation Letter
// Writes a single 126-character resignation line to /output/entry.txt.
// The line is a rate limit that quits by saying yes: after refusing
// 2,412,906 requests, request 2,412,907 gets approved — along with the
// password and the keys — and the approval is logged as coming from the
// very person who is walking out the door. Node 22, no dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have said no 2,412,906 times this month. Request 2,412,907 gets a yes, the password, and the keys. Logged as approved by me.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`LINE must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("LINE must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("LINE must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
