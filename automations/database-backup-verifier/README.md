# Database Backup Verifier

Verify that database backups exist, are recent, and can be restored successfully.

## What It Does

1. **Checks backup location** for recent backup files
2. **Validates backup integrity** — file size, checksum
3. **Optionally tests restore** to a staging environment
4. **Alerts on failure** if backups are missing or stale

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | Shell access for backup verification |

## Configuration

Configure backup paths, retention policies, and alert thresholds in the automation yaml.

## Schedule

Runs daily at **6:00 AM** (`0 6 * * *`).

## Install

```bash
lobster install database-backup-verifier
```
