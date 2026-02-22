# Posture Check

Regular posture reminders during work hours to keep you ergonomically healthy.

## What It Does

1. **Sends reminders** at regular intervals during work hours
2. **Varies messages** to keep them fresh and engaging
3. **Respects off-hours** — only runs during configured work times

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `cron` | built-in scheduler |
| `discord` | discord messaging |

## Configuration

```yaml
config:
  work_start: 9        # Start hour
  work_end: 17          # End hour
  interval_minutes: 60  # Reminder frequency
```

## Schedule

Runs hourly during work hours, weekdays (`0 */1 9-17 * * 1-5`).

## Install

```bash
lobster install posture-check
```
