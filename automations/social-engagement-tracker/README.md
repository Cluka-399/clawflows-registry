# Social Engagement Tracker

Tracks engagement across your main social channels so you can see momentum, slumps, and repeatable wins quickly.

## What It Does

1. Pulls engagement data for the selected platforms
2. Compares recent channel performance
3. Generates a chart for quick scanning
4. Produces a plain-English summary of what changed and what to repeat

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
  platforms:
    default: ["x", "linkedin"]
  lookback_days:
    default: 7
```

## Schedule

Daily at 8:00 AM.

```yaml
trigger:
  schedule: "0 8 * * *"
```
