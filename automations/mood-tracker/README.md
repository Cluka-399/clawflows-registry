# Mood Tracker

Daily mood check-ins with pattern analysis and insights.

## What It Does

1. **Daily check-in** - Prompts you to log your mood and notes
2. **Pattern analysis** - Identifies trends over time
3. **Insights** - Weekly summary with correlations and suggestions

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `discord` | discord (or telegram) |

## Configuration

```yaml
config:
  check_in_time: "21:00"
  scale: 1-10
```

## Schedule

Runs daily at 9:00 PM (`0 21 * * *`).

## Install

```bash
openclaw install mood-tracker
```
