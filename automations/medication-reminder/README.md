# Medication Reminder

Configurable medication reminders with confirmation tracking.

## What It Does

1. **Sends reminders** - Notifies you when it's time to take medication
2. **Tracks confirmation** - Records whether you acknowledged the reminder
3. **Reports adherence** - Weekly summary of medication compliance

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `discord` | discord (or telegram) |

## Configuration

```yaml
config:
  medications:
    - name: "Vitamin D"
      times: ["08:00", "20:00"]
```

## Schedule

Runs at 8:00 AM and 8:00 PM daily (`0 8,20 * * *`).

## Install

```bash
openclaw install medication-reminder
```
