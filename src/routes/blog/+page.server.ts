import { getBlogPosts } from '$lib/server/content';

export function load() {
	return { posts: getBlogPosts() };
}
