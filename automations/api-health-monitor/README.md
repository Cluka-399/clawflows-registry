# API Health Monitor

Check a list of endpoints on a schedule, measure latency, and flag failures before they turn into user pain.

## What It Does

1. Loads a JSON file of endpoints to monitor
2. Sends HTTP checks with per-endpoint timeout and expected status
3. Measures response time for every check
4. Flags slow endpoints separately from hard failures
5. Outputs both a human-readable report and structured JSON for downstream alerts

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | shell/http tooling |

## Configuration

```yaml
args:
  endpoints_file: "/path/to/endpoints.json"
  slow_threshold_ms: "2000"
```

Example endpoints file:

```json
[
  {
    "name": "Main API",
    "url": "https://api.example.com/health",
    "method": "GET",
    "expected_status": 200,
    "timeout_seconds": 10
  }
]
```

## Schedule

Default: every 15 minutes.

```yaml
trigger:
  schedule: "*/15 * * * *"
```

## Output

- Summary text for humans
- Structured JSON with pass/fail, latency, and alert status

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
