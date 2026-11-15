/**
 * Version anglaise du site (/en/…).
 * Table des pages traduites : sert aux liens hreflang (Seo.svelte), au sélecteur FR / EN
 * et au plan du site.
 */

/** Slug FR du service → slug EN. */
export const serviceSlugEn: Record<string, string> = {
	'creation-site-web': 'website-development',
	'application-mobile': 'mobile-app-development',
	'intelligence-artificielle': 'artificial-intelligence',
	'automatisation-n8n': 'business-automation',
	'marketing-digital-seo': 'digital-marketing-seo',
	'generation-de-leads': 'lead-generation',
	'data-engineering': 'data-engineering',
	formation: 'ai-training',
	'design-ui-ux': 'ui-ux-design',
	'backend-api': 'backend-api-development'
};

const pages: [string, string][] = [
	['/', '/en'],
	['/services', '/en/services'],
	['/vendia', '/en/vendia'],
	['/velume', '/en/velume'],
	['/about', '/en/about'],
	['/contact', '/en/contact'],
	['/blog', '/en/blog'],
	...Object.entries(serviceSlugEn).map(([fr, en]) => [`/services/${fr}`, `/en/services/${en}`] as [string, string])
];

const frToEn = new Map(pages);
const enToFr = new Map(pages.map(([fr, en]) => [en, fr]));

const clean = (p: string) => (p === '/' ? '/' : p.replace(/\/$/, ''));

export const isEn = (pathname: string) => pathname === '/en' || pathname.startsWith('/en/');

/** Équivalents FR / EN d'une page, ou null si la page n'existe que dans une langue. */
export function alternatesFor(pathname: string): { fr: string; en: string } | null {
	const p = clean(pathname);
	if (frToEn.has(p)) return { fr: p, en: frToEn.get(p)! };
	if (enToFr.has(p)) return { fr: enToFr.get(p)!, en: p };
	return null;
}

/** Toutes les paires FR / EN (plan du site). */
export const translatedPages = pages;
