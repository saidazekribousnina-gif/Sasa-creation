# Sasa Creation

Vitrine e-commerce pour un atelier de bijoux artisanaux tunisien. Site one-page en français, prix en dinar tunisien (DT), commande confirmée via WhatsApp.

## Stack

- React 19 + TypeScript (strict)
- Vite 7
- Tailwind CSS 3
- Lucide React (icônes)
- Vitest (tests unitaires)

## Fonctionnalités

- 11 sections configurées via `src/config.ts` (contenu, prix, textes, images)
- Panier avec persistance `localStorage` (clé `sasa-creation-cart`)
- **Commande par WhatsApp** : le bouton « Passer la commande » ouvre `wa.me/21690271601` avec un message pré-rempli (articles, quantités, total)
- Formulaire de contact envoyé via WhatsApp (nom, e-mail, message)
- SEO de base : meta description, Open Graph, favicon SVG, `lang="fr"`

## Architecture

```
src/
├── config.ts            # TOUT le contenu éditorial — seule source de vérité
├── lib/
│   ├── whatsapp.ts      # Construction messages + URL wa.me (pur, testé)
│   ├── whatsapp.test.ts
│   ├── cartStorage.ts   # Persistance panier avec validation (pur, testé)
│   └── cartStorage.test.ts
├── pages/Home.tsx       # État panier (source) + persistance
├── sections/            # Composants de section (null-safe, hooks corrects)
└── components/ui/       # shadcn/ui (non modifié)
```

## Commandes

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # tsc -b && vite build
npm run lint       # eslint (0 erreur)
npm test           # vitest run (12 tests)
npm run preview
```

## Règles verrouillées

1. **Aucun backend** : vitrine uniquement, la commande transite par WhatsApp (+216 90 271 601)
2. **Prix en DT** (`formatPrice` dans `src/lib/whatsapp.ts`)
3. **Contenu centralisé** dans `src/config.ts` — ne pas coder en dur du texte dans les sections
4. **Hooks avant early-return** dans toutes les sections (corrigé, ne pas régresser)
5. **`noopener,noreferrer`** sur toutes les ouvertures `window.open`
6. Images dans `public/images/`

## Tests

12 tests unitaires couvrent la logique pure (messages WhatsApp, normalisation numéro, persistance panier avec données corrompues). Aucun test E2E pour l'instant.
