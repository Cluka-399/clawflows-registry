# Pricing Page Change Detector

Pricing-page changes matter because they often signal packaging strategy, not just copy tweaks.

## What It Does

1. Captures current pricing pages for your watchlist
2. Pulls extra context around pricing or launch chatter
3. Uses an LLM to summarize what changed
4. Explains whether the move matters strategically
5. Suggests react, monitor, or ignore

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `browser` | browser / scraping tools |
| `web-search` | brave / search adapters |
| `llm` | summarization/reasoning model |

## Schedule

Default: every 8 hours.

```yaml
trigger:
  schedule: "0 */8 * * *"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
