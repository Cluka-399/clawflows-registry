# Customer Enrichment

Enrich customer/lead data from an email address or domain. Based on [@pontusab's Midday pattern](https://x.com/pontusab) using multi-step AI analysis.

## What It Does

1. **Extract domain** from email or use directly
2. **Scrape company website** — homepage, about, team, pricing, careers pages
3. **Search LinkedIn** for key people (CEO, CTO, founders, VPs)
4. **Find recent news** — funding, launches, announcements
5. **Detect tech stack** via web search
6. **LLM enrichment** — AI analyzes all data to extract:
   - Company info and description
   - Key people with titles
   - Estimated company size
   - Tech stack
   - Momentum signals
   - Pain points (matched to your product)
   - Outreach hooks for personalization

## Usage

### With Lobster CLI

```bash
# From email
lobster run --file workflow.yaml \
  --args-json '{"input":"john@stripe.com","product_context":"AI coding tools"}'

# From domain
lobster run --file workflow.yaml \
  --args-json '{"input":"linear.app","product_context":"Developer productivity platform"}'
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `BRAVE_API_KEY` | Yes | Brave Search API key |
| `LLM_API_KEY` | No* | Anthropic API key for Claude |
| `OPENAI_API_KEY` | No* | OpenAI API key (fallback) |

*At least one LLM key recommended for full enrichment

### Customization

```bash
# Use different LLM
lobster run --file workflow.yaml \
  --args-json '{
    "input": "notion.so",
    "llm_model": "claude-opus-4-5-20241022",
    "product_context": "Enterprise collaboration tools"
  }'
```

## Output

Returns structured JSON:

```json
{
  "enrichment": {
    "company_name": "Stripe",
    "domain": "stripe.com",
    "description": "Financial infrastructure for the internet...",
    "industry": "FinTech",
    "people": [
      {"name": "Patrick Collison", "title": "CEO", "linkedin_url": "..."}
    ],
    "estimated_size": "5000+",
    "tech_stack": ["Ruby", "Go", "React", "AWS"],
    "recent_activity": ["Raised Series I at $95B valuation"],
    "pain_points": ["Developer experience at scale", "..."],
    "outreach_hooks": ["Reference their recent API docs redesign", "..."]
  },
  "meta": {
    "original_input": "john@stripe.com",
    "enriched_at": "2024-02-05T20:30:00Z"
  }
}
```

## Use Cases

- **Sales prospecting** — Enrich leads before outreach
- **Customer research** — Understand new signups
- **Competitive analysis** — Research competitor customers
- **Account-based marketing** — Build target account profiles

## Credits

Inspired by [@pontusab's Midday pattern](https://x.com/pontusab) — multi-step AI agent using Gemini + URL Context + Google Search grounding + Zod schema for structured extraction.

Adapted for ClawFlows with:
- Lobster shell workflow for portability
- Brave Search instead of Google (no API key hassle)
- OpenAI-compatible LLM support (Claude, GPT-4, etc.)
