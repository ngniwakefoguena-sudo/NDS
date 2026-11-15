<!--
	Fond animé « tech » sur toutes les pages : grille fine qui défile + flux de données.
	Purement décoratif : CSS uniquement (aucun JS), transform GPU, ignoré par les lecteurs d’écran,
	désactivé si l’utilisateur demande moins d’animations.
-->
<div class="tech-bg" aria-hidden="true">
	<div class="tb-grid"></div>
	<div class="tb-beams">
		{#each [8, 21, 34, 47, 60, 73, 86, 95] as left, i}
			<span style="left: {left}%; animation-delay: {-(i * 1.7)}s; animation-duration: {7 + (i % 4) * 1.5}s"></span>
		{/each}
	</div>
	<div class="tb-dots">
		{#each [[12, 18], [28, 62], [44, 30], [63, 78], [79, 22], [91, 55], [6, 84], [53, 48]] as [x, y], i}
			<i style="left: {x}%; top: {y}%; animation-delay: {-(i * 0.9)}s"></i>
		{/each}
	</div>
</div>

<style>
	.tech-bg {
		position: fixed;
		inset: 0;
		z-index: 1;
		pointer-events: none;
		overflow: hidden;
		contain: strict;
	}
	.tb-grid {
		position: absolute;
		inset: -96px 0 0 0;
		background-image:
			linear-gradient(rgb(var(--accent) / 0.11) 1px, transparent 1px),
			linear-gradient(90deg, rgb(var(--accent) / 0.11) 1px, transparent 1px);
		background-size: 96px 96px;
		-webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, #000 25%, transparent 80%);
		mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, #000 25%, transparent 80%);
		animation: tb-scroll 14s linear infinite;
		will-change: transform;
	}
	@keyframes tb-scroll {
		to { transform: translate3d(0, 96px, 0); }
	}
	.tb-beams span {
		position: absolute;
		top: 0;
		width: 1px;
		height: 140px;
		background: linear-gradient(180deg, transparent, rgb(var(--accent) / 0.9), transparent);
		animation: tb-fall linear infinite;
		will-change: transform;
		opacity: 0.75;
		box-shadow: 0 0 6px rgb(var(--accent) / 0.5);
	}
	@keyframes tb-fall {
		from { transform: translate3d(0, -160px, 0); }
		to { transform: translate3d(0, 110vh, 0); }
	}
	.tb-dots i {
		position: absolute;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: rgb(var(--accent));
		box-shadow: 0 0 10px rgb(var(--accent) / 0.8);
		opacity: 0;
		animation: tb-blink 6s ease-in-out infinite;
	}
	@keyframes tb-blink {
		0%, 100% { opacity: 0; transform: scale(0.6); }
		50% { opacity: 0.7; transform: scale(1); }
	}
	@media (max-width: 767px) {
		.tb-beams span:nth-child(even), .tb-dots i:nth-child(even) { display: none; }
	}
	@media (prefers-reduced-motion: reduce) {
		.tb-grid, .tb-beams span, .tb-dots i { animation: none; }
		.tb-beams, .tb-dots { display: none; }
	}
	@media print {
		.tech-bg { display: none; }
	}
</style>
