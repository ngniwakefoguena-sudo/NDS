<script lang="ts">
	import { ArrowUpRight, ArrowRight } from 'lucide-svelte';
	import { reveal } from '$lib/actions/motion';
	import type { Service, ServicePage } from '$lib/data/services';

	/* 6 services en mosaïque : le premier en grand (vert), le 4e en large (sombre) */
	let { items }: { items: (Service & { page: ServicePage })[] } = $props();
	const style = ['big lime', '', '', 'wide dark', '', ''];
</script>

<section id="services" class="bento-sec" aria-labelledby="svc-title">
	<div class="wrap">
		<header class="head" use:reveal>
			<h2 id="svc-title" class="h2">Ce que nous faisons pour vous</h2>
			<p class="sub">Un seul interlocuteur pour votre site, votre application, l’IA et le marketing : tout est pensé pour fonctionner ensemble.</p>
		</header>

		<div class="bento" use:reveal={{ stagger: 80 }}>
			{#each items as s, i (s.page.slug)}
				<a href="/services/{s.page.slug}" class="tile {style[i] ?? ''}" data-reveal-item>
					<span class="icon"><s.icon class="w-5 h-5" /></span>
					<h3 class="t-title">{s.page.h1}</h3>
					<p class="t-desc">{s.description}</p>
					{#if i === 0}
						<ul class="tags">{#each s.stack as t}<li>{t}</li>{/each}</ul>
					{/if}
					<span class="go" aria-hidden="true"><ArrowUpRight class="w-4 h-4" /></span>
				</a>
			{/each}
			<a href="/services" class="tile all" data-reveal-item>
				<div>
					<h3 class="t-title">Et aussi : data, formation, design, backend</h3>
					<p class="t-desc">Découvrez nos 10 expertises et trouvez celle qu’il vous faut.</p>
				</div>
				<span class="all-btn">Tous les services <ArrowRight class="w-4 h-4" /></span>
			</a>
		</div>
	</div>
</section>

<style>
	.bento-sec { background: rgb(var(--mist)); padding: 4.5rem 0; }
	@media (max-width: 767px) { .bento-sec { padding: 3.5rem 0; } }
	.wrap { max-width: 80rem; margin: 0 auto; padding: 0 1.25rem; }
	@media (min-width: 768px) { .wrap { padding: 0 2rem; } }
	.head { max-width: 40rem; margin-bottom: 2rem; }
	.h2 {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.5rem, 2.8vw, 2.1rem);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.1;
		color: rgb(var(--ink));
		margin: 0 0 0.6rem;
	}
	.sub { color: rgb(var(--muted)); line-height: 1.6; margin: 0; font-size: 0.95rem; }

	.bento { display: grid; gap: 1rem; grid-template-columns: 1fr; }
	@media (min-width: 640px) {
		.bento { grid-template-columns: repeat(2, 1fr); }
		.big, .wide, .all { grid-column: span 2; }
	}
	@media (min-width: 1024px) {
		.bento { grid-template-columns: repeat(4, 1fr); grid-auto-rows: minmax(12.5rem, auto); }
		.big { grid-column: span 2; grid-row: span 2; }
		.wide { grid-column: span 2; }
		.all { grid-column: span 2; }
	}

	.tile {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 1.4rem;
		border-radius: 1.25rem;
		background: rgb(var(--bg));
		border: 1px solid rgb(var(--line) / 0.07);
		color: rgb(var(--ink));
		overflow: hidden;
		isolation: isolate;
		transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s, border-color 0.3s;
	}
	/* halo au survol */
	.tile::before {
		content: '';
		position: absolute;
		width: 18rem;
		height: 18rem;
		right: -8rem;
		top: -8rem;
		border-radius: 50%;
		background: radial-gradient(circle, rgb(152 200 22 / 0.25), transparent 65%);
		opacity: 0;
		transform: scale(0.6);
		transition: opacity 0.4s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
		z-index: -1;
	}
	.tile:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(40, 70, 5, 0.12); border-color: rgb(var(--accent) / 0.55); }
	.tile:hover::before { opacity: 1; transform: scale(1); }

	.icon {
		width: 2.6rem;
		height: 2.6rem;
		border-radius: 0.8rem;
		display: grid;
		place-items: center;
		background: rgb(var(--accent) / 0.15);
		color: rgb(var(--accent-2));
		margin-bottom: 1.1rem;
		transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s, color 0.3s;
	}
	.tile:hover .icon { transform: rotate(-8deg) scale(1.1); background: rgb(var(--accent)); color: rgb(var(--night)); }
	.t-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.05rem;
		font-weight: 600;
		line-height: 1.25;
		letter-spacing: -0.01em;
		margin: 0 0 0.45rem;
		padding-right: 2rem;
	}
	.t-desc {
		font-size: 0.86rem;
		line-height: 1.55;
		color: rgb(var(--muted));
		margin: 0;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.go {
		position: absolute;
		top: 1.2rem;
		right: 1.2rem;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		border: 1px solid rgb(var(--line) / 0.12);
		transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s, color 0.3s, border-color 0.3s;
	}
	.tile:hover .go { transform: rotate(45deg); background: rgb(var(--ink)); color: rgb(var(--bg)); border-color: rgb(var(--ink)); }

	/* Grande tuile verte */
	.big { background: rgb(var(--accent)); border-color: transparent; justify-content: flex-end; padding: 1.75rem; }
	.big .icon { background: rgb(var(--night)); color: rgb(var(--accent)); width: 3.2rem; height: 3.2rem; border-radius: 1rem; margin-bottom: auto; }
	.big .t-title { font-size: clamp(1.35rem, 2.2vw, 1.8rem); color: rgb(var(--night)); margin-top: 2rem; }
	.big .t-desc { color: rgb(var(--night) / 0.75); font-size: 0.95rem; -webkit-line-clamp: 4; line-clamp: 4; max-width: 30rem; }
	.big .go { border-color: rgb(var(--night) / 0.25); color: rgb(var(--night)); }
	.big::before { background: radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent 65%); }
	.tags { list-style: none; padding: 0; margin: 1rem 0 0; display: flex; flex-wrap: wrap; gap: 0.35rem; }
	.tags li { font-size: 0.74rem; font-weight: 500; padding: 0.25rem 0.6rem; border-radius: 999px; background: rgb(var(--night) / 0.1); color: rgb(var(--night)); }

	/* Tuile large sombre */
	.dark { background: rgb(var(--night)); border-color: transparent; color: #fff; }
	.dark .t-desc { color: rgba(255, 255, 255, 0.65); }
	.dark .icon { background: rgb(var(--accent) / 0.18); color: rgb(var(--accent)); }
	.dark .go { border-color: rgba(255, 255, 255, 0.2); color: #fff; }
	.dark:hover .go { background: rgb(var(--accent)); color: rgb(var(--night)); border-color: rgb(var(--accent)); }

	/* Tuile « tous les services » */
	.all {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		background: transparent;
		border: 1.5px dashed rgb(var(--accent-2) / 0.45);
	}
	.all .t-title { padding-right: 0; }
	.all-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.65rem 1.1rem;
		border-radius: 999px;
		background: rgb(var(--ink));
		color: rgb(var(--bg));
		font-weight: 600;
		font-size: 0.88rem;
		white-space: nowrap;
		transition: background 0.25s;
	}
	.all:hover .all-btn { background: rgb(var(--accent-2)); }
	.all :global(svg) { transition: transform 0.25s; }
	.all:hover .all-btn :global(svg) { transform: translateX(3px); }
</style>
