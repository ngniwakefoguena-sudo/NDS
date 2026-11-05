<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const categories = [
		{ key: 'tous',      label: 'Tous' },
		{ key: 'fullstack', label: 'Fullstack' },
		{ key: 'mobile',    label: 'Mobile' },
		{ key: 'ai',        label: 'IA' },
		{ key: 'data',      label: 'Data' },
	];
	let active = $state('tous');

	const catColors: Record<string, { bg: string; border: string; text: string }> = {
		fullstack: { bg: 'rgba(152,200,22,0.10)', border: 'rgba(152,200,22,0.22)', text: '#8cba12' },
		mobile:    { bg: 'rgba(6,182,212,0.10)',  border: 'rgba(6,182,212,0.22)',  text: '#0891b2' },
		ai:        { bg: 'rgba(168,85,247,0.10)', border: 'rgba(168,85,247,0.22)', text: '#9333ea' },
		data:      { bg: 'rgba(16,185,129,0.10)', border: 'rgba(16,185,129,0.22)', text: '#059669' },
	};

	const filtered = $derived(
		active === 'tous' ? data.projects : data.projects.filter(p => p.category === active)
	);
</script>

<svelte:head><title>Réalisations | Norbert Digital Service</title></svelte:head>

<div class="relative min-h-screen pt-32 pb-24 overflow-hidden">
	<div class="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style="background: radial-gradient(circle, rgba(152,200,22,0.15) 0%, transparent 65%);"></div>
	<div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(rgba(152,200,22,0.07) 1px, transparent 1px); background-size: 36px 36px;"></div>

	<div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">

		<div class="text-center mb-14">
			<div class="badge-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit mb-6">
				<span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
				<span class="text-[11px] font-semibold text-accent tracking-widest uppercase">Portfolio</span>
			</div>
			<h1 class="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-5">
				Quelques <span class="bg-clip-text text-transparent" style="background-image: linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)));">Réalisations</span>
			</h1>
			<p class="text-base text-muted max-w-xl mx-auto leading-relaxed">
				Des projets concrets, livrés pour de vraies entreprises, de la startup au grand compte.
			</p>
		</div>

		<!-- Filter tabs -->
		<div class="flex items-center justify-center gap-2 mb-12 flex-wrap">
			{#each categories as cat}
				<button
					onclick={() => (active = cat.key)}
					class="px-5 py-2 rounded-full text-sm font-semibold transition-all"
					class:active-tab={active === cat.key}
					class:ghost-tab={active !== cat.key}
				>{cat.label}</button>
			{/each}
		</div>

		<!-- Grid -->
		{#if filtered.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{#each filtered as project}
					{@const c = catColors[project.category] ?? { bg: 'rgba(100,100,100,0.10)', border: 'rgba(100,100,100,0.22)', text: '#666' }}
					<a href="/projects/{project.slug}" class="project-card group rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1">
						<!-- Image -->
						<div class="w-full h-44 overflow-hidden flex-shrink-0">
							{#if project.cover}
								<img
									src={project.cover}
									alt={project.title}
									loading="lazy"
									decoding="async"
									width="600"
									height="400"
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							{:else}
								<div class="w-full h-full flex items-center justify-center" style="background: rgba(152,200,22,0.06);">
									<span class="text-5xl opacity-25">🖥</span>
								</div>
							{/if}
						</div>

						<div class="p-6 flex flex-col gap-4 flex-1">
							<div class="flex items-start justify-between gap-3">
								<span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide flex-shrink-0" style="background: {c.bg}; border: 1px solid {c.border}; color: {c.text};">{project.category}</span>
								<span class="text-xs text-muted">{project.year}</span>
							</div>
							<div class="flex-1">
								<h3 class="text-sm font-bold text-ink mb-1.5 leading-snug">{project.title}</h3>
								<p class="text-sm text-muted leading-relaxed">{project.tagline_fr}</p>
							</div>
							{#if project.role_fr}
								<p class="text-[11px] text-muted italic">{project.role_fr}</p>
							{/if}
							<div class="flex flex-wrap gap-1.5">
								{#each project.stack as tech}
									<span class="tech-pill px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-muted">{tech}</span>
								{/each}
							</div>
							<div class="project-footer flex items-center justify-between pt-3">
								<span class="text-xs font-semibold text-accent">Voir le détail &rarr;</span>
								<div class="w-7 h-7 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
									style="background: rgba(152,200,22,0.12); border: 1px solid rgba(152,200,22,0.22);">
									<ArrowUpRight class="w-3.5 h-3.5 text-accent" />
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{:else}
			<div class="text-center py-20 text-muted text-sm">Aucun projet dans cette catégorie.</div>
		{/if}

		<div class="text-center mt-20">
			<p class="text-muted text-sm mb-5">Vous avez un projet similaire ?</p>
			<a href="/contact" class="btn-pill inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white text-sm">
				Discutons de votre projet
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
			</a>
		</div>
	</div>
</div>

<style>
	.badge-pill {
		background: var(--glass-bg);
		backdrop-filter: blur(12px);
		border: 1px solid var(--glass-border);
		box-shadow: 0 4px 14px rgba(80,110,20,0.09), inset 0 1px 0 rgba(255,255,255,1);
	}
	.active-tab {
		background: linear-gradient(150deg, rgb(175,220,25), rgb(152,200,22), rgb(112,160,8));
		color: white;
		box-shadow: 0 6px 20px rgba(120,175,10,0.38), 0 2px 6px rgba(120,175,10,0.18);
		border-top: 1px solid rgba(255,255,255,0.25);
	}
	.ghost-tab {
		background: var(--glass-bg);
		backdrop-filter: blur(12px);
		border: 1px solid var(--glass-border);
		color: rgb(var(--muted));
		box-shadow: 0 2px 8px rgba(80,110,20,0.06), inset 0 1px 0 rgba(255,255,255,0.8);
	}
	.ghost-tab:hover { color: rgb(var(--ink)); }
	.project-card {
		background: var(--glass-bg);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid var(--glass-border);
		box-shadow: 0 8px 32px rgba(80,110,20,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
	}
	.tech-pill {
		background: var(--glass-bg-md);
		border: 1px solid var(--glass-border-xs);
	}
	.project-footer { border-top: 1px solid var(--glass-border-xs); }
	.btn-pill {
		background: linear-gradient(150deg, rgb(175,220,25), rgb(152,200,22), rgb(112,160,8));
		box-shadow: 0 8px 28px rgba(120,175,10,0.42), 0 2px 8px rgba(120,175,10,0.18);
		border-top: 1px solid rgba(255,255,255,0.25);
		transition: opacity 0.2s, transform 0.2s;
	}
	.btn-pill:hover { opacity: 0.88; transform: translateY(-1px); }
</style>
