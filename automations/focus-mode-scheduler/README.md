# Focus Mode Scheduler

Automatically enable DND/focus mode during calendar deep work blocks.

## What It Does

1. **Checks calendar** - Looks for deep work or focus blocks
2. **Enables DND** - Activates focus mode during those times
3. **Disables after** - Returns to normal when the block ends

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `calendar` | caldav-calendar, gcal |

## Schedule

Default: checks every 15 minutes.

```yaml
trigger:
  schedule: "*/15 * * * *"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
