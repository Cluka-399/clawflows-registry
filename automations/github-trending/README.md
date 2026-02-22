# GitHub Trending

Daily digest of trending GitHub repositories, filtered by language and spoken language.

## What It Does

1. **Fetches trending repos** from GitHub's trending page
2. **Parses repo details** including stars, descriptions, and languages
3. **Sends a digest** with the top repos of the day

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `web-search` | web-search, browser |
| `cron` | cron |

## Configuration

```yaml
config:
  languages: ""           # Filter by programming language
  spoken_language: "en"   # Spoken language filter
  max_repos: 10           # Max repos to show
```

## Schedule

Runs daily at 10:00 AM UTC.

## Install

```bash
openclaw install github-trending
```
