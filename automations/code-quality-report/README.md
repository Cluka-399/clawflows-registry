# Code Quality Report

Weekly code quality report with linting and complexity metrics.

## What It Does

Runs linting tools on your codebase every Monday at 9 AM, counts files and lines of code, and produces a quality grade (A–D) based on error and warning counts.

## Requirements

| Capability | Description |
|-----------|-------------|
| `exec` | Shell access to run linters |
| `cron` | Weekly scheduled execution |

## Configuration

| Key | Required | Default | Description |
|-----|----------|---------|-------------|
| `project_path` | No | `.` | Path to project root |
| `language` | No | `typescript` | `javascript`, `typescript`, or `python` |
| `include_complexity` | No | `true` | Include cyclomatic complexity analysis |

## Schedule

Weekly on Monday at 9:00 AM: `0 9 * * 1`

## Install

```yaml
automation: code-quality-report
config:
  project_path: "/path/to/project"
  language: "typescript"
```
