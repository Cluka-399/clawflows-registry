const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const workflows = [
  'onboarding-dropoff-explainer',
  'audience-growth-report',
  'attribution-detective',
  'engagement-analyzer',
  'newsletter-growth',
  'social-engagement-tracker',
  'affiliate-builder',
  'backlink-hunter',
  'cold-email-personalizer',
  'partnership-scout',
  'api-health-monitor',
  'security-advisory-monitor',
  'stock-watchlist-alert',
  'trending-topic-alert',
  'content-calendar',
  'content-repurposer',
  'content-syndication',
  'support-to-content',
  'database-backup-verifier',
  'dependency-updater',
  'docker-image-scanner',
  'test-coverage-monitor',
  'customer-enrichment',
  'influencer-outreach',
  'lead-qualifier',
  'pr-newsjacking',
];

const root = process.cwd();
const errors = [];
const clawflowsBin = process.env.CLAWFLOWS_BIN || 'clawflows';

function getCommand(bin, file) {
  const args = ['run', file, '--dry-run', '--dir', path.join(root, '.tmp', 'clawflows-smoke')];
  if (/\.(mjs|js|cjs)$/i.test(bin)) {
    return { command: process.execPath, args: [bin, ...args] };
  }
  return { command: bin, args };
}

for (const name of workflows) {
  const file = path.join(root, 'automations', name, 'automation.yaml');
  if (!fs.existsSync(file)) {
    errors.push(`${name}: missing automation.yaml`);
    continue;
  }

  console.log(`\n🧪 Dry-run smoke: ${name}`);
  const cmd = getCommand(clawflowsBin, file);
  const result = spawnSync(cmd.command, cmd.args, {
    cwd: root,
    encoding: 'utf8',
    env: process.env,
  });

  process.stdout.write(result.stdout || '');
  process.stderr.write(result.stderr || '');

  if (result.error) {
    errors.push(`${name}: failed to start (${result.error.message})`);
  } else if (result.status !== 0) {
    errors.push(`${name}: exited with code ${result.status}`);
  }
}

if (errors.length) {
  console.error('\n🚨 Dry-run smoke validation failed:\n');
  for (const err of errors) console.error(`- ${err}`);
  process.exit(1);
}

console.log(`\n✅ Dry-run smoke validation passed for ${workflows.length} workflows.`);
