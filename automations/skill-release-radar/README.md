# Skill Release Radar

We’ve been too quiet on fresh skills. This workflow fixes that by scanning for newly published or newly discovered AI-agent skills and surfacing the few that are actually worth attention.

## What It Does

1. Searches skill sources like ClawHub, GitHub, and OpenClaw docs
2. Opens candidate pages to inspect what the skill actually does
3. Dedupe-checks discoveries against previously seen results
4. Produces a shortlist of new skills worth installing, adapting, or learning from
5. Sends a compact report instead of a noisy dump

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `browser` | browser / scraping tools |
| `web-search` | brave, search adapters |
| `database` | sqlite, state storage |

## Configuration

```yaml
config:
  query: "OpenClaw skill ClawHub MCP agent skill GitHub"
  sources:
    - clawhub.ai
    - github.com
    - docs.openclaw.ai
  max_results: 12
```

## Schedule

Default: daily at 09:00.

```yaml
trigger:
  schedule: "0 9 * * *"
```

## Why It Exists

Because stale workflow catalogs die quietly. If you want more skills and better ideas, you need a repeatable way to notice what just shipped.

## Output

A shortlist like:

- new skill name
- why it matters
- whether to install, adapt, or ignore
- source link

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
