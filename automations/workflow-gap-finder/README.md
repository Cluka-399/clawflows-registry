# Workflow Gap Finder

If you keep doing the same annoying task by hand, this workflow should be the one that notices first.

## What It Does

1. Looks for repeated manual work across your chosen sources
2. Pulls surrounding context so it is not guessing from a raw count alone
3. Uses an LLM to rank the best automation opportunities
4. Recommends the smallest useful workflow to build next
5. Turns vague "we should automate more" energy into an actual backlog

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `database` | sqlite / notes store |
| `browser` | browser / page inspection |
| `llm` | summarization or reasoning model |

## Schedule

Default: Monday, Wednesday, Friday at 18:00.

```yaml
trigger:
  schedule: "0 18 * * 1,3,5"
```

## Why It Exists

Because most teams do not have an idea problem. They have a noticing problem.

## Output

A ranked shortlist of:
- repeated manual tasks
- why each is automation-worthy
- the first minimal workflow to build
- expected payoff

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
