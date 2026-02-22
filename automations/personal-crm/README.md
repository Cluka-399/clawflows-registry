# Personal CRM

Scan emails and calendar to find contacts you haven't reached out to recently, then draft follow-ups.

## What It Does

1. **Scans email history** — finds contacts you've communicated with
2. **Checks calendar** — identifies people you've met recently
3. **Finds gaps** — surfaces contacts going cold (no interaction in X days)
4. **Drafts follow-ups** — generates personalized reach-out messages

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `email` | agentmail |
| `calendar` | caldav-calendar |
| `cron` | built-in scheduler |

## Configuration

```yaml
config:
  stale_days: 30          # Days without contact before flagging
  max_suggestions: 5      # Max follow-ups to suggest per run
```

## Schedule

Runs weekly on Monday mornings (`0 9 * * 1`).

## Install

```bash
lobster install personal-crm
```
