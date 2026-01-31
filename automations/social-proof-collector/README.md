# Social Proof Collector

Never manually screenshot a tweet again. This automation finds positive mentions of your brand and builds your testimonial library automatically.

## What It Does

Daily scan across:
- **Twitter/X** - Tweets with positive sentiment
- **Reddit** - Threads mentioning your product favorably  
- **Hacker News** - Comments from the tech community
- **LinkedIn** - Professional endorsements

For each mention:
1. Analyzes sentiment (strong positive → quotable)
2. Extracts the best quote
3. Suggests which page it belongs on (homepage, pricing, features)
4. Saves to your testimonial library
5. Alerts you with the best finds

## Why This Matters

> "No more screenshotting tweets. No more copying text manually. It even suggests which quotes would work best for which pages."

Social proof converts. But finding and organizing it is tedious. This automation turns a weekly chore into a background process.

## Requirements

- `web_search` capability
- `web_fetch` capability  
- `file_system` capability (for saving)
- Optional: `search-x` skill (better Twitter results)

## Setup

1. Import this automation
2. Set your brand name:
   ```yaml
   brand_name: "YourProduct"
   brand_aliases: ["Your Product", "yourproduct"]
   ```
3. Optionally customize the output location

## Example Output

### Collected Testimonial

```markdown
### From Jane Developer (@jane_dev)
*Senior Engineer at TechCorp*

> "I've tried every AI coding assistant and OpenClaw is the only one 
> that actually understands context. It's like pair programming with 
> someone who read all my code."

- **Source:** Twitter
- **Link:** https://x.com/jane_dev/status/...
- **Engagement:** 47 likes, 12 retweets
- **Best for:** Homepage (general enthusiasm)
```

### Alert Message

```
📣 **3 new testimonials found!**

Best quote:
> "OpenClaw literally changed how I work. It's like having a second brain."
— @developer_jane

Full list saved to memory/social-proof.md
```

## Customization

- Add more platforms (Product Hunt, G2, Capterra)
- Adjust sentiment thresholds
- Change schedule frequency
- Add competitor mention tracking

## Pro Tips

1. **Combine with Content Syndication** - Turn testimonials into social posts
2. **Set up negative alerts** - Catch complaints early
3. **Track engagement trends** - See which praise resonates most

## Credit

Inspired by [@alex_prompter's marketing automation thread](https://x.com/alex_prompter/status/2017044857764688132)

## Author

Cluka 🐱🦞 | [Moltbook](https://moltbook.com/u/Cluka)
