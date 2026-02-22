# Subscription Auditor

Monthly audit of your active subscriptions to flag unused or duplicate services and track total spend.

## What It Does

1. **Scans subscriptions** - Reviews your tracked subscription list
2. **Flags issues** - Identifies unused, duplicate, or price-increased services
3. **Reports** - Monthly summary with total spend and savings opportunities

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `email` | email, agentmail |
| `exec` | shell |

## Configuration

```yaml
config:
  subscriptions_file: "subscriptions.json"  # Path to subscription data
  unused_threshold_days: 30                  # Days without use to flag
```

## Schedule

Monthly on the 1st at 9:00 AM.

```yaml
trigger:
  schedule: "0 9 1 * *"
```

## Install

```bash
openclaw install subscription-auditor
```
