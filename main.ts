// Seventeen Syllables of Debugging — "Works on my machine".
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 14 candidates scored against the judge's published criteria, in
// order: (1) exact 5-7-5 haiku about debugging, (2) a concrete and fresh
// picture at its centre, (3) a last line that turns and reframes what came
// before, (4) every word earns its place, (5) reads aloud like speech.
//
// Candidates: breakpoint loop, print statement, git blame, rubber duck,
// off-by-one fence, stack trace, lying comment, heisenbug, works-on-my-
// machine, merge conflict, old TODO, missing dot, blinking cursor, slow leak.
//
// Why "Works on my machine" wins:
// - Criterion 2: concrete and fresh. A server and a machine — the two most
//   concrete objects in debugging — with no 3am, no coffee, no mysterious
//   error, the cliches most of a ~2958-entry field will lean on.
// - Criterion 3: the turn lands hardest. Line 1 states the classic defense,
//   line 2 is the server's silent refusal, and line 3 destroys the defense
//   itself: my machine fails too. The last line reframes the first line,
//   not just the second.
// - Criterion 4: 13 words, zero filler. "Nothing" does double duty — it is
//   both the silence and the answer.
// - Criterion 5: it reads like speech because it IS speech developers
//   actually say.
// Rejected runners-up: the off-by-one fence ("the fence has ten posts,
// nine gaps / still count eleven") has the freshest image, but its turn
// needs the judge to do fencepost arithmetic; the lying comment ("since
// the first commit") is sharp but its turn reframes only the timeline,
// not the premise; the heisenbug ("the bug knows we watch") is concrete
// but its turn is a joke about the bug, not about the debugger.
//
// Gate: 3 lines, 5-7-5 syllables, 66 characters (limit 1-200).
// Syllables: Works(1) on(1) my(1) ma-chine(2) = 5; the(1) serv-er(2)
// an-swers(2) no-thing(2) = 7; so(1) does(1) my(1) ma-chine(2) = 5.
// Total 17.
const ENTRY = `Works on my machine
the server answers: nothing
so does my machine`;

import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
