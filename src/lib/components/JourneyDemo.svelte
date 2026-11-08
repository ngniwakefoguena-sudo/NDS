<script lang="ts">
	import { Search, FileText, Zap, Bot, CalendarCheck, Check } from 'lucide-svelte';

	/* L'animation du parcours démarre quand il est visible (sur mobile, il est plus bas dans la page). */
	function playWhenVisible(node: HTMLElement) {
		const io = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					node.classList.add('play');
					io.disconnect();
				}
			},
			{ threshold: 0.5 }
		);
		io.observe(node);
		return { destroy: () => io.disconnect() };
	}

	/* Le parcours d'un client, de Google au rendez-vous : c'est exactement ce que l'agence met en place. */
	const flow = [
		{ icon: Search, time: '10:02', title: 'Un visiteur trouve votre site sur Google', tag: 'Site web + SEO' },
		{ icon: FileText, time: '10:04', title: 'Il remplit votre formulaire de contact', tag: 'Conversion' },
		{ icon: Zap, time: '10:04', title: 'Le contact arrive dans votre CRM', tag: 'Automatisation n8n' },
		{ icon: Bot, time: '10:05', title: 'Une réponse personnalisée part tout de suite', tag: 'IA' },
		{ icon: CalendarCheck, time: '10:21', title: 'Rendez-vous ajouté à votre agenda', tag: 'Nouveau client' }
	];

</script>

<!-- Démonstration : le parcours client automatisé -->
<div class="flow" use:playWhenVisible role="img" aria-label="Exemple de parcours : un visiteur trouve votre site sur Google, remplit le formulaire, le contact arrive dans votre CRM, l’IA lui répond et un rendez-vous est ajouté à votre agenda.">
	<p class="flow-head" aria-hidden="true">
		<span class="live"></span>
		Un nouveau client, sans rien faire de votre côté
	</p>
	<ol class="steps" aria-hidden="true">
		{#each flow as step, i}
			<li class="step" class:last={i === flow.length - 1} style="--i: {i}">
				<span class="node"><step.icon class="w-4 h-4" /></span>
				<div class="card">
					<div class="card-top">
						<span class="tag">{step.tag}</span>
						<span class="time">{step.time}</span>
					</div>
					<p class="card-title">{step.title}</p>
				</div>
				<span class="done"><Check class="w-3 h-3" /></span>
			</li>
		{/each}
	</ol>
</div>

<style>
	/* ── Parcours animé ── */
	.flow {
		position: relative;
		background: rgba(255, 255, 255, 0.035);
		border: 1px solid rgba(255, 255, 255, 0.09);
		border-radius: 1.5rem;
		padding: 1.5rem 1.25rem 1.25rem;
		backdrop-filter: blur(8px);
		animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both;
	}
	.flow-head {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.6);
		margin: 0 0 1.25rem 0.25rem;
	}
	.live {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: rgb(var(--accent));
		box-shadow: 0 0 0 0 rgba(152, 200, 22, 0.6);
		animation: ping 2s ease-out infinite;
	}
	.steps { list-style: none; margin: 0; padding: 0; }
	/* En pause tant que le parcours n'est pas à l'écran */
	.flow:not(.play) .steps :global(*),
	.flow:not(.play) .step::after { animation-play-state: paused; }
	.step {
		--d: calc(0.5s + var(--i) * 0.55s);
		position: relative;
		display: grid;
		grid-template-columns: 2.25rem 1fr auto;
		gap: 0.85rem;
		align-items: center;
		padding-bottom: 0.9rem;
	}
	.step.last { padding-bottom: 0; }
	/* Le trait qui relie les étapes, et sa partie verte qui se remplit */
	.step:not(.last)::before,
	.step:not(.last)::after {
		content: '';
		position: absolute;
		left: calc(1.125rem - 1px);
		top: 2.25rem;
		width: 2px;
		bottom: 0;
	}
	.step:not(.last)::before { background: rgba(255, 255, 255, 0.1); }
	.step:not(.last)::after {
		background: rgb(var(--accent));
		transform-origin: top;
		transform: scaleY(0);
		animation: fill 0.45s ease-in var(--d) forwards;
	}
	.node {
		position: relative;
		z-index: 1;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 0.75rem;
		display: grid;
		place-items: center;
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.12);
		color: rgba(255, 255, 255, 0.5);
		animation: nodeOn 0.4s ease-out calc(var(--d) - 0.35s) forwards;
	}
	.card {
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 0.9rem;
		padding: 0.65rem 0.9rem;
		opacity: 0.35;
		animation: cardOn 0.5s ease-out calc(var(--d) - 0.35s) forwards;
	}
	.card-top { display: flex; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.15rem; }
	.tag { font-size: 0.7rem; font-weight: 600; color: rgb(var(--accent)); }
	.time { font-size: 0.7rem; color: rgba(255, 255, 255, 0.4); font-variant-numeric: tabular-nums; }
	.card-title { font-size: 0.88rem; font-weight: 500; color: #fff; line-height: 1.35; margin: 0; }
	.done {
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgb(var(--accent));
		color: rgb(var(--night));
		opacity: 0;
		transform: scale(0.4);
		animation: pop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) var(--d) forwards;
	}
	.step.last .node { animation-name: nodeFinal; }
	.step.last .card {
		animation-name: cardFinal;
	}

	.flow { animation: none; }
	@keyframes fill { to { transform: scaleY(1); } }
	@keyframes nodeOn {
		to { background: rgba(152, 200, 22, 0.14); border-color: rgba(152, 200, 22, 0.5); color: rgb(var(--accent)); }
	}
	@keyframes nodeFinal {
		to { background: rgb(var(--accent)); border-color: rgb(var(--accent)); color: rgb(var(--night)); box-shadow: 0 0 24px rgba(152, 200, 22, 0.55); }
	}
	@keyframes cardOn { to { opacity: 1; } }
	@keyframes cardFinal { to { opacity: 1; border-color: rgba(152, 200, 22, 0.45); background: rgba(152, 200, 22, 0.1); } }
	@keyframes pop { to { opacity: 1; transform: scale(1); } }
	@keyframes ping {
		0% { box-shadow: 0 0 0 0 rgba(152, 200, 22, 0.55); }
		80%, 100% { box-shadow: 0 0 0 10px rgba(152, 200, 22, 0); }
	}


	@media (max-width: 639px) {
		.flow { padding: 1.1rem 0.9rem 1rem; border-radius: 1.25rem; }
		.flow-head { font-size: 0.75rem; margin-bottom: 1rem; }
		.step { grid-template-columns: 2rem 1fr; gap: 0.7rem; padding-bottom: 0.7rem; }
		.step:not(.last)::before, .step:not(.last)::after { left: calc(1rem - 1px); top: 2rem; }
		.node { width: 2rem; height: 2rem; border-radius: 0.65rem; }
		.done, .time { display: none; }
		.card { padding: 0.55rem 0.75rem; }
		.card-title { font-size: 0.85rem; }
	}

	@media (prefers-reduced-motion: reduce) {
		.step:not(.last)::after { animation: none; transform: none; }
		.node, .card, .done { animation: none; opacity: 1; transform: none; }
		.node { background: rgba(152, 200, 22, 0.14); color: rgb(var(--accent)); }
	}
</style>
