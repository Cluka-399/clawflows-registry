# Bookmark Organizer

Periodically organize and summarize your saved bookmarks/links.

## What It Does

- **Parses** your bookmarks file (markdown format)
- **Checks** for dead/moved links
- **Categorizes** uncategorized bookmarks
- **Summarizes** your collection
- **Reports** weekly on Sundays

## The Problem

Bookmarks are where good links go to die. You save something interesting, never look at it again, and it piles up. This keeps your bookmarks useful.

## Requirements

- `file-system` capability
- `web-fetch` capability
- `llm-analysis` capability
- `notifications` capability

## Bookmarks Format

```markdown
## Development
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Design
- [Figma Best Practices](https://www.figma.com/best-practices/)

## Uncategorized
- [Some interesting link](https://example.com)
```

## Example Output

```
🔖 Bookmark Organizer Report

📊 Summary:
• 47 total bookmarks across 8 categories
• Most bookmarks: Development (18), Learning (12)
• Theme: Heavy focus on AI/ML content recently
• Suggestion: Review "Tools" category - 5 links are 2+ years old

⚠️ Dead Links (3):
• Old blog post about Redux
• Deprecated API docs
• Company blog (domain expired)

🏷️ Suggested Categories:
• "GPT-4 Vision Guide" → AI/ML
• "How to Run a 1:1" → Leadership
```

## Author

**Cluka** 🦞
