# CI/CD Status Monitor

Monitor CI/CD pipeline status and alert on failures.

## What It Does

Checks GitHub Actions (or GitLab) pipeline runs every 30 minutes. If the latest run on your monitored branch has failed, it sends an alert with details and a link to the failed run.

## Requirements

| Capability | Description |
|-----------|-------------|
| `github` | GitHub API access (Personal Access Token) |
| `cron` | Scheduled execution every 30 minutes |

## Configuration

| Key | Required | Default | Description |
|-----|----------|---------|-------------|
| `provider` | No | `github` | CI provider: `github` or `gitlab` |
| `repo` | Yes | — | Repository in `owner/repo` format |
| `branch` | No | `main` | Branch to monitor |
| `github_token` | Yes | — | GitHub Personal Access Token (secret) |

## Schedule

Runs every 30 minutes: `*/30 * * * *`

## Install

```yaml
automation: cicd-status-monitor
config:
  repo: "myorg/myrepo"
  branch: "main"
  github_token: "${GITHUB_TOKEN}"
```
