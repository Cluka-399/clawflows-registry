# Budget Tracker

Track spending against monthly budgets and get alerts when nearing limits.

## What It Does

1. **Reads spending data** - Loads transactions from configured source
2. **Compares to budgets** - Checks spending vs. category limits
3. **Alerts on thresholds** - Notifies when you're approaching or exceeding budget

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | file system access |
| `discord` | notifications |

## Configuration

```yaml
config:
  budget_file: "budgets.json"
  alert_threshold: 0.8   # Alert at 80% spent
```

## Schedule

Daily at 8pm: `0 20 * * *`

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
