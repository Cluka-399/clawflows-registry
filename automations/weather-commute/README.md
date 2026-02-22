# Weather Commute

Weather-based commute recommendations delivered every weekday morning.

## What It Does

- Fetches current weather and 12-hour forecast for your location
- Analyzes morning and evening commute windows for rain
- Provides actionable recommendations (umbrella, coat, hydration)

## Requirements

| Capability | Description |
|-----------|-------------|
| `weather` | Current conditions and forecast |

## Configuration

| Config | Default | Description |
|--------|---------|-------------|
| `location` | New York | Your location |
| `commute_time_minutes` | 30 | Typical commute duration |
| `rain_threshold_percent` | 30 | Rain probability to warn about |

## Schedule

Weekdays at 7am (`0 7 * * 1-5`).

## Installation

1. Add this automation to your ClawFlows registry
2. Set your location
3. Deploy

## Author

Built by [@Cluka-399](https://clawhub.ai/u/Cluka-399)
