<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight, ArrowRight } from 'lucide-svelte';
	import type { Service, ServicePage } from '$lib/data/services';

	let { items }: { items: (Service & { page: ServicePage })[] } = $props();

	/*
	 * Sur grand écran : la section reste fixe à l'écran et les cartes défilent
	 * de droite à gauche pendant qu'on fait défiler la page.
	 * Sur mobile/tablette (ou si l'utilisateur réduit les animations) :
	 * simple rangée de cartes à faire glisser au doigt.
	 */
	let section: HTMLElement;
	let track: HTMLElement;
	let pinned = $state(false);
	let progress = $state(0);
	let distance = $state(0);

	onMount(() => {
		const mq = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');
		let raf = 0;

		const measure = () => {
			pinned = mq.matches;
			distance = pinned ? Math.max(0, track.scrollWidth - window.innerWidth) : 0;
			update();
		};
		const update = () => {
			if (!pinned) return;
			const r = section.getBoundingClientRect();
			const total = section.offsetHeight - window.innerHeight;
			progress = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
		};
		const onScroll = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(update);
		};

		measure();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', measure);
		mq.addEventListener('change', measure);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', measure);
			mq.removeEventListener('change', measure);
			cancelAnimationFrame(raf);
		};
	});
</script>

<section
	id="services"
	class="scroller"
	class:pinned
	bind:this={section}
	style={pinned ? `height: calc(100vh + ${distance}px)` : ''}
	aria-labelledby="svc-title"
>
	<div class="sticky">
		<div class="head">
			<h2 id="svc-title" class="h2">Ce que nous faisons pour vous</h2>
			<div class="head-right">
				<p class="sub">Un seul interlocuteur pour votre site, votre application, l’IA et le marketing.</p>
				{#if pinned}
					<div class="bar" aria-hidden="true"><span style="transform: scaleX({progress})"></span></div>
				{/if}
			</div>
		</div>

		<div class="viewport">
			<ul class="track" bind:this={track} style={pinned ? `transform: translate3d(${-progress * distance}px,0,0)` : ''}>
				{#each items as s, i (s.page.slug)}
					<li class="card-wrap">
						<a href="/services/{s.page.slug}" class="card" class:featured={i === 0}>
							<span class="icon"><s.icon class="w-7 h-7" /></span>
							<h3 class="card-title">{s.page.h1}</h3>
							<p class="card-desc">{s.description}</p>
							<ul class="tags" aria-label="Technologies">
								{#each s.stack.slice(0, 4) as t}<li>{t}</li>{/each}
							</ul>
							<span class="more">Découvrir <ArrowUpRight class="w-4 h-4" /></span>
						</a>
					</li>
				{/each}
				<li class="card-wrap">
					<a href="/services" class="card end">
						<h3 class="card-title">Voir tous nos services</h3>
						<p class="card-desc">Data, formation, design, backend : découvrez l’ensemble de nos expertises.</p>
						<span class="end-arrow"><ArrowRight class="w-6 h-6" /></span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.scroller { position: relative; background: rgb(var(--mist)); }
	.sticky { padding: 5.5rem 0 4.5rem; }
	.pinned .sticky {
		position: sticky;
		top: 0;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 7rem 0 2rem;
		overflow: hidden;
	}
	/* écrans peu hauts : cartes plus courtes pour que tout tienne sous le menu */
	.pinned .card { min-height: min(26rem, calc(100vh - 21rem)); }
	.pinned .head { margin-bottom: 2rem; }

	.head {
		width: 100%;
		max-width: 80rem;
		margin: 0 auto 2.5rem;
		padding: 0 1.25rem;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem 3rem;
	}
	@media (min-width: 768px) { .head { padding: 0 2rem; } }
	.h2 {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.9rem, 4vw, 3.2rem);
		font-weight: 700;
		letter-spacing: -0.035em;
		line-height: 1.05;
		color: rgb(var(--ink));
		margin: 0;
		max-width: 16ch;
	}
	.head-right { max-width: 26rem; }
	.sub { color: rgb(var(--muted)); line-height: 1.6; margin: 0; }
	.bar { margin-top: 1rem; height: 3px; border-radius: 3px; background: rgb(var(--line) / 0.08); overflow: hidden; }
	.bar span { display: block; height: 100%; background: rgb(var(--accent)); transform-origin: left; }

	/* ── Rangée de cartes ── */
	.viewport {
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scrollbar-width: none;
		-webkit-overflow-scrolling: touch;
	}
	.viewport::-webkit-scrollbar { display: none; }
	.pinned .viewport { overflow: visible; }
	.track {
		list-style: none;
		margin: 0;
		display: flex;
		gap: 1.25rem;
		width: max-content;
		padding: 0.5rem 1.25rem 1.5rem;
		will-change: transform;
	}
	@media (min-width: 768px) { .track { padding: 0.5rem 2rem 1.5rem; } }
	@media (min-width: 1280px) { .track { padding-left: max(2rem, calc((100vw - 80rem) / 2 + 2rem)); padding-right: 4rem; } }
	.card-wrap { scroll-snap-align: start; scroll-margin-left: 1.25rem; }

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		width: min(82vw, 25rem);
		height: 100%;
		min-height: 26rem;
		padding: 2rem;
		border-radius: 1.75rem;
		background: rgb(var(--bg));
		border: 1px solid rgb(var(--line) / 0.07);
		box-shadow: 0 18px 50px rgba(60, 90, 10, 0.08);
		overflow: hidden;
		isolation: isolate;
		transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s, border-color 0.3s;
	}
	/* halo vert qui grandit au survol */
	.card::before {
		content: '';
		position: absolute;
		width: 22rem;
		height: 22rem;
		right: -9rem;
		top: -9rem;
		border-radius: 50%;
		background: radial-gradient(circle, rgb(152 200 22 / 0.28), transparent 65%);
		transform: scale(0.6);
		opacity: 0;
		transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s;
		z-index: -1;
	}
	.card:hover { transform: translateY(-8px); box-shadow: 0 30px 70px rgba(60, 90, 10, 0.16); border-color: rgb(var(--accent) / 0.5); }
	.card:hover::before { transform: scale(1); opacity: 1; }

	.icon {
		width: 4rem;
		height: 4rem;
		border-radius: 1.25rem;
		display: grid;
		place-items: center;
		background: rgb(var(--accent) / 0.15);
		color: rgb(var(--accent-2));
		margin-bottom: auto;
		transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s, color 0.3s;
	}
	.card:hover .icon { transform: rotate(-8deg) scale(1.1); background: rgb(var(--accent)); color: rgb(var(--night)); }
	.card-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.15;
		color: rgb(var(--ink));
		margin: 2.5rem 0 0.75rem;
	}
	.card-desc { font-size: 0.95rem; line-height: 1.6; color: rgb(var(--muted)); margin: 0 0 1.25rem; }
	.tags { list-style: none; margin: 0 0 1.5rem; padding: 0; display: flex; flex-wrap: wrap; gap: 0.35rem; }
	.tags li { font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.65rem; border-radius: 999px; background: rgb(var(--mist)); color: rgb(var(--ink)); }
	.more { display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 600; color: rgb(var(--ink)); margin-top: auto; }
	.more :global(svg) { transition: transform 0.3s; }
	.card:hover .more :global(svg) { transform: translate(3px, -3px); }

	/* Première carte mise en avant, en vert */
	.card.featured { background: rgb(var(--accent)); border-color: transparent; }
	.card.featured .icon { background: rgb(var(--night)); color: rgb(var(--accent)); }
	.card.featured .card-title, .card.featured .more { color: rgb(var(--night)); }
	.card.featured .card-desc { color: rgb(var(--night) / 0.75); }
	.card.featured .tags li { background: rgb(var(--night) / 0.1); color: rgb(var(--night)); }
	.card.featured::before { background: radial-gradient(circle, rgba(255, 255, 255, 0.45), transparent 65%); }

	/* Dernière carte : lien vers tous les services */
	.card.end { background: rgb(var(--night)); color: #fff; justify-content: flex-end; }
	.card.end .card-title { color: #fff; margin-top: 0; }
	.card.end .card-desc { color: rgba(255, 255, 255, 0.65); }
	.end-arrow {
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgb(var(--accent));
		color: rgb(var(--night));
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	.card.end:hover .end-arrow { transform: translateX(8px) rotate(-45deg); }

	@media (max-width: 639px) {
		.sticky { padding: 4rem 0 3rem; }
		.card { min-height: 23rem; padding: 1.6rem; }
		.card-title { font-size: 1.3rem; margin-top: 2rem; }
	}
</style>
