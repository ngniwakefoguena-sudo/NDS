/**
 * Envoie un événement de conversion à Google Tag Manager (puis Google Analytics 4).
 * Les événements sont mis en file dans window.dataLayer : ils sont pris en compte
 * même si GTM se charge quelques secondes après (chargement différé pour la vitesse).
 *
 * Événements utilisés sur le site :
 *  - generate_lead  { lead_source: 'formulaire_contact' | 'chaya' }
 *  - contact_click  { contact_method: 'whatsapp' | 'telephone' | 'email', link_location: chemin de la page }
 *  - chaya_open     {}
 */
export function track(event: string, params: Record<string, unknown> = {}) {
	if (typeof window === 'undefined') return;
	const w = window as unknown as { dataLayer?: unknown[] };
	w.dataLayer = w.dataLayer || [];
	w.dataLayer.push({ event, ...params });
}

/** Suit automatiquement les clics sur les liens WhatsApp, téléphone et e-mail de tout le site. */
export function trackContactClicks() {
	const handler = (e: MouseEvent) => {
		const a = (e.target as HTMLElement | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
		if (!a) return;
		const href = a.getAttribute('href') || '';
		const method = /wa\.me|whatsapp/i.test(href) ? 'whatsapp' : href.startsWith('tel:') ? 'telephone' : href.startsWith('mailto:') ? 'email' : null;
		if (method) track('contact_click', { contact_method: method, link_location: location.pathname });
	};
	document.addEventListener('click', handler, { capture: true });
	return () => document.removeEventListener('click', handler, { capture: true });
}
