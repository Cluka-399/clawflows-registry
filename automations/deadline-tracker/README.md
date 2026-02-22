# Deadline Tracker

Escalating reminders as deadlines approach — notifies at 7 days, 3 days, 1 day, and same day.

## What It Does

1. **Scans calendar** for upcoming deadlines
2. **Calculates urgency** based on time remaining
3. **Sends escalating alerts** — gentle at 7d, urgent on same day
4. **Prevents missed deadlines** with persistent reminders

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `calendar` | caldav-calendar, gcalcli |

## Schedule

Runs daily at **9:00 AM** (`0 9 * * *`).

## Install

```bash
lobster install deadline-tracker
```
