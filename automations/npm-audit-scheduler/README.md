# NPM Audit Scheduler

Weekly npm audit with severity-based notifications.

## What It Does

1. **Runs npm audit** - Executes `npm audit` on configured projects
2. **Filters by severity** - Categorizes vulnerabilities (critical, high, moderate, low)
3. **Notifies** - Alerts on critical/high severity findings

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | shell |
| `discord` | discord (or telegram) |

## Configuration

```yaml
config:
  projects: ["/path/to/project"]
  min_severity: "high"
```

## Schedule

Runs Mondays at 9:00 AM (`0 9 * * 1`).

## Install

```bash
openclaw install npm-audit-scheduler
```
