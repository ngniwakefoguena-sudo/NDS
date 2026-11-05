import { getBlogPost } from '$lib/server/content';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';

// Extension pour centrer du texte : :::center ... :::
const centerExtension = {
	name: 'center',
	level: 'block' as const,
	start: (src: string) => src.indexOf(':::center'),
	tokenizer(src: string) {
		const match = src.match(/^:::center\n([\s\S]*?)\n:::/);
		if (match) {
			return { type: 'center', raw: match[0], text: match[1].trim() };
		}
	},
	renderer(token: { text: string }) {
		return `<div style="text-align:center">${marked.parse(token.text, { async: false })}</div>`;
	}
};

marked.use({ extensions: [centerExtension] });

export async function load({ params }) {
	const post = getBlogPost(params.slug);
	if (!post) throw error(404, 'Article introuvable');
	if (post.publish_date && new Date(post.publish_date) > new Date()) throw error(404, 'Article introuvable');

	const words = post.body.replace(/[#*`\[\]()!>_~]/g, '').split(/\s+/).filter(Boolean).length;
	const readingTime = Math.max(1, Math.ceil(words / 200));

	return { post: { ...post, html: await marked.parse(post.body), readingTime } };
}
