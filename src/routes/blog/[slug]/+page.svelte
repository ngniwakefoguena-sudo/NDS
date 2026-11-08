<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/data/site';
	import type { PageData } from './$types';
	import { ArrowLeft, Calendar, Tag, Clock, FileText } from 'lucide-svelte';

	let { data }: { data: PageData } = $props();

	function formatDate(d: string) {
		return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
	}

	const waMessage = $derived(
		`Salut ! 👋 J'ai lu votre article "${data.post.title}" sur votre site et j'aimerais discuter d'un projet similaire. Êtes-vous disponible pour en parler ?`
	);
	const waLink = $derived(`https://wa.me/33659173774?text=${encodeURIComponent(waMessage)}`);
</script>

<Seo
	title={data.post.title}
	description={data.post.summary}
	image={data.post.cover || undefined}
	type="article"
	publishedTime={data.post.date}
	jsonLd={[
		{
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: data.post.title,
			description: data.post.summary,
			datePublished: data.post.date,
			dateModified: data.post.date,
			inLanguage: 'fr-FR',
			image: data.post.cover ? (data.post.cover.startsWith('http') ? data.post.cover : `${site.url}${data.post.cover}`) : site.ogImage,
			keywords: data.post.tags?.join(', '),
			mainEntityOfPage: `${site.url}/blog/${data.post.slug}`,
			author: { '@id': `${site.url}/#organisation` },
			publisher: { '@id': `${site.url}/#organisation` }
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Accueil', item: `${site.url}/` },
				{ '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` },
				{ '@type': 'ListItem', position: 3, name: data.post.title, item: `${site.url}/blog/${data.post.slug}` }
			]
		}
	]}
/>

<div class="relative min-h-screen pt-32 pb-24 overflow-hidden">
	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none" style="background: radial-gradient(ellipse, rgba(152,200,22,0.14) 0%, transparent 65%);"></div>
	<div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(rgba(152,200,22,0.06) 1px, transparent 1px); background-size: 36px 36px;"></div>

	<div class="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">

		<a href="/blog" class="back-link inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors mb-10 px-4 py-2 rounded-full">
			<ArrowLeft class="w-4 h-4" />
			Retour au blog
		</a>

		<article>
			{#if data.post.cover}
				<div class="w-full h-64 md:h-80 rounded-3xl overflow-hidden mb-8 shadow-lg">
					<img src={data.post.cover} alt={data.post.title} loading="lazy" decoding="async" class="w-full h-full object-cover" />
				</div>
			{/if}

			<!-- Meta : date, tags, temps de lecture -->
			<div class="mb-6 flex flex-wrap gap-3 items-center">
				<div class="meta-pill flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full">
					<Calendar class="w-3.5 h-3.5" />
					{formatDate(data.post.date)}
				</div>
				<div class="meta-pill flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full">
					<Clock class="w-3.5 h-3.5" />
					{data.post.readingTime} min de lecture
				</div>
				{#each (data.post.tags ?? []) as tag}
					<div class="tag-pill flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full">
						<Tag class="w-3 h-3" />
						{tag}
					</div>
				{/each}
			</div>

			<h1 class="text-3xl md:text-4xl font-bold text-ink mb-5 leading-[1.1] tracking-tight">{data.post.title}</h1>
			<p class="text-base text-muted leading-relaxed mb-10 border-l-2 pl-4" style="border-color: rgb(var(--accent));">{data.post.summary}</p>

			<div class="prose-content">
				{@html data.post.html}
			</div>
		</article>

		{#if data.related.length}
			<!-- À lire aussi : maillage interne entre articles -->
			<section class="mt-16" aria-labelledby="related-title">
				<h2 id="related-title" class="text-xl font-bold text-ink mb-6">À lire aussi</h2>
				<div class="grid gap-4 md:grid-cols-3">
					{#each data.related as r (r.slug)}
						<a href="/blog/{r.slug}" class="related-card group block rounded-2xl overflow-hidden">
							{#if r.cover}
								<img src={r.cover} alt="" loading="lazy" class="w-full h-32 object-cover" />
							{/if}
							<div class="p-4">
								<h3 class="text-sm font-semibold text-ink leading-snug group-hover:underline">{r.title}</h3>
							</div>
						</a>
					{/each}
				</div>
				<p class="text-sm text-muted mt-6">
					Besoin d'aide pour passer à l'action ? Découvrez
					{#if data.service}notre offre <a href="/services/{data.service.slug}" class="underline font-semibold text-ink">{data.service.name}</a>{:else}<a href="/services" class="underline font-semibold text-ink">nos services</a>{/if}
					ou <a href="/blog" class="underline font-semibold text-ink">tous nos articles</a>.
				</p>
			</section>
		{/if}

		<!-- CTA Demander un devis -->
		<div class="devis-card rounded-3xl p-8 md:p-10 mt-16 relative overflow-hidden">
			<div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 30% 50%, rgba(152,200,22,0.13) 0%, transparent 65%);"></div>
			<div class="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
				<div class="flex items-start gap-4">
					<div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style="background: linear-gradient(135deg, rgb(152,200,22), rgb(112,160,8)); box-shadow: 0 6px 18px rgba(120,175,10,0.35);">
						<FileText class="w-5 h-5 text-white" />
					</div>
					<div>
						<h2 class="text-lg font-bold text-ink mb-1">Un projet similaire en tête ?</h2>
						<p class="text-sm text-muted leading-relaxed max-w-md">Obtenez une estimation gratuite et personnalisée pour votre projet digital. Réponse sous 24h.</p>
					</div>
				</div>
				<div class="flex flex-col gap-3 shrink-0">
					<a href="/contact" class="btn-devis inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white">
						Demander un devis
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
					</a>
					<a href={waLink} target="_blank" rel="noopener" class="btn-wa inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
						<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
						Discuter sur WhatsApp
					</a>
				</div>
			</div>
		</div>

	</div>
</div>

<style>
	.related-card {
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
	}
	.back-link {
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
	}
	.meta-pill {
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		color: rgb(var(--muted));
	}
	.tag-pill {
		background: rgba(152,200,22,0.10);
		border: 1px solid rgba(152,200,22,0.22);
		color: #8cba12;
	}

	/* Contenu prose */
	.prose-content :global(h2) {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.4rem;
		font-weight: 700;
		color: rgb(var(--ink));
		margin: 2.5rem 0 0.75rem;
		letter-spacing: -0.02em;
	}
	.prose-content :global(h3) {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.1rem;
		font-weight: 700;
		color: rgb(var(--ink));
		margin: 1.8rem 0 0.5rem;
	}
	.prose-content :global(p) {
		color: rgb(var(--muted));
		line-height: 1.8;
		margin-bottom: 1rem;
		font-size: 0.9375rem;
	}
	.prose-content :global(strong) { color: rgb(var(--ink)); }
	.prose-content :global(ul) {
		list-style-type: disc;
		color: rgb(var(--muted));
		padding-left: 1.75rem;
		margin-bottom: 1rem;
		line-height: 1.8;
	}
	.prose-content :global(ol) {
		list-style-type: decimal;
		color: rgb(var(--muted));
		padding-left: 1.75rem;
		margin-bottom: 1rem;
		line-height: 1.8;
	}
	.prose-content :global(ul ul) { list-style-type: circle; margin-bottom: 0; }
	.prose-content :global(ul ul ul) { list-style-type: square; }
	.prose-content :global(li) {
		margin-bottom: 0.4rem;
		padding-left: 0.25rem;
	}
	.prose-content :global(li::marker) {
		color: #98c816;
	}

	/* Images dans les paragraphes */
	.prose-content :global(img) {
		width: 100%;
		border-radius: 1rem;
		margin: 1.5rem 0 0.5rem;
		box-shadow: 0 8px 32px rgba(80,110,20,0.12);
		display: block;
	}
	/* Images cliquables */
	.prose-content :global(a:has(img)) {
		display: block;
		transition: transform 0.2s, box-shadow 0.2s;
	}
	.prose-content :global(a:has(img):hover) {
		transform: translateY(-2px);
	}
	.prose-content :global(a:has(img):hover img) {
		box-shadow: 0 14px 40px rgba(80,110,20,0.18);
	}
	/* Légende sous image (italique après une image) */
	.prose-content :global(p:has(img) + p > em:only-child),
	.prose-content :global(p:has(a > img) + p > em:only-child) {
		display: block;
		text-align: center;
		font-size: 0.8rem;
		color: rgb(var(--muted));
		opacity: 0.75;
		margin-top: -0.25rem;
		margin-bottom: 1.5rem;
		font-style: italic;
	}

	.prose-content :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 1.5rem;
		font-size: 0.875rem;
	}
	.prose-content :global(th) {
		background: rgba(152,200,22,0.08);
		color: rgb(var(--ink));
		font-weight: 600;
		padding: 0.6rem 0.9rem;
		border: 1px solid var(--glass-border);
		text-align: left;
	}
	.prose-content :global(td) {
		color: rgb(var(--muted));
		padding: 0.6rem 0.9rem;
		border: 1px solid var(--glass-border);
	}
	.prose-content :global(code) {
		background: rgba(152,200,22,0.08);
		border: 1px solid rgba(152,200,22,0.20);
		padding: 0.15em 0.4em;
		border-radius: 0.4em;
		font-size: 0.85em;
		color: rgb(var(--ink));
	}
	.prose-content :global(blockquote) {
		border-left: 3px solid rgb(var(--accent));
		padding-left: 1rem;
		margin: 1.5rem 0;
		color: rgb(var(--muted));
		font-style: italic;
	}
	.prose-content :global(a:not(:has(img))) {
		color: #8cba12;
		text-decoration: underline;
		text-decoration-color: rgba(152,200,22,0.4);
		text-underline-offset: 3px;
		transition: text-decoration-color 0.2s;
	}
	.prose-content :global(a:not(:has(img)):hover) {
		text-decoration-color: rgba(152,200,22,0.9);
	}

	/* CTA devis */
	.devis-card {
		background: var(--glass-bg);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(152,200,22,0.22);
		box-shadow: 0 8px 32px rgba(120,175,10,0.10), inset 0 1px 0 rgba(255,255,255,0.8);
	}
	.btn-devis {
		background: linear-gradient(150deg, rgb(175,220,25), rgb(152,200,22), rgb(112,160,8));
		box-shadow: 0 6px 20px rgba(120,175,10,0.40);
		border-top: 1px solid rgba(255,255,255,0.25);
		transition: opacity 0.2s, transform 0.2s;
	}
	.btn-devis:hover { opacity: 0.88; transform: translateY(-1px); }
	.btn-ghost-sm {
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		color: rgb(var(--ink));
		transition: box-shadow 0.2s;
	}
	.btn-ghost-sm:hover { box-shadow: 0 4px 16px rgba(80,110,20,0.12); }
	.btn-wa {
		background: rgba(37,211,102,0.10);
		border: 1px solid rgba(37,211,102,0.28);
		color: #16a34a;
		transition: background 0.2s, transform 0.2s;
	}
	.btn-wa:hover { background: rgba(37,211,102,0.18); transform: translateY(-1px); }
</style>
