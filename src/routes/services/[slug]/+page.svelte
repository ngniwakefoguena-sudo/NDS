<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/data/site';
	import { getService, servicePages, process } from '$lib/data/services';
	import { ArrowRight, Check, Plus } from 'lucide-svelte';
	import { reveal } from '$lib/actions/motion';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const service = $derived(getService(data.slug)!);
	const p = $derived(service.page);
	const others = $derived(servicePages.filter((s) => s.page.slug !== data.slug));
	const url = $derived(`${site.url}/services/${data.slug}`);

	const waLink = $derived(
		`https://wa.me/33659173774?text=${encodeURIComponent(`Bonjour, je souhaite en savoir plus sur votre offre « ${service.title} ».`)}`
	);
</script>

<Seo
	title={p.metaTitle}
	description={p.metaDescription}
	jsonLd={[
		{
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: p.h1,
			serviceType: service.title,
			description: p.metaDescription,
			url,
			provider: { '@id': `${site.url}/#organisation` },
			areaServed: { '@type': 'Country', name: 'France' }
		},
		{
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: p.faq.map((f) => ({
				'@type': 'Question',
				name: f.q,
				acceptedAnswer: { '@type': 'Answer', text: f.a }
			}))
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Accueil', item: `${site.url}/` },
				{ '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
				{ '@type': 'ListItem', position: 3, name: service.title, item: url }
			]
		}
	]}
/>

<section class="head">
	<div class="wrap head-grid">
		<div>
			<nav aria-label="Fil d’Ariane" class="crumbs">
				<a href="/">Accueil</a><span aria-hidden="true">/</span><a href="/services">Services</a><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span>
			</nav>
			<h1 class="title">{p.h1}</h1>
			{#each p.intro as para}
				<p class="lead">{para}</p>
			{/each}
			<div class="ctas">
				<a href="/contact" class="btn-lime">Demander un devis <ArrowRight class="w-4 h-4" /></a>
				<a href={waLink} target="_blank" rel="noopener" class="btn-line">Discuter sur WhatsApp</a>
			</div>
		</div>
		<aside class="who" aria-labelledby="who-title">
			<span class="who-icon"><service.icon class="w-6 h-6" /></span>
			<h2 id="who-title" class="who-title">Pour qui ?</h2>
			<ul>
				{#each p.forWho as who}
					<li><Check class="w-4 h-4 shrink-0" /> {who}</li>
				{/each}
			</ul>
		</aside>
	</div>
</section>

<section class="sec" aria-labelledby="includes-title">
	<div class="wrap">
		<h2 id="includes-title" class="h2" use:reveal>Ce que nous réalisons pour vous</h2>
		<div class="includes" use:reveal={{ stagger: 70 }}>
			{#each p.includes as item}
				<div class="inc" data-reveal-item>
					<span class="inc-check"><Check class="w-4 h-4" /></span>
					<h3>{item.title}</h3>
					<p>{item.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="sec mist" aria-labelledby="process-title">
	<div class="wrap">
		<h2 id="process-title" class="h2" use:reveal>Comment se déroule un projet</h2>
		<ol class="process" use:reveal={{ stagger: 120 }}>
			{#each process as step, i}
				<li class="p-step" data-reveal-item>
					<span class="p-num">{i + 1}</span>
					<h3>{step.title}</h3>
					<p>{step.text}</p>
				</li>
			{/each}
		</ol>
		<div class="techs">
			<span>Technologies utilisées :</span>
			{#each service.stack as tech}<span class="tech">{tech}</span>{/each}
		</div>
	</div>
</section>

<section class="sec" aria-labelledby="faq-title">
	<div class="wrap faq-grid">
		<h2 id="faq-title" class="h2">Questions fréquentes</h2>
		<div class="faq">
			{#each p.faq as f}
				<details>
					<summary>
						<h3>{f.q}</h3>
						<span class="faq-icon" aria-hidden="true"><Plus class="w-4 h-4" /></span>
					</summary>
					<p>{f.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

{#if data.articles.length}
	<section class="sec mist" aria-labelledby="articles-title">
		<div class="wrap">
			<h2 id="articles-title" class="h2" use:reveal>Nos guides sur le sujet</h2>
			<div class="posts" use:reveal={{ stagger: 100 }}>
				{#each data.articles as a (a.slug)}
					<a href="/blog/{a.slug}" class="post" data-reveal-item>
						<div class="post-img">{#if a.cover}<img src={a.cover} alt="" loading="lazy" decoding="async" />{/if}</div>
						<h3>{a.title}</h3>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}

<section class="sec others" aria-labelledby="others-title">
	<div class="wrap">
		<h2 id="others-title" class="h3">Nos autres services</h2>
		<ul class="chips">
			{#each others as o}
				<li><a href="/services/{o.page.slug}" class="chip">{o.title}</a></li>
			{/each}
		</ul>
	</div>
</section>

<section class="cta" aria-labelledby="cta-title">
	<div class="wrap cta-inner" use:reveal>
		<h2 id="cta-title" class="cta-title">Parlons de votre projet</h2>
		<p>Décrivez votre besoin en quelques lignes : vous recevez une réponse sous 24h avec les prochaines étapes.</p>
		<div class="ctas center">
			<a href="/contact" class="btn-lime">Demander un devis <ArrowRight class="w-4 h-4" /></a>
			<a href={waLink} target="_blank" rel="noopener" class="btn-line dark">Discuter sur WhatsApp</a>
		</div>
	</div>
</section>

<style>
	.wrap { max-width: 80rem; margin: 0 auto; padding: 0 1.25rem; }
	@media (min-width: 768px) { .wrap { padding: 0 2rem; } }
	.sec { padding: 5rem 0; background: rgb(var(--bg)); }
	.sec.mist { background: rgb(var(--mist)); }
	@media (max-width: 767px) { .sec { padding: 3.75rem 0; } }
	.h2 {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.7rem, 3.6vw, 2.6rem);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.1;
		color: rgb(var(--ink));
		margin: 0 0 2.25rem;
	}
	.h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.2rem; font-weight: 600; color: rgb(var(--ink)); margin: 0 0 1rem; }

	/* ── En-tête ── */
	.head { background: rgb(var(--mist)); padding: 8.5rem 0 4.5rem; }
	@media (max-width: 767px) { .head { padding-top: 7rem; } }
	.head-grid { display: grid; gap: 2.5rem; align-items: start; }
	@media (min-width: 1024px) { .head-grid { grid-template-columns: 1fr 22rem; gap: 4rem; } }
	.crumbs { display: flex; flex-wrap: wrap; gap: 0.5rem; font-size: 0.85rem; color: rgb(var(--muted)); margin-bottom: 1.5rem; }
	.crumbs a:hover { color: rgb(var(--ink)); text-decoration: underline; }
	.crumbs [aria-current] { color: rgb(var(--ink)); font-weight: 500; }
	.title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(2.2rem, 5.5vw, 4.2rem);
		font-weight: 700;
		letter-spacing: -0.035em;
		line-height: 1.02;
		color: rgb(var(--ink));
		margin: 0 0 1.5rem;
		max-width: 18ch;
		animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
	}
	.lead {
		max-width: 42rem;
		font-size: 1.05rem;
		line-height: 1.7;
		color: rgb(var(--muted));
		margin: 0 0 1rem;
		animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
	}
	.ctas { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }
	.ctas.center { justify-content: center; }
	.btn-lime, .btn-line {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.9rem 1.5rem;
		border-radius: 999px;
		font-weight: 600;
		transition: transform 0.2s, background 0.2s;
	}
	.btn-lime { background: rgb(var(--accent)); color: rgb(var(--night)); box-shadow: 0 10px 28px rgb(var(--accent) / 0.3); }
	.btn-lime:hover { transform: translateY(-2px); }
	.btn-line { border: 1px solid rgb(var(--line) / 0.2); color: rgb(var(--ink)); }
	.btn-line:hover { background: rgb(var(--line) / 0.05); }
	.btn-line.dark { border-color: rgba(255, 255, 255, 0.25); color: #fff; }
	.btn-line.dark:hover { background: rgba(255, 255, 255, 0.08); }

	.who {
		background: rgb(var(--bg));
		border: 1px solid rgb(var(--line) / 0.08);
		border-radius: 1.5rem;
		padding: 1.75rem;
		box-shadow: 0 20px 50px rgba(60, 90, 10, 0.08);
		animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.25s both;
	}
	.who-icon {
		width: 3rem;
		height: 3rem;
		border-radius: 0.9rem;
		display: grid;
		place-items: center;
		background: rgb(var(--accent));
		color: rgb(var(--night));
		margin-bottom: 1.25rem;
	}
	.who-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.15rem; font-weight: 600; color: rgb(var(--ink)); margin: 0 0 0.9rem; }
	.who ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.7rem; }
	.who li { display: flex; gap: 0.6rem; align-items: flex-start; font-size: 0.93rem; color: rgb(var(--ink)); line-height: 1.45; }
	.who li :global(svg) { color: rgb(var(--accent-2)); margin-top: 0.15rem; }

	/* ── Ce qui est inclus ── */
	.includes { display: grid; gap: 1rem; }
	@media (min-width: 640px) { .includes { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1024px) { .includes { grid-template-columns: repeat(3, 1fr); } }
	.inc {
		border: 1px solid rgb(var(--line) / 0.09);
		border-radius: 1.25rem;
		padding: 1.5rem;
		transition: border-color 0.25s, transform 0.25s;
	}
	.inc:hover { border-color: rgb(var(--accent)); }
	.inc-check {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgb(var(--accent) / 0.16);
		color: rgb(var(--accent-2));
		margin-bottom: 1rem;
	}
	.inc h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.05rem; font-weight: 600; color: rgb(var(--ink)); margin: 0 0 0.4rem; }
	.inc p { font-size: 0.92rem; color: rgb(var(--muted)); line-height: 1.6; margin: 0; }
	@media (max-width: 639px) {
		.inc { display: grid; grid-template-columns: auto 1fr; column-gap: 0.9rem; padding: 1.15rem; }
		.inc-check { margin: 0; grid-row: span 2; }
	}

	/* ── Méthode ── */
	.process { list-style: none; margin: 0; padding: 0; display: grid; gap: 2rem; }
	@media (min-width: 640px) { .process { grid-template-columns: repeat(2, 1fr); gap: 2.25rem 2.5rem; } }
	@media (min-width: 1100px) { .process { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; } }
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
	@media (max-width: 1099px) { .p-step::before { display: none; } .p-step { padding: 0 0 0 4rem; } }
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
	}
	.p-step h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 600; color: rgb(var(--ink)); margin: 0 0 0.45rem; }
	.p-step p { font-size: 0.92rem; color: rgb(var(--muted)); line-height: 1.6; margin: 0; }
	.techs { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; margin-top: 3rem; font-size: 0.88rem; color: rgb(var(--muted)); }
	.tech { padding: 0.3rem 0.8rem; border-radius: 999px; background: rgb(var(--bg)); border: 1px solid rgb(var(--line) / 0.08); color: rgb(var(--ink)); font-weight: 500; }

	/* ── FAQ ── */
	.faq-grid { display: grid; gap: 1rem; }
	@media (min-width: 1024px) { .faq-grid { grid-template-columns: 20rem 1fr; gap: 4rem; } }
	.faq { border-top: 1px solid rgb(var(--line) / 0.1); }
	.faq details { border-bottom: 1px solid rgb(var(--line) / 0.1); }
	.faq summary {
		list-style: none;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
		padding: 1.4rem 0.25rem;
	}
	.faq summary::-webkit-details-marker { display: none; }
	.faq summary h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.08rem; font-weight: 600; color: rgb(var(--ink)); margin: 0; }
	.faq summary:hover h3 { color: rgb(var(--accent-2)); }
	.faq-icon {
		flex-shrink: 0;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		border: 1px solid rgb(var(--line) / 0.15);
		color: rgb(var(--ink));
		transition: transform 0.3s, background 0.3s;
	}
	.faq details[open] .faq-icon { transform: rotate(45deg); background: rgb(var(--accent)); border-color: rgb(var(--accent)); color: rgb(var(--night)); }
	.faq details p { margin: 0; padding: 0 3rem 1.5rem 0.25rem; color: rgb(var(--muted)); line-height: 1.7; font-size: 0.97rem; }
	.faq details[open] p { animation: open 0.35s ease-out; }
	@keyframes open { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }

	/* ── Guides ── */
	.posts { display: grid; gap: 1.75rem; }
	@media (min-width: 768px) { .posts { grid-template-columns: repeat(3, 1fr); } }
	.post-img { aspect-ratio: 3 / 2; border-radius: 1.1rem; overflow: hidden; background: rgb(var(--bg)); margin-bottom: 0.9rem; }
	.post-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
	.post:hover .post-img img { transform: scale(1.05); }
	.post h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.05rem; font-weight: 600; line-height: 1.35; color: rgb(var(--ink)); margin: 0; }
	.post:hover h3 { text-decoration: underline; text-decoration-color: rgb(var(--accent)); text-decoration-thickness: 2px; text-underline-offset: 4px; }

	/* ── Autres services ── */
	.others { padding: 3.5rem 0 4.5rem; }
	.chips { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 0.5rem; }
	.chip {
		display: inline-block;
		padding: 0.5rem 1.05rem;
		border-radius: 999px;
		border: 1px solid rgb(var(--line) / 0.14);
		font-size: 0.9rem;
		font-weight: 500;
		color: rgb(var(--ink));
		transition: background 0.2s, border-color 0.2s;
	}
	.chip:hover { background: rgb(var(--accent) / 0.14); border-color: rgb(var(--accent)); }

	/* ── CTA ── */
	.cta { background: rgb(var(--night)); color: #fff; padding: 5.5rem 0 8rem; position: relative; overflow: hidden; }
	.cta::before {
		content: '';
		position: absolute;
		width: 600px;
		height: 600px;
		left: 50%;
		top: 20%;
		transform: translateX(-50%);
		background: radial-gradient(circle, rgba(152, 200, 22, 0.2), transparent 65%);
	}
	.cta-inner { position: relative; text-align: center; }
	.cta-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 700; letter-spacing: -0.03em; margin: 0 0 0.9rem; }
	.cta-inner p { color: rgba(255, 255, 255, 0.7); max-width: 34rem; margin: 0 auto; line-height: 1.6; }

	@keyframes rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
</style>
