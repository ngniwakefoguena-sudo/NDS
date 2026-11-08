<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/data/site';
</script>

<Seo
	title="Politique de confidentialité"
	description="Politique de confidentialité de Norbert Digital Service concernant l'utilisation de nos services et intégrations WhatsApp."
/>

<div class="relative min-h-screen pt-32 pb-24 overflow-hidden">
	<!-- Background accents -->
	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none" style="background: radial-gradient(ellipse, rgba(152,200,22,0.18) 0%, transparent 65%);"></div>
	<div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(rgba(152,200,22,0.07) 1px, transparent 1px); background-size: 36px 36px;"></div>

	<div class="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
		<div class="mb-12">
			<div class="badge-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit mb-6">
				<span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
				<span class="text-[11px] font-semibold text-accent tracking-widest uppercase">Légal</span>
			</div>
			<h1 class="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-5 leading-[1.08]">
				Politique de <span class="text-accent">Confidentialité</span>
			</h1>
			<p class="text-sm text-muted">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
		</div>

		<div class="content-card rounded-3xl p-8 md:p-10 text-ink/90 leading-relaxed space-y-8">
			
			<section>
				<h2 class="text-xl font-bold text-ink mb-4">1. Introduction</h2>
				<p>
					Bienvenue sur la politique de confidentialité de <strong>Norbert Digital Service</strong>. En tant qu'agence de développement (Web, Mobile, Intelligence Artificielle), la protection de vos données personnelles est au cœur de nos priorités. Cette politique explique comment nous traitons vos données lorsque vous visitez notre site web ou lorsque vous interagissez avec des applications tierces en cours de développement ou de test par nos soins.
				</p>
			</section>

			<section>
				<h2 class="text-xl font-bold text-ink mb-4">2. Données collectées sur notre site web</h2>
				<p>Lorsque vous utilisez notre site internet, notamment notre formulaire de contact, nous collectons :</p>
				<ul class="list-disc pl-5 mt-3 space-y-2 text-muted">
					<li><strong>Informations d'identification :</strong> Nom, nom de l'entreprise, adresse e-mail, numéro de téléphone.</li>
					<li><strong>Informations professionnelles :</strong> Détails de votre projet, budget estimé, services souhaités.</li>
				</ul>
				<p class="mt-3">Ces données sont utilisées uniquement pour répondre à vos demandes de devis, planifier des réunions et vous fournir nos services d'agence.</p>
			</section>

			<section>
				<h2 class="text-xl font-bold text-ink mb-4">3. Projets Clients et Applications Tierces (ex: Meta / WhatsApp)</h2>
				<p>
					Dans le cadre de notre activité, nous développons des applications personnalisées, des API et des assistants virtuels (chatbots) pour nos clients (ex: compagnies d'assurance, e-commerce). 
				</p>
				<ul class="list-disc pl-5 mt-3 space-y-2 text-muted">
					<li><strong>En production :</strong> Une fois le produit livré, notre client agit en tant que Responsable de Traitement. L'utilisation de vos données est alors soumise à la propre politique de confidentialité du client.</li>
					<li><strong>En phase de test et démonstration :</strong> Lorsque nous configurons des applications sur nos propres comptes développeurs (par exemple, des applications Meta/Facebook pour l'intégration de l'API WhatsApp Business), nous agissons en tant que prestataire technique. Durant ces phases, nous pouvons être amenés à traiter techniquement des numéros de téléphone et le contenu de messages de test.</li>
				</ul>
				<p class="mt-3"><strong>Finalité :</strong> Ces données de test sont traitées <u>exclusivement</u> dans le but de vérifier le bon fonctionnement technique, de calibrer l'Intelligence Artificielle et de valider l'application auprès des plateformes (ex: Meta App Review). <strong>Nous ne vendons, ne louons, ni n'exploitons jamais ces données à des fins commerciales.</strong></p>
			</section>

			<section>
				<h2 class="text-xl font-bold text-ink mb-4">4. Stockage, Sécurité et Conservation</h2>
				<p>
					Toutes les données sont stockées sur des serveurs sécurisés. Les données liées aux environnements de test et aux applications tierces en développement sont régulièrement purgées et ne sont conservées que le temps strictement nécessaire à la validation technique du projet.
				</p>
			</section>

			<section>
				<h2 class="text-xl font-bold text-ink mb-4">5. Vos droits (Accès, Rectification, Suppression)</h2>
				<p>
					Conformément au RGPD et aux réglementations applicables en matière de protection des données, vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos informations personnelles.
				</p>
				<p class="mt-2">
					Si vous avez interagi avec l'une de nos applications de test (ex: chatbot WhatsApp) et souhaitez que votre numéro de téléphone ou l'historique de vos messages soit immédiatement supprimé de nos serveurs de développement, veuillez nous contacter directement.
				</p>
			</section>

			<section>
				<h2 class="text-xl font-bold text-ink mb-4">6. Nous contacter</h2>
				<p>
					Pour toute question concernant cette politique ou pour exercer vos droits de suppression de données, vous pouvez contacter notre Délégué à la Protection des Données (DPO) à l'adresse suivante :<br>
					<a href="mailto:{site.email}" class="text-accent font-semibold hover:underline mt-2 inline-block">{site.email}</a>
				</p>
			</section>

		</div>
	</div>
</div>

<style>
	.badge-pill {
		background: var(--glass-bg);
		backdrop-filter: blur(12px);
		border: 1px solid var(--glass-border);
		box-shadow: 0 4px 14px rgba(80,110,20,0.09), inset 0 1px 0 rgba(255,255,255,1);
	}
	.content-card {
		background: var(--glass-bg-strong);
		backdrop-filter: blur(28px);
		-webkit-backdrop-filter: blur(28px);
		border: 1px solid var(--glass-border);
		box-shadow: var(--glass-shadow-card);
	}
	
	/* Style des liens et listes dans le texte */
	.content-card a {
		color: rgb(var(--accent));
		text-decoration: none;
	}
	.content-card a:hover {
		text-decoration: underline;
	}
	.content-card h2 {
		font-family: 'Space Grotesk', sans-serif;
	}
</style>
