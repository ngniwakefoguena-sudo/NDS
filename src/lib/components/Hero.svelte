<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { ArrowRight, TrendingUp, Bot, Star, Rocket } from 'lucide-svelte';
	import { countUp } from '$lib/actions/motion';

	/* Le mot qui change dans le titre : ce que l'agence crée pour le client */
	const words = ['site web', 'application mobile', 'automatisation', 'assistant IA', 'stratégie SEO'];
	let index = $state(0);
	let reduced = $state(false);

	onMount(() => {
		reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) return;
		const timer = setInterval(() => (index = (index + 1) % words.length), 2600);
		return () => clearInterval(timer);
	});
</script>

<section class="hero" aria-labelledby="hero-title">
	<div class="bg" aria-hidden="true"><span class="blob b1"></span><span class="blob b2"></span><span class="dots"></span></div>

	<div class="inner">
		<!-- Texte -->
		<div class="copy">
			<h1 id="hero-title" class="title">
				<span class="kicker"><span class="dot"></span>Agence web, mobile et IA · France, Afrique et international</span>
				<span class="l l1">Nous créons votre</span>
				<span class="l rot">
					<span class="sr-only">site web, application mobile, automatisation ou assistant IA</span>
					<span class="rot-stack" aria-hidden="true">
						{#key index}
							<span
								class="word"
								in:fly={{ y: reduced ? 0 : 40, duration: reduced ? 0 : 600, easing: cubicOut }}
								out:fly={{ y: reduced ? 0 : -40, duration: reduced ? 0 : 400, easing: cubicOut }}
							>{words[index]}</span>
						{/key}
					</span>
				</span>
				<span class="l l3">qui vous ramène des clients.</span>
			</h1>
			<p class="lead">
				Site, application, automatisations et intelligence artificielle : nous concevons tout ce qui transforme vos
				visiteurs en clients. Un seul interlocuteur, une réponse sous 24h.
			</p>
			<div class="ctas">
				<a href="/contact" class="btn-primary">Démarrer un projet <ArrowRight class="w-4 h-4" /></a>
				<a href="/services" class="btn-ghost">Nos services</a>
			</div>
			<div class="trust">
				<span class="stars" aria-hidden="true">{#each [0, 1, 2, 3, 4] as _}<Star class="w-3.5 h-3.5" />{/each}</span>
				<span><strong>+14 avis clients</strong>, plus de 30 clients accompagnés</span>
			</div>
		</div>

		<!-- Visuel : photo + cartes flottantes -->
		<div class="visual" aria-hidden="true">
			<div class="photo">
				<img src="/images/hero-bg.webp" alt="" width="1200" height="1200" fetchpriority="high" decoding="async" />
			</div>
			<div class="float f1">
				<span class="ico"><TrendingUp class="w-4 h-4" /></span>
				<div><strong use:countUp>+40%</strong><small>de croissance moyenne</small></div>
			</div>
			<div class="float f2">
				<span class="ico dark"><Bot class="w-4 h-4" /></span>
				<div><strong>Réponse en 1 min</strong><small>grâce à l’IA, même la nuit</small></div>
			</div>
			<div class="float f3">
				<span class="ico"><Rocket class="w-4 h-4" /></span>
				<div><strong><span use:countUp>15+</span> projets</strong><small><span use:countUp>98%</span> de clients satisfaits</small></div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		overflow: hidden;
		background: rgb(var(--bg));
		padding: 8rem 0 4rem;
		isolation: isolate;
	}
	.bg { position: absolute; inset: 0; z-index: -1; pointer-events: none; }
	.blob { position: absolute; border-radius: 50%; filter: blur(60px); }
	.b1 {
		width: 520px; height: 520px; right: -120px; top: -80px;
		background: radial-gradient(circle, rgb(152 200 22 / 0.28), transparent 65%);
		animation: drift 16s ease-in-out infinite alternate;
	}
	.b2 {
		width: 420px; height: 420px; left: -160px; bottom: -160px;
		background: radial-gradient(circle, rgb(152 200 22 / 0.16), transparent 65%);
		animation: drift 20s ease-in-out infinite alternate-reverse;
	}
	.dots {
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgb(var(--line) / 0.07) 1px, transparent 1px);
		background-size: 26px 26px;
		mask-image: linear-gradient(180deg, #000, transparent 85%);
	}

	.inner {
		max-width: 80rem;
		margin: 0 auto;
		padding: 0 1.25rem;
		display: grid;
		gap: 3rem;
		align-items: center;
	}
	@media (min-width: 768px) { .inner { padding: 0 2rem; } }
	@media (min-width: 1024px) { .inner { grid-template-columns: 1.05fr 0.95fr; gap: 3.5rem; } }

	/* ── Texte ── */
	.kicker {
		display: flex;
		width: fit-content;
		font-family: inherit;
		letter-spacing: normal;
		line-height: 1.4;
		align-items: center;
		gap: 0.5rem;
		padding: 0.4rem 0.9rem;
		border-radius: 999px;
		background: rgb(var(--accent) / 0.12);
		color: rgb(var(--ink));
		font-size: 0.8rem;
		font-weight: 500;
		margin: 0 0 1.25rem;
		animation: rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
	}
	.dot { width: 7px; height: 7px; border-radius: 50%; background: rgb(var(--accent-2)); }
	.title {
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 700;
		letter-spacing: -0.035em;
		line-height: 1.08;
		color: rgb(var(--ink));
		font-size: clamp(2rem, 3.6vw, 3.2rem);
		margin: 0 0 1.1rem;
	}
	.l { display: block; }
	.l1 { animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.08s both; }
	.rot { animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.16s both; }
	.l3 { animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.24s both; }
	.rot-stack { display: inline-grid; overflow: hidden; vertical-align: bottom; padding-bottom: 0.08em; }
	.word {
		grid-area: 1 / 1;
		white-space: nowrap;
		color: rgb(var(--accent-2));
		position: relative;
	}
	/* trait vert sous le mot */
	.word::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0.02em;
		height: 0.14em;
		border-radius: 1em;
		background: rgb(var(--accent) / 0.45);
		transform-origin: left;
		animation: underline 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
	}
	.lead {
		max-width: 34rem;
		font-size: 1rem;
		line-height: 1.65;
		color: rgb(var(--muted));
		margin: 0 0 1.6rem;
		animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.32s both;
	}
	.ctas { display: flex; flex-wrap: wrap; gap: 0.7rem; animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both; }
	.btn-primary,
	.btn-ghost {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.45rem;
		padding: 0.8rem 1.4rem;
		border-radius: 999px;
		font-weight: 600;
		font-size: 0.93rem;
		transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
	}
	.btn-primary {
		background: rgb(var(--ink));
		color: #fff;
		box-shadow: 0 10px 26px rgb(var(--ink) / 0.22);
		overflow: hidden;
	}
	.btn-primary::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.35) 50%, transparent 70%);
		transform: translateX(-120%);
		animation: shine 4s ease-in-out 1.5s infinite;
	}
	.btn-primary:hover { transform: translateY(-2px); background: rgb(var(--accent-2)); }
	.btn-primary :global(svg) { transition: transform 0.25s; }
	.btn-primary:hover :global(svg) { transform: translateX(3px); }
	.btn-ghost { color: rgb(var(--ink)); border: 1px solid rgb(var(--line) / 0.15); background: rgb(var(--bg)); }
	.btn-ghost:hover { border-color: rgb(var(--accent)); background: rgb(var(--accent) / 0.1); transform: translateY(-2px); }
	.trust {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		flex-wrap: wrap;
		margin-top: 1.5rem;
		font-size: 0.85rem;
		color: rgb(var(--muted));
		animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.48s both;
	}
	.trust strong { color: rgb(var(--ink)); }
	.stars { display: inline-flex; gap: 0.1rem; color: #f5b301; }
	.stars :global(svg) { fill: currentColor; }

	/* ── Visuel ── */
	.visual { position: relative; padding: 1.5rem 1.5rem 2rem; }
	.photo {
		position: relative;
		aspect-ratio: 5 / 4;
		border-radius: 2rem;
		overflow: hidden;
		box-shadow: 0 30px 70px rgba(30, 50, 5, 0.18);
		animation: reveal 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
	}
	.photo::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, transparent 55%, rgb(var(--night) / 0.35));
	}
	.photo img { width: 100%; height: 100%; object-fit: cover; object-position: center top; transform: scale(1.08); animation: zoom 1.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards; }

	.float {
		position: absolute;
		display: flex;
		align-items: center;
		gap: 0.65rem;
		padding: 0.7rem 0.95rem;
		border-radius: 1rem;
		background: rgb(var(--bg) / 0.92);
		backdrop-filter: blur(10px);
		border: 1px solid rgb(var(--line) / 0.06);
		box-shadow: 0 16px 40px rgba(30, 50, 5, 0.16);
		font-size: 0.8rem;
		color: rgb(var(--ink));
	}
	.float div { display: flex; flex-direction: column; line-height: 1.25; }
	.float strong { font-family: 'Space Grotesk', sans-serif; font-size: 1rem; }
	.float small { color: rgb(var(--muted)); font-size: 0.74rem; }
	.ico {
		width: 2.2rem;
		height: 2.2rem;
		border-radius: 0.7rem;
		display: grid;
		place-items: center;
		background: rgb(var(--accent));
		color: rgb(var(--night));
		flex-shrink: 0;
	}
	.ico.dark { background: rgb(var(--night)); color: rgb(var(--accent)); }
	.f1 { left: 0; top: 12%; animation: pop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s both, bob 6s ease-in-out 1.4s infinite; }
	.f2 { right: 0; top: 46%; animation: pop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s both, bob 7s ease-in-out 1.6s infinite reverse; }
	.f3 { left: 8%; bottom: 0; animation: pop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1.1s both, bob 6.5s ease-in-out 1.8s infinite; }

	@media (max-width: 1023px) {
		.visual { max-width: 34rem; margin: 0 auto; width: 100%; }
	}
	@media (max-width: 639px) {
		.hero { padding: 6.5rem 0 3rem; }
		.title { font-size: clamp(1.75rem, 8vw, 2.2rem); }
		.ctas { flex-direction: column; }
		.btn-primary, .btn-ghost { width: 100%; }
		.visual { padding: 1rem 0.5rem 1.5rem; }
		.float { padding: 0.55rem 0.75rem; }
		.float strong { font-size: 0.9rem; }
		.f1 { left: -0.25rem; }
		.f2 { right: -0.25rem; }
	}

	@keyframes rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
	@keyframes reveal { from { clip-path: inset(12% 12% 12% 12% round 2rem); } to { clip-path: inset(0 0 0 0 round 2rem); } }
	@keyframes zoom { to { transform: scale(1); } }
	@keyframes pop { from { opacity: 0; transform: translateY(14px) scale(0.85); } to { opacity: 1; transform: none; } }
	@keyframes bob { 0%, 100% { translate: 0 0; } 50% { translate: 0 -10px; } }
	@keyframes drift { to { transform: translate(-60px, 50px) scale(1.1); } }
	@keyframes underline { from { transform: scaleX(0); } to { transform: scaleX(1); } }
	@keyframes shine { 0% { transform: translateX(-120%); } 35%, 100% { transform: translateX(120%); } }

	@media (prefers-reduced-motion: reduce) {
		.blob, .float, .btn-primary::after { animation: none; }
		.photo img { transform: none; animation: none; }
	}
</style>
