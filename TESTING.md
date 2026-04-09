# ClawFlows Testing Matrix

## Dry-run validated modernized workflows

These workflows were migrated to the modern capability-based schema and validated with `clawflows run ... --dry-run --debug`.

| Workflow | Status | Notes |
|---|---|---|
| onboarding-dropoff-explainer | ✅ Dry-run tested | Session replay made optional |
| audience-growth-report | ✅ Dry-run tested | Migrated from legacy analytics schema |
| attribution-detective | ✅ Dry-run tested | Uses built-in `database` + `llm` |
| engagement-analyzer | ✅ Dry-run tested | Modern analytics flow |
| newsletter-growth | ✅ Dry-run tested | Uses built-in `web-search` + `email` |
| social-engagement-tracker | ✅ Dry-run tested | Modern analytics flow |
| affiliate-builder | ✅ Dry-run tested | Outreach cluster |
| backlink-hunter | ✅ Dry-run tested | Outreach cluster |
| cold-email-personalizer | ✅ Dry-run tested | Outreach cluster |
| partnership-scout | ✅ Dry-run tested | Outreach cluster |
| api-health-monitor | ✅ Dry-run tested | Monitoring cluster |
| security-advisory-monitor | ✅ Dry-run tested | Monitoring cluster |
| stock-watchlist-alert | ✅ Dry-run tested | Monitoring cluster |
| trending-topic-alert | ✅ Dry-run tested | Monitoring cluster |
| content-calendar | ✅ Dry-run tested | Content cluster |
| content-repurposer | ✅ Dry-run tested | Content cluster |
| content-syndication | ✅ Dry-run tested | Content cluster |
| support-to-content | ✅ Dry-run tested | Content cluster |
| database-backup-verifier | ✅ Dry-run tested | Engineering maintenance |
| dependency-updater | ✅ Dry-run tested | Engineering maintenance |
| docker-image-scanner | ✅ Dry-run tested | Engineering maintenance |
| test-coverage-monitor | ✅ Dry-run tested | Engineering maintenance |
| customer-enrichment | ✅ Dry-run tested | Sales / research |
| influencer-outreach | ✅ Dry-run tested | Sales / outreach |
| lead-qualifier | ✅ Dry-run tested | AgentMail-driven lead triage |
| pr-newsjacking | ✅ Dry-run tested | Sales / outreach |

## What dry-run validation means

Dry-run validation confirms that:
- the workflow parses in the modern schema
- capability resolution succeeds
- step interpolation/capture flow works
- notify and follow-on steps do not crash in dry-run

Dry-run validation does **not** confirm:
- live provider correctness
- real data quality
- side-effecting behavior like sends, writes, publishing, or restores
- end-to-end production safety

## Related runtime fixes

These `clawflows-cli` changes were made to support the migrated workflows:
- `e590eb2` Treat `llm` as built-in workflow capability
- `1b00e4d` Capture dry-run placeholders for workflow steps
- `8f9b7da` Treat `database` as built-in workflow capability
- `2b50dd0` Treat `web search` and `web fetch` as built-in workflow capabilities
- `97ec5f6` Treat `exec` as built-in workflow capability
