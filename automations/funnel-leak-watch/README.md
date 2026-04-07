# Funnel Leak Watch

If conversion suddenly gets worse, this workflow should tell you where the bucket started leaking before everyone starts guessing.

## What It Does

1. Pulls ordered funnel-step data from your analytics source
2. Compares recent performance across the funnel
3. Highlights the stage with the biggest abnormal drop
4. Generates a chart so the problem is visible immediately
5. Produces a plain-English summary with the first thing to inspect

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `analytics` | agent-analytics |
| `chart-generation` | chart-image |
| `llm` | summarization/reasoning model |

## Schedule

Default: hourly.

```yaml
trigger:
  schedule: "0 * * * *"
```

## Why It Exists

Because "conversion is down" is too vague to act on.

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
