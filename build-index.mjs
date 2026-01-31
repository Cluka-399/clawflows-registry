import fs from 'fs';
import path from 'path';

const automationsDir = './automations';
const automations = [];

const dirs = fs.readdirSync(automationsDir).filter(f => {
  const stat = fs.statSync(path.join(automationsDir, f));
  return stat.isDirectory();
});

for (const dir of dirs) {
  const yamlPath = path.join(automationsDir, dir, 'automation.yaml');
  const metaPath = path.join(automationsDir, dir, 'metadata.json');
  
  if (fs.existsSync(metaPath)) {
    try {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      automations.push({
        name: meta.name || dir,
        description: meta.description || '',
        author: meta.author || 'unknown',
        version: meta.version || '1.0.0',
        requires: meta.requires || [],
        trigger: meta.trigger || 'manual',
        schedule: meta.schedule || null,
        tags: meta.tags || [],
        created: meta.created || new Date().toISOString().split('T')[0],
        updated: meta.updated || new Date().toISOString().split('T')[0],
        url: `/automations/${dir}/`
      });
    } catch (e) {
      console.error(`Error parsing ${dir}:`, e.message);
    }
  }
}

const index = {
  generated: new Date().toISOString(),
  version: '1.0.0',
  count: automations.length,
  automations: automations.sort((a, b) => a.name.localeCompare(b.name))
};

fs.writeFileSync('index.json', JSON.stringify(index, null, 2));
console.log(`Generated index.json with ${automations.length} automations`);
