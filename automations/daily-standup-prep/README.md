# Daily Standup Prep

Prepare your daily standup by summarizing recent git activity and today's calendar.

## What It Does

1. **Fetches yesterday's commits** from configured git repos
2. **Lists today's meetings** from your calendar
3. **Composes a standup template** with yesterday/today/blockers sections
4. **Sends notification** so you're ready before standup

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | Shell access for git log |
| `calendar` | caldav-calendar, gcalcli |

## Configuration

```yaml
config:
  git_repos: "."              # Comma-separated repo paths
  include_calendar: true       # Include today's meetings
  author_email: ""            # Filter commits by author
```

## Schedule

Runs weekdays at **9:00 AM** (`0 9 * * 1-5`).

## Install

```bash
lobster install daily-standup-prep
```
