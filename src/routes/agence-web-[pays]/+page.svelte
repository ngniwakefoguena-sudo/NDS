<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/data/site';
	import { pays as tous } from '$lib/data/pays';
	import { ArrowRight, Check, Globe, Smartphone, Bot, Workflow, Search, MessageCircle, MapPin } from 'lucide-svelte';

	let { data } = $props();
	const p = $derived(data.p);
	const autres = $derived(tous.filter((x) => x.slug !== p.slug));

	const services = $derived([
		{ icon: Globe, title: `Création de site internet ${p.au}`, text: `Site vitrine, e-commerce ou plateforme sur mesure, rapide sur mobile, pour les entreprises de ${p.villes.slice(0, 3).join(', ')}.`, href: '/services/creation-site-web' },
		{ icon: Smartphone, title: 'Application mobile Android et iOS', text: 'Des applications pensées pour les smartphones Android, avec mode hors ligne quand c’est utile.', href: '/services/application-mobile' },
		{ icon: MessageCircle, title: 'Chatbot WhatsApp Business', text: 'Vos clients écrivent sur WhatsApp : un assistant répond à toute heure, présente vos produits et prend les commandes avec Vendia.', href: '/vendia' },
		{ icon: Search, title: 'Référencement Google', text: `Fiche Google Business et SEO local pour apparaître quand on cherche votre activité à ${p.villes[0]}.`, href: '/services/marketing-digital-seo' },
		{ icon: Bot, title: 'Intelligence artificielle', text: 'Assistants IA en français et en anglais, connectés à vos documents et outils.', href: '/services/intelligence-artificielle' },
		{ icon: Workflow, title: 'Automatisation', text: 'Devis, factures, relances et suivi des ventes automatisés avec n8n.', href: '/services/automatisation-n8n' },
	]);

	const reasons = $derived([
		`Paiement en ligne intégré : ${p.paiements}`,
		`Devis gratuit sous 24h, en ${p.monnaie}`,
		'Sites légers et rapides, adaptés aux connexions mobiles',
		'Travail 100 % à distance, en français et en anglais, par WhatsApp, visio et e-mail',
		'Un seul interlocuteur pour le site, l’application, le référencement et l’IA',
		`Conseil sur le nom de domaine : ${p.domaine} ou .com selon vos marchés`,
	]);

	const jsonLd = $derived([
		{
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: `Agence web ${p.au} : création de site internet, application mobile, SEO`,
			serviceType: 'Agence web',
			provider: { '@type': 'Organization', name: site.name, url: site.url },
			areaServed: [{ '@type': 'Country', name: p.nom }, ...p.villes.map((name) => ({ '@type': 'City', name }))],
			url: `${site.url}/agence-web-${p.slug}`,
		},
		{
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: p.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Accueil', item: `${site.url}/` },
				{ '@type': 'ListItem', position: 2, name: 'Agence web Afrique', item: `${site.url}/agence-web-afrique` },
				{ '@type': 'ListItem', position: 3, name: p.nom, item: `${site.url}/agence-web-${p.slug}` },
			],
		},
	]);
</script>

<Seo
	title={`Agence web ${p.au} : création de site internet à ${p.villes[0]}`}
	description={`Agence web ${p.au} : création de site internet, application mobile, chatbot WhatsApp et référencement Google à ${p.villes.slice(0, 3).join(', ')}. Paiement ${p.paiements.split(',')[0]} intégré. Devis gratuit sous 24h.`}
	{jsonLd}
/>

<section class="hero">
	<div class="glow" aria-hidden="true"></div>
	<div class="wrap">
		<span class="kicker">Agence web · {p.nom}</span>
		<h1 class="title">Agence web {p.au} : <span class="hl">votre site internet</span> qui attire des clients</h1>
		<p class="lead">
			Création de site internet, application mobile, chatbot WhatsApp et référencement Google pour les entreprises de
			{p.villes.slice(0, -1).join(', ')} et {p.villes[p.villes.length - 1]}. Devis gratuit sous 24h.
		</p>
		<div class="ctas">
			<a href="/contact#formulaire" class="btn-lime">Demander un devis gratuit <ArrowRight size={18} /></a>
			<a href={`https://wa.me/237659324756?text=${encodeURIComponent(`Bonjour Norbert, je souhaite un devis pour un projet ${p.au}.`)}`} target="_blank" rel="noopener" class="btn-line">Écrire sur WhatsApp</a>
		</div>
	</div>
</section>

<section class="sec">
	<div class="wrap two">
		<div>
			<span class="kicker">Le marché {p.du}</span>
			<h2 class="h2">Un site pensé pour vos clients {p.au}</h2>
			<p class="sub">{p.contexte}</p>
		</div>
		<ul class="checks">
			{#each reasons as r}
				<li><Check size={18} /> {r}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="sec mist">
	<div class="wrap">
		<div class="sec-head">
			<span class="kicker">Nos services {p.au}</span>
			<h2 class="h2">Tout ce qu’il faut pour vendre en ligne {p.au}</h2>
		</div>
		<div class="grid">
			{#each services as s}
				<a href={s.href} class="card">
					<span class="ico"><s.icon size={22} /></span>
					<h3>{s.title}</h3>
					<p>{s.text}</p>
					<span class="more">En savoir plus <ArrowRight size={15} /></span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="sec">
	<div class="wrap">
		<div class="sec-head">
			<span class="kicker">Questions fréquentes</span>
			<h2 class="h2">Créer son site internet {p.au}</h2>
		</div>
		<div class="faq">
			{#each p.faqs as f}
				<details>
					<summary>{f.q}</summary>
					<p>{f.a}</p>
				</details>
			{/each}
		</div>
		<div class="region" style="margin-top:2.5rem">
			<h3><MapPin size={18} /> Nous intervenons aussi</h3>
			<p>
				{#each autres as a, i}<a href={`/agence-web-${a.slug}`} class="link">Agence web {a.au}</a>{i < autres.length - 1 ? ' · ' : ''}{/each}
				· <a href="/agence-web-afrique" class="link">toute l’Afrique</a> · <a href="/agence-web-international" class="link">international</a>
			</p>
		</div>
	</div>
</section>

<section class="sec cta">
	<div class="wrap center">
		<h2 class="h2 light">Un projet digital {p.au} ?</h2>
		<p class="sub light">Décrivez votre besoin en deux phrases : réponse et devis gratuit sous 24h.</p>
		<div class="ctas center">
			<a href="/contact#formulaire" class="btn-lime">Demander un devis gratuit <ArrowRight size={18} /></a>
			<a href="/vendia" class="btn-line light">Découvrir Vendia (WhatsApp)</a>
		</div>
	</div>
</section>

<style>
	.wrap { max-width: 80rem; margin: 0 auto; padding: 0 1.25rem; }
	@media (min-width: 768px) { .wrap { padding: 0 2rem; } }
	.sec { padding: 5rem 0; background: rgb(var(--bg)); }
	.sec.mist { background: rgb(var(--mist)); }
	@media (max-width: 767px) { .sec { padding: 3.75rem 0; } }
	.kicker { display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgb(var(--accent-2)); margin-bottom: 0.9rem; }
	.h2 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.7rem, 3.6vw, 2.5rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.1; color: rgb(var(--ink)); margin: 0 0 1rem; max-width: 26ch; }
	.sec-head { margin-bottom: 2.5rem; }
	.sub { max-width: 46rem; color: rgb(var(--muted)); line-height: 1.7; margin: 0; }
	h3 { font-family: 'Space Grotesk', sans-serif; }

	.hero { position: relative; overflow: hidden; background: rgb(var(--mist)); padding: 8.5rem 0 5rem; }
	@media (max-width: 767px) { .hero { padding: 7rem 0 3.75rem; } }
	.glow { position: absolute; width: 46rem; height: 46rem; right: -12rem; top: -14rem; border-radius: 50%; background: radial-gradient(circle, rgb(var(--accent) / 0.3), transparent 65%); pointer-events: none; }
	.hero .wrap { position: relative; }
	.title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.2rem, 5vw, 4rem); font-weight: 700; letter-spacing: -0.04em; line-height: 1.05; color: rgb(var(--ink)); margin: 0.4rem 0 1.4rem; max-width: 20ch; }
	.hl { background: linear-gradient(120deg, rgb(var(--accent-2)), rgb(var(--accent))); -webkit-background-clip: text; background-clip: text; color: transparent; }
	.lead { max-width: 44rem; font-size: 1.08rem; line-height: 1.7; color: rgb(var(--muted)); margin: 0; }

	.ctas { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }
	.ctas.center { justify-content: center; }
	.btn-lime, .btn-line { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.95rem 1.55rem; border-radius: 999px; font-weight: 600; transition: transform 0.2s, box-shadow 0.2s; }
	.btn-lime { background: rgb(var(--accent)); color: rgb(var(--night)); box-shadow: 0 12px 30px rgb(var(--accent) / 0.35); }
	.btn-lime:hover { transform: translateY(-2px); }
	.btn-line { border: 1px solid rgb(var(--line) / 0.18); color: rgb(var(--ink)); background: rgb(var(--bg) / 0.6); }
	.btn-line.light { color: #fff; border-color: rgb(255 255 255 / 0.3); background: transparent; }

	.grid { display: grid; gap: 1.25rem; }
	@media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }
	.card { display: flex; flex-direction: column; gap: 0.6rem; padding: 1.6rem; border-radius: 1.25rem; background: rgb(var(--bg)); border: 1px solid rgb(var(--line) / 0.1); transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s; }
	.card:hover { transform: translateY(-3px); box-shadow: 0 18px 40px rgb(0 0 0 / 0.08); border-color: rgb(var(--accent) / 0.5); }
	.ico { display: inline-grid; place-items: center; width: 2.75rem; height: 2.75rem; border-radius: 0.85rem; background: rgb(var(--accent) / 0.18); color: rgb(var(--ink)); }
	.card h3 { margin: 0.4rem 0 0; font-size: 1.15rem; color: rgb(var(--ink)); }
	.card p { margin: 0; color: rgb(var(--muted)); line-height: 1.6; font-size: 0.95rem; flex: 1; }
	.more { display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 600; font-size: 0.9rem; color: rgb(var(--accent-2)); }

	.two { display: grid; gap: 2.5rem; align-items: center; }
	@media (min-width: 1024px) { .two { grid-template-columns: 1fr 1fr; gap: 4rem; } }
	.checks { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.85rem; }
	.checks li { display: flex; gap: 0.7rem; align-items: flex-start; padding: 1rem 1.15rem; border-radius: 1rem; background: rgb(var(--bg)); border: 1px solid rgb(var(--line) / 0.08); color: rgb(var(--ink)); line-height: 1.5; }
	.sec:not(.mist) .checks li { background: rgb(var(--mist)); }
	.checks :global(svg) { flex: none; margin-top: 0.15rem; color: rgb(var(--accent-2)); }

	.faq { display: grid; gap: 0.75rem; max-width: 52rem; }
	details { background: rgb(var(--bg)); border: 1px solid rgb(var(--line) / 0.1); border-radius: 1rem; padding: 1.1rem 1.3rem; }
	summary { cursor: pointer; font-weight: 600; color: rgb(var(--ink)); }
	details p { margin: 0.8rem 0 0; color: rgb(var(--muted)); line-height: 1.7; }

	.cta { background: rgb(var(--night)); }
	.center { text-align: center; }
	.center .h2, .center .sub { margin-left: auto; margin-right: auto; }
	.h2.light { color: #fff; }
	.sub.light { color: rgb(255 255 255 / 0.75); }
	.regions { display: grid; gap: 1.25rem; }
	@media (min-width: 768px) { .regions { grid-template-columns: repeat(2, 1fr); } }
	.region { padding: 1.5rem; border-radius: 1.25rem; background: rgb(var(--mist)); border: 1px solid rgb(var(--line) / 0.08); }
	.region h3 { display: flex; align-items: center; gap: 0.5rem; margin: 0 0 0.6rem; font-size: 1.15rem; color: rgb(var(--ink)); }
	.region h3 :global(svg) { color: rgb(var(--accent-2)); }
	.region p { margin: 0; color: rgb(var(--muted)); line-height: 1.7; }
	.link { color: rgb(var(--accent-2)); font-weight: 600; text-decoration: underline; }
</style>
