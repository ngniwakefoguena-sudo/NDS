// Le contenu est embarqué au moment du build (import.meta.glob) au lieu d'être lu
// avec `fs` au runtime : indispensable sur Vercel, où le dossier /content n'est
// pas forcément présent dans la fonction serverless.
const blogFiles = import.meta.glob<BlogPost>('/content/blog/*.json', { eager: true, import: 'default' });
const projectFiles = import.meta.glob<Project>('/content/projects/*.json', { eager: true, import: 'default' });
const aboutFile = import.meta.glob<Record<string, string>>('/content/about.json', { eager: true, import: 'default' });

const slugOf = (filePath: string) => filePath.split('/').pop()!.replace(/\.json$/, '');

export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	publish_date?: string;
	summary: string;
	cover: string;
	tags: string[];
	body: string;
}

export interface Project {
	slug: string;
	title: string;
	tagline_fr: string;
	tagline_en: string;
	description_fr: string;
	description_en: string;
	year: number;
	role_fr: string;
	role_en: string;
	category: string;
	tags: string[];
	stack: string[];
	cover: string;
	featured: boolean;
	available: boolean;
	show_arrow: boolean;
	url?: string;
	link_github?: string;
}

export function getBlogPosts(): BlogPost[] {
	const now = new Date();
	return Object.entries(blogFiles)
		.map(([file, post]) => ({ ...post, slug: slugOf(file) }))
		.filter((post: BlogPost) => {
			if (!post.publish_date) return true;
			return new Date(post.publish_date) <= now;
		})
		.sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
	const post = blogFiles[`/content/blog/${slug}.json`];
	return post ? { ...post, slug } : null;
}

export function getProjects(): Project[] {
	return Object.entries(projectFiles)
		.map(([file, p]) => ({ ...p, slug: slugOf(file), available: p.available ?? true, show_arrow: p.show_arrow ?? true }))
		.sort((a: Project, b: Project) => b.year - a.year);
}

export function getProject(slug: string): Project | null {
	const p = projectFiles[`/content/projects/${slug}.json`];
	return p ? { ...p, slug, available: p.available ?? true, show_arrow: p.show_arrow ?? true } : null;
}

export function getAbout() {
	return aboutFile['/content/about.json'] ?? null;
}
