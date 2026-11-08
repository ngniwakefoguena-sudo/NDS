<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/data/site';

	interface Props {
		/** Titre de la page (sans le nom du site, il est ajouté automatiquement). Laisser vide pour l'accueil. */
		title?: string;
		description: string;
		/** Image de partage (chemin relatif ou URL absolue). */
		image?: string;
		type?: 'website' | 'article';
		publishedTime?: string;
		noindex?: boolean;
		/** Données structurées supplémentaires propres à la page (schema.org). */
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	}

	let { title, description, image, type = 'website', publishedTime, noindex = false, jsonLd }: Props = $props();

	const absolute = (src: string) => (src.startsWith('http') ? src : `${site.url}${src.startsWith('/') ? '' : '/'}${src}`);

	const fullTitle = $derived(title ? `${title} | ${site.name}` : `${site.name} | Agence Web, Mobile & IA`);
	// URL canonique toujours sur le domaine principal, sans paramètres ni slash final :
	// évite que les copies *.vercel.app / *.netlify.app ou les URLs avec ?utm=… soient vues comme du contenu dupliqué.
	const canonical = $derived(`${site.url}${page.url.pathname === '/' ? '/' : page.url.pathname.replace(/\/$/, '')}`);
	const ogImage = $derived(image ? absolute(image) : site.ogImage);
	const ldJson = $derived(jsonLd ? JSON.stringify(jsonLd).replace(/</g, '\\u003c') : '');
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	{#if noindex}<meta name="robots" content="noindex, follow" />{/if}

	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={title ?? site.name} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content="fr_FR" />
	{#if publishedTime}<meta property="article:published_time" content={publishedTime} />{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	{#if ldJson}{@html `<script type="application/ld+json">${ldJson}</script>`}{/if}
</svelte:head>
