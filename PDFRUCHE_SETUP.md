# PDFRuche — Guide d'Installation & Déploiement

> [!IMPORTANT]
> PDFRuche est basé sur PDFCraft (AGPL-3.0). Voir `PDFRUCHE_MODIFICATIONS.md` pour la déclaration des modifications.

## Prérequis

- Node.js 18.18+ (recommandé : 20 LTS)
- npm 10+
- (Optionnel) Docker pour le déploiement conteneurisé

## Installation & Développement

```bash
npm install        # installe + initialise les assets WASM/workers (postinstall)
npm run dev        # serveur de développement (Next.js Turbopack) → http://localhost:3000
```

Note : `postinstall` exécute les scripts de synchronisation (WASM, workers PDF.js). Ne pas les supprimer.

## Commandes

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build production (export statique → `out/`) |
| `npm start` | Serve de production (`next start`) |
| `npm run lint` | Vérification ESLint |
| `npm run test` | Tests Vitest |
| `npx tsc --noEmit` | Vérification TypeScript |

## Variables d'Environnement

| Variable | Requis | Exemple | Description |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Non | `https://PDFRuche.app` | URL canonique du site (défaut : `https://PDFRuche.app`) |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Non | `ca-pub-123456789` | ID client AdSense (`data-ad-client`) |
| `NEXT_PUBLIC_ADSENSE_SLOT_*` | Non | `1234567890` | IDs des emplacements ad (`data-ad-slot`) |
| `TAURI_ENV` | Non | `true` | Active la préparation build Tauri |

Les publicités ne s'affichent que si `NEXT_PUBLIC_ADSENSE_CLIENT_ID` est défini ; sinon des placeholders de développement sont rendus.

## Déploiement

### Vercel / Netlify (export statique)

L'application exporte en statique (`output: 'export'` → dossier `out/`).

```bash
npm run build
```

- **Vercel** : déployer le dépôt, framework Next.js, commande de build `npm run build`
- **Netlify** : config existante dans `netlify.toml` (build: `npm run build`, publish: `out`)

### Docker

```bash
docker build -t pdfruche .
docker run -p 3000:3000 pdfruche
```

### nginx (statique)

Servir le contenu de `out/` avec `nginx.conf` fourni. Le fichier `public/_headers` est copié dans `out/` pour les headers de sécurité.

## Configuration AdSense

1. Créer un compte AdSense et un site approuvé
2. Créer les emplacements (header banner 728×90, sidebar 300×250, tool page bottom, between sections 970×90, mobile in-feed)
3. Définir `NEXT_PUBLIC_ADSENSE_CLIENT_ID` et les variables `NEXT_PUBLIC_ADSENSE_SLOT_*`
4. Rebuild et redéployer

## Configuration Branding

- Logo : remplacer `public/images/logo-pdfruche.png` et `public/images/logo-pdfruche-dark.svg`
- Favicon : `public/favicon.svg`
- Couleurs : variables CSS dans `src/app/globals.css` (sections `:root` et `.dark`)
- Textes : fichiers `messages/*.json` (14 langues) et `src/config/site.ts`

## Déploiement Desktop (Tauri, optionnel)

```bash
npm run dev:tauri    # développement desktop
npm run build:tauri  # build desktop
```