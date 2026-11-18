/**
 * Encart « demander un devis » placé automatiquement juste sous la 2ᵉ image de l'article
 * (la couverture compte comme 1ʳᵉ image, donc sous la 1ʳᵉ image du contenu).
 * Sans image dans le contenu : avant le 3ᵉ sous-titre, sinon en fin d'article.
 */
export function insertFormCta(html: string, lang: 'fr' | 'en', _title = ''): string {
	const t =
		lang === 'en'
			? { k: 'Free quote · reply within 24 h', h: 'Want this for your business?', p: 'Tell us about your project and get a free, detailed quote.', b: 'Request a quote', href: '/en/contact' }
			: { k: 'Devis gratuit · réponse sous 24 h', h: 'Un projet similaire ?', p: 'Décrivez votre besoin et recevez un devis détaillé et gratuit.', b: 'Faire une demande', href: '/contact' };
	const url = `${t.href}#formulaire`;
	const cta = `<aside class="not-prose blog-cta" style="margin:1.75rem 0;padding:1.25rem 1.4rem;border-radius:16px;border:1px solid rgb(var(--accent)/.35);background:rgb(var(--accent)/.08);display:flex;flex-wrap:wrap;align-items:center;gap:1rem;justify-content:space-between">
<div style="flex:1;min-width:220px"><div style="font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:rgb(var(--accent-2))">${t.k}</div><div style="font-weight:700;font-size:1.1rem;margin:.2rem 0">${t.h}</div><div style="font-size:.92rem;opacity:.8">${t.p}</div></div>
<a href="${url}" data-cta="blog-form" style="display:inline-block;padding:.75rem 1.25rem;border-radius:12px;background:rgb(var(--accent));color:#111;font-weight:700;text-decoration:none;white-space:nowrap">${t.b} →</a></aside>`;

	const img = html.search(/<img\b/i);
	if (img !== -1) {
		const end = html.indexOf('</p>', img);
		const at = end !== -1 ? end + 4 : html.indexOf('>', img) + 1;
		return html.slice(0, at) + cta + html.slice(at);
	}
	let count = 0;
	const h2 = html.replace(/<h2\b/gi, (m) => (++count === 3 ? cta + m : m));
	return count >= 3 ? h2 : html + cta;
}
