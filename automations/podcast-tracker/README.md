# Podcast Tracker

Track new episodes from your podcast subscriptions via RSS feeds.

## What It Does

1. **Fetches RSS feeds** from your configured podcast list
2. **Tracks seen episodes** in a state file to avoid duplicates
3. **Notifies you** of new episodes with title and link

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `rss` | http / rss-fetch |
| `cron` | built-in scheduler |

## Configuration

```yaml
config:
  podcast_feeds: "https://feed1.xml,https://feed2.xml"  # Required
  state_file: "podcast-tracker-state.json"               # Default
```

## Schedule

Runs daily at 7:00 AM (`0 7 * * *`).

## Install

```bash
lobster install podcast-tracker
```
