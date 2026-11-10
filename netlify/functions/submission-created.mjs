/**
 * Netlify lance automatiquement cette fonction à chaque nouvelle demande reçue
 * par le formulaire « contact » (page Contact ou Chaya).
 *
 * Elle envoie une alerte WhatsApp à Norbert via CallMeBot si ces variables
 * d'environnement sont définies dans Netlify (Project configuration → Environment variables) :
 *   CALLMEBOT_PHONE   ex. +33659173774  (le numéro WhatsApp qui reçoit l'alerte)
 *   CALLMEBOT_APIKEY  la clé reçue de CallMeBot lors de l'activation
 * Sans ces variables, la fonction ne fait rien (les e-mails Netlify continuent de marcher).
 */
export const handler = async (event) => {
	const phone = process.env.CALLMEBOT_PHONE;
	const apikey = process.env.CALLMEBOT_APIKEY;
	if (!phone || !apikey) return { statusCode: 200, body: 'WhatsApp non configuré' };

	let payload = {};
	try {
		payload = JSON.parse(event.body || '{}').payload || {};
	} catch {
		return { statusCode: 200, body: 'Données illisibles' };
	}
	const d = payload.data || {};
	const line = (label, value) => (value && String(value).trim() ? `${label} : ${String(value).trim()}` : '');

	const text = [
		'Nouvelle demande sur norbertdigitalservice.fr',
		line('Entreprise / nom', d.entreprise),
		line('E-mail', d.email),
		line('Téléphone', d.telephone),
		line('Service', d.service),
		line('Budget', d.budget),
		line('Besoin', (d.besoin || '').slice(0, 600)),
		line('Réunion', [d.reunion_date, d.reunion_creneau].filter(Boolean).join(' '))
	]
		.filter(Boolean)
		.join('\n');

	try {
		const url =
			'https://api.callmebot.com/whatsapp.php?phone=' +
			encodeURIComponent(phone) +
			'&apikey=' +
			encodeURIComponent(apikey) +
			'&text=' +
			encodeURIComponent(text);
		const res = await fetch(url);
		if (!res.ok) console.error('CallMeBot', res.status, await res.text());
	} catch (e) {
		console.error('CallMeBot error', e?.message || e);
	}
	return { statusCode: 200, body: 'ok' };
};
