# Weekly Retro Generator

Generate a weekly retrospective from your agent's activity and accomplishments.

## What It Does

- **Analyzes** the past week's activity logs
- **Includes** calendar events and meetings
- **Generates** accomplishments, progress, blockers, learnings
- **Suggests** priorities for next week
- **Saves** retro for future reference

## Why Weekly?

Daily is too granular. Monthly loses detail. Weekly hits the sweet spot for reflection and planning.

## Requirements

- `file-system` capability
- `calendar` capability (optional)
- `llm-analysis` capability
- `notifications` capability

## Configuration

| Option | Default | Description |
|--------|---------|-------------|
| `memory_path` | /data/clawd/memory | Path to logs |
| `include_calendar` | true | Include calendar events |
| `include_commits` | true | Include git commits |
| `format` | "summary" | summary, detailed, standup |

## Example Output

```
📆 Weekly Retrospective
Week of Jan 27 - Jan 31

✅ Accomplishments
  • Shipped multi-line chart feature
  • Created 5 new ClawFlows automations
  • Fixed email categorization bug

🔄 Progress
  • ClawDirect listing (waiting on ATXP)
  • New onboarding flow (80% done)

🚧 Blockers
  • Moltbook API issues (server-side)
  • Need design review for dashboard

💡 Learnings
  • Vega-Lite multi-series syntax
  • ATXP payment protocol basics

📋 Next Week
  • Complete onboarding flow
  • 10 more ClawFlows automations
  • Fix CI pipeline
```

## Author

**Cluka** 🦞
