# Blueprint — Nouveau site de prestation de services digitaux

> Ce document décrit l'architecture complète du portfolio **deniscoflash.fr** afin de reproduire la même stack pour un **site vitrine d'agence / prestation de services digitaux**, où des entreprises peuvent soumettre leurs besoins et consulter les réalisations.

---

## 1. Stack technique (identique à réutiliser)

| Couche | Technologie |
|---|---|
| Framework | **SvelteKit 2** (Svelte 4) |
| Language | **TypeScript** |
| Styling | **TailwindCSS 3** |
| Animations | **GSAP 3** + Intersection Observer custom |
| Scroll smooth | **Lenis 1** |
| i18n | **svelte-i18n 4** (FR / EN) |
| CMS Admin | **Decap CMS** (anciennement Netlify CMS) |
| Déploiement | **Netlify** (`@sveltejs/adapter-netlify`) |
| Domaine | **IONOS** (DNS pointé vers Netlify) |
| Analytics | **Google Analytics 4** (gtag.js) |
| SEO | sitemap.xml statique + robots.txt + JSON-LD Schema.org |
| Formulaire contact | **Netlify Forms** (data-netlify="true") |

---

## 2. Structure du projet

```
src/
├── app.css                    # Design tokens CSS (couleurs, typographie)
├── routes/
│   ├── +layout.svelte         # Layout global (Navbar, Footer, SplashScreen, meta OG)
│   ├── +layout.ts             # prerender: true, ssr: true, chargement i18n
│   ├── +page.svelte           # Page d'accueil (Hero, Profils, Skills, Projets featured)
│   ├── projects/
│   │   ├── +page.svelte       # Liste tous les projets avec filtre par catégorie
│   │   └── [slug]/+page.svelte # Page détail projet (dynamique)
│   ├── experience/            # Page dédiée expériences + formations
│   ├── certifications/        # Page dédiée certifications
│   ├── stack/                 # Page dédiée stack technique
│   ├── contact/               # Page contact (formulaire Netlify Forms)
│   └── about/                 # Page parcours complète
├── lib/
│   ├── components/
│   │   ├── Navbar.svelte      # Navigation fixe, burger mobile, toggle FR/EN
│   │   ├── Footer.svelte
│   │   ├── Hero.svelte        # Section hero avec stats animées
│   │   ├── ProjectCard.svelte # Carte projet réutilisable
│   │   ├── SplashScreen.svelte # Écran de chargement (sessionStorage pour 1 seul affichage)
│   │   ├── ThemeToggle.svelte # Bascule dark/light mode
│   │   ├── SmoothScroll.svelte # Initialise Lenis
│   │   └── Cursor.svelte      # Curseur custom
│   ├── data/
│   │   ├── projects.ts        # Charge content/projects/*.json via import.meta.glob
│   │   ├── experiences.ts     # Charge experiences + education + certifications
│   │   ├── skills.ts          # Compétences avec niveaux (1-5) et catégories
│   │   └── site.ts            # Constantes du site (nom, email, URL, réseaux)
│   ├── i18n/
│   │   ├── fr.json            # Toutes les traductions françaises
│   │   └── en.json            # Toutes les traductions anglaises
│   ├── animations/
│   │   └── reveal.ts          # Action Svelte use:reveal (IntersectionObserver)
│   ├── stores/
│   │   └── ui.ts              # Stores Svelte (menuOpen, cursorVariant, theme)
│   └── utils/
│       └── types.ts           # Interfaces TypeScript (Project, Skill, Experience...)
content/                       # Source de données JSON (éditables via CMS admin)
├── projects/                  # Un fichier JSON par projet
├── experiences/               # Un fichier JSON par expérience
├── education/                 # Un fichier JSON par formation
└── certifications/            # Un fichier JSON par certification
static/
├── images/                    # Images du site
├── cv/                        # Fichiers PDF CV
├── robots.txt                 # Indexation Google
├── sitemap.xml                # Plan du site pour Google
└── niswils4500/               # Interface admin Decap CMS
    ├── index.html
    └── config.yml
```

---

## 3. Configuration SvelteKit (`svelte.config.js`)

```js
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ edge: false, split: false }),
    prerender: {
      crawl: false,                    // IMPORTANT : évite que le prerenderer suive les ancres #hash
      handleHttpError: ({ path, referrer, message }) => {
        if (path.startsWith('/cv/') || path.startsWith('/images/')) return;
        throw new Error(message);
      },
      handleMissingId: 'warn'
    },
    alias: {
      $components: 'src/lib/components',
      $data: 'src/lib/data',
      $stores: 'src/lib/stores',
      $utils: 'src/lib/utils',
      $i18n: 'src/lib/i18n',
      $anim: 'src/lib/animations'
    }
  }
};
export default config;
```

---

## 4. Prérendu — règle importante

Chaque route doit exporter :
```ts
// src/routes/ma-page/+page.ts
export const prerender = true;
```

Pour les routes dynamiques (`[slug]`), exporter aussi `entries` :
```ts
export const entries = () => slugs.map(s => ({ slug: s }));
```

---

## 5. Contenu JSON — format d'un projet

```json
{
  "slug": "mon-projet",
  "title": "Titre du projet",
  "tagline_fr": "Phrase courte en français",
  "tagline_en": "Short phrase in English",
  "description_fr": "Description longue FR",
  "description_en": "Long description EN",
  "year": 2025,
  "role_fr": "Lead Developer",
  "role_en": "Lead Developer",
  "category": "fullstack",
  "tags": ["Web", "SaaS"],
  "stack": ["SvelteKit", "Django", "PostgreSQL"],
  "cover": "/images/mon-projet.jpg",
  "featured": true,
  "link_github": "https://github.com/...",
  "link_live": "https://monprojet.fr"
}
```

Catégories disponibles : `ai` | `data` | `fullstack` | `mobile` | `web`

---

## 6. Design tokens (CSS custom properties)

```css
:root {
  --bg: 250 245 240;       /* Fond chaud off-white */
  --surface: 255 253 250;
  --ink: 25 15 10;         /* Texte dark espresso */
  --muted: 120 95 80;
  --accent: 232 93 4;      /* Orange premium */
  --line: 235 220 205;
}
[data-theme='dark'] {
  --bg: 10 7 5;
  --surface: 20 14 10;
  --ink: 250 245 235;
  --accent: 232 93 4;
}
```

Usage Tailwind : `bg-[rgb(var(--accent))]` ou via config `tailwind.config.js` avec `colors: { accent: 'rgb(var(--accent))' }`.

---

## 7. CMS Admin — Decap CMS

- **URL admin** : `https://monsite.fr/niswils4500/` (nom du dossier à choisir)
- **Authentification** : Netlify Identity + Git Gateway
- **Config** : `static/niswils4500/config.yml`

```yaml
backend:
  name: git-gateway
  branch: main
local_backend: true          # Pour tester en local avec : npx decap-server
media_folder: static/images/uploads
public_folder: /images/uploads
site_url: https://monsite.fr

collections:
  - name: projects
    label: Projets
    folder: content/projects
    create: true
    extension: json
    format: json
    fields:
      - { name: title, widget: string }
      - { name: slug, widget: string }
      - { name: category, widget: select, options: [fullstack, data, ai, mobile, web] }
      - { name: year, widget: number }
      - { name: featured, widget: boolean }
      - { name: tagline_fr, widget: string }
      - { name: tagline_en, widget: string }
      - { name: description_fr, widget: text }
      - { name: description_en, widget: text }
      - { name: stack, widget: list }
      - { name: cover, widget: image }
      - { name: link_github, widget: string, required: false }
      - { name: link_live, widget: string, required: false }
```

**Activer Netlify Identity** : Dashboard Netlify → Site settings → Identity → Enable. Puis ajouter Git Gateway.

---

## 8. Formulaire de contact (Netlify Forms)

```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <input name="name" type="text" />
  <input name="email" type="email" />
  <textarea name="message"></textarea>
  <button type="submit">Envoyer</button>
</form>
```

Les soumissions apparaissent dans le dashboard Netlify → Forms.

---

## 9. SEO

**`static/robots.txt`**
```
User-agent: *
Allow: /
Sitemap: https://monsite.fr/sitemap.xml
```

**`static/sitemap.xml`** — fichier XML statique listant toutes les URLs.

**JSON-LD dans `+layout.svelte`** :
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nom de l'agence",
  "url": "https://monsite.fr"
}
```

**Balises OG dans `+layout.svelte`** :
```html
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content="https://monsite.fr/images/og-preview.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

---

## 10. Déploiement Netlify

**`netlify.toml`** :
```toml
[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "20"
```

**Étapes** :
1. Push sur GitHub (branche `main`)
2. Connecter le repo sur Netlify
3. Ajouter le domaine custom dans Domain settings
4. Pointer les DNS du registrar (IONOS, OVH...) vers Netlify
5. Activer Netlify Identity + Git Gateway pour le CMS

---

## 11. Nouveau site — spécifications cibles

### Objectif
Site vitrine d'**agence de prestation de services digitaux** où :
- Les entreprises peuvent **soumettre leurs besoins** (formulaire structuré)
- On présente les **réalisations / projets** avec filtres
- On affiche les **services proposés** (Data, IA, Mobile, Web, Backend)
- Section **équipe / profil**

### Pages suggérées
| Route | Description |
|---|---|
| `/` | Hero + Services + Projets featured + CTA contact |
| `/services` | Liste des prestations détaillées (Data, IA, Mobile, Web) |
| `/projects` | Toutes les réalisations avec filtre par domaine |
| `/projects/[slug]` | Page détail réalisation |
| `/about` | Profil / équipe |
| `/contact` | Formulaire de demande de prestation |

### Formulaire de demande client (à créer)
```html
<form name="devis" data-netlify="true">
  <input name="entreprise" />
  <input name="email" />
  <select name="service">
    <option>Développement Web</option>
    <option>Application Mobile</option>
    <option>Data / IA</option>
    <option>Backend API</option>
  </select>
  <input name="budget" />
  <textarea name="besoin" />
</form>
```

### Réutiliser depuis ce projet
- `app.css` complet (design tokens identiques)
- `Navbar.svelte`, `Footer.svelte`, `ThemeToggle.svelte`
- `SplashScreen.svelte`
- `reveal.ts` (animation scroll)
- `SmoothScroll.svelte` (Lenis)
- `+layout.ts` (prerender, i18n)
- Tout le dossier `content/projects/` (réalisations)
- Config CMS `niswils4500/config.yml` (adapter les collections)

---

## 12. Commandes utiles

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Tester le CMS en local (dans un autre terminal)
npx decap-server

# Build production
npm run build

# Vérifier les types TypeScript
npm run check
```

---

*Document généré depuis le projet portfolio deniscoflash.fr — Stack SvelteKit 2 + TailwindCSS + Decap CMS + Netlify*
