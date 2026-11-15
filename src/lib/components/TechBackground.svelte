<!--
	Fond animé sur toutes les pages : de grandes taches de lumière douce (vert citron, menthe, soleil)
	qui dérivent lentement, comme une aurore. CSS uniquement, ignoré par les lecteurs d’écran,
	figé si l’utilisateur demande moins d’animations.
-->
<div class="aurora" aria-hidden="true">
	<span class="a1"></span>
	<span class="a2"></span>
	<span class="a3"></span>
</div>

<style>
	.aurora {
		position: fixed;
		inset: 0;
		z-index: 1;
		pointer-events: none;
		overflow: hidden;
		contain: strict;
		mix-blend-mode: multiply;
	}
	:global([data-theme='dark']) .aurora { mix-blend-mode: screen; opacity: 0.6; }
	.aurora span {
		position: absolute;
		width: 55vmax;
		height: 55vmax;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.3;
		will-change: transform;
	}
	.a1 {
		top: -20vmax;
		left: -15vmax;
		background: radial-gradient(circle, rgb(var(--accent)) 0%, transparent 65%);
		animation: drift1 28s ease-in-out infinite alternate;
	}
	.a2 {
		bottom: -25vmax;
		right: -20vmax;
		background: radial-gradient(circle, #5ee0c0 0%, transparent 65%);
		animation: drift2 34s ease-in-out infinite alternate;
	}
	.a3 {
		top: 30%;
		left: 40%;
		width: 40vmax;
		height: 40vmax;
		background: radial-gradient(circle, #ffd76a 0%, transparent 65%);
		opacity: 0.22;
		animation: drift3 40s ease-in-out infinite alternate;
	}
	@keyframes drift1 {
		to { transform: translate3d(35vw, 30vh, 0) scale(1.15); }
	}
	@keyframes drift2 {
		to { transform: translate3d(-40vw, -35vh, 0) scale(0.9); }
	}
	@keyframes drift3 {
		0% { transform: translate3d(-20vw, -10vh, 0) scale(0.9); }
		100% { transform: translate3d(15vw, 20vh, 0) scale(1.2); }
	}
	@media (max-width: 767px) {
		.aurora span { filter: blur(60px); }
	}
	@media (prefers-reduced-motion: reduce) {
		.aurora span { animation: none; }
	}
	@media print {
		.aurora { display: none; }
	}
</style>
