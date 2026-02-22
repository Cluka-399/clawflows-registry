# Meeting Prep Assistant

Generate meeting briefs 30 minutes before each meeting — attendees, agenda, and relevant docs.

## What It Does

1. **Checks calendar** - Looks for meetings starting in the next 30 minutes
2. **Gathers context** - Pulls attendee info, previous notes, related documents
3. **Generates brief** - Creates a concise prep document

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `calendar` | caldav-calendar, google-calendar |

## Configuration

```yaml
config:
  minutes_before: 30
  include_docs: true
```

## Schedule

Runs every 30 minutes during work hours on weekdays (`*/30 8-18 * * 1-5`).

## Install

```bash
openclaw install meeting-prep-assistant
```
