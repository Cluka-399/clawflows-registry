import fs from 'fs';
import path from 'path';

const automationsDir = path.resolve('./automations');

function readText(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function slugToLabel(value) {
  return String(value || '')
    .split('-')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function prettyTitle(title, slug) {
  const raw = String(title || '').trim();
  if (!raw) return slugToLabel(slug);
  if (raw.includes('-') && raw === raw.toLowerCase()) return slugToLabel(raw);
  return raw;
}

function parseJson(filePath) {
  const raw = readText(filePath);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function extractSection(markdown, title) {
  if (!markdown) return '';
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(?:^|\\n)## ${escaped}\\n([\\s\\S]*?)(?=\\n## |\\n# |$)`);
  const match = markdown.match(regex);
  return match ? match[1].trim() : '';
}

function stripMarkdown(md) {
  return String(md || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/[*_>#-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseSimpleList(section) {
  if (!section) return [];
  return section
    .split('\n')
    .map(line => line.trim())
    .filter(line => /^[-*]|^\d+\./.test(line))
    .map(line => line.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, '').trim())
    .filter(Boolean);
}

function parseYamlListBlock(yamlText, key) {
  const lines = String(yamlText || '').split('\n');
  const out = [];
  const keyLine = `${key}:`;
  let inBlock = false;
  let baseIndent = 0;
  let currentObj = null;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\t/g, '    ');
    const indent = line.match(/^\s*/)[0].length;
    const trimmed = line.trim();

    if (!inBlock) {
      if (trimmed === keyLine) {
        inBlock = true;
        baseIndent = indent;
      }
      continue;
    }

    if (!trimmed) continue;
    if (indent <= baseIndent && !trimmed.startsWith('-')) break;

    if (/^-\s+/.test(trimmed)) {
      const rest = trimmed.replace(/^-\s+/, '');
      if (rest.includes(':')) {
        const [k, ...v] = rest.split(':');
        currentObj = { [k.trim()]: v.join(':').trim().replace(/^"|"$/g, '') };
        out.push(currentObj);
      } else {
        currentObj = null;
        out.push(rest.trim().replace(/^"|"$/g, ''));
      }
      continue;
    }

    if (currentObj && trimmed.includes(':')) {
      const [k, ...v] = trimmed.split(':');
      currentObj[k.trim()] = v.join(':').trim().replace(/^"|"$/g, '');
    }
  }

  return out;
}

function parseYamlMapBlock(yamlText, key) {
  const lines = String(yamlText || '').split('\n');
  const out = [];
  let inBlock = false;
  let baseIndent = 0;
  let currentKey = null;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\t/g, '    ');
    const indent = line.match(/^\s*/)[0].length;
    const trimmed = line.trim();

    if (!inBlock) {
      if (trimmed === `${key}:`) {
        inBlock = true;
        baseIndent = indent;
      }
      continue;
    }

    if (!trimmed) continue;
    if (indent <= baseIndent) break;

    if (indent === baseIndent + 2 && /:$/.test(trimmed)) {
      currentKey = trimmed.slice(0, -1).trim();
      out.push({ name: currentKey });
      continue;
    }

    if (currentKey && indent >= baseIndent + 4 && trimmed.includes(':')) {
      const [k, ...v] = trimmed.split(':');
      out[out.length - 1][k.trim()] = v.join(':').trim().replace(/^"|"$/g, '');
    }
  }

  return out;
}

function parseSchedule(yamlText) {
  const match = String(yamlText || '').match(/schedule:\s*"([^"]+)"/);
  return match ? match[1] : null;
}

function parseSteps(yamlText) {
  const items = parseYamlListBlock(yamlText, 'steps');
  return items
    .map(item => {
      if (typeof item === 'string') return { label: item };
      return {
        label: item.name || item.id || item.action || item.method || 'step',
        detail: item.action || item.capability || item.method || ''
      };
    })
    .filter(item => item.label);
}

function parseRequirements(yamlText, meta) {
  const yamlReq = parseYamlListBlock(yamlText, 'requires').map(item => {
    if (typeof item === 'string') return item;
    return item.capability || item.skill || item.name || JSON.stringify(item);
  });

  const metaReq = Array.isArray(meta?.requires) ? meta.requires.map(item => typeof item === 'string' ? item : (item.capability || item.name || JSON.stringify(item))) : [];
  const all = [...yamlReq, ...metaReq].filter(Boolean);
  return [...new Set(all)];
}

function parseTags(meta, yamlText) {
  const tags = Array.isArray(meta?.tags) ? [...meta.tags] : [];
  const yamlTags = parseYamlListBlock(yamlText, 'tags').map(item => typeof item === 'string' ? item : item.name).filter(Boolean);
  return [...new Set([...tags, ...yamlTags])];
}

function markdownToHtml(markdown) {
  if (!markdown) return '';
  const lines = markdown.replace(/\r/g, '').split('\n');
  const parts = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i += 1;
      continue;
    }

    if (line.startsWith('```')) {
      const fence = line.trim();
      const lang = fence.slice(3).trim();
      i += 1;
      const code = [];
      while (i < lines.length && !lines[i].startsWith('```')) {
        code.push(lines[i]);
        i += 1;
      }
      i += 1;
      parts.push(`<pre class="code-block"><code${lang ? ` data-lang="${escapeHtml(lang)}"` : ''}>${escapeHtml(code.join('\n'))}</code></pre>`);
      continue;
    }

    if (/^###\s+/.test(line)) {
      parts.push(`<h4>${escapeHtml(line.replace(/^###\s+/, ''))}</h4>`);
      i += 1;
      continue;
    }

    if (/^##\s+/.test(line)) {
      parts.push(`<h3>${escapeHtml(line.replace(/^##\s+/, ''))}</h3>`);
      i += 1;
      continue;
    }

    if (/^\|/.test(line)) {
      const tableLines = [];
      while (i < lines.length && /^\|/.test(lines[i])) {
        tableLines.push(lines[i]);
        i += 1;
      }
      const rows = tableLines
        .map(row => row.split('|').slice(1, -1).map(cell => cell.trim()))
        .filter(row => row.length && !row.every(cell => /^-+$/.test(cell.replace(/:/g, ''))));
      if (rows.length) {
        const [head, ...body] = rows;
        parts.push(`<div class="table-wrap"><table><thead><tr>${head.map(cell => `<th>${escapeHtml(cell)}</th>`).join('')}</tr></thead><tbody>${body.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      }
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ''));
        i += 1;
      }
      parts.push(`<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''));
        i += 1;
      }
      parts.push(`<ol>${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ol>`);
      continue;
    }

    const paragraph = [];
    while (i < lines.length && lines[i].trim() && !/^```/.test(lines[i]) && !/^##\s+/.test(lines[i]) && !/^###\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i]) && !/^\d+\.\s+/.test(lines[i]) && !/^\|/.test(lines[i])) {
      paragraph.push(lines[i].trim());
      i += 1;
    }
    const text = paragraph.join(' ')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    parts.push(`<p>${text}</p>`);
  }

  return parts.join('\n');
}

function renderPage({ slug, meta, yamlText, readmeText, lobsterText }) {
  const title = prettyTitle(meta?.name || meta?.displayName || '', slug);
  const author = meta?.author || 'unknown';
  const description = meta?.description || stripMarkdown(extractSection(readmeText, 'What It Does')) || 'No description yet.';
  const requirements = parseRequirements(yamlText, meta);
  const tags = parseTags(meta, yamlText);
  const categories = [...new Set([...(Array.isArray(meta?.categories) ? meta.categories : []), ...(meta?.category ? [meta.category] : [])].filter(Boolean))];
  const steps = parseSteps(yamlText);
  const schedule = parseSchedule(yamlText);
  const parameters = [
    ...parseYamlListBlock(yamlText, 'parameters').map(item => typeof item === 'string' ? { name: item } : item),
    ...parseYamlMapBlock(yamlText, 'config')
  ];
  const whatItDoes = extractSection(readmeText, 'What It Does');
  const scheduleSection = extractSection(readmeText, 'Schedule');
  const exampleOutput = extractSection(readmeText, 'Example Output');
  const configSection = extractSection(readmeText, 'Configuration');
  const goalsSection = extractSection(readmeText, 'Goals File Format');
  const lobsterSteps = parseSteps(lobsterText);
  const lobsterArgs = parseYamlMapBlock(lobsterText, 'args');
  const lobsterSummary = stripMarkdown((lobsterText || '').split('\n').filter(line => line.startsWith('#')).slice(0, 4).map(line => line.replace(/^#\s?/, '')).join(' '));
  const effectiveParameters = parameters.length ? parameters : lobsterArgs;
  const effectiveSteps = steps.length ? steps : lobsterSteps;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)} — ClawFlows</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #090912;
      --panel: #141420;
      --panel-2: #1a1a28;
      --text: #f3f3f8;
      --muted: #9a9aae;
      --border: #2b2b3c;
      --accent: #ff6b6b;
      --accent-soft: rgba(255,107,107,0.12);
      --shadow: 0 18px 60px rgba(0,0,0,0.28);
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: 'Space Grotesk', sans-serif;
      background: radial-gradient(circle at top, rgba(255,107,107,0.07), transparent 28%), var(--bg);
      color: var(--text);
      line-height: 1.6;
    }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }
    .container { max-width: 1100px; margin: 0 auto; padding: 2rem; }
    .back-link { display: inline-flex; align-items: center; gap: .45rem; font-size: .95rem; margin-bottom: 1.5rem; }
    .hero {
      display: grid;
      grid-template-columns: 1.3fr .7fr;
      gap: 1.25rem;
      align-items: stretch;
      margin-bottom: 1.5rem;
    }
    .hero-main, .hero-side, .panel {
      background: linear-gradient(180deg, rgba(26,26,40,0.98), rgba(16,16,26,0.98));
      border: 1px solid var(--border);
      border-radius: 18px;
      box-shadow: var(--shadow);
    }
    .hero-main { padding: 1.6rem; }
    .hero-side { padding: 1.35rem; }
    .eyebrow {
      display: inline-flex;
      gap: .4rem;
      padding: .35rem .7rem;
      background: var(--accent-soft);
      color: var(--accent);
      border-radius: 999px;
      font-size: .76rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .04em;
    }
    h1 { font-size: 2.35rem; line-height: 1.05; margin: .9rem 0 .75rem; }
    .description { font-size: 1.05rem; color: var(--muted); max-width: 60ch; }
    .meta { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: 1rem; color: var(--muted); font-size: .93rem; }
    .pill-row, .tag-row { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: 1rem; }
    .pill, .tag {
      display: inline-flex;
      align-items: center;
      padding: .38rem .72rem;
      border-radius: 999px;
      border: 1px solid var(--border);
      background: var(--panel-2);
      font-size: .82rem;
    }
    .tag { color: var(--accent); background: var(--accent-soft); border-color: rgba(255,107,107,0.18); }
    .install-label { color: var(--muted); font-size: .9rem; margin-bottom: .5rem; }
    .install-box {
      background: #0d0d16;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: .95rem 1rem;
      font-family: 'JetBrains Mono', monospace;
      color: var(--accent);
      overflow-x: auto;
    }
    .section-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
      margin-top: 1.25rem;
    }
    .panel { padding: 1.25rem; }
    .panel h2 { margin: 0 0 .9rem; font-size: 1.2rem; }
    .panel h3 { margin-top: 1rem; font-size: 1rem; }
    .panel h4 { margin: .9rem 0 .45rem; font-size: .95rem; color: #fff; }
    .panel p, .panel li { color: var(--muted); }
    .step-list { display: grid; gap: .75rem; }
    .step {
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.02);
      border-radius: 12px;
      padding: .85rem .95rem;
    }
    .step-title { font-weight: 600; }
    .step-detail { font-size: .87rem; color: var(--muted); margin-top: .2rem; }
    .key-value { display: grid; gap: .7rem; }
    .kv {
      border-bottom: 1px solid var(--border);
      padding-bottom: .7rem;
    }
    .kv:last-child { border-bottom: none; padding-bottom: 0; }
    .kv-name { font-weight: 600; }
    .kv-meta { color: var(--muted); font-size: .88rem; }
    .code-block {
      margin: .85rem 0 0;
      background: #0c0c14;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1rem;
      overflow-x: auto;
    }
    .code-block code { font-family: 'JetBrains Mono', monospace; font-size: .85rem; color: #f5d6d6; }
    .table-wrap { overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; padding: .75rem; border-bottom: 1px solid var(--border); vertical-align: top; }
    th { color: #fff; font-size: .9rem; }
    td { color: var(--muted); font-size: .9rem; }
    .footer { margin: 2rem 0 1rem; color: var(--muted); font-size: .9rem; text-align: center; }
    @media (max-width: 860px) {
      .hero, .section-grid { grid-template-columns: 1fr; }
      h1 { font-size: 2rem; }
      .container { padding: 1rem; }
    }
  </style>
</head>
<body>
  <div class="container">
    <a href="../" class="back-link">← All Automations</a>
    <div class="hero">
      <section class="hero-main">
        <div class="eyebrow">Flow details</div>
        <h1>${escapeHtml(title)}</h1>
        <p class="description">${escapeHtml(description)}</p>
        <div class="meta">
          <span>v${escapeHtml(meta?.version || '1.0.0')}</span>
          <span>by ${escapeHtml(author)}</span>
          ${schedule ? `<span>schedule ${escapeHtml(schedule)}</span>` : ''}
          ${lobsterText ? '<span>Lobster workflow available</span>' : ''}
        </div>
        ${categories.length ? `<div class="pill-row">${categories.map(cat => `<span class="tag">${escapeHtml(slugToLabel(cat))}</span>`).join('')}</div>` : ''}
        ${tags.length ? `<div class="tag-row">${tags.map(tag => `<span class="pill">${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
      </section>
      <aside class="hero-side">
        <div class="install-label">Install</div>
        <div class="install-box">clawflows install ${escapeHtml(slug)}</div>
        <div class="install-label" style="margin-top: 1rem;">Requirements</div>
        <div class="tag-row">
          ${requirements.length ? requirements.map(req => `<span class="tag">${escapeHtml(req)}</span>`).join('') : '<span class="pill">No explicit requirements listed</span>'}
        </div>
        ${requirements.includes('agent-analytics') ? '<p style="margin-top:1rem; color: var(--muted); font-size:.9rem;">This flow expects an analytics service layer. <a href="https://clawhub.ai/skill/agent-analytics" target="_blank" rel="noopener">Agent Analytics skill ↗</a></p>' : ''}
      </aside>
    </div>

    <div class="section-grid">
      <section class="panel">
        <h2>What this flow does</h2>
        ${whatItDoes ? markdownToHtml(whatItDoes) : '<p>This flow needs a richer README. Right now the main source of truth is the YAML/workflow files.</p>'}
      </section>
      <section class="panel">
        <h2>How it runs</h2>
        ${effectiveSteps.length ? `<div class="step-list">${effectiveSteps.map((step, idx) => `<div class="step"><div class="step-title">${idx + 1}. ${escapeHtml(step.label)}</div>${step.detail ? `<div class="step-detail">${escapeHtml(step.detail)}</div>` : ''}</div>`).join('')}</div>` : '<p>No structured step list was found in the YAML yet.</p>'}
      </section>
    </div>

    <div class="section-grid">
      <section class="panel">
        <h2>Inputs & configuration</h2>
        ${effectiveParameters.length ? `<div class="key-value">${effectiveParameters.map(param => `<div class="kv"><div class="kv-name">${escapeHtml(param.name || 'value')}</div><div class="kv-meta">${escapeHtml(param.description || 'No description yet.')}${param.default ? ` · default: ${escapeHtml(param.default)}` : ''}${param.required === 'true' || param.required === true ? ' · required' : ''}</div></div>`).join('')}</div>` : '<p>No explicit parameters/config block found.</p>'}
        ${configSection ? `<h3>README configuration</h3>${markdownToHtml(configSection)}` : ''}
      </section>
      <section class="panel">
        <h2>Schedule & output</h2>
        ${schedule ? `<p><strong>Cron:</strong> <code>${escapeHtml(schedule)}</code></p>` : (scheduleSection ? '' : '<p>No schedule declared. This may be manual-only.</p>')}
        ${scheduleSection ? markdownToHtml(scheduleSection) : ''}
        ${exampleOutput ? `<h3>Example output</h3>${markdownToHtml(exampleOutput)}` : ''}
      </section>
    </div>

    ${lobsterText || goalsSection ? `<div class="section-grid">` : ''}
      ${goalsSection ? `<section class="panel"><h2>Data shape / file format</h2>${markdownToHtml(goalsSection)}</section>` : ''}
      ${lobsterText ? `<section class="panel"><h2>Lobster workflow</h2>${lobsterSummary ? `<p>${escapeHtml(lobsterSummary)}</p>` : ''}${lobsterSteps.length ? `<div class="step-list" style="margin-top:.8rem;">${lobsterSteps.map((step, idx) => `<div class="step"><div class="step-title">${idx + 1}. ${escapeHtml(step.label)}</div>${step.detail ? `<div class="step-detail">${escapeHtml(step.detail)}</div>` : ''}</div>`).join('')}</div>` : ''}<details style="margin-top:1rem;"><summary style="cursor:pointer; color:#fff;">View workflow YAML</summary><pre class="code-block"><code>${escapeHtml(lobsterText)}</code></pre></details></section>` : ''}
    ${lobsterText || goalsSection ? `</div>` : ''}

    ${readmeText ? `<section class="panel" style="margin-top: 1.25rem;"><h2>README details</h2>${markdownToHtml(readmeText.replace(/^#\s+.*\n?/, '').trim())}</section>` : ''}

    <div class="footer">
      <p><a href="/">ClawFlows</a> · Powered by <a href="https://github.com/openclaw/openclaw">OpenClaw</a></p>
    </div>
  </div>
</body>
</html>`;
}

export function buildPages() {
  const dirs = fs.readdirSync(automationsDir).filter(name => {
    try {
      return fs.statSync(path.join(automationsDir, name)).isDirectory();
    } catch {
      return false;
    }
  });

  for (const slug of dirs) {
    const dir = path.join(automationsDir, slug);
    const meta = parseJson(path.join(dir, 'metadata.json')) || {};
    const yamlText = readText(path.join(dir, 'automation.yaml')) || '';
    const readmeText = readText(path.join(dir, 'README.md')) || '';
    const lobsterText = readText(path.join(dir, 'lobster', 'workflow.yaml')) || '';
    const html = renderPage({ slug, meta, yamlText, readmeText, lobsterText });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  buildPages();
  console.log('Generated automation detail pages');
}
