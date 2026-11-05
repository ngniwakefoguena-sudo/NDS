<script lang="ts">
	import type { PageData } from './$types';
	import { ArrowUpRight } from 'lucide-svelte';

	let { data }: { data: PageData } = $props();

	function formatDate(d: string) {
		return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
	}
</script>

<svelte:head><title>Blog | Norbert Digital Service</title></svelte:head>

<div class="relative min-h-screen pt-32 pb-24 overflow-hidden">
	<div class="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style="background: radial-gradient(circle, rgba(152,200,22,0.15) 0%, transparent 65%);"></div>
	<div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(rgba(152,200,22,0.07) 1px, transparent 1px); background-size: 36px 36px;"></div>

	<div class="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">

		<div class="text-center mb-14">
			<div class="badge-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit mb-6">
				<span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
				<span class="text-[11px] font-semibold text-accent tracking-widest uppercase">Notre blog</span>
			</div>
			<h1 class="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-5">
				Insights &amp; <span class="bg-clip-text text-transparent" style="background-image: linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)));">Expertise</span>
			</h1>
			<p class="text-base text-muted max-w-lg mx-auto leading-relaxed">
				Nos réflexions sur le web, le mobile, l'IA et les tendances du digital.
			</p>
		</div>

		{#if data.posts.length === 0}
			<p class="text-center text-muted py-20">Aucun article pour l'instant.</p>
		{:else}
			<div class="flex flex-col gap-5">
				{#each data.posts as post}
					<a href="/blog/{post.slug}" class="post-card group rounded-3xl p-6 flex flex-col sm:flex-row gap-5 transition-all duration-300 hover:-translate-y-0.5">
						{#if post.cover}
							<div class="w-full sm:w-40 h-32 rounded-2xl overflow-hidden flex-shrink-0">
								<img src={post.cover} alt={post.title} loading="lazy" decoding="async" width="600" height="400" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
							</div>
						{:else}
							<div class="w-full sm:w-40 h-32 rounded-2xl flex-shrink-0 flex items-center justify-center" style="background: rgba(152,200,22,0.08); border: 1px solid rgba(152,200,22,0.15);">
								<span class="text-3xl">✍️</span>
							</div>
						{/if}
						<div class="flex flex-col gap-2 flex-1 min-w-0">
							<div class="flex items-center gap-2 flex-wrap">
								{#each (post.tags ?? []).slice(0, 3) as tag}
									<span class="tag-pill px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-muted">{tag}</span>
								{/each}
								<span class="text-xs text-muted ml-auto">{formatDate(post.date)}</span>
							</div>
							<h2 class="text-base font-bold text-ink leading-snug group-hover:text-accent transition-colors">{post.title}</h2>
							<p class="text-sm text-muted leading-relaxed line-clamp-2">{post.summary}</p>
							<div class="flex items-center gap-1 text-xs font-semibold text-accent mt-auto pt-1">
								Lire l'article
								<ArrowUpRight class="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.badge-pill {
		background: var(--glass-bg);
		backdrop-filter: blur(12px);
		border: 1px solid var(--glass-border);
		box-shadow: 0 4px 14px rgba(80,110,20,0.09), inset 0 1px 0 rgba(255,255,255,1);
	}
	.post-card {
		background: var(--glass-bg);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid var(--glass-border);
		box-shadow: 0 8px 32px rgba(80,110,20,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
	}
	.tag-pill {
		background: var(--glass-bg-md);
		border: 1px solid var(--glass-border-xs);
	}
</style>
