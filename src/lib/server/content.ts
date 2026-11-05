import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');

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

function readJson<T>(filePath: string): T {
	return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
}

export function getBlogPosts(): BlogPost[] {
	const dir = path.join(contentDir, 'blog');
	if (!fs.existsSync(dir)) return [];
	const now = new Date();
	return fs.readdirSync(dir)
		.filter((f: string) => f.endsWith('.json'))
		.map((file: string) => {
			const slug = file.replace('.json', '');
			const post = readJson<BlogPost>(path.join(dir, file));
			return { ...post, slug };
		})
		.filter((post: BlogPost) => {
			if (!post.publish_date) return true;
			return new Date(post.publish_date) <= now;
		})
		.sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
	const file = path.join(contentDir, 'blog', `${slug}.json`);
	if (!fs.existsSync(file)) return null;
	const post = readJson<BlogPost>(file);
	return { ...post, slug };
}

export function getProjects(): Project[] {
	const dir = path.join(contentDir, 'projects');
	if (!fs.existsSync(dir)) return [];
	return fs.readdirSync(dir)
		.filter((f: string) => f.endsWith('.json'))
		.map((file: string) => {
			const slug = file.replace('.json', '');
			const p = readJson<Project>(path.join(dir, file));
			return { ...p, slug, available: p.available ?? true, show_arrow: p.show_arrow ?? true };
		})
		.sort((a: Project, b: Project) => b.year - a.year);
}

export function getProject(slug: string): Project | null {
	const file = path.join(contentDir, 'projects', `${slug}.json`);
	if (!fs.existsSync(file)) return null;
	const p = readJson<Project>(file);
	return { ...p, slug, available: p.available ?? true, show_arrow: p.show_arrow ?? true };
}

export function getAbout() {
	const file = path.join(contentDir, 'about.json');
	if (!fs.existsSync(file)) return null;
	return readJson<Record<string, string>>(file);
}
