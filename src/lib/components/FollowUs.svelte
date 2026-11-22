<script lang="ts">
	import { site } from '$lib/data/site';
	import { track } from '$lib/utils/track';
	let { lang = 'fr' }: { lang?: 'fr' | 'en' } = $props();
	const t = $derived(
		lang === 'en'
			? { k: 'Join the community', h: 'Follow Norbert Digital Service', p: 'Web, AI and automation tips every week, real projects and our latest guides.', f: 'Follow' }
			: { k: 'Rejoignez la communauté', h: 'Suivez Norbert Digital Service', p: 'Chaque semaine : conseils web, IA et automatisation, projets réels et nos derniers guides.', f: 'Suivre' }
	);
	const nets = [
		{ id: 'linkedin', name: 'LinkedIn', href: site.socials.linkedin, color: '#0a66c2', path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.3 21 14.6V21h-4v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8H9z' },
		{ id: 'instagram', name: 'Instagram', href: site.socials.instagram, color: '#d62976', path: 'M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.9-9.1a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 2.2c-2.66 0-3 .01-4.04.06C3.6 2.46 2.46 3.6 2.26 7.96 2.21 9 2.2 9.34 2.2 12s.01 3 .06 4.04c.2 4.36 1.34 5.5 5.7 5.7 1.04.05 1.38.06 4.04.06s3-.01 4.04-.06c4.36-.2 5.5-1.34 5.7-5.7.05-1.04.06-1.38.06-4.04s-.01-3-.06-4.04c-.2-4.36-1.34-5.5-5.7-5.7C15 2.21 14.66 2.2 12 2.2z' },
		{ id: 'tiktok', name: 'TikTok', href: site.socials.tiktok, color: '#111111', path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1.84-.04z' },
		{ id: 'facebook', name: 'Facebook', href: site.socials.facebook, color: '#1877f2', path: 'M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.25-1.5 1.55-1.5h1.65V3.4c-.3-.04-1.27-.12-2.4-.12-2.38 0-4 1.45-4 4.1v2.4H7.6V13h2.7v8z' }
	];
</script>

<aside class="follow" aria-label={t.h}>
	<div class="follow-kicker">{t.k}</div>
	<h2 class="follow-title">{t.h}</h2>
	<p class="follow-text">{t.p}</p>
	<div class="follow-btns">
		{#each nets as n}
			<a href={n.href} target="_blank" rel="noopener" class="follow-btn" style="--c:{n.color}" onclick={() => track('follow_click', { network: n.id })}>
				<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d={n.path} /></svg>
				{t.f} · {n.name}
			</a>
		{/each}
	</div>
</aside>

<style>
	.follow { margin: 3rem auto; max-width: 48rem; padding: 1.75rem 1.5rem; border-radius: 20px; text-align: center; border: 1px solid rgb(var(--accent) / 0.3); background: linear-gradient(135deg, rgb(var(--accent) / 0.1), rgb(var(--accent-2) / 0.06)); }
	.follow-kicker { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: rgb(var(--accent-2)); }
	.follow-title { font-size: 1.5rem; font-weight: 800; margin: 0.35rem 0; color: rgb(var(--ink)); }
	.follow-text { opacity: 0.8; margin: 0 auto 1.2rem; max-width: 34rem; line-height: 1.55; }
	.follow-btns { display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: center; }
	.follow-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.7rem 1.15rem; border-radius: 999px; background: var(--c); color: #fff; font-weight: 700; font-size: 0.92rem; text-decoration: none; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 6px 18px color-mix(in srgb, var(--c) 35%, transparent); }
	.follow-btn:hover { transform: translateY(-2px); }
</style>
