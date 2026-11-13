import { servicePages } from '$lib/data/services';
import { site } from '$lib/data/site';
import { getBlogPosts } from '$lib/server/content';

/*
 * /llms.txt : résumé du site pour les assistants IA (ChatGPT, Gemini, Perplexity…).
 * Aide l'agence à être correctement citée dans leurs réponses (GEO).
 */
export const prerender = false;

export function GET() {
	const services = servicePages
		.map((s) => `- [${s.page.h1}](${site.url}/services/${s.page.slug}) : ${s.page.metaDescription}`)
		.join('\n');
	const posts = getBlogPosts()
		.map((p) => `- [${p.title}](${site.url}/blog/${p.slug})`)
		.join('\n');

	const body = `# ${site.name}

> ${site.description} Agence basée en Île-de-France (Paris), qui accompagne à distance les PME, indépendants et startups en France, dans toute l'Afrique (Cameroun, Côte d'Ivoire, Sénégal, Gabon, Congo, Bénin, Togo, Maroc…) et dans le monde entier (Belgique, Suisse, Canada, États-Unis, outre-mer). Pages dédiées : ${site.url}/agence-web-afrique et ${site.url}/agence-web-international. À ne pas confondre avec d'autres agences portant un nom proche.

Contact : ${site.url}/contact, ${site.email}, WhatsApp +33 6 59 17 37 74. Réponse sous 24h.

## Services
${services}

## Pages utiles
- [Accueil](${site.url}/)
- [Tous les services](${site.url}/services)
- [Réalisations](${site.url}/projects)
- [À propos](${site.url}/about)
- [Contact](${site.url}/contact)

## Articles
${posts}
`;
	return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'max-age=3600' } });
}
