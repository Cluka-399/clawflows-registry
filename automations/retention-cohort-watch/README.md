# Retention Cohort Watch

Acquisition spikes are cute. Retention is what tells you whether you built something people actually come back to.

## What It Does

1. Pulls retention cohorts from your analytics stack
2. Compares key periods like day 1, day 7, and day 30
3. Generates a visual trend chart
4. Flags the cohort or time bucket that started weakening
5. Produces a plain-English explanation and first investigation direction

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `analytics` | agent-analytics |
| `chart-generation` | chart-image |
| `llm` | summarization/reasoning model |

## Schedule

Default: daily at 08:00.

```yaml
trigger:
  schedule: "0 8 * * *"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
