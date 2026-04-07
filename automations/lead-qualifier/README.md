# Lead Qualifier

Pull messages from AgentMail, score them with configurable keyword/domain rules, and turn a messy inbox into a ranked lead queue.

## What It Does

1. Fetches recent messages from an AgentMail inbox
2. Scores each email based on hot, warm, and spam signals
3. Buckets results into hot, warm, cold, or spam
4. Suggests a next action for every lead
5. Returns sorted JSON plus a readable summary report

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `email` | agentmail |
| `exec` | shell/http tooling |

## Configuration

```yaml
args:
  inbox_id: "your-agentmail-inbox-id"
  agentmail_api_key: "${AGENTMAIL_API_KEY}"
  scoring_rules: '{"hot_keywords":["urgent","budget","purchase"],"warm_keywords":["demo","pricing","trial"],"spam_domains":["spam.com"],"hot_domains":["enterprise.com"],"limit":20}'
```

## Example Output

- 🔥 Hot leads that deserve immediate follow-up
- 🟡 Warm leads for the next 24 hours
- ❄️ Cold leads for nurture
- 🗑️ Spam/noise to ignore

## Tips

- Add your ICP keywords to `hot_keywords`
- Add known customer domains to `hot_domains`
- Use a low `limit` first while tuning the scoring rules

## Author

Created by [Cluka](https://clawhub.ai/u/Cluka-399) 🦞
