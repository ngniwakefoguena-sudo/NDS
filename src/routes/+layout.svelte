<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TopBar from '$lib/components/TopBar.svelte';
	import SplashScreen from '$lib/components/SplashScreen.svelte';
	import { site } from '$lib/data/site';

	let { children } = $props();

	const title = `${site.name} | Agence Web, Mobile & IA`;
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

	<!-- Preload hero image for fast LCP -->
	<link rel="preload" as="image" href="/images/hero-bg.webp" type="image/webp" fetchpriority="high" />

	<!-- SEO de base -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content={site.name} />
	<meta name="robots" content="index, follow" />
	<meta name="keywords" content="Norbert Digital Service, agence digitale Paris, développement web Paris, application mobile, intelligence artificielle, automatisation, carte de fidélité digitale, carte de fidélité dématérialisée, programme fidélité Apple Wallet, carte fidélité Google Wallet, fidélisation client, n8n, Python, Flutter, React, Svelte, SvelteKit, Django, FastAPI, Django REST API, Node.js, TypeScript, IA, LLM, GPT, RAG, data engineering, PostgreSQL, MongoDB, Docker, marketing digital, génération de leads, B2B, B2C, SEO, UI/UX, API, backend, DevOps, France, Île-de-France, agence web Paris, agence mobile Paris" />
	<link rel="canonical" href={page.url.href} />

	<!-- GEO méta tags -->
	<meta name="geo.region" content="FR-IDF" />
	<meta name="geo.placename" content="Paris, France" />
	<meta name="geo.position" content="48.8566;2.3522" />
	<meta name="ICBM" content="48.8566, 2.3522" />

	<!-- Open Graph — partage WhatsApp, LinkedIn, Facebook -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:image" content={site.ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={site.name} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content="fr_FR" />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={site.ogImage} />

	<!-- JSON-LD structured data -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": site.name,
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
		"sameAs": [site.socials.linkedin, site.socials.instagram, site.socials.facebook, site.socials.whatsapp]
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
