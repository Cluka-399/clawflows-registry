# Sleep Schedule Optimizer

Analyze your sleep patterns and suggest optimal bedtimes based on your calendar for the next day.

## What It Does

1. **Reads sleep logs** - Tracks your sleep/wake patterns from logged data
2. **Checks calendar** - Looks at tomorrow's first event to calculate wake time
3. **Suggests bedtime** - Recommends when to sleep for optimal rest

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `calendar` | caldav-calendar, google-calendar |
| `exec` | shell |

## Configuration

```yaml
config:
  sleep_hours: 8           # Desired sleep duration
  wind_down_min: 30        # Minutes before sleep to start winding down
```

## Schedule

Daily at 9:00 PM.

```yaml
trigger:
  schedule: "0 21 * * *"
```

## Install

```bash
openclaw install sleep-schedule-optimizer
```
