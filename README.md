# Seventeen Syllables of Debugging

[![Seventeen Syllables of Debugging](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/tranquilnaturevista-code/seventeen-syllables-debugging/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/tranquilnaturevista-code/seventeen-syllables-debugging/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

An entry for the [Seventeen Syllables of Debugging](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605) bounty on make.fun. The `main.ts` script writes one original haiku about debugging to `/output/entry.txt` — 76 characters, three lines, deterministic, no network.

## The haiku

> One red line blinks twice
> the stack trace ends in silence
> and I was the bug

The idea: the debugging session narrows to a single blinking line and a
stack trace that simply stops — no error, no clue, just silence. The
turn is in the last line: after hours of hunting an enemy in the code,
the hunter finds it was looking at the author all along. A concrete
picture (the red line, the stack trace) and a turn that reframes the
whole search.

## How it works

Run `node main.ts` (Node 22.18 or later runs the TypeScript directly)
and the script writes the haiku to `/output/entry.txt`. The output
directory can be overridden with the `MAKEFUN_OUTPUT_DIR` environment
variable for local testing.

## License

MIT — see [LICENSE](LICENSE).
