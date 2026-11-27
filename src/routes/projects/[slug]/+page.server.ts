import { getProject, getProjects, getBlogPost } from '$lib/server/content';
import { servicePages } from '$lib/data/services';
import { error } from '@sveltejs/kit';

/** Service correspondant à chaque catégorie de réalisation (maillage interne vers l'offre). */
const serviceByCategory: Record<string, string> = {
	fullstack: 'creation-site-web',
	mobile: 'application-mobile',
	ai: 'intelligence-artificielle',
	data: 'data-engineering',
	cat_data: 'data-engineering'
};

export function load({ params }) {
	const project = getProject(params.slug);
	if (!project) throw error(404, 'Projet introuvable');

	const sp = servicePages.find((s) => s.page.slug === (serviceByCategory[project.category] ?? 'creation-site-web'));
	const service = sp
		? { slug: sp.page.slug, name: sp.page.h1, intro: sp.page.intro[1] ?? sp.page.intro[0], includes: sp.page.includes.slice(0, 4) }
		: null;

	const articles = (sp?.page.articles ?? [])
		.map((slug) => getBlogPost(slug))
		.filter((p): p is NonNullable<typeof p> => !!p)
		.slice(0, 3)
		.map((p) => ({ slug: p.slug, title: p.title, summary: p.summary }));

	const others = getProjects()
		.filter((p) => p.slug !== project.slug)
		.sort((a, b) => Number(b.category === project.category) - Number(a.category === project.category))
		.slice(0, 3)
		.map((p) => ({ slug: p.slug, title: p.title, tagline_fr: p.tagline_fr }));

	return { project, service, articles, others };
}
