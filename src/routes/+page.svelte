<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ServiceBento from '$lib/components/ServiceBento.svelte';
	import { ArrowRight, Check } from 'lucide-svelte';
	import { servicePages } from '$lib/data/services';
	import { reveal } from '$lib/actions/motion';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	/* Les 6 offres principales en mosaïque ; une tuile mène à tous les services */
	const main = servicePages.slice(0, 6);

	const partners = [
		{ name: 'ICS Innovations', logo: '/images/ics.webp', bgColor: '' },
		{ name: 'Afrilife Insurance', logo: '/images/Afri_insurance.webp', bgColor: '#E8551B' },
		{ name: 'Mahkong', logo: '/images/mahkong.avif', bgColor: '' },
		{ name: 'Puol', logo: '/images/puol.webp', bgColor: '#000000' }
	];

</script>

<Seo
	title="Agence web Paris & Île-de-France : site internet, app, IA"
	description="Agence web et consultant digital à Palaiseau (Essonne), Paris et Yvelines : création de site internet, application mobile, chatbot IA, automatisation n8n et SEO pour TPE et PME. Devis gratuit sous 24h."
/>

<Hero />

<!-- ═════════ Services en mosaïque ═════════ -->
<ServiceBento items={main} />

<!-- ═════════ Produit : Vendia ═════════ -->
<section class="vendia" aria-labelledby="vendia-title">
	<div class="wrap vendia-grid">
		<div use:reveal>
			<span class="v-badge"><span class="v-dot"></span> Notre produit · Nouveau</span>
			<h2 id="vendia-title" class="h2">Vendia, l’agent commercial intelligent sur WhatsApp</h2>
			<p class="sub">Il accueille vos clients, calcule un devis exact, encaisse par Mobile Money ou carte et envoie le contrat en PDF. Automatiquement, 24h/24, pour tous les secteurs : assurance, microfinance, santé, écoles, commerce…</p>
			<ul class="v-points">
				<li><Check class="w-4 h-4" /> Réponse immédiate, jour et nuit</li>
				<li><Check class="w-4 h-4" /> Prix issus de vos barèmes officiels</li>
				<li><Check class="w-4 h-4" /> Tableau de bord en temps réel</li>
			</ul>
			<div class="v-ctas">
				<a href="/vendia" class="btn-lime">Découvrir Vendia <ArrowRight class="w-4 h-4" /></a>
				<a href="/vendia#demo" class="btn-line">Demander une démo</a>
			</div>
		</div>
		<a href="/vendia" class="v-shot" use:reveal={{ delay: 120 }} aria-label="Découvrir Vendia">
			<img src="/images/vendia/vendia-contrat-reprise.webp" alt="Vendia : conversation WhatsApp avec paiement mobile et tableau de suivi des contrats" width="1376" height="768" loading="lazy" decoding="async" />
		</a>
	</div>
</section>

<!-- ═════════ Réalisations ═════════ -->
{#if data.featured.length}
	<section class="sec mist" aria-labelledby="work-title">
		<div class="wrap">
			<header class="sec-head split" use:reveal>
				<h2 id="work-title" class="h2">Quelques réalisations</h2>
				<a href="/projects" class="link">Toutes les réalisations <ArrowRight class="w-4 h-4" /></a>
			</header>
			<div class="work" use:reveal={{ stagger: 100 }}>
				{#each data.featured as p (p.slug)}
					<a href="/projects/{p.slug}" class="work-card" data-reveal-item>
						<div class="work-img">
							{#if p.cover}<img src={p.cover} alt={p.title} loading="lazy" decoding="async" width="640" height="420" />{/if}
						</div>
						<h3 class="work-title">{p.title}</h3>
						<p class="work-desc">{p.tagline_fr}</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- ═════════ Partenaires ═════════ -->
<section class="sec partners" aria-labelledby="partners-title">
	<div class="wrap">
		<header class="sec-head center" use:reveal>
			<h2 id="partners-title" class="h2">Ils nous font confiance</h2>
			<p class="denisco" aria-label="Deniscoflash"><span class="d1">Denis</span><span class="d2">coflash</span></p>
		</header>
	</div>
	<div class="marquee">
		<div class="track">
			{#each [0, 1, 2] as copy}
				{#each partners as partner}
					<div class="partner" aria-hidden={copy > 0}>
						<div class="partner-logo" style={partner.bgColor ? `background:${partner.bgColor}` : ''}>
							<img src={partner.logo} alt={copy > 0 ? '' : partner.name} loading="lazy" decoding="async" />
						</div>
						<span class="partner-name">{partner.name}</span>
					</div>
				{/each}
			{/each}
		</div>
	</div>
</section>

<!-- ═════════ Appel à l'action ═════════ -->
<section class="cta" aria-labelledby="cta-title">
	<div class="wrap cta-inner" use:reveal>
		<h2 id="cta-title" class="cta-title">Un projet en tête ? Parlons-en.</h2>
		<p class="cta-text">Décrivez votre besoin en quelques lignes. Vous recevez une réponse sous 24h avec une première proposition.</p>
		<div class="cta-btns">
			<a href="/contact" class="btn-lime">Demander un devis <ArrowRight class="w-4 h-4" /></a>
			<a href="https://wa.me/33659173774" target="_blank" rel="noopener" class="btn-line">Écrire sur WhatsApp</a>
		</div>
	</div>
</section>

<style>
	.wrap { max-width: 80rem; margin: 0 auto; padding: 0 1.25rem; }
	@media (min-width: 768px) { .wrap { padding: 0 2rem; } }


	/* Vendia */
	.vendia { background: rgb(var(--mist)); padding: 4.5rem 0; overflow: hidden; }
	.vendia-grid { display: grid; gap: 2.5rem; align-items: center; }
	@media (min-width: 1024px) { .vendia-grid { grid-template-columns: 0.9fr 1.1fr; gap: 3.5rem; } }
	.v-badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.9rem; border-radius: 999px; background: rgb(var(--bg)); border: 1px solid rgb(var(--accent) / 0.45); font-size: 0.8rem; font-weight: 600; color: rgb(var(--ink)); margin-bottom: 1.1rem; }
	.v-dot { width: 0.5rem; height: 0.5rem; border-radius: 50%; background: rgb(var(--accent)); box-shadow: 0 0 0 4px rgb(var(--accent) / 0.25); }
	.v-points { list-style: none; padding: 0; margin: 1.3rem 0 0; display: grid; gap: 0.55rem; font-size: 0.95rem; color: rgb(var(--ink)); }
	.v-points li { display: flex; align-items: center; gap: 0.5rem; }
	.v-points :global(svg) { color: rgb(var(--accent-2)); }
	.v-ctas { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.8rem; }
	.v-shot { display: block; border-radius: 1.4rem; overflow: hidden; box-shadow: 0 30px 70px rgba(40, 70, 10, 0.18); border: 1px solid rgb(var(--line) / 0.08); transition: transform 0.35s; }
	.v-shot:hover { transform: translateY(-4px); }
	.v-shot img { display: block; width: 100%; height: auto; }

	.sec { padding: 4rem 0; background: rgb(var(--bg)); }
	.sec.mist { background: rgb(var(--mist)); }
	@media (max-width: 767px) { .sec { padding: 3rem 0; } }

	.sec-head { margin-bottom: 2rem; max-width: 46rem; }
	.sec-head.split {
		max-width: none;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem 3rem;
	}
	.sec-head.split .sub { max-width: 30rem; }
	.sec-head.center { text-align: center; margin-left: auto; margin-right: auto; margin-bottom: 2rem; }
	.h2 {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.5rem, 2.8vw, 2.1rem);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.1;
		color: rgb(var(--ink));
		margin: 0;
	}
	.sub { color: rgb(var(--muted)); line-height: 1.6; margin: 0.6rem 0 0; font-size: 0.95rem; }
	.sec-head.split .sub { margin: 0; }
	.link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-weight: 600;
		color: rgb(var(--ink));
		border-bottom: 2px solid rgb(var(--accent));
		padding-bottom: 2px;
	}
	.link :global(svg) { transition: transform 0.2s; }
	.link:hover :global(svg) { transform: translateX(3px); }

	/* ── Exemple concret ── */
	.journey { background: rgb(var(--night)); color: #fff; padding: 4.5rem 0; position: relative; overflow: hidden; }
	.journey::before {
		content: '';
		position: absolute;
		width: 700px;
		height: 700px;
		right: -200px;
		top: -150px;
		background: radial-gradient(circle, rgba(152, 200, 22, 0.18), transparent 62%);
	}
	.journey-grid { position: relative; display: grid; gap: 3rem; align-items: center; }
	@media (min-width: 1024px) { .journey-grid { grid-template-columns: 1fr 1fr; gap: 4rem; } }
	.h2.light { color: #fff; }
	.sub.light { color: rgba(255, 255, 255, 0.7); margin-bottom: 1.75rem; max-width: 32rem; }
	.link.light { color: #fff; }
	@media (max-width: 767px) { .journey { padding: 4rem 0; } }

	/* ── Méthode ── */
	.process {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 2rem;
		counter-reset: none;
	}
	@media (min-width: 640px) { .process { grid-template-columns: repeat(2, 1fr); gap: 2.25rem 2.5rem; } }
	@media (min-width: 1100px) { .process { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; } }
	.p-step { position: relative; padding-top: 3.25rem; }
	.p-step::before {
		content: '';
		position: absolute;
		top: 1.15rem;
		left: 2.5rem;
		right: -1.5rem;
		height: 2px;
		background: rgb(var(--accent) / 0.35);
	}
	.p-step:last-child::before { display: none; }
	@media (max-width: 1099px) { .p-step::before { display: none; } .p-step { padding-top: 0; padding-left: 4rem; } }
	.p-num {
		position: absolute;
		top: 0;
		left: 0;
		width: 2.3rem;
		height: 2.3rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgb(var(--accent));
		color: rgb(var(--night));
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 700;
		font-size: 0.95rem;
	}
	.p-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.02rem; font-weight: 600; color: rgb(var(--ink)); margin: 0 0 0.5rem; }
	.p-text { font-size: 0.88rem; color: rgb(var(--muted)); line-height: 1.6; margin: 0; }

	/* ── Réalisations ── */
	.work { display: grid; gap: 1.5rem; }
	@media (min-width: 768px) { .work { grid-template-columns: repeat(3, 1fr); } }
	.work-card { display: block; }
	.work-img {
		aspect-ratio: 16 / 10;
		border-radius: 1rem;
		overflow: hidden;
		background: rgb(var(--mist));
		margin-bottom: 1rem;
	}
	.work-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
	.work-card:hover .work-img img { transform: scale(1.05); }
	.work-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.05rem; font-weight: 600; color: rgb(var(--ink)); margin: 0 0 0.3rem; }
	.work-card:hover .work-title { text-decoration: underline; text-decoration-color: rgb(var(--accent)); text-decoration-thickness: 2px; text-underline-offset: 4px; }
	.work-desc { font-size: 0.87rem; color: rgb(var(--muted)); margin: 0; line-height: 1.5; }

	/* ── Partenaires ── */
	.partners { padding-bottom: 3.5rem; }
	.denisco { font-family: 'Tangerine', cursive; font-weight: 700; font-size: 2.1rem; line-height: 1; margin: 1rem 0 0; }
	.d1 { color: #19100a; }
	.d2 { color: rgb(232, 93, 4); }
	:global([data-theme='dark']) .d1 { color: rgba(255, 255, 255, 0.9); }
	.marquee {
		overflow: hidden;
		mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
		padding: 0.75rem 0;
	}
	.track { display: flex; width: max-content; animation: marquee 24s linear infinite; }
	.marquee:hover .track { animation-play-state: paused; }
	@keyframes marquee { to { transform: translateX(calc(-100% / 3)); } }
	.partner { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; margin-right: 3rem; }
	.partner-logo {
		width: 5.25rem;
		height: 5.25rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: #fff;
		border: 1px solid rgba(0, 0, 0, 0.06);
		box-shadow: 0 6px 20px rgba(60, 90, 10, 0.08);
	}
	.partner-logo img { max-width: 65%; max-height: 65%; object-fit: contain; }
	.partner-name { font-size: 0.8rem; font-weight: 600; color: rgb(var(--muted)); white-space: nowrap; }

	/* ── Blog ── */
	.posts { display: grid; gap: 1.5rem; }
	@media (min-width: 768px) { .posts { grid-template-columns: repeat(3, 1fr); } }
	.post { display: flex; flex-direction: column; }
	.post-img {
		aspect-ratio: 16 / 10;
		border-radius: 1rem;
		overflow: hidden;
		background: rgb(var(--mist));
		display: grid;
		place-items: center;
		margin-bottom: 1rem;
	}
	.post-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
	.post:hover .post-img img { transform: scale(1.05); }
	.post-date { font-size: 0.8rem; color: rgb(var(--muted)); margin-bottom: 0.4rem; }
	.post-title { font-family: 'Space Grotesk', sans-serif; font-size: 1rem; font-weight: 600; line-height: 1.3; color: rgb(var(--ink)); margin: 0 0 0.5rem; }
	.post:hover .post-title { text-decoration: underline; text-decoration-color: rgb(var(--accent)); text-decoration-thickness: 2px; text-underline-offset: 4px; }
	.post-sum {
		font-size: 0.9rem;
		color: rgb(var(--muted));
		line-height: 1.55;
		margin: 0;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* ── CTA final (vert citron) ── */
	.cta { background: rgb(var(--accent)); color: rgb(var(--night)); padding: 4.5rem 0 7.5rem; position: relative; overflow: hidden; }
	.cta::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgb(var(--night) / 0.12) 1px, transparent 1px);
		background-size: 22px 22px;
		mask-image: radial-gradient(ellipse 60% 70% at 50% 40%, #000, transparent 75%);
	}
	.cta-inner { position: relative; text-align: center; }
	.cta-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.7rem, 3.2vw, 2.5rem);
		font-weight: 700;
		letter-spacing: -0.035em;
		line-height: 1.1;
		margin: 0 auto 0.8rem;
		max-width: 20ch;
	}
	.cta-text { color: rgb(var(--night) / 0.75); max-width: 34rem; margin: 0 auto 1.75rem; line-height: 1.6; }
	.cta-btns { display: flex; flex-wrap: wrap; gap: 0.7rem; justify-content: center; }
	.btn-lime, .btn-line {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.8rem 1.4rem;
		border-radius: 999px;
		font-weight: 600;
		transition: transform 0.2s, background 0.2s;
	}
	.btn-lime { background: rgb(var(--night)); color: #fff; box-shadow: 0 10px 26px rgb(var(--night) / 0.25); }
	.btn-lime:hover { transform: translateY(-2px); }
	.btn-line { border: 1.5px solid rgb(var(--night) / 0.35); color: rgb(var(--night)); }
	.btn-line:hover { background: rgb(var(--night) / 0.08); }
</style>
