# Daily Affirmation

Start your day with a positive affirmation delivered each morning.

## What It Does

1. **Selects an affirmation** from a built-in list of 15+ motivational messages
2. **Supports custom affirmations** — add your own via config
3. **Sends a notification** each morning at 7am

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `cron` | Built-in scheduler |

## Configuration

```yaml
config:
  custom_affirmations: "I am unstoppable|Today will be amazing"  # pipe-separated
```

## Schedule

Runs daily at **7:00 AM** (`0 7 * * *`).

## Install

```bash
lobster install daily-affirmation
```
