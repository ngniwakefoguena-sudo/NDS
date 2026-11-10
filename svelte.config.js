import adapterNetlify from '@sveltejs/adapter-netlify';
import adapterVercel from '@sveltejs/adapter-vercel';

// Netlify définit NETLIFY=true pendant ses builds ; partout ailleurs (Vercel, local) on garde l'adaptateur Vercel.
const adapter = process.env.NETLIFY ? adapterNetlify : adapterVercel;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
	},
	kit: { 
		adapter: adapter(),
		prerender: {
			crawl: true,
			handleUnseenRoutes: 'ignore',
			handleHttpError: ({ path, referrer, message }) => {
				if (path.startsWith('/cv/') || path.startsWith('/images/')) return;
				throw new Error(message);
			},
			handleMissingId: 'warn'
		},
		alias: {
			$components: 'src/lib/components',
			$data: 'src/lib/data',
			$stores: 'src/lib/stores',
			$utils: 'src/lib/utils',
			$i18n: 'src/lib/i18n',
			$anim: 'src/lib/animations'
		}
	}
};

export default config;
