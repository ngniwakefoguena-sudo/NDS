<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ServiceList from '$lib/components/ServiceList.svelte';
	import { ArrowRight, BookOpen } from 'lucide-svelte';
	import { servicePages, process } from '$lib/data/services';
	import { reveal } from '$lib/actions/motion';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	/* Les 6 offres principales en grand, les autres expertises en lien simple */
	const main = servicePages.slice(0, 6);
	const more = servicePages.slice(6);

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

<!-- ═════════ Services ═════════ -->
<section class="sec" aria-labelledby="services-title">
	<div class="wrap">
		<header class="sec-head split" use:reveal>
			<h2 id="services-title" class="h2">Ce que nous faisons pour vous</h2>
			<p class="sub">Un seul interlocuteur pour votre site, votre application, l’IA et le marketing : tout est pensé pour fonctionner ensemble.</p>
		</header>

		<ServiceList items={main} />

		<div class="more" use:reveal>
			<span class="more-label">Et aussi :</span>
			{#each more as s (s.page.slug)}
				<a href="/services/{s.page.slug}" class="chip">{s.title}</a>
			{/each}
		</div>
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

	.sec { padding: 5.5rem 0; background: rgb(var(--bg)); }
	.sec.mist { background: rgb(var(--mist)); }
	@media (max-width: 767px) { .sec { padding: 4rem 0; } }

	.sec-head { margin-bottom: 3rem; max-width: 46rem; }
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
		font-size: clamp(1.9rem, 4vw, 3rem);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.05;
		color: rgb(var(--ink));
		margin: 0;
	}
	.sub { color: rgb(var(--muted)); line-height: 1.6; margin: 0.9rem 0 0; }
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

	/* ── Autres expertises ── */
	.more { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; margin-top: 1.75rem; }
	.more-label { font-size: 0.9rem; color: rgb(var(--muted)); margin-right: 0.25rem; }
	.chip {
		padding: 0.45rem 1rem;
		border-radius: 999px;
		border: 1px solid rgb(var(--line) / 0.14);
		font-size: 0.88rem;
		font-weight: 500;
		color: rgb(var(--ink));
		transition: background 0.2s, border-color 0.2s;
	}
	.chip:hover { background: rgb(var(--accent) / 0.14); border-color: rgb(var(--accent)); }

	/* ── Méthode ── */
	.process {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 2rem;
		counter-reset: none;
	}
	@media (min-width: 768px) { .process { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; } }
	.p-step { position: relative; padding-top: 3.75rem; }
	.p-step::before {
		content: '';
		position: absolute;
		top: 1.35rem;
		left: 2.9rem;
		right: -1.5rem;
		height: 2px;
		background: rgb(var(--accent) / 0.35);
	}
	.p-step:last-child::before { display: none; }
	@media (max-width: 767px) { .p-step::before { display: none; } .p-step { padding-top: 0; padding-left: 4rem; } }
	.p-num {
		position: absolute;
		top: 0;
		left: 0;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgb(var(--accent));
		color: rgb(var(--night));
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 700;
		font-size: 1.1rem;
	}
	.p-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.15rem; font-weight: 600; color: rgb(var(--ink)); margin: 0 0 0.5rem; }
	.p-text { font-size: 0.92rem; color: rgb(var(--muted)); line-height: 1.6; margin: 0; }

	/* ── Réalisations ── */
	.work { display: grid; gap: 1.75rem; }
	@media (min-width: 768px) { .work { grid-template-columns: repeat(3, 1fr); } }
	.work-card { display: block; }
	.work-img {
		aspect-ratio: 16 / 11;
		border-radius: 1.25rem;
		overflow: hidden;
		background: rgb(var(--mist));
		margin-bottom: 1rem;
	}
	.work-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
	.work-card:hover .work-img img { transform: scale(1.05); }
	.work-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.2rem; font-weight: 600; color: rgb(var(--ink)); margin: 0 0 0.3rem; }
	.work-card:hover .work-title { text-decoration: underline; text-decoration-color: rgb(var(--accent)); text-decoration-thickness: 2px; text-underline-offset: 4px; }
	.work-desc { font-size: 0.92rem; color: rgb(var(--muted)); margin: 0; line-height: 1.5; }

	/* ── Partenaires ── */
	.partners { padding-bottom: 4.5rem; }
	.denisco { font-family: 'Tangerine', cursive; font-weight: 700; font-size: 2.6rem; line-height: 1; margin: 1rem 0 0; }
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
	.partner { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; margin-right: 4rem; }
	.partner-logo {
		width: 7rem;
		height: 7rem;
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
	.posts { display: grid; gap: 2rem; }
	@media (min-width: 768px) { .posts { grid-template-columns: repeat(3, 1fr); } }
	.post { display: flex; flex-direction: column; }
	.post-img {
		aspect-ratio: 3 / 2;
		border-radius: 1.1rem;
		overflow: hidden;
		background: rgb(var(--mist));
		display: grid;
		place-items: center;
		margin-bottom: 1rem;
	}
	.post-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
	.post:hover .post-img img { transform: scale(1.05); }
	.post-date { font-size: 0.8rem; color: rgb(var(--muted)); margin-bottom: 0.4rem; }
	.post-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 600; line-height: 1.3; color: rgb(var(--ink)); margin: 0 0 0.5rem; }
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
	.cta { background: rgb(var(--night)); color: #fff; padding: 6rem 0 7rem; position: relative; overflow: hidden; }
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
		font-size: clamp(2.1rem, 5vw, 3.8rem);
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
		padding: 0.95rem 1.6rem;
		border-radius: 999px;
		font-weight: 600;
		transition: transform 0.2s, background 0.2s;
	}
	.btn-lime { background: rgb(var(--accent)); color: rgb(var(--night)); box-shadow: 0 10px 30px rgba(152, 200, 22, 0.3); }
	.btn-lime:hover { transform: translateY(-2px); }
	.btn-line { border: 1px solid rgba(255, 255, 255, 0.25); color: #fff; }
	.btn-line:hover { background: rgba(255, 255, 255, 0.08); }
</style>
