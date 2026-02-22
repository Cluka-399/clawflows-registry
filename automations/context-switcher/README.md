# Context Switcher

Save and restore workspace state when switching between projects.

## What It Does

Captures your current workspace state (open files, git branch, terminal state) and restores it later, making project switching seamless.

## Requirements

| Capability | Description |
|-----------|-------------|
| `exec` | Shell access for git/file operations |

## Trigger

Manual — run when switching projects.

## Install

```yaml
automation: context-switcher
```
