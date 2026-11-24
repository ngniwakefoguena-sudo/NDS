<script lang="ts">
	import FollowUs from '$lib/components/FollowUs.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/data/site';
	import { track } from '$utils/track';
	import { servicesEn } from '$lib/data/services.en';
	import { products } from '$lib/data/products';
	import { onMount } from 'svelte';

	// /contact?demo=vendia (ou velume…) : présélectionne la démo du produit
	onMount(() => {
		const pr = products.find((x) => x.slug === new URLSearchParams(location.search).get('demo'));
		const el = document.querySelector('select[name=service]') as HTMLSelectElement | null;
		if (pr && el) el.value = pr.en;
		const sv = new URLSearchParams(location.search).get('service');
		if (!pr && sv && el && [...el.options].some((o) => o.value === sv)) el.value = sv;
	});
	import { Send, Mail, Clock, CircleCheck, MessageCircle, Globe } from 'lucide-svelte';

	const options = servicesEn.map((s) => s.page.title);
	const wa = `https://wa.me/33659173774?text=${encodeURIComponent('Hello, I would like to discuss a project with Norbert Digital Service.')}`;

	let sending = $state(false);
	let sent = $state(false);
	let failed = $state(false);

	async function submit(e: SubmitEvent) {
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
			track('generate_lead', { lead_source: 'formulaire_contact_en', service: data.get('service')?.toString() || undefined });
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
	title="Contact us: free quote within 24 hours"
	description="Tell us about your website, mobile app, AI or marketing project. Norbert Digital Service works with businesses worldwide, 100% remote, in English or French. Reply within 24 hours."
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		name: 'Contact Norbert Digital Service',
		inLanguage: 'en',
		url: `${site.url}/en/contact`,
		about: { '@id': `${site.url}/#organisation` }
	}}
/>

<section class="contact">
	<div class="wrap grid">
		<div class="copy">
			<span class="kicker">Contact</span>
			<h1 class="title">Let’s talk about your project</h1>
			<p class="lead">Describe your needs in a few lines. You will get a reply within 24 hours with the next steps and a first proposal.</p>
			<ul class="points">
				<li><Clock class="w-5 h-5" /> Reply within 24 hours</li>
				<li><Globe class="w-5 h-5" /> 100% remote, clients worldwide</li>
				<li><MessageCircle class="w-5 h-5" /> English or French</li>
				<li><CircleCheck class="w-5 h-5" /> You talk directly with Norbert, the founder</li>
				<li><CircleCheck class="w-5 h-5" /> Free, detailed quote, no commitment</li>
				<li><CircleCheck class="w-5 h-5" /> Trusted by ICS Innovations, Afrilife Insurance, Puol · 5.0 ★ on Google</li>
			</ul>
			<div class="direct">
				<a href={wa} target="_blank" rel="noopener" class="wa-big" onclick={() => track('contact_click', { method: 'whatsapp', location: 'contact_page_en' })}><MessageCircle class="w-4 h-4" /> Faster: chat on WhatsApp (+33 6 59 17 37 74)</a>
				<a href="mailto:{site.email}"><Mail class="w-4 h-4" /> norbertdigitalservices@gmail.com</a>
			</div>
		</div>

		<div class="card">
			{#if sent}
				<div class="done">
					<CircleCheck class="w-8 h-8" />
					<h2>Message sent!</h2>
					<p>Thank you. We will get back to you within 24 hours.</p>
					<button type="button" class="again" onclick={() => (sent = false)}>Send another message</button>
					<FollowUs lang="en" />
				</div>
			{:else}
				<form id="formulaire" name="contact" method="POST" data-netlify="true" {...{ 'netlify-honeypot': 'bot-field' }} onsubmit={submit}>
					<input type="hidden" name="form-name" value="contact" />
					<p hidden><label>Leave empty <input name="bot-field" /></label></p>
					<label><span>Name or company <span class="opt">(optional)</span></span><input name="entreprise" autocomplete="organization" placeholder="Jane Smith, Acme Ltd" /></label>
					<div class="row">
						<label>Email<input name="email" type="email" required autocomplete="email" placeholder="you@company.com" /></label>
						<label>Phone / WhatsApp<input name="telephone" type="tel" autocomplete="tel" placeholder="+1 … / +44 … / +33 …" /></label>
					</div>
					<div class="row">
						<label><span>Service <span class="opt">(optional)</span></span>
							<select name="service">
								<option value="" selected>Not sure yet</option>
								{#each options as o}<option value={o}>{o}</option>{/each}
								<optgroup label="Book a demo">
									{#each products as pr}<option value={pr.en}>{pr.en}</option>{/each}
								</optgroup>
								<option value="Other">Other</option>
							</select>
						</label>
						<label><span>Budget <span class="opt">(optional)</span></span><input name="budget" placeholder="e.g. $3,000 – $10,000" /></label>
					</div>
					<label>Your project<textarea name="besoin" rows="5" required placeholder="In one or two sentences: what you want to build. We will handle the rest."></textarea></label>
					<input type="hidden" name="reunion_date" value="" />
					<input type="hidden" name="reunion_creneau" value="" />
					<button type="submit" class="btn" disabled={sending}>{sending ? 'Sending…' : 'Send my request'} <Send class="w-4 h-4" /></button>
					{#if failed}<p class="err">Something went wrong. Please try again or message us on WhatsApp.</p>{/if}
					<p class="legal">Your details are only used to reply to you. <a href="/privacy">Privacy</a></p>
				</form>
			{/if}
		</div>
	</div>
</section>

<style>
	.wrap { max-width: 80rem; margin: 0 auto; padding: 0 1.25rem; }
	@media (min-width: 768px) { .wrap { padding: 0 2rem; } }
	.contact { padding: 9rem 0 6rem; background: rgb(var(--bg)); }
	@media (max-width: 767px) { .contact { padding-top: 7rem; } }
	.grid { display: grid; gap: 3rem; align-items: start; }
	@media (min-width: 1024px) { .grid { grid-template-columns: 0.9fr 1.1fr; gap: 4rem; } }
	.kicker { display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgb(var(--accent-2)); margin-bottom: 0.9rem; }
	.title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.3rem, 5vw, 3.8rem); font-weight: 700; letter-spacing: -0.04em; line-height: 1.05; color: rgb(var(--ink)); margin: 0 0 1.2rem; }
	.lead { font-size: 1.08rem; line-height: 1.7; color: rgb(var(--muted)); margin: 0 0 1.6rem; }
	.points { list-style: none; padding: 0; margin: 0 0 1.8rem; display: grid; gap: 0.7rem; color: rgb(var(--ink)); }
	.points li { display: flex; align-items: center; gap: 0.6rem; }
	.points :global(svg) { color: rgb(var(--accent-2)); }
	.direct { display: grid; gap: 0.6rem; }
	.direct a { display: inline-flex; align-items: center; gap: 0.5rem; font-weight: 600; color: rgb(var(--ink)); }
	.direct a:hover { color: rgb(var(--accent-2)); }
	.card { background: rgb(var(--mist)); border: 1px solid rgb(var(--line) / 0.08); border-radius: 1.5rem; padding: 1.8rem; box-shadow: 0 24px 60px rgba(40, 70, 10, 0.08); }
	form { display: grid; gap: 1rem; }
	.row { display: grid; gap: 1rem; }
	@media (min-width: 640px) { .row { grid-template-columns: 1fr 1fr; } }
	label { display: grid; gap: 0.4rem; font-size: 0.88rem; font-weight: 600; color: rgb(var(--ink)); }
	input, select, textarea { width: 100%; padding: 0.8rem 0.95rem; border-radius: 0.9rem; border: 1px solid rgb(var(--line) / 0.14); background: rgb(var(--bg)); color: rgb(var(--ink)); font: inherit; font-weight: 400; }
	input:focus, select:focus, textarea:focus { outline: 2px solid rgb(var(--accent)); outline-offset: 1px; }
	.opt { font-weight: 400; color: rgb(var(--muted)); }
	.btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.95rem 1.5rem; border: 0; border-radius: 999px; background: rgb(var(--accent)); color: rgb(var(--night)); font-weight: 700; cursor: pointer; }
	.btn:disabled { opacity: 0.6; }
	.err { color: #c0392b; font-size: 0.9rem; margin: 0; }
	.legal { font-size: 0.8rem; color: rgb(var(--muted)); margin: 0; }
	.legal a { text-decoration: underline; }
	.done { display: grid; justify-items: center; gap: 0.6rem; text-align: center; padding: 2rem 0; color: rgb(var(--ink)); }
	.done :global(svg) { color: rgb(var(--accent-2)); }
	.done h2 { font-family: 'Space Grotesk', sans-serif; margin: 0; }
	.again { background: none; border: 0; text-decoration: underline; color: rgb(var(--muted)); cursor: pointer; }
	.wa-big { background:#25D366 !important; color:#fff !important; font-weight:700; padding:.7rem 1rem; border-radius:999px; }
</style>
