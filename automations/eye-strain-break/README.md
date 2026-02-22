# Eye Strain Break

20-20-20 rule reminders — every 20 minutes, look at something 20 feet away for 20 seconds.

## What It Does

1. **Triggers every 20 min** - During work hours
2. **Sends reminder** - Quick nudge to look away from the screen

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `cron` | cron |

## Schedule

Default: every 20 minutes.

```yaml
trigger:
  schedule: "*/20 * * * *"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
