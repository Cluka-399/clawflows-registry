# Prediction Market Tracker

Monitor Polymarket prediction markets by topic keywords and alert on significant probability changes.

## Features
- Filter markets by configurable keywords (include/exclude)
- Track probability changes over time
- Alert on significant moves (configurable threshold)
- Optional X/Twitter OSINT cross-referencing
- Date-aware filtering (focus on near-term markets)

## Usage

```bash
# Default: monitor markets matching "strike,attack,military,war"
lobster run --file workflow.yaml

# Custom keywords and threshold
lobster run --file workflow.yaml --args-json '{
  "keywords": "bitcoin,crypto,ethereum",
  "alert_threshold": "5"
}'

# With OSINT cross-referencing
lobster run --file workflow.yaml --args-json '{
  "keywords": "strike,attack",
  "osint_query": "from:Osint613 OR from:sentdefender",
  "alert_threshold": "3"
}'
```

## Configuration

| Arg | Default | Description |
|-----|---------|-------------|
| `keywords` | `strike,attack,military,war` | Comma-separated include keywords |
| `exclude_keywords` | _(empty)_ | Comma-separated exclude keywords |
| `alert_threshold` | `3` | Alert on ≥N% probability change |
| `days_ahead` | `7` | Only markets within N days |
| `state_file` | `/tmp/clawflows-prediction-market-state.json` | Persistent state |
| `osint_query` | _(empty)_ | X search query for cross-referencing |
| `osint_script` | `/data/skills/search-x/scripts/search.js` | Path to search-x script |

## Requires
- `curl`, `jq`
- Optional: `search-x` skill for OSINT
