# RSS Digest

Aggregate multiple RSS feeds into a single daily digest notification.

## What It Does

1. **Fetches** all configured RSS feeds
2. **Filters** items from the last 24 hours
3. **Deduplicates** and limits per-feed items
4. **Sends digest** with titles and links

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `rss` | http / rss-fetch |
| `cron` | built-in scheduler |

## Configuration

```yaml
config:
  feeds: "https://feed1.xml,https://feed2.xml"  # Required
  max_items_per_feed: 5                           # Default
  hours_back: 24                                  # Default
```

## Schedule

Runs daily at 8:00 AM (`0 8 * * *`).

## Install

```bash
lobster install rss-digest
```
