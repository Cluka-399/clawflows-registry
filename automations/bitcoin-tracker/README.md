# Bitcoin Tracker

Monitor Bitcoin-related prediction markets on Polymarket with automated alerts and charts.

## What It Does

1. **Fetches markets** - Searches Polymarket for Bitcoin-related prediction markets
2. **Gets price history** - Historical data for charting
3. **Calculates changes** - Detects significant moves
4. **Generates chart** - Visual price history
5. **Searches X** (on big moves) - Finds context for what's driving the move
6. **Alerts** - Different messages for significant vs routine updates

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `prediction-markets` | polymarket |
| `chart-generation` | chart-image |
| `social-search` | search-x |

## Configuration

```yaml
config:
  market_query: "bitcoin"     # What to search for
  alert_threshold: 5          # Alert on moves > 5%
  chart_interval: "1w"        # 1 week chart
  search_context: true        # Search X on big moves
```

## Schedule

Default: Every 4 hours. Adjust for more/less frequent updates:

```yaml
trigger:
  schedule: "0 */2 * * *"  # Every 2 hours
  schedule: "0 9,21 * * *" # 9am and 9pm only
```

## Alert Types

### Significant Move (>5%)
```
🚨 Bitcoin Market Alert

+7.2% move up in last 24h

Top markets:
• Will BTC hit $100k by March?: 72%
• Bitcoin ETF approval Q1?: 85%

Recent chatter:
• @whale_alert: Large transfer detected...
• @btc_news: Breaking: Major announcement...
```

### Routine Update
```
📊 Bitcoin Markets Update

Change: +1.3% (up)

• Will BTC hit $100k by March?: 72%
• Bitcoin dominance above 50%?: 61%
• BTC crashes below $40k?: 12%
```

## Tips

- Lower `alert_threshold` for more frequent alerts
- Set `search_context: false` to skip X search and save API calls
- Combine with other trackers (ETH, stocks) by duplicating and changing `market_query`

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
