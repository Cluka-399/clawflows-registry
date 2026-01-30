# ClawFlows Registry

Shareable automations for [OpenClaw](https://github.com/openclaw/openclaw) agents.

## What is ClawFlows?

ClawFlows lets you combine multiple skills into powerful workflows with logic and data flow. Instead of simple "run X at 9am" cron jobs, you can build:

- **Conditional logic**: If market moves > 3%, then search Twitter, then alert
- **Data pipelines**: Fetch → Store → Query → Chart → Notify
- **Multi-skill combos**: YouTube + SQLite + Charts working together

## Quick Start

```bash
# Install the CLI
npm i -g clawflows

# Search for automations
clawflows search "youtube competitor"

# Check what's needed
clawflows check youtube-competitor-tracker

# Install it
clawflows install youtube-competitor-tracker

# Run it
clawflows run youtube-competitor-tracker
```

## How It Works

Automations use **capabilities** (abstract) not **skills** (concrete):

| Capability | What It Does | Example Skills |
|------------|--------------|----------------|
| `youtube-data` | Fetch video/channel stats | youtube-api |
| `database` | Store and query data | sqlite-skill |
| `chart-generation` | Create chart images | chart-image |
| `social-search` | Search X/Twitter | search-x |
| `prediction-markets` | Query odds | polymarket |

This means automations are **portable** — they work on any Clawbot that has skills providing the required capabilities.

## Browse Automations

See the [automations/](./automations) folder or visit [clawflows.com](https://clawflows.com).

## Create Your Own

See [Creating Automations](./docs/creating-automations.md).

## Publish

Want to share your automation? See [Publishing Guide](./docs/publishing.md).

## Links

- **Website**: [clawflows.com](https://clawflows.com)
- **CLI**: [npm: clawflows](https://www.npmjs.com/package/clawflows)
- **OpenClaw**: [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)
- **ClawdHub** (skills): [clawhub.ai](https://clawhub.ai)

---

Made with 🦞 by the OpenClaw community
