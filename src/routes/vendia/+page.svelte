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

	const url = `${site.url}/vendia`;
	const waDemo = `https://wa.me/33659173774?text=${encodeURIComponent('Bonjour, je souhaite une démonstration de Vendia, l’agent commercial sur WhatsApp.')}`;

	const steps = [
		{ icon: MessageCircle, title: 'Accueil', text: 'L’assistant se présente, détecte la langue et comprend le besoin du client.' },
		{ icon: FileText, title: 'Devis exact', text: 'Il pose les bonnes questions et calcule le montant à partir de vos barèmes officiels.' },
		{ icon: CreditCard, title: 'Paiement', text: 'Un lien sécurisé est envoyé : Mobile Money ou carte bancaire, en un message.' },
		{ icon: CircleCheck, title: 'Document officiel', text: 'Contrat, facture ou reçu généré et envoyé automatiquement en PDF, à votre marque.' }
	];

	const benefits = [
		{ icon: Clock, title: 'Disponible 24h/24, 7j/7', text: 'Votre entreprise répond et vend la nuit, le week-end et les jours fériés.' },
		{ icon: Zap, title: 'Aucun client perdu', text: 'Chaque message reçoit une réponse immédiate, même aux heures de pointe.' },
		{ icon: ShieldCheck, title: 'Zéro erreur de prix', text: 'Les montants viennent uniquement de vos barèmes, jamais inventés par l’IA.' },
		{ icon: CreditCard, title: 'Encaissement plus rapide', text: 'Devis, paiement et document livrés en quelques minutes, sans mobiliser un agent.' },
		{ icon: FileText, title: 'Image professionnelle', text: 'Contrats, factures et reçus envoyés en PDF, à vos couleurs.' },
		{ icon: ChartColumn, title: 'Pilotage en temps réel', text: 'Suivez l’activité et reprenez la main à tout moment.' },
		{ icon: Users, title: 'Équipe libérée', text: 'Vos conseillers se concentrent sur les dossiers complexes et la relation client.' },
		{ icon: Sparkles, title: 'Fidélisation renforcée', text: 'Rappels de renouvellement et offres envoyés au bon moment, automatiquement.' }
	];

	const sectors = [
		{ icon: ShieldCheck, title: 'Assurance et courtage', text: 'Devis auto, habitation ou vie, paiement et attestation en PDF. Rappels de renouvellement automatiques.' },
		{ icon: Landmark, title: 'Microfinance et crédit', text: 'Simulation de crédit chiffrée, ouverture de compte et relances d’échéance avec paiement Mobile Money.' },
		{ icon: Stethoscope, title: 'Cliniques et cabinets', text: 'Prise de rendez-vous, tarif connu à l’avance, acompte et rappel la veille.' },
		{ icon: GraduationCap, title: 'Écoles et formation', text: 'Frais de scolarité, inscription et paiement sans passer au secrétariat, même le dimanche.' },
		{ icon: Building2, title: 'Agences immobilières', text: 'Prix et conditions instantanés, réservation de visite et acompte sécurisé.' },
		{ icon: Plane, title: 'Transport et voyage', text: 'Réservation de trajet ou de billet, tarif exact, paiement et billet en PDF.' },
		{ icon: ShoppingBag, title: 'Commerces et e-commerce', text: 'Disponibilité, commande, paiement et reçu, comme une grande enseigne.' },
		{ icon: Scissors, title: 'Artisans et prestataires', text: 'Devis de prestation, réservation d’un créneau et acompte, sans appel téléphonique.' }
	];

	const payments = [
		{ icon: Smartphone, title: 'Mobile Money', sub: 'MTN Mobile Money, Orange Money', text: 'Encaissement immédiat, confirmation automatique et document envoyé dès réception.' },
		{ icon: CreditCard, title: 'Carte bancaire', sub: 'Visa, Mastercard', text: 'Paiement en ligne sécurisé pour une clientèle urbaine, internationale ou en déplacement.' },
		{ icon: Globe, title: 'Clients à distance et diaspora', sub: 'Depuis l’étranger', text: 'Le même lien fonctionne depuis l’étranger, sans démarche supplémentaire.' }
	];

	const trust = [
		{ icon: Handshake, title: 'Un accompagnement humain', text: 'Vous échangez directement avec l’équipe qui conçoit et fait évoluer Vendia.' },
		{ icon: Rocket, title: 'Mise en place rapide', text: 'Quelques jours suffisent pour personnaliser l’assistant à votre marque et vos offres.' },
		{ icon: Check, title: 'Sans engagement lourd', text: 'Un pilote vous permet de tester Vendia sur votre activité réelle avant de vous engager.' },
		{ icon: Lock, title: 'Données protégées', text: 'Aucune donnée bancaire stockée : chaque paiement passe par une passerelle sécurisée.' }
	];

	const sectorOptions = [...sectors.map((s) => s.title), 'Autre secteur'];

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
			track('generate_lead', { lead_source: 'demo_vendia', service: data.get('secteur')?.toString() || undefined });
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
	title="Vendia : l’agent commercial intelligent sur WhatsApp"
	description="Vendia répond à vos clients sur WhatsApp 24h/24, calcule des devis exacts, encaisse par Mobile Money ou carte et envoie le contrat en PDF. Demandez votre démonstration gratuite."
	jsonLd={[
		{
			'@context': 'https://schema.org',
			'@type': 'SoftwareApplication',
			name: 'Vendia',
			applicationCategory: 'BusinessApplication',
			operatingSystem: 'WhatsApp',
			description: 'Agent commercial intelligent sur WhatsApp : accueil, devis, paiement Mobile Money ou carte et document officiel en PDF, adaptable à tous les secteurs.',
			url,
			publisher: { '@id': `${site.url}/#organisation` }
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Accueil', item: `${site.url}/` },
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
			<span class="badge"><span class="dot"></span> Nouveau · Une solution Norbert Digital Service</span>
			<h1 class="title">Vendia, votre <span class="hl">meilleur commercial</span> sur WhatsApp</h1>
			<p class="lead">
				L’agent intelligent qui accueille vos clients, calcule un devis exact, encaisse le paiement et envoie le contrat en PDF.
				Automatiquement, 24h/24, dans l’application qu’ils ouvrent déjà tous les jours.
			</p>
			<div class="ctas">
				<a href="#demo" class="btn-lime">Demander une démo <ArrowRight class="w-4 h-4" /></a>
				<a href={waDemo} target="_blank" rel="noopener" class="btn-line">Voir Vendia sur WhatsApp</a>
			</div>
			<ul class="hero-points">
				<li><Check class="w-4 h-4" /> Mise en place en quelques jours</li>
				<li><Check class="w-4 h-4" /> Mobile Money et carte bancaire</li>
				<li><Check class="w-4 h-4" /> Pilote sans engagement</li>
			</ul>
		</div>

		<!-- Maquette de conversation -->
		<div class="phone-wrap" aria-label="Exemple de conversation avec Vendia sur WhatsApp" role="img">
			<div class="phone">
				<div class="notch"></div>
				<div class="chat-head">
					<span class="avatar">V</span>
					<div>
						<strong>Votre Assurance</strong>
						<small>en ligne · répond instantanément</small>
					</div>
				</div>
				<div class="chat">
					<p class="msg me" style="--d: 0.3s">Bonjour 👋</p>
					<p class="msg bot" style="--d: 1.1s">Bonjour ! Je suis l’assistant de Votre Assurance. Souhaitez-vous un devis auto, habitation ou vie ?</p>
					<p class="msg me" style="--d: 2.1s">Auto, pour ma Toyota</p>
					<p class="msg bot" style="--d: 3.1s">Votre devis : <b>120 200 FCFA / an</b>, tous risques. Je vous envoie le lien de paiement ?</p>
					<p class="msg pay" style="--d: 4.1s"><Smartphone class="w-4 h-4" /> Payer par Mobile Money · lien sécurisé</p>
					<p class="msg doc" style="--d: 5.1s"><FileText class="w-4 h-4" /> Contrat-auto.pdf <span>✓ Payé</span></p>
				</div>
			</div>
			<div class="float f1"><Clock class="w-4 h-4" /> Réponse en 2 s</div>
			<div class="float f2"><ShieldCheck class="w-4 h-4" /> Prix issus de vos barèmes</div>
		</div>
	</div>
</section>

<!-- ───────────── Chiffres clés ───────────── -->
<section class="strip">
	<div class="wrap strip-grid" use:reveal={{ stagger: 80 }}>
		<div data-reveal-item><strong>24h/24</strong><span>7 jours sur 7</span></div>
		<div data-reveal-item><strong>4 étapes</strong><span>du « bonjour » au contrat</span></div>
		<div data-reveal-item><strong>0 erreur</strong><span>de prix, barèmes officiels</span></div>
		<div data-reveal-item><strong>Quelques jours</strong><span>pour être en ligne</span></div>
	</div>
</section>

<!-- ───────────── Problème ───────────── -->
<section class="sec">
	<div class="wrap why" use:reveal>
		<div>
			<span class="kicker">Pourquoi WhatsApp</span>
			<h2 class="h2">Une partie de vos clients ne passera jamais au guichet</h2>
		</div>
		<div class="why-text">
			<p>Le travail de terrain reste indispensable, et Vendia ne le remplace pas. Mais certains clients préfèrent se servir à distance, à toute heure : un employé qui renouvelle son assurance après 20h, un parent qui inscrit son enfant un dimanche, un client installé dans une autre ville ou à l’étranger.</p>
			<p>Ces clients existent déjà sur votre marché. Votre réseau physique ne peut pas les atteindre, mais WhatsApp, oui. <strong>Ne pas y être, c’est laisser un concurrent leur répondre à votre place.</strong></p>
		</div>
	</div>
</section>

<!-- ───────────── Fonctionnement ───────────── -->
<section class="sec mist">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Comment ça marche</span>
			<h2 class="h2">Du « bonjour » au contrat signé, sans intervention humaine</h2>
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
		<p class="note"><Users class="w-4 h-4" /> Un conseiller peut reprendre la main à tout moment, pour une demande particulière ou un signalement.</p>
	</div>
</section>

<!-- ───────────── Bénéfices ───────────── -->
<section class="sec">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Ce que vous gagnez</span>
			<h2 class="h2">Plus de ventes, moins de tâches répétitives</h2>
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
			<span class="kicker light">Vous gardez le contrôle</span>
			<h2 class="h2 light">Toute l’activité en temps réel, dans un seul tableau de bord</h2>
			<p class="night-text">Nombre de devis, taux de conversion, montants encaissés, contrats actifs : vous suivez chaque échange et pouvez reprendre la main à tout instant, sans dépendre de l’assistant.</p>
			<ul class="night-list">
				<li><Check class="w-4 h-4" /> Historique complet de chaque conversation</li>
				<li><Check class="w-4 h-4" /> Identifiant unique pour reprendre un dossier</li>
				<li><Check class="w-4 h-4" /> Export des contrats et des encaissements</li>
			</ul>
		</div>
		<div class="dash" aria-label="Exemple de tableau de bord Vendia" role="img" use:reveal={{ delay: 120 }}>
			<div class="dash-top"><span></span><span></span><span></span><em>Tableau de bord · exemple</em></div>
			<div class="kpis">
				<div><small>Devis envoyés</small><strong>248</strong><i class="up">+18 %</i></div>
				<div><small>Taux de conversion</small><strong>34 %</strong><i class="up">+6 pts</i></div>
				<div><small>Encaissé ce mois</small><strong>3,6 M</strong><i>FCFA</i></div>
				<div><small>Contrats actifs</small><strong>412</strong><i class="up">+27</i></div>
			</div>
			<div class="bars" aria-hidden="true">
				{#each [38, 52, 44, 66, 58, 74, 69, 88, 80, 95, 86, 100] as h}<span style="height: {h}%"></span>{/each}
			</div>
			<div class="rows">
				<div><b>CTR-2026-A41K</b><span>Assurance auto</span><em>Payé</em></div>
				<div><b>CTR-2026-B07M</b><span>Habitation</span><em>Payé</em></div>
				<div><b>CTR-2026-C93P</b><span>Assurance vie</span><em class="wait">En attente</em></div>
			</div>
		</div>
	</div>
</section>

<!-- ───────────── Secteurs ───────────── -->
<section class="sec">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Tous les secteurs</span>
			<h2 class="h2">Un même moteur, habillé à votre image</h2>
			<p class="sub">Votre marque, vos couleurs, vos barèmes, votre catalogue et votre ton. Le parcours accueil, devis, paiement, document reste le même moteur fiable.</p>
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
			<span class="kicker">Paiements</span>
			<h2 class="h2">Tous les moyens de paiement, sans friction</h2>
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
		<p class="note"><Lock class="w-4 h-4" /> Lien de paiement sécurisé et à durée limitée. Aucune donnée bancaire n’est stockée par votre entreprise.</p>
	</div>
</section>

<!-- ───────────── Confiance ───────────── -->
<section class="sec">
	<div class="wrap">
		<header class="sec-head" use:reveal>
			<span class="kicker">Pourquoi nous faire confiance</span>
			<h2 class="h2">Une équipe proche de vous, pas une plateforme anonyme</h2>
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

<!-- ───────────── Démo ───────────── -->
<section id="demo" class="demo">
	<div class="wrap demo-grid">
		<div class="demo-copy" use:reveal>
			<span class="kicker light">Démonstration gratuite</span>
			<h2 class="h2 light">Prêt à transformer WhatsApp en votre meilleur commercial ?</h2>
			<p class="night-text">Recevez une démonstration personnalisée, adaptée à votre secteur. Voici comment on démarre :</p>
			<ol class="start">
				<li><span>1</span><div><b>Un échange de 15 minutes</b> pour comprendre votre activité, vos offres et vos barèmes.</div></li>
				<li><span>2</span><div><b>Une personnalisation à votre marque</b> : nom, couleurs, catalogue, ton, moyens de paiement.</div></li>
				<li><span>3</span><div><b>Un lancement accompagné</b>, avec suivi et ajustements les premières semaines.</div></li>
			</ol>
			<div class="direct">
				<a href={waDemo} target="_blank" rel="noopener"><MessageCircle class="w-4 h-4" /> WhatsApp France : +33 6 59 17 37 74</a>
				<a href={`https://wa.me/237659324756?text=${encodeURIComponent('Bonjour, je souhaite une démonstration de Vendia.')}`} target="_blank" rel="noopener"><MessageCircle class="w-4 h-4" /> WhatsApp Cameroun : +237 6 59 32 47 56</a>
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
				<form name="demo-vendia" method="POST" data-netlify="true" {...{ 'netlify-honeypot': 'bot-field' }} onsubmit={submitDemo}>
					<input type="hidden" name="form-name" value="demo-vendia" />
					<p hidden><label>Ne pas remplir <input name="bot-field" /></label></p>
					<h3 class="form-title">Demander ma démo</h3>
					<div class="row">
						<label>Nom et prénom<input name="nom" required autocomplete="name" placeholder="Jean Dupont" /></label>
						<label>Entreprise<input name="entreprise" required autocomplete="organization" placeholder="Votre entreprise" /></label>
					</div>
					<div class="row">
						<label>E-mail professionnel<input name="email" type="email" required autocomplete="email" placeholder="vous@entreprise.com" /></label>
						<label>Téléphone / WhatsApp<input name="telephone" type="tel" required autocomplete="tel" placeholder="+237 6 … ou +33 6 …" /></label>
					</div>
					<label>Secteur d’activité
						<select name="secteur" required>
							<option value="" disabled selected>Choisissez votre secteur</option>
							{#each sectorOptions as o}<option value={o}>{o}</option>{/each}
						</select>
					</label>
					<label><span>Votre besoin <span class="opt">(facultatif)</span></span><textarea name="message" rows="3" placeholder="Ex. : automatiser les devis et le renouvellement des contrats auto"></textarea></label>
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
