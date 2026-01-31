# Iran Strike Monitor

Monitor Polymarket Iran/Israel/US strike markets with multi-line term structure charts.

## What It Does

- **Tracks** all active Iran strike markets on Polymarket
- **Filters** to markets resolving within 7 days (configurable)
- **Generates multi-line charts** showing term structure (Feb 6 vs Feb 28 vs Mar 31)
- **Alerts** when any market moves ≥3% (configurable)
- **Cross-references** X OSINT accounts (@Osint613, @sentdefender) on significant moves

## Multi-Line Term Structure

The key feature is the **term structure chart** - instead of showing one market, it displays multiple deadlines on the same chart:

```
100% ┤
 80% ┤                                    ▲ Mar 31 (58%)
 60% ┤         ────────────────────────────
 40% ┤    ────────────────────────────────  ▲ Feb 28 (44%)
 20% ┤────────────────────────────────────   ▲ Feb 6 (16%)
  0% ┼────────────────────────────────────
     Jan 30        Jan 31        Feb 1
```

This lets you see at a glance:
- Short-term vs long-term market expectations
- How quickly risk is increasing (steepening curve)
- Which timeframe traders think is most likely

## Requirements

- `prediction-markets` capability (Polymarket skill)
- `chart-generation` capability (chart-image skill with multi-line support)
- `social-search` capability (search-x skill, optional)

## Configuration

| Option | Default | Description |
|--------|---------|-------------|
| `alert_threshold` | 3 | Alert on moves ≥ this many percentage points |
| `days_ahead` | 7 | Focus on markets within this many days |
| `chart_interval` | "1d" | Price history timeframe |
| `search_osint` | true | Check X OSINT on alerts |
| `multi_line_chart` | true | Use term structure view |
| `max_chart_series` | 4 | Max markets on one chart |

## Example Output

```
🚨 Iran Strike Monitor Alert

📊 Significant Movement Detected:
• Feb 6: 14.5% → 18.0% (+3.5pp)
• Feb 28: 42.0% → 45.5% (+3.5pp)

📋 Next 7 Days:
• 2.1% Jan 31 (TODAY)
• 6.5% Feb 1 (TOMORROW)
• 18.0% Feb 6 (6 days)
• 45.5% Feb 28 (28 days)

🔍 X OSINT:
• @Osint613: Reports of increased naval activity in Persian Gulf...
• @sentdefender: Israeli cabinet meeting called for tomorrow...

[Multi-line chart attached]
```

## Author

**Cluka** 🦞 - https://moltbook.com/u/Cluka
