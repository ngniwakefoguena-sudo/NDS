<script lang="ts">
	import { Moon, Sun, Menu, X } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let isDark = $state(false);
	let menuOpen = $state(false);
	let scrolled = $state(false);
	// L'accueil a désormais un haut de page clair : texte sombre partout
	const heroMode = false;

	onMount(() => {
		isDark = document.documentElement.getAttribute('data-theme') === 'dark';

		const onScroll = () => { scrolled = window.scrollY > 20; };
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function toggleTheme() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.removeAttribute('data-theme');
		}
	}

	const links = [
		{ href: '/', label: 'Accueil' },
		{ href: '/services', label: 'Services' },
		{ href: '/projects', label: 'Réalisations' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/about', label: 'À Propos' },
		{ href: '/contact', label: 'Contact' },
	];

	const waLink = `https://wa.me/33659173774?text=${encodeURIComponent('Salut , Je souhaite en savoir plus sur vos services digitaux')}`;
</script>

<nav
	class="fixed left-0 w-full z-50 transition-all duration-300 nav-bar"
	style={scrolled
		? 'background: var(--glass-bg-strong); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border-bottom: 1px solid var(--glass-border); box-shadow: 0 4px 24px rgba(80,110,20,0.09);'
		: 'background: transparent;'}
>
	<div class="max-w-7xl mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">

		<!-- Logo -->
		<a href="/" class="flex items-center gap-2.5">
			<div class="logo-ring w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
				<img src="/images/logo-sm.webp" alt="" fetchpriority="high" class="w-full h-full object-cover" width="80" height="80" />
			</div>
			<div class="flex flex-col leading-none" style="font-family: 'Space Grotesk', sans-serif;">
			<span class="text-[15px] font-bold tracking-tight transition-colors duration-300" style="{heroMode ? 'color: #ffffff;' : 'color: rgb(var(--ink));'}">Norbert</span>
				<span class="text-[11px] font-semibold tracking-widest uppercase transition-colors duration-300" style="{heroMode ? 'color: rgba(255,255,255,0.65);' : 'color: rgb(var(--muted));'}">Digital Service</span>
			</div>
		</a>

		<!-- Desktop links -->
		<div class="hidden xl:flex items-center gap-5">
			{#each links as link}
				<a href={link.href} class="text-[14px] font-medium whitespace-nowrap transition-colors duration-200" style="font-family: 'Space Grotesk', sans-serif; {heroMode ? 'color: rgba(255,255,255,0.85);' : 'color: rgb(var(--muted));'}" onmouseenter={(e) => e.currentTarget.style.color = heroMode ? '#ffffff' : 'rgb(var(--ink))'} onmouseleave={(e) => e.currentTarget.style.color = heroMode ? 'rgba(255,255,255,0.85)' : 'rgb(var(--muted))'}>{link.label}</a>
			{/each}

			<div class="h-4 w-px" style="background: var(--glass-border);"></div>

			<!-- WhatsApp -->
			<a
				href={waLink}
				target="_blank"
				rel="noopener"
				aria-label="WhatsApp"
				class="wa-btn flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[13px] font-semibold transition-all"
			>
				<svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
				</svg>
				<span class="hidden lg:inline">+33 6 59 17 37 74</span>
			</a>

			<button
				onclick={toggleTheme}
				class="p-1.5 rounded-lg transition-colors text-muted hover:text-ink"
				style="background: var(--glass-bg); border: 1px solid var(--glass-border);"
				aria-label="Basculer le thème"
			>
				{#if isDark}
					<Sun class="w-4 h-4" />
				{:else}
					<Moon class="w-4 h-4" />
				{/if}
			</button>

			<a
				href="/contact"
				class="px-5 py-2 rounded-lg text-[14px] font-semibold text-white whitespace-nowrap transition-opacity hover:opacity-85"
				style="background: linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2))); box-shadow: 0 6px 20px rgba(120,175,10,0.40);"
			>
				Démarrer un projet
			</a>
		</div>

		<!-- Mobile burger -->
		<button class="xl:hidden p-2 transition-colors" style="{heroMode ? 'color: #ffffff;' : 'color: rgb(var(--muted));'}" onclick={() => (menuOpen = !menuOpen)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
			{#if menuOpen}<X class="w-6 h-6" />{:else}<Menu class="w-6 h-6" />{/if}
		</button>
	</div>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div
			class="xl:hidden absolute left-0 w-full flex flex-col gap-1 p-4 mobile-menu"
			style="background: rgb(var(--surface)); border-bottom: 1px solid var(--glass-border); box-shadow: 0 8px 32px rgba(80,110,20,0.15);"
		>
			{#each links as link}
				<a
					href={link.href}
					onclick={() => (menuOpen = false)}
					class="px-4 py-2.5 rounded-xl text-[14px] font-medium text-muted hover:text-ink transition-all"
				>{link.label}</a>
			{/each}
			<div class="h-px my-2" style="background: var(--glass-border);"></div>
			<!-- WhatsApp mobile -->
			<a
				href={waLink}
				target="_blank"
				rel="noopener"
				onclick={() => (menuOpen = false)}
				class="wa-btn flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-[14px] font-semibold"
			>
				<svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
				</svg>
				+33 6 59 17 37 74
			</a>
			<div class="flex items-center justify-between px-4 py-1">
				<button onclick={toggleTheme} class="flex items-center gap-2 text-[14px] text-muted hover:text-ink transition-colors">
					{#if isDark}<Sun class="w-4 h-4" /> Mode clair{:else}<Moon class="w-4 h-4" /> Mode sombre{/if}
				</button>
			</div>
			<a
				href="/contact"
				onclick={() => (menuOpen = false)}
				class="mt-2 text-center py-2.5 rounded-lg text-[14px] font-semibold text-white"
				style="background: linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)));"
			>Démarrer un projet</a>
		</div>
	{/if}
</nav>

<style>
	.nav-bar {
		top: 36px;
	}
	.mobile-menu {
		top: 68px;
	}
	.logo-ring {
		box-shadow: 0 0 0 2px rgba(152,200,22,0.45), 0 4px 14px rgba(80,110,20,0.20);
	}
	.wa-btn {
		background: rgba(37, 211, 102, 0.10);
		border: 1px solid rgba(37, 211, 102, 0.25);
		color: #16a34a;
		transition: background 0.2s, transform 0.2s;
	}
	.wa-btn:hover {
		background: rgba(37, 211, 102, 0.18);
		transform: translateY(-1px);
	}
</style>
