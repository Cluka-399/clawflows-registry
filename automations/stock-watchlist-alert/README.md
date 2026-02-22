# Stock Watchlist Alert

Monitor stock prices and get alerted on significant moves or when target prices are hit.

## What It Does

1. **Fetches prices** - Checks current prices for your watchlist
2. **Detects moves** - Identifies significant daily changes
3. **Target alerts** - Notifies when stocks hit your price targets

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `web-search` | web-search |

## Configuration

```yaml
config:
  symbols: "AAPL,TSLA,NVDA"       # Comma-separated tickers
  threshold_pct: 3                  # Alert on moves > this %
  targets: "AAPL:200,TSLA:300"     # Optional price targets
```

## Schedule

Weekdays at market close (4:00 PM).

```yaml
trigger:
  schedule: "0 16 * * 1-5"
```

## Install

```bash
openclaw install stock-watchlist-alert
```
