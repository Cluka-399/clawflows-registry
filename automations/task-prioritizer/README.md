# Task Prioritizer

Sort your daily tasks using the Eisenhower matrix based on deadlines and importance levels.

## What It Does

1. **Reads tasks** - Pulls tasks from your configured task source
2. **Categorizes** - Applies Eisenhower matrix (urgent/important quadrants)
3. **Prioritizes** - Outputs a sorted daily plan with focus recommendations

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | shell |

## Configuration

```yaml
config:
  tasks_file: "tasks.json"   # Path to task data
  top_n: 5                    # Max tasks to highlight as priority
```

## Schedule

Daily at 8:00 AM.

```yaml
trigger:
  schedule: "0 8 * * *"
```

## Install

```bash
openclaw install task-prioritizer
```
