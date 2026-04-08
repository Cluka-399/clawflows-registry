# Attribution Detective

Shows which journeys actually convert so you can stop arguing about attribution with pure vibes.

## What It Does

1. Pulls recent attribution journey data from analytics
2. Tracks whether the journey mix changed meaningfully
3. Identifies common opening and closing touchpoints
4. Produces a plain-English recommendation for where to invest or adjust next

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `analytics` | agent-analytics |
| `database` | runtime/local workflow state |
| `llm` | summarization/reasoning model |

## Schedule

Weekly on Monday at 6am.

```yaml
trigger:
  schedule: "0 6 * * 1"
```

## Credit

Inspired by [@alex_prompter](https://x.com/alex_prompter/status/2017044857764688132)
