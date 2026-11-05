/**
 * Supprime automatiquement tous les accents d'une URL.
 * é→e, è→e, ê→e, ë→e, ô→o, ù→u, ç→c, etc.
 * Utilise la décomposition Unicode NFD : "é" → "e" + accent combinant, puis on retire les accents.
 */
function stripAccents(str: string): string {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export async function handle({ event, resolve }) {
	const decodedPath = decodeURI(event.url.pathname);
	const cleanPath = stripAccents(decodedPath);

	// Si l'URL contient des accents → redirection 301 vers la version propre
	if (cleanPath !== decodedPath) {
		return Response.redirect(new URL(cleanPath + event.url.search, event.url.origin), 301);
	}

	return resolve(event);
}
