# Security Advisory Monitor

Monitor security advisories (CVEs, GitHub advisories) relevant to your tech stack and get notified about critical vulnerabilities.

## What It Does

1. **Fetches advisories** - Checks security feeds for your configured technologies
2. **Filters relevance** - Matches against your declared tech stack
3. **Notifies** - Alerts on critical or high-severity findings

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `web-search` | web-search |
| `exec` | shell |

## Configuration

```yaml
config:
  tech_stack: "node,python,docker"  # Technologies to monitor
  severity: "critical,high"          # Minimum severity
```

## Schedule

Daily at 9:00 AM.

```yaml
trigger:
  schedule: "0 9 * * *"
```

## Install

```bash
openclaw install security-advisory-monitor
```
