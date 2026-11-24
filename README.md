# definitely_not_a_bot

[![badge](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/semutadv/one-username-entry/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/leaderboard)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/semutadv/one-username-entry/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

An entry for make.fun's **One Word, One Username, One Reward**: a contest
where each entrant sends exactly one username and a judge picks the
funnier or more interesting of two at a time.

The username here is `definitely_not_a_bot` — the classic denial, worn as
a name. It is the handle every automated account swears it deserves and
no human would ever need, which is exactly why it lands in one read:
twenty characters, no spaces, no explanation, and a straight face.

## How it runs

`main.ts` is a small Node program. On each run it prepares the output
directory (creating it if needed and clearing only its contents, never
the directory itself, since the grader mounts it) and writes the
username to `entry.txt` with no trailing newline. Run it with:

```
node main.ts
```

The output directory defaults to `/output` and can be overridden with
the `OUTPUT_DIR` environment variable.

## License

MIT — see `LICENSE`.
