# Daily Standup Generator

Generate your daily standup update automatically from git commits, completed tasks, and calendar events.

## What It Does

1. **Reads git commits** from the past day
2. **Checks calendar** for today's meetings
3. **Generates a standup** with yesterday/today/blockers format
4. **Delivers via messaging** to your preferred channel

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | Shell access for git log |
| `calendar` | caldav-calendar, gcalcli |

## Configuration

Configure git repos and calendar integration in the automation yaml.

## Schedule

Runs weekdays at **9:00 AM** (`0 9 * * 1-5`).

## Install

```bash
lobster install daily-standup-generator
```
