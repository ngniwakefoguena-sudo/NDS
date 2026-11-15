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

	const url = `${site.url}/velume`;
	const waDemo = `https://wa.me/33659173774?text=${encodeURIComponent('Bonjour, je souhaite une démonstration de Vélume, le logiciel de gestion tout-en-un.')}`;


	const modules = [
		{ icon: Store, t: 'Point de vente', s: 'Caisse tactile, tickets, sessions' },
		{ icon: Wallet, t: 'Caisse & paiements', s: 'Tous moyens de paiement, clôtures' },
		{ icon: Receipt, t: 'Facturation', s: 'Devis, factures, paiements' },
		{ icon: CalendarDays, t: 'Rendez-vous & location', s: 'Réservation en ligne, acomptes' },
		{ icon: MessageCircle, t: 'WhatsApp & discussion', s: 'Clients, équipe, visio' },
		{ icon: Users, t: 'Employés & planning', s: 'Horaires, congés, paie' },
		{ icon: Package, t: 'Inventaire & achats', s: 'Stock, seuils, fournisseurs' },
		{ icon: ChefHat, t: 'Cuisine & recettes', s: 'Écran cuisine, coûts, HACCP' },
		{ icon: ChartColumn, t: 'CRM & marketing', s: 'Pipeline, campagnes, sondages' },
		{ icon: Heart, t: 'Fidélité', s: 'Cartes, points, niveaux' },
		{ icon: Signature, t: 'Signature électronique', s: 'Contrats et devis signés en ligne' },
		{ icon: Bot, t: 'Assistant IA', s: 'Questions en langage naturel' }
	];

	const benefits = [
		{ icon: Layers, title: 'Un seul logiciel au lieu de dix', text: 'Caisse, factures, stock, planning, réservations et messages au même endroit : fini les cahiers, Excel et applications qui ne se parlent pas.' },
		{ icon: CreditCard, title: 'Tous les moyens de paiement', text: 'Espèces, carte bancaire, virement, Mobile Money ou portefeuille local : chaque paiement est suivi séparément, dans votre devise.' },
		{ icon: ChartColumn, title: 'Vos chiffres en temps réel', text: 'Ventes du jour, factures en retard, stock bas : vous savez où en est votre entreprise sans attendre la fin du mois.' },
		{ icon: Bot, title: 'Un assistant IA intégré', text: 'Demandez « ventes du jour » ou « créneaux libres demain » et Vélume répond, sans chercher dans les menus.' },
		{ icon: MessageCircle, title: 'WhatsApp au cœur de la relation', text: 'Les demandes clients deviennent des opportunités dans le CRM, avec réponses types et appel vidéo.' },
		{ icon: Monitor, title: 'Sur tous les écrans', text: 'Téléphone, tablette, poste de travail ou caisse tactile : l’interface s’adapte à chaque poste.' },
		{ icon: Languages, title: 'Multilingue et multi-devises', text: 'Interface en français et en anglais, montants dans la devise de votre pays : Vélume s’adapte à votre marché.' },
		{ icon: ShieldCheck, title: 'Droits par rôle', text: 'Gérant, barista, serveur, cuisinier, photographe : chacun ne voit que ce qui le concerne.' }
	];

	const sectors = [
		{ icon: Coffee, title: 'Cafés et salons de thé', text: 'Caisse, écran bar, recettes et coût des boissons, fidélité.' },
		{ icon: UtensilsCrossed, title: 'Restaurants', text: 'Commandes en salle, écran cuisine, livraison et hygiène HACCP.' },
		{ icon: Camera, title: 'Studios photo, vidéo, podcast', text: 'Réservation de créneaux, acomptes, galerie clients et contrats signés.' },
		{ icon: ShoppingBag, title: 'Boutiques et commerces', text: 'Point de vente, stock, achats fournisseurs et encaissements.' },
		{ icon: Scissors, title: 'Salons et instituts', text: 'Rendez-vous en ligne, planning des équipes et cartes de fidélité.' },
		{ icon: ClipboardList, title: 'PME de services', text: 'Devis, factures, projets, notes de frais et suivi des employés.' }
	];

	const trust = [
		{ icon: Handshake, title: 'Adapté à votre activité', text: 'Nous configurons Vélume à votre métier : produits, tarifs, rôles, caisses et moyens de paiement.' },
		{ icon: Rocket, title: 'Mise en route accompagnée', text: 'Import de vos données, formation de l’équipe et suivi les premières semaines.' },
		{ icon: Sparkles, title: 'Évolutif sans programmation', text: 'Ajoutez un champ, une application ou une règle automatique depuis les paramètres.' },
		{ icon: Lock, title: 'Vos données vous appartiennent', text: 'Export complet en CSV ou JSON à tout moment, sauvegarde et restauration intégrées.' }
	];

	const faq = [
		{ q: 'Qu’est-ce que Vélume ?', a: 'Vélume est un logiciel de gestion tout-en-un (de type ERP) conçu par Norbert Digital Service pour les cafés, restaurants, studios et commerces. Il réunit plus de 30 applications : point de vente, caisse multi-paiements, facturation, inventaire, réservations, planning, CRM, WhatsApp et un assistant IA.' },
		{ q: 'Quels moyens de paiement Vélume gère-t-il ?', a: 'Tous les moyens de paiement courants : espèces, carte bancaire, virement, Mobile Money et portefeuilles électroniques locaux. Chaque encaissement est enregistré par moyen de paiement, dans votre devise, et la clôture de caisse calcule automatiquement les écarts.' },
		{ q: 'Sur quels appareils fonctionne Vélume ?', a: 'Dans le navigateur, sur téléphone, tablette, ordinateur ou caisse tactile. L’affichage s’adapte au poste de travail, sans installation compliquée.' },
		{ q: 'Pour quels types d’entreprises ?', a: 'Cafés, restaurants, studios photo et vidéo, boutiques, salons et PME de services, partout dans le monde : Europe, Afrique, Amérique du Nord, Moyen-Orient. Les modules s’activent selon votre activité.' },
		{ q: 'Vélume fonctionne-t-il dans mon pays ?', a: 'Oui. Vélume s’utilise dans le navigateur, partout dans le monde. L’interface est en français et en anglais, les montants s’affichent dans votre devise et les moyens de paiement se configurent selon votre marché.' },
		{ q: 'Comment obtenir Vélume pour mon entreprise ?', a: 'Demandez une démonstration avec le formulaire ci-dessous ou sur WhatsApp. Nous vous présentons l’outil sur votre activité, puis nous le configurons à votre marque.' }
	];

	const sectorOptions = [...sectors.map((s) => s.title), 'Autre activité'];

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
			track('generate_lead', { lead_source: 'demo_velume', service: data.get('secteur')?.toString() || undefined });
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
	title="Vélume : logiciel de gestion tout-en-un, caisse et facturation"
	description="Vélume, le logiciel de gestion tout-en-un pour cafés, restaurants, studios et commerces du monde entier : caisse et tous moyens de paiement, facturation, stock, réservations, planning, CRM, WhatsApp et assistant IA. Démo gratuite."
	image="/images/velume/velume-tableau-de-bord.webp"
	jsonLd={[
		{
			'@context': 'https://schema.org',
			'@type': 'SoftwareApplication',
			name: 'Vélume',
			applicationCategory: 'BusinessApplication',
			applicationSubCategory: 'ERP, logiciel de caisse, logiciel de gestion',
			operatingSystem: 'Web, Android, iOS, Windows, macOS',
			description: 'Logiciel de gestion tout-en-un : point de vente, caisse multi-paiements, facturation, inventaire, réservations, planning, CRM, WhatsApp et assistant IA, en français et en anglais.',
			keywords: 'logiciel de gestion, ERP, ERP PME, logiciel de caisse, caisse enregistreuse, point de vente, gestion restaurant, gestion café, logiciel de réservation, facturation, gestion de stock, planning employés, business management software, POS software',
			inLanguage: ['fr', 'en'],
			areaServed: 'Worldwide',
			screenshot: ['velume-tableau-de-bord', 'velume-assistant-ia', 'velume-planning', 'velume-caisse-mobile-money'].map((n) => `${site.url}/images/velume/${n}.webp`),
			featureList: modules.map((m) => `${m.t} : ${m.s}`).join(' ; '),
			offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', description: 'Démonstration gratuite' },
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
				{ '@type': 'ListItem', position: 1, name: 'Accueil', item: `${site.url}/` },
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
			<span class="badge"><span class="dot"></span> Nouveau · Une solution Norbert Digital Service</span>
			<h1 class="title">Vélume, <span class="hl">toute votre entreprise</span> dans un seul logiciel</h1>
			<p class="lead">
				Caisse et paiements, factures, stock, réservations, planning des équipes, CRM et WhatsApp : Vélume réunit plus de 30 applications
				de gestion, pensées pour les cafés, restaurants, studios et commerces, partout dans le monde.
			</p>
			<div class="ctas">
				<a href="#demo" class="btn-lime">Demander une démo <ArrowRight class="w-4 h-4" /></a>
				<a href="#visite" class="btn-line">Aperçu en images</a>
			</div>
			<ul class="hero-points">
				<li><Check class="w-4 h-4" /> Tous moyens de paiement</li>
				<li><Check class="w-4 h-4" /> Multi-devises</li>
				<li><Check class="w-4 h-4" /> Français et anglais</li>
			</ul>
		</div>

		<div class="browser-wrap">
			<div class="browser">
				<div class="browser-bar"><span></span><span></span><span></span><em>Vélume · tableau de bord</em></div>
				<img src="/images/velume/velume-tableau-de-bord.webp" alt="Vélume : tableau de bord des ventes du jour, réparties par moyen de paiement (espèces, mobile, virement, carte)" width="1440" height="900" fetchpriority="high" />
			</div>
			<div class="mobile-float">
				<img src="/images/velume/velume-mobile.webp" alt="Vélume sur téléphone" width="780" height="1688" loading="lazy" decoding="async" />
			</div>
		</div>
	</div>
</section>

<!-- ───────────── Chiffres clés ───────────── -->
<section class="strip">
	<div class="wrap strip-grid" use:reveal={{ stagger: 80 }}>
		<div data-reveal-item><strong>30+</strong><span>applications intégrées</span></div>
		<div data-reveal-item><strong>Tous paiements</strong><span>espèces, carte, virement, mobile</span></div>
		<div data-reveal-item><strong>Monde entier</strong><span>multilingue et multi-devises</span></div>
		<div data-reveal-item><strong>Tous écrans</strong><span>téléphone, tablette, caisse</span></div>
	</div>
</section>

<!-- ───────────── Problème ───────────── -->
<section class="sec">
	<div class="wrap why" use:reveal>
		<div>
			<span class="kicker">Pourquoi Vélume</span>
			<h2 class="h2">Votre activité ne tient plus dans un cahier et trois applications</h2>
		</div>
		<div class="why-text">
			<p>Les ventes sont notées à la caisse, les paiements par carte et par mobile sur un autre outil, les factures dans Excel, les réservations sur WhatsApp et le planning sur un papier au mur. Le soir, personne ne sait vraiment combien l’entreprise a gagné.</p>
			<p>Vélume met tout au même endroit. <strong>Chaque vente, chaque paiement et chaque réservation alimente automatiquement vos tableaux de bord</strong> : vous pilotez avec des chiffres justes, en temps réel.</p>
		</div>
	</div>
</section>

<!-- ───────────── En images ───────────── -->
<section id="visite" class="sec mist">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Vélume en images</span>
			<h2 class="h2">Un aperçu de l’application</h2>
			<p class="sub">Deux écrans réels, avec des données de démonstration. Le reste se découvre pendant la démo personnalisée.</p>
		</header>
		<div class="duo" use:reveal={{ stagger: 120 }}>
			<figure class="viewer" data-reveal-item>
				<img src="/images/velume/velume-assistant-ia.webp" alt="Vélume AI : l’assistant répond à la question « ventes du jour » avec le total et le détail par moyen de paiement" width="1440" height="900" loading="lazy" decoding="async" />
				<figcaption><b>Assistant Vélume AI</b>Une question en français, une réponse chiffrée : ventes du jour, factures en retard, créneaux libres.</figcaption>
			</figure>
			<figure class="viewer" data-reveal-item>
				<img src="/images/velume/velume-planning.webp" alt="Vélume : planning hebdomadaire des employés par poste" width="1440" height="900" loading="lazy" decoding="async" />
				<figcaption><b>Planning des équipes</b>Les horaires de chaque employé sur la semaine, publiés en un clic et recopiés d’une semaine à l’autre.</figcaption>
			</figure>
		</div>
		<p class="note"><Lock class="w-4 h-4" /> Vous voulez voir le reste ? <a href="#demo">Demandez une démonstration</a> : nous vous montrons tous les modules sur votre activité.</p>
	</div>
</section>

<!-- ───────────── Modules ───────────── -->
<section class="sec">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Tout est inclus</span>
			<h2 class="h2">Les applications qui font tourner votre entreprise</h2>
			<p class="sub">Activez seulement celles dont vous avez besoin. Elles partagent les mêmes clients, produits et paiements : rien n’est saisi deux fois.</p>
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
			<span class="kicker">Ce que vous gagnez</span>
			<h2 class="h2">Moins de papier, plus de contrôle, plus de ventes</h2>
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
			<span class="kicker light">Caisse & paiements</span>
			<h2 class="h2 light">Chaque franc encaissé est suivi, du tiroir au téléphone</h2>
			<p class="night-text">À l’ouverture, l’équipe compte le fond de caisse. Pendant la journée, chaque vente est rangée par moyen de paiement. Le soir, Vélume calcule ce que le tiroir et chaque compte de paiement doivent contenir, et signale le moindre écart.</p>
			<ul class="night-list">
				<li><Check class="w-4 h-4" /> Espèces, carte, virement et paiement mobile séparés</li>
				<li><Check class="w-4 h-4" /> Comptage du fond de caisse, dans votre devise</li>
				<li><Check class="w-4 h-4" /> Rapprochement des paiements électroniques</li>
			</ul>
		</div>
		<figure class="viewer" use:reveal={{ delay: 120 }}>
			<img src="/images/velume/velume-caisse-mobile-money.webp" alt="Vélume : vue d’ensemble de la caisse avec espèces, paiement mobile, virement, carte et clôtures de caisse" width="1440" height="900" loading="lazy" decoding="async" />
		</figure>
	</div>
</section>

<!-- ───────────── Secteurs ───────────── -->
<section class="sec">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Pour qui</span>
			<h2 class="h2">Un logiciel, configuré pour votre métier</h2>
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
			<span class="kicker">Notre accompagnement</span>
			<h2 class="h2">Une équipe qui installe Vélume avec vous</h2>
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
			<span class="kicker">Questions fréquentes</span>
			<h2 class="h2">Tout savoir sur le logiciel de gestion Vélume</h2>
			<p class="sub">Paiements, appareils, secteurs et pays : les réponses aux questions qu’on nous pose le plus. Pour aller plus loin, lisez notre <a class="inline-link" href="/blog/velume-logiciel-de-gestion-tout-en-un-caisse-mobile-money-stock">article complet sur Vélume</a>.</p>
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
			<span class="kicker light">Démonstration gratuite</span>
			<h2 class="h2 light">Voyez Vélume tourner sur votre propre activité</h2>
			<p class="night-text">Recevez une démonstration personnalisée. Voici comment on démarre :</p>
			<ol class="start">
				<li><span>1</span><div><b>Un échange de 15 minutes</b> pour comprendre votre activité, vos points de vente et vos moyens de paiement.</div></li>
				<li><span>2</span><div><b>Une démonstration sur vos données</b> : vos produits, vos tarifs, vos équipes.</div></li>
				<li><span>3</span><div><b>Une mise en route accompagnée</b>, avec formation de l’équipe et suivi.</div></li>
			</ol>
			<div class="direct">
				<a href={waDemo} target="_blank" rel="noopener"><MessageCircle class="w-4 h-4" /> WhatsApp France : +33 6 59 17 37 74</a>
				<a href={`https://wa.me/237659324756?text=${encodeURIComponent('Bonjour, je souhaite une démonstration de Vélume.')}`} target="_blank" rel="noopener"><MessageCircle class="w-4 h-4" /> WhatsApp Cameroun : +237 6 59 32 47 56</a>
			</div>
		</div>

		<div class="form-card">
			{#if sent}
				<div class="done">
					<span class="done-icon"><CircleCheck class="w-7 h-7" /></span>
					<h3>Demande envoyée !</h3>
					<p>Merci. Nous vous recontactons sous 24h ouvrées pour planifier votre démonstration.</p>
					<a href={waDemo} target="_blank" rel="noopener" class="btn-lime">Accélérer sur WhatsApp <ArrowRight class="w-4 h-4" /></a>
					<button type="button" class="again" onclick={() => (sent = false)}>Envoyer une autre demande</button>
				</div>
			{:else}
				<form name="demo-velume" method="POST" data-netlify="true" {...{ 'netlify-honeypot': 'bot-field' }} onsubmit={submitDemo}>
					<input type="hidden" name="form-name" value="demo-velume" />
					<p hidden><label>Ne pas remplir <input name="bot-field" /></label></p>
					<h3 class="form-title">Demander ma démo Vélume</h3>
					<div class="row">
						<label>Nom et prénom<input name="nom" required autocomplete="name" placeholder="Jean Dupont" /></label>
						<label>Entreprise<input name="entreprise" required autocomplete="organization" placeholder="Votre entreprise" /></label>
					</div>
					<div class="row">
						<label>E-mail<input name="email" type="email" required autocomplete="email" placeholder="vous@entreprise.com" /></label>
						<label>Téléphone / WhatsApp<input name="telephone" type="tel" required autocomplete="tel" placeholder="+237 6 … ou +33 6 …" /></label>
					</div>
					<label>Type d’activité
						<select name="secteur" required>
							<option value="" disabled selected>Choisissez votre activité</option>
							{#each sectorOptions as o}<option value={o}>{o}</option>{/each}
						</select>
					</label>
					<label><span>Votre besoin <span class="opt">(facultatif)</span></span><textarea name="message" rows="3" placeholder="Ex. : 2 points de vente, suivi des paiements et du stock"></textarea></label>
					<button type="submit" class="btn-lime full" disabled={sending}>
						{sending ? 'Envoi en cours…' : 'Recevoir ma démonstration'} <ArrowRight class="w-4 h-4" />
					</button>
					{#if failed}<p class="err">Une erreur est survenue. Réessayez ou écrivez-nous sur WhatsApp.</p>{/if}
					<p class="legal">Réponse sous 24h ouvrées. Vos informations servent uniquement à vous recontacter. <a href="/privacy">Confidentialité</a></p>
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
