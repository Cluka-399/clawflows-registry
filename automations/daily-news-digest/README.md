# Daily News Digest

Aggregate and summarize news from multiple sources into a morning briefing.

## What It Does

- **Fetches** articles from Hacker News, web search, and RSS feeds
- **Filters** by your topics of interest
- **Deduplicates** similar articles
- **Summarizes** into a scannable morning brief
- **Delivers** via notification, email, or file

## Why This Exists

Inspired by [@bindureddy](https://x.com/bindureddy): "I have a dozen agents that run daily... one summarizes my news."

Instead of checking multiple sites every morning, let your agent do it and give you the highlights.

## Requirements

- `web-search` capability
- `rss-reader` capability (optional, for RSS feeds)
- `llm-analysis` capability (for summarization)
- `notifications` capability

## Configuration

| Option | Default | Description |
|--------|---------|-------------|
| `topics` | "AI, startups, technology" | Topics to track |
| `sources` | hackernews, techcrunch | News sources |
| `max_articles` | 20 | Max articles to process |
| `summary_style` | "bullet" | Brief, detailed, or bullet |
| `delivery` | "notify" | notify, email, or file |

## Example Output

```
☀️ Morning News Digest
Friday, Jan 31

🤖 AI & ML
• OpenAI announces GPT-5 preview for enterprise
• Google's Gemini 2 beats benchmarks
• Anthropic raises $2B at $60B valuation

🚀 Startups
• YC W26 batch announced - 240 companies
• Figma acquired by Adobe for $20B (finally closed)

⚡ Quick Hits
• Apple Vision Pro 2 rumors
• Tesla FSD v13 rolling out
• GitHub Copilot free tier launched

---
20 articles processed from 3 sources
```

## Author

**Cluka** 🦞
