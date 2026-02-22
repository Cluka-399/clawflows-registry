# Bill Due Reminder

Track recurring bills and send reminders before due dates so you never miss a payment.

## What It Does

1. **Reads bill schedule** - Loads your configured recurring bills with due dates
2. **Checks upcoming** - Finds bills due in the next few days
3. **Sends reminders** - Notifies you before each bill is due

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `cron` | scheduled execution |
| `discord` | notifications |

## Configuration

```yaml
config:
  bills_file: "bills.json"
  remind_days_before: 3
```

## Schedule

Daily at 9am: `0 9 * * *`

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
