import sharp from 'sharp';

async function processLogo() {
  const inputPath = 'C:/Users/bisker/.gemini/antigravity-ide/brain/4f8cf7b6-9816-4aa9-b77b-1e44ff393496/.user_uploaded/media_1790809186871.jpg';
  const outputPath = 'e:/PDFRuche/public/images/brand/Image_page_acceuil.png';
  const outputCleanPath = 'e:/PDFRuche/public/images/brand/Image_page_acceuil_clean.png';
  const outputTransparentPath = 'e:/PDFRuche/public/images/brand/Image_page_acceuil_transparent.png';
  const outputWebpPath = 'e:/PDFRuche/public/images/brand/Image_page_acceuil.webp';

  console.log('Reading source image...');
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  // Background envelope definition
  const isExteriorBg = (x, y) => {
    // 1. Top and bottom margins
    if (y < 35 || y > 395) return true;
    // 2. Far left and far right margins
    if (x < 25 || x > 905) return true;
    // 3. Top-left corner
    if (x < 65 && y < 65) return true;
    // 4. Bottom-left corner
    if (x < 65 && y > 270) return true;
    // 5. Above text & right of particle stream
    if (x > 710 && y < 140) return true;
    if (x > 550 && x <= 710 && y < 75) return true;
    if (x > 330 && x <= 550 && y < 55) return true;
    // 6. Below text
    if (x > 400 && y > 280) return true;
    return false;
  };

  // Sample points strictly from guaranteed background
  const bgSamples = [];
  for (let y = 0; y < h; y += 3) {
    for (let x = 0; x < w; x += 3) {
      if (isExteriorBg(x, y)) {
        const idx = (y * w + x) * 3;
        bgSamples.push({ x: x / w, y: y / h, r: data[idx], g: data[idx + 1], b: data[idx + 2] });
      }
    }
  }

  console.log(`Sampled ${bgSamples.length} pure background points.`);

  // 10-term 2D polynomial for smooth background gradient
  const terms = (nx, ny) => [
    1, nx, ny, nx * nx, ny * ny, nx * ny,
    nx * nx * nx, ny * ny * ny, nx * nx * ny, nx * ny * ny
  ];
  const dim = 10;

  function fitChannel(channel) {
    const ATA = Array.from({ length: dim }, () => Array(dim).fill(0));
    const ATb = Array(dim).fill(0);
    for (const p of bgSamples) {
      const row = terms(p.x, p.y);
      const val = p[channel];
      for (let j = 0; j < dim; j++) {
        ATb[j] += row[j] * val;
        for (let k = 0; k < dim; k++) ATA[j][k] += row[j] * row[k];
      }
    }
    for (let i = 0; i < dim; i++) {
      let maxRow = i;
      for (let k = i + 1; k < dim; k++) {
        if (Math.abs(ATA[k][i]) > Math.abs(ATA[maxRow][i])) maxRow = k;
      }
      [ATA[i], ATA[maxRow]] = [ATA[maxRow], ATA[i]];
      [ATb[i], ATb[maxRow]] = [ATb[maxRow], ATb[i]];
      const pivot = ATA[i][i];
      for (let j = i; j < dim; j++) ATA[i][j] /= pivot;
      ATb[i] /= pivot;
      for (let k = 0; k < dim; k++) {
        if (k !== i) {
          const factor = ATA[k][i];
          for (let j = i; j < dim; j++) ATA[k][j] -= factor * ATA[i][j];
          ATb[k] -= factor * ATb[i];
        }
      }
    }
    return ATb;
  }

  const cR = fitChannel('r');
  const cG = fitChannel('g');
  const cB = fitChannel('b');

  const out = Buffer.alloc(w * h * 4);

  let countTrans = 0;
  let countOpaque = 0;
  let countSemi = 0;

  for (let y = 0; y < h; y++) {
    const ny = y / h;
    for (let x = 0; x < w; x++) {
      // 1. Guaranteed exterior background
      if (isExteriorBg(x, y)) {
        countTrans++;
        continue; // leaves rgba = 0, 0, 0, 0
      }

      const nx = x / w;
      const t = terms(nx, ny);
      let bgR = 0, bgG = 0, bgB = 0;
      for (let i = 0; i < dim; i++) {
        bgR += t[i] * cR[i];
        bgG += t[i] * cG[i];
        bgB += t[i] * cB[i];
      }

      const inIdx = (y * w + x) * 3;
      const r = data[inIdx];
      const g = data[inIdx + 1];
      const b = data[inIdx + 2];

      const dr = r - bgR;
      const dg = g - bgG;
      const db = b - bgB;
      const dist = Math.sqrt(dr * dr + dg * dg + db * db);

      const maxC = Math.max(r, g, b);
      const minC = Math.min(r, g, b);
      const chroma = maxC - minC;

      const posR = Math.max(0, dr);
      const posG = Math.max(0, dg);
      const posB = Math.max(0, db);
      const maxPos = Math.max(posR, posG, posB);

      let alpha = 0;

      // Identify zone
      const inTextZone = (x >= 400 && x <= 905 && y >= 140 && y <= 280);
      const inBeeZone = (x >= 45 && x <= 440 && y >= 35 && y <= 395);
      const inParticleZone = (x >= 330 && x <= 710 && y >= 75 && y <= 220);
      const inSparkleZone = (x >= 45 && x <= 190 && y >= 65 && y <= 250);

      if (inTextZone) {
        // "PDF" cyan letters (core has g,b > 100) or "Ruche" gold letters (core has r > 130)
        const isCyanLetter = (g > 100 && b > 100 && r < 140);
        const isGoldLetter = (r > 130 && g > 90);
        const isLetterCore = (isCyanLetter || isGoldLetter) && (maxC > 90);

        if (isLetterCore) {
          alpha = 1.0;
        } else {
          // Glow or background inside counters / between letters
          // In cyan glow: posG > 6, posB > 6
          // In gold glow: posR > 6, posG > 3
          const isGlow = (posG > 6 && posB > 6) || (posR > 6 && posG > 3) || (chroma > 12);
          if (isGlow && dist > 8.0) {
            // Smooth glow ramp
            const glowSig = Math.max(dist, maxPos * 1.5, chroma * 1.3);
            const ratio = Math.min(1.0, Math.max(0, (glowSig - 8.0) / 28));
            alpha = ratio * ratio * (3 - 2 * ratio);
          } else {
            alpha = 0; // Pure background between letters / counter holes
          }
        }
      } else if (inBeeZone) {
        // Metallic hexagon + Origami Bee
        // Metallic reflections, golden facets, chrome wings, glowing cyan eyes
        const isWarmFacet = (r > b + 3 && r > 28);
        const isBrightMetal = (maxC > 60);
        const isCyanEye = (g > r + 15 && b > r + 15);
        const isSolidObject = isWarmFacet || isBrightMetal || isCyanEye || (chroma > 14);

        if (isSolidObject) {
          if (dist > 26 || maxC > 72) {
            alpha = 1.0;
          } else {
            const ratio = Math.max(0, (dist - 8.5) / 18);
            alpha = Math.min(1.0, ratio * 1.3);
          }
        } else {
          // Check if faint glow around hexagon or open background gap
          if (dist > 15 && (posR > 10 || posG > 10 || posB > 10)) {
            const ratio = Math.min(1.0, (dist - 12) / 20);
            alpha = ratio * ratio;
          } else {
            alpha = 0; // Background showing through hexagon opening
          }
        }
      } else if (inParticleZone || inSparkleZone) {
        // Glowing particles, equations, numbers, swirling cyber streams
        const isParticle = (posG > 7 || posB > 7 || posR > 8 || chroma > 9);
        if (isParticle && dist > 7.5) {
          if (maxC > 90 || dist > 35) {
            alpha = 1.0;
          } else {
            const ratio = Math.min(1.0, (dist - 7.5) / 25);
            alpha = ratio * ratio * (3 - 2 * ratio);
          }
        } else {
          alpha = 0;
        }
      }

      // Optical deconvolution: remove background light to eliminate black fringing
      let finalR = 0, finalG = 0, finalB = 0;
      if (alpha > 0.01) {
        const unR = (r - bgR * (1 - alpha)) / alpha;
        const unG = (g - bgG * (1 - alpha)) / alpha;
        const unB = (b - bgB * (1 - alpha)) / alpha;

        finalR = Math.min(255, Math.max(0, Math.round(unR)));
        finalG = Math.min(255, Math.max(0, Math.round(unG)));
        finalB = Math.min(255, Math.max(0, Math.round(unB)));
      } else {
        alpha = 0;
      }

      const a255 = Math.round(alpha * 255);
      if (a255 === 0) countTrans++;
      else if (a255 === 255) countOpaque++;
      else countSemi++;

      const outIdx = (y * w + x) * 4;
      out[outIdx] = finalR;
      out[outIdx + 1] = finalG;
      out[outIdx + 2] = finalB;
      out[outIdx + 3] = a255;
    }
  }

  const total = w * h;
  console.log(`Final Stats:
  Total: ${total}
  Transparent: ${countTrans} (${((countTrans / total) * 100).toFixed(1)}%)
  Opaque: ${countOpaque} (${((countOpaque / total) * 100).toFixed(1)}%)
  Semi-transparent: ${countSemi} (${((countSemi / total) * 100).toFixed(1)}%)`);

  // Write outputs
  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
  console.log(`Saved ${outputPath}`);

  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outputCleanPath);
  console.log(`Saved ${outputCleanPath}`);

  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outputTransparentPath);
  console.log(`Saved ${outputTransparentPath}`);

  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .webp({ quality: 95, alphaQuality: 100 })
    .toFile(outputWebpPath);
  console.log(`Saved ${outputWebpPath}`);
}

processLogo().catch(err => {
  console.error(err);
  process.exit(1);
});
