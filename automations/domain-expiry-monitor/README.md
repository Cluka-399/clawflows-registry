# Domain Expiry Monitor

Monitor domain registration expiration dates and get alerts before they lapse.

## What It Does

1. **Checks WHOIS** - Queries expiration dates for your domains
2. **Classifies urgency** - Warning vs critical based on days remaining
3. **Alerts** - Notifies you with time-to-renew for each domain

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | shell (whois) |

## Configuration

```yaml
config:
  domains: "example.com,mysite.io"  # Comma-separated domains
  warning_days: 60                   # Days before expiry to warn
  critical_days: 30                  # Days for critical alert
```

## Schedule

Default: Monday 9:00am.

```yaml
trigger:
  schedule: "0 9 * * 1"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
