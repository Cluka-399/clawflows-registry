# Crypto DCA Reminder

Dollar-cost averaging reminders on your schedule with current prices.

## What It Does

Sends periodic reminders to execute your DCA strategy, including current prices for your target coins so you can make informed buys.

## Requirements

| Capability | Description |
|-----------|-------------|
| `web-search` | Fetch current crypto prices |
| `cron` | Scheduled reminders |

## Schedule

Weekly on Monday at 9:00 AM: `0 9 * * 1`

## Install

```yaml
automation: crypto-dca-reminder
```
