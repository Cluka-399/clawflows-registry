# chart-generation

Generate chart images from data.

**Example skills:** chart-image, quickchart-skill

## Methods

### lineChart

Create a line chart from time-series data.

**Input:**
- `data`: DataPoint[] — Array of {x, y} or {time, value} points
- `title`: string? — Chart title
- `series`: string[]? — Multiple series names
- `options`: object? — Additional options (colors, dark mode, etc.)

**Output:**
```json
{
  "path": "/tmp/chart-abc123.png"
}
```

**Example:**
```yaml
- capability: chart-generation
  method: lineChart
  args:
    data: "${priceHistory}"
    title: "BTC Price Over Time"
    options:
      dark: true
      showChange: true
  capture: chart
```

---

### barChart

Create a bar chart from categorical data.

**Input:**
- `data`: Bar[] — Array of {label, value}
- `title`: string? — Chart title
- `options`: object? — Additional options

**Output:**
```json
{
  "path": "/tmp/chart-def456.png"
}
```

**Example:**
```yaml
- capability: chart-generation
  method: barChart
  args:
    data:
      - { label: "MrBeast", value: 45000000 }
      - { label: "PewDiePie", value: 32000000 }
    title: "Channel Views Comparison"
  capture: chart
```

## Skills Providing This Capability

- `chart-image` — Vega-Lite based charts (recommended)
- `quickchart-skill` — QuickChart.io API
