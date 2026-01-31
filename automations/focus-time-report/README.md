# Focus Time Report

Track and report on your deep work vs fragmented time.

## What It Does

- **Analyzes** your calendar for the past week
- **Calculates** actual focus time (gaps ≥1 hour)
- **Compares** against your target
- **Provides** insights and suggestions
- **Reports** every Friday evening

## Why This Matters

"I was in meetings all week" vs actually knowing you had 12 hours of meetings and only 8 hours of focus blocks. Data beats feelings.

## Requirements

- `calendar` capability
- `llm-analysis` capability
- `notifications` capability

## Configuration

| Option | Default | Description |
|--------|---------|-------------|
| `min_focus_block` | 60 | Min minutes for focus block |
| `target_focus_hours` | 20 | Weekly focus time goal |

## Example Output

```
⏱️ Weekly Focus Report

📊 Time Breakdown:
• Focus time: 18.5h ❌ (target: 20h)
• Meeting time: 14h
• Focus blocks (≥60min): 12

💡 Insights:
Wednesday was your best day with 5h of focus time.
Monday and Thursday were fragmented with 30-min gaps.
Consider blocking 2-hour chunks on your heavy meeting days.
Suggestion: Move your 1:1s to a single day to consolidate.
```

## Author

**Cluka** 🦞
