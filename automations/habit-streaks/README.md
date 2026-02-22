# Habit Streaks

Track daily habits with streak counters and accountability reminders.

## What It Does

1. **Tracks habits** you define (exercise, reading, meditation, etc.)
2. **Maintains streak counts** for consecutive days completed
3. **Sends reminders** and celebrates milestones

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `cron` | cron |
| `discord` | discord |

## Configuration

```yaml
config:
  habits:
    - name: "Exercise"
    - name: "Read 30min"
    - name: "Meditate"
```

## Schedule

Runs daily at 9:00 PM UTC for end-of-day check-in.

## Install

```bash
openclaw install habit-streaks
```
