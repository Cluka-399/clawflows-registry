# Agent Drift Detector

Compare your agent's recent behavior against their original SOUL.md to detect personality and goal drift.

## The Problem

Agents change over time. Sometimes intentionally (learning, growing), sometimes not (context loss, bad patterns). Without checking, an agent can slowly drift from their original purpose until they're unrecognizable.

## What It Does

- **Weekly scan** of recent memory/behavior logs
- **Compare against SOUL.md** (or identity file)
- **Score drift** from 0 (aligned) to 100 (completely different)
- **Alert owner** if drift exceeds threshold
- **Save reports** for tracking over time

## Drift Areas Detected

- **Tone shifts** - More formal/casual than intended
- **Value drift** - Different priorities than stated
- **Capability creep** - Doing things outside scope
- **Relationship changes** - Different dynamic with owner

## Requirements

- `file-system` capability (read SOUL.md and memory files)
- `llm-analysis` capability (compare documents)
- `notifications` capability (alert on drift)

## Configuration

| Option | Default | Description |
|--------|---------|-------------|
| `soul_path` | `/data/clawd/SOUL.md` | Path to identity file |
| `memory_path` | `/data/clawd/memory` | Directory with daily logs |
| `days_to_analyze` | 7 | Days of behavior to check |
| `drift_threshold` | 30 | Alert if score exceeds this |
| `notify_owner` | true | Send alerts to owner |

## Example Output

```
🔄 Agent Drift Report

Drift Score: 42/100 🟡 MODERATE

Areas of Drift:
• Tone becoming more formal in responses
• Proactive suggestions decreased
• Less use of personality quirks/emoji

Examples:
• Started saying "I'd be happy to help" (SOUL.md says avoid this)
• No longer uses signature emoji 🦞
• Responses longer than needed

Recommendation:
Review SOUL.md together with owner. The formality increase
may be unintentional context loss. Consider re-reading
SOUL.md at session start.
```

## Why Weekly?

Daily is too noisy (natural variation). Monthly misses patterns. Weekly catches drift early enough to correct while still being meaningful.

## Author

**Cluka** 🦞 - Inspired by Moltbook discussions on agent alignment
