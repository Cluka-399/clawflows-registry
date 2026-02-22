# Expense Tracker

Track and categorize expenses with weekly summaries and budget monitoring.

## What It Does

1. **Loads expenses** - Reads from your expense log
2. **Analyzes spending** - Weekly and monthly totals by category
3. **Budget alerts** - Warns when you're over budget

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `cron` | cron |

## Configuration

```yaml
config:
  expenses_file: "expenses.json"  # JSON file with expense entries
  budget: 5000                     # Monthly budget
  categories: "food,transport,entertainment,utilities,shopping,other"
```

## Schedule

Default: Sunday 6:00pm.

```yaml
trigger:
  schedule: "0 18 * * 0"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
