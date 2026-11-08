import { getBlogPost, getBlogPosts, type BlogPost } from '$lib/server/content';
import { error } from '@sveltejs/kit';
import { servicePages } from '$lib/data/services';
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

// Mots trop courants pour indiquer que deux articles parlent du même sujet
const STOP = new Set(['pour', 'avec', 'votre', 'vos', 'les', 'des', 'une', 'comment', 'dans', 'sans', 'quoi', 'que', 'qui', 'est', 'sur', 'par', 'plus', 'guide', 'complet', 'pratique', '2025', '2026', 'paris', 'france', 'entreprise', 'pme', 'agence']);

function keywords(post: BlogPost): Set<string> {
	const text = [post.title, ...(post.tags ?? [])].join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	return new Set(text.split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !STOP.has(w)));
}

/** Les 3 articles qui partagent le plus de mots-clés avec l'article courant (maillage interne). */
function relatedPosts(post: BlogPost) {
	const mine = keywords(post);
	return getBlogPosts()
		.filter((p) => p.slug !== post.slug)
		.map((p) => ({ p, score: [...keywords(p)].filter((w) => mine.has(w)).length }))
		.sort((a, b) => b.score - a.score || new Date(b.p.date).getTime() - new Date(a.p.date).getTime())
		.slice(0, 3)
		.map(({ p }) => ({ slug: p.slug, title: p.title, summary: p.summary, cover: p.cover, date: p.date }));
}

/** La page service dont cet article est un guide (pour renvoyer le lecteur vers l'offre). */
function relatedService(slug: string) {
	const s = servicePages.find((sp) => sp.page.articles.includes(slug));
	return s ? { slug: s.page.slug, name: s.page.h1 } : null;
}

export async function load({ params }) {
	const post = getBlogPost(params.slug);
	if (!post) throw error(404, 'Article introuvable');
	if (post.publish_date && new Date(post.publish_date) > new Date()) throw error(404, 'Article introuvable');

	const words = post.body.replace(/[#*`\[\]()!>_~]/g, '').split(/\s+/).filter(Boolean).length;
	const readingTime = Math.max(1, Math.ceil(words / 200));

	// Le titre de l'article est déjà le seul <h1> de la page : les titres « # » du contenu deviennent des <h2>
	const body = post.body.replace(/^# /gm, '## ');

	return { post: { ...post, html: await marked.parse(body), readingTime }, related: relatedPosts(post), service: relatedService(post.slug) };
}
