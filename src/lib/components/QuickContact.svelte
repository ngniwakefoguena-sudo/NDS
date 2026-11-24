<script lang="ts">
	import { page } from '$app/state';
	import { isEn } from '$lib/i18n';
	import { track } from '$utils/track';

	const en = $derived(isEn(page.url.pathname));
	const onContact = $derived(/\/contact\/?$/.test(page.url.pathname));
	const wa = $derived(
		`https://wa.me/33659173774?text=${encodeURIComponent(
			en ? 'Hello Norbert, I would like a quote for my project.' : 'Bonjour Norbert, je souhaite un devis pour mon projet.'
		)}`
	);
	const quote = $derived(en ? '/en/contact#formulaire' : '/contact#formulaire');
</script>

{#if !onContact}
	<!-- Ordinateur : bouton WhatsApp flottant à gauche (Chaya est à droite) -->
	<a class="wa-float" href={wa} target="_blank" rel="noopener" aria-label="WhatsApp" onclick={() => track('contact_click', { method: 'whatsapp', location: 'floating' })}>
		<svg viewBox="0 0 24 24" width="28" height="28" fill="#fff" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>
	</a>

	<!-- Mobile : barre fixe en bas -->
	<div class="m-bar">
		<a class="m-quote" href={quote} onclick={() => track('cta_click', { location: 'mobile_bar' })}>{en ? 'Free quote' : 'Devis gratuit'}</a>
		<a class="m-wa" href={wa} target="_blank" rel="noopener" onclick={() => track('contact_click', { method: 'whatsapp', location: 'mobile_bar' })}>WhatsApp</a>
	</div>
{/if}

<style>
	.wa-float { position: fixed; left: 1.25rem; bottom: 1.25rem; z-index: 59; width: 56px; height: 56px; border-radius: 50%; background: #25d366; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(37, 211, 102, 0.45); transition: transform 0.15s; }
	.wa-float:hover { transform: scale(1.06); }
	.m-bar { display: none; }
	@media (max-width: 768px) {
		.wa-float { display: none; }
		.m-bar { display: flex; gap: 0.5rem; position: fixed; left: 0; right: 0; bottom: 0; z-index: 58; padding: 0.6rem 5.2rem calc(0.6rem + env(safe-area-inset-bottom)) 0.75rem; background: rgb(var(--bg, 255 255 255) / 0.96); backdrop-filter: blur(8px); border-top: 1px solid rgb(0 0 0 / 0.08); }
		.m-bar a { flex: 1; text-align: center; padding: 0.75rem 0.5rem; border-radius: 999px; font-weight: 700; font-size: 0.92rem; text-decoration: none; }
		.m-quote { background: rgb(var(--night, 17 17 17)); color: #fff; }
		.m-wa { background: #25d366; color: #fff; }
		:global(.chaya) { bottom: 0.7rem !important; }
		:global(body) { padding-bottom: 4.2rem; }
	}
</style>
