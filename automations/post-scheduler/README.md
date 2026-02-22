# Post Scheduler

Schedule and auto-post content at optimal times across platforms.

## What It Does

1. **Reads scheduled posts** from a queue file
2. **Checks timing** against optimal posting windows
3. **Publishes content** when the scheduled time arrives
4. **Tracks results** for posted content

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | shell execution |
| `cron` | built-in scheduler |

## Configuration

```yaml
config:
  queue_file: "post-queue.json"   # Scheduled posts
  platforms: ["discord"]          # Target platforms
```

## Schedule

Checks every 15 minutes (`*/15 * * * *`).

## Install

```bash
lobster install post-scheduler
```
