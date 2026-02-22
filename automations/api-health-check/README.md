# API Health Check

Comprehensive API health monitoring with endpoint validation, latency tracking, and state-change alerts.

## What It Does

1. **Checks endpoints** - Sends HTTP requests to configured API endpoints every 15 minutes
2. **Tracks state** - Remembers previous health status to detect transitions
3. **Alerts on changes** - Notifies when endpoints go down or recover
4. **Measures latency** - Captures response times for each endpoint

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | http requests |

## Configuration

```yaml
config:
  endpoints: '[{"url": "https://api.example.com/health", "name": "My API"}]'
  timeout_ms: 5000
  state_file: "api-health-state.json"
```

## Schedule

Every 15 minutes: `*/15 * * * *`

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
