<script lang="ts">
	import { page } from '$app/state';
	import { ArrowRight } from 'lucide-svelte';
	import { servicePages } from '$lib/data/services';

	const notFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{notFound ? 'Page introuvable' : 'Erreur'} | Norbert Digital Service</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<section class="err">
	<div class="inner">
		<p class="code">{page.status}</p>
		<h1>{notFound ? 'Cette page n’existe pas ou a changé d’adresse.' : 'Un problème est survenu.'}</h1>
		<p class="lead">
			{notFound
				? 'Pas d’inquiétude : voici les pages les plus utiles pour trouver ce que vous cherchez.'
				: 'Réessayez dans un instant. Si le problème continue, écrivez-nous, on vous répond sous 24h.'}
		</p>
		<div class="ctas">
			<a href="/" class="btn">Retour à l’accueil <ArrowRight class="w-4 h-4" /></a>
			<a href="/contact" class="btn-line">Nous contacter</a>
		</div>
		<ul class="links">
			{#each servicePages.slice(0, 6) as s (s.page.slug)}
				<li><a href="/services/{s.page.slug}">{s.title}</a></li>
			{/each}
			<li><a href="/blog">Blog</a></li>
		</ul>
	</div>
</section>

<style>
	.err { background: rgb(var(--mist)); padding: 9rem 1.25rem 9rem; }
	.inner { max-width: 40rem; margin: 0 auto; text-align: center; }
	.code {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(4rem, 14vw, 7rem);
		font-weight: 700;
		line-height: 1;
		letter-spacing: -0.05em;
		color: rgb(var(--accent));
		margin: 0 0 1rem;
	}
	h1 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.4rem, 3vw, 2rem); color: rgb(var(--ink)); margin: 0 0 0.75rem; letter-spacing: -0.02em; }
	.lead { color: rgb(var(--muted)); line-height: 1.6; margin: 0 0 1.75rem; }
	.ctas { display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: center; margin-bottom: 2rem; }
	.btn, .btn-line { display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.75rem 1.3rem; border-radius: 999px; font-weight: 600; font-size: 0.93rem; }
	.btn { background: rgb(var(--ink)); color: rgb(var(--bg)); }
	.btn:hover { background: rgb(var(--accent-2)); }
	.btn-line { border: 1px solid rgb(var(--line) / 0.15); color: rgb(var(--ink)); background: rgb(var(--bg)); }
	.links { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 0.4rem; }
	.links a { display: inline-block; padding: 0.4rem 0.9rem; border-radius: 999px; border: 1px solid rgb(var(--line) / 0.12); font-size: 0.85rem; color: rgb(var(--ink)); background: rgb(var(--bg)); }
	.links a:hover { border-color: rgb(var(--accent)); }
</style>
