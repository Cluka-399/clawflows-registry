# Email Digest

Summarize unread emails into a daily digest, with priority sender highlighting.

## What It Does

1. **Fetches unread emails** - Pulls up to N unread messages
2. **Categorizes by priority** - Highlights emails from important senders
3. **Delivers digest** - Clean summary of what needs your attention

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `email` | agentmail, gmail |

## Configuration

```yaml
config:
  max_emails: 20                          # Maximum emails to include
  priority_senders: "boss@co.com"         # Comma-separated priority addresses
  auto_archive: false                     # Archive digested emails
```

## Schedule

Default: 8:00am daily.

```yaml
trigger:
  schedule: "0 8 * * *"
```

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
