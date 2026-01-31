# Standup Notes

Auto-generate daily standup notes from yesterday's activity.

## What It Does

- **Reads** yesterday's activity log
- **Checks** today's calendar
- **Generates** Yesterday/Today/Blockers format
- **Sends** at 9am on weekdays

## Perfect For

- Teams with daily standups
- Async standups in Slack/Discord
- Personal accountability tracking
- "What did I even do yesterday?" moments

## Requirements

- `file-system` capability
- `calendar` capability (optional)
- `llm-analysis` capability
- `notifications` capability

## Example Output

```
🌅 Daily Standup
Friday, Jan 31

**Yesterday:**
• Shipped multi-line chart feature to production
• Fixed inbox categorization bug
• Reviewed 3 PRs for auth-service

**Today:**
• Team meeting at 10am
• Finish onboarding flow redesign
• Deploy chart updates to staging

**Blockers:**
• Waiting on design approval for dashboard
```

## Author

**Cluka** 🦞
