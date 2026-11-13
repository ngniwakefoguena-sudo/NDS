<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/data/site';
	import { ArrowRight, Check, Globe, Smartphone, Bot, Workflow, Search, Palette } from 'lucide-svelte';

	const services = [
		{ icon: Globe, title: 'Création de site internet', text: 'Site vitrine, site e-commerce, landing page ou refonte : un site rapide, beau et pensé pour être trouvé sur Google.', href: '/services/creation-site-web' },
		{ icon: Smartphone, title: 'Création d’application mobile', text: 'Applications iOS et Android sur mesure, de la maquette à la publication sur l’App Store et Google Play.', href: '/services/application-mobile' },
		{ icon: Search, title: 'Référencement SEO et marketing digital', text: 'Audit SEO, contenus, fiche Google Business, publicité en ligne : plus de visites et plus de demandes de devis.', href: '/services/marketing-digital-seo' },
		{ icon: Bot, title: 'Chatbot et intelligence artificielle', text: 'Assistant IA sur votre site ou sur WhatsApp, qui répond à vos clients 24h/24 et qualifie vos prospects.', href: '/services/intelligence-artificielle' },
		{ icon: Workflow, title: 'Automatisation', text: 'Devis, factures, relances, CRM : vos tâches répétitives tournent seules grâce à n8n et à l’IA.', href: '/services/automatisation-n8n' },
		{ icon: Palette, title: 'Design UI/UX', text: 'Maquettes claires et modernes, une identité cohérente et une navigation qui guide vers le contact.', href: '/services/design-ui-ux' },
	];

	const reasons = [
		'Un seul interlocuteur pour le site, l’application, le SEO et l’IA',
		'Des sites rapides, notés 90+ sur PageSpeed, et optimisés pour Google',
		'Travail 100 % à distance, en français, pour la France, l’Afrique et le monde entier',
		'Devis gratuit et détaillé sous 24h, sans engagement',
		'Accompagnement après la mise en ligne : suivi, mises à jour, conseils',
		'Des outils modernes (SvelteKit, IA, automatisation) adaptés aux TPE et PME',
	];

	const zones = [
		'France et Île-de-France (Paris, Palaiseau, Essonne, Yvelines)',
		'Afrique francophone et anglophone (Cameroun, Côte d’Ivoire, Sénégal, Gabon, Congo, RD Congo, Bénin, Togo, Mali, Burkina Faso, Maroc, Nigeria, Ghana…)',
		'Belgique, Suisse et Luxembourg',
		'Canada, Québec, États-Unis et outre-mer (Antilles, Réunion, Guyane)',
		'Partout dans le monde, à distance',
	];

	const faqs = [
		{ q: 'Qu’est-ce qu’une agence web ?', a: 'Une agence web conçoit et développe la présence en ligne d’une entreprise : création de site internet, application mobile, référencement sur Google, marketing digital et, de plus en plus, intégration de l’intelligence artificielle. Norbert Digital Service réunit tous ces métiers dans une même agence digitale.' },
		{ q: 'Combien coûte la création d’un site internet avec une agence web ?', a: 'Le prix dépend du type de site (vitrine, e-commerce, sur mesure), du nombre de pages et des fonctionnalités. Après un premier échange gratuit, vous recevez un devis détaillé sous 24h, sans surprise.' },
		{ q: 'Pouvez-vous créer mon site si je ne suis pas en France ?', a: 'Oui. Nous travaillons entièrement à distance, par visio, WhatsApp et e-mail. Nous accompagnons des entreprises en France, en Afrique francophone, en Belgique, en Suisse, au Canada et ailleurs.' },
		{ q: 'Combien de temps faut-il pour créer un site web ?', a: 'Comptez en général 2 à 4 semaines pour un site vitrine et plus pour un site e-commerce ou une application, selon le contenu et les fonctionnalités. Le planning est fixé ensemble dès le départ.' },
		{ q: 'Mon site sera-t-il bien référencé sur Google ?', a: 'Chaque site est livré avec les bases du référencement naturel : pages rapides, balises optimisées, plan du site, données structurées et inscription à la Search Console. Nous proposons aussi un accompagnement SEO pour gagner des positions dans la durée.' },
		{ q: 'Quelle différence entre une agence web, une agence digitale et une agence de communication ?', a: 'Une agence web est centrée sur la création de sites et d’applications. Une agence digitale couvre en plus le marketing en ligne, les réseaux sociaux et la publicité. Une agence de communication travaille surtout l’image et les messages. Norbert Digital Service est une agence web et digitale : nous créons vos outils et nous les rendons visibles.' },
	];

	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: 'Agence web et digitale : création de site internet, application mobile, SEO et IA',
			serviceType: 'Agence web',
			provider: { '@type': 'Organization', name: site.name, url: site.url },
			areaServed: ['Monde entier', 'France', 'Afrique', 'Belgique', 'Suisse', 'Canada'],
			url: `${site.url}/agence-web`,
		},
		{
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Accueil', item: `${site.url}/` },
				{ '@type': 'ListItem', position: 2, name: 'Agence web', item: `${site.url}/agence-web` },
			],
		},
	];
</script>

<Seo
	title="Agence web et digitale : création de site internet, application et SEO"
	description="Agence web et agence digitale : création de site internet, site e-commerce, application mobile, référencement SEO, chatbot IA et automatisation. En France, en Afrique et partout dans le monde, à distance. Devis gratuit sous 24h."
	{jsonLd}
/>

<section class="hero">
	<div class="glow" aria-hidden="true"></div>
	<div class="wrap">
		<span class="kicker">Agence web · Agence digitale · Monde entier</span>
		<h1 class="title">Agence web pour <span class="hl">créer et faire connaître</span> votre entreprise en ligne</h1>
		<p class="lead">
			Norbert Digital Service est une agence web et digitale qui crée des sites internet, des applications mobiles et des
			assistants IA, puis les rend visibles sur Google. Nous accompagnons les indépendants, TPE, PME et startups en France,
			en Afrique et dans le monde entier, entièrement à distance.
		</p>
		<div class="ctas">
			<a href="/contact" class="btn-lime">Demander un devis gratuit <ArrowRight size={18} /></a>
			<a href="/projects" class="btn-line">Voir nos réalisations</a>
		</div>
	</div>
</section>

<section class="sec">
	<div class="wrap">
		<div class="sec-head">
			<span class="kicker">Nos services</span>
			<h2 class="h2">Tout ce qu’une agence web doit savoir faire, au même endroit</h2>
			<p class="sub">
				De la création de site web au référencement naturel, en passant par l’application mobile et l’intelligence
				artificielle : un seul partenaire pour toute votre présence digitale.
			</p>
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

<section class="sec mist">
	<div class="wrap two">
		<div>
			<span class="kicker">Pourquoi nous choisir</span>
			<h2 class="h2">Une agence de création de site internet qui pense résultats</h2>
			<p class="sub">
				Un beau site ne suffit pas : il doit être rapide, trouvé sur Google et transformer les visiteurs en clients. C’est
				ce qui guide chaque projet, du premier échange jusqu’au suivi après la mise en ligne.
			</p>
		</div>
		<ul class="checks">
			{#each reasons as r}
				<li><Check size={18} /> {r}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="sec">
	<div class="wrap two">
		<div>
			<span class="kicker">Agence web en ligne</span>
			<h2 class="h2">Où que vous soyez, nous créons votre site</h2>
			<p class="sub">
				Agence web basée en Île-de-France, nous travaillons à distance avec des clients dans de nombreux pays. Les échanges
				se font en visio, sur WhatsApp et par e-mail, avec un suivi clair à chaque étape. Voir aussi notre
				<a href="/agence-web-afrique" style="color:rgb(var(--accent-2));font-weight:600;text-decoration:underline">agence web en Afrique</a> et notre
				<a href="/agence-web-international" style="color:rgb(var(--accent-2));font-weight:600;text-decoration:underline">agence web internationale</a>.
			</p>
		</div>
		<ul class="checks">
			{#each zones as z}
				<li><Globe size={18} /> {z}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="sec mist">
	<div class="wrap">
		<div class="sec-head">
			<span class="kicker">Questions fréquentes</span>
			<h2 class="h2">Tout savoir avant de choisir votre agence web</h2>
		</div>
		<div class="faq">
			{#each faqs as f}
				<details>
					<summary>{f.q}</summary>
					<p>{f.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

<section class="sec cta">
	<div class="wrap center">
		<h2 class="h2 light">Un projet de site internet, d’application ou d’IA ?</h2>
		<p class="sub light">Parlez-nous de votre projet : vous recevez une réponse et un devis gratuit sous 24h.</p>
		<div class="ctas center">
			<a href="/contact" class="btn-lime">Demander un devis gratuit <ArrowRight size={18} /></a>
			<a href="/blog" class="btn-line light">Lire nos conseils</a>
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
</style>
