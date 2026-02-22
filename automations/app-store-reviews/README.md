# App Store Reviews

Monitor App Store and Google Play reviews for your app, with alerts on low ratings.

## What It Does

1. **Fetches reviews** - Pulls latest reviews from Apple App Store RSS feed
2. **Tracks seen reviews** - Only alerts on new ones
3. **Filters by rating** - Highlights low-rating reviews that need attention
4. **Sends summaries** - Periodic digest of new reviews

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | http requests, storage |

## Configuration

```yaml
config:
  app_store_id: "123456789"      # Apple App Store ID
  play_store_id: "com.example"   # Google Play package
  country: "us"
  alert_on_low_rating: 3
```

## Schedule

Every 4 hours: `0 */4 * * *`

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
