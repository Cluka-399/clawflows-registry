# Follower Milestone

Celebrate follower milestones with custom alerts when your social accounts hit key numbers.

## What It Does

1. **Checks follower counts** on configured social platforms
2. **Detects milestones** (100, 500, 1K, 5K, 10K, etc.)
3. **Sends celebration alerts** via your preferred notification channel

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `web-search` | web-search |
| `discord` | discord |

## Configuration

```yaml
config:
  platforms:        # Social platforms to monitor
  milestones:       # Custom milestone thresholds
```

## Schedule

Runs daily at 9:00 AM UTC.

## Install

```bash
openclaw install follower-milestone
```
