# Experiment Backlog Ranker

Most growth backlogs are a junk drawer. This workflow ranks ideas so the next test is chosen for a reason, not because someone shouted loudest.

## What It Does

1. Loads experiment ideas from your backlog source
2. Pulls supporting evidence from analytics
3. Scores ideas by likely impact, effort, and confidence
4. Produces a top-five shortlist for the next cycle
5. Explains why each recommendation made the cut

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `database` | sqlite / backlog store |
| `analytics` | agent-analytics |
| `llm` | summarization/reasoning model |

## Schedule

Default: every Monday morning.

```yaml
trigger:
  schedule: "0 9 * * 1"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
