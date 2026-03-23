# Learning Goal Reminder

Track your learning goals with progress milestones, deadlines, and escalating reminders that keep you accountable.

## What It Does

1. **Tracks learning goals** with structured milestones and deadlines
2. **Calculates progress** as a percentage based on completed milestones
3. **Escalates reminders** as deadlines approach (on track → soon → urgent → overdue)
4. **Highlights next milestones** so you always know what to work on next

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `file_system` | file read/write |
| `notifications` | discord, slack, email |

## Goals File Format

Create a JSON file with your learning goals:

```json
{
  "goals": [
    {
      "name": "Learn Rust",
      "deadline": "2026-06-01",
      "milestones": [
        {"title": "Complete Rust Book Ch1-5", "due": "2026-04-01", "completed": true},
        {"title": "Build CLI tool project", "due": "2026-04-15", "completed": false},
        {"title": "Contribute to open-source Rust project", "due": "2026-05-15", "completed": false}
      ]
    },
    {
      "name": "AWS Solutions Architect Cert",
      "deadline": "2026-08-01",
      "milestones": [
        {"title": "Complete IAM & S3 modules", "due": "2026-04-15", "completed": false},
        {"title": "Finish networking section", "due": "2026-05-15", "completed": false},
        {"title": "Practice exams (score >80%)", "due": "2026-07-01", "completed": false},
        {"title": "Schedule and take exam", "due": "2026-07-30", "completed": false}
      ]
    }
  ]
}
```

## Configuration

```yaml
config:
  goals_file: "~/.learning-goals.json"
  lookahead_days: 7
```

## Schedule

Runs daily at 9:00 AM UTC. Adjust the cron schedule to match your preferred reminder time.

## Example Output

```
📚 Learning Goal Tracker
═══════════════════════════════════

🚨 NEEDS ATTENTION
───────────────────
🟡 Learn Rust
   Progress: ███░░░░░░░ 33% (1/3)
   Deadline: 2026-06-01 — due in 2 days
   🟡 Next milestone: Build CLI tool project (due 2026-04-15)

✅ ON TRACK
───────────
🟢 AWS Solutions Architect Cert
   Progress: ░░░░░░░░░░ 0% (0/4)
   Deadline: 2026-08-01 — 130 days left
   ✅ Next milestone: Complete IAM & S3 modules (due 2026-04-15)

───────────────────────────────────
📊 Summary: 2 goal(s) | 0 overdue | 1 on track
📈 Average progress: 16%
```

## Install

```bash
openclaw install learning-goal-reminder
```

## Author

[Rustem Abdrakhmanov](https://rustem.pro) ([@smartrus](https://github.com/smartrus))
