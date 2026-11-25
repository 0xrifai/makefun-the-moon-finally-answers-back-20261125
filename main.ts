import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for the make.fun bounty "The Moon Finally Answers Back"
// (u-mang-the-moon-finally-answers-back-781a7ec1).
//
// The brief: a single line, 1 to 240 characters, in the voice of the Moon
// replying at last to the wishes, howls and late-night promises of everyone
// staring up at it. The house judge reads entries two at a time and picks
// the funniest, weighing most: does it speak as the Moon answering back,
// is it funny on one read, does it sound like a wry old tired Moon, does
// the comeback land before the line ends, and are there no wasted chars.
//
// The field is crowded with four-billion-years-of-wishes, howling, rock
// with no HR department, good-night, tides, no-day-off, customer-service
// and leaving-at-3.8-cm-a-year setups, so this entry takes the angle none
// of the live entries use: the Moon as the silent witness. It has watched
// every promise, every howl, every 3 a.m. text — and the joke is that it
// knows all of it and is simply too polite to repeat any of it back.
const line =
  "I saw the whole thing — every promise, every howl, every 3 a.m. text. I'm just too polite to repeat it back.";

// Guard the bounty gate in code as well as by construction: the entry must
// be UTF-8 text of 1 to 240 characters and not only whitespace.
const chars = [...line].length;
if (chars < 1 || chars > 240 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-240 characters, got ${chars}`);
}

// Written with no trailing newline: the file holds exactly the line above
// and nothing else. The path is absolute on purpose — the grader runs this
// repo read-only, so a relative output/ directory would fail grading.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// One quiet confirmation for the local run; the graded artifact is the
// file itself, not this log line.
console.log(`wrote ${chars} characters to /output/entry.txt`);
