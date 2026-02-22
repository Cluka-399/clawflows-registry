const fs = require('fs');
          const path = require('path');
          
          const automationsDir = './automations';
          const errors = [];
          const requiredMetadataFields = ['name', 'description', 'version', 'requires'];
          const requiredFiles = ['metadata.json', 'automation.yaml', 'README.md'];
          
          // Get all automation directories
          const dirs = fs.readdirSync(automationsDir, { withFileTypes: true })
            .filter(d => d.isDirectory())
            .map(d => d.name);
          
          console.log(`Found ${dirs.length} automation folders to validate...\n`);
          
          for (const dir of dirs) {
            const dirPath = path.join(automationsDir, dir);
            console.log(`Checking: ${dir}`);
            
            // Check required files exist
            for (const file of requiredFiles) {
              const filePath = path.join(dirPath, file);
              if (!fs.existsSync(filePath)) {
                errors.push(`❌ ${dir}: Missing required file '${file}'`);
              }
            }
            
            // Validate metadata.json structure
            const metadataPath = path.join(dirPath, 'metadata.json');
            if (fs.existsSync(metadataPath)) {
              try {
                const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
                
                for (const field of requiredMetadataFields) {
                  if (!metadata[field]) {
                    errors.push(`❌ ${dir}: metadata.json missing required field '${field}'`);
                  }
                }
                
                // Validate requires is an array
                if (metadata.requires && !Array.isArray(metadata.requires)) {
                  errors.push(`❌ ${dir}: metadata.json 'requires' must be an array`);
                }
                
                console.log(`  ✓ metadata.json valid`);
              } catch (e) {
                errors.push(`❌ ${dir}: metadata.json parse error: ${e.message}`);
              }
            }
          }
          
          if (errors.length > 0) {
            console.log('\n🚨 VALIDATION FAILED:\n');
            errors.forEach(e => console.log(e));
            process.exit(1);
          }
          
          console.log(`\n✅ All ${dirs.length} automations validated successfully!`);
