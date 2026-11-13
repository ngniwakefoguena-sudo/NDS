<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/data/site';
	import { ArrowRight, Check, Globe, Smartphone, Bot, Workflow, Search, MessageCircle, MapPin } from 'lucide-svelte';

	const services = [
		{ icon: Globe, title: 'Création de site internet en Afrique', text: 'Site vitrine, site e-commerce ou plateforme sur mesure, léger et rapide même sur une connexion 3G ou 4G limitée.', href: '/services/creation-site-web' },
		{ icon: Smartphone, title: 'Application mobile Android et iOS', text: 'Des applications pensées pour les smartphones Android majoritaires en Afrique, avec un mode hors ligne quand c’est utile.', href: '/services/application-mobile' },
		{ icon: MessageCircle, title: 'Chatbot WhatsApp Business', text: 'Vos clients écrivent sur WhatsApp : un assistant répond 24h/24, prend les commandes et encaisse par Mobile Money avec Vendia.', href: '/vendia' },
		{ icon: Search, title: 'Référencement Google et réseaux sociaux', text: 'Fiche Google Business, SEO local à Douala, Abidjan ou Dakar, campagnes Facebook, Instagram et TikTok.', href: '/services/marketing-digital-seo' },
		{ icon: Bot, title: 'Intelligence artificielle', text: 'Assistants IA en français et en anglais, connectés à vos documents et à vos outils, pour servir plus de clients sans recruter.', href: '/services/intelligence-artificielle' },
		{ icon: Workflow, title: 'Automatisation et gestion', text: 'Devis, factures, relances et suivi des ventes automatisés avec n8n : moins de saisie, plus de temps pour vendre.', href: '/services/automatisation-n8n' },
	];

	const regions = [
		{ name: 'Afrique centrale', countries: 'Cameroun (Douala, Yaoundé, Bafoussam), Gabon (Libreville, Port-Gentil), Congo-Brazzaville (Brazzaville, Pointe-Noire), RD Congo (Kinshasa, Lubumbashi), Tchad (N’Djamena), Centrafrique (Bangui), Guinée équatoriale (Malabo)' },
		{ name: 'Afrique de l’Ouest', countries: 'Côte d’Ivoire (Abidjan, Yamoussoukro, Bouaké), Sénégal (Dakar, Thiès), Mali (Bamako), Burkina Faso (Ouagadougou), Bénin (Cotonou), Togo (Lomé), Niger (Niamey), Guinée (Conakry), Mauritanie (Nouakchott), Nigeria (Lagos, Abuja), Ghana (Accra)' },
		{ name: 'Afrique du Nord', countries: 'Maroc (Casablanca, Rabat, Marrakech), Algérie (Alger, Oran), Tunisie (Tunis, Sfax), Égypte (Le Caire)' },
		{ name: 'Afrique de l’Est et australe', countries: 'Rwanda (Kigali), Burundi (Bujumbura), Kenya (Nairobi), Madagascar (Antananarivo), Maurice (Port-Louis), Djibouti, Comores, Afrique du Sud (Johannesburg, Le Cap)' },
	];

	const reasons = [
		'Une équipe qui connaît les réalités du marché africain : usages mobiles, WhatsApp, paiement Mobile Money',
		'Paiement en ligne intégré : Orange Money, MTN MoMo, Moov Money, Wave, Airtel Money et carte bancaire',
		'Sites ultra-légers et rapides, adaptés aux connexions mobiles et aux forfaits data',
		'Travail 100 % à distance, en français et en anglais, par WhatsApp, visio et e-mail',
		'Devis gratuit sous 24h, en euros ou en francs CFA (FCFA)',
		'Un seul partenaire pour le site, l’application, le référencement et l’IA',
	];

	const faqs = [
		{ q: 'Pouvez-vous créer mon site internet si mon entreprise est en Afrique ?', a: 'Oui. Norbert Digital Service accompagne à distance des entreprises au Cameroun, en Côte d’Ivoire, au Sénégal, au Gabon, au Congo, au Bénin, au Togo, au Maroc et dans le reste de l’Afrique. Tout se fait par WhatsApp, visio et e-mail, avec un suivi à chaque étape.' },
		{ q: 'Combien coûte la création d’un site web en Afrique ?', a: 'Le prix dépend du type de site (vitrine, e-commerce, plateforme), du nombre de pages et des fonctionnalités, par exemple le paiement Mobile Money. Après un premier échange gratuit, vous recevez un devis détaillé sous 24h, en euros ou en FCFA.' },
		{ q: 'Mon site peut-il accepter Orange Money, MTN Mobile Money ou Wave ?', a: 'Oui. Nous intégrons les paiements Mobile Money via des agrégateurs comme CinetPay, Flutterwave ou PayDunya, en plus de la carte bancaire. Vos clients paient directement sur votre site ou sur WhatsApp.' },
		{ q: 'Mon site sera-t-il visible sur Google dans mon pays ?', a: 'Chaque site est optimisé pour le référencement naturel et le SEO local : ville et pays dans les pages, fiche Google Business, données structurées et inscription à la Search Console. Vos clients vous trouvent quand ils cherchent votre activité à Douala, Abidjan, Dakar ou ailleurs.' },
		{ q: 'Faut-il un nom de domaine en .cm, .ci ou .sn ?', a: 'Ce n’est pas obligatoire, mais une extension locale peut renforcer la confiance et le référencement dans votre pays. Nous vous conseillons entre une extension locale et un .com selon vos marchés.' },
		{ q: 'Cherchez-vous une agence web au Cameroun, à Douala ou à Yaoundé ?', a: 'Norbert Digital Service accompagne les entreprises camerounaises comme une agence digitale à Douala ou à Yaoundé : création de site internet, application mobile, référencement Google, marketing digital, community management et chatbot WhatsApp. Une agence de communication et de marketing digital qui connaît le Cameroun, avec un suivi à distance par WhatsApp.' },
		{ q: 'Créez-vous des sites web en Côte d’Ivoire et à Abidjan ?', a: 'Oui. Pour la création de site web en Côte d’Ivoire, nous travaillons avec des entreprises d’Abidjan, de Yamoussoukro et de Bouaké : site vitrine, site e-commerce avec paiement Orange Money, MTN et Wave, application mobile et référencement local.' },
		{ q: 'Êtes-vous une agence web à Dakar et au Sénégal ?', a: 'Oui. Nous accompagnons les entreprises de Dakar et du Sénégal comme une agence de communication digitale : création de site internet, publicité Facebook et Instagram, SEO et automatisation, avec paiement Wave et Orange Money intégré.' },
		{ q: 'Travaillez-vous au Maroc, en Tunisie et en Algérie ?', a: 'Oui. Nous intervenons comme agence digitale et agence marketing digital pour le Maroc (Casablanca, Rabat, Marrakech, Tanger), la Tunisie et l’Algérie : création de site e-commerce, site vitrine, SEO et publicité en ligne.' },
		{ q: 'Pouvez-vous créer un site au Gabon, au Congo, au Bénin ou au Togo ?', a: 'Oui : Libreville, Brazzaville, Pointe-Noire, Kinshasa, Cotonou, Lomé, Bamako, Ouagadougou ou Conakry, nous créons votre site internet professionnel et vos outils digitaux à distance, avec un devis en FCFA.' },
		{ q: 'Travaillez-vous aussi avec la diaspora africaine ?', a: 'Oui. Nous accompagnons des entrepreneurs de la diaspora en France, en Belgique, au Canada et ailleurs qui lancent ou développent une activité en Afrique, avec un site et des outils pensés pour les deux marchés.' },
	];

	const africaCountries = ['Cameroun', 'Côte d’Ivoire', 'Sénégal', 'Gabon', 'République du Congo', 'République démocratique du Congo', 'Bénin', 'Togo', 'Mali', 'Burkina Faso', 'Niger', 'Guinée', 'Tchad', 'Centrafrique', 'Guinée équatoriale', 'Mauritanie', 'Maroc', 'Algérie', 'Tunisie', 'Égypte', 'Nigeria', 'Ghana', 'Rwanda', 'Burundi', 'Kenya', 'Madagascar', 'Maurice', 'Djibouti', 'Comores', 'Afrique du Sud'];

	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: 'Agence web en Afrique : création de site internet, application mobile, SEO et IA',
			serviceType: 'Agence web',
			provider: { '@type': 'Organization', name: site.name, url: site.url },
			areaServed: [{ '@type': 'Place', name: 'Afrique' }, ...africaCountries.map((name) => ({ '@type': 'Country', name }))],
			url: `${site.url}/agence-web-afrique`,
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
				{ '@type': 'ListItem', position: 3, name: 'Afrique', item: `${site.url}/agence-web-afrique` },
			],
		},
	];
</script>

<Seo
	title="Agence web Afrique : Cameroun, Côte d’Ivoire, Sénégal, Maroc"
	description="Agence web pour l’Afrique : création de site internet, application mobile, chatbot WhatsApp et SEO au Cameroun, en Côte d’Ivoire, au Sénégal, au Gabon, au Congo, au Bénin, au Togo, au Maroc… Paiement Mobile Money intégré. Devis gratuit sous 24h."
	{jsonLd}
/>

<section class="hero">
	<div class="glow" aria-hidden="true"></div>
	<div class="wrap">
		<span class="kicker">Agence web · Afrique francophone et anglophone</span>
		<h1 class="title">Agence web en Afrique pour <span class="hl">créer et développer</span> votre entreprise en ligne</h1>
		<p class="lead">
			Création de site internet, application mobile, chatbot WhatsApp, référencement Google et intelligence artificielle
			pour les entreprises du Cameroun, de Côte d’Ivoire, du Sénégal, du Gabon, du Congo et de toute l’Afrique. Des outils
			pensés pour les usages africains : mobile d’abord, WhatsApp et paiement Mobile Money.
		</p>
		<div class="ctas">
			<a href="/contact" class="btn-lime">Demander un devis gratuit <ArrowRight size={18} /></a>
			<a href={`https://wa.me/237659324756?text=${encodeURIComponent('Bonjour, je souhaite un devis pour un projet digital en Afrique.')}`} target="_blank" rel="noopener" class="btn-line">Écrire sur WhatsApp</a>
		</div>
	</div>
</section>

<section class="sec">
	<div class="wrap">
		<div class="sec-head">
			<span class="kicker">Nos services en Afrique</span>
			<h2 class="h2">Création de site web, application et marketing digital pour l’Afrique</h2>
			<p class="sub">
				Que vous soyez une PME à Douala, une boutique à Abidjan, une startup à Dakar ou une ONG à Kinshasa, nous créons les
				outils qui vous rendent visible et vous font gagner des clients. Agence web, agence digitale et agence de
				communication digitale à la fois : site internet, marketing digital, community management et publicité Facebook.
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
			<h2 class="h2">Une agence digitale qui comprend le marché africain</h2>
			<p class="sub">
				En Afrique, vos clients sont sur leur téléphone, écrivent sur WhatsApp et paient par Mobile Money. Nos sites et
				applications sont conçus pour ces usages, sans fonctions inutiles ni pages lourdes.
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
	<div class="wrap">
		<div class="sec-head">
			<span class="kicker">Pays et villes</span>
			<h2 class="h2">Nous créons votre site internet partout en Afrique</h2>
			<p class="sub">Un accompagnement entièrement à distance, en français ou en anglais, quel que soit votre pays.</p>
		</div>
		<div class="regions">
			{#each regions as r}
				<div class="region">
					<h3><MapPin size={18} /> {r.name}</h3>
					<p>{r.countries}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="sec mist">
	<div class="wrap">
		<div class="sec-head">
			<span class="kicker">Questions fréquentes</span>
			<h2 class="h2">Créer son site web en Afrique : vos questions</h2>
		</div>
		<div class="faq">
			{#each faqs as f}
				<details>
					<summary>{f.q}</summary>
					<p>{f.a}</p>
				</details>
			{/each}
		</div>
		<p class="sub" style="margin-top:2rem">Vous êtes en Europe, au Canada ou ailleurs ? Découvrez notre <a href="/agence-web-international" class="link">agence web internationale</a>.</p>
	</div>
</section>

<section class="sec cta">
	<div class="wrap center">
		<h2 class="h2 light">Un projet digital au Cameroun, en Côte d’Ivoire, au Sénégal ou ailleurs en Afrique ?</h2>
		<p class="sub light">Parlez-nous de votre projet : réponse et devis gratuit sous 24h, en euros ou en FCFA.</p>
		<div class="ctas center">
			<a href="/contact" class="btn-lime">Demander un devis gratuit <ArrowRight size={18} /></a>
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
