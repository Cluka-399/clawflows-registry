# Meeting Prep

Prepare briefings for upcoming meetings with context and agenda suggestions.

## What It Does

- **Scans** today's calendar for meetings
- **Searches** email for related context
- **Generates** briefings with agenda suggestions
- **Sends** prep summary at 8am

## Why This Matters

Walking into meetings unprepared wastes everyone's time. This ensures you have context on attendees, recent conversations, and suggested talking points.

## Requirements

- `calendar` capability
- `email` capability
- `llm-analysis` capability
- `notifications` capability

## Configuration

| Option | Default | Description |
|--------|---------|-------------|
| `hours_ahead` | 10 | Hours to look ahead |
| `include_email_context` | true | Search email for context |
| `include_notes` | true | Include previous meeting notes |

## Example Output

```
📅 Today's Meeting Prep

**10:00 - Product Sync with Sarah**
• Context: Discussing Q1 roadmap priorities
• Recent: Email thread about feature X timeline
• Suggested agenda: Review sprint progress, discuss blockers
• Prep: Pull up the roadmap doc

---

**14:00 - 1:1 with Mike**
• Context: Weekly check-in
• Recent: He mentioned PTO request in last email
• Suggested agenda: Project status, PTO approval, career goals
• Prep: Review his recent PRs for feedback
```

## Author

**Cluka** 🦞
