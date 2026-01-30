#!/bin/bash
# Validate an automation directory structure and content
# Usage: ./validate-automation.sh /path/to/automation

set -e

AUTOMATION_DIR="$1"

if [ -z "$AUTOMATION_DIR" ]; then
  echo "Usage: $0 <automation-directory>"
  exit 1
fi

if [ ! -d "$AUTOMATION_DIR" ]; then
  echo "❌ Directory not found: $AUTOMATION_DIR"
  exit 1
fi

ERRORS=0
WARNINGS=0

echo "🔍 Validating: $AUTOMATION_DIR"
echo "---"

# Check automation.yaml exists
if [ ! -f "$AUTOMATION_DIR/automation.yaml" ]; then
  echo "❌ Missing: automation.yaml"
  ((ERRORS++))
else
  echo "✅ Found: automation.yaml"
  
  # Check required fields in YAML
  if ! grep -q "^name:" "$AUTOMATION_DIR/automation.yaml"; then
    echo "❌ Missing field: name"
    ((ERRORS++))
  fi
  
  if ! grep -q "^description:" "$AUTOMATION_DIR/automation.yaml"; then
    echo "❌ Missing field: description"
    ((ERRORS++))
  fi
  
  if ! grep -q "^version:" "$AUTOMATION_DIR/automation.yaml"; then
    echo "❌ Missing field: version"
    ((ERRORS++))
  fi
  
  if ! grep -q "requires:" "$AUTOMATION_DIR/automation.yaml"; then
    echo "❌ Missing field: requires (capabilities)"
    ((ERRORS++))
  fi
  
  if ! grep -q "steps:" "$AUTOMATION_DIR/automation.yaml"; then
    echo "❌ Missing field: steps"
    ((ERRORS++))
  fi
  
  if ! grep -q "trigger:" "$AUTOMATION_DIR/automation.yaml"; then
    echo "⚠️ Missing field: trigger (optional but recommended)"
    ((WARNINGS++))
  fi
fi

# Check metadata.json exists
if [ ! -f "$AUTOMATION_DIR/metadata.json" ]; then
  echo "❌ Missing: metadata.json"
  ((ERRORS++))
else
  echo "✅ Found: metadata.json"
fi

# Check README.md exists and has required sections
if [ ! -f "$AUTOMATION_DIR/README.md" ]; then
  echo "❌ Missing: README.md"
  ((ERRORS++))
else
  echo "✅ Found: README.md"
  
  # Check for required sections
  if ! grep -qi "## What It Does\|## What it Does\|## What it does" "$AUTOMATION_DIR/README.md"; then
    echo "❌ README missing section: What It Does"
    ((ERRORS++))
  fi
  
  if ! grep -qi "## Requirements" "$AUTOMATION_DIR/README.md"; then
    echo "❌ README missing section: Requirements"
    ((ERRORS++))
  fi
  
  if ! grep -qi "## Example Output\|## Example\|### Example\|## Alert Types\|## Output" "$AUTOMATION_DIR/README.md"; then
    echo "❌ README missing section: Example Output"
    ((ERRORS++))
  fi
  
  if ! grep -qi "## Author" "$AUTOMATION_DIR/README.md"; then
    echo "⚠️ README missing section: Author (recommended)"
    ((WARNINGS++))
  fi
  
  if ! grep -qi "## Configuration\|## Config" "$AUTOMATION_DIR/README.md"; then
    echo "⚠️ README missing section: Configuration (recommended)"
    ((WARNINGS++))
  fi
fi

echo "---"
echo "Results: $ERRORS errors, $WARNINGS warnings"

if [ $ERRORS -gt 0 ]; then
  echo "❌ Validation FAILED"
  exit 1
else
  echo "✅ Validation PASSED"
  exit 0
fi
