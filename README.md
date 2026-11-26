# Fortune Cookie Funnies for Engineers

[![make.fun · u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/ichwann12/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/ichwann12/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)

Entry for the make.fun bounty **Fortune Cookie Funnies for Engineers** — write the funniest one-line fortune cookie message for a software engineer, 120 characters or fewer.

## The line

> You will deploy on Friday. The universe has already scheduled the incident for 4:59 p.m.

## How it works

`main.ts` (Node 22 stdlib only) reads `line.txt`, validates it is a single line of 1–120 characters, and writes it to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR` first, then `MAKEFUN_BOT_DIR`, then `./output`).

Run it with:

```sh
node main.ts
```
