<script lang="ts">
	import { ArrowRight, Search, FileText, Zap, Bot, CalendarCheck, Check } from 'lucide-svelte';
	import { countUp } from '$lib/actions/motion';

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

	const stats = [
		{ value: '15+', label: 'projets livrés' },
		{ value: '5 ans', label: 'd’expertise' },
		{ value: '98%', label: 'de clients satisfaits' },
		{ value: '+40%', label: 'de croissance moyenne' }
	];
</script>

<section class="hero" aria-labelledby="hero-title">
	<div class="grid-bg" aria-hidden="true"></div>
	<div class="glow" aria-hidden="true"></div>

	<div class="inner max-w-7xl mx-auto px-5 md:px-8">
		<div class="copy">
			<p class="kicker">Agence web, mobile et IA à Paris</p>
			<h1 id="hero-title" class="title">
				<span class="line"><span>Des sites, des apps</span></span>
				<span class="line"><span>et de l’IA qui vous</span></span>
				<span class="line"><span class="hl">ramènent des clients.</span></span>
			</h1>
			<p class="lead">
				Nous concevons votre site, votre application et les automatisations qui transforment chaque visite en
				demande de contact, puis en rendez-vous. Vous gagnez des clients et du temps.
			</p>
			<div class="ctas">
				<a href="/contact" class="btn-primary">
					Démarrer un projet
					<ArrowRight class="w-4 h-4" />
				</a>
				<a href="/services" class="btn-ghost">Voir nos services</a>
			</div>
		</div>

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
	</div>

	<div class="stats max-w-7xl mx-auto px-5 md:px-8">
		<dl>
			{#each stats as s}
				<div class="stat">
					<dt class="sr-only">{s.label}</dt>
					<dd>
						<span class="stat-value" use:countUp>{s.value}</span>
						<span class="stat-label">{s.label}</span>
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<style>
	.hero {
		position: relative;
		overflow: hidden;
		background: rgb(var(--night));
		color: #fff;
		padding: 8.5rem 0 0;
	}
	.grid-bg {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
		background-size: 56px 56px;
		mask-image: radial-gradient(ellipse 80% 70% at 70% 40%, #000 30%, transparent 75%);
	}
	.glow {
		position: absolute;
		width: 720px;
		height: 720px;
		right: -160px;
		top: -120px;
		background: radial-gradient(circle, rgba(152, 200, 22, 0.22), transparent 62%);
		filter: blur(10px);
	}
	.inner {
		position: relative;
		display: grid;
		gap: 3rem;
		align-items: center;
	}
	@media (min-width: 1200px) {
		.inner { grid-template-columns: 1.1fr 0.9fr; gap: 4rem; }
		.inner .title { font-size: min(4.2vw, 4.4rem); }
	}
	/* Tablette : le parcours passe sous le texte, centré et moins large */
	@media (min-width: 640px) and (max-width: 1199px) {
		.flow { max-width: 40rem; }
	}

	/* ── Texte ── */
	.kicker {
		font-size: 0.85rem;
		font-weight: 500;
		color: rgb(var(--accent));
		margin-bottom: 1.25rem;
		animation: rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
	}
	.title {
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 700;
		font-size: clamp(2rem, 8.2vw, 4.4rem);
		line-height: 1.02;
		letter-spacing: -0.035em;
		margin: 0 0 1.5rem;
	}
	.line { display: block; overflow: hidden; padding-bottom: 0.06em; }
	.line > span {
		display: inline-block;
		animation: lineUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
	}
	.line:nth-child(1) > span { animation-delay: 0.08s; }
	.line:nth-child(2) > span { animation-delay: 0.18s; }
	.line:nth-child(3) > span { animation-delay: 0.28s; }
	.hl { color: rgb(var(--accent)); }
	.lead {
		max-width: 34rem;
		font-size: 1.05rem;
		line-height: 1.65;
		color: rgba(255, 255, 255, 0.72);
		margin-bottom: 2rem;
		animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both;
	}
	.ctas {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both;
	}
	.btn-primary,
	.btn-ghost {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.9rem 1.5rem;
		border-radius: 999px;
		font-weight: 600;
		font-size: 0.95rem;
		transition: transform 0.2s, background 0.2s, box-shadow 0.2s;
	}
	.btn-primary {
		background: rgb(var(--accent));
		color: rgb(var(--night));
		box-shadow: 0 10px 30px rgba(152, 200, 22, 0.35);
	}
	.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(152, 200, 22, 0.45); }
	.btn-primary :global(svg) { transition: transform 0.2s; }
	.btn-primary:hover :global(svg) { transform: translateX(3px); }
	.btn-ghost {
		color: #fff;
		border: 1px solid rgba(255, 255, 255, 0.22);
	}
	.btn-ghost:hover { background: rgba(255, 255, 255, 0.08); }

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

	/* ── Chiffres ── */
	.stats { position: relative; margin-top: 4.5rem; }
	.stats dl {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		margin: 0;
	}
	@media (min-width: 768px) { .stats dl { grid-template-columns: repeat(4, 1fr); } }
	.stat { padding: 1.6rem 0.25rem 1.8rem; }
	@media (min-width: 768px) {
		.stat + .stat { border-left: 1px solid rgba(255, 255, 255, 0.1); padding-left: 1.75rem; }
	}
	.stat dd { margin: 0; display: flex; flex-direction: column; gap: 0.2rem; }
	.stat-value {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.8rem, 3.5vw, 2.6rem);
		font-weight: 700;
		letter-spacing: -0.03em;
		color: #fff;
		font-variant-numeric: tabular-nums;
	}
	.stat-label { font-size: 0.85rem; color: rgba(255, 255, 255, 0.55); }

	@media (max-width: 767px) {
		.hero { padding-top: 6.5rem; }
		.stats { margin-top: 3rem; }
	}
	/* Téléphone : boutons pleine largeur, parcours plus compact */
	@media (max-width: 639px) {
		.lead { font-size: 1rem; }
		.ctas { flex-direction: column; }
		.btn-primary, .btn-ghost { justify-content: center; width: 100%; }
		.flow { padding: 1.1rem 0.9rem 1rem; border-radius: 1.25rem; }
		.flow-head { font-size: 0.75rem; margin-bottom: 1rem; }
		.step { grid-template-columns: 2rem 1fr; gap: 0.7rem; padding-bottom: 0.7rem; }
		.step:not(.last)::before, .step:not(.last)::after { left: calc(1rem - 1px); top: 2rem; }
		.node { width: 2rem; height: 2rem; border-radius: 0.65rem; }
		.done, .time { display: none; }
		.card { padding: 0.55rem 0.75rem; }
		.card-title { font-size: 0.85rem; }
		.stat { padding: 1.25rem 0.25rem 1.4rem; }
	}

	/* ── Animations ── */
	@keyframes lineUp { from { transform: translateY(105%); } to { transform: none; } }
	@keyframes rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
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

	@media (prefers-reduced-motion: reduce) {
		.line > span, .kicker, .lead, .ctas, .flow { animation: none; }
		.step:not(.last)::after { animation: none; transform: none; }
		.node, .card, .done { animation: none; opacity: 1; transform: none; }
		.node { background: rgba(152, 200, 22, 0.14); color: rgb(var(--accent)); }
	}
</style>
