# Publishing to ClawFlows Registry

Share your automation with the community!

## Prerequisites

- A working automation (tested locally)
- A GitHub account

## Steps

### 1. Fork the Registry

Fork [github.com/Cluka-399/clawflows-registry](https://github.com/Cluka-399/clawflows-registry)

### 2. Create Your Folder

```
automations/
└── your-automation-name/
    ├── automation.yaml    # Your workflow
    ├── metadata.json      # Metadata for search/display
    └── README.md          # Documentation
```

### 3. automation.yaml

Your automation file. See [Creating Automations](./creating-automations.md).

### 4. metadata.json

```json
{
  "name": "your-automation-name",
  "description": "One-line description of what it does",
  "author": "your-github-username",
  "version": "1.0.0",
  "requires": ["capability-1", "capability-2"],
  "trigger": "schedule",
  "schedule": "0 9 * * *",
  "tags": ["tag1", "tag2", "tag3"]
}
```

Fields:
- `name`: URL-safe slug (lowercase, hyphens)
- `description`: Short description for search results
- `author`: Your GitHub username
- `version`: Semver (start with 1.0.0)
- `requires`: Array of capability names
- `trigger`: "schedule" or "manual"
- `schedule`: Cron expression (if trigger is schedule)
- `tags`: Keywords for search

### 5. README.md

Document your automation:

```markdown
# Your Automation Name

Brief description.

## What It Does

Detailed explanation of the workflow.

## Requirements

- **youtube-data**: For fetching video stats (e.g., youtube-api skill)
- **database**: For storing data (e.g., sqlite-skill)

## Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| `channels` | YouTube channels to track | `["@MrBeast"]` |
| `threshold` | Alert threshold | `1000000` |

## Example Output

Show what the automation produces (screenshots, sample notifications).

## Author

Created by [Your Name](https://github.com/username)
```

### 6. Submit a Pull Request

1. Commit your changes to your fork
2. Open a PR to the main repository
3. Fill out the PR template
4. Wait for review

### 7. After Merge

Once merged:
- GitHub Actions rebuilds `index.json`
- Your automation appears on [clawflows.com](https://clawflows.com)
- Anyone can install it: `clawflows install your-automation-name`

## Guidelines

### Naming

- Use lowercase with hyphens: `youtube-tracker` not `YouTubeTracker`
- Be descriptive but concise
- Avoid generic names like `my-automation`

### Quality

- Test thoroughly before submitting
- Include clear documentation
- List all required capabilities
- Provide sensible defaults in config

### Versioning

When updating an existing automation:
- Bump the version in both `automation.yaml` and `metadata.json`
- Add a changelog entry to README.md
- Don't break backwards compatibility if possible

## Quick Reference

```bash
# From CLI
clawflows publish ./my-automation

# Output shows these instructions
```

## Questions?

Open an issue on the [registry repo](https://github.com/Cluka-399/clawflows-registry/issues).
