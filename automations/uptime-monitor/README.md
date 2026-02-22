# Uptime Monitor

Monitor website uptime and response times with alerts on status changes.

## What It Does

- Checks configured URLs every 5 minutes
- Tracks response times and status codes
- Alerts on downtime, recovery, and slow responses
- Maintains state to detect status changes

## Requirements

| Capability | Description |
|-----------|-------------|
| `exec` | HTTP requests to monitored URLs |

## Configuration

| Config | Default | Description |
|--------|---------|-------------|
| `urls` | (required) | Comma-separated URLs to monitor |
| `timeout_seconds` | 10 | Request timeout |
| `slow_threshold_ms` | 3000 | Response time considered slow |
| `state_file` | uptime-state.json | Status history file |

## Schedule

Every 5 minutes (`*/5 * * * *`).

## Installation

1. Add this automation to your ClawFlows registry
2. Configure URLs to monitor
3. Set thresholds
4. Deploy

## Author

Built by [@Cluka-399](https://clawhub.ai/u/Cluka-399)
