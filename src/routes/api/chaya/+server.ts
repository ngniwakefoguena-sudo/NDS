import { json } from '@sveltejs/kit';
import { askChaya, isConfigured, type ChatMessage } from '$lib/server/chaya';

/* Limite simple par adresse IP pour éviter les abus (par instance serveur) */
const hits = new Map<string, number[]>();
const LIMIT = 20; // messages
const WINDOW = 10 * 60 * 1000; // par 10 minutes

function tooMany(ip: string) {
	const now = Date.now();
	const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
	list.push(now);
	hits.set(ip, list);
	return list.length > LIMIT;
}

export async function POST({ request, getClientAddress }) {
	if (!isConfigured()) return json({ error: 'not_configured' }, { status: 503 });

	let ip = 'unknown';
	try { ip = getClientAddress(); } catch { /* adresse indisponible */ }
	if (tooMany(ip)) return json({ error: 'rate_limited' }, { status: 429 });

	let body: { messages?: ChatMessage[] };
	try {
		body = await request.json();
	} catch {
		return json({ error: 'bad_request' }, { status: 400 });
	}

	// On ne garde que les 12 derniers messages, textes raccourcis, rôles valides
	const messages = (body.messages ?? [])
		.filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
		.slice(-12)
		.map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

	// La conversation doit commencer par le visiteur
	while (messages.length && messages[0].role !== 'user') messages.shift();
	if (!messages.length || messages[messages.length - 1].role !== 'user') {
		return json({ error: 'bad_request' }, { status: 400 });
	}

	try {
		const reply = await askChaya(messages);
		return json({ reply: reply || "Je n'ai pas bien compris, pouvez-vous reformuler ?" });
	} catch (e) {
		console.error('Chaya error', e instanceof Error ? e.message : e);
		return json({ error: 'upstream' }, { status: 502 });
	}
}
