# Social Engagement Tracker

Track engagement metrics (likes, replies, shares) across your social platforms and identify trends.

## What It Does

1. **Fetches metrics** - Pulls engagement data from configured platforms
2. **Tracks trends** - Compares with historical data
3. **Reports** - Summarizes top-performing content and engagement changes

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `web-search` | web-search |
| `exec` | shell |

## Configuration

```yaml
config:
  platforms: "x,linkedin"   # Platforms to track
  report_period: "7d"       # Reporting period
```

## Schedule

Daily at 8:00 AM.

```yaml
trigger:
  schedule: "0 8 * * *"
```

## Install

```bash
openclaw install social-engagement-tracker
```
