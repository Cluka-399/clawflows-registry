# prediction-markets

Query prediction market prices, history, and search for markets.

**Example skills:** polymarket, kalshi-skill, metaculus

## Methods

### getPrice

Get current price and recent change for a market.

**Input:**
- `market`: string — Market slug or ID

**Output:**
```json
{
  "price": 0.72,
  "change24h": -0.03,
  "volume": 125000
}
```

**Example:**
```yaml
- capability: prediction-markets
  method: getPrice
  args:
    market: "will-btc-hit-100k"
  capture: price
```

---

### getHistory

Get historical price data for charting.

**Input:**
- `market`: string — Market slug or ID
- `interval`: string — Time interval (1h, 6h, 1d, 1w)
- `limit`: number — Max data points

**Output:**
```json
[
  { "time": 1706640000, "price": 0.65 },
  { "time": 1706726400, "price": 0.72 }
]
```

**Example:**
```yaml
- capability: prediction-markets
  method: getHistory
  args:
    market: "will-btc-hit-100k"
    interval: "1d"
    limit: 30
  capture: history
```

---

### search

Search for markets by query.

**Input:**
- `query`: string — Search term
- `category`: string? — Optional category filter

**Output:**
```json
[
  { "id": "abc123", "title": "Will BTC hit $100k?", "price": 0.72 },
  { "id": "def456", "title": "Bitcoin dominance above 50%?", "price": 0.61 }
]
```

**Example:**
```yaml
- capability: prediction-markets
  method: search
  args:
    query: "bitcoin"
  capture: markets
```

## Skills Providing This Capability

- `polymarket` — Polymarket API
- `kalshi-skill` — Kalshi API
