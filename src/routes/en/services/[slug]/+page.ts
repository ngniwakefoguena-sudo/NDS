import { error } from '@sveltejs/kit';
import { getServiceEn, servicesEn } from '$lib/data/services.en';

export const entries = () => servicesEn.map((s) => ({ slug: s.page.slug }));

export function load({ params }) {
	if (!getServiceEn(params.slug)) throw error(404, 'Service not found');
	return { slug: params.slug };
}
