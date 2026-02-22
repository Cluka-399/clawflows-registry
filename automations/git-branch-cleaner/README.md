# Git Branch Cleaner

Identify and clean up stale git branches that haven't been touched in a while.

## What It Does

1. **Fetches all branches** and prunes deleted remotes
2. **Finds stale branches** with no commits in the configured window
3. **Finds merged branches** that can be safely deleted
4. **Optionally auto-deletes** merged branches
5. **Sends a cleanup report** with recommendations

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | shell |
| `cron` | cron |

## Configuration

```yaml
config:
  repo_path: "."              # Path to git repository
  stale_days: 30              # Days without commits = stale
  exclude_branches: "main,master,develop,staging,production"
  auto_delete: false          # Auto-delete merged branches
```

## Schedule

Runs every Friday at 10:00 AM UTC.

## Install

```bash
openclaw install git-branch-cleaner
```
