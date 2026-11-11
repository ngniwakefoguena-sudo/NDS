<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { fly, fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { X, Send, Sparkles, MessageCircle, RotateCcw } from 'lucide-svelte';
	import { servicePages } from '$lib/data/services';
	import { track } from '$utils/track';

	type Msg = { role: 'user' | 'assistant'; content: string };

	const WHATSAPP = 'https://wa.me/33659173774';
	const STORE = 'chaya-conversation';
	const greeting: Msg = {
		role: 'assistant',
		content:
			"Bonjour, je suis **Chaya**, l'assistante de Norbert Digital Service. Parlez-moi de votre projet : site web, application, IA, automatisation… Je vous oriente en quelques secondes."
	};
	const suggestions = [
		'Je veux créer un site web',
		'Automatiser mes tâches répétitives',
		'Intégrer l’IA dans mon entreprise',
		'Combien coûte un projet ?'
	];

	let open = $state(false);
	let teaser = $state(false);
	let messages = $state<Msg[]>([greeting]);
	let input = $state('');
	let loading = $state(false);
	let list = $state<HTMLElement>();
	let field = $state<HTMLTextAreaElement>();

	onMount(() => {
		try {
			const saved = sessionStorage.getItem(STORE);
			if (saved) messages = JSON.parse(saved);
			leadSent = sessionStorage.getItem('chaya-lead') === '1';
		} catch { /* stockage indisponible : on garde la conversation en mémoire */ }

		// Petite bulle d'invitation après quelques secondes (une fois par visite)
		let shown = false;
		try { shown = sessionStorage.getItem('chaya-teaser') === '1'; } catch {}
		const t = setTimeout(() => {
			// sur téléphone, pas de bulle : elle masquerait le contenu
			if (!open && !shown && window.innerWidth >= 640) teaser = true;
		}, 6000);
		const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) toggle(); };
		window.addEventListener('keydown', onKey);
		return () => { clearTimeout(t); window.removeEventListener('keydown', onKey); };
	});

	function save() {
		try { sessionStorage.setItem(STORE, JSON.stringify(messages.slice(-30))); } catch {}
	}

	async function toggle() {
		open = !open;
		if (open) track('chaya_open');
		teaser = false;
		try { sessionStorage.setItem('chaya-teaser', '1'); } catch {}
		if (open) {
			await tick();
			scrollDown();
			field?.focus();
		}
	}

	function scrollDown() {
		if (list) list.scrollTo({ top: list.scrollHeight, behavior: 'smooth' });
	}

	/* Repère la ligne <<LEAD {...}>> que Chaya ajoute quand le visiteur laisse ses coordonnées */
	const LEAD = /<<LEAD\s*(\{[\s\S]*?\})\s*>>/;
	const visible = (t: string) => t.replace(/<<LEAD[\s\S]*$/, '').trimEnd();
	let leadSent = false;

	/* Transmet la demande à l'équipe via le formulaire « contact » de Netlify (mêmes champs que /contact) */
	async function sendLead(raw: string) {
		if (leadSent) return;
		try {
			const lead = JSON.parse(raw);
			if (!lead.email && !lead.telephone) return;
			leadSent = true;
			try { sessionStorage.setItem('chaya-lead', '1'); } catch {}
			const params = new URLSearchParams({
				'form-name': 'contact',
				entreprise: lead.entreprise || 'Visiteur (via Chaya)',
				email: lead.email || '',
				telephone: lead.telephone || '',
				service: lead.service || 'Autre',
				budget: '',
				besoin: `[Demande reçue via Chaya] ${lead.besoin || ''}`
			});
			await fetch('/__forms.html', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: params.toString()
			});
			track('generate_lead', { lead_source: 'chaya', service: lead.service || undefined });
		} catch {
			leadSent = false;
		}
	}

	async function send(text = input) {
		const content = text.trim();
		if (!content || loading) return;
		input = '';
		const history = messages.filter((m) => m.content !== greeting.content);
		messages = [...messages, { role: 'user', content }];
		loading = true;
		save();
		await tick();
		scrollDown();

		const fallback = (why: 'limit' | 'error' | 'network') =>
			why === 'limit'
				? 'Vous avez envoyé beaucoup de messages. Pour aller plus vite, écrivez-nous directement sur WhatsApp : ' + WHATSAPP
				: why === 'network'
					? `La connexion a échoué. Réessayez dans un instant, ou contactez-nous sur WhatsApp : ${WHATSAPP}`
					: `Je ne peux pas répondre pour le moment. L'équipe vous répond sous 24h via le formulaire https://norbertdigitalservice.fr/contact ou tout de suite sur WhatsApp : ${WHATSAPP}`;

		try {
			const res = await fetch('/api/chaya', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ messages: [...history, { role: 'user', content }] })
			});
			if (!res.ok || !res.body) {
				messages = [...messages, { role: 'assistant', content: fallback(res.status === 429 ? 'limit' : 'error') }];
			} else {
				// Réponse affichée au fur et à mesure
				const reader = res.body.getReader();
				const decoder = new TextDecoder();
				let full = '';
				messages = [...messages, { role: 'assistant', content: '' }];
				const idx = messages.length - 1;
				while (true) {
					const { value, done } = await reader.read();
					if (done) break;
					full += decoder.decode(value, { stream: true });
					messages[idx] = { role: 'assistant', content: visible(full) };
					if (loading && messages[idx].content) loading = false; // le texte arrive : on retire « Chaya écrit »
					scrollDown();
				}
				const lead = full.match(LEAD);
				if (lead) sendLead(lead[1]);
				messages[idx] = { role: 'assistant', content: visible(full) || "Je n'ai pas bien compris, pouvez-vous reformuler ?" };
			}
		} catch {
			messages = [...messages, { role: 'assistant', content: fallback('network') }];
		}

		loading = false;
		save();
		await tick();
		scrollDown();
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			send();
		}
	}

	function reset() {
		messages = [greeting];
		leadSent = false;
		save();
	}

	/* Nom lisible d'une page du site pour les liens dans les réponses */
	function pageLabel(path: string) {
		const clean = path.split(/[?#]/)[0].replace(/\/$/, '') || '/';
		const service = servicePages.find((sp) => clean === `/services/${sp.page.slug}`);
		if (service) return service.title;
		const named: Record<string, string> = {
			'/': 'Accueil',
			'/services': 'Nos services',
			'/contact': 'Formulaire de contact',
			'/projects': 'Nos réalisations',
			'/blog': 'Le blog',
			'/about': 'À propos'
		};
		if (named[clean]) return named[clean];
		if (clean.startsWith('/blog/')) return 'Lire l’article';
		if (clean.startsWith('/projects/')) return 'Voir la réalisation';
		return clean;
	}

	/* Texte → HTML sûr : échappement, gras, listes, liens cliquables */
	function render(text: string) {
		const esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		const withLinks = esc.replace(/https?:\/\/[^\s<)]+[^\s<).,;:!?]/g, (url) => {
			const internal = url.startsWith('https://norbertdigitalservice.fr');
			const href = internal ? url.replace('https://norbertdigitalservice.fr', '') || '/' : url;
			const label = internal ? pageLabel(href) : url.includes('wa.me') ? 'WhatsApp' : url.replace(/^https?:\/\//, '').split('?')[0];
			return `<a href="${href}"${internal ? '' : ' target="_blank" rel="noopener"'}>${label}</a>`;
		});
		const bold = withLinks.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
		const lines = bold.split('\n');
		let html = '';
		let inList = false;
		for (const line of lines) {
			const item = line.match(/^\s*[-•]\s+(.*)/);
			if (item) {
				if (!inList) { html += '<ul>'; inList = true; }
				html += `<li>${item[1]}</li>`;
			} else {
				if (inList) { html += '</ul>'; inList = false; }
				if (line.trim()) html += `<p>${line}</p>`;
			}
		}
		if (inList) html += '</ul>';
		return html;
	}
</script>

<div class="chaya">
	{#if open}
		<div
			class="panel"
			role="dialog"
			aria-label="Discuter avec Chaya"
			transition:fly={{ y: 24, duration: 320, easing: cubicOut }}
		>
			<header class="top">
				<span class="avatar"><Sparkles class="w-4 h-4" /></span>
				<div class="who">
					<strong>Chaya</strong>
					<span><i class="online"></i>Assistante de Norbert Digital Service</span>
				</div>
				{#if messages.length > 1}
					<button class="reset" onclick={reset} type="button" aria-label="Nouvelle discussion" title="Nouvelle discussion"><RotateCcw class="w-4 h-4" /></button>
				{/if}
				<button class="close" onclick={toggle} aria-label="Fermer la discussion" type="button"><X class="w-5 h-5" /></button>
			</header>

			<div class="list" bind:this={list} aria-live="polite">
				{#each messages.filter((m) => m.content) as m, i (i)}
					<div class="msg {m.role}" in:fly={{ y: 10, duration: 260 }}>
						{#if m.role === 'assistant'}
							<div class="bubble">{@html render(m.content)}</div>
						{:else}
							<div class="bubble">{m.content}</div>
						{/if}
					</div>
				{/each}
				{#if loading}
					<div class="msg assistant" in:fade={{ duration: 150 }}>
						<div class="bubble typing" aria-label="Chaya écrit"><span></span><span></span><span></span></div>
					</div>
				{/if}
				{#if messages.length === 1 && !loading}
					<div class="chips">
						{#each suggestions as s}
							<button type="button" onclick={() => send(s)}>{s}</button>
						{/each}
					</div>
				{/if}
			</div>

			<form class="composer" onsubmit={(e) => { e.preventDefault(); send(); }}>
				<textarea
					bind:this={field}
					bind:value={input}
					onkeydown={onKeydown}
					rows="1"
					maxlength="1500"
					placeholder="Écrivez votre message…"
					aria-label="Votre message"
				></textarea>
				<button type="submit" disabled={!input.trim() || loading} aria-label="Envoyer"><Send class="w-4 h-4" /></button>
			</form>
			<p class="foot">Vous préférez un humain ? <a href={WHATSAPP} target="_blank" rel="noopener">WhatsApp</a> ou <a href="/contact">formulaire</a></p>
		</div>
	{/if}

	{#if teaser && !open}
		<button class="teaser" type="button" onclick={toggle} transition:scale={{ start: 0.85, duration: 300 }}>
			Une question sur votre projet ? Je suis <strong>Chaya</strong>, je vous réponds tout de suite.
			<span class="teaser-x" role="presentation" onclick={(e) => { e.stopPropagation(); teaser = false; }}>×</span>
		</button>
	{/if}

	<button class="launcher" class:active={open} onclick={toggle} type="button" aria-label={open ? 'Fermer Chaya' : 'Discuter avec Chaya, notre assistante'} aria-expanded={open}>
		{#if open}
			<X class="w-6 h-6" />
		{:else}
			<MessageCircle class="w-6 h-6" />
			<span class="badge">Chaya</span>
		{/if}
	</button>
</div>

<style>
	.chaya { position: fixed; right: 1.25rem; bottom: 1.25rem; z-index: 60; font-family: 'Inter', system-ui, sans-serif; }

	.launcher {
		position: relative;
		width: 3.75rem;
		height: 3.75rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgb(var(--accent));
		color: rgb(var(--night));
		box-shadow: 0 12px 30px rgb(112 160 8 / 0.45);
		transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
		margin-left: auto;
	}
	.launcher:hover { transform: scale(1.07); }
	.launcher:not(.active)::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 50%;
		border: 2px solid rgb(var(--accent));
		animation: ring 2.6s ease-out infinite;
	}
	.badge {
		position: absolute;
		top: -0.35rem;
		right: -0.4rem;
		font-size: 0.65rem;
		font-weight: 700;
		padding: 0.15rem 0.45rem;
		border-radius: 999px;
		background: rgb(var(--night));
		color: rgb(var(--accent));
	}

	.teaser {
		position: absolute;
		right: 0;
		bottom: 4.6rem;
		width: 16rem;
		text-align: left;
		padding: 0.85rem 2rem 0.85rem 1rem;
		border-radius: 1rem 1rem 0.25rem 1rem;
		background: rgb(var(--bg));
		color: rgb(var(--ink));
		font-size: 0.85rem;
		line-height: 1.45;
		border: 1px solid rgb(var(--line) / 0.08);
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.14);
	}
	.teaser-x {
		position: absolute;
		top: 0.35rem;
		right: 0.6rem;
		font-size: 1.1rem;
		color: rgb(var(--muted));
		cursor: pointer;
	}

	.panel {
		position: absolute;
		right: 0;
		bottom: 4.75rem;
		width: min(24rem, calc(100vw - 2.5rem));
		height: min(36rem, calc(100vh - 8rem));
		display: flex;
		flex-direction: column;
		border-radius: 1.4rem;
		overflow: hidden;
		background: rgb(var(--bg));
		border: 1px solid rgb(var(--line) / 0.08);
		box-shadow: 0 30px 80px rgba(0, 0, 0, 0.22);
	}
	.top {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		padding: 0.9rem 1rem;
		background: rgb(var(--night));
		color: #fff;
	}
	.avatar {
		width: 2.35rem;
		height: 2.35rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgb(var(--accent));
		color: rgb(var(--night));
		flex-shrink: 0;
	}
	.who { display: flex; flex-direction: column; min-width: 0; flex: 1; }
	.who strong { font-family: 'Space Grotesk', sans-serif; font-size: 1rem; }
	.who span { font-size: 0.72rem; color: rgba(255, 255, 255, 0.65); display: flex; align-items: center; gap: 0.35rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	.online { width: 7px; height: 7px; border-radius: 50%; background: #4ade80; display: inline-block; flex-shrink: 0; }
	.reset { color: rgba(255, 255, 255, 0.7); padding: 0.4rem; border-radius: 999px; border: 1px solid rgba(255, 255, 255, 0.2); display: grid; place-items: center; }
	.reset:hover { color: #fff; border-color: rgba(255, 255, 255, 0.45); }
	.close { color: rgba(255, 255, 255, 0.8); padding: 0.25rem; }
	.close:hover { color: #fff; }

	.list {
		flex: 1;
		overflow-y: auto;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		background: rgb(var(--mist));
	}
	.msg { display: flex; }
	.msg.user { justify-content: flex-end; }
	.bubble {
		max-width: 85%;
		padding: 0.65rem 0.9rem;
		border-radius: 1rem;
		font-size: 0.88rem;
		line-height: 1.5;
		word-wrap: break-word;
	}
	.assistant .bubble { background: rgb(var(--bg)); color: rgb(var(--ink)); border-bottom-left-radius: 0.3rem; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); }
	.user .bubble { background: rgb(var(--accent)); color: rgb(var(--night)); border-bottom-right-radius: 0.3rem; white-space: pre-wrap; }
	.bubble :global(p) { margin: 0 0 0.45rem; }
	.bubble :global(p:last-child) { margin-bottom: 0; }
	.bubble :global(ul) { margin: 0.2rem 0 0.45rem; padding-left: 1.1rem; list-style: disc; }
	.bubble :global(a) { color: rgb(var(--accent-2)); font-weight: 600; text-decoration: underline; text-underline-offset: 2px; overflow-wrap: anywhere; }

	.typing { display: flex; gap: 0.3rem; padding: 0.85rem 1rem; }
	.typing span { width: 7px; height: 7px; border-radius: 50%; background: rgb(var(--muted)); animation: bounce 1.2s infinite; }
	.typing span:nth-child(2) { animation-delay: 0.15s; }
	.typing span:nth-child(3) { animation-delay: 0.3s; }

	.chips { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.25rem; }
	.chips button {
		font-size: 0.8rem;
		padding: 0.45rem 0.8rem;
		border-radius: 999px;
		background: rgb(var(--bg));
		border: 1px solid rgb(var(--accent) / 0.5);
		color: rgb(var(--ink));
		transition: background 0.2s;
	}
	.chips button:hover { background: rgb(var(--accent) / 0.18); }

	.composer {
		display: flex;
		align-items: flex-end;
		gap: 0.5rem;
		padding: 0.7rem 0.75rem 0.4rem;
		border-top: 1px solid rgb(var(--line) / 0.07);
		background: rgb(var(--bg));
	}
	.composer textarea {
		flex: 1;
		resize: none;
		max-height: 7rem;
		padding: 0.6rem 0.8rem;
		border-radius: 0.9rem;
		border: 1px solid rgb(var(--line) / 0.12);
		background: rgb(var(--mist));
		color: rgb(var(--ink));
		font-size: 0.9rem;
		line-height: 1.4;
		field-sizing: content;
	}
	.composer textarea:focus { outline: none; border-color: rgb(var(--accent)); }
	.composer button {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgb(var(--accent));
		color: rgb(var(--night));
		flex-shrink: 0;
		transition: opacity 0.2s, transform 0.2s;
	}
	.composer button:disabled { opacity: 0.4; }
	.composer button:not(:disabled):hover { transform: scale(1.06); }
	.foot { margin: 0; padding: 0.15rem 1rem 0.65rem; font-size: 0.72rem; color: rgb(var(--muted)); background: rgb(var(--bg)); text-align: center; }
	.foot a { color: rgb(var(--ink)); text-decoration: underline; }

	@media (max-width: 480px) {
		.chaya { right: 0.9rem; bottom: 0.9rem; }
		.panel { position: fixed; inset: auto 0.5rem 5.4rem 0.5rem; width: auto; height: min(34rem, calc(100svh - 7rem)); }
	}

	@keyframes ring { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(1.5); opacity: 0; } }
	@keyframes bounce { 0%, 60%, 100% { transform: translateY(0); opacity: 0.5; } 30% { transform: translateY(-5px); opacity: 1; } }
	@media (prefers-reduced-motion: reduce) { .launcher::before, .typing span { animation: none; } }
</style>
