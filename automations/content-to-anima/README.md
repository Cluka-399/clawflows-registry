# Content to Anima Pipeline

Find trending ideas on Reddit/X, generate 3 visual concepts with Gemini, let user pick one, then build it on Anima — from idea to live site in minutes.

## What It Does

1. Searches Reddit or X for trending content matching your query
2. Generates 3 visual concept images using Gemini (minimal, bold, dark mode)
3. User picks their favorite concept
4. Deconstructs the chosen design into a detailed prompt
5. Sends to Anima to build a live web page
6. Publishes and delivers a screenshot + live URL

## Requirements

| Capability | Description |
|-----------|-------------|
| `web-search` | Search Reddit/X for trending ideas |
| `browser` | Screenshot the published result |
| `discord` | Deliver results to user |

## Parameters

| Key | Required | Default | Description |
|-----|----------|---------|-------------|
| `source` | Yes | — | Where to find ideas: `reddit`, `x`, or a direct topic |
| `query` | Yes | — | Search query or topic |
| `subreddit` | No | — | Subreddit to search (if source is reddit) |
| `framework` | No | `react` | Anima framework: `react` or `html` |
| `styling` | No | `tailwind` | Anima styling: `tailwind`, `css`, `inline_styles` |

## Trigger

Manual — user-initiated pipeline.

## Install

```yaml
automation: content-to-anima
config:
  source: "reddit"
  query: "SaaS dashboards"
  framework: "react"
  styling: "tailwind"
```
