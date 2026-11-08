<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TopBar from '$lib/components/TopBar.svelte';
	import SplashScreen from '$lib/components/SplashScreen.svelte';
	import Chaya from '$lib/components/Chaya.svelte';
	import { site } from '$lib/data/site';

	let { children } = $props();

	const description = site.description;
</script>

<svelte:head>
	<!-- Netlify Identity chargé conditionnellement pour la performance -->
	<script>
		if (window.location.hash.includes('_token=')) {
			var script = document.createElement('script');
			script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
			document.head.appendChild(script);
		}
	</script>

	<!-- Favicon -->
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
	<link rel="shortcut icon" href="/favicon.png" />

	<!-- SEO de base : titre, description, canonical et Open Graph sont gérés page par page par <Seo /> -->
	<meta name="author" content={site.name} />

	<!-- GEO méta tags -->
	<meta name="geo.region" content="FR-IDF" />
	<meta name="geo.placename" content="Paris, France" />
	<meta name="geo.position" content="48.8566;2.3522" />
	<meta name="ICBM" content="48.8566, 2.3522" />

	<!-- JSON-LD structured data -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"@id": `${site.url}/#organisation`,
		"name": site.name,
		"alternateName": ["NDS", "Norbert Digital Services"],
		"url": site.url,
		"email": site.email,
		"telephone": site.phone,
		"logo": `${site.url}/images/logo.jpg`,
		"image": site.ogImage,
		"description": description,
		"priceRange": "€€",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Paris",
			"addressRegion": "Île-de-France",
			"addressCountry": "FR"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "48.8566",
			"longitude": "2.3522"
		},
		"areaServed": [
			{ "@type": "Country", "name": "France" },
			{ "@type": "Country", "name": "Belgique" },
			{ "@type": "Country", "name": "Suisse" },
			{ "@type": "Country", "name": "Luxembourg" },
			{ "@type": "Country", "name": "Maroc" },
			{ "@type": "Country", "name": "Sénégal" },
			{ "@type": "Country", "name": "Côte d'Ivoire" },
			{ "@type": "Country", "name": "Cameroun" },
			{ "@type": "Country", "name": "Gabon" },
			{ "@type": "Country", "name": "Congo" }
		],
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Services digitaux",
			"itemListElement": [
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Développement Web", "description": "Création de sites et applications web sur mesure avec Svelte, SvelteKit, Django, FastAPI" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Application Mobile", "description": "Développement d'applications iOS et Android avec Flutter" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intelligence Artificielle", "description": "Intégration IA, LLM, RAG, GPT pour automatiser et augmenter vos processus métier" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation n8n", "description": "Automatisation de workflows avec n8n, Python et des APIs tierces" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Engineering", "description": "Pipelines de données, PostgreSQL, MongoDB, traitement et visualisation" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Digital & Génération de Leads B2B B2C", "description": "Stratégies de génération de leads, SEO, campagnes digitales" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Design UI/UX", "description": "Conception d'interfaces modernes et expériences utilisateur optimisées" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carte de fidélité digitale", "description": "Création de cartes de fidélité dématérialisées Apple Wallet et Google Wallet pour fidéliser vos clients" } }
			]
		},
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": site.phone,
			"contactType": "customer service",
			"areaServed": "FR",
			"availableLanguage": ["French", "English"]
		},
		"sameAs": [site.socials.linkedin, site.socials.instagram, site.socials.facebook]
	})}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${site.url}/#site`,
		"name": site.name,
		"alternateName": "NDS",
		"url": site.url,
		"inLanguage": "fr-FR",
		"publisher": { "@id": `${site.url}/#organisation` }
	})}</script>`}
</svelte:head>

<SplashScreen />

<div class="min-h-screen flex flex-col">
	<TopBar />
	<Navbar />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>

<Chaya />
