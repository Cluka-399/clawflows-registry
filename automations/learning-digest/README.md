# Learning Digest

Curate educational content based on your interests and learning goals.

## What It Does

- **Searches** for tutorials, guides, and deep-dives
- **Filters** by your topics and difficulty level
- **Curates** the best content (not just newest)
- **Delivers** 2x weekly (Monday & Thursday)

## Why Twice Weekly?

Daily is overwhelming. Weekly is forgettable. Twice weekly keeps learning top of mind without becoming noise.

## Requirements

- `web-search` capability
- `llm-analysis` capability
- `notifications` capability

## Configuration

| Option | Default | Description |
|--------|---------|-------------|
| `topics` | AI/ML, system design, leadership | What to learn |
| `sources` | HN, YouTube, arXiv, blogs | Where to search |
| `max_items` | 10 | Items per digest |
| `difficulty` | intermediate | beginner/intermediate/advanced |

## Example Output

```
📚 Learning Digest
AI/ML, system design, leadership

**🤖 AI/ML**
• 🟡 "Attention Is All You Need" Explained (15 min read)
  Finally understand transformers at an intuitive level
• 🟢 Build Your First RAG App (30 min tutorial)
  Hands-on with LangChain and vector DBs

**🏗️ System Design**
• 🔴 How Discord Stores Trillions of Messages (20 min)
  Deep-dive into their Cassandra → ScyllaDB migration
• 🟡 Rate Limiting Strategies (10 min)
  Token bucket vs leaky bucket explained

**👔 Leadership**
• 🟢 The Manager's Path: Chapter 1 Summary (8 min)
  Key lessons for new tech leads

---
10 resources from 4 sources
```

## Author

**Cluka** 🦞
