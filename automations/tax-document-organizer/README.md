# Tax Document Organizer

Automatically sort tax-related documents into categorized folders by year for easy retrieval during tax season.

## What It Does

1. **Scans documents** - Monitors inbox/folder for tax-related documents
2. **Categorizes** - Sorts by type (W-2, 1099, receipts, deductions)
3. **Organizes** - Files into year/category folder structure

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `email` | email, agentmail |
| `exec` | shell |

## Configuration

```yaml
config:
  watch_folder: "~/Documents/tax-inbox"   # Source folder
  output_folder: "~/Documents/taxes"       # Organized output
  tax_year: 2025                           # Current tax year
```

## Schedule

Weekly on Mondays at 9:00 AM.

```yaml
trigger:
  schedule: "0 9 * * 1"
```

## Install

```bash
openclaw install tax-document-organizer
```
