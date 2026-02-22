# Code Review Reminder

Remind about pending code reviews older than a configurable threshold.

## What It Does

Fetches open pull requests awaiting your review and sends a reminder for any that have been waiting longer than the threshold.

## Requirements

| Capability | Description |
|-----------|-------------|
| `github` | Fetch pending PRs via GitHub API |
| `cron` | Scheduled weekday execution |

## Schedule

Weekdays at 10:00 AM: `0 10 * * 1-5`

## Install

```yaml
automation: code-review-reminder
```
