import { error } from '@sveltejs/kit';
import { getBlogPost } from '$lib/server/content';
import { getService } from '$lib/data/services';

export async function load({ params }) {
	const service = getService(params.slug);
	if (!service) throw error(404, 'Service introuvable');

	const articles = service.page.articles
		.slice(0, 3)
		.map((slug) => getBlogPost(slug))
		.filter((p) => p !== null)
		.map((p) => ({ slug: p.slug, title: p.title, summary: p.summary, cover: p.cover }));

	return { slug: params.slug, articles };
}
