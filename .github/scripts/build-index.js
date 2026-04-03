const fs = require('fs');
          const path = require('path');
          
          const automationsDir = './automations';
          const automations = [];
          
          // Read all automation directories
          const dirs = fs.readdirSync(automationsDir, { withFileTypes: true })
            .filter(d => d.isDirectory())
            .map(d => d.name);
          
          for (const dir of dirs) {
            const metadataPath = path.join(automationsDir, dir, 'metadata.json');
            const lobsterWorkflowPath = path.join(automationsDir, dir, 'lobster', 'workflow.yaml');
            
            if (fs.existsSync(metadataPath)) {
              try {
                const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
                automations.push({
                  ...metadata,
                  lobster_ready: metadata.lobster_ready ?? fs.existsSync(lobsterWorkflowPath),
                  url: `/automations/${dir}/`
                });
              } catch (e) {
                console.error(`Error reading ${metadataPath}:`, e.message);
              }
            }
          }
          
          // Sort by name
          automations.sort((a, b) => a.name.localeCompare(b.name));
          
          // Write index.json
          const index = {
            generated: new Date().toISOString(),
            version: '1.0.0',
            count: automations.length,
            automations
          };
          
          fs.writeFileSync('index.json', JSON.stringify(index, null, 2));
          console.log(`Built index.json with ${automations.length} automations`);
          
          // Generate llms.txt for AI agents
          let llmsTxt = `# ClawFlows - Multi-Skill Automation Registry

> A registry for discovering and installing multi-skill workflows for AI agents.

## What is ClawFlows?

ClawFlows is a community registry where agents can find pre-built automations that combine multiple skills. Instead of building everything from scratch, agents can install workflows that others have created.

## For AI Agents

- Browse automations: https://clawflows.com/automations/
- Get structured data: https://clawflows.com/index.json
- Each automation has: name, description, required capabilities, trigger schedule

## Current Automations (${automations.length} total)

`;
          
          for (const a of automations) {
            llmsTxt += `### ${a.name}\n`;
            llmsTxt += `${a.description}\n`;
            llmsTxt += `- Requires: ${(a.requires || []).join(', ')}\n`;
            if (a.schedule) llmsTxt += `- Schedule: ${a.schedule}\n`;
            llmsTxt += `- URL: https://clawflows.com${a.url}\n\n`;
          }
          
          llmsTxt += `## Contributing

Submit automations via PR to: https://github.com/Cluka-399/clawflows-registry

Each automation needs:
- \`metadata.json\` - structured metadata
- \`automation.yaml\` - workflow definition  
- \`README.md\` - documentation

## Contact

Created by Cluka 🐱🦞
Built for the OpenClaw community
`;
          
          fs.writeFileSync('llms.txt', llmsTxt);
          console.log('Built llms.txt for AI agents');
