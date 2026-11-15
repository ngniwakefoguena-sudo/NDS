<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ServiceList from '$lib/components/ServiceList.svelte';
	import { ArrowRight, Check } from 'lucide-svelte';
	import { servicesEn } from '$lib/data/services.en';
	import { site } from '$lib/data/site';
	import { reveal } from '$lib/actions/motion';

	const main = servicesEn.slice(0, 6);
	const partners = [
		{ name: 'ICS Innovations', logo: '/images/ics.webp', bgColor: '' },
		{ name: 'Afrilife Insurance', logo: '/images/Afri_insurance.webp', bgColor: '#E8551B' },
		{ name: 'Mahkong', logo: '/images/mahkong.avif', bgColor: '' },
		{ name: 'Puol', logo: '/images/puol.webp', bgColor: '#000000' }
	];
	const stats = [
		['30+', 'clients served'],
		['15+', 'projects delivered'],
		['24h', 'reply to every request'],
		['100%', 'remote, worldwide']
	];
</script>

<Seo
	title="Web, mobile & AI agency: websites, apps, chatbots and SEO"
	description="Norbert Digital Service is a web, mobile and AI agency working with businesses worldwide: website development, mobile apps, AI chatbots, automation and SEO. 100% remote, in English or French. Free quote within 24 hours."
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Norbert Digital Service: web, mobile and AI agency',
		inLanguage: 'en',
		url: `${site.url}/en`,
		isPartOf: { '@id': `${site.url}/#website` },
		about: { '@id': `${site.url}/#organisation` }
	}}
/>

<!-- ═════════ Hero ═════════ -->
<section class="en-hero">
	<div class="wrap en-hero-grid">
		<div>
			<span class="v-badge"><span class="v-dot"></span> Web, mobile & AI agency · Worldwide</span>
			<h1 class="en-title">We build the <span class="hl">websites, apps and AI tools</span> that bring you clients.</h1>
			<p class="en-lead">Websites, mobile apps, automation and artificial intelligence: we design everything that turns your visitors into clients. One point of contact, 100% remote, for businesses all over the world.</p>
			<div class="cta-btns">
				<a href="/en/contact" class="btn-lime">Start a project <ArrowRight class="w-4 h-4" /></a>
				<a href="/en/services" class="btn-line">Our services</a>
			</div>
		</div>
		<div class="en-photo">
			<img src="/images/hero-bg.webp" alt="Team reviewing a digital project on screen" width="1200" height="1200" fetchpriority="high" decoding="async" />
		</div>
	</div>
	<div class="wrap en-stats">
		{#each stats as [n, l]}<div><strong>{n}</strong><span>{l}</span></div>{/each}
	</div>
</section>

<!-- ═════════ Services ═════════ -->
<section class="sec" aria-labelledby="svc-title">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<h2 id="svc-title" class="h2">What we do for you</h2>
			<p class="sub">One partner for your website, your app, AI and marketing: everything is designed to work together.</p>
		</header>
		<ServiceList items={main} base="/en/services" />
		<p class="more"><a href="/en/services">See all our services <ArrowRight class="w-4 h-4" /></a></p>
	</div>
</section>

<!-- ═════════ Produit : Vendia ═════════ -->
<section class="vendia" aria-labelledby="vendia-title">
	<div class="wrap vendia-grid">
		<div use:reveal>
			<span class="v-badge"><span class="v-dot"></span> Our product · New</span>
			<h2 id="vendia-title" class="h2">Vendia, the AI sales agent on WhatsApp</h2>
			<p class="sub">It welcomes your clients, calculates an exact quote, collects payment by card or mobile money and sends the contract as a PDF. Automatically, 24/7, for every industry: insurance, finance, healthcare, education, retail…</p>
			<ul class="v-points">
				<li><Check class="w-4 h-4" /> Instant replies, day and night</li>
				<li><Check class="w-4 h-4" /> Prices taken from your own rate cards</li>
				<li><Check class="w-4 h-4" /> Real-time dashboard</li>
			</ul>
			<div class="v-ctas">
				<a href="/en/vendia" class="btn-lime">Discover Vendia <ArrowRight class="w-4 h-4" /></a>
				<a href="/en/vendia#demo" class="btn-line">Book a demo</a>
			</div>
		</div>
		<a href="/en/vendia" class="v-shot" use:reveal={{ delay: 120 }} aria-label="Discover Vendia">
			<img src="/images/vendia/vendia-contrat-reprise.webp" alt="Vendia: WhatsApp conversation with mobile payment and contract tracking dashboard" width="1376" height="768" loading="lazy" decoding="async" />
		</a>
	</div>
</section>

<!-- ═════════ Produit : Vélume ═════════ -->
<section class="vendia velume" aria-labelledby="velume-title">
	<div class="wrap vendia-grid">
		<a href="/en/velume" class="v-shot" use:reveal={{ delay: 120 }} aria-label="Discover Vélume">
			<img src="/images/velume/velume-tableau-de-bord.webp" alt="Vélume: daily sales dashboard by payment method" width="1440" height="900" loading="lazy" decoding="async" />
		</a>
		<div use:reveal>
			<span class="v-badge"><span class="v-dot"></span> Our product · New</span>
			<h2 id="velume-title" class="h2">Vélume, the all-in-one business management software</h2>
			<p class="sub">Point of sale and payments, invoices, stock, bookings, staff scheduling, CRM and WhatsApp in a single app. For cafés, restaurants, studios and shops worldwide.</p>
			<ul class="v-points">
				<li><Check class="w-4 h-4" /> 30+ built-in apps</li>
				<li><Check class="w-4 h-4" /> All payment methods, multi-currency</li>
				<li><Check class="w-4 h-4" /> AI assistant, in English and French</li>
			</ul>
			<div class="v-ctas">
				<a href="/en/velume" class="btn-lime">Discover Vélume <ArrowRight class="w-4 h-4" /></a>
				<a href="/en/velume#demo" class="btn-line">Book a demo</a>
			</div>
		</div>
	</div>
</section>

<!-- ═════════ Partenaires ═════════ -->
<section class="sec partners" aria-labelledby="partners-title">
	<div class="wrap">
		<header class="sec-head center" use:reveal>
			<h2 id="partners-title" class="h2">They trust us</h2>
		</header>
	</div>
	<div class="marquee">
		<div class="track">
			{#each [0, 1, 2] as copy}
				{#each partners as partner}
					<div class="partner" aria-hidden={copy > 0}>
						<div class="partner-logo" style={partner.bgColor ? `background:${partner.bgColor}` : ''}>
							<img src={partner.logo} alt={copy > 0 ? '' : partner.name} loading="lazy" decoding="async" />
						</div>
						<span class="partner-name">{partner.name}</span>
					</div>
				{/each}
			{/each}
		</div>
	</div>
</section>

<!-- ═════════ Appel à l'action ═════════ -->
<section class="cta" aria-labelledby="cta-title">
	<div class="wrap cta-inner" use:reveal>
		<h2 id="cta-title" class="cta-title">Got a project in mind? Let’s talk.</h2>
		<p class="cta-text">Describe your needs in a few lines. You will get a reply within 24 hours with a first proposal.</p>
		<div class="cta-btns">
			<a href="/en/contact" class="btn-lime">Get a free quote <ArrowRight class="w-4 h-4" /></a>
			<a href="https://wa.me/33659173774" target="_blank" rel="noopener" class="btn-line">Message us on WhatsApp</a>
		</div>
	</div>
</section>

<style>
	.wrap { max-width: 80rem; margin: 0 auto; padding: 0 1.25rem; }
	@media (min-width: 768px) { .wrap { padding: 0 2rem; } }


	/* Vendia */
	.vendia { background: rgb(var(--mist)); padding: 4.5rem 0; overflow: hidden; }
	.vendia-grid { display: grid; gap: 2.5rem; align-items: center; }
	@media (min-width: 1024px) { .vendia-grid { grid-template-columns: 0.9fr 1.1fr; gap: 3.5rem; } }
	.v-badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.9rem; border-radius: 999px; background: rgb(var(--bg)); border: 1px solid rgb(var(--accent) / 0.45); font-size: 0.8rem; font-weight: 600; color: rgb(var(--ink)); margin-bottom: 1.1rem; }
	.v-dot { width: 0.5rem; height: 0.5rem; border-radius: 50%; background: rgb(var(--accent)); box-shadow: 0 0 0 4px rgb(var(--accent) / 0.25); }
	.v-points { list-style: none; padding: 0; margin: 1.3rem 0 0; display: grid; gap: 0.55rem; font-size: 0.95rem; color: rgb(var(--ink)); }
	.v-points li { display: flex; align-items: center; gap: 0.5rem; }
	.v-points :global(svg) { color: rgb(var(--accent-2)); }
	.v-ctas { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.8rem; }
	.v-shot { display: block; border-radius: 1.4rem; overflow: hidden; box-shadow: 0 30px 70px rgba(40, 70, 10, 0.18); border: 1px solid rgb(var(--line) / 0.08); transition: transform 0.35s; }
	.v-shot:hover { transform: translateY(-4px); }
	.v-shot img { display: block; width: 100%; height: auto; }
	.velume { background: rgb(var(--bg)); }
	@media (min-width: 1024px) { .velume .vendia-grid { grid-template-columns: 1.1fr 0.9fr; } }

	.sec { padding: 4rem 0; background: rgb(var(--bg)); }
	.sec.mist { background: rgb(var(--mist)); }
	@media (max-width: 767px) { .sec { padding: 3rem 0; } }

	.sec-head { margin-bottom: 2rem; max-width: 46rem; }
	.sec-head.split {
		max-width: none;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem 3rem;
	}
	.sec-head.split .sub { max-width: 30rem; }
	.sec-head.center { text-align: center; margin-left: auto; margin-right: auto; margin-bottom: 2rem; }
	.h2 {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.5rem, 2.8vw, 2.1rem);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.1;
		color: rgb(var(--ink));
		margin: 0;
	}
	.sub { color: rgb(var(--muted)); line-height: 1.6; margin: 0.6rem 0 0; font-size: 0.95rem; }
	.sec-head.split .sub { margin: 0; }
	.link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-weight: 600;
		color: rgb(var(--ink));
		border-bottom: 2px solid rgb(var(--accent));
		padding-bottom: 2px;
	}
	.link :global(svg) { transition: transform 0.2s; }
	.link:hover :global(svg) { transform: translateX(3px); }

	/* ── Exemple concret ── */
	.journey { background: rgb(var(--night)); color: #fff; padding: 4.5rem 0; position: relative; overflow: hidden; }
	.journey::before {
		content: '';
		position: absolute;
		width: 700px;
		height: 700px;
		right: -200px;
		top: -150px;
		background: radial-gradient(circle, rgba(152, 200, 22, 0.18), transparent 62%);
	}
	.journey-grid { position: relative; display: grid; gap: 3rem; align-items: center; }
	@media (min-width: 1024px) { .journey-grid { grid-template-columns: 1fr 1fr; gap: 4rem; } }
	.h2.light { color: #fff; }
	.sub.light { color: rgba(255, 255, 255, 0.7); margin-bottom: 1.75rem; max-width: 32rem; }
	.link.light { color: #fff; }
	@media (max-width: 767px) { .journey { padding: 4rem 0; } }

	/* ── Méthode ── */
	.process {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 2rem;
		counter-reset: none;
	}
	@media (min-width: 640px) { .process { grid-template-columns: repeat(2, 1fr); gap: 2.25rem 2.5rem; } }
	@media (min-width: 1100px) { .process { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; } }
	.p-step { position: relative; padding-top: 3.25rem; }
	.p-step::before {
		content: '';
		position: absolute;
		top: 1.15rem;
		left: 2.5rem;
		right: -1.5rem;
		height: 2px;
		background: rgb(var(--accent) / 0.35);
	}
	.p-step:last-child::before { display: none; }
	@media (max-width: 1099px) { .p-step::before { display: none; } .p-step { padding-top: 0; padding-left: 4rem; } }
	.p-num {
		position: absolute;
		top: 0;
		left: 0;
		width: 2.3rem;
		height: 2.3rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgb(var(--accent));
		color: rgb(var(--night));
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 700;
		font-size: 0.95rem;
	}
	.p-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.02rem; font-weight: 600; color: rgb(var(--ink)); margin: 0 0 0.5rem; }
	.p-text { font-size: 0.88rem; color: rgb(var(--muted)); line-height: 1.6; margin: 0; }

	/* ── Réalisations ── */
	.work { display: grid; gap: 1.5rem; }
	@media (min-width: 768px) { .work { grid-template-columns: repeat(3, 1fr); } }
	.work-card { display: block; }
	.work-img {
		aspect-ratio: 16 / 10;
		border-radius: 1rem;
		overflow: hidden;
		background: rgb(var(--mist));
		margin-bottom: 1rem;
	}
	.work-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
	.work-card:hover .work-img img { transform: scale(1.05); }
	.work-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.05rem; font-weight: 600; color: rgb(var(--ink)); margin: 0 0 0.3rem; }
	.work-card:hover .work-title { text-decoration: underline; text-decoration-color: rgb(var(--accent)); text-decoration-thickness: 2px; text-underline-offset: 4px; }
	.work-desc { font-size: 0.87rem; color: rgb(var(--muted)); margin: 0; line-height: 1.5; }

	/* ── Partenaires ── */
	.partners { padding-bottom: 3.5rem; }
	.marquee {
		overflow: hidden;
		mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
		padding: 0.75rem 0;
	}
	.track { display: flex; width: max-content; animation: marquee 24s linear infinite; }
	.marquee:hover .track { animation-play-state: paused; }
	@keyframes marquee { to { transform: translateX(calc(-100% / 3)); } }
	.partner { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; margin-right: 3rem; }
	.partner-logo {
		width: 5.25rem;
		height: 5.25rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: #fff;
		border: 1px solid rgba(0, 0, 0, 0.06);
		box-shadow: 0 6px 20px rgba(60, 90, 10, 0.08);
	}
	.partner-logo img { max-width: 65%; max-height: 65%; object-fit: contain; }
	.partner-name { font-size: 0.8rem; font-weight: 600; color: rgb(var(--muted)); white-space: nowrap; }

	/* ── Blog ── */
	.posts { display: grid; gap: 1.5rem; }
	@media (min-width: 768px) { .posts { grid-template-columns: repeat(3, 1fr); } }
	.post { display: flex; flex-direction: column; }
	.post-img {
		aspect-ratio: 16 / 10;
		border-radius: 1rem;
		overflow: hidden;
		background: rgb(var(--mist));
		display: grid;
		place-items: center;
		margin-bottom: 1rem;
	}
	.post-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
	.post:hover .post-img img { transform: scale(1.05); }
	.post-date { font-size: 0.8rem; color: rgb(var(--muted)); margin-bottom: 0.4rem; }
	.post-title { font-family: 'Space Grotesk', sans-serif; font-size: 1rem; font-weight: 600; line-height: 1.3; color: rgb(var(--ink)); margin: 0 0 0.5rem; }
	.post:hover .post-title { text-decoration: underline; text-decoration-color: rgb(var(--accent)); text-decoration-thickness: 2px; text-underline-offset: 4px; }
	.post-sum {
		font-size: 0.9rem;
		color: rgb(var(--muted));
		line-height: 1.55;
		margin: 0;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* ── CTA final (vert citron) ── */
	.cta { background: rgb(var(--accent)); color: rgb(var(--night)); padding: 4.5rem 0 7.5rem; position: relative; overflow: hidden; }
	.cta::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgb(var(--night) / 0.12) 1px, transparent 1px);
		background-size: 22px 22px;
		mask-image: radial-gradient(ellipse 60% 70% at 50% 40%, #000, transparent 75%);
	}
	.cta-inner { position: relative; text-align: center; }
	.cta-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.7rem, 3.2vw, 2.5rem);
		font-weight: 700;
		letter-spacing: -0.035em;
		line-height: 1.1;
		margin: 0 auto 0.8rem;
		max-width: 20ch;
	}
	.cta-text { color: rgb(var(--night) / 0.75); max-width: 34rem; margin: 0 auto 1.75rem; line-height: 1.6; }
	.cta-btns { display: flex; flex-wrap: wrap; gap: 0.7rem; justify-content: center; }
	.btn-lime, .btn-line {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.8rem 1.4rem;
		border-radius: 999px;
		font-weight: 600;
		transition: transform 0.2s, background 0.2s;
	}
	.btn-lime { background: rgb(var(--night)); color: #fff; box-shadow: 0 10px 26px rgb(var(--night) / 0.25); }
	.btn-lime:hover { transform: translateY(-2px); }
	.btn-line { border: 1.5px solid rgb(var(--night) / 0.35); color: rgb(var(--night)); }
	.btn-line:hover { background: rgb(var(--night) / 0.08); }

	.en-hero { padding: 8.5rem 0 3.5rem; background: rgb(var(--bg)); }
	@media (max-width: 767px) { .en-hero { padding-top: 7rem; } }
	.en-hero-grid { display: grid; gap: 2.5rem; align-items: center; }
	@media (min-width: 1024px) { .en-hero-grid { grid-template-columns: 1.1fr 0.9fr; gap: 4rem; } }
	.en-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.3rem, 5.2vw, 4.1rem); font-weight: 700; letter-spacing: -0.04em; line-height: 1.04; color: rgb(var(--ink)); margin: 0 0 1.3rem; }
	.en-title .hl { color: rgb(var(--accent-2)); }
	.en-lead { font-size: 1.1rem; line-height: 1.7; color: rgb(var(--muted)); margin: 0 0 1.8rem; max-width: 40rem; }
	.en-photo { border-radius: 1.6rem; overflow: hidden; aspect-ratio: 4 / 3; box-shadow: 0 30px 70px rgba(40, 70, 10, 0.18); }
	.en-photo img { width: 100%; height: 100%; object-fit: cover; }
	.en-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 3rem; }
	@media (min-width: 768px) { .en-stats { grid-template-columns: repeat(4, 1fr); } }
	.en-stats div { padding: 1.1rem 1.2rem; border-radius: 1rem; background: rgb(var(--mist)); border: 1px solid rgb(var(--line) / 0.08); }
	.en-stats strong { display: block; font-family: 'Space Grotesk', sans-serif; font-size: 1.8rem; color: rgb(var(--accent-2)); }
	.en-stats span { font-size: 0.9rem; color: rgb(var(--muted)); }
	.more { margin: 1.5rem 0 0; }
	.en-hero .cta-btns { justify-content: flex-start; }
	.more a { display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 600; color: rgb(var(--accent-2)); }
</style>
