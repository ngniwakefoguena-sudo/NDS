<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { Lightbulb, Shield, Users } from 'lucide-svelte';
	import { onMount } from 'svelte';

	const values = [
		{ icon: Lightbulb, title: 'Innovation', description: 'We use the latest technologies to build lasting solutions that set you apart.', iconBg: 'linear-gradient(135deg, rgb(152,200,22), rgb(112,160,8))' },
		{ icon: Shield, title: 'Reliability', description: 'Tested code, stable deployments, clear documentation. We deliver what we promise, on time.', iconBg: 'linear-gradient(135deg, #10b981, #06b6d4)' },
		{ icon: Users, title: 'Closeness', description: 'One dedicated contact, regular check-ins and full transparency throughout every project, wherever you are.', iconBg: 'linear-gradient(135deg, #f59e0b, #ef4444)' },
	];

	let statsVisible = $state(false);
	
	let count1 = $state(0);
	let count2 = $state(0);
	let count3 = $state(0);

	function animateValue(target: number, setter: (v: number) => void, duration: number) {
		let startTimestamp: number | null = null;
		const step = (timestamp: number) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			const easeProgress = 1 - Math.pow(1 - progress, 3);
			setter(Math.floor(easeProgress * target));
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

	$effect(() => {
		if (statsVisible) {
			animateValue(120, (v) => count1 = v, 2000);
			animateValue(30, (v) => count2 = v, 1500);
			animateValue(250, (v) => count3 = v, 2500);
		}
	});

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				statsVisible = true;
				observer.disconnect();
			}
		});
		const el = document.getElementById('stats-section');
		if (el) observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<Seo
	title="About us: a remote web development & digital agency"
	description="Norbert Digital Service is an independent digital agency: multichannel marketing strategy, website development, AI and automation for businesses worldwide, 100% remote."
/>

<div class="relative min-h-screen pt-32 pb-24 overflow-hidden" style="background: rgb(var(--bg));">
	<div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px); background-size: 36px 36px;"></div>

	<div class="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">

		<!-- Header -->
		<div class="mb-20">
			<div class="badge-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full border w-fit mb-6">
				<span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
				<span class="text-[11px] font-semibold text-accent tracking-widest uppercase">Our story</span>
			</div>
			<div class="grid md:grid-cols-2 gap-12 items-start">
				<div>
					<h1 class="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6 leading-[1.08]">
						A team passionate about
						<span class="bg-clip-text text-transparent" style="background-image: linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)));">digital</span>
					</h1>
					<a href="/en/contact" class="btn-pill inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white text-sm">
						Work with us
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
					</a>
				</div>
				<div class="flex flex-col gap-4">
					<p class="text-sm text-muted leading-relaxed">Founded by hands-on developers and designers, Norbert Digital Service helps businesses around the world with their digital transformation, fully remote.</p>
					<p class="text-sm text-muted leading-relaxed">Our mission: deliver innovative, reliable and scalable solutions that measurably improve our clients’ performance, without unnecessary jargon.</p>
				</div>
			</div>
		</div>

		<!-- Stats -->
		<div id="stats-section" class="stats-card mb-20 p-10 md:p-12 rounded-3xl">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
				<div class="stat-item fade-up">
					<p class="text-5xl md:text-6xl font-extrabold text-ink mb-3 tracking-tight">+{count1}</p>
					<p class="text-sm text-muted font-bold uppercase tracking-widest">SEO strategies</p>
				</div>
				<div class="stat-item fade-up" style="animation-delay: 0.1s;">
					<p class="text-5xl md:text-6xl font-extrabold text-ink mb-3 tracking-tight">+{count2}</p>
					<p class="text-sm text-muted font-bold uppercase tracking-widest">Clients</p>
				</div>
				<div class="stat-item fade-up" style="animation-delay: 0.2s;">
					<p class="text-5xl md:text-6xl font-extrabold text-ink mb-3 tracking-tight">+{count3}</p>
					<p class="text-sm text-muted font-bold uppercase tracking-widest">Leads generated</p>
				</div>
			</div>
		</div>

		<!-- Values -->
		<div class="mb-20">
			<h2 class="text-2xl font-bold text-ink mb-10 tracking-tight">Our values</h2>
			<div class="grid md:grid-cols-3 gap-6">
				{#each values as value}
					<div class="value-card rounded-3xl p-8 flex flex-col gap-5">
						<div class="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style="background: {value.iconBg}; box-shadow: 0 4px 14px rgba(0,0,0,0.12);">
							<value.icon class="w-6 h-6 text-white" />
						</div>
						<div>
							<h3 class="text-base font-bold text-ink mb-3">{value.title}</h3>
							<p class="text-sm text-muted leading-relaxed">{value.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- CTA -->
		<div class="cta-card rounded-3xl p-10 text-center relative overflow-hidden">
			<div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at center, rgba(0,0,0,0.03) 0%, transparent 70%);"></div>
			<h2 class="text-2xl font-bold text-ink mb-3 relative z-10">Ready to start your project?</h2>
			<p class="text-muted text-sm mb-7 relative z-10">Let’s discuss your goals and build the right solution together.</p>
			<a href="/en/contact" class="btn-pill inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white text-sm relative z-10">
				Contact us
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
			</a>
		</div>
	</div>
</div>

<style>
	.badge-pill {
		background: rgb(var(--surface));
		border: 1px solid rgba(0,0,0,0.08);
		box-shadow: 0 2px 8px rgba(0,0,0,0.04);
	}
	.stats-card {
		background: rgb(var(--surface));
		border: 1px solid rgba(0,0,0,0.06);
		box-shadow: 0 4px 24px rgba(0,0,0,0.03);
	}
	.stat-item p:first-child {
		background: linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.value-card {
		background: rgb(var(--surface));
		border: 1px solid rgba(0,0,0,0.06);
		box-shadow: 0 2px 12px rgba(0,0,0,0.03);
		transition: transform 0.3s, box-shadow 0.3s;
	}
	.value-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0,0,0,0.06);
	}
	.cta-card {
		background: rgb(var(--surface));
		border: 1px solid rgba(0,0,0,0.06);
		box-shadow: 0 8px 32px rgba(0,0,0,0.04);
	}
	.btn-pill {
		background: linear-gradient(135deg, #98C816, #70A008);
		box-shadow: 0 4px 14px rgba(120,175,10,0.3);
		border: none;
		transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
	}
	.btn-pill:hover {
		opacity: 0.9;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(120,175,10,0.4);
	}
	.fade-up {
		animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
	}
	@keyframes fadeUp {
		from { opacity: 0; transform: translateY(30px); }
		to { opacity: 1; transform: translateY(0); }
	}
	@media (prefers-reduced-motion: reduce) {
		.fade-up { animation: none; opacity: 1; transform: none; }
	}
</style>
