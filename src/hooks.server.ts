import { redirects } from '$lib/data/redirects';

/**
 * Supprime automatiquement tous les accents d'une URL.
 * é→e, è→e, ê→e, ë→e, ô→o, ù→u, ç→c, etc.
 * Utilise la décomposition Unicode NFD : "é" → "e" + accent combinant, puis on retire les accents.
 */
function stripAccents(str: string): string {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export async function handle({ event, resolve }) {
	// Anciennes URLs renommées → redirection 301 vers la nouvelle adresse
	const moved = redirects[event.url.pathname.replace(/\/$/, '')];
	if (moved) {
		return Response.redirect(new URL(moved + event.url.search, event.url.origin), 301);
	}

	let decodedPath = event.url.pathname;
	try {
		decodedPath = decodeURI(event.url.pathname);
	} catch {
		// URL mal encodée : on la laisse passer telle quelle (404 propre plutôt qu'une erreur 500)
	}
	const cleanPath = stripAccents(decodedPath);

	// Si l'URL contient des accents → redirection 301 vers la version propre
	if (cleanPath !== decodedPath) {
		return Response.redirect(new URL(cleanPath + event.url.search, event.url.origin), 301);
	}

	const response = await resolve(event);

	// Seules les anciennes copies *.vercel.app reçoivent « noindex ».
	// Les adresses *.netlify.app sont déjà redirigées en 301 vers norbertdigitalservice.fr (netlify.toml) :
	// on ne les marque plus en « noindex », car derrière Netlify le nom d'hôte vu par le serveur peut être
	// l'adresse technique, ce qui faisait exclure de Google les pages du vrai domaine.
	const host = event.url.hostname;
	if (host.endsWith('.vercel.app')) {
		response.headers.set('X-Robots-Tag', 'noindex');
	}

	return response;
}
