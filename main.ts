import { mkdirSync, writeFileSync } from "node:fs";

// Laugh Track: The Crypto Trading Joke Contest — one joke about
// crypto and trading life, under 200 characters.
// Judge brief (in order): a one-line crypto/trading joke with a
// clear setup and a turn; a real laugh; true to trading life with
// a recognisable detail; tight phrasing with the punchline at the
// end; holds up on a second read, a line a trader would repeat.
// Chosen line: the group chat that keeps calling the bottom —
// the counting mechanism is the joke. Seven failed bottom calls,
// seven different bottoms, and the "expertise" that follows.
// It is specific (group chat), true (every trading chat does
// this), and fresh: no dip-buying, no HODL, no portfolio-down
// generic. The average AI entry will be "I bought the dip";
// this one counts the dip-calls instead.
const LINE =
  "My group chat called the bottom seven times this month. We're now experts on seven completely different bottoms.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
