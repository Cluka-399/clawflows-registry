# Changelog Monitor

Monitor GitHub releases and changelogs for projects you depend on.

## What It Does

1. **Fetches releases** - Checks GitHub API for latest releases across configured repos
2. **Tracks seen releases** - Only notifies on new ones
3. **Filters pre-releases** - Separates stable releases from pre-releases
4. **Sends digest** - Summary of new releases with changelogs and links

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `github` | GitHub API access |

## Configuration

```yaml
config:
  repos: "owner/repo1,owner/repo2"
  github_token: "$GITHUB_TOKEN"    # secret
  state_file: "changelog-state.json"
```

## Schedule

Daily at 10am: `0 10 * * *`

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
