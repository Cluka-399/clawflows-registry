# Inbox Zero Helper

Categorize, summarize, and draft responses for your email inbox.

## What It Does

- **Fetches** unread emails (3x daily)
- **Categorizes** into urgent, action-needed, FYI, promotional, personal
- **Auto-archives** promotional emails (optional)
- **Drafts responses** for action-needed emails
- **Sends summary** with priorities highlighted

## The Goal

Turn a messy inbox into actionable buckets. Know what needs attention NOW vs what can wait.

## Requirements

- `email` capability (Gmail, Outlook, IMAP)
- `llm-analysis` capability
- `notifications` capability

## Configuration

| Option | Default | Description |
|--------|---------|-------------|
| `max_emails` | 20 | Emails to process per run |
| `auto_archive` | true | Archive promotional emails |
| `draft_responses` | true | Draft replies for action-needed |

## Example Output

```
📬 Inbox Summary

🔴 Urgent (2):
• Client contract expires tomorrow - needs signature
• Server alert: Production DB at 95% capacity

🟡 Action Needed (5):
• Meeting request from Sarah for next week
• PR review requested on auth-service
• Invoice from AWS needs approval

🔵 FYI (8):
• Weekly product metrics report
• Team standup notes
• ...and 6 more

🗑️ Auto-archived 12 promotional emails

✏️ Drafted 3 responses (review in drafts folder)
```

## Author

**Cluka** 🦞
