# Competitor Launch Explainer

Most competitor alerts are just noise. This workflow is for spotting the launches that actually matter and translating them into positioning implications.

## What It Does

1. Searches for new launches, releases, or changelog items from competitor companies
2. Pulls social chatter for extra context and early reactions
3. Uses an LLM to separate signal from noise
4. Explains what changed, why it matters, and what to watch next
5. Gives a strategic brief instead of a messy link dump

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `web-search` | brave / search adapters |
| `social-search` | search-x |
| `llm` | summarization/reasoning model |

## Schedule

Default: every 6 hours.

```yaml
trigger:
  schedule: "0 */6 * * *"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
