<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/data/site';
	import { ArrowRight, Check, Globe, Smartphone, Bot, Workflow, Search, Palette, MapPin } from 'lucide-svelte';

	const services = [
		{ icon: Globe, title: 'Création de site internet', text: 'Site vitrine, e-commerce ou application web, multilingue si besoin, hébergé sur un réseau mondial pour être rapide dans tous les pays.', href: '/services/creation-site-web' },
		{ icon: Smartphone, title: 'Application mobile', text: 'Applications iOS et Android publiées sur l’App Store et Google Play, disponibles dans le monde entier.', href: '/services/application-mobile' },
		{ icon: Search, title: 'SEO international', text: 'Référencement sur Google dans plusieurs pays et langues, et visibilité dans ChatGPT, Gemini et Perplexity (GEO).', href: '/services/marketing-digital-seo' },
		{ icon: Bot, title: 'Intelligence artificielle', text: 'Chatbots et agents IA multilingues, connectés à vos documents, à votre CRM et à vos outils.', href: '/services/intelligence-artificielle' },
		{ icon: Workflow, title: 'Automatisation n8n', text: 'Vos processus automatisés, quels que soient vos fuseaux horaires et vos outils.', href: '/services/automatisation-n8n' },
		{ icon: Palette, title: 'Design UI/UX', text: 'Des interfaces claires et modernes, adaptées à vos marchés et à vos clients.', href: '/services/design-ui-ux' },
	];

	const regions = [
		{ name: 'Europe francophone', countries: 'France (Paris, Lyon, Marseille, Lille, Bordeaux, Toulouse, Nantes), Belgique (Bruxelles, Liège), Suisse (Genève, Lausanne), Luxembourg, Monaco' },
		{ name: 'Amérique du Nord', countries: 'Canada et Québec (Montréal, Québec, Ottawa, Toronto), États-Unis (New York, Washington, Houston), Haïti' },
		{ name: 'Afrique', countries: 'Cameroun, Côte d’Ivoire, Sénégal, Gabon, Congo, RD Congo, Bénin, Togo, Mali, Burkina Faso, Maroc, Tunisie, Algérie et toute l’Afrique' },
		{ name: 'Outre-mer et reste du monde', countries: 'Guadeloupe, Martinique, Guyane, La Réunion, Mayotte, Nouvelle-Calédonie, Polynésie, Royaume-Uni, Allemagne, Espagne, Moyen-Orient (Dubaï)' },
	];

	const reasons = [
		'Travail 100 % à distance, en français et en anglais',
		'Échanges par visio, WhatsApp et e-mail, adaptés à votre fuseau horaire',
		'Sites hébergés sur un réseau mondial (CDN) : rapides en Europe, en Afrique comme en Amérique',
		'Sites multilingues et SEO international pour viser plusieurs pays',
		'Devis gratuit sous 24h, en euros, dollars ou francs CFA',
		'Accompagnement des entrepreneurs de la diaspora qui visent plusieurs marchés',
	];

	const faqs = [
		{ q: 'Travaillez-vous avec des clients hors de France ?', a: 'Oui. Norbert Digital Service est une agence web internationale qui travaille entièrement à distance avec des entreprises en Europe, en Afrique, au Canada, aux États-Unis, en outre-mer et ailleurs.' },
		{ q: 'Pouvez-vous créer un site en plusieurs langues ?', a: 'Oui. Nous créons des sites multilingues (français, anglais et autres langues) avec une structure adaptée au référencement international, pour que chaque version soit trouvée sur Google dans le bon pays.' },
		{ q: 'Comment se passe un projet à distance ?', a: 'Un premier appel en visio ou sur WhatsApp pour comprendre votre besoin, puis un devis sous 24h. Pendant le projet, vous suivez l’avancement sur une version en ligne et nous faisons des points réguliers.' },
		{ q: 'Dans quelle devise puis-je payer ?', a: 'Le devis peut être établi en euros, en dollars ou en francs CFA, avec un paiement par virement ou par carte selon votre pays.' },
		{ q: 'Je fais partie de la diaspora et je veux lancer un projet en Afrique : pouvez-vous m’aider ?', a: 'Oui, c’est un accompagnement que nous connaissons bien : un site et des outils pensés à la fois pour vos clients en Afrique (mobile, WhatsApp, Mobile Money) et pour vos partenaires en Europe ou en Amérique du Nord.' },
	];

	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: 'Agence web internationale : création de site internet, application mobile, SEO et IA à distance',
			serviceType: 'Agence web',
			provider: { '@type': 'Organization', name: site.name, url: site.url },
			areaServed: ['Monde entier', 'France', 'Belgique', 'Suisse', 'Luxembourg', 'Canada', 'États-Unis', 'Afrique', 'Royaume-Uni', 'Outre-mer'].map((name) => ({ '@type': 'Place', name })),
			availableLanguage: ['French', 'English'],
			url: `${site.url}/agence-web-international`,
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
				{ '@type': 'ListItem', position: 3, name: 'International', item: `${site.url}/agence-web-international` },
			],
		},
	];
</script>

<Seo
	title="Agence web internationale : site internet et IA à distance"
	description="Agence web internationale : création de site internet multilingue, application mobile, SEO international, chatbot IA et automatisation, à distance, pour la France, la Belgique, la Suisse, le Canada, les États-Unis, l’Afrique et l’outre-mer. Devis gratuit sous 24h."
	{jsonLd}
/>

<section class="hero">
	<div class="glow" aria-hidden="true"></div>
	<div class="wrap">
		<span class="kicker">Agence web · International · À distance</span>
		<h1 class="title">Une agence web internationale, <span class="hl">où que vous soyez</span></h1>
		<p class="lead">
			Création de site internet, application mobile, référencement international et intelligence artificielle pour les
			entreprises en France, en Europe, au Canada, aux États-Unis, en Afrique et en outre-mer. Un accompagnement
			entièrement à distance, en français et en anglais.
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
			<h2 class="h2">Création de site web et marketing digital à l’international</h2>
			<p class="sub">Les mêmes services que pour nos clients en France, pensés pour des marchés et des langues différents.</p>
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
			<span class="kicker">Travailler à distance</span>
			<h2 class="h2">Un projet suivi de près, même à des milliers de kilomètres</h2>
			<p class="sub">La distance ne change rien à la qualité du suivi : un interlocuteur unique, des points réguliers et une version en ligne pour suivre l’avancement.</p>
		</div>
		<ul class="checks">
			{#each reasons as r}
				<li><Check size={18} /> {r}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="sec">
	<div class="wrap">
		<div class="sec-head">
			<span class="kicker">Pays et régions</span>
			<h2 class="h2">Nous créons votre site internet dans le monde entier</h2>
		</div>
		<div class="regions">
			{#each regions as r}
				<div class="region">
					<h3><MapPin size={18} /> {r.name}</h3>
					<p>{r.countries}</p>
				</div>
			{/each}
		</div>
		<p class="sub" style="margin-top:2rem">Votre entreprise est en Afrique ? Découvrez notre <a href="/agence-web-afrique" class="link">agence web pour l’Afrique</a> : Mobile Money, WhatsApp et sites légers.</p>
	</div>
</section>

<section class="sec mist">
	<div class="wrap">
		<div class="sec-head">
			<span class="kicker">Questions fréquentes</span>
			<h2 class="h2">Travailler avec une agence web à distance</h2>
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
		<h2 class="h2 light">Un projet de site internet, d’application ou d’IA, où que vous soyez ?</h2>
		<p class="sub light">Parlez-nous de votre projet : réponse et devis gratuit sous 24h.</p>
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
	.regions { display: grid; gap: 1.25rem; }
	@media (min-width: 768px) { .regions { grid-template-columns: repeat(2, 1fr); } }
	.region { padding: 1.5rem; border-radius: 1.25rem; background: rgb(var(--mist)); border: 1px solid rgb(var(--line) / 0.08); }
	.region h3 { display: flex; align-items: center; gap: 0.5rem; margin: 0 0 0.6rem; font-size: 1.15rem; color: rgb(var(--ink)); }
	.region h3 :global(svg) { color: rgb(var(--accent-2)); }
	.region p { margin: 0; color: rgb(var(--muted)); line-height: 1.7; }
	.link { color: rgb(var(--accent-2)); font-weight: 600; text-decoration: underline; }
</style>
