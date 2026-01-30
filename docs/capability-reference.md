# Capability Reference

Complete reference for all standard capabilities in ClawFlows.

## prediction-markets

Query prediction market data.

### Methods

#### searchMarkets
Search for markets by query.

```yaml
- capability: prediction-markets
  method: searchMarkets
  args:
    query: "bitcoin"
  capture: markets
```

**Input:**
- `query` (string) - Search term

**Output:** Array of market objects with `question`, `yes`, `no`, `volume`

#### getPriceHistory
Get historical price data.

```yaml
- capability: prediction-markets
  method: getPriceHistory
  args:
    query: "bitcoin"
    interval: "1w"
  capture: history
```

**Input:**
- `query` (string) - Market search query
- `interval` (string) - Time range: `1h`, `6h`, `1d`, `1w`, `1m`, `max`

**Output:** Array of price points with `timestamp`, `price`

---

## chart-generation

Create chart images from data.

### Methods

#### lineChart
Generate a line chart.

```yaml
- capability: chart-generation
  method: lineChart
  args:
    data: "${history}"
    title: "Price History"
  capture: chart
```

**Input:**
- `data` (array) - Data points
- `title` (string, optional) - Chart title
- `groupBy` (string, optional) - Field to group series by

**Output:** Object with `path` to generated PNG

#### barChart
Generate a bar chart.

```yaml
- capability: chart-generation
  method: barChart
  args:
    data: "${stats}"
    title: "Weekly Stats"
  capture: chart
```

---

## social-search

Search social media platforms.

### Methods

#### searchPosts
Search X/Twitter for posts.

```yaml
- capability: social-search
  method: searchPosts
  args:
    query: "AI news"
    days: 7
  capture: tweets
```

**Input:**
- `query` (string) - Search query
- `days` (number, optional) - Limit to last N days
- `handles` (string, optional) - Filter by accounts

**Output:** Array of posts with `username`, `content`, `date`, `link`

---

## calendar

Read and write calendar events.

### Methods

#### sync
Sync calendar data from server.

```yaml
- capability: calendar
  method: sync
```

#### listEvents
List events in a date range.

```yaml
- capability: calendar
  method: listEvents
  args:
    start: "today"
    range: "7d"
  capture: events
```

**Input:**
- `start` (string) - Start date
- `range` (string, optional) - Range from start

**Output:** Array of events with `title`, `time`, `date`

#### createEvent
Create a new event.

```yaml
- capability: calendar
  method: createEvent
  args:
    date: "2026-02-01"
    startTime: "10:00"
    endTime: "11:00"
    title: "Meeting"
```

---

## weather

Get weather data.

### Methods

#### getCurrentWeather
Get current conditions.

```yaml
- capability: weather
  method: getCurrentWeather
  args:
    location: "London"
  capture: weather
```

**Input:**
- `location` (string) - City name or coordinates

**Output:** String with conditions, temperature, humidity, wind

#### getForecast
Get multi-day forecast.

```yaml
- capability: weather
  method: getForecast
  args:
    location: "London"
    days: 3
  capture: forecast
```

---

## tts

Text-to-speech generation.

### Methods

#### speak
Convert text to audio.

```yaml
- capability: tts
  method: speak
  args:
    text: "Hello world"
  capture: audio
```

**Input:**
- `text` (string) - Text to convert
- `voice` (string, optional) - Voice ID
- `model` (string, optional) - TTS model

**Output:** Object with `path` to audio file

---

## youtube-data

Fetch YouTube video and channel data.

### Methods

#### getTranscript
Get video transcript.

```yaml
- capability: youtube-data
  method: getTranscript
  args:
    url: "https://youtube.com/watch?v=..."
  capture: transcript
```

**Input:**
- `url` (string) - YouTube video URL

**Output:** Full text transcript

---

## database

Store and query structured data.

### Methods

#### query
Run a SQL query.

```yaml
- capability: database
  method: query
  args:
    sql: "SELECT * FROM events WHERE date > date('now')"
  capture: results
```

#### upsert
Insert or update records.

```yaml
- capability: database
  method: upsert
  args:
    table: "prices"
    data: "${newPrices}"
    key: "id"
```

---

## Built-in Actions

These don't require capabilities - they're part of ClawFlows core.

### notify
Send a notification.

```yaml
- action: notify
  message: "Hello!"
  attachments: ["${chart.path}"]
```

### template
Compose a text template.

```yaml
- action: template
  template: "Weather: ${weather}"
  capture: text
```

### evaluate
Run JavaScript expression.

```yaml
- action: evaluate
  expression: "prices.reduce((a, b) => a + b, 0) / prices.length"
  capture: average
```
