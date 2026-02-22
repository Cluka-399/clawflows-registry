# Invoice Reminder

Track unpaid invoices and send payment reminders at configurable intervals.

## What It Does

1. **Scans invoice records** - Checks for unpaid/overdue invoices
2. **Sends reminders** - Emails payment reminders to clients at configurable intervals
3. **Tracks status** - Maintains payment confirmation state

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `email` | agentmail, smtp |

## Configuration

```yaml
config:
  reminder_intervals: [7, 14, 30]  # Days after due date
  email_template: "default"
```

## Schedule

Runs weekdays at 9:00 AM (`0 9 * * 1-5`).

## Install

```bash
openclaw install invoice-reminder
```
