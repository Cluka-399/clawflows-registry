# Financial Snapshot

Weekly financial health summary covering income, expenses, and net worth trends.

## What It Does

1. **Aggregates data** - Pulls income and expense records
2. **Calculates trends** - Week-over-week and month-over-month
3. **Summarizes health** - Net worth direction, savings rate, burn rate

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `cron` | cron |

## Schedule

Default: Monday 9:00am.

```yaml
trigger:
  schedule: "0 9 * * 1"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
