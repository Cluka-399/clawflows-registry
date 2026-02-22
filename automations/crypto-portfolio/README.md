# Crypto Portfolio

Track your crypto portfolio value and alert on significant changes.

## What It Does

Monitors your crypto holdings every 4 hours using CoinGecko prices. Sends a summary each check and alerts when your portfolio value changes beyond a configurable threshold.

## Requirements

| Capability | Description |
|-----------|-------------|
| `web-search` | Fetch crypto prices from CoinGecko |
| `cron` | Scheduled execution every 4 hours |

## Configuration

| Key | Required | Default | Description |
|-----|----------|---------|-------------|
| `holdings` | Yes | — | Comma-separated `coin:amount` pairs (e.g. `BTC:0.5,ETH:2`) |
| `alert_threshold_percent` | No | `5` | Alert when portfolio changes by this % |
| `currency` | No | `usd` | Fiat currency for values |

## Schedule

Every 4 hours: `0 */4 * * *`

## Install

```yaml
automation: crypto-portfolio
config:
  holdings: "bitcoin:0.5,ethereum:2.0"
  alert_threshold_percent: 5
```
