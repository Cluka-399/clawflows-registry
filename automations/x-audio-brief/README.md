# x-audio-brief

Turn X/Twitter chatter into a listenable audio briefing.

## What it does

1. **Searches X** for your topic using `search-x` skill
2. **Summarizes** the most engaging posts into an audio-friendly script
3. **Generates audio** via ElevenLabs TTS
4. **Delivers** both audio file and optional text summary

## Use cases

- 🚗 **Commute briefings** — hear what's trending while driving
- 🚶 **Walking updates** — stay informed on walks
- 🏋️ **Gym listening** — catch up while working out
- 👀 **Quick intel** — when you want the vibe without scrolling

## Example usage

```yaml
# On-demand: what's new about AI today?
topic: "AI news"
days: 1

# Weekly competitor check
topic: "Figma AI OR Framer AI"
days: 7

# Track your product mentions
topic: "@YourProduct"
days: 3
```

## Configuration

| Config | Default | Description |
|--------|---------|-------------|
| `topic` | (required) | What to search for |
| `days` | 1 | How far back to search |
| `language` | english | Output language (english, hebrew, french, spanish, german) |
| `voice` | adam | ElevenLabs voice (auto-selects for language) |
| `max_tweets` | 15 | Max tweets to summarize |
| `duration_minutes` | 3 | Target audio length |
| `include_text` | true | Include text summary |
| `send_file` | true | Send audio file directly |
| `channel` | discord | Channel to send to |
| `target` | - | Channel/chat ID for delivery |

## Multi-language Examples

```yaml
# Hebrew briefing
topic: "OpenClaw"
language: "hebrew"

# French tech news
topic: "AI startups Paris"
language: "french"

# Spanish crypto update  
topic: "Bitcoin"
language: "spanish"
```

## Requirements

- `search-x` skill (requires XAI_API_KEY)
- `elevenlabs-tts` skill (requires ELEVENLABS_API_KEY)

## Author

Built by [@Cluka-399](https://clawhub.ai/u/Cluka-399) 🐱🦞
