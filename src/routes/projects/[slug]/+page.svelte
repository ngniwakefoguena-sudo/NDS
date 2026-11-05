<script lang="ts">
	import { ArrowLeft, ExternalLink, Calendar, User } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const catColors: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
		fullstack: { bg: 'rgba(140,186,18,0.12)', border: 'rgba(140,186,18,0.25)', text: '#8cba12', gradient: 'linear-gradient(135deg, #8cba12, #a5d610)' },
		mobile:    { bg: 'rgba(8,145,178,0.12)',  border: 'rgba(8,145,178,0.25)',  text: '#0891b2', gradient: 'linear-gradient(135deg, #0891b2, #22d3ee)' },
		ai:        { bg: 'rgba(147,51,234,0.12)', border: 'rgba(147,51,234,0.25)', text: '#9333ea', gradient: 'linear-gradient(135deg, #9333ea, #c084fc)' },
		cat_data:  { bg: 'rgba(5,150,105,0.12)',  border: 'rgba(5,150,105,0.25)',  text: '#059669', gradient: 'linear-gradient(135deg, #059669, #34d399)' },
	};
	const c = $derived(catColors[data.project.category] ?? catColors['cat_data'] ?? { bg: 'rgba(100,100,100,0.10)', border: 'rgba(100,100,100,0.22)', text: '#666', gradient: 'linear-gradient(135deg, #666, #999)' });
</script>

<svelte:head>
	<title>{data.project.title} | Norbert Digital Service</title>
	<meta name="description" content={data.project.tagline_fr} />
</svelte:head>

<!-- ───── HERO BANNER ───── -->
<section class="hero-banner">
	{#if data.project.cover}
		<img
			src={data.project.cover}
			alt={data.project.title}
			loading="eager"
			decoding="async"
			class="hero-img"
		/>
	{/if}
	<div class="hero-overlay"></div>

	<!-- Back button floating top-left -->
	<a href="/projects" class="hero-back">
		<ArrowLeft class="w-4 h-4" />
		<span>Retour</span>
	</a>

	<!-- Title overlay at bottom -->
	<div class="hero-content">
		<div class="hero-inner">
			<span
				class="hero-badge"
				style="background: {c.gradient};"
			>
				{data.project.category}
			</span>
			<h1 class="hero-title">{data.project.title}</h1>
			{#if data.project.tagline_fr}
				<p class="hero-tagline">{data.project.tagline_fr}</p>
			{/if}
			<div class="hero-meta">
				<span class="hero-meta-item">
					<Calendar class="w-4 h-4" />
					{data.project.year}
				</span>
			</div>
		</div>
	</div>
</section>

<!-- ───── MAIN CONTENT ───── -->
<div class="page-body">
	<div class="content-grid">

		<!-- ── Main Column ── -->
		<div class="main-col">

			<!-- Description Card -->
			{#if data.project.description_fr}
				<div class="card fade-up">
					<div class="card-header">
						<div class="card-icon" style="color: {c.text};">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
						</div>
						<h2 class="card-title">À propos du projet</h2>
					</div>
					<p class="card-text">{data.project.description_fr}</p>
				</div>
			{/if}

			<!-- Stack Card -->
			{#if data.project.stack?.length}
				<div class="card fade-up" style="animation-delay: 0.1s;">
					<div class="card-header">
						<div class="card-icon" style="color: {c.text};">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
						</div>
						<h2 class="card-title">Stack technique</h2>
					</div>
					<div class="stack-grid">
						{#each data.project.stack as tech}
							<span class="stack-pill" style="border-color: {c.border}; color: {c.text}; background: {c.bg};">
								{tech}
							</span>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Tags -->
			{#if data.project.tags?.length}
				<div class="card fade-up" style="animation-delay: 0.2s;">
					<div class="card-header">
						<div class="card-icon" style="color: {c.text};">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
						</div>
						<h2 class="card-title">Tags</h2>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each data.project.tags as tag}
							<span class="tag-pill">{tag}</span>
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<!-- ── Sidebar ── -->
		<aside class="sidebar-col">

			<!-- Role Card -->
			{#if data.project.role_fr}
				<div class="card sidebar-card fade-up" style="animation-delay: 0.15s;">
					<div class="card-header">
						<User class="w-4 h-4" style="color: {c.text};" />
						<h2 class="card-title">Rôle</h2>
					</div>
					<p class="card-text">{data.project.role_fr}</p>
				</div>
			{/if}

			<!-- Links Card -->
			{#if data.project.url || data.project.link_github}
				<div class="card sidebar-card fade-up" style="animation-delay: 0.2s;">
					<div class="card-header">
						<ExternalLink class="w-4 h-4" style="color: {c.text};" />
						<h2 class="card-title">Liens</h2>
					</div>
					<div class="links-stack">
						{#if data.project.url}
							<a
								href={data.project.url}
								target="_blank"
								rel="noopener"
								class="link-btn-primary"
								style="background: {c.gradient};"
							>
								<ExternalLink class="w-4 h-4" />
								Voir le projet
							</a>
						{/if}
						<!-- GitHub link hidden
						{#if data.project.link_github}
							<a href={data.project.link_github} target="_blank" rel="noopener" class="link-btn-ghost">
								<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
								Code source
							</a>
						{/if}
						-->
					</div>
				</div>
			{/if}

			<!-- CTA Sidebar Card -->
			<div class="cta-sidebar-card fade-up" style="animation-delay: 0.25s;">
				<div class="cta-sidebar-icon" style="background: {c.bg}; color: {c.text};">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
				</div>
				<p class="cta-sidebar-text">Un projet similaire à réaliser ?</p>
				<a
					href="/contact"
					class="cta-sidebar-btn"
					style="background: {c.gradient};"
				>
					Discuter de votre projet
				</a>
			</div>
		</aside>
	</div>

	<!-- ───── BOTTOM CTA ───── -->
	<section class="cta-bottom fade-up" style="animation-delay: 0.3s;">
		<div class="cta-bottom-inner">
			<h2 class="cta-bottom-title">Envie de créer quelque chose d'exceptionnel ?</h2>
			<p class="cta-bottom-text">
				Chaque projet est une opportunité de repousser les limites. Parlons de vos ambitions.
			</p>
			<div class="cta-bottom-actions">
				<a href="/contact" class="cta-bottom-btn" style="background: {c.gradient};">
					Démarrer un projet
				</a>
				<a href="/projects" class="cta-bottom-link">
					<ArrowLeft class="w-4 h-4" />
					Voir d'autres projets
				</a>
			</div>
		</div>
	</section>
</div>

<style>
	/* ───── HERO BANNER ───── */
	.hero-banner {
		position: relative;
		width: 100%;
		height: 20rem;
		overflow: hidden;
		background: rgb(var(--ink));
	}
	@media (min-width: 768px) {
		.hero-banner { height: 24rem; }
	}

	.hero-img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.7;
		transition: transform 0.6s ease;
	}
	.hero-banner:hover .hero-img {
		transform: scale(1.03);
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.75) 0%,
			rgba(0, 0, 0, 0.35) 40%,
			rgba(0, 0, 0, 0.15) 100%
		);
		z-index: 1;
	}

	.hero-back {
		position: absolute;
		top: 7rem;
		left: 1.25rem;
		z-index: 10;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: #fff;
		font-size: 0.8125rem;
		font-weight: 500;
		text-decoration: none;
		transition: background 0.25s, transform 0.25s;
	}
	.hero-back:hover {
		background: rgba(255, 255, 255, 0.28);
		transform: translateX(-2px);
	}

	.hero-content {
		position: absolute;
		inset: 0;
		z-index: 2;
		display: flex;
		align-items: flex-end;
		padding: 2rem 1.5rem;
	}
	@media (min-width: 768px) {
		.hero-content { padding: 2.5rem 3rem; }
	}

	.hero-inner {
		max-width: 72rem;
		width: 100%;
		margin: 0 auto;
	}

	.hero-badge {
		display: inline-block;
		padding: 0.3rem 0.85rem;
		border-radius: 9999px;
		font-size: 0.6875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #fff;
		margin-bottom: 0.75rem;
	}

	.hero-title {
		font-size: 1.75rem;
		font-weight: 800;
		color: #fff;
		line-height: 1.2;
		letter-spacing: -0.02em;
		margin: 0 0 0.5rem;
		font-family: 'Space Grotesk', system-ui, sans-serif;
	}
	@media (min-width: 768px) {
		.hero-title { font-size: 2.5rem; }
	}

	.hero-tagline {
		font-size: 0.9375rem;
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.6;
		margin: 0 0 0.75rem;
		max-width: 40rem;
	}

	.hero-meta {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.hero-meta-item {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		font-size: 0.8125rem;
		color: rgba(255, 255, 255, 0.65);
	}

	/* ───── PAGE BODY ───── */
	.page-body {
		background: rgb(var(--bg));
		padding: 2.5rem 1.25rem 4rem;
	}
	@media (min-width: 768px) {
		.page-body { padding: 3rem 2rem 5rem; }
	}

	.content-grid {
		max-width: 72rem;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}
	@media (min-width: 768px) {
		.content-grid {
			grid-template-columns: 2fr 1fr;
			gap: 2.5rem;
		}
	}

	.main-col {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.sidebar-col {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	/* ───── CARDS ───── */
	.card {
		background: rgb(var(--surface));
		border: 1px solid rgba(0, 0, 0, 0.06);
		border-radius: 1rem;
		padding: 1.75rem;
		transition: box-shadow 0.3s ease, transform 0.3s ease;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
	}
	.card:hover {
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);
		transform: translateY(-2px);
	}

	.sidebar-card {
		padding: 1.5rem;
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		margin-bottom: 1rem;
	}

	.card-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.card-title {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: rgb(var(--ink));
		margin: 0;
	}

	.card-text {
		font-size: 0.9375rem;
		color: rgb(var(--muted));
		line-height: 1.75;
		margin: 0;
	}

	/* ───── STACK PILLS ───── */
	.stack-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.stack-pill {
		display: inline-flex;
		align-items: center;
		padding: 0.375rem 0.875rem;
		border-radius: 9999px;
		font-size: 0.8125rem;
		font-weight: 600;
		border: 1px solid;
		transition: transform 0.2s, box-shadow 0.2s;
	}
	.stack-pill:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	}

	/* ───── TAG PILLS ───── */
	.tag-pill {
		display: inline-flex;
		align-items: center;
		padding: 0.3rem 0.75rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		font-weight: 500;
		background: rgba(0, 0, 0, 0.04);
		border: 1px solid rgba(0, 0, 0, 0.08);
		color: rgb(var(--muted));
		transition: background 0.2s;
	}
	.tag-pill:hover {
		background: rgba(0, 0, 0, 0.08);
	}

	/* ───── LINKS ───── */
	.links-stack {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.link-btn-primary {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.75rem 1.25rem;
		border-radius: 0.75rem;
		font-size: 0.875rem;
		font-weight: 600;
		color: #fff;
		text-decoration: none;
		transition: opacity 0.25s, transform 0.25s, box-shadow 0.25s;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
	}
	.link-btn-primary:hover {
		opacity: 0.9;
		transform: translateY(-1px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	}

	/* ───── CTA SIDEBAR ───── */
	.cta-sidebar-card {
		background: rgb(var(--surface));
		border: 1px solid rgba(0, 0, 0, 0.06);
		border-radius: 1rem;
		padding: 1.75rem;
		text-align: center;
		transition: box-shadow 0.3s, transform 0.3s;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
	}
	.cta-sidebar-card:hover {
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);
		transform: translateY(-2px);
	}
	.cta-sidebar-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 3rem;
		border-radius: 0.75rem;
		margin-bottom: 1rem;
	}
	.cta-sidebar-text {
		font-size: 0.875rem;
		color: rgb(var(--muted));
		line-height: 1.5;
		margin: 0 0 1.25rem;
	}
	.cta-sidebar-btn {
		display: block;
		padding: 0.75rem 1.25rem;
		border-radius: 0.75rem;
		font-size: 0.875rem;
		font-weight: 600;
		color: #fff;
		text-decoration: none;
		transition: opacity 0.25s, transform 0.25s, box-shadow 0.25s;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
	}
	.cta-sidebar-btn:hover {
		opacity: 0.9;
		transform: translateY(-1px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	}

	/* ───── BOTTOM CTA ───── */
	.cta-bottom {
		max-width: 72rem;
		margin: 3rem auto 0;
		padding: 0;
	}
	.cta-bottom-inner {
		background: rgb(var(--surface));
		border: 1px solid rgba(0, 0, 0, 0.06);
		border-radius: 1.25rem;
		padding: 3rem 2rem;
		text-align: center;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
	}
	.cta-bottom-title {
		font-size: 1.5rem;
		font-weight: 800;
		color: rgb(var(--ink));
		margin: 0 0 0.75rem;
		letter-spacing: -0.02em;
		font-family: 'Space Grotesk', system-ui, sans-serif;
	}
	@media (min-width: 768px) {
		.cta-bottom-title { font-size: 1.75rem; }
	}
	.cta-bottom-text {
		font-size: 0.9375rem;
		color: rgb(var(--muted));
		line-height: 1.7;
		max-width: 30rem;
		margin: 0 auto 2rem;
	}
	.cta-bottom-actions {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	@media (min-width: 480px) {
		.cta-bottom-actions {
			flex-direction: row;
			justify-content: center;
		}
	}
	.cta-bottom-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.8rem 2rem;
		border-radius: 0.75rem;
		font-size: 0.9375rem;
		font-weight: 700;
		color: #fff;
		text-decoration: none;
		transition: opacity 0.25s, transform 0.25s, box-shadow 0.25s;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
	}
	.cta-bottom-btn:hover {
		opacity: 0.9;
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
	}
	.cta-bottom-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.8rem 1.5rem;
		border-radius: 0.75rem;
		font-size: 0.875rem;
		font-weight: 600;
		color: rgb(var(--muted));
		text-decoration: none;
		border: 1px solid rgba(0, 0, 0, 0.08);
		transition: color 0.25s, border-color 0.25s, transform 0.25s;
	}
	.cta-bottom-link:hover {
		color: rgb(var(--ink));
		border-color: rgba(0, 0, 0, 0.18);
		transform: translateX(-3px);
	}

	/* ───── FADE-UP ANIMATION ───── */
	.fade-up {
		animation: fadeUp 0.6s ease both;
	}
	@keyframes fadeUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.fade-up { animation: none; opacity: 1; transform: none; }
	}
</style>
