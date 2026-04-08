# Landing Page Winner Detector

A lot of teams call winners too early. This workflow is for deciding whether the lift is actually real enough to ship.

## What It Does

1. Pulls variant performance for a landing-page experiment
2. Checks whether the result is actually meaningfully different
3. Looks for changes since the last review so alerts are not spammy
4. Explains whether a winner exists yet
5. Recommends ship, wait, or keep collecting data

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `analytics` | agent-analytics |
| `llm` | summarization/reasoning model |
| `database` | sqlite / state tracking |

## Schedule

Default: every 20 minutes.

```yaml
trigger:
  schedule: "*/20 * * * *"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
