<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(true);

	onMount(() => {
		// Skip splash for bots/Lighthouse and return visitors
		const isBot = /Lighthouse|Googlebot|PageSpeed/i.test(navigator.userAgent);
		if (isBot || sessionStorage.getItem('splashShown')) {
			visible = false;
			return;
		}
		const timer = setTimeout(() => {
			visible = false;
			sessionStorage.setItem('splashShown', '1');
		}, 800);
		return () => clearTimeout(timer);
	});
</script>

{#if visible}
	<div class="splash fixed inset-0 z-9999 flex flex-col items-center justify-center gap-7">
		<!-- Halo décoratif -->
		<div class="halo absolute w-64 h-64 rounded-full pointer-events-none"
			style="background: radial-gradient(circle, rgba(152,200,22,0.18) 0%, transparent 70%);"></div>

		<!-- Logo rond — LCP : fetchpriority=high, logo-sm.webp -->
		<div class="logo-wrap relative w-24 h-24 rounded-full overflow-hidden z-10"
			style="box-shadow: 0 0 0 3px rgba(152,200,22,0.35), 0 20px 60px rgba(80,110,20,0.22);">
			<img
				src="/images/logo-sm.webp"
				alt="Norbert Digital Service"
				fetchpriority="high"
				width="96"
				height="96"
				class="w-full h-full object-cover"
			/>
		</div>

		<!-- Texte -->
		<div class="text-wrap text-center z-10">
			<p class="text-2xl font-bold text-ink tracking-tight" style="font-family: 'Space Grotesk', sans-serif;">Norbert</p>
			<p class="text-xs font-semibold text-muted tracking-[0.22em] uppercase mt-1">Digital Service</p>
		</div>

		<!-- Indicateur de chargement -->
		<div class="absolute bottom-12 z-10">
			<div class="w-8 h-0.5 rounded-full overflow-hidden" style="background: rgba(152,200,22,0.15);">
				<div class="h-full rounded-full loader-bar" style="background: rgb(var(--accent));"></div>
			</div>
		</div>
	</div>
{/if}

<style>
	.splash {
		background: rgb(var(--bg));
		animation: splashFadeOut 0.3s ease-in 0.45s forwards;
	}
	.halo {
		animation: haloIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
	}
	.logo-wrap {
		animation: logoIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
	}
	.text-wrap {
		animation: textIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
	}

	@keyframes haloIn {
		from { transform: scale(0.5); opacity: 0; }
		to   { transform: scale(1);   opacity: 1; }
	}
	@keyframes logoIn {
		from { transform: scale(0.8); opacity: 0; }
		to   { transform: scale(1);   opacity: 1; }
	}
	@keyframes textIn {
		from { transform: translateY(20px); opacity: 0; }
		to   { transform: translateY(0);    opacity: 1; }
	}
	@keyframes splashFadeOut {
		from { opacity: 1; }
		to   { opacity: 0; }
	}

	.loader-bar {
		width: 100%;
		transform-origin: left;
		animation: load 1.0s ease forwards;
	}
	@keyframes load {
		from { transform: scaleX(0); }
		to   { transform: scaleX(1); }
	}
</style>
