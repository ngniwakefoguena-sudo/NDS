<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { services } from '$lib/data/services';
</script>

<Seo
	title="Services : sites web, apps mobiles, IA et automatisation"
	description="Création de sites web, applications mobiles, intégration IA, automatisation n8n, marketing digital et génération de leads pour les PME. Découvrez nos prestations."
/>

<div class="relative min-h-screen pt-32 pb-24 overflow-hidden">
	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none" style="background: radial-gradient(ellipse, rgba(152,200,22,0.18) 0%, transparent 70%);"></div>
	<div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(rgba(152,200,22,0.07) 1px, transparent 1px); background-size: 36px 36px;"></div>

	<div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">

		<div class="text-center mb-16">
			<div class="badge-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit mb-6">
				<span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
				<span class="text-[11px] font-semibold text-accent tracking-widest uppercase">Ce qu'on fait</span>
			</div>
			<h1 class="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-5">
				Nos <span class="bg-clip-text text-transparent" style="background-image: linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)));">Services</span>
			</h1>
			<p class="text-base text-muted max-w-xl mx-auto leading-relaxed">
				De la stratégie à la mise en production : web, mobile, IA, automatisation, marketing et formation.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
			{#each services as service}
				<div class="service-card group rounded-3xl p-6 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1" class:accent-card={service.accent}>
					<div class="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style="background: {service.iconBg}; box-shadow: 0 4px 14px rgba(0,0,0,0.15);">
						<service.icon class="w-5 h-5 text-white" />
					</div>
					<div class="flex flex-col gap-2">
						<h2 class="text-sm font-bold text-ink">
							{#if service.page}<a href="/services/{service.page.slug}" class="hover:underline">{service.title}</a>{:else}{service.title}{/if}
						</h2>
						<p class="text-sm text-muted leading-relaxed">{service.description}</p>
					</div>
					<div class="flex flex-wrap gap-1.5 mt-auto">
						{#each service.stack as tech}
							<span class="tech-pill px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-muted">{tech}</span>
						{/each}
					</div>
					<a href={service.page ? `/services/${service.page.slug}` : '/contact'} class="flex items-center gap-1 text-xs font-semibold text-accent">
						{service.page ? 'Découvrir ce service' : 'Discuter de ce service'}
						<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
					</a>
				</div>
			{/each}
		</div>

		<div class="text-center mt-20">
			<p class="text-muted mb-5 text-sm">Un projet qui ne rentre pas dans ces catégories ?</p>
			<a href="/contact" class="btn-pill inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white text-sm">
				Parlons de votre besoin
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
			</a>
		</div>
	</div>
</div>

<style>
	.badge-pill {
		background: var(--glass-bg);
		backdrop-filter: blur(12px);
		border: 1px solid var(--glass-border);
		box-shadow: 0 4px 14px rgba(80,110,20,0.09), inset 0 1px 0 rgba(255,255,255,1);
	}
	.service-card {
		background: var(--glass-bg);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid var(--glass-border);
		box-shadow: 0 8px 32px rgba(80,110,20,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
	}
	.accent-card {
		background: rgba(152,200,22,0.07);
		border-color: rgba(152,200,22,0.18);
	}
	.tech-pill {
		background: var(--glass-bg-md);
		border: 1px solid var(--glass-border-xs);
	}
	.btn-pill {
		background: linear-gradient(150deg, rgb(175,220,25), rgb(152,200,22), rgb(112,160,8));
		box-shadow: 0 8px 28px rgba(120,175,10,0.42), 0 2px 8px rgba(120,175,10,0.18);
		border-top: 1px solid rgba(255,255,255,0.25);
		transition: opacity 0.2s, transform 0.2s;
	}
	.btn-pill:hover { opacity: 0.88; transform: translateY(-1px); }
</style>
