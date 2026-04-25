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
const mockSkillsDir = path.join(root, '.tmp', 'mock-skills');

function yamlScalar(value) {
  return JSON.stringify(String(value));
}

function stringifySkillFrontmatter(frontmatter) {
  const lines = [];
  lines.push(`name: ${yamlScalar(frontmatter.name)}`);
  lines.push(`description: ${yamlScalar(frontmatter.description)}`);

  if (frontmatter.provides?.length) {
    lines.push('provides:');
    for (const item of frontmatter.provides) {
      lines.push(`  - capability: ${yamlScalar(item.capability)}`);
    }
  }

  return lines.join('\n');
}

function parseRequiredCapabilities(yamlText) {
  const lines = yamlText.split(/\r?\n/);
  const requires = [];
  let inRequires = false;
  let current = null;

  function flushCurrent() {
    if (current?.capability) requires.push({ capability: current.capability });
    current = null;
  }

  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+#.*$/, '');
    if (!line.trim()) continue;

    if (/^requires:\s*$/.test(line)) {
      inRequires = true;
      continue;
    }

    if (inRequires && /^[A-Za-z0-9_-]+:\s*/.test(line)) {
      flushCurrent();
      break;
    }

    if (!inRequires) continue;

    const stringItem = line.match(/^\s*-\s*([A-Za-z0-9_-]+)\s*$/);
    if (stringItem) {
      flushCurrent();
      requires.push(stringItem[1]);
      continue;
    }

    const inlineCapability = line.match(/^\s*-\s*capability:\s*["']?([^"'#\s]+)["']?\s*$/);
    if (inlineCapability) {
      flushCurrent();
      requires.push({ capability: inlineCapability[1] });
      continue;
    }

    const newObject = line.match(/^\s*-\s*$/);
    if (newObject) {
      flushCurrent();
      current = {};
      continue;
    }

    const nestedCapability = line.match(/^\s+capability:\s*["']?([^"'#\s]+)["']?\s*$/);
    if (nestedCapability) {
      current = current || {};
      current.capability = nestedCapability[1];
    }
  }

  flushCurrent();
  return requires;
}

function getAutomationRequires(file) {
  return parseRequiredCapabilities(fs.readFileSync(file, 'utf8'));
}

function getCommand(bin, file) {
  const args = ['run', file, '--dry-run', '--dir', path.join(root, '.tmp', 'clawflows-smoke')];
  if (/\.(mjs|js|cjs)$/i.test(bin)) {
    return { command: process.execPath, args: [bin, ...args] };
  }
  return { command: bin, args };
}

function ensureMockSkill(name, provides = []) {
  const skillDir = path.join(mockSkillsDir, name);
  fs.mkdirSync(skillDir, { recursive: true });

  const frontmatter = {
    name,
    description: `CI stub skill for ${name}`,
  };

  if (provides.length) {
    frontmatter.provides = provides.map(capability => ({ capability }));
  }

  const skillMd = `---\n${stringifySkillFrontmatter(frontmatter)}\n---\n\n# ${name}\n\nCI stub skill used only for dry-run smoke tests.\n`;
  fs.writeFileSync(path.join(skillDir, 'SKILL.md'), skillMd);
}

function setupMockSkills() {
  fs.rmSync(mockSkillsDir, { recursive: true, force: true });
  fs.mkdirSync(mockSkillsDir, { recursive: true });

  for (const name of workflows) {
    const file = path.join(root, 'automations', name, 'automation.yaml');
    if (!fs.existsSync(file)) continue;

    const requires = getAutomationRequires(file);
    for (const req of requires) {
      if (typeof req === 'string') {
        ensureMockSkill(req, [req]);
        continue;
      }

      if (req && typeof req === 'object' && req.capability) {
        ensureMockSkill(req.capability, [req.capability]);
      }
    }
  }
}

setupMockSkills();

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
    env: {
      ...process.env,
      CLAWFLOWS_SKILLS: mockSkillsDir,
    },
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
