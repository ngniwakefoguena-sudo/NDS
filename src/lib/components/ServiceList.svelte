<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import { reveal } from '$lib/actions/motion';
	import type { Service, ServicePage } from '$lib/data/services';

	let { items }: { items: (Service & { page: ServicePage })[] } = $props();
</script>

<ul class="svc-list" use:reveal={{ stagger: 60 }}>
	{#each items as s (s.page.slug)}
		<li data-reveal-item>
			<a href="/services/{s.page.slug}" class="svc-row">
				<span class="svc-icon"><s.icon class="w-5 h-5" /></span>
				<span class="svc-text">
					<span class="svc-title">{s.page.h1}</span>
					<span class="svc-desc">{s.description}</span>
				</span>
				<span class="svc-arrow" aria-hidden="true"><ArrowUpRight class="w-5 h-5" /></span>
			</a>
		</li>
	{/each}
</ul>

<style>
	/* ── Services : liste éditoriale ── */
	.svc-list { list-style: none; margin: 0; padding: 0; border-top: 1px solid rgb(var(--line) / 0.1); }
	.svc-list li { border-bottom: 1px solid rgb(var(--line) / 0.1); }
	.svc-row {
		position: relative;
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 1.25rem;
		padding: 1.5rem 0.75rem;
		isolation: isolate;
	}
	/* fond vert qui se déroule au survol */
	.svc-row::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background: rgb(var(--accent) / 0.12);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.svc-row:hover::before, .svc-row:focus-visible::before { transform: scaleX(1); }
	.svc-icon {
		width: 3rem;
		height: 3rem;
		border-radius: 0.9rem;
		display: grid;
		place-items: center;
		background: rgb(var(--accent) / 0.14);
		color: rgb(var(--accent-2));
		transition: background 0.3s, color 0.3s;
	}
	.svc-row:hover .svc-icon { background: rgb(var(--accent)); color: rgb(var(--night)); }
	.svc-text { display: flex; flex-direction: column; gap: 0.3rem; min-width: 0; }
	@media (min-width: 900px) {
		.svc-text { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 2.5rem; align-items: center; }
	}
	.svc-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.15rem, 2.2vw, 1.6rem);
		font-weight: 600;
		letter-spacing: -0.02em;
		color: rgb(var(--ink));
		line-height: 1.2;
	}
	.svc-desc { font-size: 0.92rem; color: rgb(var(--muted)); line-height: 1.55; }
	.svc-arrow {
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		border: 1px solid rgb(var(--line) / 0.15);
		color: rgb(var(--ink));
		transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s, border-color 0.3s;
	}
	.svc-row:hover .svc-arrow { transform: rotate(45deg); background: rgb(var(--ink)); border-color: rgb(var(--ink)); color: rgb(var(--bg)); }
	@media (max-width: 640px) {
		.svc-row { gap: 0.9rem; padding: 1.2rem 0.25rem; }
		.svc-icon { width: 2.5rem; height: 2.5rem; }
		.svc-arrow { width: 2.25rem; height: 2.25rem; }
		.svc-desc { display: none; }
	}
</style>
