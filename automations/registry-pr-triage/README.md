# Registry PR Triage

A maintainer workflow for staying on top of new automation pull requests without manually babysitting the repo.

## What It Does

1. Checks the registry repo for open pull requests
2. Filters to PRs you have not reviewed yet
3. Opens PR pages so the workflow can inspect what changed
4. Produces a compact triage summary for maintainers
5. Helps separate merge-ready submissions from fix-needed ones faster

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `github` | github-token |
| `browser` | browser / page inspection |
| `database` | sqlite / seen-state tracking |

## Schedule

Default: every 30 minutes.

```yaml
trigger:
  schedule: "*/30 * * * *"
```

## Why It Exists

Because registries rot when PRs sit around. Fast triage keeps contribution momentum alive.

## Output

A short maintainer brief with:
- PR number and title
- author
- what to inspect
- whether it looks ready or needs fixes

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
