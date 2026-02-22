# Git Stale Branch Cleaner

Identify and clean up merged or stale git branches to keep your repos tidy.

## What It Does

1. **Scans repositories** for branches that have been merged or are inactive
2. **Reports stale branches** for review
3. **Cleans up** merged branches safely

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | shell |

## Configuration

```yaml
config:
  repo_path: "."
  stale_days: 30
```

## Install

```bash
openclaw install git-stale-branch-cleaner
```
