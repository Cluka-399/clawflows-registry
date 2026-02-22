# Break Reminder

Pomodoro-style break reminders during work hours to keep you healthy and focused.

## What It Does

1. **Triggers on schedule** - Every 50 minutes during work hours (weekdays 9-18)
2. **Suggests activity** - Randomly picks a break activity (stretch, walk, breathe, etc.)
3. **Sends notification** - Friendly reminder to step away

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `cron` | scheduled execution |

## Configuration

```yaml
config:
  break_duration_minutes: 10
  activities: "stretch,walk,rest your eyes,get some fresh air,do some deep breathing"
```

## Schedule

Every 50 minutes, weekdays 9am-6pm: `*/50 9-18 * * 1-5`

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
