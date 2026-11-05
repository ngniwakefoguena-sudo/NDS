# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.15.1 create --template minimal --types ts --add tailwindcss="plugins:none" sveltekit-adapter="adapter:netlify" --install npm ./
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

---

## L'animation des partenaires (le bandeau de logos qui défile)

Sur la page d'accueil, la section « Nos Partenaires » fait défiler les logos des
entreprises en boucle, de droite à gauche, sans fin. Voici comment ça marche et
comment on a réglé un petit bug d'animation. C'est expliqué le plus simplement
possible.

### Comment l'effet « défilement infini » est fait

L'idée est toute bête : **on écrit la liste des logos plusieurs fois à la suite**,
puis on fait glisser tout le bloc vers la gauche. Quand le premier exemplaire de
la liste a fini de passer, le deuxième exemplaire est déjà là, exactement à la
même place — donc l'œil ne voit aucune coupure : ça semble infini.

Concrètement, dans `src/routes/+page.svelte` :

1. On a une liste de partenaires (`partners`).
2. Dans le HTML, on affiche cette liste **3 fois de suite** (Set 1, Set 2, Set 3).
   Les copies sont marquées `aria-hidden="true"` pour que les lecteurs d'écran
   ne lisent pas 3 fois les mêmes noms.
3. En CSS, on fait glisser tout le rail vers la gauche avec une animation :

```css
.partners-marquee-track {
  display: flex;
  width: max-content;                       /* le rail est aussi large que son contenu */
  animation: marqueeScroll 18s linear infinite;
}

@keyframes marqueeScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(calc(-100% / 3)); }   /* on recule d'1 copie sur 3 */
}
```

Le secret est dans le `-100% / 3` : comme la liste est écrite **3 fois**, reculer
d'un tiers de la largeur totale revient à reculer d'**exactement une copie**.
Arrivé là, l'animation revient à `0` d'un coup… mais comme la copie suivante est
au même endroit, on ne voit pas le « saut » : la boucle paraît continue.

Le bandeau s'arrête aussi au survol de la souris (`:hover` → `animation-play-state: paused`)
et l'animation est désactivée pour les gens qui préfèrent moins de mouvement
(`prefers-reduced-motion`).

### Le bug : pourquoi ça « sautait » à chaque tour

Pour que l'illusion soit parfaite, il faut une règle absolue :

> **1 copie de la liste doit faire EXACTEMENT un tiers de la largeur totale.**

Sinon, quand l'animation revient à `0`, la copie suivante n'est pas pile au bon
endroit, et on voit l'image se figer un instant puis se décaler d'un coup. C'est
le petit « hoquet » qu'on remarquait à chaque tour.

Avant la correction, l'espace entre les logos était géré de deux façons en même
temps :

- un `gap: 56px` (l'espace entre chaque logo), **plus**
- un `padding-right: 56px` ajouté **une seule fois, tout à la fin du rail**.

Ce `padding-right` ajouté une seule fois cassait le calcul : la largeur totale
n'était plus un multiple parfait de 3. Du coup `-100% / 3` ne tombait plus
exactement sur la fin d'une copie → d'où le micro-blocage à chaque rebouclage.

### La correction : un espacement régulier porté par chaque logo

La solution est simple : **donner à chaque logo son propre espace à droite**, et
supprimer l'espace ajouté « à part » à la fin.

- On a retiré le `gap: 56px` et le `padding-right: 56px` du rail.
- On a mis à la place une `margin-right: 56px` sur **chaque** logo
  (`.partner-item`) — y compris le dernier.

```css
.partner-item {
  margin-right: 56px;   /* 72px sur grand écran */
}
```

Maintenant, chaque logo « emporte » son espacement avec lui. Les 3 copies ont
donc rigoureusement la même largeur, et un tiers du total = pile une copie.
Résultat : `-100% / 3` retombe parfaitement, et le défilement boucle sans aucun
saut. 🎉

En résumé, en langage de tous les jours : avant, on avait posé des logos
régulièrement espacés mais on avait collé un petit bout de carton en trop à la
fin du tapis roulant ; le tapis ne bouclait donc pas pile-poil. On a enlevé le
bout en trop et donné à chaque logo son propre petit espace : maintenant le tapis
tourne en rond parfaitement.

---

## La carte de fidélité est masquée (temporairement)

Le service « Carte de fidélité digitale » est **caché du site pour le moment**.
Le code n'a pas été supprimé, juste désactivé, pour pouvoir le réafficher en
quelques secondes quand on voudra.

### Ce qui est masqué

1. **Le bouton « Carte fidélité » du Hero** — fichier
   `src/lib/components/Hero.svelte`. Le bouton est entouré d'un commentaire HTML
   `<!-- ... -->`, donc il ne s'affiche plus.

2. **La grande section « Cartes de fidélité digitales » de la page d'accueil** —
   fichier `src/routes/+page.svelte`. Toute la section est enveloppée dans un
   bloc `{#if false} ... {/if}`. Comme la condition est toujours fausse, Svelte
   n'affiche jamais ce qu'il y a dedans.

> Pourquoi `{#if false}` et pas un simple commentaire `<!-- -->` pour la section ?
> Parce que la section contient déjà des commentaires à l'intérieur
> (`<!-- Texte -->`, `<!-- Visuel -->`). En HTML on **ne peut pas** mettre un
> commentaire dans un commentaire : le premier `-->` fermerait tout trop tôt et
> casserait la page. `{#if false}` contourne le problème sans rien abîmer.

### Comment la réafficher (pas à pas)

1. Dans `src/lib/components/Hero.svelte`, retrouve le bloc du bouton « Carte
   fidélité » et **enlève les deux lignes de commentaire** `<!--` (au-dessus) et
   `-->` (en dessous) qui l'entourent.

2. Dans `src/routes/+page.svelte`, retrouve la section « Carte Fidélité » et
   remplace `{#if false}` par `{#if true}` (ou supprime la ligne `{#if false}`
   au début **et** la ligne `{/if}` à la fin).

3. C'est tout : le bouton et la section réapparaissent. Rien d'autre à changer,
   les images et les styles sont restés en place.
