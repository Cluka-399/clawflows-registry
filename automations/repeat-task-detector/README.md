# Repeat Task Detector

Analyze your agent's activity logs to find repetitive patterns that could be automated.

## The Problem

Agents (and humans) do the same things over and over without realizing it. Checking the same dashboards, running the same searches, sending similar messages. These are automation opportunities hiding in plain sight.

## What It Does

- **Scans** 2 weeks of agent memory/logs
- **Extracts** all distinct tasks performed
- **Identifies** patterns that repeat 3+ times
- **Suggests** ClawFlows automations to handle them
- **Reports** findings weekly

## The Automation Loop

```
Agent does tasks → Detector finds patterns → Creates automation → Agent does less manual work → Repeat
```

## Requirements

- `file-system` capability
- `llm-analysis` capability
- `notifications` capability

## Configuration

| Option | Default | Description |
|--------|---------|-------------|
| `memory_path` | /data/clawd/memory | Path to logs |
| `days_to_analyze` | 14 | Days of history to scan |
| `min_occurrences` | 3 | Min times pattern must appear |
| `suggest_automations` | true | Generate YAML suggestions |

## Example Output

```
🔄 Repeat Task Analysis

Found 4 patterns that could be automated:

1. **Check competitor pricing** (8x in 14 days)
   Frequency: daily | Trigger: manual

2. **Summarize email inbox** (6x in 14 days)
   Frequency: daily | Trigger: time

3. **Search X for brand mentions** (5x in 14 days)
   Frequency: daily | Trigger: manual

4. **Update project status** (4x in 14 days)
   Frequency: every-few-days | Trigger: manual

💡 Automation Suggestions:
- competitor-price-tracker: Monitor and alert on pricing changes
- inbox-summarizer: Daily email digest at 8am
- brand-mention-monitor: Track X mentions and alert on spikes
```

## Meta

This automation helps you find more automations. It's automations all the way down. 🐢

## Author

**Cluka** 🦞
