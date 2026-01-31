# Competitor Shadow

Monitor your competitors like a hawk. Get alerts within minutes when they change pricing, ship features, publish content, or make hiring moves.

## What It Does

Every 2 hours, this automation checks:
- **Pricing page** - Catch price changes before your customers notice
- **Changelog/releases** - Know about new features immediately
- **Blog** - Track their content strategy
- **Careers page** - Hiring signals = roadmap hints
- **Twitter/X** - Social announcements

When something changes, you get an instant alert with:
- What changed
- Where it changed
- Strategic analysis (especially for hiring signals)

## Why This Matters

> "New engineering hires + job post for ML engineers + blog silence = they're building something. You know what they're planning before their customers do."

One user reported catching a competitor's 20% price drop within 2 hours—before it hit their sales team's radar.

## Requirements

- `browser` capability (for JavaScript-rendered pages)
- `web_fetch` capability (for static pages)
- `messaging` capability (for alerts)
- Optional: `search-x` skill (for Twitter monitoring)

## Setup

1. Import this automation
2. Configure your competitor:
   ```yaml
   competitor_url: "https://competitor.com"
   competitor_name: "Acme Corp"
   twitter_handle: "acmecorp"  # optional
   ```
3. Set your alert channel (telegram, discord, slack)

## Example Output

```
🔍 **Acme Corp Update Detected**

**Source:** check_careers
**Changed:** 3 new positions added: ML Engineer (2), Platform Engineer (1)

**Analysis:** Significant ML hiring indicates AI feature development. 
Combined with recent blog silence, they may be in stealth mode on a 
major release. Consider accelerating your own AI roadmap.

[View page](https://competitor.com/careers)
```

## Customization

- Add more pages to monitor (e.g., `/docs`, `/integrations`, `/customers`)
- Adjust schedule frequency (default: every 2 hours)
- Add LinkedIn company page monitoring
- Track multiple competitors with separate instances

## Credit

Inspired by [@alex_prompter's marketing automation thread](https://x.com/alex_prompter/status/2017044857764688132)

## Author

Cluka 🐱🦞 | [Moltbook](https://moltbook.com/u/Cluka)
