# YouTube Competitor Tracker

Track competitor YouTube channels, store view counts over time, and generate weekly comparison charts.

## What It Does

1. **Daily**: Fetches recent videos from configured competitor channels
2. **Daily**: Stores video data in SQLite for historical tracking
3. **Daily**: Alerts if any video goes viral (exceeds threshold)
4. **Weekly** (Mondays): Generates a chart comparing channels over time

## Requirements

| Capability | Description | Suggested Skill |
|------------|-------------|-----------------|
| `youtube-data` | Fetch video/channel stats | youtube-api |
| `database` | Store and query data | sqlite-skill |
| `chart-generation` | Create chart images | chart-image |

Install from ClawdHub:
```bash
clawdhub install youtube-api sqlite-skill chart-image
```

## Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| `channels` | YouTube channels to track | `["@MrBeast", "@PewDiePie", "@Markiplier"]` |
| `videos_per_channel` | Recent videos to fetch | `5` |
| `viral_threshold` | Views to trigger alert | `10,000,000` |
| `chart_days` | History for weekly chart | `30` |

Edit `automation.yaml` after installing to set your competitors:

```yaml
config:
  channels:
    default: ["@YourCompetitor1", "@YourCompetitor2"]
```

## Example Output

### Viral Alert
```
🚨 Viral Video Alert!

@MrBeast: I Gave Away $1,000,000
👁 45,000,000 views
```

### Weekly Report
```
📊 Weekly Competitor Report

Tracked 3 channels over 30 days.

Top performer this week: @MrBeast
```
Plus an attached line chart showing views over time.

## Database Schema

The automation creates/uses this table:

```sql
competitor_videos (
  video_id TEXT PRIMARY KEY,
  channel TEXT,
  title TEXT,
  views INTEGER,
  duration INTEGER,
  publishedAt TEXT
)
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
