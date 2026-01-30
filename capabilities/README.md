# Capabilities Registry

**Capabilities are the building blocks of ClawFlows automations.**

A capability is an abstract interface — it defines WHAT can be done, not HOW. Skills provide the HOW by implementing capabilities.

## Why Capabilities?

| Without Capabilities | With Capabilities |
|---------------------|-------------------|
| `use: polymarket-skill` | `needs: prediction-markets` |
| Breaks if skill changes | Works with any implementing skill |
| Tied to specific tools | Portable across setups |

## Available Capabilities

| Capability | Description | Methods |
|------------|-------------|---------|
| [prediction-markets](./prediction-markets.md) | Query prediction market prices and odds | getPrice, getHistory, search |
| [chart-generation](./chart-generation.md) | Generate chart images from data | lineChart, barChart |
| [database](./database.md) | Store and query structured data | query, upsert, execute |
| [social-search](./social-search.md) | Search social platforms | search |
| [youtube-data](./youtube-data.md) | Fetch YouTube statistics | getRecentVideos, getChannelStats |
| [weather](./weather.md) | Get weather forecasts | current, forecast |
| [calendar](./calendar.md) | Read and write calendar events | list, create |
| [email](./email.md) | Send and receive email | send, list |
| [tts](./tts.md) | Text to speech | speak |

## Propose a New Capability

Have a use case that needs a capability that doesn't exist?

1. **Check existing** — maybe one already covers it
2. **Draft the interface** — what methods? what inputs/outputs?
3. **Open a PR** — add `capabilities/your-capability.md`
4. **Community review** — we discuss, refine, merge

### Template for new capability:

```markdown
# capability-name

One-line description.

## Methods

### methodName

**Input:**
- `param1`: type - description
- `param2`: type - description

**Output:**
- type - description

**Example:**
\`\`\`yaml
- capability: capability-name
  method: methodName
  args:
    param1: value
  capture: result
\`\`\`
```

## The Vision

Capabilities are how we build a **skill-agnostic ecosystem**:

1. **Authors** write automations using capabilities
2. **Skills** declare what capabilities they provide
3. **Agents** map capabilities to their installed skills
4. **Everyone wins** — automations work everywhere

This is infrastructure for the future of AI agent workflows.

---

[Browse capabilities →](https://clawflows.com/capabilities/)
