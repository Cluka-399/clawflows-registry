# Revival Campaign Picker

If users are slipping away, this workflow helps decide who is actually worth trying to win back first.

## What It Does

1. Pulls dormant or slipping user segments from analytics
2. Ranks segments by recovery potential
3. Suggests a reactivation angle for each segment
4. Prepares a campaign draft for the best audience
5. Gives retention work a sharper target than "email everyone"

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `analytics` | agent-analytics |
| `email` | agentmail |
| `llm` | summarization/reasoning model |

## Schedule

Default: Tuesday and Friday at 10:00.

```yaml
trigger:
  schedule: "0 10 * * 2,5"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
