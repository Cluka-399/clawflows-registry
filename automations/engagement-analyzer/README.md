# Engagement Analyzer

Finds what content is actually earning attention so your content plan stops being guesswork.

## What It Does

1. Pulls recent content engagement data from analytics
2. Identifies formats or content types that outperform the rest
3. Calls out weak performers
4. Produces a plain-English recommendation for what to publish more often next

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `analytics` | agent-analytics |
| `llm` | summarization/reasoning model |

## Schedule

Default: Monday 10:00am weekly.

```yaml
trigger:
  schedule: "0 10 * * 1"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
