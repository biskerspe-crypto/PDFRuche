# PDFRuche — Déclaration de Modifications (AGPL v3)

> [!IMPORTANT]
> **PDFRuche** est basé sur le projet open source **[PDFCraft](https://github.com/PDFCraftTool/pdfcraft)**, distribué sous licence **GNU Affero General Public License v3 (AGPL-3.0)**.
> Date de modification : **2026-08-30** — Modifications par **PDFRuche Team** (basé sur PDFCraft Team).
> Conformément à l'AGPL v3 §5a-c et §13, la source complète du projet (y compris les modifications) reste disponible sous AGPL-3.0 et l'intégralité de l'œuvre est licenciée sous cette licence.
> La licence complète est disponible dans `LICENSE` (texte intégral AGPL v3 conservé, en-tête ajouté avec SPDX `AGPL-3.0-or-later`).
> Critère de succès : aucun texte de licence modifié, attribution obligatoire conservée, offre de Corresponding Source via réseau.

## Modifications Majeures

### 1. Branding & Identité
- Nom du site : `PDFRuche` → `PDFRuche`
- Nouvelle baseline : *"PDFRuche — Your PDF workspace, simplified"*
- Nouveau logo (croissant de lune bleu + "luna" marine + "pdf" rouge), favicon SVG à thème lunaire
- Nouvelles couleurs du design system (marine `#1B2A5C`, ciel `#00A1E4`, rouge `#E31937`, fonds lunaires froids)

### 2. Configuration
- `src/config/site.ts` — nouveau nom, créateur, URL configurable via `NEXT_PUBLIC_SITE_URL`, mots-clés SEO
- `src/app/manifest.ts` — PWA renommée avec `theme_color` marine
- `src/app/globals.css` — nouvelle palette lunaire (clair + sombre "nuit profonde")

### 3. Fonctionnalités Ajoutées
- Composant `Logo` réutilisable (`src/components/branding/Logo.tsx`) avec variantes full/icon/dark
- Variante logo mode sombre (`public/images/logo-pdfruche-dark.svg`)+ version optimisée (800×318, 387 Ko vs 1,45 Mo) pour l'UI
- **Architecture AdSense** : `src/config/ads.ts` (5 emplacements, env vars), `src/components/ads/` (AdSlot + AdProvider + index), intégrée au layout racine
- **Sidebar / AppLayout** : `src/components/layout/Sidebar.tsx` (6 catégories, drawer mobile) + `AppLayout.tsx`
- **Workspace PDF** : `src/hooks/usePageSelection.ts`, `src/hooks/useObjectManipulation.ts` (objets manipulables + undo/redo), `src/hooks/usePDFHistory.ts` (historique labelisé)
- **Composants workspace** : `PageSelector.tsx`, `ApplyToSelector.tsx`, `PageThumbnails.tsx` (multi-sélection, drag & drop, menu contextuel), `PDFWorkspace.tsx` (viewer PDF.js + zoom + navigation), `ObjectEditor.tsx` (panneau propriétés), `CanvasOverlay.tsx` (outils select/text/image/shape, poignées move/resize/rotate), `HistoryPanel.tsx`
- **Ads intégrés aux pages** : header banner + tool page bottom (`ToolPage.tsx`), 970×90 between sections + mobile in-feed (homepage)
- **UI components** : `ui/Toast.tsx`, `ui/Tooltip.tsx`, variantes Button `lunar`/`glow`
- **Animations** : `moonrise`, `pulse-glow`, `slide-up`, `fade-scale`, `shimmer-lunar` + `useAnimationOnView.ts`
- **Tests** : `usePageSelection.test.ts`, `usePDFHistory.test.ts` (+ polyfill `PointerEvent` dans `setup.ts`)

## Fichiers Modifiés (résumé)

| Fichier | Changement |
|---|---|
| `src/config/site.ts` | Rebranding complet |
| `src/app/manifest.ts` | Rebranding PWA + thème |
| `src/app/globals.css` | Palette lunaire |
| `public/favicon.svg` | Favicon croissant de lune |
| `public/images/logo-pdfruche.png` | Nouveau logo |
| `public/images/logo-pdfruche-optimized.png` | Logo compressé utilisé dans l'UI (Logo.tsx) |
| `public/images/logo-pdfruche-dark.svg` | Variante sombre |
| `src/components/branding/Logo.tsx` | Nouveau composant |

## Attribution

- Projet d'origine : **PDFCraft** — https://github.com/PDFCraftTool/pdfcraft
- Licence : **AGPL-3.0** — https://www.gnu.org/licenses/agpl-3.0.html
- Copyright PDFCraft Team conservé dans la notice de licence

## Décisions de Périmètre

| Sujet | Décision |
|---|---|
| **coherentpdf** (`coherentpdf.browser.min.js`) | Conservé pour l'instant ; licence commerciale potentielle à vérifier avant publication commerciale |
| **Extension navigateur** (`extension/`) | Exclue de la transformation initiale — focus sur la version web |
| **Support Tauri** (`src-tauri/`) | Exclu du périmètre web — code dormant conservé (déjà rebrandé dans `tauri.conf.json`) |
| **Baseline** | « PDFRuche — Your PDF workspace, simplified » |
| **Profondeur refonte** | Refonte complète (toutes les phases du plan) |