import { getProjects } from '$lib/server/content';

export function load() {
	return { projects: getProjects() };
}
