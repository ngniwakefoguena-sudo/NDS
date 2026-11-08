import { json } from '@sveltejs/kit';
import { streamChaya, isConfigured, type ChatMessage } from '$lib/server/chaya';

/* Limite simple par adresse IP pour éviter les abus (par instance serveur) */
const hits = new Map<string, number[]>();
const LIMIT = 30; // messages
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

	// On garde les 16 derniers messages, textes raccourcis, rôles valides
	const messages = (body.messages ?? [])
		.filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
		.slice(-16)
		.map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));
	while (messages.length && messages[0].role !== 'user') messages.shift();
	if (!messages.length || messages[messages.length - 1].role !== 'user') {
		return json({ error: 'bad_request' }, { status: 400 });
	}

	// On lance la génération ; si le fournisseur refuse d'emblée, on renvoie une erreur propre
	const gen = streamChaya(messages);
	let first: IteratorResult<string>;
	try {
		first = await gen.next();
	} catch (e) {
		console.error('Chaya error', e instanceof Error ? e.message : e);
		return json({ error: 'upstream' }, { status: 502 });
	}

	const encoder = new TextEncoder();
	const stream = new ReadableStream<Uint8Array>({
		async start(controller) {
			try {
				if (!first.done && first.value) controller.enqueue(encoder.encode(first.value));
				if (!first.done) {
					for await (const chunk of gen) controller.enqueue(encoder.encode(chunk));
				}
			} catch (e) {
				console.error('Chaya stream error', e instanceof Error ? e.message : e);
			} finally {
				controller.close();
			}
		}
	});

	return new Response(stream, {
		headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store', 'x-accel-buffering': 'no' }
	});
}
