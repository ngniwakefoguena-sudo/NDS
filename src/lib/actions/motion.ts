/**
 * Petites animations réutilisables, sans dépendance.
 * Toutes respectent « réduire les animations » (prefers-reduced-motion) :
 * dans ce cas le contenu s'affiche directement, sans mouvement.
 */

const reduced = () =>
	typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fait apparaître l'élément quand il entre à l'écran.
 * Les enfants marqués `data-reveal-item` apparaissent l'un après l'autre.
 * Usage : <section use:reveal> ou <ul use:reveal={{ stagger: 80 }}>
 */
export function reveal(node: HTMLElement, opts: { stagger?: number; delay?: number } = {}) {
	const { stagger = 70, delay = 0 } = opts;
	const items = Array.from(node.querySelectorAll<HTMLElement>('[data-reveal-item]'));
	const targets = items.length ? items : [node];

	if (reduced()) return {};

	targets.forEach((el, i) => {
		el.classList.add('reveal-init');
		el.style.transitionDelay = `${delay + i * stagger}ms`;
	});

	const io = new IntersectionObserver(
		(entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				targets.forEach((el) => el.classList.add('reveal-in'));
				io.disconnect();
			}
		},
		{ rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
	);
	io.observe(node);

	return { destroy: () => io.disconnect() };
}

/**
 * Compte de 0 jusqu'à la valeur quand l'élément devient visible.
 * Le texte d'origine (ex. « 15+ », « 98% », « +40% ») est conservé :
 * seule la partie numérique est animée.
 */
export function countUp(node: HTMLElement, duration = 1400) {
	const original = node.textContent ?? '';
	const match = original.match(/(\d+)/);
	if (!match || reduced()) return {};

	const target = Number(match[1]);
	const render = (n: number) => (node.textContent = original.replace(match[1], String(n)));
	render(0);

	const io = new IntersectionObserver((entries) => {
		if (!entries[0].isIntersecting) return;
		io.disconnect();
		const start = performance.now();
		const tick = (now: number) => {
			const t = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - t, 3);
			render(Math.round(target * eased));
			if (t < 1) requestAnimationFrame(tick);
		};
		requestAnimationFrame(tick);
	});
	io.observe(node);

	return { destroy: () => { io.disconnect(); node.textContent = original; } };
}
