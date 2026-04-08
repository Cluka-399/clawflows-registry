# Audience Growth Report

Weekly audience-growth pulse for teams who want to know what is actually moving, not just stare at charts and vibe.

## What It Does

1. Pulls audience growth data from analytics for the selected channels or segments
2. Compares the latest reporting window across those channels
3. Generates a chart so growth and slowdown are obvious at a glance
4. Produces a plain-English summary that says what is winning, what is stalling, and what to inspect next

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `analytics` | agent-analytics |
| `chart-generation` | chart-image |
| `llm` | summarization/reasoning model |

## Configuration

```yaml
config:
  project:
    default: "main-site"
  channels:
    default: ["twitter", "linkedin", "newsletter"]
  lookback_days:
    default: 7
```

## Schedule

Weekly on Monday at 9am: `0 9 * * 1`

## Why It Exists

Because "audience is up" is too vague to help anyone decide what to do next.

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
