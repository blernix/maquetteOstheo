# Site Internet Cabinet d'Ostéopathie - Sophie MARTIN

Site vitrine professionnel pour un cabinet d'ostéopathie à Paris, 100% conforme à la réglementation française et au RGPD.

## 📋 Description

Site de démonstration pour portfolio, présentant un cabinet d'ostéopathie fictif avec :
- Informations complètes sur les prestations
- Blog avec articles sur l'ostéopathie
- Formulaire de contact (simulation)
- Conformité RGPD et réglementation ostéopathes
- Design moderne et responsive

## 🚀 Technologies utilisées

- **Next.js 14+** avec App Router et export statique
- **React 18+**
- **TypeScript** (typage strict)
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **React Hook Form + Zod** pour la validation des formulaires
- **Lucide React** pour les icônes

## 📁 Structure du projet

```
/
├── app/                          # Pages Next.js (App Router)
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Page d'accueil
│   ├── qui-suis-je/             # Page À propos
│   ├── prestations/             # Page Prestations
│   ├── tarifs/                  # Page Tarifs
│   ├── contact/                 # Page Contact
│   ├── blog/                    # Blog (liste + articles)
│   ├── mentions-legales/        # Mentions légales
│   └── politique-confidentialite/ # Politique RGPD
│
├── components/
│   ├── layout/                  # Header, Footer, MobileNav
│   ├── ui/                      # Composants UI réutilisables
│   ├── home/                    # Composants page d'accueil
│   ├── contact/                 # Formulaire de contact
│   └── shared/                  # Bandeau cookies RGPD
│
├── lib/
│   ├── constants.ts             # Données du cabinet
│   ├── blog-data.ts             # Articles du blog
│   ├── validation.ts            # Schémas Zod
│   └── utils.ts                 # Fonctions utilitaires
│
├── styles/
│   └── globals.css              # Styles globaux Tailwind
│
└── public/                      # Assets statiques
```

## 🎨 Pages du site

1. **Accueil** : Hero, prestations, témoignages, infos pratiques
2. **Qui suis-je** : Présentation de l'ostéopathe
3. **Prestations** : Détails des consultations (adultes, nourrissons, sportifs, etc.)
4. **Tarifs** : Tarifs et modalités de remboursement
5. **Contact** : Formulaire + carte Google Maps
6. **Blog** : 5 articles sur l'ostéopathie
7. **Mentions légales** : Conformité réglementaire
8. **Politique de confidentialité** : RGPD

## ⚖️ Conformité réglementaire

Le site respecte scrupuleusement :

### Réglementation ostéopathes (France)
- ✅ Numéro RPPS affiché
- ✅ Enregistrement ARS mentionné
- ✅ Assurance RCP complète (nom, adresse, numéro, plafonds)
- ✅ Limites de compétences clairement indiquées
- ✅ Obligation de référer vers un médecin
- ✅ Secret professionnel mentionné
- ✅ Diplôme et formation continue affichés

### RGPD (Protection des données)
- ✅ Politique de confidentialité complète
- ✅ Conservation des données : 20 ans (dossiers patients)
- ✅ Droits des patients listés
- ✅ Bandeau cookies fonctionnel
- ✅ Consentement sur formulaire

## 🔧 Installation et utilisation

### Installation des dépendances

```bash
npm install
```

### Développement local

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Build en production (export statique)

```bash
npm run build
```

Le site statique sera généré dans le dossier `out/`

### Prévisualiser le build statique

```bash
npx serve out/
```

## ⚙️ Configuration

### Variables d'environnement (optionnel)

Créez un fichier `.env.local` (voir `.env.example`) :

```bash
# Site URL
NEXT_PUBLIC_SITE_URL=https://osteo-sophie-martin.fr

# Formulaire de contact (optionnel - actuellement en simulation)
# NEXT_PUBLIC_FORM_ENDPOINT=https://votre-api.com/send-email
# NEXT_PUBLIC_FORM_API_KEY=votre_cle_api

# Google Analytics (optionnel)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Personnalisation

Pour adapter le site à un vrai cabinet :

1. **Modifier les constantes** : `lib/constants.ts`
   - Informations du cabinet
   - Diplômes et certifications
   - Tarifs
   - Horaires

2. **Ajouter des photos** : `public/images/`
   - Photo professionnelle de l'ostéopathe
   - Photos du cabinet
   - Images pour le blog

3. **Connecter le formulaire** :
   - Configurer l'URL de votre micro-service d'envoi d'emails
   - Mettre à jour `ContactForm.tsx` pour utiliser une vraie API

4. **SEO** :
   - Mettre à jour les meta tags dans `app/layout.tsx`
   - Modifier le sitemap si nécessaire

## 🎨 Design

- **Palette de couleurs** : Naturelle (Vert sauge + Terre cuite)
- **Typographie** :
  - Titres : Lora (serif)
  - Texte : Inter (sans-serif)
- **Responsive** : Mobile-first
- **Accessibilité** : Contrastes WCAG 2.1 AA

## 📱 Responsive

Le site est entièrement responsive et testé sur :
- Mobile : 375px, 414px
- Tablette : 768px, 1024px
- Desktop : 1280px, 1440px, 1920px

## ✨ Fonctionnalités

- [x] Navigation sticky avec effet scroll
- [x] Menu mobile avec animation
- [x] Formulaire de contact avec validation Zod
- [x] Bandeau cookies RGPD
- [x] Blog avec 5 articles complets
- [x] Animations Framer Motion
- [x] Optimisation SEO (meta tags, Schema.org)
- [x] Export statique Next.js

## 📝 Articles du blog

1. 5 exercices d'étirements pour soulager le mal de dos
2. Ostéopathie pour bébé : à quel âge consulter ?
3. Préparation à la course à pied : le rôle de l'ostéopathe
4. Femmes enceintes : comment soulager les douleurs lombaires ?
5. Troubles digestifs : quand consulter un ostéopathe ?

## 🚀 Déploiement

Le site peut être déployé sur :
- **Netlify** : Déploiement automatique depuis Git
- **Vercel** : Plateforme Next.js optimisée
- **GitHub Pages** : Hébergement gratuit pour sites statiques
- **Serveur VPS** : Upload du dossier `out/`

### Exemple : Déploiement sur Netlify

1. Créez un compte sur [Netlify](https://www.netlify.com/)
2. Connectez votre repository GitHub
3. Configurez le build :
   - Build command : `npm run build`
   - Publish directory : `out`
4. Déployez !

## 📄 Licence

Ce projet est un site de démonstration. Les informations du cabinet sont fictives.

## 👤 Auteur

Site développé avec Claude Code pour démonstration portfolio.

## 🔗 Liens utiles

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [CNIL - RGPD](https://www.cnil.fr/fr/reglement-europeen-protection-donnees)
- [Réglementation ostéopathes](https://www.osteopathe-france.org/)

---

**Note** : Ce site est conforme à la réglementation française des ostéopathes et au RGPD (2024).
