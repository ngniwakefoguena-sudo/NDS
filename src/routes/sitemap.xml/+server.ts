import { getBlogPosts, getProjects } from '$lib/server/content';
import { site } from '$lib/data/site';
import { servicePages } from '$lib/data/services';

const staticPages = [
	{ path: '/',         priority: '1.0', changefreq: 'weekly' },
	{ path: '/services', priority: '0.9', changefreq: 'monthly' },
	{ path: '/projects', priority: '0.9', changefreq: 'weekly' },
	{ path: '/blog',     priority: '0.8', changefreq: 'weekly' },
	{ path: '/about',    priority: '0.7', changefreq: 'monthly' },
	{ path: '/contact',  priority: '0.7', changefreq: 'yearly' },
];

export async function GET() {
	const today = new Date().toISOString().split('T')[0];

	const posts = getBlogPosts();
	const projects = getProjects();

	const urls = [
		...staticPages.map(p => `
  <url>
    <loc>${site.url}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority}</priority>
    <changefreq>${p.changefreq}</changefreq>
  </url>`),
		...servicePages.map(s => `
  <url>
    <loc>${site.url}/services/${s.page.slug}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>`),
		...projects.map(p => `
  <url>
    <loc>${site.url}/projects/${p.slug}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>`),
		...posts.map(p => `
  <url>
    <loc>${site.url}/blog/${p.slug}</loc>
    <lastmod>${p.date}</lastmod>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>`),
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600',
		},
	});
}
