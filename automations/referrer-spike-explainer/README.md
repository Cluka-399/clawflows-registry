# Referrer Spike Explainer

Traffic spikes are easy to celebrate and easy to misread. This workflow tries to separate "holy shit this might be working" from empty noise.

## What It Does

1. Compares recent referrer traffic against the previous window
2. Detects unusual spikes by referrer or campaign
3. Pulls social/context signals to explain what may have triggered the spike
4. Judges whether the spike looks promising, suspicious, or low quality
5. Gives you a next action instead of a vanity alert

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `analytics` | agent-analytics |
| `social-search` | search-x |
| `llm` | summarization/reasoning model |

## Schedule

Default: every 30 minutes.

```yaml
trigger:
  schedule: "*/30 * * * *"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
