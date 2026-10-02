import { readFileSync, writeFileSync } from 'fs';

const tools = readFileSync('C:/Users/bisker/AppData/Local/Temp/remaining_tools.txt', 'utf-8').split('\n').map(s=>s.trim()).filter(Boolean);
let lines = readFileSync('src/config/tools.ts', 'utf-8').split('\n');

// Process in reverse to avoid index shift
for (let t = tools.length - 1; t >= 0; t--) {
  const tool = tools[t];
  const v2 = `${tool}-v2`;
  // check if already exists
  if (lines.some(l => l.includes(`id: '${v2}'`))) {
    console.log(`Skip ${v2} exists`);
    continue;
  }
  // find start index of original tool
  let startIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`id: '${tool}',`)) { startIdx = i; break; }
  }
  if (startIdx === -1) {
    console.log(`Not found ${tool}`);
    continue;
  }
  // find end idx: next line exactly "  },"
  let endIdx = -1;
  for (let i = startIdx; i < lines.length; i++) {
    if (lines[i].trim() === '},') { endIdx = i; break; }
  }
  if (endIdx === -1) { console.log(`No end for ${tool}`); continue; }
  const block = lines.slice(startIdx, endIdx+1);
  let v2Block = block.map(l => l
    .replace(`id: '${tool}'`, `id: '${v2}'`)
    .replace(`slug: '${tool}'`, `slug: '${v2}'`)
    .replace(/icon: '[^']+'/, `icon: 'sparkles'`)
  );
  // Update features line
  v2Block = v2Block.map(l => {
    if (l.includes('features:')) {
      return l.replace(/features: \[([^\]]+)\]/, (m, p1) => `features: [${p1}, 'atelier-v2', 'premium']`);
    }
    return l;
  });
  // Insert after endIdx
  lines.splice(endIdx+1, 0, ...v2Block);
  console.log(`Added ${v2}`);
}

writeFileSync('src/config/tools.ts', lines.join('\n'), 'utf-8');
console.log('Done');
