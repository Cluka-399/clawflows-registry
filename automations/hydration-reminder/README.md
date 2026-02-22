# Hydration Reminder

Smart water reminders adjusted for activity level and weather conditions.

## What It Does

1. **Checks weather** to adjust hydration needs (hotter = more water)
2. **Sends periodic reminders** throughout the day
3. **Tracks intake** if you log your glasses

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `weather` | weather |
| `cron` | cron |
| `discord` | discord, telegram |

## Configuration

```yaml
config:
  location: "Tel Aviv"
  daily_goal_ml: 2500
  reminder_interval: "2h"
```

## Schedule

Runs every 2 hours from 8 AM to 8 PM UTC.

## Install

```bash
openclaw install hydration-reminder
```
