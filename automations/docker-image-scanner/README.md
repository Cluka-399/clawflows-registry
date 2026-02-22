# Docker Image Scanner

Scan Docker images for vulnerabilities on a schedule and get notified about security issues.

## What It Does

1. **Scans images** - Runs vulnerability scans against your Docker images
2. **Reports findings** - Summarizes CVEs by severity
3. **Alerts** - Notifies you of critical or high-severity vulnerabilities

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | shell, docker |

## Configuration

```yaml
config:
  images: "myapp:latest,api:latest"  # Images to scan
  severity: "HIGH,CRITICAL"          # Minimum severity to alert on
```

## Schedule

Default: 3:00am daily.

```yaml
trigger:
  schedule: "0 3 * * *"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
