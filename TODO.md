# PDFRuche — TODO de Transformation (PDFCraft → PDFRuche)

Basé sur `implementation_plan.md` — suivre l'ordre d'exécution (section E).

## Phase 1 — Branding & Identité ✅

- [x] **1.1 Configuration site**
  - [x] `src/config/site.ts` : PDFCraft → PDFRuche, baseline, URL env `NEXT_PUBLIC_SITE_URL`, SEO
  - [x] `src/app/manifest.ts` : name, short_name, theme_color `#1B2A5C`, icônes
  - [x] `src/app/robots.ts` + `src/app/sitemap.ts` : URLs via siteConfig

- [x] **1.2 Logo & Assets**
  - [x] `public/images/logo-pdfruche.png` (copié depuis Logo Gimini.png)
  - [x] `public/favicon.svg` (croissant de lune)
  - [x] `public/images/logo-pdfruche-dark.svg` (variante mode sombre)
  - [x] `src/components/branding/Logo.tsx` (variantes full, icon, dark)

- [x] **1.3 Palette de couleurs**
  - [x] `src/app/globals.css` : palette lunaire (marine `#1B2A5C`, ciel `#00A1E4`, rouge `#E31937`, nuit profonde en sombre)

## Phase 2 — Refonte UI/UX (partiel)

- [x] **2.1 Composants Layout**
  - [x] `Header.tsx` : logo intégré via composant Logo, glassmorphism conservé
  - [x] `Footer.tsx` : branding PDFRuche + mention « Based on PDFCraft (AGPL-3.0) »
  - [x] `Navigation.tsx` : dropdown par 6 catégories fonctionnelles (existant, conforme)
  - [x] `MobileMenu.tsx` : accordéon par catégories (existant, conforme)

- [x] **2.2 Page d'accueil**
  - [x] `HomePageClient.tsx` : gradient lunaire nuit→aube, étoiles animées, stats corrigées (14 langues)

- [x] **2.3 Barre latérale (nouveau)**
  - [x] `Sidebar.tsx` : 6 catégories, drawer mobile, icônes Lucide, section active
  - [x] `AppLayout.tsx` : zone flexible & responsive

- [x] **2.4 Composants UI**
  - [x] `Button.tsx` : variantes `lunar`, `glow`, focus ring lunaire
  - [x] `Card.tsx` : glassmorphism (déjà lunairisé via palette)
  - [x] `Modal.tsx` : (blur existant conservé)
  - [x] `ui/Toast.tsx` : systeme notifications 4 variantes + auto-dismiss
  - [x] `ui/Tooltip.tsx` : tooltips légers 4 positions

## Phase 3 — Zone de Travail PDF Avancée (partiel)

- [x] `workspace/PageSelector.tsx` : actuelle, sélectionnées, paires, impaires, toutes, intervalle
- [x] `workspace/ApplyToSelector.tsx` : dropdown réutilisable + parsing intervalle
- [x] `hooks/usePageSelection.ts` : toggle, selectAll, selectRange, selectEven, selectOdd, parseCustomRange
- [x] `workspace/PageThumbnails.tsx` : miniatures ~160px, multi-sélection Ctrl/Shift, select all/désélection, drag & drop, menu contextuel (Suppr/Dupliquer/Extraire/Rotation)
- [x] `workspace/PDFWorkspace.tsx` : viewer PDF.js + zoom + navigation pages
- [x] `workspace/ObjectEditor.tsx` : panneau propriétés texte/image/forme
- [x] `workspace/CanvasOverlay.tsx` : handlers move/resize/rotate, poignées, guides
- [x] `hooks/useObjectManipulation.ts`

## Phase 4 — Historique & Undo/Redo ✅

- [x] `hooks/usePDFHistory.ts` : snapshots labelisés, limite configurable (50 défaut)
- [x] `workspace/HistoryPanel.tsx` : liste chronologique, clic = jump, undo/redo/clear, icônes par action
- [ ] `hooks/useUndoRedo.ts` étendu aux labels (workflow OK existant)

## Phase 5 — Architecture Publicitaire AdSense ✅

- [x] `config/ads.ts` : AdConfig + 5 placements, env vars
- [x] `components/ads/AdSlot.tsx` : placeholder « Sponsored — Ad Space » en dev, label Sponsored, lazy push
- [x] `components/ads/AdProvider.tsx` : script chargé une seule fois
- [x] `components/ads/index.ts` : exports centralisés
- [x] Intégré au layout racine
- [x] Conformité : ne recouvre jamais le PDF, séparé des actions, env vars seulement
- [x] Intégrer des AdSlot aux pages : header banner + tool page bottom (ToolPage), between sections 970×90 + mobile in-feed (homepage), sidebarRect non posé (aucun layout sidebar)

## Phase 6 — Animations & Micro-interactions ✅

- [x] `globals.css` : `moonrise`, `pulse-glow`, `slide-up`, `fade-scale`, `shimmer-lunar` + delays
- [x] `hooks/useAnimationOnView.ts` : IntersectionObserver (utilisé homepage)
- [x] `prefers-reduced-motion` conservé

## Phase 7 — Branding Textuel ✅

- [x] 14 fichiers `messages/*.json` : PDFCraft → PDFRuche
- [x] 9 fichiers `src/config/tool-content/*.ts` : contenu SEO mis à jour
- [x] 16 fichiers `src/` : processeurs, outils, tests, configs mis à jour
- [x] Fichiers de déploiement : package.json, Dockerfile, netlify.toml, .htaccess, nginx.conf, docker-compose.yml, sw.js, src-tauri, extension/, .github/workflows, nix/, flake.nix
- [x] URLs GitHub PDFCraft conservées (attribution AGPL)

## Phase 8 — SEO & Méta ✅

- [x] `src/lib/seo/metadata.ts` : siteConfig (titre, OG, canonical, hreflang, twitter)
- [x] `src/lib/seo/structured-data.ts` : logo → logo-pdfruche.png
- [x] `src/app/layout.tsx` : titre racine, description, favicon

## Phase 9 — Documentation & Conformité AGPL ✅

- [x] `PDFRUCHE_MODIFICATIONS.md` : déclaration base PDFCraft + liste des modifications
- [x] `PDFRUCHE_SETUP.md` : installation, build, déploiement, AdSense, branding, env vars
- [x] `LICENSE` : texte AGPL v3 intact + en-tête notice (attribution PDFCraft conservée)
- [x] `README.md` : réécrit pour PDFRuche avec attribution PDFCraft

## Phase 10 — Responsive & Performance ✅

- [x] Composants nouveaux responsives (drawer mobile, bottom sheets via Flex)
- [x] Zones tactiles : toolbars workspace (PDFWorkspace/CanvasOverlay/ObjectEditor/HistoryPanel/PageThumbnails) ≥ 36px, miniatures ~160px tactiles
- [x] Logo UI optimisé : `logo-pdfruche-optimized.png` (800×318, 387 Ko au lieu de 1,45 Mo) — WebP impossible (aucun encodeur fonctionnel sur cette machine, squoosh/sharp cassés sur Node 24)
- [x] Polices via `next/font` (préchargement automatique Inter + JetBrains Mono, existant)
- [x] AdSense chargé async (AdProvider `script.async = true`, existant)
- [x] Lazy loading conservé (existant)

## Infrastructure de Test

- [x] Polyfill `PointerEvent` dans `src/__tests__/setup.ts` (corrige test workflow pré-existant cassé sur jsdom)

## Questions Ouvertes (tranchées)

- [x] **Q1 — Licence coherentpdf** : **Conserver pour l'instant** (option C) — résoudre la licence avant publication commerciale
- [x] **Q2 — Extension navigateur** : **Exclue** de la transformation (focus web)
- [x] **Q3 — Support Tauri** : **Exclu** du périmètre web (code dormant, déjà rebrandé dans tauri.conf.json)
- [x] **Q4 — Baseline** : **« Your PDF workspace, simplified »** (déjà appliquée partout)
- [x] **Q5 — Profondeur refonte** : **Refonte complète, toutes phases** — Phase 3 intégrale en cours

## Vérification Finale

- [x] `npm run build` — compilation réussie + postbuild (WASM, chunking, PDF.js)
- [ ] `npm run lint` — ⚠️ cassé pré-existant : aucun `eslint.config.js` dans le projet
- [x] `npm run test` — 464/464 tests passent (63 fichiers)
- [x] `npx tsc --noEmit` — TypeScript strict OK