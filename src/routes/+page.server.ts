import { getBlogPosts, getProjects } from '$lib/server/content';

/**
 * Guides mis en avant sur l'accueil : un lien depuis la page la plus forte du site
 * aide Google à explorer et indexer ces articles plus vite.
 */
const featuredGuides = [
	'combien-coute-un-site-vitrine-professionnel-en-2026-les-vrais-prix-et-ce-quils-incluent',
	'agence-de-developpement-web-en-france-comment-choisir-la-bonne-en-2026',
	'developpeur-web-freelance-paris-freelance-ou-agence-que-choisir-en-2026',
	'pourquoi-votre-site-web-vous-fait-perdre-des-clients-en-2026-et-comment-y-remedier',
	'automatisation-n8n-2026-comment-les-pme-francaises-gagnent-15h-par-semaine',
	'intelligence-artificielle-pour-les-pme-ce-qui-est-possible-en-2026',
	'seo-local-2026-la-strategie-complete-pour-dominer-google',
	'combien-coute-vraiment-une-application-mobile-en-2026-le-vrai-prix-selon-votre-besoin'
];

export function load() {
	const all = getBlogPosts();
	const picked = featuredGuides.map((s) => all.find((p) => p.slug === s)).filter((p) => !!p);
	const posts = [...picked, ...all.filter((p) => !featuredGuides.includes(p.slug))]
		.slice(0, 8)
		.map((p) => ({ slug: p.slug, title: p.title, summary: p.summary }));
	return {
		posts,
		featured: getProjects().filter(p => p.featured).slice(0, 3)
	};
}
