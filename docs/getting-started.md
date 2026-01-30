# Getting Started with ClawFlows

ClawFlows lets you run multi-skill automations on your Clawbot.

## Prerequisites

- An OpenClaw/Clawdbot instance
- Node.js 18+ installed

## Install the CLI

```bash
npm i -g clawflows
```

## Find an Automation

Browse [clawflows.com](https://clawflows.com) or search from the CLI:

```bash
clawflows search "competitor"
clawflows search "morning brief"
clawflows search --capability chart-generation
```

## Check Requirements

Before installing, see what capabilities the automation needs:

```bash
clawflows check youtube-competitor-tracker
```

Output:
```
youtube-competitor-tracker requires:

  ✅ youtube-data
     Provided by: youtube-api (installed)

  ❌ database
     Not installed. Skills that provide this:
     - sqlite-skill (recommended)
     - postgres-skill

  ✅ chart-generation
     Provided by: chart-image (installed)

Install missing skills from ClawdHub, then try again.
```

## Install Missing Skills

Use ClawdHub to install any missing capabilities:

```bash
clawdhub install sqlite-skill
```

## Install the Automation

```bash
clawflows install youtube-competitor-tracker
```

This downloads the automation YAML to `/data/automations/youtube-competitor-tracker.yaml`.

## Configure

Most automations have a `config:` section you can customize:

```yaml
config:
  channels:
    description: "Competitor channels to track"
    default: ["@MrBeast", "@PewDiePie"]
```

Edit the YAML to set your own values.

## Run

```bash
# Run once now
clawflows run youtube-competitor-tracker

# Dry run (show what would happen)
clawflows run youtube-competitor-tracker --dry-run
```

## Schedule

Enable the automation's built-in schedule:

```bash
clawflows enable youtube-competitor-tracker
```

Or disable it:

```bash
clawflows disable youtube-competitor-tracker
```

## View Logs

```bash
clawflows logs youtube-competitor-tracker
clawflows logs youtube-competitor-tracker --last 5
```

## Next Steps

- [Create your own automation](./creating-automations.md)
- [Publish to the registry](./publishing.md)
- [Capability reference](./capability-reference.md)
