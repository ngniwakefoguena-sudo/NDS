<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { ArrowRight, BookOpen, CreditCard, Smartphone as WalletIcon, Handshake } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	let { data }: { data: PageData } = $props();

	let visible = $state(false);

	/* ── Partenaires ── */
	const partners = [
		{ name: 'ICS Innovations', logo: '/images/ics.png', bgColor: '' },
		{ name: 'Afrilife Insurance', logo: '/images/Afri_insurance.png', bgColor: '#E8551B' },
		{ name: 'Mahkong', logo: '/images/mahkong.avif', bgColor: '' },
		{ name: 'Puol', logo: '/images/puol.png', bgColor: '#000000' },
	];
	let partnersVisible = $state(false);

	onMount(() => {
		/* Agency observer */
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				visible = true;
				observer.disconnect();
			}
		});
		const el = document.getElementById('agency-section');
		if (el) observer.observe(el);

		/* Partners observer */
		const partnersObserver = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				partnersVisible = true;
				partnersObserver.disconnect();
			}
		});
		const pEl = document.getElementById('partners-section');
		if (pEl) partnersObserver.observe(pEl);

		return () => {
			observer.disconnect();
			partnersObserver.disconnect();
		};
	});
</script>

<Seo
	title="Agence web, mobile & IA à Paris"
	description="Norbert Digital Service crée sites web, applications mobiles et automatisations IA (n8n) pour les PME en France et en Afrique. Réponse sous 24h."
/>

<Hero />

<!-- ═══════════════════ Section Blog ═══════════════════ -->
<section class="relative py-14 md:py-20 overflow-hidden" style="background: rgb(var(--surface));">
	<div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px); background-size: 36px 36px;"></div>

	<div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
		<!-- En-tête centré + design -->
		<div class="flex flex-col items-center text-center mb-12 md:mb-14">
			<div class="badge-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-md w-fit mb-5">
				<span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
				<span class="text-[11px] font-semibold text-accent tracking-widest uppercase">Blog</span>
			</div>
			<h2 class="text-3xl md:text-4xl font-bold tracking-tight text-ink" style="font-family: 'Space Grotesk', sans-serif;">
				Nos derniers <span style="font-family: 'Kaushan Script', cursive; color: rgb(var(--accent)); font-size: 1.15em;">articles</span>
			</h2>
			<p class="text-sm text-muted mt-3 max-w-md leading-relaxed">
				Conseils pratiques, retours d'expérience et tendances du digital.
			</p>
			<a href="/blog" class="btn-blog mt-5 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded font-semibold text-xs">
				Voir tous les articles
				<ArrowRight class="w-3.5 h-3.5" />
			</a>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-5">
			{#each data.posts as post}
				<a href="/blog/{post.slug}" class="blog-card group rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1">
					<div class="w-full h-40 flex-shrink-0 overflow-hidden">
						{#if post.cover}
							<img src={post.cover} alt={post.title} loading="lazy" decoding="async" width="600" height="400" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
						{:else}
							<div class="w-full h-full flex items-center justify-center" style="background: rgba(152,200,22,0.07);">
								<BookOpen class="w-8 h-8 text-accent opacity-30" />
							</div>
						{/if}
					</div>

					<div class="p-5 flex flex-col gap-2.5 flex-1">
						{#if post.tags?.length}
							<div class="flex flex-wrap gap-1.5">
								{#each post.tags.slice(0,2) as tag}
									<span class="tag-pill px-2.5 py-0.5 rounded text-[10px] font-semibold">{tag}</span>
								{/each}
							</div>
						{/if}
						<h3 class="text-sm font-bold text-ink leading-snug flex-1">{post.title}</h3>
						<p class="text-xs text-muted leading-relaxed line-clamp-2">{post.summary}</p>
						<div class="flex items-center justify-between pt-3 card-footer">
							<span class="text-xs text-muted">{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
							<span class="text-xs font-semibold text-accent">Lire &rarr;</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════ Section Carte Fidélité (masquée temporairement — {#if false}) ═══════════════════ -->
{#if false}
<section class="relative py-12 md:py-16 overflow-hidden" style="background: rgb(var(--bg));">
	<div class="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
		<div class="fidelity-card rounded-lg overflow-hidden md:grid md:grid-cols-5 md:gap-0">
			<!-- Texte (3 cols) -->
			<div class="p-6 md:p-10 md:col-span-3 flex flex-col justify-center">
				<div class="inline-flex items-center gap-2 px-3 py-1 rounded w-fit mb-4" style="background: rgba(152,200,22,0.12); border: 1px solid rgba(152,200,22,0.25);">
					<CreditCard class="w-3.5 h-3.5" style="color: #98C816;" />
					<span class="text-[10px] font-bold tracking-widest uppercase" style="color: #98C816;">Nouveau service</span>
				</div>
				<h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight mb-3" style="font-family: 'Space Grotesk', sans-serif;">
					Cartes de fidélité <span style="font-family: 'Kaushan Script', cursive; color: #98C816; font-size: 1.1em;">digitales</span>
				</h2>
				<p class="text-sm leading-relaxed mb-5" style="color: rgba(255,255,255,0.65);">
					Fidélisez vos clients avec des cartes dématérialisées sur <strong style="color: rgba(255,255,255,0.85);">Apple Wallet</strong> et <strong style="color: rgba(255,255,255,0.85);">Google Wallet</strong>. Zéro app à installer, notifications push automatiques et tableau de bord en temps réel.
				</p>
				<div class="flex flex-wrap gap-3 items-center">
					<a href="http://app.norbertdigitalservice.fr" target="_blank" rel="noopener" class="fidelity-btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded font-semibold text-xs">
						Découvrir la plateforme
						<ArrowRight class="w-3.5 h-3.5" />
					</a>
					<a href="/contact" class="text-xs font-medium transition-colors" style="color: rgba(255,255,255,0.55);" onmouseenter={(e) => e.currentTarget.style.color = '#ffffff'} onmouseleave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
						En savoir plus →
					</a>
				</div>
			</div>
			<!-- Visuel (2 cols) -->
			<div class="hidden md:flex md:col-span-2 items-center justify-center p-8 relative">
				<div class="fidelity-visual w-full max-w-[200px] aspect-[3/4] rounded-lg flex flex-col items-center justify-center gap-3">
					<WalletIcon class="w-10 h-10" style="color: #98C816;" />
					<div class="text-center">
						<p class="text-xs font-bold text-white mb-0.5">Apple Wallet</p>
						<p class="text-xs font-bold text-white">Google Wallet</p>
					</div>
					<div class="flex gap-1.5 mt-2">
						<span class="w-2 h-2 rounded-full" style="background: #98C816;"></span>
						<span class="w-2 h-2 rounded-full" style="background: rgba(152,200,22,0.4);"></span>
						<span class="w-2 h-2 rounded-full" style="background: rgba(152,200,22,0.2);"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/if}

<!-- ═══════════════════ Section Agence ═══════════════════ -->
<section id="agency-section" class="agency-section relative py-16 md:py-24 overflow-hidden">
	<div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">

		<div class="text-center mb-12 md:mb-16">
			<h2 class="text-2xl md:text-4xl font-bold tracking-tight text-ink" style="font-family: 'Space Grotesk', sans-serif;">
				Avec <span class="agency-highlight">Norbert Digital Service</span>, vous allez :
			</h2>
		</div>

		<div class="grid grid-cols-4 gap-2 md:gap-8 pb-2 md:pb-0">
			<!-- Item 1: Web & Mobile -->
			<div class="agency-item flex flex-col items-center text-center gap-2 md:gap-5" class:animate-fade-up={visible} style="animation-delay: 0s; opacity: {visible ? 1 : 0};">
				<div class="agency-icon-wrap">
					<svg class="agency-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
				</div>
				<div>
					<h3 class="text-[9px] md:text-sm font-bold text-ink mb-1 md:mb-2 leading-tight">Concevoir vos solutions Web & Mobile</h3>
					<p class="hidden md:block text-xs text-muted leading-relaxed">Sites, apps et plateformes sur mesure, performants et optimisés SEO.</p>
				</div>
			</div>

			<!-- Item 2: IA -->
			<div class="agency-item flex flex-col items-center text-center gap-2 md:gap-5" class:animate-fade-up={visible} style="animation-delay: 0.15s; opacity: {visible ? 1 : 0};">
				<div class="agency-icon-wrap">
					<svg class="agency-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M16 14a4 4 0 0 1 4 4v2H4v-2a4 4 0 0 1 4-4"/><circle cx="9" cy="7" r="0.5" fill="currentColor"/><circle cx="15" cy="7" r="0.5" fill="currentColor"/><path d="M8 22h8"/><path d="M12 18v4"/></svg>
				</div>
				<div>
					<h3 class="text-[9px] md:text-sm font-bold text-ink mb-1 md:mb-2 leading-tight">Intégrer l'IA dans vos processus</h3>
					<p class="hidden md:block text-xs text-muted leading-relaxed">Chatbots métier, RAG, analyse de données et recommandation intelligente.</p>
				</div>
			</div>

			<!-- Item 3: Automatisation -->
			<div class="agency-item flex flex-col items-center text-center gap-2 md:gap-5" class:animate-fade-up={visible} style="animation-delay: 0.3s; opacity: {visible ? 1 : 0};">
				<div class="agency-icon-wrap">
					<svg class="agency-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
				</div>
				<div>
					<h3 class="text-[9px] md:text-sm font-bold text-ink mb-1 md:mb-2 leading-tight">Automatiser vos processus</h3>
					<p class="hidden md:block text-xs text-muted leading-relaxed">Workflows n8n, Python, CRM/ERP, synchronisation et rapports automatiques.</p>
				</div>
			</div>

			<!-- Item 4: Marketing & Leads -->
			<div class="agency-item flex flex-col items-center text-center gap-2 md:gap-5" class:animate-fade-up={visible} style="animation-delay: 0.45s; opacity: {visible ? 1 : 0};">
				<div class="agency-icon-wrap">
					<svg class="agency-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/><polyline points="18 4 22 8"/><polyline points="18 4 14 8"/></svg>
				</div>
				<div>
					<h3 class="text-[9px] md:text-sm font-bold text-ink mb-1 md:mb-2 leading-tight">Booster votre croissance</h3>
					<p class="hidden md:block text-xs text-muted leading-relaxed">SEO/GEO, campagnes Ads, génération de leads B2B/B2C et tunnels de conversion.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════ Section Partenaires ═══════════════════ -->
<section id="partners-section" class="partners-section relative py-16 md:py-20 overflow-hidden" style="background: rgb(var(--surface));">
	<div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(rgba(0,0,0,0.02) 1px, transparent 1px); background-size: 32px 32px;"></div>

	<div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
		<!-- En-tête -->
		<div class="flex items-center justify-center gap-3 mb-4 md:mb-6" style="opacity: {partnersVisible ? 1 : 0}; transform: translateY({partnersVisible ? '0' : '20px'}); transition: opacity 0.6s ease, transform 0.6s ease;">
			<div class="partner-header-icon">
				<Handshake class="w-5 h-5" style="color: rgb(var(--ink)); opacity: 0.7;" />
			</div>
			<h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink uppercase" style="font-family: 'Space Grotesk', sans-serif; letter-spacing: 0.06em;">
				Nos Partenaires
			</h2>
		</div>
	</div>

	<!-- Deniscoflash branding -->
	<div class="deniscoflash-wrap" style="opacity: {partnersVisible ? 1 : 0}; transform: translateY({partnersVisible ? '0' : '12px'}); transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;">
		<span class="deniscoflash-text">
			<span class="deniscoflash-denis">Denis</span><span class="deniscoflash-co">coflash</span>
		</span>
	</div>

	<!-- Marquee infini -->
	<div class="partners-marquee" role="marquee" aria-label="Nos partenaires">
		<div class="partners-marquee-track">
			<!-- Set 1 -->
			{#each partners as partner}
				<div class="partner-item">
					<div
						class="partner-circle"
						style={partner.bgColor ? `background: ${partner.bgColor};` : ''}
					>
						<img src={partner.logo} alt={partner.name} loading="lazy" decoding="async" class="partner-logo" />
					</div>
					<span class="partner-name">{partner.name}</span>
				</div>
			{/each}
			<!-- Set 2 (duplicate for seamless loop) -->
			{#each partners as partner}
				<div class="partner-item" aria-hidden="true">
					<div
						class="partner-circle"
						style={partner.bgColor ? `background: ${partner.bgColor};` : ''}
					>
						<img src={partner.logo} alt="" loading="lazy" decoding="async" class="partner-logo" />
					</div>
					<span class="partner-name">{partner.name}</span>
				</div>
			{/each}
			<!-- Set 3 (extra duplicate for wide screens) -->
			{#each partners as partner}
				<div class="partner-item" aria-hidden="true">
					<div
						class="partner-circle"
						style={partner.bgColor ? `background: ${partner.bgColor};` : ''}
					>
						<img src={partner.logo} alt="" loading="lazy" decoding="async" class="partner-logo" />
					</div>
					<span class="partner-name">{partner.name}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* ── Agency Section ── */
	.agency-section {
		background: rgb(var(--bg));
	}
	.agency-highlight {
		font-family: 'Kaushan Script', cursive;
		color: rgb(var(--accent));
		font-size: 1.1em;
	}
	
	.agency-icon-wrap {
		width: 52px;
		height: 52px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(var(--accent), 0.1);
		border: 2px solid rgba(var(--accent), 0.2);
		transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
		box-shadow: 0 4px 14px rgba(var(--accent), 0.15);
		margin: 0 auto;
	}
	@media (min-width: 768px) {
		.agency-icon-wrap {
			width: 72px;
			height: 72px;
		}
	}
	.agency-item:hover .agency-icon-wrap {
		background: rgba(var(--accent), 0.15);
		transform: scale(1.08) translateY(-4px);
		box-shadow: 0 8px 24px rgba(var(--accent), 0.25);
	}
	.agency-icon {
		width: 24px;
		height: 24px;
		color: rgb(var(--accent));
	}
	@media (min-width: 768px) {
		.agency-icon {
			width: 32px;
			height: 32px;
		}
	}

	/* Animations */
	.animate-fade-up {
		animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}
	@keyframes fadeUp {
		from { opacity: 0; transform: translateY(40px) scale(0.95); }
		to { opacity: 1; transform: translateY(0) scale(1); }
	}
	@media (prefers-reduced-motion: reduce) {
		.animate-fade-up { animation: none; opacity: 1 !important; transform: none; }
	}

	/* Scrollbar hiding for mobile row */
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	/* ── Shared ── */
	.badge-pill {
		background: var(--glass-bg);
		backdrop-filter: blur(12px);
		border: 1px solid var(--glass-border);
		box-shadow: 0 4px 14px rgba(80,110,20,0.09), inset 0 1px 0 rgba(255,255,255,1);
	}
	.btn-blog {
		background: linear-gradient(135deg, #98C816, #70A008);
		color: white;
		letter-spacing: 0.04em;
		box-shadow: 0 6px 20px rgba(120,175,10,0.35);
		transition: opacity 0.2s, transform 0.2s;
		border-top: 1px solid rgba(255,255,255,0.15);
	}
	.btn-blog:hover { opacity: 0.9; transform: translateY(-1px); }
	.card-footer { border-top: 1px solid rgba(0, 0, 0, 0.06); }

	/* ── Blog cards ── */
	.blog-card {
		background: rgb(var(--surface));
		border: 1px solid rgba(0, 0, 0, 0.06);
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
	}
	.tag-pill {
		background: rgba(152,200,22,0.10);
		border: 1px solid rgba(152,200,22,0.18);
		color: #8cba12;
	}

	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* ── Carte fidélité ── */
	.fidelity-card {
		background: linear-gradient(135deg, #1a1f16 0%, #2a3320 50%, #1e2518 100%);
		border: 1px solid rgba(152,200,22,0.15);
		box-shadow: 0 16px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04);
	}
	.fidelity-btn {
		background: linear-gradient(135deg, #98C816, #70A008);
		color: white;
		letter-spacing: 0.04em;
		box-shadow: 0 6px 20px rgba(120,175,10,0.4);
		transition: opacity 0.2s, transform 0.2s;
		border-top: 1px solid rgba(255,255,255,0.15);
	}
	.fidelity-btn:hover { opacity: 0.9; transform: translateY(-1px); }
	.fidelity-visual {
		background: rgba(152,200,22,0.06);
		border: 1px solid rgba(152,200,22,0.15);
		box-shadow: 0 8px 32px rgba(0,0,0,0.3);
	}

	/* ── Partners Section ── */
	.partners-section {
		background: rgb(var(--surface));
	}

	.partner-header-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 8px;
		background: rgba(var(--ink), 0.05);
		border: 1px solid rgba(var(--ink), 0.08);
	}

	/* ── Deniscoflash branding ── */
	.deniscoflash-wrap {
		text-align: center;
		margin-bottom: 0.75rem;
	}
	.deniscoflash-text {
		font-family: 'Tangerine', cursive;
		font-weight: 700;
		font-size: clamp(1.6rem, 4.5vw, 2.6rem);
		letter-spacing: -0.03em;
		line-height: 1;
	}
	@media (min-width: 768px) {
		.deniscoflash-text {
			font-size: clamp(1.8rem, 3.5vw, 2.6rem);
		}
	}
	.deniscoflash-denis {
		color: #19100a;
	}
	.deniscoflash-co {
		color: rgb(232, 93, 4);
	}
	:global([data-theme='dark']) .deniscoflash-denis {
		color: rgba(255, 255, 255, 0.9);
	}
	:global([data-theme='dark']) .deniscoflash-co {
		color: #E8751F;
	}

	/* ── Marquee infini ── */
	.partners-marquee {
		overflow: hidden;
		width: 100%;
		-webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
		mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
		padding: 12px 0 8px;
	}

	.partners-marquee-track {
		display: flex;
		align-items: center;
		width: max-content;
		animation: marqueeScroll 18s linear infinite;
	}

	@keyframes marqueeScroll {
		0%   { transform: translateX(0); }
		100% { transform: translateX(calc(-100% / 3)); }
	}

	/* Pause on hover */
	.partners-marquee:hover .partners-marquee-track {
		animation-play-state: paused;
	}

	@media (prefers-reduced-motion: reduce) {
		.partners-marquee-track {
			animation: none;
		}
	}

	.partner-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		flex-shrink: 0;
		/* Espacement uniforme porté par chaque item (y compris le dernier)
		   pour que chaque set fasse exactement 1/3 de la piste → boucle sans saut */
		margin-right: 56px;
	}

	.partner-circle {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background: rgb(var(--surface-2));
		border: 2px solid rgba(var(--line), 0.06);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	@media (min-width: 768px) {
		.partner-circle {
			width: 120px;
			height: 120px;
		}
		.partner-item {
			margin-right: 72px;
		}
	}

	.partner-circle:hover {
		transform: scale(1.08);
		box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5);
	}

	.partner-logo {
		max-width: 65%;
		max-height: 65%;
		width: auto;
		height: auto;
		object-fit: contain;
	}

	.partner-name {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 11px;
		font-weight: 600;
		color: rgb(var(--muted));
		letter-spacing: 0.02em;
		text-align: center;
		white-space: nowrap;
	}

	/* ── Dark mode ── */
	/* Rond clair (blanc cassé) en mode sombre pour faire ressortir les logos */
	:global([data-theme='dark']) .partner-circle {
		background: rgba(255, 255, 255, 0.95);
		border-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
	}
	:global([data-theme='dark']) .partner-circle:hover {
		box-shadow: 0 8px 28px rgba(0, 0, 0, 0.5);
	}
</style>

