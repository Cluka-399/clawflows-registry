# Onboarding Dropoff Explainer

If people hit your signup flow and vanish, this workflow is for figuring out where they bailed and what probably made them bounce.

## What It Does

1. Pulls the onboarding funnel from analytics
2. Fetches example drop-off sessions around the weak step
3. Uses an LLM to explain the likeliest source of friction
4. Recommends the first fix worth testing
5. Turns vague onboarding anxiety into a concrete diagnosis

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `analytics` | agent-analytics |
| `session-replay` | replay/session tools |
| `llm` | summarization/reasoning model |

## Schedule

Default: every 4 hours.

```yaml
trigger:
  schedule: "0 */4 * * *"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
