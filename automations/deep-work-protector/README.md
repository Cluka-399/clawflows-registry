# Deep Work Protector

Automatically protect your focus hours by declining meetings and suggesting alternative times.

## What It Does

1. **Monitors calendar** for meetings during protected hours
2. **Auto-declines conflicts** with a polite message
3. **Suggests alternatives** outside your focus blocks
4. **Sends notification** when meetings are rescheduled

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `calendar` | caldav-calendar, gcalcli |
| `email` | agentmail, smtp |

## Schedule

Runs weekdays at **8:00 AM** (`0 8 * * 1-5`).

## Install

```bash
lobster install deep-work-protector
```
