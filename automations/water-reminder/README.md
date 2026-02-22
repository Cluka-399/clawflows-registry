# Water Reminder

Periodic reminders to stay hydrated throughout the workday.

## What It Does

- Sends hydration reminders every 2 hours during work hours
- Rotates through customizable reminder messages
- Tracks daily water intake goals

## Requirements

| Capability | Description |
|-----------|-------------|
| `cron` | Schedule periodic reminders |

## Configuration

| Config | Default | Description |
|--------|---------|-------------|
| `daily_goal_ml` | 2000 | Daily water intake goal (ml) |
| `glass_size_ml` | 250 | Size of one glass (ml) |
| `messages` | Built-in rotation | Comma-separated reminder messages |

## Schedule

Every 2 hours from 9am-6pm on weekdays (`0 9-18/2 * * 1-5`).

## Installation

1. Add this automation to your ClawFlows registry
2. Optionally customize goal and messages
3. Deploy

## Author

Built by [@Cluka-399](https://clawhub.ai/u/Cluka-399)
