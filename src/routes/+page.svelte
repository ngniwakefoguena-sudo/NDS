<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ServiceScroller from '$lib/components/ServiceScroller.svelte';
	import JourneyDemo from '$lib/components/JourneyDemo.svelte';
	import { ArrowRight, BookOpen } from 'lucide-svelte';
	import { servicePages, process } from '$lib/data/services';
	import { reveal } from '$lib/actions/motion';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	/* Les 6 offres principales en grandes cartes ; la dernière carte mène à tous les services */
	const main = servicePages.slice(0, 6);

	const partners = [
		{ name: 'ICS Innovations', logo: '/images/ics.png', bgColor: '' },
		{ name: 'Afrilife Insurance', logo: '/images/Afri_insurance.png', bgColor: '#E8551B' },
		{ name: 'Mahkong', logo: '/images/mahkong.avif', bgColor: '' },
		{ name: 'Puol', logo: '/images/puol.png', bgColor: '#000000' }
	];

	const fmt = (d: string) => new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
</script>

<Seo
	title="Agence web, mobile & IA à Paris"
	description="Norbert Digital Service crée sites web, applications mobiles et automatisations IA (n8n) pour les PME en France et en Afrique. Réponse sous 24h."
/>

<Hero />

<!-- ═════════ Services : cartes à défilement horizontal ═════════ -->
<ServiceScroller items={main} />

<!-- ═════════ Exemple concret : le parcours client ═════════ -->
<section class="journey" aria-labelledby="journey-title">
	<div class="wrap journey-grid">
		<div use:reveal>
			<h2 id="journey-title" class="h2 light">Un exemple concret</h2>
			<p class="sub light">
				Voici ce qui se passe quand tout est relié : votre site attire le visiteur, le formulaire le transforme en
				contact, l’automatisation l’enregistre et l’IA lui répond aussitôt. Vous n’avez plus qu’à honorer le rendez-vous.
			</p>
			<a href="/services/automatisation-n8n" class="link light">Découvrir l’automatisation <ArrowRight class="w-4 h-4" /></a>
		</div>
		<JourneyDemo />
	</div>
</section>

<!-- ═════════ Méthode ═════════ -->
<section class="sec mist" aria-labelledby="process-title">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<h2 id="process-title" class="h2">Comment on travaille ensemble</h2>
			<p class="sub">Une méthode simple, avec un point d’étape à chaque phase : vous savez toujours où en est votre projet.</p>
		</header>
		<ol class="process" use:reveal={{ stagger: 140 }}>
			{#each process as step, i}
				<li class="p-step" data-reveal-item>
					<span class="p-num">{i + 1}</span>
					<h3 class="p-title">{step.title}</h3>
					<p class="p-text">{step.text}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- ═════════ Réalisations ═════════ -->
{#if data.featured.length}
	<section class="sec" aria-labelledby="work-title">
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
<section class="sec mist partners" aria-labelledby="partners-title">
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

<!-- ═════════ Blog ═════════ -->
<section class="sec" aria-labelledby="blog-title">
	<div class="wrap">
		<header class="sec-head split" use:reveal>
			<h2 id="blog-title" class="h2">Nos derniers conseils</h2>
			<a href="/blog" class="link">Tous les articles <ArrowRight class="w-4 h-4" /></a>
		</header>
		<div class="posts" use:reveal={{ stagger: 100 }}>
			{#each data.posts as post (post.slug)}
				<a href="/blog/{post.slug}" class="post" data-reveal-item>
					<div class="post-img">
						{#if post.cover}
							<img src={post.cover} alt="" loading="lazy" decoding="async" width="600" height="400" />
						{:else}
							<BookOpen class="w-8 h-8 text-accent opacity-40" />
						{/if}
					</div>
					<time class="post-date" datetime={post.date}>{fmt(post.date)}</time>
					<h3 class="post-title">{post.title}</h3>
					<p class="post-sum">{post.summary}</p>
				</a>
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

	/* ── CTA final ── */
	.cta { background: rgb(var(--night)); color: #fff; padding: 4.5rem 0 7rem; position: relative; overflow: hidden; }
	.cta::before {
		content: '';
		position: absolute;
		width: 640px;
		height: 640px;
		left: 50%;
		top: 30%;
		transform: translateX(-50%);
		background: radial-gradient(circle, rgba(152, 200, 22, 0.2), transparent 65%);
	}
	.cta-inner { position: relative; text-align: center; }
	.cta-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.7rem, 3.2vw, 2.5rem);
		font-weight: 700;
		letter-spacing: -0.035em;
		line-height: 1.05;
		margin: 0 auto 1rem;
		max-width: 18ch;
	}
	.cta-text { color: rgba(255, 255, 255, 0.7); max-width: 36rem; margin: 0 auto 2rem; line-height: 1.6; }
	.cta-btns { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; }
	.btn-lime, .btn-line {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.4rem;
		border-radius: 999px;
		font-weight: 600;
		transition: transform 0.2s, background 0.2s;
	}
	.btn-lime { background: rgb(var(--accent)); color: rgb(var(--night)); box-shadow: 0 10px 30px rgba(152, 200, 22, 0.3); }
	.btn-lime:hover { transform: translateY(-2px); }
	.btn-line { border: 1px solid rgba(255, 255, 255, 0.25); color: #fff; }
	.btn-line:hover { background: rgba(255, 255, 255, 0.08); }
</style>
