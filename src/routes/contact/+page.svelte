<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { Send, Mail, Clock, CircleCheck, Phone, CalendarDays } from 'lucide-svelte';
	import { site } from '$lib/data/site';

	const countryCodes = [
		// Europe francophone
		{ code: '+33',  flag: '🇫🇷', label: 'France' },
		{ code: '+32',  flag: '🇧🇪', label: 'Belgique' },
		{ code: '+41',  flag: '🇨🇭', label: 'Suisse' },
		{ code: '+352', flag: '🇱🇺', label: 'Luxembourg' },
		{ code: '+377', flag: '🇲🇨', label: 'Monaco' },
		// Europe
		{ code: '+44',  flag: '🇬🇧', label: 'Royaume-Uni' },
		{ code: '+49',  flag: '🇩🇪', label: 'Allemagne' },
		{ code: '+34',  flag: '🇪🇸', label: 'Espagne' },
		{ code: '+39',  flag: '🇮🇹', label: 'Italie' },
		{ code: '+351', flag: '🇵🇹', label: 'Portugal' },
		{ code: '+31',  flag: '🇳🇱', label: 'Pays-Bas' },
		{ code: '+48',  flag: '🇵🇱', label: 'Pologne' },
		{ code: '+46',  flag: '🇸🇪', label: 'Suède' },
		{ code: '+47',  flag: '🇳🇴', label: 'Norvège' },
		{ code: '+45',  flag: '🇩🇰', label: 'Danemark' },
		{ code: '+358', flag: '🇫🇮', label: 'Finlande' },
		{ code: '+43',  flag: '🇦🇹', label: 'Autriche' },
		{ code: '+30',  flag: '🇬🇷', label: 'Grèce' },
		{ code: '+7',   flag: '🇷🇺', label: 'Russie' },
		// Afrique francophone
		{ code: '+212', flag: '🇲🇦', label: 'Maroc' },
		{ code: '+213', flag: '🇩🇿', label: 'Algérie' },
		{ code: '+216', flag: '🇹🇳', label: 'Tunisie' },
		{ code: '+221', flag: '🇸🇳', label: 'Sénégal' },
		{ code: '+225', flag: '🇨🇮', label: "Côte d'Ivoire" },
		{ code: '+237', flag: '🇨🇲', label: 'Cameroun' },
		{ code: '+241', flag: '🇬🇦', label: 'Gabon' },
		{ code: '+242', flag: '🇨🇬', label: 'Congo' },
		{ code: '+243', flag: '🇨🇩', label: 'RD Congo' },
		{ code: '+261', flag: '🇲🇬', label: 'Madagascar' },
		{ code: '+222', flag: '🇲🇷', label: 'Mauritanie' },
		{ code: '+223', flag: '🇲🇱', label: 'Mali' },
		{ code: '+224', flag: '🇬🇳', label: 'Guinée' },
		{ code: '+226', flag: '🇧🇫', label: 'Burkina Faso' },
		{ code: '+227', flag: '🇳🇪', label: 'Niger' },
		{ code: '+228', flag: '🇹🇬', label: 'Togo' },
		{ code: '+229', flag: '🇧🇯', label: 'Bénin' },
		{ code: '+230', flag: '🇲🇺', label: 'Maurice' },
		{ code: '+235', flag: '🇹🇩', label: 'Tchad' },
		{ code: '+236', flag: '🇨🇫', label: 'Centrafrique' },
		{ code: '+250', flag: '🇷🇼', label: 'Rwanda' },
		{ code: '+253', flag: '🇩🇯', label: 'Djibouti' },
		{ code: '+257', flag: '🇧🇮', label: 'Burundi' },
		// Afrique anglophone / autres
		{ code: '+234', flag: '🇳🇬', label: 'Nigéria' },
		{ code: '+233', flag: '🇬🇭', label: 'Ghana' },
		{ code: '+27',  flag: '🇿🇦', label: 'Afrique du Sud' },
		{ code: '+254', flag: '🇰🇪', label: 'Kenya' },
		{ code: '+256', flag: '🇺🇬', label: 'Ouganda' },
		{ code: '+255', flag: '🇹🇿', label: 'Tanzanie' },
		{ code: '+251', flag: '🇪🇹', label: 'Éthiopie' },
		// Amériques
		{ code: '+1',   flag: '🇨🇦', label: 'Canada' },
		{ code: '+1',   flag: '🇺🇸', label: 'États-Unis' },
		{ code: '+55',  flag: '🇧🇷', label: 'Brésil' },
		{ code: '+52',  flag: '🇲🇽', label: 'Mexique' },
		{ code: '+54',  flag: '🇦🇷', label: 'Argentine' },
		{ code: '+57',  flag: '🇨🇴', label: 'Colombie' },
		{ code: '+58',  flag: '🇻🇪', label: 'Venezuela' },
		{ code: '+56',  flag: '🇨🇱', label: 'Chili' },
		// Moyen-Orient
		{ code: '+971', flag: '🇦🇪', label: 'Émirats arabes unis' },
		{ code: '+966', flag: '🇸🇦', label: 'Arabie Saoudite' },
		{ code: '+974', flag: '🇶🇦', label: 'Qatar' },
		{ code: '+965', flag: '🇰🇼', label: 'Koweït' },
		{ code: '+961', flag: '🇱🇧', label: 'Liban' },
		{ code: '+20',  flag: '🇪🇬', label: 'Égypte' },
		// Asie
		{ code: '+91',  flag: '🇮🇳', label: 'Inde' },
		{ code: '+86',  flag: '🇨🇳', label: 'Chine' },
		{ code: '+81',  flag: '🇯🇵', label: 'Japon' },
		{ code: '+82',  flag: '🇰🇷', label: 'Corée du Sud' },
		{ code: '+62',  flag: '🇮🇩', label: 'Indonésie' },
		{ code: '+60',  flag: '🇲🇾', label: 'Malaisie' },
		{ code: '+65',  flag: '🇸🇬', label: 'Singapour' },
	];

	const tomorrowStr = (() => {
		const d = new Date();
		d.setDate(d.getDate() + 1);
		return d.toISOString().split('T')[0];
	})();

	let sending = $state(false);
	let success = $state(false);
	/* Message WhatsApp pré-rempli avec la demande, proposé après l'envoi */
	let waText = $state('');
	const waLink = $derived(`https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(waText)}`);
	let hasError = $state(false);

	let indicatif = $state('+33');
	let telNumber = $state('');
	let wantsMeeting = $state(false);

	const telephoneComplet = $derived(
		telNumber.trim() ? `${indicatif} ${telNumber.trim()}` : ''
	);

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		sending = true;
		hasError = false;

		const form = e.target as HTMLFormElement;
		const data = new FormData(form);

		// Injecter le téléphone combiné
		if (telephoneComplet) {
			data.set('telephone', telephoneComplet);
		}
		// Supprimer les champs séparés
		data.delete('indicatif');
		data.delete('tel_numero');

		// Si pas de réunion, vider les champs réunion
		if (!wantsMeeting) {
			data.delete('reunion_date');
			data.delete('reunion_creneau');
		}

		const params = new URLSearchParams();
		for (const [key, value] of data.entries()) {
			params.append(key, value.toString());
		}

		try {
			const res = await fetch('/__forms.html', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: params.toString(),
			});
			if (res.ok) {
				const v = (k: string) => (data.get(k)?.toString() ?? '').trim();
				waText = [
					'Bonjour Norbert Digital Service, je viens de vous envoyer une demande depuis votre site :',
					v('entreprise') && `• Entreprise / nom : ${v('entreprise')}`,
					v('email') && `• E-mail : ${v('email')}`,
					v('telephone') && `• Téléphone : ${v('telephone')}`,
					v('service') && `• Service : ${v('service')}`,
					v('budget') && `• Budget : ${v('budget')}`,
					v('besoin') && `• Besoin : ${v('besoin')}`,
					v('reunion_date') && `• Réunion souhaitée : ${v('reunion_date')} ${v('reunion_creneau')}`
				].filter(Boolean).join('\n');
				success = true;
				form.reset();
				telNumber = '';
				wantsMeeting = false;
			} else {
				hasError = true;
			}
		} catch {
			hasError = true;
		} finally {
			sending = false;
		}
	}
</script>

<Seo
	title="Contact : parlons de votre projet"
	description="Contactez Norbert Digital Service pour votre projet de site web, d'application mobile ou d'IA. Réponse sous 24h, par formulaire, téléphone ou WhatsApp."
/>

<div class="relative min-h-screen pt-32 pb-24 overflow-hidden">
	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none" style="background: radial-gradient(ellipse, rgba(152,200,22,0.18) 0%, transparent 65%);"></div>
	<div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(rgba(152,200,22,0.07) 1px, transparent 1px); background-size: 36px 36px;"></div>

	<div class="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">

		<div class="text-center mb-14">
			<div class="badge-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit mb-6">
				<span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
				<span class="text-[11px] font-semibold text-accent tracking-widest uppercase">Contactez-nous</span>
			</div>
			<h1 class="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-5 leading-[1.08]">
				Prêt à lancer votre
				<span class="bg-clip-text text-transparent" style="background-image: linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)));">projet ?</span>
			</h1>
			<p class="text-base text-muted max-w-lg mx-auto leading-relaxed">
				Décrivez votre besoin, nous vous répondons sous 24h avec une proposition adaptée.
			</p>
		</div>

		<div class="grid lg:grid-cols-3 gap-8 items-start">

			<!-- Info -->
			<div class="flex flex-col gap-4">
				<div class="info-card rounded-2xl p-5 flex items-start gap-4">
					<div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style="background: rgba(152,200,22,0.12); border: 1px solid rgba(152,200,22,0.22);">
						<Mail class="w-4 h-4 text-accent" />
					</div>
					<div>
						<p class="text-xs font-semibold text-ink mb-0.5">Email direct</p>
						<a href="mailto:{site.email}" class="text-xs text-muted hover:text-accent transition-colors">{site.email}</a>
					</div>
				</div>

				<div class="info-card rounded-2xl p-5 flex items-start gap-4">
					<div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style="background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.22);">
						<Clock class="w-4 h-4 text-green-600" />
					</div>
					<div>
						<p class="text-xs font-semibold text-ink mb-0.5">Temps de réponse</p>
						<p class="text-xs text-muted">Sous 24h ouvrées</p>
					</div>
				</div>

				<div class="info-card rounded-2xl p-5 flex items-start gap-4">
					<div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style="background: rgba(112,160,8,0.12); border: 1px solid rgba(112,160,8,0.22);">
						<CircleCheck class="w-4 h-4 text-accent-2" />
					</div>
					<div>
						<p class="text-xs font-semibold text-ink mb-0.5">Première consultation</p>
						<p class="text-xs text-muted">Gratuite et sans engagement</p>
					</div>
				</div>
			</div>

			<!-- Formulaire -->
			<div class="lg:col-span-2 form-card rounded-3xl p-7 md:p-9 relative overflow-hidden">
				<div class="absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(152,200,22,0.10) 0%, transparent 70%);"></div>

				{#if success}
					<div class="relative z-10 flex flex-col items-center justify-center gap-4 py-12 text-center">
						<div class="w-14 h-14 rounded-full flex items-center justify-center" style="background: rgba(152,200,22,0.12); border: 1px solid rgba(152,200,22,0.30);">
							<CircleCheck class="w-7 h-7 text-accent" />
						</div>
						<h2 class="text-lg font-bold text-ink">Message envoyé !</h2>
						<p class="text-sm text-muted max-w-xs">Nous reviendrons vers vous sous 24h ouvrées avec une proposition adaptée à votre besoin.</p>
						<a
							href={waLink}
							target="_blank"
							rel="noopener"
							class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
							style="background:#25D366;"
						>
							<svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>
							Envoyer aussi ma demande sur WhatsApp
						</a>
						<p class="text-xs text-muted">Pour une réponse encore plus rapide.</p>
						<button
							onclick={() => (success = false)}
							class="mt-2 text-xs font-semibold text-accent underline underline-offset-2"
						>Envoyer un autre message</button>
					</div>
				{:else}
					<form
						name="contact"
						method="POST"
						data-netlify="true"
						{...{ 'netlify-honeypot': 'bot-field' }}
						onsubmit={handleSubmit}
						class="relative z-10 space-y-5"
					>
						<input type="hidden" name="form-name" value="contact" />
						<div class="hidden"><input name="bot-field" /></div>

						<!-- Ligne 1 : Entreprise + Email -->
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
							<div class="flex flex-col gap-1.5">
								<label for="entreprise" class="text-xs font-semibold text-ink">Entreprise / Nom</label>
								<input id="entreprise" name="entreprise" type="text" required placeholder="Acme Corp" class="field rounded-2xl px-4 py-3 text-sm w-full" />
							</div>
							<div class="flex flex-col gap-1.5">
								<label for="email" class="text-xs font-semibold text-ink">Email professionnel</label>
								<input id="email" name="email" type="email" required placeholder="vous@entreprise.com" class="field rounded-2xl px-4 py-3 text-sm w-full" />
							</div>
						</div>

						<!-- Téléphone avec indicatif -->
						<div class="flex flex-col gap-1.5">
							<label class="text-xs font-semibold text-ink flex items-center gap-1.5">
								<Phone class="w-3 h-3 text-muted" />
								Téléphone <span class="text-muted font-normal">(optionnel)</span>
							</label>
							<div class="flex gap-2">
								<select
									bind:value={indicatif}
									class="field rounded-2xl px-3 py-3 text-sm cursor-pointer shrink-0 indicatif-select"
								>
									{#each countryCodes as c}
										<option value={c.code}>{c.flag} {c.code} - {c.label}</option>
									{/each}
								</select>
								<input
									bind:value={telNumber}
									name="tel_numero"
									type="tel"
									placeholder="6 12 34 56 78"
									class="field rounded-2xl px-4 py-3 text-sm flex-1 min-w-0"
								/>
							</div>
							<input type="hidden" name="telephone" value={telephoneComplet} />
						</div>

						<!-- Ligne 3 : Service + Budget -->
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
							<div class="flex flex-col gap-1.5">
								<label for="service" class="text-xs font-semibold text-ink">Type de prestation</label>
								<select id="service" name="service" required class="field rounded-2xl px-4 py-3 text-sm w-full cursor-pointer">
									<option value="" disabled selected>Sélectionnez un service</option>
									<option value="Développement Web">Développement Web</option>
									<option value="Application Mobile">Application Mobile</option>
									<option value="Intelligence Artificielle">Intelligence Artificielle</option>
									<option value="Automatisation">Automatisation</option>
									<option value="Marketing Digital">Marketing Digital</option>
									<option value="Génération de Leads B2B/B2C">Génération de Leads B2B/B2C</option>
									<option value="Formation">Formation</option>
									<option value="Data Engineering">Data Engineering</option>
									<option value="Design UI/UX">Design UI/UX</option>
									<option value="Autre">Autre</option>
								</select>
							</div>
							<div class="flex flex-col gap-1.5">
								<label for="budget" class="text-xs font-semibold text-ink">Budget estimé</label>
								<input id="budget" name="budget" type="text" placeholder="ex : 5 000€ – 15 000€" class="field rounded-2xl px-4 py-3 text-sm w-full" />
							</div>
						</div>

						<!-- Besoin -->
						<div class="flex flex-col gap-1.5">
							<label for="besoin" class="text-xs font-semibold text-ink">Décrivez votre besoin</label>
							<textarea id="besoin" name="besoin" rows="4" required placeholder="Contexte, objectifs, contraintes techniques..." class="field rounded-2xl px-4 py-3 text-sm w-full resize-none"></textarea>
						</div>

						<!-- Toggle réunion -->
						<div class="reunion-block rounded-2xl overflow-hidden">
							<button
								type="button"
								onclick={() => (wantsMeeting = !wantsMeeting)}
								class="reunion-toggle w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-colors"
							>
								<span class="flex items-center gap-2">
									<CalendarDays class="w-4 h-4 text-accent" />
									Programmer une réunion <span class="text-muted font-normal text-xs">(optionnel)</span>
								</span>
								<span class="toggle-chevron text-muted transition-transform {wantsMeeting ? 'rotate-180' : ''}">
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
								</span>
							</button>

							{#if wantsMeeting}
								<div class="px-4 pb-4 pt-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div class="flex flex-col gap-1.5">
										<label for="reunion_date" class="text-xs font-semibold text-ink">Date souhaitée</label>
										<input
											id="reunion_date"
											name="reunion_date"
											type="date"
											min={tomorrowStr}
											class="field rounded-2xl px-4 py-3 text-sm w-full"
										/>
									</div>
									<div class="flex flex-col gap-1.5">
										<label for="reunion_creneau" class="text-xs font-semibold text-ink">Créneau préféré</label>
										<select id="reunion_creneau" name="reunion_creneau" class="field rounded-2xl px-4 py-3 text-sm w-full cursor-pointer">
											<option value="" disabled selected>Choisissez un créneau</option>
											<option value="Matin (9h – 12h)">Matin (9h – 12h)</option>
											<option value="Après-midi (14h – 18h)">Après-midi (14h – 18h)</option>
											<option value="Soir (18h – 20h)">Soir (18h – 20h)</option>
										</select>
									</div>
									<p class="sm:col-span-2 text-xs text-muted">
										Nous vous contacterons par email ou téléphone pour confirmer le créneau.
									</p>
								</div>
							{/if}
						</div>

						{#if hasError}
							<p class="text-xs text-red-500 text-center">Une erreur est survenue. Réessayez ou contactez-nous directement à <a href="mailto:{site.email}" class="underline">{site.email}</a>.</p>
						{/if}

						<button
							type="submit"
							disabled={sending}
							class="btn-pill w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-white text-sm disabled:opacity-60 disabled:cursor-not-allowed"
						>
							{#if sending}
								<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
								Envoi en cours…
							{:else}
								Envoyer la demande
								<Send class="w-4 h-4" />
							{/if}
						</button>
					</form>
				{/if}
			</div>
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
	.info-card {
		background: var(--glass-bg);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		border: 1px solid var(--glass-border);
		box-shadow: 0 6px 20px rgba(80,110,20,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
	}
	.form-card {
		background: var(--glass-bg-strong);
		backdrop-filter: blur(28px);
		-webkit-backdrop-filter: blur(28px);
		border: 1px solid var(--glass-border);
		box-shadow: var(--glass-shadow-card);
	}
	.field {
		background: var(--field-bg);
		border: 1px solid var(--field-border);
		color: rgb(var(--ink));
		outline: none;
		transition: border-color 0.18s, box-shadow 0.18s;
		appearance: none;
		backdrop-filter: blur(8px);
	}
	.field::placeholder { color: rgb(var(--muted)); }
	.field:focus {
		border-color: var(--field-border-focus);
		box-shadow: var(--field-shadow-focus);
	}
	select.field option {
		background: rgb(var(--surface));
		color: rgb(var(--ink));
	}
	.indicatif-select {
		width: 190px;
	}
	@media (max-width: 480px) {
		.indicatif-select { width: 140px; }
	}
	.reunion-block {
		background: var(--field-bg);
		border: 1px solid var(--field-border);
	}
	.reunion-toggle {
		color: rgb(var(--ink));
		background: transparent;
	}
	.reunion-toggle:hover {
		background: rgba(152,200,22,0.05);
	}
	.toggle-chevron {
		display: inline-flex;
		transition: transform 0.2s;
	}
	.toggle-chevron.rotate-180 {
		transform: rotate(180deg);
	}
	.btn-pill {
		background: linear-gradient(150deg, rgb(175,220,25), rgb(152,200,22), rgb(112,160,8));
		box-shadow: 0 8px 28px rgba(120,175,10,0.42), 0 2px 8px rgba(120,175,10,0.18);
		border-top: 1px solid rgba(255,255,255,0.25);
		transition: opacity 0.2s, transform 0.2s;
	}
	.btn-pill:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
</style>
