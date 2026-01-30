# Creating Automations

Automations are YAML files that define multi-step workflows.

## Basic Structure

```yaml
name: my-automation
description: What it does
author: your-name
version: 1.0.0

requires:
  - capability: database
  - capability: chart-generation

trigger:
  schedule: "0 9 * * *"  # cron expression

config:
  # User-editable settings
  threshold:
    description: "Alert threshold"
    default: 100

steps:
  - name: step-1
    capability: database
    method: query
    args:
      sql: "SELECT * FROM data"
    capture: results

  - name: step-2
    capability: chart-generation
    method: lineChart
    args:
      data: "${results}"
    capture: chart
```

## Capabilities vs Skills

Automations reference **capabilities**, not skills:

```yaml
# ✅ Good - uses capability
capability: database
method: query

# ❌ Bad - hardcodes a skill
skill: sqlite-skill
script: ./scripts/query.sh
```

This makes automations portable across different skill implementations.

## Steps

Each step can be:

### 1. Capability Call

```yaml
- name: fetch-data
  capability: youtube-data
  method: getRecentVideos
  args:
    channels: ["@MrBeast"]
    limit: 5
  capture: videos
```

### 2. Condition

```yaml
- name: check-threshold
  condition: "results.length > config.threshold"
  onFalse: exit  # or skip-to:step-name
```

### 3. Action

```yaml
- name: alert
  action: notify
  message: "Found ${results.length} items"
  attachments: ["${chart.path}"]
```

## Variable Interpolation

Use `${variable}` to reference captured data:

```yaml
- name: step-1
  capability: database
  method: query
  args:
    sql: "SELECT * FROM users"
  capture: users  # ← captured here

- name: step-2
  action: notify
  message: "Found ${users.length} users"  # ← used here
```

Available variables:
- `${config.xxx}` - Config values
- `${stepName}` - Captured output from named step
- `${stepName.field}` - Nested field access

## Triggers

### Schedule (cron)

```yaml
trigger:
  schedule: "0 9 * * *"  # 9am daily
```

### Manual only

```yaml
trigger:
  manual: true
```

## Config Section

Let users customize without editing steps:

```yaml
config:
  channels:
    description: "YouTube channels to track"
    default: ["@MrBeast", "@PewDiePie"]
    
  alert_email:
    description: "Email for alerts"
    required: true  # Must be set before running
    
  threshold:
    description: "Alert when views exceed this"
    default: 1000000
```

## Conditions

JavaScript expressions evaluated against context:

```yaml
# Simple comparison
condition: "results.length > 0"

# Config reference
condition: "totalViews > config.threshold"

# Array methods
condition: "results.some(r => r.views > 1000000)"

# Date check (run on Mondays only)
condition: "new Date().getDay() === 1"
```

### onFalse Options

```yaml
condition: "results.length > 0"
onFalse: exit          # Stop automation
onFalse: skip          # Skip this step, continue
onFalse: skip-to:alert # Jump to named step
```

## Actions

### notify

```yaml
- action: notify
  message: "Alert message"
  attachments: ["${chart.path}"]
```

Uses the bot's configured notification channel (Telegram, Discord, etc).

### email

```yaml
- action: email
  to: "user@example.com"
  subject: "Report"
  body: "${report}"
  attachments: ["${chart.path}"]
```

## Complete Example

```yaml
name: youtube-competitor-tracker
description: Track competitor YouTube channels daily
author: cluka
version: 1.0.0

requires:
  - capability: youtube-data
  - capability: database
  - capability: chart-generation

trigger:
  schedule: "0 9 * * *"

config:
  channels:
    description: "Competitor channels"
    default: ["@MrBeast", "@PewDiePie", "@Markiplier"]
  alert_threshold:
    description: "Alert if any video exceeds this many views"
    default: 10000000

steps:
  - name: fetch-videos
    capability: youtube-data
    method: getRecentVideos
    args:
      channels: "${config.channels}"
      limit: 5
    capture: videos

  - name: store
    capability: database
    method: upsert
    args:
      table: competitor_videos
      data: "${videos}"
      key: video_id

  - name: check-viral
    condition: "videos.some(v => v.views > config.alert_threshold)"
    onFalse: skip-to:weekly-chart

  - name: viral-alert
    action: notify
    message: |
      🚨 Viral video detected!
      ${videos.filter(v => v.views > config.alert_threshold).map(v => v.title).join('\n')}

  - name: weekly-chart
    condition: "new Date().getDay() === 1"
    onFalse: exit

  - name: get-history
    capability: database
    method: query
    args:
      sql: |
        SELECT channel, date, SUM(views) as views
        FROM competitor_videos
        WHERE date > date('now', '-30 days')
        GROUP BY channel, date

    capture: history

  - name: generate-chart
    capability: chart-generation
    method: lineChart
    args:
      data: "${history}"
      title: "Competitor Views (30 days)"
      groupBy: channel
    capture: chart

  - name: weekly-report
    action: notify
    message: "📊 Weekly competitor report"
    attachments: ["${chart.path}"]
```

## Testing

Before publishing, test locally:

```bash
# Validate syntax
clawflows validate ./my-automation.yaml

# Dry run (shows what would execute)
clawflows run ./my-automation.yaml --dry-run

# Actually run it
clawflows run ./my-automation.yaml
```

## Next Steps

- [Publish your automation](./publishing.md)
- [Capability reference](./capability-reference.md)
