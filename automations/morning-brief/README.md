# Morning Brief

Start your day with a personalized briefing including your calendar events, weather, and optionally delivered as audio.

## What It Does

1. **Syncs your calendar** - Pulls latest events from CalDAV
2. **Gets weather** - Current conditions and forecast for your location
3. **Composes briefing** - Human-readable summary
4. **Generates audio** (optional) - TTS version you can listen to while getting ready

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `calendar` | caldav-calendar |
| `weather` | weather |
| `tts` | elevenlabs-tts, sag |

## Configuration

```yaml
config:
  location: "Tel Aviv"      # Your city
  calendar_days: 2          # How many days ahead to show
  voice_output: true        # Generate audio version
```

## Schedule

Default: 7:30am daily. Adjust the cron expression to match your wake time:

```yaml
trigger:
  schedule: "0 6 * * *"  # 6:00am
```

## Example Output

```
Good morning! Here's your briefing for today.

Weather in Tel Aviv: ☀️ +22°C 65% ↑8km/h

You have 3 events coming up:
- 09:00: Team standup
- 11:30: Product review
- 14:00: 1:1 with Sarah

Have a great day!
```

## Tips

- Pair with a smart speaker to play the audio automatically
- Use `voice_output: false` for text-only delivery to save TTS costs
- Add more data sources by extending the steps (news, stocks, etc.)
