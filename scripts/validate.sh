#!/bin/sh
# Validates all automations in the registry
# Every automation MUST have:
#   1. automation.yaml
#   2. lobster/workflow.yaml (Lobster protocol required)
#
# Usage: ./scripts/validate.sh [--strict]
# Exit code 0 = all valid, 1 = issues found

STRICT="${1:-}"
ERRORS=0
WARNINGS=0
TOTAL=0

for dir in automations/*/; do
  [ ! -d "$dir" ] && continue
  name=$(basename "$dir")
  TOTAL=$((TOTAL + 1))

  # Check automation.yaml exists
  if [ ! -f "$dir/automation.yaml" ]; then
    echo "❌ FAIL: $name — missing automation.yaml"
    ERRORS=$((ERRORS + 1))
    continue
  fi

  # Check lobster/workflow.yaml exists (REQUIRED)
  if [ ! -f "$dir/lobster/workflow.yaml" ]; then
    echo "❌ FAIL: $name — missing lobster/workflow.yaml (Lobster protocol required)"
    ERRORS=$((ERRORS + 1))
    continue
  fi

  # Check workflow.yaml has required fields
  if ! grep -q "^name:" "$dir/lobster/workflow.yaml"; then
    echo "⚠️  WARN: $name — lobster/workflow.yaml missing 'name' field"
    WARNINGS=$((WARNINGS + 1))
  fi

  if ! grep -q "^steps:" "$dir/lobster/workflow.yaml"; then
    echo "❌ FAIL: $name — lobster/workflow.yaml missing 'steps' field"
    ERRORS=$((ERRORS + 1))
    continue
  fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Validated $TOTAL automations"
echo "   ✅ Pass: $((TOTAL - ERRORS))"
echo "   ❌ Fail: $ERRORS"
echo "   ⚠️  Warn: $WARNINGS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ "$ERRORS" -gt 0 ]; then
  echo ""
  echo "❌ Validation FAILED — all automations must include lobster/workflow.yaml"
  exit 1
fi

echo ""
echo "✅ All automations follow the Lobster protocol!"
exit 0
