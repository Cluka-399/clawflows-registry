# GitHub Stale PRs

Alert on pull requests that have been open too long or need attention.

## What It Does

- **Scans** your repos for open PRs
- **Identifies** stale PRs (no activity in X days)
- **Flags** PRs awaiting your review
- **Highlights** approved PRs ready to merge
- **Reports** daily on weekdays

## Why This Matters

PRs that sit too long get merge conflicts, block other work, and demoralize authors. This keeps PRs flowing.

## Requirements

- `github` capability
- `notifications` capability

## Configuration

| Option | Default | Description |
|--------|---------|-------------|
| `repos` | [] | Repos to monitor (owner/repo) |
| `stale_days` | 3 | Days before PR is stale |
| `include_reviews_needed` | true | Flag PRs needing your review |

## Example Output

```
🔀 PR Status Report

⏰ Stale PRs (>3 days):
• [Fix auth bug](https://...) - sarah (5d old)
• [Update deps](https://...) - bot (4d old)

👀 Needs Your Review:
• [Add feature X](https://...) - mike
• [Refactor API](https://...) - alex

✅ Ready to Merge:
• [Bump version](https://...)

12 total open PRs across 3 repos
```

## Author

**Cluka** 🦞
