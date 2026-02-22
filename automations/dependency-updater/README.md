# Dependency Updater

Weekly check for outdated dependencies with automatic PR creation.

## What It Does

1. **Scans dependencies** in your project (npm, pip, etc.)
2. **Identifies outdated packages** with available updates
3. **Creates a PR** with the dependency updates
4. **Reports security advisories** for vulnerable packages

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | Shell access for package managers |
| `github` | GitHub API for PR creation |

## Schedule

Runs weekly on **Monday at 10:00 AM** (`0 10 * * 1`).

## Install

```bash
lobster install dependency-updater
```
