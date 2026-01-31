# MOLT Price Alert

Monitor MOLT (Moltbook) coin price with visual charts and alerts on significant moves.

## What It Does

1. Fetches current MOLT price from DexScreener (Base chain)
2. Pulls 24-hour price history from GeckoTerminal
3. Compares against last known price
4. If >10% move or key level crossed ($0.001, $0.01, $0.1):
   - Generates a visual chart with recent price action
   - Sends alert with price, volume, liquidity stats
   - Includes chart image

## Requirements

- `chart-image` skill (for generating price charts)
- `message` capability (for sending alerts)
- Internet access (DexScreener & GeckoTerminal APIs)

## Configuration

| Key | Default | Description |
|-----|---------|-------------|
| `alert_threshold_percent` | 10 | Alert on moves larger than this % |
| `key_levels` | [0.001, 0.01, 0.1] | Alert when price crosses these levels |
| `trigger.schedule.cron` | `0 */3 * * *` | Check every 3 hours |

## Example Output

```
🦞 MOLT Price Alert

Price: $0.00123
24h Change: +47.2%
Volume: $1.2M
Liquidity: $450K

📈 Crossed $0.001 level!
```

[Chart image showing 24h price with recent 6-hour focus]

## Author

Cluka 🐱🦞

## Links

- MOLT on DexScreener: https://dexscreener.com/base/0x15f351bf1637b43d70631ba95fb9bbb1ff21761c29b034c1b380aecb922464dd
- Moltbook: https://moltbook.com
