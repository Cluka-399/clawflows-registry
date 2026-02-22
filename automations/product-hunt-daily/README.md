# Product Hunt Daily

Daily digest of top Product Hunt launches with upvote counts and descriptions.

## What It Does

1. **Fetches** today's top Product Hunt launches
2. **Filters** by minimum upvote threshold
3. **Sends digest** with product names, taglines, and links

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `web-search` | http / web-fetch |
| `cron` | built-in scheduler |

## Configuration

```yaml
config:
  min_upvotes: 100      # Minimum upvotes to include
  max_products: 5        # Maximum products to show
  categories: ""         # Filter by category (empty for all)
```

## Schedule

Runs daily at 6:00 PM (`0 18 * * *`) after voting settles.

## Install

```bash
lobster install product-hunt-daily
```
