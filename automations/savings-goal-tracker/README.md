# Savings Goal Tracker

Track progress toward savings goals with milestone celebrations.

## What It Does

1. **Tracks savings** against configured goals
2. **Calculates progress** as percentage and remaining amount
3. **Celebrates milestones** at 25%, 50%, 75%, and 100%
4. **Weekly updates** with progress summary

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | shell execution |
| `discord` | discord messaging |
| `cron` | built-in scheduler |

## Configuration

```yaml
config:
  goals_file: "savings-goals.json"  # Goal definitions
  currency: "ILS"                    # Currency symbol
```

## Schedule

Runs weekly on Monday mornings (`0 9 * * 1`).

## Install

```bash
lobster install savings-goal-tracker
```
