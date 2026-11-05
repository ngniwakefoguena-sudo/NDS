import { getBlogPosts, getProjects } from '$lib/server/content';

export function load() {
	return {
		posts: getBlogPosts().slice(0, 3),
		featured: getProjects().filter(p => p.featured).slice(0, 3)
	};
}
