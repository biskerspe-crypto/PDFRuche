import { readFileSync, writeFileSync } from 'fs';

const content = readFileSync('src/config/tools.ts', 'utf-8');
const lines = content.split('\n');

// Find all tool ids and their categories
const toolRegex = /id: '([^']+)'/g;
let m;
const allIds = [];
while ((m = toolRegex.exec(content)) !== null) {
  allIds.push(m[1]);
}
console.log(`Total ids before: ${allIds.length}`);

// Determine which are v2 and which are base
const baseIds = allIds.filter(id => !id.endsWith('-v2'));
const v2Ids = new Set(allIds.filter(id => id.endsWith('-v2')));

const remaining = baseIds.filter(id => !v2Ids.has(`${id}-v2`));
console.log(`Remaining base without v2: ${remaining.length}`);
console.log(remaining.slice(0,10).join(', '));

// For each remaining, add v2 block after original
let newContent = content;
let added = 0;
for (const tool of remaining) {
  const v2 = `${tool}-v2`;
  if (newContent.includes(`id: '${v2}'`)) continue;
  // Find block for tool: from "  {\n    id: 'tool'," to "  },"
  const pattern = new RegExp(`(  \\{\\s+id: '${tool}',\\s+slug: '${tool}',[\\s\\S]*?\\n  \\},)`, 'm');
  const match = newContent.match(pattern);
  if (!match) {
    console.log(`Not found block for ${tool}`);
    continue;
  }
  const block = match[1];
  let v2Block = block
    .replace(`id: '${tool}'`, `id: '${v2}'`)
    .replace(`slug: '${tool}'`, `slug: '${v2}'`)
    .replace(/icon: '[^']+'/, `icon: 'sparkles'`)
    .replace(/features: \[([^\]]+)\]/, (mm, p1) => `features: [${p1}, 'atelier-v2', 'premium']`);
  newContent = newContent.replace(block, `${block}\n${v2Block}`);
  added++;
  // console.log(`Added ${v2}`);
}

writeFileSync('src/config/tools.ts', newContent, 'utf-8');
console.log(`Added ${added} v2 entries`);
const finalCount = (newContent.match(/id: '.*-v2'/g) || []).length;
console.log(`Total v2 now: ${finalCount}`);
