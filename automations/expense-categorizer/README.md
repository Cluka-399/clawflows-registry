# Expense Categorizer

Auto-categorize expenses from email receipts and bank notifications.

## What It Does

1. **Scans emails** - Finds receipts and bank notifications
2. **Extracts amounts** - Parses transaction details
3. **Categorizes** - Assigns categories (food, transport, entertainment, etc.)

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `email` | agentmail, gmail |

## Schedule

Default: 8:00pm daily.

```yaml
trigger:
  schedule: "0 20 * * *"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
