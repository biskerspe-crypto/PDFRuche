/**
 * scripts/copy-license.mjs
 * AGPL-3.0 compliance: ensure LICENSE and modifications notice are available in deployed output
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const targets = [
  { src: 'LICENSE', dest: 'out/LICENSE.txt' },
  { src: 'LICENSE', dest: 'out/LICENSE' },
  { src: 'PDFRUCHE_MODIFICATIONS.md', dest: 'out/MODIFICATIONS.txt' },
  { src: 'NOTICE', dest: 'out/NOTICE.txt' },
  { src: 'NOTICE', dest: 'out/NOTICE' },
];

// Also ensure public/LICENSE.txt exists for dev / static export copy
if (!existsSync(join(root, 'public', 'LICENSE.txt')) && existsSync(join(root, 'LICENSE'))) {
  try {
    copyFileSync(join(root, 'LICENSE'), join(root, 'public', 'LICENSE.txt'));
    console.log('[license] Created public/LICENSE.txt');
  } catch {}
}

let copied = 0;
for (const { src, dest } of targets) {
  const srcPath = join(root, src);
  const destPath = join(root, dest);
  if (!existsSync(srcPath)) {
    console.warn(`[license] Source not found: ${src}`);
    continue;
  }
  if (!existsSync(join(root, 'out'))) {
    console.log('[license] out/ not found, skipping copy to out/');
    break;
  }
  try {
    const dir = destPath.substring(0, destPath.lastIndexOf('\\') > 0 ? destPath.lastIndexOf('\\') : destPath.lastIndexOf('/'));
    if (dir && !existsSync(dir)) mkdirSync(dir, { recursive: true });
    copyFileSync(srcPath, destPath);
    console.log(`[license] Copied ${src} -> ${dest}`);
    copied++;
  } catch (e) {
    console.warn(`[license] Failed to copy ${src} -> ${dest}:`, e.message);
  }
}
if (copied === 0 && !existsSync(join(root, 'out'))) {
  // not an error in pre-build
} else {
  console.log(`[license] Done (${copied} files).`);
}
