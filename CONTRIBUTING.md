# Contributing to ClawFlows

Thanks for contributing! 🦞

## Automation Requirements

Every automation **must** include:

```
automations/your-automation/
├── automation.yaml          # Abstract description (capabilities, triggers, params)
└── lobster/
    └── workflow.yaml        # Concrete Lobster workflow (shell commands)
```

### automation.yaml (required)
Describes **what** the automation does:
- `name`, `description`, `version`, `author`
- `requires` — capabilities needed
- `tags` — for search/filtering
- `steps` — abstract workflow description

### lobster/workflow.yaml (required)
Defines **how** it actually runs via the [Lobster engine](https://github.com/openclaw/lobster):
- Every step must be a **concrete shell command**
- Use `${argName}` for arguments, `$stepId.stdout` for step references
- Must include `name`, `args`, and `steps` fields
- **Must be tested** — workflow should run successfully with example args

### Guidelines
- LLM-dependent steps → replace with concrete data-collection + comment noting where to pipe to LLM
- Use temp files for JSON processing (not shell variable piping)
- Include sensible default args for testing
- Use public APIs where possible (Brave Search, GitHub, HN Algolia)

## Validation

Before submitting, run:
```bash
./scripts/validate.sh
```

All automations must pass validation.

## PR Process
1. Fork the repo
2. Add your automation in `automations/your-name/`
3. Include both `automation.yaml` and `lobster/workflow.yaml`
4. Run `./scripts/validate.sh` — must pass
5. Open a PR with a description of what it does
