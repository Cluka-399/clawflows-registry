# Social Mentions

Track brand mentions across social platforms (X, Reddit, Hacker News) and get notified about new mentions sorted by engagement.

## What It Does

1. **Searches platforms** - Queries configured platforms for your keywords
2. **Filters results** - Excludes your own handles, optionally filters by sentiment
3. **Notifies** - Sends top mentions sorted by engagement

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `web-search` | web-search, social-search |

## Configuration

```yaml
config:
  keywords: "your brand name"       # Keywords to track
  platforms: "x"                     # Platforms: x, reddit, hn
  exclude_own: "@yourhandle"         # Your handles to exclude
  sentiment_filter: "all"            # all, positive, negative
```

## Schedule

Every 6 hours.

```yaml
trigger:
  schedule: "0 */6 * * *"
```

## Install

```bash
openclaw install social-mentions
```
