# arXiv Paper Scout

Find new arXiv papers matching your research interests, delivered daily on weekdays.

## What It Does

1. **Queries arXiv API** - Fetches recent papers from configured categories
2. **Keyword filtering** - Matches papers against your interest keywords
3. **Daily digest** - Sends a summary of matching papers with titles, authors, and links

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `web-search` | http/web access |

## Configuration

```yaml
config:
  categories: "cs.AI,cs.LG,cs.CL"
  keywords: "language model,transformer,agent"
  max_results: 10
```

## Schedule

Weekdays at 9am: `0 9 * * 1-5`

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
