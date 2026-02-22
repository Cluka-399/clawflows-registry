# Comment Moderator

Auto-moderate comments based on rules and sentiment analysis.

## What It Does

Monitors incoming comments and applies moderation rules. Flags or removes comments that violate configurable policies using sentiment analysis and keyword matching.

## Requirements

| Capability | Description |
|-----------|-------------|
| `web-search` | Fetch and analyze comment content |
| `discord` | Send moderation notifications |

## Trigger

Webhook — fires when new comments arrive.

## Install

```yaml
automation: comment-moderator
```
