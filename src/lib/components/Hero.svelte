<script lang="ts">
	import { ArrowRight, Code, Smartphone, Brain, TrendingUp, CreditCard } from 'lucide-svelte';
</script>

<!-- Hero : image plein écran + overlay + texte + card -->
<section class="hero-section relative overflow-hidden">

	<!-- Image de fond -->
	<div class="absolute inset-0 z-0">
		<img
			src="/images/hero-bg.webp"
			alt=""
			fetchpriority="high"
			decoding="async"
			width="1200"
			height="1200"
			class="w-full h-full object-cover"
			style="object-position: center center;"
		/>
		<!-- Overlay sombre pour lisibilité du texte -->
		<div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(8,14,6,0.92) 0%, rgba(8,14,6,0.72) 45%, rgba(8,14,6,0.50) 100%);"></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">

		<div class="hero-grid flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10 lg:gap-14 md:items-center">

			<!-- Colonne texte (gauche) -->
			<div class="anim-content flex flex-col items-center md:items-start gap-4 md:gap-6">


				<!-- Titre — centré mobile, gauche desktop -->
				<h1 class="text-3xl md:text-5xl lg:text-[60px] font-bold tracking-tight leading-[1.08] text-white text-center md:text-left" style="font-family: 'Space Grotesk', sans-serif;">
					SOLUTIONS<br />
					<span class="hero-handwritten" style="font-family: 'Kaushan Script', cursive; font-size: 1.15em; color: #98C816; display: inline-block; transform: rotate(-2deg); letter-spacing: 0.01em;">Intelligentes</span><br />
					QUI PERFORMENT
				</h1>

				<!-- Description — centrée mobile -->
				<p class="text-sm md:text-base leading-relaxed max-w-[500px] text-center md:text-left" style="color: rgba(255,255,255,0.70);">
					Norbert Digital Service accompagne votre transformation numérique. Développement Web & Mobile, Intelligence Artificielle, automatisation, SEO/GEO et génération de leads : nous couvrons l'ensemble de vos besoins digitaux. Notre mission ? Transformer vos défis technologiques en véritables opportunités de croissance. Plus qu'un prestataire, un partenaire de confiance.
				</p>

				<!-- CTAs — centrés, compacts -->
				<div class="flex gap-2 items-center justify-center md:justify-start">
					<a href="/contact" class="btn-primary-hero inline-flex items-center justify-center gap-1.5 px-3.5 md:px-4 py-2 md:py-2.5 rounded font-semibold text-[11px] md:text-xs whitespace-nowrap">
						Démarrer un projet
						<ArrowRight class="w-3.5 h-3.5" />
					</a>
					<!-- Bouton "Carte fidélité" masqué temporairement
					<a href="http://app.norbertdigitalservice.fr" target="_blank" rel="noopener" class="btn-ghost-hero inline-flex items-center justify-center gap-1.5 px-3.5 md:px-4 py-2 md:py-2.5 rounded font-semibold text-[11px] md:text-xs whitespace-nowrap">
						<CreditCard class="w-3.5 h-3.5" />
						Carte fidélité
					</a>
					-->
				</div>

				<!-- Highlights mobile — après les boutons -->
				<div class="md:hidden grid grid-cols-2 gap-1.5 mb-4">
					<div class="rounded px-2.5 py-2 flex items-center gap-2" style="background: linear-gradient(135deg, #98C816, #70A008);">
						<Code class="w-3.5 h-3.5 text-white flex-shrink-0" />
						<div>
							<p class="text-sm font-bold text-white leading-tight" style="font-family: 'Space Grotesk', sans-serif;">15+</p>
							<p class="text-[8px] text-white/70 font-medium">Projets livrés</p>
						</div>
					</div>
					<div class="rounded px-2.5 py-2 flex items-center gap-2" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);">
						<Smartphone class="w-3.5 h-3.5 flex-shrink-0" style="color: #98C816;" />
						<div>
							<p class="text-sm font-bold text-white leading-tight" style="font-family: 'Space Grotesk', sans-serif;">5 ans</p>
							<p class="text-[8px] font-medium" style="color: rgba(255,255,255,0.50);">D'expertise</p>
						</div>
					</div>
					<div class="rounded px-2.5 py-2 flex items-center gap-2" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);">
						<Brain class="w-3.5 h-3.5 flex-shrink-0" style="color: #98C816;" />
						<div>
							<p class="text-sm font-bold text-white leading-tight" style="font-family: 'Space Grotesk', sans-serif;">98%</p>
							<p class="text-[8px] font-medium" style="color: rgba(255,255,255,0.50);">Satisfaction</p>
						</div>
					</div>
					<div class="rounded px-2.5 py-2 flex items-center gap-2" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);">
						<TrendingUp class="w-3.5 h-3.5 flex-shrink-0" style="color: #98C816;" />
						<div>
							<p class="text-sm font-bold text-white leading-tight" style="font-family: 'Space Grotesk', sans-serif;">+40%</p>
							<p class="text-[8px] font-medium" style="color: rgba(255,255,255,0.50);">Croissance</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Colonne card stats (droite) — masquée sur mobile -->
			<div class="anim-card hidden md:block relative w-full max-w-sm mx-auto md:max-w-none">

				<div class="stats-card rounded-lg p-6">

					<!-- Header -->
					<div class="flex items-start justify-between mb-5">
						<div>
							<p class="text-[11px] font-semibold uppercase tracking-widest mb-1" style="color: rgba(255,255,255,0.45); font-family: 'Space Grotesk', sans-serif;">Projets actifs</p>
							<p class="text-2xl font-bold text-white" style="font-family: 'Space Grotesk', sans-serif;">15 projets et +</p>
						</div>
						<div class="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold" style="background: rgba(34,197,94,0.15); border: 1px solid rgba(34,197,94,0.25); color: #4ade80;">
							<span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background: #4ade80;"></span>
							En direct
						</div>
					</div>

					<!-- Chart -->
					<div class="rounded-md p-4 mb-4" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);">
						<p class="text-[11px] font-medium mb-3" style="color: rgba(255,255,255,0.40);">Croissance sur 12 mois</p>
						<svg viewBox="0 0 280 56" class="w-full h-14" fill="none">
							<defs>
								<linearGradient id="hl" x1="0" y1="0" x2="1" y2="0">
									<stop offset="0%" stop-color="#98C816" />
									<stop offset="100%" stop-color="#70A008" />
								</linearGradient>
								<linearGradient id="hf" x1="0" y1="0" x2="0" y2="1">
									<stop offset="0%" stop-color="#98C816" stop-opacity="0.25" />
									<stop offset="100%" stop-color="#98C816" stop-opacity="0" />
								</linearGradient>
							</defs>
							<path d="M0,46 C18,44 30,36 50,28 C70,20 85,32 110,18 C135,6 148,18 170,12 C192,6 210,14 235,8 C252,4 268,3 280,2" stroke="url(#hl)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
							<path d="M0,46 C18,44 30,36 50,28 C70,20 85,32 110,18 C135,6 148,18 170,12 C192,6 210,14 235,8 C252,4 268,3 280,2 L280,56 L0,56 Z" fill="url(#hf)"/>
						</svg>
					</div>

					<!-- Metrics -->
					<div class="grid grid-cols-3 gap-2">
						<div class="rounded-md p-3 text-center" style="background: rgba(152,200,22,0.10); border: 1px solid rgba(152,200,22,0.20);">
							<p class="text-[10px] font-medium mb-1" style="color: rgba(255,255,255,0.45);">Web</p>
							<p class="text-lg font-bold" style="color: #98C816; font-family: 'Space Grotesk', sans-serif;">+7</p>
						</div>
						<div class="rounded-md p-3 text-center" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
							<p class="text-[10px] font-medium mb-1" style="color: rgba(255,255,255,0.45);">Mobile</p>
							<p class="text-lg font-bold text-white" style="font-family: 'Space Grotesk', sans-serif;">+5</p>
						</div>
						<div class="rounded-md p-3 text-center" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
							<p class="text-[10px] font-medium mb-1" style="color: rgba(255,255,255,0.45);">IA</p>
							<p class="text-lg font-bold text-white" style="font-family: 'Space Grotesk', sans-serif;">+3</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bandeau Highlights desktop — masqué sur mobile -->
	<div class="hidden md:block relative z-10 mt-8 md:mt-12 pb-6 md:pb-8">
		<div class="max-w-4xl mx-auto px-4 md:px-6">
			<div class="grid grid-cols-4 gap-2">
				<div class="rounded-md px-4 py-3.5 flex items-center gap-3" style="background: linear-gradient(135deg, #98C816, #70A008);">
					<Code class="w-5 h-5 text-white flex-shrink-0" />
					<div>
						<p class="text-lg font-bold text-white leading-tight" style="font-family: 'Space Grotesk', sans-serif;">15+</p>
						<p class="text-[10px] text-white/70 font-medium">Projets livrés</p>
					</div>
				</div>
				<div class="rounded-md px-4 py-3.5 flex items-center gap-3" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);">
					<Smartphone class="w-5 h-5 flex-shrink-0" style="color: #98C816;" />
					<div>
						<p class="text-lg font-bold text-white leading-tight" style="font-family: 'Space Grotesk', sans-serif;">5 ans</p>
						<p class="text-[10px] font-medium" style="color: rgba(255,255,255,0.50);">D'expertise</p>
					</div>
				</div>
				<div class="rounded-md px-4 py-3.5 flex items-center gap-3" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);">
					<Brain class="w-5 h-5 flex-shrink-0" style="color: #98C816;" />
					<div>
						<p class="text-lg font-bold text-white leading-tight" style="font-family: 'Space Grotesk', sans-serif;">98%</p>
						<p class="text-[10px] font-medium" style="color: rgba(255,255,255,0.50);">Satisfaction</p>
					</div>
				</div>
				<div class="rounded-md px-4 py-3.5 flex items-center gap-3" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);">
					<TrendingUp class="w-5 h-5 flex-shrink-0" style="color: #98C816;" />
					<div>
						<p class="text-lg font-bold text-white leading-tight" style="font-family: 'Space Grotesk', sans-serif;">+40%</p>
						<p class="text-[10px] font-medium" style="color: rgba(255,255,255,0.50);">Croissance</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-section {
		padding: 9.5rem 0 0;
		background: #080e06;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@keyframes fadeUp {
		from { opacity: 0; transform: translateY(28px); }
		to   { opacity: 1; transform: translateY(0); }
	}
	@keyframes fadeUpCard {
		from { opacity: 0; transform: translateY(32px) scale(0.97); }
		to   { opacity: 1; transform: translateY(0) scale(1); }
	}

	.anim-content { animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
	.anim-card    { animation: fadeUpCard 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both; }

	.btn-primary-hero {
		background: linear-gradient(135deg, #98C816, #70A008);
		color: white;
		letter-spacing: 0.06em;
		box-shadow: 0 8px 28px rgba(120, 175, 10, 0.4);
		transition: opacity 0.2s, transform 0.2s;
		border-top: 1px solid rgba(255,255,255,0.15);
	}
	.btn-primary-hero:hover { opacity: 0.9; transform: translateY(-1px); }

	.btn-ghost-hero {
		background: rgba(255,255,255,0.06);
		border: 1px solid rgba(255,255,255,0.18);
		color: white;
		letter-spacing: 0.06em;
		transition: background 0.2s, transform 0.2s;
	}
	.btn-ghost-hero:hover { background: rgba(255,255,255,0.12); transform: translateY(-1px); }

	.stats-card {
		background: rgba(14, 20, 10, 0.60);
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
		border: 1px solid rgba(255,255,255,0.08);
		box-shadow: 0 24px 60px rgba(0,0,0,0.3);
	}

	@media (max-width: 767px) {
		.hero-section {
			padding: 5.5rem 0 0;
			min-height: auto;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.anim-content, .anim-card { animation: none; opacity: 1; transform: none; }
	}
</style>
