<script lang="ts">
</script>

<div class="topbar">
	<div class="topbar-inner">
		<div class="topbar-left">
			<span class="topbar-item">
				<svg class="topbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
				Ads SEO/GEO Créa
			</span>
			<span class="topbar-separator">★</span>
			<span class="topbar-item topbar-highlight">+14 avis clients</span>
			<span class="topbar-separator">🌍</span>
			<span class="topbar-item">+30 clients accompagnés</span>
		</div>
		<div class="topbar-right">
			<a href="mailto:norbertdigitalservices@gmail.com" class="topbar-email">
				<svg class="topbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
				norbertdigitalservices@gmail.com
			</a>
		</div>
	</div>
</div>

<style>
	.topbar {
		background: #000000;
		color: rgba(255, 255, 255, 0.75);
		font-size: 12px;
		font-family: 'Inter', system-ui, sans-serif;
		height: 36px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 60;
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
	}

	.topbar-inner {
		max-width: 80rem;
		margin: 0 auto;
		padding: 0 1.5rem;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.topbar-left {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		overflow-x: auto;
		white-space: nowrap;
		scrollbar-width: none;
	}
	.topbar-left::-webkit-scrollbar {
		display: none;
	}

	.topbar-item {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
	}

	.topbar-highlight {
		color: #f5c542;
		font-weight: 600;
	}

	.topbar-separator {
		color: rgba(255, 255, 255, 0.25);
		font-size: 10px;
		margin: 0 0.15rem;
	}

	.topbar-icon {
		width: 13px;
		height: 13px;
		flex-shrink: 0;
		opacity: 0.7;
	}

	.topbar-right {
		flex-shrink: 0;
	}

	.topbar-email {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		color: rgba(255, 255, 255, 0.75);
		text-decoration: none;
		transition: color 0.2s;
		font-weight: 500;
	}

	.topbar-email:hover {
		color: #ffffff;
	}

	/* Ajustements mobile */
	@media (max-width: 767px) {
		.topbar-right {
			display: none;
		}
		.topbar-inner {
			padding: 0 0.75rem;
		}
		.topbar-left {
			mask-image: linear-gradient(to right, black 85%, transparent 100%);
			-webkit-mask-image: linear-gradient(to right, black 85%, transparent 100%);
		}
	}

	/* Tablette: simplifier */
	@media (min-width: 768px) and (max-width: 1023px) {
		.topbar-item:last-child {
			display: none;
		}
	}
</style>
