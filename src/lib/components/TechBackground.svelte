<!--
	Fond animé « tech » sur toutes les pages : circuit imprimé avec des impulsions lumineuses
	qui parcourent les pistes, sur une trame de points qui défile lentement.
	CSS + SVG uniquement (aucun JS), ignoré par les lecteurs d’écran,
	désactivé si l’utilisateur demande moins d’animations.
-->
<div class="tech-bg" aria-hidden="true">
	<div class="tb-dots"></div>
	<svg class="tb-circuit" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
		<g class="traces">
		<path d="M0 160 H120 V250 H240 V460" />
		<path d="M120 0 V90 H480 V360" />
		<path d="M0 220 H360 V310 H480" />
		<path d="M600 0 V270 H720 V420 H840 V570" />
		<path d="M0 400 H120 V610 H320" />
		<path d="M280 0 V90 H400 V180 H600" />
		<path d="M0 640 H360 V850 H720 V900 H1000" />
		<path d="M760 0 V150 H880 V360" />
		<path d="M0 460 H360 V670 H480 V760" />
		<path d="M1320 0 V210 H1440 V480" />
		<path d="M0 40 H120 V250 H400 V460 H760" />
		<path d="M1160 0 V210 H1440 V300" />
		<path d="M0 700 H280 V900 H560 V900 H840" />
		<path d="M40 0 V150 H160 V420 H280" />
		<path d="M0 760 H200 V900 H560 V900" />
		<path d="M1240 0 V270 H1440 V480" />
		</g>
		<g class="pulses">
		<path d="M0 160 H120 V250 H240 V460" style="animation-delay:0.0s;animation-duration:5s" />
		<path d="M120 0 V90 H480 V360" style="animation-delay:-0.8s;animation-duration:6s" />
		<path d="M0 220 H360 V310 H480" style="animation-delay:-1.6s;animation-duration:7s" />
		<path d="M600 0 V270 H720 V420 H840 V570" style="animation-delay:-2.4s;animation-duration:8s" />
		<path d="M0 400 H120 V610 H320" style="animation-delay:-3.2s;animation-duration:9s" />
		<path d="M280 0 V90 H400 V180 H600" style="animation-delay:-4.0s;animation-duration:5s" />
		<path d="M0 640 H360 V850 H720 V900 H1000" style="animation-delay:-4.8s;animation-duration:6s" />
		<path d="M760 0 V150 H880 V360" style="animation-delay:-5.6s;animation-duration:7s" />
		<path d="M0 460 H360 V670 H480 V760" style="animation-delay:-6.4s;animation-duration:8s" />
		<path d="M1320 0 V210 H1440 V480" style="animation-delay:-7.2s;animation-duration:9s" />
		<path d="M0 40 H120 V250 H400 V460 H760" style="animation-delay:-8.0s;animation-duration:5s" />
		<path d="M1160 0 V210 H1440 V300" style="animation-delay:-8.8s;animation-duration:6s" />
		<path d="M0 700 H280 V900 H560 V900 H840" style="animation-delay:-9.6s;animation-duration:7s" />
		<path d="M40 0 V150 H160 V420 H280" style="animation-delay:-10.4s;animation-duration:8s" />
		<path d="M0 760 H200 V900 H560 V900" style="animation-delay:-11.2s;animation-duration:9s" />
		<path d="M1240 0 V270 H1440 V480" style="animation-delay:-12.0s;animation-duration:5s" />
		</g>
		<g class="nodes">
		<circle cx="240" cy="460" r="3.5" style="animation-delay:0.0s" />
		<circle cx="480" cy="360" r="3.5" style="animation-delay:-0.6s" />
		<circle cx="480" cy="310" r="3.5" style="animation-delay:-1.2s" />
		<circle cx="840" cy="570" r="3.5" style="animation-delay:-1.8s" />
		<circle cx="320" cy="610" r="3.5" style="animation-delay:-2.4s" />
		<circle cx="600" cy="180" r="3.5" style="animation-delay:-3.0s" />
		<circle cx="1000" cy="900" r="3.5" style="animation-delay:-3.6s" />
		<circle cx="880" cy="360" r="3.5" style="animation-delay:-4.2s" />
		<circle cx="480" cy="760" r="3.5" style="animation-delay:-4.8s" />
		<circle cx="1440" cy="480" r="3.5" style="animation-delay:-5.4s" />
		<circle cx="760" cy="460" r="3.5" style="animation-delay:-6.0s" />
		<circle cx="1440" cy="300" r="3.5" style="animation-delay:-6.6s" />
		<circle cx="840" cy="900" r="3.5" style="animation-delay:-7.2s" />
		<circle cx="280" cy="420" r="3.5" style="animation-delay:-7.8s" />
		<circle cx="560" cy="900" r="3.5" style="animation-delay:-8.4s" />
		<circle cx="1440" cy="480" r="3.5" style="animation-delay:-9.0s" />
		</g>
	</svg>
</div>

<style>
	.tech-bg {
		position: fixed;
		inset: 0;
		z-index: 1;
		pointer-events: none;
		overflow: hidden;
		contain: strict;
		-webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 45%, #000 35%, transparent 85%);
		mask-image: radial-gradient(ellipse 90% 80% at 50% 45%, #000 35%, transparent 85%);
	}
	.tb-dots {
		position: absolute;
		inset: -40px 0 0 0;
		background-image: radial-gradient(rgb(var(--accent) / 0.22) 1.2px, transparent 1.4px);
		background-size: 40px 40px;
		animation: tb-drift 10s linear infinite;
		will-change: transform;
	}
	@keyframes tb-drift {
		to { transform: translate3d(0, 40px, 0); }
	}
	.tb-circuit { position: absolute; inset: 0; width: 100%; height: 100%; }
	.traces path { fill: none; stroke: rgb(var(--accent) / 0.13); stroke-width: 1.2; }
	.pulses path {
		fill: none;
		stroke: rgb(var(--accent));
		stroke-width: 2;
		stroke-linecap: round;
		stroke-dasharray: 60 1600;
		stroke-dashoffset: 1660;
		opacity: 0.55;
		filter: drop-shadow(0 0 4px rgb(var(--accent) / 0.9));
		animation: tb-pulse linear infinite;
	}
	@keyframes tb-pulse {
		to { stroke-dashoffset: 0; }
	}
	.nodes circle {
		fill: rgb(var(--accent));
		opacity: 0.25;
		animation: tb-node 4s ease-in-out infinite;
	}
	@keyframes tb-node {
		50% { opacity: 0.7; }
	}
	@media (max-width: 767px) {
		.pulses path:nth-child(odd) { display: none; }
	}
	@media (prefers-reduced-motion: reduce) {
		.tb-dots, .pulses path, .nodes circle { animation: none; }
		.pulses { display: none; }
	}
	@media print {
		.tech-bg { display: none; }
	}
</style>
