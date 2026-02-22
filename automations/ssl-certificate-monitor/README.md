# SSL Certificate Monitor

Monitor SSL certificate expiration dates for your domains and alert before they expire.

## What It Does

1. **Checks certificates** - Uses OpenSSL to query certificate expiry for each domain
2. **Categorizes** - Flags critical (<7 days) and warning (<30 days) certificates
3. **Alerts** - Sends prioritized notifications for expiring certs

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | shell |

## Configuration

```yaml
config:
  domains: "example.com,api.example.com"   # Comma-separated domains
  warning_days: 30                          # Days for warning threshold
  critical_days: 7                          # Days for critical threshold
```

## Schedule

Daily at 9:00 AM.

```yaml
trigger:
  schedule: "0 9 * * *"
```

## Install

```bash
openclaw install ssl-certificate-monitor
```
