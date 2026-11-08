<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/data/site';
	import { getService, servicePages, process } from '$lib/data/services';
	import { ArrowLeft, Check } from 'lucide-svelte';
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

<div class="relative min-h-screen pt-32 pb-24 overflow-hidden">
	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none" style="background: radial-gradient(ellipse, rgba(152,200,22,0.18) 0%, transparent 70%);"></div>
	<div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(rgba(152,200,22,0.07) 1px, transparent 1px); background-size: 36px 36px;"></div>

	<div class="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
		<!-- Fil d'Ariane -->
		<nav aria-label="Fil d'Ariane" class="mb-8">
			<a href="/services" class="glass inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors px-4 py-2 rounded-full">
				<ArrowLeft class="w-4 h-4" />
				Tous les services
			</a>
		</nav>

		<!-- En-tête -->
		<header class="mb-16">
			<div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style="background: {service.iconBg}; box-shadow: 0 4px 14px rgba(0,0,0,0.15);">
				<service.icon class="w-6 h-6 text-white" />
			</div>
			<h1 class="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6 leading-[1.08]">{p.h1}</h1>
			{#each p.intro as para}
				<p class="text-base md:text-lg text-muted leading-relaxed mb-4 max-w-3xl">{para}</p>
			{/each}
			<div class="flex flex-wrap gap-3 mt-8">
				<a href="/contact" class="btn-pill inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white text-sm">Demander un devis</a>
				<a href={waLink} target="_blank" rel="noopener" class="glass inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-ink text-sm">Discuter sur WhatsApp</a>
			</div>
		</header>

		<!-- Ce qui est inclus -->
		<section class="mb-16" aria-labelledby="includes-title">
			<h2 id="includes-title" class="section-title">Ce que nous réalisons pour vous</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each p.includes as item}
					<div class="glass rounded-2xl p-5">
						<h3 class="text-sm font-bold text-ink mb-1.5 flex items-center gap-2">
							<Check class="w-4 h-4 text-accent shrink-0" />
							{item.title}
						</h3>
						<p class="text-sm text-muted leading-relaxed">{item.text}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Pour qui -->
		<section class="mb-16" aria-labelledby="forwho-title">
			<h2 id="forwho-title" class="section-title">Pour qui ?</h2>
			<ul class="flex flex-wrap gap-2">
				{#each p.forWho as who}
					<li class="tech-pill px-4 py-2 rounded-full text-sm text-ink">{who}</li>
				{/each}
			</ul>
		</section>

		<!-- Méthode -->
		<section class="mb-16" aria-labelledby="process-title">
			<h2 id="process-title" class="section-title">Comment se déroule un projet</h2>
			<ol class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each process as step, i}
					<li class="glass rounded-2xl p-5">
						<span class="text-xs font-bold text-accent tracking-widest">ÉTAPE {i + 1}</span>
						<h3 class="text-sm font-bold text-ink mt-1 mb-1.5">{step.title}</h3>
						<p class="text-sm text-muted leading-relaxed">{step.text}</p>
					</li>
				{/each}
			</ol>
			<div class="flex flex-wrap gap-1.5 mt-6">
				<span class="text-xs text-muted mr-1 self-center">Technologies :</span>
				{#each service.stack as tech}
					<span class="tech-pill px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-muted">{tech}</span>
				{/each}
			</div>
		</section>

		<!-- FAQ -->
		<section class="mb-16" aria-labelledby="faq-title">
			<h2 id="faq-title" class="section-title">Questions fréquentes</h2>
			<div class="flex flex-col gap-3">
				{#each p.faq as f}
					<details class="glass rounded-2xl p-5 group">
						<summary class="text-sm font-bold text-ink cursor-pointer list-none flex justify-between gap-4">
							<h3>{f.q}</h3>
							<span class="text-accent group-open:rotate-45 transition-transform text-lg leading-none">+</span>
						</summary>
						<p class="text-sm text-muted leading-relaxed mt-3">{f.a}</p>
					</details>
				{/each}
			</div>
		</section>

		<!-- Articles liés -->
		{#if data.articles.length}
			<section class="mb-16" aria-labelledby="articles-title">
				<h2 id="articles-title" class="section-title">Nos guides sur le sujet</h2>
				<div class="grid gap-4 md:grid-cols-3">
					{#each data.articles as a (a.slug)}
						<a href="/blog/{a.slug}" class="glass group block rounded-2xl overflow-hidden">
							{#if a.cover}<img src={a.cover} alt="" loading="lazy" class="w-full h-32 object-cover" />{/if}
							<div class="p-4">
								<h3 class="text-sm font-semibold text-ink leading-snug group-hover:underline">{a.title}</h3>
							</div>
						</a>
					{/each}
				</div>
			</section>
		{/if}

		<!-- CTA -->
		<section class="cta rounded-3xl p-8 md:p-10 mb-16 text-center">
			<h2 class="text-2xl font-bold text-ink mb-3">Parlons de votre projet</h2>
			<p class="text-sm text-muted mb-6 max-w-lg mx-auto">Décrivez votre besoin en quelques lignes : vous recevez une réponse sous 24h avec les prochaines étapes.</p>
			<a href="/contact" class="btn-pill inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white text-sm">Demander un devis</a>
		</section>

		<!-- Autres services -->
		<nav aria-labelledby="others-title">
			<h2 id="others-title" class="section-title">Nos autres services</h2>
			<ul class="flex flex-wrap gap-2">
				{#each others as o}
					<li><a href="/services/{o.page.slug}" class="tech-pill inline-block px-4 py-2 rounded-full text-sm font-medium text-ink hover:underline">{o.page.h1}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
</div>

<style>
	.section-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.5rem;
		font-weight: 700;
		color: rgb(var(--ink));
		margin-bottom: 1.25rem;
		letter-spacing: -0.02em;
	}
	.glass {
		background: var(--glass-bg);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid var(--glass-border);
	}
	.tech-pill {
		background: var(--glass-bg-md);
		border: 1px solid var(--glass-border-xs);
	}
	.cta {
		background: rgba(152,200,22,0.08);
		border: 1px solid rgba(152,200,22,0.2);
	}
	.btn-pill {
		background: linear-gradient(150deg, rgb(175,220,25), rgb(152,200,22), rgb(112,160,8));
		box-shadow: 0 8px 28px rgba(120,175,10,0.42), 0 2px 8px rgba(120,175,10,0.18);
		transition: opacity 0.2s, transform 0.2s;
	}
	.btn-pill:hover { opacity: 0.88; transform: translateY(-1px); }
	summary::-webkit-details-marker { display: none; }
</style>
