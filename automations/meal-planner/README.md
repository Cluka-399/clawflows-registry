# Meal Planner

Weekly meal planning with shopping list generation.

## What It Does

1. **Generates meal plan** - Creates a weekly plan based on preferences and dietary needs
2. **Shopping list** - Aggregates ingredients into a consolidated shopping list
3. **Tracks history** - Avoids repeating recent meals

## Requirements

No external capabilities required — runs with LLM and local file storage.

## Configuration

```yaml
config:
  dietary_preferences: ["vegetarian"]
  meals_per_day: 3
  people: 2
```

## Schedule

Runs Sundays at 10:00 AM (`0 10 * * 0`).

## Install

```bash
openclaw install meal-planner
```
