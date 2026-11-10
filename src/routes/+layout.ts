export const ssr = true;
// Toutes les pages sont générées en HTML statique au moment du build et servies
// directement par le CDN de Netlify (au lieu d'être recalculées à chaque visite
// par une fonction serveur aux États-Unis). Résultat : pages beaucoup plus rapides.
// Les routes qui doivent rester dynamiques (ex. /api/chaya) déclarent prerender = false.
export const prerender = true;
