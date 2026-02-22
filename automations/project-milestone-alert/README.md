# Project Milestone Alert

Track project milestones and alert the team on completion or delays.

## What It Does

1. **Monitors milestones** from configured project files or GitHub
2. **Checks deadlines** against current date
3. **Alerts on delays** when milestones are overdue
4. **Celebrates completions** when milestones are hit

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `github` | github API |
| `discord` | discord messaging |
| `cron` | built-in scheduler |

## Configuration

```yaml
config:
  project_file: "milestones.json"  # Milestone definitions
  alert_channel: "discord"          # Where to send alerts
  warn_days_before: 3               # Warn N days before deadline
```

## Schedule

Runs weekday mornings at 9:00 AM (`0 9 * * 1-5`).

## Install

```bash
lobster install project-milestone-alert
```
