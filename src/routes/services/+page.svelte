<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ServiceList from '$lib/components/ServiceList.svelte';
	import { servicePages, process } from '$lib/data/services';
	import { reveal } from '$lib/actions/motion';
	import { ArrowRight } from 'lucide-svelte';
	import { site } from '$lib/data/site';
</script>

<Seo
	title="Services digitaux : site web, app mobile, IA, SEO"
	description="Création de sites web, applications mobiles, intégration IA, automatisation n8n, marketing digital et génération de leads pour les PME. Découvrez nos prestations."
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: servicePages.map((s, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: s.page.h1,
			url: `${site.url}/services/${s.page.slug}`
		}))
	}}
/>

<section class="head">
	<div class="wrap">
		<h1 class="title">Nos services digitaux</h1>
		<p class="lead">
			De la stratégie à la mise en ligne : site web, application mobile, intelligence artificielle, automatisation et
			marketing. Choisissez un service pour découvrir ce qu’il comprend, pour qui il est fait et comment on travaille.
		</p>
	</div>
</section>

<section class="list">
	<div class="wrap">
		<ServiceList items={servicePages} />
	</div>
</section>

<section class="method" aria-labelledby="method-title">
	<div class="wrap">
		<h2 id="method-title" class="h2" use:reveal>Le même cadre pour chaque projet</h2>
		<ol class="steps" use:reveal={{ stagger: 120 }}>
			{#each process as step, i}
				<li data-reveal-item>
					<span class="num">{i + 1}</span>
					<div>
						<h3>{step.title}</h3>
						<p>{step.text}</p>
					</div>
				</li>
			{/each}
		</ol>
		<div class="end" use:reveal>
			<p>Un projet qui ne rentre dans aucune case ? Décrivez-le, on vous dit franchement si on peut aider.</p>
			<a href="/contact" class="btn">Parlons de votre besoin <ArrowRight class="w-4 h-4" /></a>
		</div>
	</div>
</section>

<style>
	.wrap { max-width: 80rem; margin: 0 auto; padding: 0 1.25rem; }
	@media (min-width: 768px) { .wrap { padding: 0 2rem; } }

	.head { padding: 9rem 0 3rem; background: rgb(var(--bg)); }
	@media (max-width: 767px) { .head { padding-top: 7rem; } }
	.title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(2.6rem, 8vw, 5.5rem);
		font-weight: 700;
		letter-spacing: -0.04em;
		line-height: 0.95;
		color: rgb(var(--ink));
		margin: 0 0 1.5rem;
		animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
	}
	.lead {
		max-width: 44rem;
		font-size: 1.1rem;
		line-height: 1.65;
		color: rgb(var(--muted));
		margin: 0;
		animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.12s both;
	}
	@keyframes rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }

	.list { padding: 1rem 0 5rem; background: rgb(var(--bg)); }

	.method { background: rgb(var(--mist)); padding: 5rem 0 9rem; }
	.h2 {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.8rem, 4vw, 2.8rem);
		font-weight: 700;
		letter-spacing: -0.03em;
		color: rgb(var(--ink));
		margin: 0 0 2.5rem;
	}
	.steps { list-style: none; margin: 0; padding: 0; display: grid; gap: 1.25rem; }
	@media (min-width: 768px) { .steps { grid-template-columns: repeat(2, 1fr); gap: 1.5rem 3rem; } }
	.steps li { display: grid; grid-template-columns: auto 1fr; gap: 1rem; align-items: start; }
	.num {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgb(var(--accent));
		color: rgb(var(--night));
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 700;
	}
	.steps h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 600; color: rgb(var(--ink)); margin: 0.4rem 0 0.35rem; }
	.steps p { font-size: 0.93rem; color: rgb(var(--muted)); line-height: 1.6; margin: 0; }
	.end {
		margin-top: 3.5rem;
		padding-top: 2rem;
		border-top: 1px solid rgb(var(--line) / 0.1);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1.25rem;
	}
	.end p { margin: 0; color: rgb(var(--ink)); font-size: 1.05rem; max-width: 36rem; }
	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.9rem 1.5rem;
		border-radius: 999px;
		background: rgb(var(--accent));
		color: rgb(var(--night));
		font-weight: 600;
		transition: transform 0.2s;
	}
	.btn:hover { transform: translateY(-2px); }
</style>
