import { getProject } from '$lib/server/content';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const project = getProject(params.slug);
	if (!project) throw error(404, 'Projet introuvable');
	return { project };
}
