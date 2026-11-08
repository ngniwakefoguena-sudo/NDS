<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-svelte';
	import type { Service, ServicePage } from '$lib/data/services';

	let { items }: { items: (Service & { page: ServicePage })[] } = $props();

	/* Rangée de cartes à faire glisser (doigt, molette) ou avec les flèches */
	let viewport: HTMLElement;
	let atStart = $state(true);
	let atEnd = $state(false);

	const update = () => {
		atStart = viewport.scrollLeft < 8;
		atEnd = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 8;
	};
	const go = (dir: number) => viewport.scrollBy({ left: dir * viewport.clientWidth * 0.8, behavior: 'smooth' });

	onMount(() => {
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	});
</script>

<section id="services" class="scroller" aria-labelledby="svc-title">
	<div class="head">
		<div>
			<h2 id="svc-title" class="h2">Ce que nous faisons pour vous</h2>
			<p class="sub">Un seul interlocuteur pour votre site, votre application, l’IA et le marketing.</p>
		</div>
		<div class="nav" aria-hidden="true">
			<button type="button" tabindex="-1" onclick={() => go(-1)} disabled={atStart}><ArrowLeft class="w-4 h-4" /></button>
			<button type="button" tabindex="-1" onclick={() => go(1)} disabled={atEnd}><ArrowRight class="w-4 h-4" /></button>
		</div>
	</div>

	<div class="viewport" bind:this={viewport} onscroll={update}>
		<ul class="track">
			{#each items as s, i (s.page.slug)}
				<li class="card-wrap">
					<a href="/services/{s.page.slug}" class="card" class:featured={i === 0}>
						<span class="icon"><s.icon class="w-5 h-5" /></span>
						<h3 class="card-title">{s.page.h1}</h3>
						<p class="card-desc">{s.description}</p>
						<span class="more">Découvrir <ArrowUpRight class="w-4 h-4" /></span>
					</a>
				</li>
			{/each}
			<li class="card-wrap">
				<a href="/services" class="card end">
					<h3 class="card-title">Voir tous nos services</h3>
					<p class="card-desc">Data, formation, design, backend : toutes nos expertises.</p>
					<span class="end-arrow"><ArrowRight class="w-5 h-5" /></span>
				</a>
			</li>
		</ul>
	</div>
</section>

<style>
	.scroller { background: rgb(var(--mist)); padding: 4rem 0 3.5rem; }
	.head {
		max-width: 80rem;
		margin: 0 auto 1.75rem;
		padding: 0 1.25rem;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1.5rem;
	}
	@media (min-width: 768px) { .head { padding: 0 2rem; } }
	.h2 {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.5rem, 2.8vw, 2.1rem);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.1;
		color: rgb(var(--ink));
		margin: 0 0 0.5rem;
	}
	.sub { color: rgb(var(--muted)); line-height: 1.55; margin: 0; font-size: 0.95rem; }
	.nav { display: flex; gap: 0.5rem; flex-shrink: 0; }
	.nav button {
		width: 2.6rem;
		height: 2.6rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgb(var(--bg));
		border: 1px solid rgb(var(--line) / 0.12);
		color: rgb(var(--ink));
		transition: background 0.2s, color 0.2s, opacity 0.2s;
	}
	.nav button:hover:not(:disabled) { background: rgb(var(--accent)); color: rgb(var(--night)); border-color: rgb(var(--accent)); }
	.nav button:disabled { opacity: 0.35; cursor: default; }
	@media (max-width: 767px) { .nav { display: none; } }

	.viewport {
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-padding-left: 1.25rem;
		scrollbar-width: none;
		-webkit-overflow-scrolling: touch;
	}
	.viewport::-webkit-scrollbar { display: none; }
	.track {
		list-style: none;
		margin: 0;
		display: flex;
		gap: 1rem;
		width: max-content;
		padding: 0.5rem 1.25rem 1.25rem;
	}
	@media (min-width: 768px) { .track { padding: 0.5rem 2rem 1.25rem; } .viewport { scroll-padding-left: 2rem; } }
	@media (min-width: 1280px) {
		.track { padding-left: max(2rem, calc((100vw - 80rem) / 2 + 2rem)); padding-right: 2rem; }
		.viewport { scroll-padding-left: max(2rem, calc((100vw - 80rem) / 2 + 2rem)); }
	}
	.card-wrap { scroll-snap-align: start; }

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		width: min(78vw, 18.5rem);
		height: 100%;
		min-height: 17rem;
		padding: 1.4rem;
		border-radius: 1.25rem;
		background: rgb(var(--bg));
		border: 1px solid rgb(var(--line) / 0.07);
		box-shadow: 0 10px 30px rgba(60, 90, 10, 0.06);
		overflow: hidden;
		isolation: isolate;
		transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s, border-color 0.3s;
	}
	.card::before {
		content: '';
		position: absolute;
		width: 16rem;
		height: 16rem;
		right: -7rem;
		top: -7rem;
		border-radius: 50%;
		background: radial-gradient(circle, rgb(152 200 22 / 0.25), transparent 65%);
		transform: scale(0.6);
		opacity: 0;
		transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s;
		z-index: -1;
	}
	.card:hover { transform: translateY(-5px); box-shadow: 0 20px 45px rgba(60, 90, 10, 0.13); border-color: rgb(var(--accent) / 0.5); }
	.card:hover::before { transform: scale(1); opacity: 1; }

	.icon {
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 0.85rem;
		display: grid;
		place-items: center;
		background: rgb(var(--accent) / 0.15);
		color: rgb(var(--accent-2));
		transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s, color 0.3s;
	}
	.card:hover .icon { transform: rotate(-8deg) scale(1.08); background: rgb(var(--accent)); color: rgb(var(--night)); }
	.card-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.1rem;
		font-weight: 600;
		letter-spacing: -0.01em;
		line-height: 1.25;
		color: rgb(var(--ink));
		margin: 1.25rem 0 0.5rem;
	}
	.card-desc {
		font-size: 0.87rem;
		line-height: 1.55;
		color: rgb(var(--muted));
		margin: 0 0 1rem;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.more { display: inline-flex; align-items: center; gap: 0.3rem; font-weight: 600; font-size: 0.9rem; color: rgb(var(--ink)); margin-top: auto; }
	.more :global(svg) { transition: transform 0.3s; }
	.card:hover .more :global(svg) { transform: translate(3px, -3px); }

	.card.featured { background: rgb(var(--accent)); border-color: transparent; }
	.card.featured .icon { background: rgb(var(--night)); color: rgb(var(--accent)); }
	.card.featured .card-title, .card.featured .more { color: rgb(var(--night)); }
	.card.featured .card-desc { color: rgb(var(--night) / 0.75); }
	.card.featured::before { background: radial-gradient(circle, rgba(255, 255, 255, 0.45), transparent 65%); }

	.card.end { background: rgb(var(--night)); justify-content: flex-end; }
	.card.end .card-title { color: #fff; margin-top: 0; }
	.card.end .card-desc { color: rgba(255, 255, 255, 0.65); }
	.end-arrow {
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgb(var(--accent));
		color: rgb(var(--night));
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	.card.end:hover .end-arrow { transform: translateX(6px) rotate(-45deg); }
</style>
