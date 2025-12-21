# OneClickWeb - Site Vitrine Premium

Site web moderne et élégant pour OneClickWeb, agence de développement web premium. Design inspiré d'Apple avec animations fluides et performance optimale.

## Technologies

- **Next.js 16** - Framework React avec SSR/SSG
- **TypeScript** - Typage statique pour plus de fiabilité
- **Tailwind CSS v4** - Framework CSS utility-first moderne
- **Framer Motion** - Animations fluides et performantes
- **Inter Font** - Typographie premium via Google Fonts

## Prérequis

- **Node.js >= 20.9.0** (requis par Next.js 16)
- npm ou yarn

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du Projet

```
oneclickweb-site/
├── app/                      # Pages et routes (App Router)
│   ├── page.tsx             # Page d'accueil
│   ├── services/            # Page services
│   ├── realisations/        # Page portfolio
│   ├── contact/             # Page contact
│   ├── layout.tsx           # Layout principal
│   ├── globals.css          # Styles globaux + design system
│   └── sitemap.ts           # Génération du sitemap
├── components/              # Composants React
│   ├── Header.tsx           # Navigation principale
│   ├── Footer.tsx           # Pied de page
│   ├── sections/            # Sections de pages
│   └── ui/                  # Composants UI réutilisables
├── public/                  # Fichiers statiques
└── next.config.ts           # Configuration Next.js
```

## Design System

### Couleurs
- **Primary**: #0071e3 (Bleu premium)
- **Black**: #000000
- **White**: #ffffff
- **Grays**: Palette de gris Apple (#f5f5f7 → #1d1d1f)

### Typographie
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700
- **Line Height**: 1.1 pour les titres, 1.6 pour le texte

### Espacements
Système basé sur 8px : 8, 16, 24, 32, 48, 64, 96, 128px

### Animations
- Transitions douces avec cubic-bezier(0.4, 0, 0.2, 1)
- Durées : 150ms (fast), 250ms (base), 350ms (slow)
- Scroll animations avec Framer Motion

## Pages

### Accueil (/)
- Hero fullscreen avec animations
- Présentation des services (4 cartes)
- Section "Pourquoi nous choisir"
- CTA final

### Services (/services)
- Hero section
- 4 services détaillés (Vitrines, E-commerce, Applications, Hébergement)
- Fonctionnalités et tarifs

### Réalisations (/realisations)
- Galerie de projets (6 projets fictifs)
- Filtres par catégorie
- Stats de l'agence

### Contact (/contact)
- Formulaire de contact avec validation
- Informations de contact
- Horaires d'ouverture

## Optimisations

### Performance
- Images optimisées (AVIF/WebP)
- Code splitting automatique
- React Strict Mode activé
- Compression gzip/brotli

### SEO
- Métadonnées optimisées pour chaque page
- Sitemap.xml généré automatiquement
- Robots.txt configuré
- Schema markup (OpenGraph)
- URLs sémantiques

### Sécurité
- Headers de sécurité (CSP, X-Frame-Options)
- Protection CSRF
- Validation des formulaires côté client et serveur

## Scripts Disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start

# Linter
npm run lint
```

## Déploiement

### Vercel (Recommandé)
1. Push le code sur GitHub
2. Connecter le repo à Vercel
3. Déploiement automatique

### Autres plateformes
- **Netlify**: Compatible avec Next.js
- **Railway**: Support Next.js natif
- **VPS**: Build puis `npm start`

## Configuration Environnement

Créer un fichier `.env.local` :

```env
# URL du site (production)
NEXT_PUBLIC_SITE_URL=https://oneclickweb.fr

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Maintenance

### Mises à jour
```bash
# Vérifier les mises à jour
npm outdated

# Mettre à jour les dépendances
npm update
```

### Ajout de contenu
- **Images**: Placer dans `/public/images/`
- **Projets**: Modifier `app/realisations/page.tsx`
- **Services**: Modifier `app/services/page.tsx`

## Support

Pour toute question ou problème :
- Email: contact@oneclickweb.fr
- Téléphone: +33 1 23 45 67 89

## Licence

© 2025 OneClickWeb. Tous droits réservés.
