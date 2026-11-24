import { error } from '@sveltejs/kit';
import { pays, getPays } from '$lib/data/pays';

export const prerender = true;
export const entries = () => pays.map((p) => ({ pays: p.slug }));

export function load({ params }) {
	const p = getPays(params.pays);
	if (!p) throw error(404, 'Page introuvable');
	return { p };
}
