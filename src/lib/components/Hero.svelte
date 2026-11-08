<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { ArrowRight } from 'lucide-svelte';
	import { countUp } from '$lib/actions/motion';

	/* Le mot qui change dans le titre : ce que l'agence crée pour le client */
	const words = ['site web', 'application mobile', 'automatisation', 'assistant IA', 'stratégie SEO'];
	let index = $state(0);
	let reduced = $state(false);

	const stats = [
		{ value: '15+', label: 'projets livrés' },
		{ value: '5 ans', label: 'd’expertise' },
		{ value: '98%', label: 'de clients satisfaits' },
		{ value: '+40%', label: 'de croissance moyenne' }
	];

	let hero: HTMLElement;

	onMount(() => {
		reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) return;

		const timer = setInterval(() => (index = (index + 1) % words.length), 2400);

		/* Halo lumineux qui suit la souris (ordinateur uniquement) */
		const fine = window.matchMedia('(pointer: fine)').matches;
		const move = (e: PointerEvent) => {
			const r = hero.getBoundingClientRect();
			hero.style.setProperty('--mx', `${e.clientX - r.left}px`);
			hero.style.setProperty('--my', `${e.clientY - r.top}px`);
		};
		if (fine) hero.addEventListener('pointermove', move);

		return () => {
			clearInterval(timer);
			hero.removeEventListener('pointermove', move);
		};
	});
</script>

<section class="hero" bind:this={hero} aria-labelledby="hero-title">
	<div class="bg" aria-hidden="true">
		<span class="blob b1"></span>
		<span class="blob b2"></span>
		<span class="blob b3"></span>
		<span class="grid"></span>
		<span class="spot"></span>
	</div>

	<div class="inner">
		<p class="kicker"><span class="dot"></span>Agence web, mobile et IA à Paris</p>

		<h1 id="hero-title" class="title">
			<span class="l l1">Nous créons votre</span>
			<span class="l rot" aria-live="off">
				<span class="sr-only">site web, application mobile, automatisation ou assistant IA</span>
				<span class="rot-stack" aria-hidden="true">
					{#key index}
						<span
							class="word"
							in:fly={{ y: reduced ? 0 : 60, duration: reduced ? 0 : 650, easing: cubicOut }}
							out:fly={{ y: reduced ? 0 : -60, duration: reduced ? 0 : 450, easing: cubicOut }}
						>{words[index]}</span>
					{/key}
				</span>
			</span>
			<span class="l l3">qui vous ramène des clients.</span>
		</h1>

		<p class="lead">
			Site, application, automatisations et intelligence artificielle : on conçoit tout ce qui transforme vos
			visiteurs en demandes de contact, puis en clients. Un seul interlocuteur, réponse sous 24h.
		</p>

		<div class="ctas">
			<a href="/contact" class="btn-primary">
				Démarrer un projet
				<ArrowRight class="w-4 h-4" />
			</a>
			<a href="/services" class="btn-ghost">Découvrir nos services</a>
		</div>

		<dl class="stats">
			{#each stats as s, i}
				<div class="stat" style="--i: {i}">
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
		--mx: 50%;
		--my: 40%;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: rgb(var(--night));
		color: #fff;
		padding: 7.5rem 0 3.5rem;
		isolation: isolate;
	}

	/* ── Fond animé ── */
	.bg { position: absolute; inset: 0; z-index: -1; pointer-events: none; }
	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(70px);
		opacity: 0.55;
		will-change: transform;
	}
	.b1 {
		width: 46vw; height: 46vw; min-width: 340px; min-height: 340px;
		left: -10vw; top: -14vw;
		background: radial-gradient(circle, rgb(152 200 22 / 0.75), transparent 65%);
		animation: drift1 18s ease-in-out infinite alternate;
	}
	.b2 {
		width: 40vw; height: 40vw; min-width: 300px; min-height: 300px;
		right: -12vw; top: 10vh;
		background: radial-gradient(circle, rgb(112 160 8 / 0.8), transparent 65%);
		animation: drift2 22s ease-in-out infinite alternate;
	}
	.b3 {
		width: 34vw; height: 34vw; min-width: 260px; min-height: 260px;
		left: 30vw; bottom: -18vw;
		background: radial-gradient(circle, rgb(196 236 52 / 0.45), transparent 65%);
		animation: drift3 26s ease-in-out infinite alternate;
	}
	.grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
		background-size: 64px 64px;
		mask-image: radial-gradient(ellipse 70% 60% at 50% 45%, #000 20%, transparent 75%);
		animation: gridMove 30s linear infinite;
	}
	.spot {
		position: absolute;
		inset: 0;
		background: radial-gradient(500px circle at var(--mx) var(--my), rgba(196, 236, 52, 0.12), transparent 60%);
	}

	/* ── Contenu centré ── */
	.inner {
		max-width: 76rem;
		margin: 0 auto;
		padding: 0 1.25rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.kicker {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		padding: 0.45rem 1rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.12);
		backdrop-filter: blur(8px);
		font-size: 0.78rem;
		color: rgba(255, 255, 255, 0.85);
		margin: 0 0 1.4rem;
		animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
	}
	.dot { width: 7px; height: 7px; border-radius: 50%; background: rgb(var(--accent)); box-shadow: 0 0 10px rgb(var(--accent)); }

	.title {
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 700;
		letter-spacing: -0.04em;
		line-height: 1.02;
		margin: 0 0 1.25rem;
		font-size: clamp(1.9rem, 3.6vw, 3.2rem);
	}
	.l { display: block; }
	.l1 { animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both; }
	.l3 { animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both; }
	.rot { animation: pop 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both; }
	.rot-stack {
		display: inline-grid;
		overflow: hidden;
		padding: 0.02em 0.25em 0.1em;
		vertical-align: bottom;
	}
	.word {
		grid-area: 1 / 1;
		white-space: nowrap;
		background: linear-gradient(100deg, rgb(196 236 52), rgb(152 200 22) 45%, rgb(112 160 8) 90%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.lead {
		max-width: 38rem;
		font-size: 1rem;
		line-height: 1.65;
		color: rgba(255, 255, 255, 0.72);
		margin: 0 0 1.75rem;
		animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.45s both;
	}
	.ctas {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.8rem;
		animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.55s both;
	}
	.btn-primary,
	.btn-ghost {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.75rem 1.4rem;
		border-radius: 999px;
		font-weight: 600;
		font-size: 0.92rem;
		transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
	}
	.btn-primary {
		background: rgb(var(--accent));
		color: rgb(var(--night));
		box-shadow: 0 0 0 0 rgb(152 200 22 / 0.5), 0 12px 34px rgb(152 200 22 / 0.35);
		animation: glow 2.8s ease-in-out 2s infinite;
		overflow: hidden;
	}
	/* reflet qui traverse le bouton */
	.btn-primary::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.55) 50%, transparent 70%);
		transform: translateX(-120%);
		animation: shine 3.5s ease-in-out 1.5s infinite;
	}
	.btn-primary:hover { transform: translateY(-3px) scale(1.02); }
	.btn-primary :global(svg) { transition: transform 0.25s; }
	.btn-primary:hover :global(svg) { transform: translateX(4px); }
	.btn-ghost {
		color: #fff;
		border: 1px solid rgba(255, 255, 255, 0.25);
		background: rgba(255, 255, 255, 0.04);
		backdrop-filter: blur(8px);
	}
	.btn-ghost:hover { background: rgba(255, 255, 255, 0.1); transform: translateY(-3px); }

	/* ── Chiffres ── */
	.stats {
		display: grid;
		grid-template-columns: repeat(4, auto);
		gap: 0 2.75rem;
		margin: 2.75rem 0 0;
	}
	.stat { animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) calc(0.75s + var(--i) * 0.1s) both; }
	.stat dd { margin: 0; display: flex; flex-direction: column; align-items: center; gap: 0.15rem; }
	.stat-value {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.35rem, 2vw, 1.75rem);
		font-weight: 700;
		letter-spacing: -0.03em;
		font-variant-numeric: tabular-nums;
	}
	.stat-label { font-size: 0.78rem; color: rgba(255, 255, 255, 0.55); white-space: nowrap; }

	/* ── Indicateur de défilement ── */
	.scroll {
		position: absolute;
		left: 50%;
		bottom: 1.75rem;
		transform: translateX(-50%);
		opacity: 0.6;
		animation: rise 1s ease 1.4s both;
	}
	.scroll:hover { opacity: 1; }
	.mouse {
		display: block;
		width: 24px;
		height: 38px;
		border: 2px solid rgba(255, 255, 255, 0.6);
		border-radius: 14px;
		position: relative;
	}
	.wheel {
		position: absolute;
		left: 50%;
		top: 7px;
		width: 4px;
		height: 8px;
		margin-left: -2px;
		border-radius: 2px;
		background: rgb(var(--accent));
		animation: wheel 1.8s ease-in-out infinite;
	}

	/* ── Tailles d'écran ── */
	@media (max-width: 900px) {
		.stats { grid-template-columns: repeat(2, auto); gap: 1.5rem 3rem; }
		.scroll { display: none; }
	}
	@media (max-width: 639px) {
		.hero { padding: 6.5rem 0 3rem; }
		.kicker { font-size: 0.78rem; margin-bottom: 1.5rem; }
		.title { font-size: clamp(1.7rem, 8vw, 2.2rem); }
		.ctas { flex-direction: column; width: 100%; }
		.btn-primary, .btn-ghost { width: 100%; }
		.stats { width: 100%; grid-template-columns: repeat(2, 1fr); gap: 1.5rem 1rem; margin-top: 2.75rem; }
	}

	/* ── Animations ── */
	@keyframes rise { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: none; } }
	@keyframes pop { from { opacity: 0; transform: translateY(26px) scale(0.92); } to { opacity: 1; transform: none; } }
	@keyframes drift1 { to { transform: translate(14vw, 10vh) scale(1.15); } }
	@keyframes drift2 { to { transform: translate(-12vw, 14vh) scale(0.9); } }
	@keyframes drift3 { to { transform: translate(-10vw, -16vh) scale(1.2); } }
	@keyframes gridMove { to { background-position: 64px 64px; } }
	@keyframes shine { 0% { transform: translateX(-120%); } 35%, 100% { transform: translateX(120%); } }
	@keyframes glow {
		0%, 100% { box-shadow: 0 0 0 0 rgb(152 200 22 / 0.45), 0 12px 34px rgb(152 200 22 / 0.35); }
		50% { box-shadow: 0 0 0 10px rgb(152 200 22 / 0), 0 12px 34px rgb(152 200 22 / 0.35); }
	}
	@keyframes wheel { 0% { opacity: 0; transform: translateY(0); } 30% { opacity: 1; } 100% { opacity: 0; transform: translateY(12px); } }

	@media (prefers-reduced-motion: reduce) {
		.blob, .grid, .btn-primary, .btn-primary::after, .wheel { animation: none; }
	}
</style>
