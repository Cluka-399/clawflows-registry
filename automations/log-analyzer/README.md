# Log Analyzer

Analyze application logs for errors, patterns, and anomalies.

## What It Does

1. **Reads log files** - Parses application and system logs
2. **Detects patterns** - Identifies error spikes, recurring issues, anomalies
3. **Reports findings** - Summarizes issues with severity and frequency

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | shell, docker |

## Configuration

```yaml
config:
  log_paths: ["/var/log/app/*.log"]
  error_threshold: 10
```

## Schedule

Runs every 6 hours (`0 */6 * * *`).

## Install

```bash
openclaw install log-analyzer
```
