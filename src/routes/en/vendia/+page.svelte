<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/data/site';
	import { reveal } from '$lib/actions/motion';
	import { track } from '$utils/track';
	import {
		ArrowRight, Check, Clock, ShieldCheck, Zap, FileText, ChartColumn, Users, Handshake, Rocket, Lock,
		Landmark, Stethoscope, GraduationCap, Building2, Plane, ShoppingBag, Scissors, Smartphone, CreditCard,
		Globe, MessageCircle, Sparkles, CircleCheck
	} from 'lucide-svelte';

	const url = `${site.url}/en/vendia`;
	const waDemo = `https://wa.me/33659173774?text=${encodeURIComponent('Hello, I would like a demo of Vendia, the AI sales agent on WhatsApp.')}`;

	const steps = [
		{ icon: MessageCircle, title: 'Welcome', text: 'The assistant introduces itself, detects the language and understands what the client needs.' },
		{ icon: FileText, title: 'Exact quote', text: 'It asks the right questions and calculates the price from your official rate cards.' },
		{ icon: CreditCard, title: 'Payment', text: 'A secure link is sent: card, mobile money or local wallet, in one message.' },
		{ icon: CircleCheck, title: 'Official document', text: 'Contract, invoice or receipt generated and sent automatically as a branded PDF.' }
	];

	const benefits = [
		{ icon: Clock, title: 'Available 24/7', text: 'Your business answers and sells at night, at weekends and on public holidays.' },
		{ icon: Zap, title: 'No client left waiting', text: 'Every message gets an instant reply, even at peak times.' },
		{ icon: ShieldCheck, title: 'Zero pricing errors', text: 'Amounts come only from your rate cards, never made up by the AI.' },
		{ icon: CreditCard, title: 'Faster payment', text: 'Quote, payment and document delivered in minutes, without tying up an agent.' },
		{ icon: FileText, title: 'Professional image', text: 'Contracts, invoices and receipts sent as PDFs in your brand colours.' },
		{ icon: ChartColumn, title: 'Real-time control', text: 'Follow activity and take over at any time.' },
		{ icon: Users, title: 'A freer team', text: 'Your advisers focus on complex cases and client relationships.' },
		{ icon: Sparkles, title: 'Stronger loyalty', text: 'Renewal reminders and offers sent at the right time, automatically.' }
	];

	const sectors = [
		{ icon: ShieldCheck, title: 'Insurance and brokerage', text: 'Car, home or life quotes, payment and certificate as a PDF. Automatic renewal reminders.' },
		{ icon: Landmark, title: 'Microfinance and lending', text: 'Loan simulations, account opening and repayment reminders with online payment.' },
		{ icon: Stethoscope, title: 'Clinics and practices', text: 'Appointment booking, upfront pricing, deposit and a reminder the day before.' },
		{ icon: GraduationCap, title: 'Schools and training', text: 'Tuition fees, enrolment and payment without visiting the office, even on Sundays.' },
		{ icon: Building2, title: 'Real estate agencies', text: 'Instant prices and terms, viewing bookings and secure deposits.' },
		{ icon: Plane, title: 'Transport and travel', text: 'Trip or ticket booking, exact fare, payment and PDF ticket.' },
		{ icon: ShoppingBag, title: 'Retail and e-commerce', text: 'Availability, ordering, payment and receipt, like a major retailer.' },
		{ icon: Scissors, title: 'Trades and service providers', text: 'Service quotes, slot booking and deposits, with no phone calls.' }
	];

	const payments = [
		{ icon: Smartphone, title: 'Mobile payments', sub: 'Mobile money and local wallets', text: 'Instant collection, automatic confirmation and document sent on receipt.' },
		{ icon: CreditCard, title: 'Card payment', sub: 'Visa, Mastercard', text: 'Secure online payment for local, international and travelling clients.' },
		{ icon: Globe, title: 'Remote and overseas clients', sub: 'From abroad', text: 'The same link works from anywhere in the world, with no extra steps.' }
	];

	const trust = [
		{ icon: Handshake, title: 'Human support', text: 'You talk directly to the team that builds and improves Vendia.' },
		{ icon: Rocket, title: 'Fast setup', text: 'A few days are enough to tailor the assistant to your brand and offers.' },
		{ icon: Check, title: 'No heavy commitment', text: 'A pilot lets you test Vendia on your real business before committing.' },
		{ icon: Lock, title: 'Protected data', text: 'No banking data stored: every payment goes through a secure gateway.' }
	];

	const faq = [
		{ q: 'What is Vendia?', a: 'Vendia is an AI WhatsApp chatbot, a fully automated sales agent. It answers your clients on WhatsApp Business, calculates quotes from your prices, sends a payment link and delivers the contract, invoice or receipt as a PDF, 24/7.' },
		{ q: 'How is it different from a standard WhatsApp chatbot?', a: 'A standard chatbot is often limited to canned answers. Vendia combines AI to understand requests with your official rate cards for prices: it sells end to end, from the first message to payment and the official document, without ever making up an amount.' },
		{ q: 'Which payment methods are accepted?', a: 'Card payments (Visa, Mastercard), mobile money and local wallets, depending on your country. The same secure payment link works for clients anywhere in the world.' },
		{ q: 'In which countries is Vendia available?', a: 'Vendia works for businesses worldwide wherever WhatsApp is used: Europe, Africa, North America, the Middle East and beyond. The assistant detects each client’s language and replies in it.' },
		{ q: 'Which industries is it for?', a: 'Insurance and brokerage, banking and microfinance, clinics and medical practices, schools and training centres, real estate, transport and travel agencies, e-commerce and shops, restaurants, trades and service providers. The engine is the same, tailored to your business.' },
		{ q: 'How long does it take to set up Vendia?', a: 'A few days are enough to tailor the assistant to your brand, offers and prices. We start with a no-commitment pilot on your real business.' }
	];

	const sectorOptions = [...sectors.map((s) => s.title), 'Other industry'];

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
			track('generate_lead', { lead_source: 'demo_vendia_en', service: data.get('secteur')?.toString() || undefined });
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
	title="Vendia: the AI WhatsApp Business chatbot that sells 24/7"
	description="AI WhatsApp chatbot for businesses: Vendia replies 24/7, calculates quotes, collects card or mobile payments and sends the contract as a PDF. Insurance, finance, healthcare, retail and more. Free demo."
	jsonLd={[
		{
			'@context': 'https://schema.org',
			'@type': 'SoftwareApplication',
			name: 'Vendia',
			applicationCategory: 'BusinessApplication',
			operatingSystem: 'WhatsApp',
			description: 'AI chatbot and sales agent on WhatsApp Business: welcome, quote, card or mobile payment and official PDF document, for every industry.',
			keywords: 'WhatsApp chatbot, WhatsApp Business API, WhatsApp automation, AI sales agent, conversational AI, sell on WhatsApp, WhatsApp payments, insurance chatbot, automated customer service',
			areaServed: 'Worldwide',
			offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', description: 'Free demo and no-commitment pilot' },
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
				{ '@type': 'ListItem', position: 2, name: 'Vendia', item: url }
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
			<h1 class="title">Vendia, your <span class="hl">best salesperson</span> on WhatsApp</h1>
			<p class="lead">
				The AI WhatsApp chatbot that welcomes your clients, calculates an exact quote, collects payment and sends the contract as a PDF.
				Automatically, 24/7, in the app they already open every day.
			</p>
			<div class="ctas">
				<a href="#demo" class="btn-lime">Book a demo <ArrowRight class="w-4 h-4" /></a>
				<a href={waDemo} target="_blank" rel="noopener" class="btn-line">See Vendia on WhatsApp</a>
			</div>
			<ul class="hero-points">
				<li><Check class="w-4 h-4" /> Live in a few days</li>
				<li><Check class="w-4 h-4" /> Card and mobile payments</li>
				<li><Check class="w-4 h-4" /> No-commitment pilot</li>
			</ul>
		</div>

		<!-- Maquette de conversation -->
		<div class="phone-wrap" aria-label="Example conversation with Vendia on WhatsApp" role="img">
			<div class="phone">
				<div class="notch"></div>
				<div class="chat-head">
					<span class="avatar">V</span>
					<div>
						<strong>Your Insurance</strong>
						<small>online · replies instantly</small>
					</div>
				</div>
				<div class="chat">
					<p class="msg me" style="--d: 0.3s">Hello 👋</p>
					<p class="msg bot" style="--d: 1.1s">Hello! I’m the Your Insurance assistant. Would you like a car, home or life insurance quote?</p>
					<p class="msg me" style="--d: 2.1s">Car, for my Toyota</p>
					<p class="msg bot" style="--d: 3.1s">Your quote: <b>$186 / year</b>, fully comprehensive. Shall I send you the payment link?</p>
					<p class="msg pay" style="--d: 4.1s"><Smartphone class="w-4 h-4" /> Pay by card or mobile · secure link</p>
					<p class="msg doc" style="--d: 5.1s"><FileText class="w-4 h-4" /> Contrat-auto.pdf <span>✓ Paid</span></p>
				</div>
			</div>
			<div class="float f1"><Clock class="w-4 h-4" /> Reply in 2 s</div>
			<div class="float f2"><ShieldCheck class="w-4 h-4" /> Prices from your rate cards</div>
		</div>
	</div>
</section>

<!-- ───────────── Chiffres clés ───────────── -->
<section class="strip">
	<div class="wrap strip-grid" use:reveal={{ stagger: 80 }}>
		<div data-reveal-item><strong>24h/24</strong><span>7 days a week</span></div>
		<div data-reveal-item><strong>4 steps</strong><span>from “hello” to contract</span></div>
		<div data-reveal-item><strong>0 errors</strong><span>in pricing, official rate cards</span></div>
		<div data-reveal-item><strong>A few days</strong><span>to go live</span></div>
	</div>
</section>

<!-- ───────────── Problème ───────────── -->
<section class="sec">
	<div class="wrap why" use:reveal>
		<div>
			<span class="kicker">Why WhatsApp</span>
			<h2 class="h2">Some of your clients will never come to your counter</h2>
		</div>
		<div class="why-text">
			<p>Field work remains essential, and Vendia doesn’t replace it. But some clients prefer to serve themselves remotely, at any hour: an employee renewing their insurance after 8 pm, a parent enrolling their child on a Sunday, a client living in another city or abroad.</p>
			<p>These clients already exist in your market. Your physical network can’t reach them, but WhatsApp can. <strong>Not being there means letting a competitor answer them instead of you.</strong></p>
		</div>
	</div>
</section>

<!-- ───────────── Fonctionnement ───────────── -->
<section class="sec mist">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">How it works</span>
			<h2 class="h2">From “hello” to signed contract, with no human intervention</h2>
		</header>
		<ol class="steps" use:reveal={{ stagger: 110 }}>
			{#each steps as s, i}
				<li class="step" data-reveal-item>
					<span class="step-num">{i + 1}</span>
					<span class="step-icon"><s.icon class="w-5 h-5" /></span>
					<h3>{s.title}</h3>
					<p>{s.text}</p>
				</li>
			{/each}
		</ol>
		<p class="note"><Users class="w-4 h-4" /> An adviser can take over at any time, for a special request or an issue.</p>
	</div>
</section>

<!-- ───────────── En images ───────────── -->
<section class="sec">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Vendia in pictures</span>
			<h2 class="h2">What your client sees, and what you control</h2>
			<p class="sub">Example of an insurance company: on the left, the client’s WhatsApp conversation; on the right, the company’s management area.</p>
		</header>
		<div class="gallery" use:reveal={{ stagger: 120 }}>
			<figure class="shot wide" data-reveal-item>
				<a href="/images/vendia/vendia-contrat-reprise.webp" target="_blank" rel="noopener" aria-label="Enlarge image: contract and follow-up">
					<img src="/images/vendia/vendia-contrat-reprise.webp" alt="Vendia: WhatsApp conversation with built-in mobile payment and a contract and premium tracking dashboard" width="1376" height="768" loading="lazy" decoding="async" />
				</a>
				<figcaption><b>Contract and follow-up</b> Premium tracking, a unique contract number to resume a case, and built-in mobile payment.</figcaption>
			</figure>
			<figure class="shot" data-reveal-item>
				<a href="/images/vendia/vendia-whatsapp-back-office.webp" target="_blank" rel="noopener" aria-label="Enlarge image: client experience and management area">
					<img src="/images/vendia/vendia-whatsapp-back-office.webp" alt="Vendia: client experience on WhatsApp and secure access to the company’s management area" width="1290" height="814" loading="lazy" decoding="async" />
				</a>
				<figcaption><b>Client experience and management</b> The client chats on WhatsApp; your team uses a secure back office.</figcaption>
			</figure>
			<figure class="shot" data-reveal-item>
				<a href="/images/vendia/vendia-contrats-suivi.webp" target="_blank" rel="noopener" aria-label="Enlarge image: cash flow tracking">
					<img src="/images/vendia/vendia-contrats-suivi.webp" alt="Vendia: real-time cash flow tracking and contract resume ID" width="704" height="823" loading="lazy" decoding="async" />
				</a>
				<figcaption><b>Real-time tracking</b> Cash flow, active contracts and resume ID, synced with WhatsApp.</figcaption>
			</figure>
		</div>
	</div>
</section>

<!-- ───────────── Bénéfices ───────────── -->
<section class="sec">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">What you gain</span>
			<h2 class="h2">More sales, fewer repetitive tasks</h2>
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

<!-- ───────────── Tableau de bord (sombre) ───────────── -->
<section class="night">
	<div class="wrap dash-grid">
		<div use:reveal>
			<span class="kicker light">You stay in control</span>
			<h2 class="h2 light">All activity in real time, in one dashboard</h2>
			<p class="night-text">Quotes sent, conversion rate, payments collected, active contracts: you follow every conversation and can take over at any time, without depending on the assistant.</p>
			<ul class="night-list">
				<li><Check class="w-4 h-4" /> Full history of every conversation</li>
				<li><Check class="w-4 h-4" /> Unique ID to resume a case</li>
				<li><Check class="w-4 h-4" /> Export of contracts and payments</li>
			</ul>
		</div>
		<div class="dash" aria-label="Example Vendia dashboard" role="img" use:reveal={{ delay: 120 }}>
			<div class="dash-top"><span></span><span></span><span></span><em>Dashboard · example</em></div>
			<div class="kpis">
				<div><small>Quotes sent</small><strong>248</strong><i class="up">+18 %</i></div>
				<div><small>Conversion rate</small><strong>34 %</strong><i class="up">+6 pts</i></div>
				<div><small>Collected this month</small><strong>$5.5k</strong><i>USD</i></div>
				<div><small>Active contracts</small><strong>412</strong><i class="up">+27</i></div>
			</div>
			<div class="bars" aria-hidden="true">
				{#each [38, 52, 44, 66, 58, 74, 69, 88, 80, 95, 86, 100] as h}<span style="height: {h}%"></span>{/each}
			</div>
			<div class="rows">
				<div><b>CTR-2026-A41K</b><span>Car insurance</span><em>Paid</em></div>
				<div><b>CTR-2026-B07M</b><span>Home</span><em>Paid</em></div>
				<div><b>CTR-2026-C93P</b><span>Life insurance</span><em class="wait">Pending</em></div>
			</div>
		</div>
	</div>
</section>

<!-- ───────────── Secteurs ───────────── -->
<section class="sec">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Every industry</span>
			<h2 class="h2">One engine, dressed in your brand</h2>
			<p class="sub">Your brand, colours, rate cards, catalogue and tone. The welcome, quote, payment, document journey runs on the same reliable engine.</p>
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

<!-- ───────────── Paiements ───────────── -->
<section class="sec mist">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Payments</span>
			<h2 class="h2">Every payment method, without friction</h2>
		</header>
		<div class="pays" use:reveal={{ stagger: 90 }}>
			{#each payments as p}
				<div class="pay-card" data-reveal-item>
					<span class="card-icon"><p.icon class="w-5 h-5" /></span>
					<h3>{p.title}</h3>
					<small>{p.sub}</small>
					<p>{p.text}</p>
				</div>
			{/each}
		</div>
		<p class="note"><Lock class="w-4 h-4" /> Secure, time-limited payment link. No banking data is stored by your business.</p>
	</div>
</section>

<!-- ───────────── Confiance ───────────── -->
<section class="sec">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Why trust us</span>
			<h2 class="h2">A team close to you, not an anonymous platform</h2>
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
<section class="sec mist">
	<div class="wrap faq-grid">
		<div use:reveal>
			<span class="kicker">FAQ</span>
			<h2 class="h2">Everything about the Vendia WhatsApp chatbot</h2>
			<p class="sub">WhatsApp Business automation, payments, countries and industries covered: answers to the questions we hear most.</p>
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
			<h2 class="h2 light">Ready to turn WhatsApp into your best salesperson?</h2>
			<p class="night-text">Get a personalised demo for your industry. Here is how we start:</p>
			<ol class="start">
				<li><span>1</span><div><b>A 15-minute call</b> to understand your business, offers and rate cards.</div></li>
				<li><span>2</span><div><b>Customisation to your brand</b> : name, colours, catalogue, tone, payment methods.</div></li>
				<li><span>3</span><div><b>A guided launch</b>, with follow-up and adjustments during the first weeks.</div></li>
			</ol>
			<div class="direct">
				<a href={waDemo} target="_blank" rel="noopener"><MessageCircle class="w-4 h-4" /> WhatsApp: +33 6 59 17 37 74</a>
				<a href={`https://wa.me/237659324756?text=${encodeURIComponent('Hello, I would like a demo of Vendia.')}`} target="_blank" rel="noopener"><MessageCircle class="w-4 h-4" /> WhatsApp: +237 6 59 32 47 56</a>
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
				<form name="demo-vendia" method="POST" data-netlify="true" {...{ 'netlify-honeypot': 'bot-field' }} onsubmit={submitDemo}>
					<input type="hidden" name="form-name" value="demo-vendia" />
					<p hidden><label>Leave empty <input name="bot-field" /></label></p>
					<h3 class="form-title">Book my demo</h3>
					<div class="row">
						<label>Full name<input name="nom" required autocomplete="name" placeholder="Jane Smith" /></label>
						<label>Company<input name="entreprise" required autocomplete="organization" placeholder="Your company" /></label>
					</div>
					<div class="row">
						<label>Work email<input name="email" type="email" required autocomplete="email" placeholder="you@company.com" /></label>
						<label>Phone / WhatsApp<input name="telephone" type="tel" required autocomplete="tel" placeholder="+1 … / +44 … / +33 …" /></label>
					</div>
					<label>Industry
						<select name="secteur" required>
							<option value="" disabled selected>Choose your industry</option>
							{#each sectorOptions as o}<option value={o}>{o}</option>{/each}
						</select>
					</label>
					<label><span>Your needs <span class="opt">(optional)</span></span><textarea name="message" rows="3" placeholder="E.g. automate quotes and car insurance renewals"></textarea></label>
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
</style>
