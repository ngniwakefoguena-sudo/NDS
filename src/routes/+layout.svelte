<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TopBar from '$lib/components/TopBar.svelte';
	import { site } from '$lib/data/site';
	import { onMount } from 'svelte';
	import { trackContactClicks } from '$utils/track';

	let { children } = $props();

	// Mesure des clics WhatsApp / téléphone / e-mail (conversions dans Google Analytics)
	onMount(() => trackContactClicks());

	// Chaya (assistant) chargé après l'affichage de la page, pour ne pas ralentir le premier rendu
	let ChayaComp: any = $state(null);
	onMount(() => {
		const load = () => import('$lib/components/Chaya.svelte').then((m) => (ChayaComp = m.default));
		if ('requestIdleCallback' in window) (window as any).requestIdleCallback(load, { timeout: 3000 });
		else setTimeout(load, 1500);
	});

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
	<meta name="geo.placename" content="Palaiseau, Île-de-France, France" />
	<meta name="geo.position" content="48.7145;2.2457" />
	<meta name="ICBM" content="48.7145, 2.2457" />

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
			"streetAddress": "4 Rue Maurice Berteaux",
			"addressLocality": "Palaiseau",
			"postalCode": "91120",
			"addressRegion": "Île-de-France",
			"addressCountry": "FR"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "48.7145",
			"longitude": "2.2457"
		},
		"areaServed": [
			{ "@type": "City", "name": "Paris" },
			{ "@type": "City", "name": "Palaiseau" },
			{ "@type": "AdministrativeArea", "name": "Essonne" },
			{ "@type": "AdministrativeArea", "name": "Yvelines" },
			{ "@type": "AdministrativeArea", "name": "Île-de-France" },
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
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vendia : agent commercial WhatsApp", "url": `${site.url}/vendia`, "description": "Chatbot WhatsApp Business qui répond aux clients 24h/24, établit des devis et encaisse les paiements" } },
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
		"openingHoursSpecification": [{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			"opens": "09:00",
			"closes": "18:00"
		}],
		"knowsAbout": [
			"Création de site internet", "Site vitrine", "Site e-commerce", "Refonte de site web",
			"Application mobile iOS et Android", "Flutter", "SvelteKit",
			"Intelligence artificielle pour PME", "Chatbot IA", "Chatbot WhatsApp Business", "RAG", "Agents IA",
			"Automatisation n8n", "Make", "Automatisation des processus",
			"Référencement naturel SEO", "SEO local", "Google Business Profile", "GEO (ChatGPT, Gemini)",
			"Google Ads", "Meta Ads", "Marketing digital multicanal", "Génération de leads B2B et B2C",
			"Data engineering", "Web scraping", "Design UI/UX", "Carte de fidélité digitale"
		],
		"hasMap": "https://www.google.com/maps/search/?api=1&query=Norbert+Digital+Service",
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


<div class="min-h-screen flex flex-col">
	<TopBar />
	<Navbar />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>

{#if ChayaComp}<ChayaComp />{/if}
