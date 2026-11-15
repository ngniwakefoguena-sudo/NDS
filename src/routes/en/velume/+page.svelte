<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/data/site';
	import { reveal } from '$lib/actions/motion';
	import { track } from '$utils/track';
	import {
		ArrowRight, Check, Clock, ShieldCheck, Zap, Users, Handshake, Rocket, Lock, Smartphone, CreditCard, Globe,
		MessageCircle, Sparkles, CircleCheck, LayoutDashboard, Store, CalendarDays, Receipt, Package, Bot, ChefHat,
		Wallet, Heart, ChartColumn, ClipboardList, Languages, Camera, Coffee, Scissors, ShoppingBag, UtensilsCrossed,
		Layers, Signature, Monitor
	} from 'lucide-svelte';

	const url = `${site.url}/en/velume`;
	const waDemo = `https://wa.me/33659173774?text=${encodeURIComponent('Hello, I would like a demo of Vélume, the all-in-one business management software.')}`;


	const modules = [
		{ icon: Store, t: 'Point of sale', s: 'Touch till, receipts, sessions' },
		{ icon: Wallet, t: 'Cash & payments', s: 'All payment methods, closings' },
		{ icon: Receipt, t: 'Invoicing', s: 'Quotes, invoices, payments' },
		{ icon: CalendarDays, t: 'Bookings & rentals', s: 'Online booking, deposits' },
		{ icon: MessageCircle, t: 'WhatsApp & team chat', s: 'Clients, team, video calls' },
		{ icon: Users, t: 'Staff & scheduling', s: 'Shifts, leave, payroll' },
		{ icon: Package, t: 'Inventory & purchasing', s: 'Stock, thresholds, suppliers' },
		{ icon: ChefHat, t: 'Kitchen & recipes', s: 'Kitchen display, costs, food safety' },
		{ icon: ChartColumn, t: 'CRM & marketing', s: 'Pipeline, campaigns, surveys' },
		{ icon: Heart, t: 'Loyalty', s: 'Cards, points, tiers' },
		{ icon: Signature, t: 'E-signature', s: 'Contracts and quotes signed online' },
		{ icon: Bot, t: 'AI assistant', s: 'Questions in plain language' }
	];

	const benefits = [
		{ icon: Layers, title: 'One app instead of ten', text: 'Till, invoices, stock, scheduling, bookings and messages in one place: no more notebooks, spreadsheets and apps that don’t talk to each other.' },
		{ icon: CreditCard, title: 'Every payment method', text: 'Cash, card, bank transfer, mobile money or local wallets: every payment is tracked separately, in your currency.' },
		{ icon: ChartColumn, title: 'Your numbers in real time', text: 'Today’s sales, overdue invoices, low stock: you know where your business stands without waiting for month-end.' },
		{ icon: Bot, title: 'A built-in AI assistant', text: 'Ask “today’s sales” or “free slots tomorrow” and Vélume answers, no menu hunting.' },
		{ icon: MessageCircle, title: 'WhatsApp at the heart of client relations', text: 'Client requests become CRM opportunities, with saved replies and video calls.' },
		{ icon: Monitor, title: 'On every screen', text: 'Phone, tablet, desktop or touch till: the interface adapts to each workstation.' },
		{ icon: Languages, title: 'Multilingual and multi-currency', text: 'Interface in English and French, amounts in your local currency: Vélume adapts to your market.' },
		{ icon: ShieldCheck, title: 'Role-based access', text: 'Manager, barista, waiter, cook, photographer: everyone sees only what concerns them.' }
	];

	const sectors = [
		{ icon: Coffee, title: 'Cafés and coffee shops', text: 'Till, bar display, recipes and drink costing, loyalty.' },
		{ icon: UtensilsCrossed, title: 'Restaurants', text: 'Table orders, kitchen display, delivery and food safety.' },
		{ icon: Camera, title: 'Photo, video and podcast studios', text: 'Slot booking, deposits, client galleries and signed contracts.' },
		{ icon: ShoppingBag, title: 'Shops and retail', text: 'Point of sale, stock, supplier purchasing and payments.' },
		{ icon: Scissors, title: 'Salons and beauty', text: 'Online appointments, staff scheduling and loyalty cards.' },
		{ icon: ClipboardList, title: 'Service SMEs', text: 'Quotes, invoices, projects, expenses and staff management.' }
	];

	const trust = [
		{ icon: Handshake, title: 'Tailored to your business', text: 'We configure Vélume for your trade: products, prices, roles, tills and payment methods.' },
		{ icon: Rocket, title: 'Guided onboarding', text: 'Data import, team training and support during the first weeks.' },
		{ icon: Sparkles, title: 'Extend it without code', text: 'Add a field, an app or an automated rule straight from the settings.' },
		{ icon: Lock, title: 'Your data belongs to you', text: 'Full CSV or JSON export at any time, with built-in backup and restore.' }
	];

	const faq = [
		{ q: 'What is Vélume?', a: 'Vélume is all-in-one business management software (an ERP) designed by Norbert Digital Service for cafés, restaurants, studios and shops. It brings together 30+ apps: point of sale, multi-payment till, invoicing, inventory, bookings, scheduling, CRM, WhatsApp and an AI assistant.' },
		{ q: 'Which payment methods does Vélume support?', a: 'All common payment methods: cash, card, bank transfer, mobile money and local e-wallets. Every payment is recorded by method, in your currency, and the till closing calculates discrepancies automatically.' },
		{ q: 'Which devices does Vélume run on?', a: 'In the browser, on phone, tablet, computer or touch till. The layout adapts to each workstation, with no complicated installation.' },
		{ q: 'Which businesses is it for?', a: 'Cafés, restaurants, photo and video studios, shops, salons and service SMEs all over the world: Europe, Africa, North America, the Middle East. Modules are switched on to match your business.' },
		{ q: 'Does Vélume work in my country?', a: 'Yes. Vélume runs in the browser anywhere in the world. The interface is in English and French, amounts show in your currency and payment methods are configured for your market.' },
		{ q: 'How do I get Vélume for my business?', a: 'Request a demo with the form below or on WhatsApp. We show you the software on your own business, then set it up with your branding.' }
	];

	const sectorOptions = [...sectors.map((s) => s.title), 'Other business'];

	let sending = $state(false);
	let sent = $state(false);
	let failed = $state(false);

	async function submitDemo(e: SubmitEvent) {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		sending = true;
		failed = false;
		const data = new FormData(form);
		const params = new URLSearchParams();
		for (const [k, v] of data.entries()) params.append(k, v.toString());
		try {
			const res = await fetch('/__forms.html', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: params.toString()
			});
			if (!res.ok) throw new Error(String(res.status));
			track('generate_lead', { lead_source: 'demo_velume_en', service: data.get('secteur')?.toString() || undefined });
			sent = true;
			form.reset();
		} catch {
			failed = true;
		} finally {
			sending = false;
		}
	}
</script>

<Seo
	title="Vélume: all-in-one business management software, POS and invoicing"
	description="Vélume is all-in-one business management software for cafés, restaurants, studios and shops worldwide: POS and every payment method, invoicing, inventory, bookings, staff scheduling, CRM, WhatsApp and an AI assistant. Free demo."
	image="/images/velume/velume-tableau-de-bord.webp"
	jsonLd={[
		{
			'@context': 'https://schema.org',
			'@type': 'SoftwareApplication',
			name: 'Vélume',
			applicationCategory: 'BusinessApplication',
			applicationSubCategory: 'ERP, POS software, business management software',
			operatingSystem: 'Web, Android, iOS, Windows, macOS',
			description: 'All-in-one business management software: point of sale, multi-payment till, invoicing, inventory, bookings, scheduling, CRM, WhatsApp and an AI assistant, in English and French.',
			keywords: 'business management software, ERP for small business, POS software, point of sale, restaurant management software, cafe POS, booking software, invoicing software, inventory management, staff scheduling',
			inLanguage: ['fr', 'en'],
			areaServed: 'Worldwide',
			screenshot: ['velume-tableau-de-bord', 'velume-assistant-ia', 'velume-planning', 'velume-caisse-mobile-money'].map((n) => `${site.url}/images/velume/${n}.webp`),
			featureList: modules.map((m) => `${m.t}: ${m.s}`).join('; '),
			offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', description: 'Free demo' },
			url,
			publisher: { '@id': `${site.url}/#organisation` }
		},
		{
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/en` },
				{ '@type': 'ListItem', position: 2, name: 'Vélume', item: url }
			]
		}
	]}
/>

<!-- ───────────── Hero ───────────── -->
<section class="hero">
	<div class="glow" aria-hidden="true"></div>
	<div class="wrap hero-grid">
		<div class="hero-copy">
			<span class="badge"><span class="dot"></span> New · A Norbert Digital Service solution</span>
			<h1 class="title">Vélume, <span class="hl">your whole business</span> in one app</h1>
			<p class="lead">
				POS and payments, invoices, stock, bookings, staff scheduling, CRM and WhatsApp: Vélume brings together 30+ business
				apps, designed for cafés, restaurants, studios and shops all over the world.
			</p>
			<div class="ctas">
				<a href="#demo" class="btn-lime">Book a demo <ArrowRight class="w-4 h-4" /></a>
				<a href="#visite" class="btn-line">See it in action</a>
			</div>
			<ul class="hero-points">
				<li><Check class="w-4 h-4" /> Every payment method</li>
				<li><Check class="w-4 h-4" /> Multi-currency</li>
				<li><Check class="w-4 h-4" /> English and French</li>
			</ul>
		</div>

		<div class="browser-wrap">
			<div class="browser">
				<div class="browser-bar"><span></span><span></span><span></span><em>Vélume · dashboard</em></div>
				<img src="/images/velume/velume-tableau-de-bord.webp" alt="Vélume: today’s sales dashboard by payment method (cash, mobile, transfer, card)" width="1440" height="900" fetchpriority="high" />
			</div>
			<div class="mobile-float">
				<img src="/images/velume/velume-mobile.webp" alt="Vélume on a phone" width="780" height="1688" loading="lazy" decoding="async" />
			</div>
		</div>
	</div>
</section>

<!-- ───────────── Chiffres clés ───────────── -->
<section class="strip">
	<div class="wrap strip-grid" use:reveal={{ stagger: 80 }}>
		<div data-reveal-item><strong>30+</strong><span>built-in apps</span></div>
		<div data-reveal-item><strong>All payments</strong><span>cash, card, transfer, mobile</span></div>
		<div data-reveal-item><strong>Worldwide</strong><span>multilingual and multi-currency</span></div>
		<div data-reveal-item><strong>Any screen</strong><span>phone, tablet, till</span></div>
	</div>
</section>

<!-- ───────────── Problème ───────────── -->
<section class="sec">
	<div class="wrap why" use:reveal>
		<div>
			<span class="kicker">Why Vélume</span>
			<h2 class="h2">Your business has outgrown a notebook and three apps</h2>
		</div>
		<div class="why-text">
			<p>Sales are logged at the till, card and mobile payments in another tool, invoices in a spreadsheet, bookings on WhatsApp and the staff rota on a sheet of paper. At closing time, nobody really knows how much the business made.</p>
			<p>Vélume puts everything in one place. <strong>Every sale, payment and booking feeds your dashboards automatically</strong> : you run the business on accurate, real-time numbers.</p>
		</div>
	</div>
</section>

<!-- ───────────── En images ───────────── -->
<section id="visite" class="sec mist">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Vélume in pictures</span>
			<h2 class="h2">A look at the app</h2>
			<p class="sub">Two real screens with demo data. The rest is revealed during your personalised demo.</p>
		</header>
		<div class="duo" use:reveal={{ stagger: 120 }}>
			<figure class="viewer" data-reveal-item>
				<img src="/images/velume/velume-assistant-ia.webp" alt="Vélume AI: the assistant answers “today’s sales” with the total and the breakdown by payment method" width="1440" height="900" loading="lazy" decoding="async" />
				<figcaption><b>Vélume AI assistant</b>Ask a question in plain language, get a figure: today’s sales, overdue invoices, free slots.</figcaption>
			</figure>
			<figure class="viewer" data-reveal-item>
				<img src="/images/velume/velume-planning.webp" alt="Vélume: weekly staff schedule by role" width="1440" height="900" loading="lazy" decoding="async" />
				<figcaption><b>Staff scheduling</b>Every employee’s shifts for the week, published in one click and copied from week to week.</figcaption>
			</figure>
		</div>
		<p class="note"><Lock class="w-4 h-4" /> Want to see the rest? <a href="#demo">Book a demo</a>: we’ll walk you through every module on your own business.</p>
	</div>
</section>

<!-- ───────────── Modules ───────────── -->
<section class="sec">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Everything included</span>
			<h2 class="h2">The apps that run your business</h2>
			<p class="sub">Switch on only the ones you need. They share the same clients, products and payments: nothing is entered twice.</p>
		</header>
		<div class="modules" use:reveal={{ stagger: 40 }}>
			{#each modules as m}
				<div class="module" data-reveal-item><m.icon class="w-5 h-5" /><div><b>{m.t}</b><small>{m.s}</small></div></div>
			{/each}
		</div>
	</div>
</section>

<!-- ───────────── Bénéfices ───────────── -->
<section class="sec mist">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">What you gain</span>
			<h2 class="h2">Less paperwork, more control, more sales</h2>
		</header>
		<div class="benefits" use:reveal={{ stagger: 60 }}>
			{#each benefits as b}
				<div class="card" data-reveal-item>
					<span class="card-icon"><b.icon class="w-5 h-5" /></span>
					<h3>{b.title}</h3>
					<p>{b.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ───────────── Paiements (sombre) ───────────── -->
<section class="night">
	<div class="wrap dash-grid">
		<div use:reveal>
			<span class="kicker light">Till & payments</span>
			<h2 class="h2 light">Every payment is tracked, from the cash drawer to the phone</h2>
			<p class="night-text">At opening, the team counts the cash float. During the day, every sale is filed by payment method. At closing, Vélume calculates what the drawer and each payment account should hold, and flags any discrepancy.</p>
			<ul class="night-list">
				<li><Check class="w-4 h-4" /> Cash, card, transfer and mobile payments tracked separately</li>
				<li><Check class="w-4 h-4" /> Cash float count in your currency</li>
				<li><Check class="w-4 h-4" /> Electronic payment reconciliation</li>
			</ul>
		</div>
		<figure class="viewer" use:reveal={{ delay: 120 }}>
			<img src="/images/velume/velume-caisse-mobile-money.webp" alt="Vélume: till overview with cash, mobile, transfer and card payments and till closings" width="1440" height="900" loading="lazy" decoding="async" />
		</figure>
	</div>
</section>

<!-- ───────────── Secteurs ───────────── -->
<section class="sec">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Who it’s for</span>
			<h2 class="h2">One app, configured for your trade</h2>
		</header>
		<div class="sectors" use:reveal={{ stagger: 60 }}>
			{#each sectors as s}
				<div class="sector" data-reveal-item>
					<span class="sector-icon"><s.icon class="w-5 h-5" /></span>
					<h3>{s.title}</h3>
					<p>{s.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ───────────── Confiance ───────────── -->
<section class="sec mist">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Our support</span>
			<h2 class="h2">A team that sets up Vélume with you</h2>
		</header>
		<div class="trust" use:reveal={{ stagger: 80 }}>
			{#each trust as t}
				<div class="trust-item" data-reveal-item>
					<span class="trust-icon"><t.icon class="w-5 h-5" /></span>
					<div><h3>{t.title}</h3><p>{t.text}</p></div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ───────────── FAQ ───────────── -->
<section class="sec">
	<div class="wrap faq-grid">
		<div use:reveal>
			<span class="kicker">FAQ</span>
			<h2 class="h2">Everything about Vélume business management software</h2>
			<p class="sub">Payments, devices, industries and countries: answers to the questions we hear most.</p>
		</div>
		<div class="faq">
			{#each faq as f}
				<details>
					<summary><h3>{f.q}</h3><span class="faq-plus" aria-hidden="true">+</span></summary>
					<p>{f.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

<!-- ───────────── Démo ───────────── -->
<section id="demo" class="demo">
	<div class="wrap demo-grid">
		<div class="demo-copy" use:reveal>
			<span class="kicker light">Free demo</span>
			<h2 class="h2 light">See Vélume running on your own business</h2>
			<p class="night-text">Get a personalised demo. Here is how we start:</p>
			<ol class="start">
				<li><span>1</span><div><b>A 15-minute call</b> to understand your business, your outlets and your payment methods.</div></li>
				<li><span>2</span><div><b>A demo on your data</b>: your products, your prices, your teams.</div></li>
				<li><span>3</span><div><b>Guided onboarding</b>, with team training and follow-up.</div></li>
			</ol>
			<div class="direct">
				<a href={waDemo} target="_blank" rel="noopener"><MessageCircle class="w-4 h-4" /> WhatsApp: +33 6 59 17 37 74</a>
				<a href={`https://wa.me/237659324756?text=${encodeURIComponent('Hello, I would like a demo of Vélume.')}`} target="_blank" rel="noopener"><MessageCircle class="w-4 h-4" /> WhatsApp: +237 6 59 32 47 56</a>
			</div>
		</div>

		<div class="form-card">
			{#if sent}
				<div class="done">
					<span class="done-icon"><CircleCheck class="w-7 h-7" /></span>
					<h3>Request sent!</h3>
					<p>Thank you. We will get back to you within one business day to schedule your demo.</p>
					<a href={waDemo} target="_blank" rel="noopener" class="btn-lime">Speed things up on WhatsApp <ArrowRight class="w-4 h-4" /></a>
					<button type="button" class="again" onclick={() => (sent = false)}>Send another request</button>
				</div>
			{:else}
				<form name="demo-velume" method="POST" data-netlify="true" {...{ 'netlify-honeypot': 'bot-field' }} onsubmit={submitDemo}>
					<input type="hidden" name="form-name" value="demo-velume" />
					<p hidden><label>Leave empty <input name="bot-field" /></label></p>
					<h3 class="form-title">Book my Vélume demo</h3>
					<div class="row">
						<label>Full name<input name="nom" required autocomplete="name" placeholder="Jane Smith" /></label>
						<label>Company<input name="entreprise" required autocomplete="organization" placeholder="Your company" /></label>
					</div>
					<div class="row">
						<label>Email<input name="email" type="email" required autocomplete="email" placeholder="you@company.com" /></label>
						<label>Phone / WhatsApp<input name="telephone" type="tel" required autocomplete="tel" placeholder="+1 … / +44 … / +33 …" /></label>
					</div>
					<label>Type of business
						<select name="secteur" required>
							<option value="" disabled selected>Choose your business type</option>
							{#each sectorOptions as o}<option value={o}>{o}</option>{/each}
						</select>
					</label>
					<label><span>Your needs <span class="opt">(optional)</span></span><textarea name="message" rows="3" placeholder="E.g. 2 outlets, payment and stock tracking"></textarea></label>
					<button type="submit" class="btn-lime full" disabled={sending}>
						{sending ? 'Sending…' : 'Get my demo'} <ArrowRight class="w-4 h-4" />
					</button>
					{#if failed}<p class="err">Something went wrong. Please try again or message us on WhatsApp.</p>{/if}
					<p class="legal">Reply within one business day. Your details are only used to contact you. <a href="/privacy">Privacy</a></p>
				</form>
			{/if}
		</div>
	</div>
</section>

<style>
	.wrap { max-width: 80rem; margin: 0 auto; padding: 0 1.25rem; }
	@media (min-width: 768px) { .wrap { padding: 0 2rem; } }
	.sec { padding: 5.5rem 0; background: rgb(var(--bg)); }
	.sec.mist { background: rgb(var(--mist)); }
	@media (max-width: 767px) { .sec { padding: 4rem 0; } }
	.kicker { display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgb(var(--accent-2)); margin-bottom: 0.9rem; }
	.kicker.light { color: rgb(var(--accent)); }
	.h2 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.7rem, 3.6vw, 2.6rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.1; color: rgb(var(--ink)); margin: 0 0 1rem; max-width: 24ch; }
	.h2.light { color: #fff; }
	.sec-head { margin-bottom: 2.75rem; }
	.sub { max-width: 46rem; color: rgb(var(--muted)); line-height: 1.7; margin: 0; }
	h3 { font-family: 'Space Grotesk', sans-serif; }

	/* Boutons */
	.ctas { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }
	.btn-lime, .btn-line { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.95rem 1.55rem; border-radius: 999px; font-weight: 600; transition: transform 0.2s, background 0.2s, box-shadow 0.2s; }
	.btn-lime { background: rgb(var(--accent)); color: rgb(var(--night)); box-shadow: 0 12px 30px rgb(var(--accent) / 0.35); border: 0; cursor: pointer; }
	.btn-lime:hover { transform: translateY(-2px); box-shadow: 0 16px 36px rgb(var(--accent) / 0.45); }
	.btn-lime:disabled { opacity: 0.65; cursor: wait; transform: none; }
	.btn-lime.full { width: 100%; margin-top: 0.5rem; }
	.btn-line { border: 1px solid rgb(var(--line) / 0.18); color: rgb(var(--ink)); background: rgb(var(--bg) / 0.6); }
	.btn-line:hover { background: rgb(var(--bg)); }

	/* Hero */
	.hero { position: relative; overflow: hidden; background: rgb(var(--mist)); padding: 8.5rem 0 5.5rem; }
	@media (max-width: 767px) { .hero { padding: 7rem 0 4rem; } }
	.glow { position: absolute; width: 46rem; height: 46rem; right: -12rem; top: -14rem; border-radius: 50%; background: radial-gradient(circle, rgb(var(--accent) / 0.32), transparent 65%); pointer-events: none; }
	.hero-grid { position: relative; display: grid; gap: 3.5rem; align-items: center; }
	@media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.1fr 0.9fr; gap: 4rem; } }
	.badge { display: inline-flex; align-items: center; gap: 0.55rem; padding: 0.45rem 0.95rem; border-radius: 999px; background: rgb(var(--bg)); border: 1px solid rgb(var(--accent) / 0.45); font-size: 0.82rem; font-weight: 600; color: rgb(var(--ink)); animation: rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
	.dot { width: 0.5rem; height: 0.5rem; border-radius: 50%; background: rgb(var(--accent)); box-shadow: 0 0 0 4px rgb(var(--accent) / 0.25); animation: pulse 2s infinite; }
	.title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.4rem, 5.6vw, 4.4rem); font-weight: 700; letter-spacing: -0.04em; line-height: 1.02; color: rgb(var(--ink)); margin: 1.4rem 0 1.4rem; max-width: 15ch; animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.05s both; }
	.hl { background: linear-gradient(120deg, rgb(var(--accent-2)), rgb(var(--accent))); -webkit-background-clip: text; background-clip: text; color: transparent; }
	.lead { max-width: 38rem; font-size: 1.08rem; line-height: 1.7; color: rgb(var(--muted)); margin: 0; animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.12s both; }
	.hero-points { list-style: none; padding: 0; margin: 1.8rem 0 0; display: flex; flex-wrap: wrap; gap: 0.6rem 1.4rem; font-size: 0.9rem; color: rgb(var(--ink)); }
	.hero-points li { display: inline-flex; align-items: center; gap: 0.4rem; }
	.hero-points :global(svg) { color: rgb(var(--accent-2)); }

	/* Téléphone */
	.phone-wrap { position: relative; display: flex; justify-content: center; animation: rise 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both; }
	.phone { position: relative; width: min(21rem, 100%); border-radius: 2.6rem; padding: 0.7rem; background: #0b1108; box-shadow: 0 40px 80px rgba(20, 40, 5, 0.35), inset 0 0 0 2px rgba(255, 255, 255, 0.06); }
	.notch { position: absolute; top: 0.95rem; left: 50%; width: 5.5rem; height: 1.25rem; transform: translateX(-50%); background: #0b1108; border-radius: 1rem; z-index: 2; }
	.chat-head { display: flex; align-items: center; gap: 0.7rem; padding: 2.1rem 1rem 0.85rem; background: #1f2c17; border-radius: 2rem 2rem 0 0; color: #fff; }
	.chat-head strong { display: block; font-size: 0.92rem; }
	.chat-head small { font-size: 0.72rem; color: rgb(var(--accent)); }
	.avatar { width: 2.3rem; height: 2.3rem; border-radius: 50%; display: grid; place-items: center; font-weight: 700; background: rgb(var(--accent)); color: #0b1108; font-family: 'Space Grotesk', sans-serif; }
	.chat { display: flex; flex-direction: column; gap: 0.55rem; padding: 1rem 0.85rem 1.3rem; min-height: 25rem; border-radius: 0 0 2rem 2rem; background: #e9eee0 radial-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px) 0 0 / 14px 14px; }
	.msg { max-width: 85%; margin: 0; padding: 0.6rem 0.8rem; border-radius: 1rem; font-size: 0.83rem; line-height: 1.45; color: #142010; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08); opacity: 0; transform: translateY(8px) scale(0.98); animation: pop 0.45s cubic-bezier(0.22, 1, 0.36, 1) var(--d) forwards; }
	.msg.me { align-self: flex-end; background: #d6f5b0; border-bottom-right-radius: 0.3rem; }
	.msg.bot { align-self: flex-start; background: #fff; border-bottom-left-radius: 0.3rem; }
	.msg.pay, .msg.doc { align-self: flex-start; display: inline-flex; align-items: center; gap: 0.45rem; background: #fff; font-weight: 600; border: 1px solid rgb(var(--accent) / 0.6); }
	.msg.pay :global(svg), .msg.doc :global(svg) { color: rgb(var(--accent-2)); flex-shrink: 0; }
	.msg.doc span { margin-left: 0.3rem; font-size: 0.72rem; color: #4d8a00; }
	.float { position: absolute; display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.6rem 0.9rem; border-radius: 0.9rem; background: rgb(var(--bg)); box-shadow: 0 18px 40px rgba(40, 70, 10, 0.18); font-size: 0.8rem; font-weight: 600; color: rgb(var(--ink)); }
	.float :global(svg) { color: rgb(var(--accent-2)); }
	.f1 { top: 18%; left: -0.5rem; animation: bob 5s ease-in-out infinite; }
	.f2 { bottom: 12%; right: -0.5rem; animation: bob 5s ease-in-out 1.5s infinite; }
	@media (max-width: 480px) { .float { display: none; } }

	/* Chiffres */
	.strip { background: rgb(var(--night)); padding: 2.2rem 0; }
	.strip-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; text-align: center; }
	@media (min-width: 768px) { .strip-grid { grid-template-columns: repeat(4, 1fr); } }
	.strip strong { display: block; font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.4rem, 3vw, 2rem); color: rgb(var(--accent)); letter-spacing: -0.02em; }
	.strip span { font-size: 0.85rem; color: rgba(255, 255, 255, 0.7); }

	/* Pourquoi */
	.why { display: grid; gap: 2rem; }
	@media (min-width: 1024px) { .why { grid-template-columns: 0.9fr 1.1fr; gap: 4rem; align-items: start; } }
	.why-text p { color: rgb(var(--muted)); line-height: 1.8; margin: 0 0 1rem; font-size: 1.02rem; }
	.why-text strong { color: rgb(var(--ink)); }

	/* Étapes */
	.steps { list-style: none; margin: 0; padding: 0; display: grid; gap: 1rem; counter-reset: s; }
	@media (min-width: 640px) { .steps { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1100px) { .steps { grid-template-columns: repeat(4, 1fr); } }
	.step { position: relative; background: rgb(var(--bg)); border-radius: 1.4rem; padding: 1.6rem; border: 1px solid rgb(var(--line) / 0.07); transition: transform 0.25s, box-shadow 0.25s; }
	.step:hover { transform: translateY(-4px); box-shadow: 0 22px 45px rgba(60, 90, 10, 0.1); }
	.step-num { position: absolute; top: 1.2rem; right: 1.3rem; font-family: 'Space Grotesk', sans-serif; font-size: 2.4rem; font-weight: 700; color: rgb(var(--accent) / 0.25); line-height: 1; }
	.step-icon, .card-icon { width: 2.8rem; height: 2.8rem; border-radius: 0.9rem; display: grid; place-items: center; background: rgb(var(--accent)); color: rgb(var(--night)); margin-bottom: 1.1rem; }
	.step h3, .card h3, .sector h3, .pay-card h3, .trust-item h3 { font-size: 1.08rem; font-weight: 600; color: rgb(var(--ink)); margin: 0 0 0.45rem; }
	.step p, .card p, .sector p, .pay-card p, .trust-item p { font-size: 0.92rem; color: rgb(var(--muted)); line-height: 1.6; margin: 0; }
	.note { display: flex; align-items: center; gap: 0.55rem; margin: 1.8rem 0 0; font-size: 0.92rem; color: rgb(var(--ink)); }
	.note :global(svg) { color: rgb(var(--accent-2)); flex-shrink: 0; }


	/* Galerie */
	.gallery { display: grid; gap: 1.25rem; align-items: start; }
	@media (min-width: 900px) { .gallery { grid-template-columns: 1.35fr 0.65fr; } .shot.wide { grid-column: 1 / -1; } }
	.shot { margin: 0; border-radius: 1.4rem; overflow: hidden; background: rgb(var(--mist)); border: 1px solid rgb(var(--line) / 0.08); box-shadow: 0 24px 60px rgba(40, 70, 10, 0.1); }
	.shot a { display: block; overflow: hidden; }
	.shot img { display: block; width: 100%; height: auto; transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1); }
	.shot:not(.wide) img { aspect-ratio: 4 / 3; object-fit: cover; object-position: top left; }
	.shot a:hover img { transform: scale(1.03); }
	.shot figcaption { padding: 1rem 1.25rem 1.2rem; font-size: 0.9rem; color: rgb(var(--muted)); line-height: 1.55; }
	.shot figcaption b { display: block; font-family: 'Space Grotesk', sans-serif; color: rgb(var(--ink)); font-size: 1rem; margin-bottom: 0.2rem; }

	/* Bénéfices */
	.benefits { display: grid; gap: 1rem; }
	@media (min-width: 640px) { .benefits { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1024px) { .benefits { grid-template-columns: repeat(4, 1fr); } }
	.card { border: 1px solid rgb(var(--line) / 0.08); border-radius: 1.3rem; padding: 1.5rem; transition: border-color 0.25s, transform 0.25s; }
	.card:hover { border-color: rgb(var(--accent)); transform: translateY(-3px); }
	.card .card-icon, .pay-card .card-icon { background: rgb(var(--accent) / 0.16); color: rgb(var(--accent-2)); }

	/* Tableau de bord */
	.night { background: rgb(var(--night)); padding: 6rem 0; position: relative; overflow: hidden; }
	@media (max-width: 767px) { .night { padding: 4rem 0; } }
	.dash-grid { display: grid; gap: 3rem; align-items: center; }
	@media (min-width: 1024px) { .dash-grid { grid-template-columns: 0.95fr 1.05fr; gap: 4rem; } }
	.night-text { color: rgba(255, 255, 255, 0.72); line-height: 1.75; margin: 0 0 1.5rem; max-width: 36rem; }
	.night-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.7rem; color: #fff; font-size: 0.95rem; }
	.night-list li { display: flex; gap: 0.6rem; align-items: center; }
	.night-list :global(svg) { color: rgb(var(--accent)); }
	.dash { background: linear-gradient(160deg, #18240f, #0f170a); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 1.6rem; padding: 1.3rem; box-shadow: 0 40px 90px rgba(0, 0, 0, 0.45); }
	.dash-top { display: flex; align-items: center; gap: 0.4rem; margin-bottom: 1.1rem; }
	.dash-top span { width: 0.6rem; height: 0.6rem; border-radius: 50%; background: rgba(255, 255, 255, 0.18); }
	.dash-top em { margin-left: auto; font-style: normal; font-size: 0.72rem; color: rgba(255, 255, 255, 0.45); }
	.kpis { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.7rem; }
	@media (min-width: 560px) { .kpis { grid-template-columns: repeat(4, 1fr); } }
	.kpis div { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 0.9rem; padding: 0.8rem; }
	.kpis small { display: block; font-size: 0.68rem; color: rgba(255, 255, 255, 0.55); }
	.kpis strong { display: block; font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; color: #fff; margin: 0.15rem 0; }
	.kpis i { font-style: normal; font-size: 0.7rem; color: rgba(255, 255, 255, 0.5); }
	.kpis i.up { color: rgb(var(--accent)); }
	.bars { display: flex; align-items: flex-end; gap: 0.4rem; height: 7.5rem; margin: 1.1rem 0; padding: 0.8rem; background: rgba(255, 255, 255, 0.03); border-radius: 0.9rem; }
	.bars span { flex: 1; border-radius: 0.35rem 0.35rem 0.15rem 0.15rem; background: linear-gradient(to top, rgb(var(--accent-2)), rgb(var(--accent))); opacity: 0.9; }
	.rows { display: grid; gap: 0.45rem; }
	.rows div { display: grid; grid-template-columns: 1.2fr 1fr auto; gap: 0.6rem; align-items: center; padding: 0.6rem 0.8rem; border-radius: 0.7rem; background: rgba(255, 255, 255, 0.04); font-size: 0.78rem; color: rgba(255, 255, 255, 0.7); }
	.rows b { color: #fff; font-weight: 600; }
	.rows em { font-style: normal; font-size: 0.7rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 999px; background: rgb(var(--accent) / 0.18); color: rgb(var(--accent)); }
	.rows em.wait { background: rgba(255, 190, 60, 0.15); color: #ffc65a; }

	/* Secteurs */
	.sectors { display: grid; gap: 1rem; }
	@media (min-width: 640px) { .sectors { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1024px) { .sectors { grid-template-columns: repeat(4, 1fr); } }
	.sector { position: relative; border-radius: 1.3rem; padding: 1.5rem; background: linear-gradient(180deg, rgb(var(--mist)), rgb(var(--bg))); border: 1px solid rgb(var(--line) / 0.07); overflow: hidden; transition: transform 0.25s, box-shadow 0.25s; }
	.sector::after { content: ''; position: absolute; left: 0; bottom: 0; height: 3px; width: 0; background: rgb(var(--accent)); transition: width 0.35s; }
	.sector:hover { transform: translateY(-4px); box-shadow: 0 22px 45px rgba(60, 90, 10, 0.1); }
	.sector:hover::after { width: 100%; }
	.sector-icon { width: 2.6rem; height: 2.6rem; border-radius: 0.8rem; display: grid; place-items: center; background: rgb(var(--night)); color: rgb(var(--accent)); margin-bottom: 1rem; }

	/* Paiements */
	.pays { display: grid; gap: 1rem; }
	@media (min-width: 900px) { .pays { grid-template-columns: repeat(3, 1fr); } }
	.pay-card { background: rgb(var(--bg)); border-radius: 1.4rem; padding: 1.7rem; border: 1px solid rgb(var(--line) / 0.07); }
	.pay-card small { display: block; font-size: 0.8rem; font-weight: 600; color: rgb(var(--accent-2)); margin: -0.15rem 0 0.6rem; }

	/* Confiance */
	.trust { display: grid; gap: 1rem; }
	@media (min-width: 768px) { .trust { grid-template-columns: repeat(2, 1fr); } }
	.trust-item { display: flex; gap: 1rem; padding: 1.4rem; border-radius: 1.3rem; border: 1px solid rgb(var(--line) / 0.08); }
	.trust-icon { flex-shrink: 0; width: 2.8rem; height: 2.8rem; border-radius: 50%; display: grid; place-items: center; background: rgb(var(--accent) / 0.16); color: rgb(var(--accent-2)); }


	/* FAQ */
	.faq-grid { display: grid; gap: 2rem; }
	@media (min-width: 1024px) { .faq-grid { grid-template-columns: 0.8fr 1.2fr; gap: 4rem; align-items: start; } }
	.faq { display: grid; gap: 0.7rem; }
	.faq details { background: rgb(var(--bg)); border: 1px solid rgb(var(--line) / 0.08); border-radius: 1.1rem; padding: 0 1.3rem; transition: border-color 0.2s; }
	.faq details[open] { border-color: rgb(var(--accent)); }
	.faq summary { list-style: none; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.1rem 0; }
	.faq summary::-webkit-details-marker { display: none; }
	.faq summary h3 { margin: 0; font-size: 1rem; font-weight: 600; color: rgb(var(--ink)); }
	.faq-plus { flex-shrink: 0; width: 1.8rem; height: 1.8rem; border-radius: 50%; display: grid; place-items: center; background: rgb(var(--accent) / 0.16); color: rgb(var(--accent-2)); font-weight: 700; transition: transform 0.25s; }
	.faq details[open] .faq-plus { transform: rotate(45deg); }
	.faq details p { margin: 0 0 1.15rem; font-size: 0.93rem; color: rgb(var(--muted)); line-height: 1.7; }

	/* Démo */
	.demo { position: relative; background: rgb(var(--night)); padding: 6rem 0; overflow: hidden; scroll-margin-top: 4rem; }
	.demo::before { content: ''; position: absolute; width: 40rem; height: 40rem; left: -14rem; bottom: -20rem; border-radius: 50%; background: radial-gradient(circle, rgb(var(--accent) / 0.22), transparent 65%); }
	@media (max-width: 767px) { .demo { padding: 4rem 0; } }
	.demo-grid { position: relative; display: grid; gap: 3rem; align-items: start; }
	@media (min-width: 1024px) { .demo-grid { grid-template-columns: 1fr 1fr; gap: 4rem; } }
	.start { list-style: none; padding: 0; margin: 0 0 2rem; display: grid; gap: 1rem; }
	.start li { display: flex; gap: 0.9rem; color: rgba(255, 255, 255, 0.75); line-height: 1.6; font-size: 0.95rem; }
	.start b { color: #fff; }
	.start span { flex-shrink: 0; width: 2rem; height: 2rem; border-radius: 50%; display: grid; place-items: center; background: rgb(var(--accent)); color: rgb(var(--night)); font-weight: 700; font-family: 'Space Grotesk', sans-serif; }
	.direct { display: grid; gap: 0.6rem; }
	.direct a { display: inline-flex; align-items: center; gap: 0.55rem; color: #fff; font-size: 0.92rem; font-weight: 500; width: fit-content; border-bottom: 1px solid rgba(255, 255, 255, 0.2); padding-bottom: 0.15rem; }
	.direct a:hover { color: rgb(var(--accent)); border-color: rgb(var(--accent)); }
	.direct :global(svg) { color: rgb(var(--accent)); }

	.form-card { background: rgb(var(--bg)); border-radius: 1.8rem; padding: 2rem; box-shadow: 0 40px 90px rgba(0, 0, 0, 0.4); }
	@media (max-width: 480px) { .form-card { padding: 1.4rem; } }
	.form-title { font-size: 1.4rem; font-weight: 700; color: rgb(var(--ink)); margin: 0 0 1.3rem; letter-spacing: -0.02em; }
	form { display: grid; gap: 0.95rem; }
	.row { display: grid; gap: 0.95rem; }
	@media (min-width: 560px) { .row { grid-template-columns: 1fr 1fr; } }
	label { display: grid; gap: 0.4rem; font-size: 0.8rem; font-weight: 600; color: rgb(var(--ink)); }
	.opt { font-weight: 400; color: rgb(var(--muted)); }
	input, select, textarea { width: 100%; font: inherit; font-size: 0.92rem; font-weight: 400; color: rgb(var(--ink)); background: var(--field-bg); border: 1px solid var(--field-border); border-radius: 0.95rem; padding: 0.8rem 0.95rem; transition: border-color 0.2s, box-shadow 0.2s; }
	input:focus, select:focus, textarea:focus { outline: none; border-color: var(--field-border-focus); box-shadow: var(--field-shadow-focus); }
	textarea { resize: vertical; }
	.err { margin: 0; font-size: 0.82rem; color: #c0392b; text-align: center; }
	.legal { margin: 0.2rem 0 0; font-size: 0.75rem; color: rgb(var(--muted)); text-align: center; }
	.legal a { text-decoration: underline; }
	.done { text-align: center; padding: 1.5rem 0.5rem; display: grid; justify-items: center; gap: 0.8rem; }
	.done-icon { width: 3.6rem; height: 3.6rem; border-radius: 50%; display: grid; place-items: center; background: rgb(var(--accent) / 0.18); color: rgb(var(--accent-2)); }
	.done h3 { margin: 0; font-size: 1.4rem; color: rgb(var(--ink)); }
	.done p { margin: 0 0 0.6rem; color: rgb(var(--muted)); line-height: 1.6; max-width: 26rem; }
	.again { background: none; border: 0; color: rgb(var(--muted)); font-size: 0.85rem; text-decoration: underline; cursor: pointer; }

	@keyframes rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
	@keyframes pop { to { opacity: 1; transform: none; } }
	@keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
	@keyframes pulse { 0%, 100% { box-shadow: 0 0 0 4px rgb(var(--accent) / 0.25); } 50% { box-shadow: 0 0 0 8px rgb(var(--accent) / 0.05); } }
	@media (prefers-reduced-motion: reduce) {
		.msg { opacity: 1; transform: none; animation: none; }
		.float, .dot, .title, .lead, .badge, .phone-wrap { animation: none; }
	}

	/* Vélume : cadre navigateur et galerie */
	.browser-wrap { position: relative; animation: rise 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both; }
	.browser { border-radius: 1rem; overflow: hidden; background: #fff; box-shadow: 0 40px 90px rgba(30, 40, 10, 0.28), 0 0 0 1px rgb(var(--line) / 0.08); }
	.browser-bar { display: flex; align-items: center; gap: 0.4rem; padding: 0.6rem 0.8rem; background: rgb(var(--mist)); border-bottom: 1px solid rgb(var(--line) / 0.08); }
	.browser-bar span { width: 0.6rem; height: 0.6rem; border-radius: 50%; background: rgb(var(--line) / 0.18); }
	.browser-bar em { margin-left: 0.6rem; font-style: normal; font-size: 0.72rem; color: rgb(var(--muted)); background: rgb(var(--bg)); padding: 0.2rem 0.7rem; border-radius: 999px; }
	.browser img { display: block; width: 100%; height: auto; }
	.mobile-float { position: absolute; right: -0.75rem; bottom: -2.5rem; width: 26%; border-radius: 1.4rem; overflow: hidden; border: 5px solid #111; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3); background: #fff; }
	.mobile-float img { display: block; width: 100%; height: auto; }
	@media (max-width: 640px) { .mobile-float { display: none; } }
	.tabs { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.4rem; }
	.tabs button { padding: 0.55rem 1rem; border-radius: 999px; border: 1px solid rgb(var(--line) / 0.12); background: rgb(var(--bg)); font-weight: 600; font-size: 0.88rem; color: rgb(var(--ink)); cursor: pointer; transition: background 0.2s, border-color 0.2s; }
	.tabs button[aria-pressed='true'] { background: rgb(var(--accent)); border-color: rgb(var(--accent)); color: rgb(var(--night)); }
	.viewer { margin: 0; border-radius: 1.2rem; overflow: hidden; border: 1px solid rgb(var(--line) / 0.08); box-shadow: 0 24px 60px rgba(40, 70, 10, 0.12); background: rgb(var(--bg)); }
		.viewer img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 10; object-fit: cover; object-position: top left; }
	.viewer figcaption { padding: 1rem 1.25rem 1.2rem; font-size: 0.95rem; color: rgb(var(--muted)); line-height: 1.55; }
	.viewer figcaption b { display: block; font-family: 'Space Grotesk', sans-serif; color: rgb(var(--ink)); font-size: 1.05rem; margin-bottom: 0.2rem; }
	.duo { display: grid; gap: 1.25rem; }
	@media (min-width: 900px) { .duo { grid-template-columns: 1fr 1fr; } }
	.note a, .inline-link { text-decoration: underline; color: rgb(var(--accent-2)); }
	.thumbs { display: grid; gap: 1rem; margin-top: 1.25rem; }
	.thumbs { grid-template-columns: repeat(2, 1fr); }
	@media (min-width: 640px) { .thumbs { grid-template-columns: repeat(4, 1fr); } }
	@media (min-width: 1024px) { .thumbs { grid-template-columns: repeat(6, 1fr); } }
	.thumb { display: block; padding: 0; border: 2px solid transparent; border-radius: 0.8rem; overflow: hidden; background: rgb(var(--bg)); cursor: pointer; text-align: left; transition: border-color 0.2s, transform 0.2s; }
	.thumb:hover { transform: translateY(-2px); }
	.thumb.on { border-color: rgb(var(--accent)); }
	.thumb img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 10; object-fit: cover; object-position: top left; }
	.thumb span { display: block; padding: 0.45rem 0.6rem; font-size: 0.78rem; font-weight: 600; color: rgb(var(--ink)); }
	.modules { display: grid; gap: 0.75rem; grid-template-columns: repeat(2, 1fr); }
	@media (min-width: 640px) { .modules { grid-template-columns: repeat(3, 1fr); } }
	@media (min-width: 1024px) { .modules { grid-template-columns: repeat(4, 1fr); } }
	.module { display: flex; gap: 0.75rem; align-items: flex-start; padding: 1rem 1.1rem; border-radius: 1rem; background: rgb(var(--bg)); border: 1px solid rgb(var(--line) / 0.08); }
	.module :global(svg) { flex: none; color: rgb(var(--accent-2)); margin-top: 0.15rem; }
	.module b { display: block; font-size: 0.95rem; color: rgb(var(--ink)); }
	.module small { display: block; font-size: 0.82rem; color: rgb(var(--muted)); line-height: 1.45; margin-top: 0.15rem; }
</style>
