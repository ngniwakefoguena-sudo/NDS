import {
	Globe, Smartphone, BrainCircuit, Database, Layers, Server,
	Zap, Megaphone, Target, BookOpen
} from 'lucide-svelte';

export interface ServiceFaq {
	q: string;
	a: string;
}

/** Contenu d'une page service dédiée (/services/<slug>). */
export interface ServicePage {
	slug: string;
	metaTitle: string;
	metaDescription: string;
	h1: string;
	intro: string[];
	includes: { title: string; text: string }[];
	forWho: string[];
	faq: ServiceFaq[];
	/** Articles du blog liés à ce service (slugs). */
	articles: string[];
}

export interface Service {
	icon: typeof Globe;
	title: string;
	description: string;
	stack: string[];
	accent: boolean;
	iconBg: string;
	page?: ServicePage;
}

/** Étapes communes à tous les projets. */
export const process = [
	{ title: 'Échange et cadrage', text: 'Un premier appel pour comprendre votre activité, vos objectifs et vos contraintes. Vous recevez ensuite une proposition claire : périmètre, planning et budget.' },
	{ title: 'Conception', text: 'Maquettes, architecture ou scénario d’automatisation : on valide ensemble ce qui sera construit avant d’écrire la moindre ligne de code.' },
	{ title: 'Réalisation', text: 'Développement par étapes, avec des points réguliers et une version testable pour que vous puissiez réagir au fur et à mesure.' },
	{ title: 'Mise en ligne et suivi', text: 'Mise en production, formation à la prise en main et accompagnement après le lancement pour corriger, améliorer et faire évoluer.' },
];

export const services: Service[] = [
	{
		icon: Globe,
		title: 'Développement Web',
		description: 'Sites et applications web haute performance, optimisés pour le SEO, l\'accessibilité et la conversion.',
		stack: ['SvelteKit', 'Next.js', 'React', 'TailwindCSS'],
		accent: true,
		iconBg: 'linear-gradient(135deg, rgb(152,200,22), rgb(112,160,8))',
		page: {
			slug: 'creation-site-web',
			metaTitle: 'Création de site web professionnel à Paris',
			metaDescription: 'Création de sites vitrines, e-commerce et applications web sur mesure : rapides, bien référencés sur Google et pensés pour transformer vos visiteurs en clients.',
			h1: 'Création de site web professionnel',
			intro: [
				'Votre site est souvent le premier contact entre votre entreprise et un futur client. S’il est lent, difficile à lire sur mobile ou introuvable sur Google, ce client part chez un concurrent sans même vous avoir appelé.',
				'Norbert Digital Service conçoit des sites vitrines, des boutiques en ligne et des applications web sur mesure pour les PME, les indépendants et les startups. Chaque site est rapide, adapté au mobile, optimisé pour le référencement naturel et construit pour générer des demandes de contact.',
			],
			includes: [
				{ title: 'Site vitrine', text: 'Présentez votre activité, vos services et vos réalisations avec un site clair, moderne et facile à mettre à jour.' },
				{ title: 'Boutique en ligne', text: 'Shopify, WooCommerce ou e-commerce sur mesure : on choisit la solution adaptée à votre catalogue et à votre budget.' },
				{ title: 'Application web sur mesure', text: 'Espace client, outil métier, plateforme de réservation : des applications web construites autour de vos processus.' },
				{ title: 'Refonte de site', text: 'Modernisez votre site existant sans perdre votre référencement grâce à un plan de redirections et une migration maîtrisée.' },
				{ title: 'SEO technique inclus', text: 'Vitesse, balises, données structurées, sitemap : votre site part avec de bonnes bases pour être trouvé sur Google.' },
				{ title: 'Autonomie sur le contenu', text: 'Un espace d’administration simple pour modifier vos textes, vos images et publier des articles de blog vous-même.' },
			],
			forWho: ['PME et TPE qui veulent un site qui rapporte des clients', 'Indépendants et professions libérales', 'Startups qui lancent un produit', 'Commerces qui veulent vendre en ligne'],
			faq: [
				{ q: 'Combien coûte la création d’un site web ?', a: 'Le prix dépend du type de site (vitrine, e-commerce, application), du nombre de pages et des fonctionnalités. Après un premier échange, vous recevez un devis détaillé et sans surprise. Notre article sur le prix d’un site vitrine en 2026 vous donne des ordres de grandeur.' },
				{ q: 'Combien de temps faut-il pour créer un site ?', a: 'Un site vitrine prend généralement quelques semaines, une boutique en ligne ou une application sur mesure davantage. Le planning est fixé ensemble dès le cadrage.' },
				{ q: 'Mon site sera-t-il bien référencé sur Google ?', a: 'Oui, les bases du SEO technique sont intégrées dès la conception : vitesse de chargement, structure des pages, balises et données structurées. Nous pouvons aussi vous accompagner sur le contenu et le référencement local.' },
				{ q: 'Pourrai-je modifier mon site moi-même ?', a: 'Oui. Vous disposez d’un espace d’administration pour mettre à jour vos textes, vos images et publier des articles, sans connaissances techniques.' },
			],
			articles: [
				'combien-coute-un-site-vitrine-professionnel-en-2026-les-vrais-prix-et-ce-quils-incluent',
				'pourquoi-votre-site-web-vous-fait-perdre-des-clients-en-2026-et-comment-y-remedier',
				'refonte-de-site-web-comment-refaire-son-site-sans-perdre-son-referencement-google',
				'shopify-woocommerce-ou-e-commerce-sur-mesure-quelle-solution-choisir-pour-votre-boutique-en-ligne',
			],
		},
	},
	{
		icon: Smartphone,
		title: 'Application Mobile',
		description: 'Applications iOS et Android cross-platform, performantes et natives, de la maquette au déploiement.',
		stack: ['React Native', 'Flutter', 'Expo', 'TypeScript'],
		accent: false,
		iconBg: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
		page: {
			slug: 'application-mobile',
			metaTitle: 'Développement d’application mobile iOS et Android',
			metaDescription: 'Développement d’applications mobiles iOS et Android avec Flutter et React Native : de la maquette à la publication sur l’App Store et Google Play.',
			h1: 'Développement d’application mobile iOS et Android',
			intro: [
				'Une application mobile permet de rester dans la poche de vos clients : réservation, commande, fidélité, suivi de service ou outil interne pour vos équipes.',
				'Nous développons des applications iOS et Android à partir d’un seul code avec Flutter ou React Native. Résultat : une application fluide sur les deux plateformes, un budget maîtrisé et des mises à jour plus simples.',
			],
			includes: [
				{ title: 'Conception UX/UI', text: 'Parcours utilisateur et maquettes interactives validés avec vous avant le développement.' },
				{ title: 'iOS et Android en un seul projet', text: 'Un code commun avec Flutter ou React Native pour réduire les coûts et les délais.' },
				{ title: 'MVP pour startups', text: 'Une première version centrée sur l’essentiel pour tester votre idée rapidement auprès de vrais utilisateurs.' },
				{ title: 'Back-office et API', text: 'Le serveur, la base de données et l’interface d’administration qui font tourner votre application.' },
				{ title: 'Publication sur les stores', text: 'Préparation et publication sur l’App Store et Google Play, fiches incluses.' },
				{ title: 'Maintenance et évolutions', text: 'Mises à jour des systèmes, corrections et nouvelles fonctionnalités après le lancement.' },
			],
			forWho: ['Startups qui lancent un produit mobile', 'Commerces et réseaux qui veulent fidéliser', 'Entreprises qui équipent leurs équipes terrain', 'Porteurs de projet qui veulent un MVP'],
			faq: [
				{ q: 'Faut-il une application mobile ou un site web ?', a: 'Tout dépend de l’usage : notifications, utilisation hors ligne, fréquence d’utilisation. Une PWA (site web installable) suffit parfois. On vous aide à choisir le bon format dès le premier échange.' },
				{ q: 'Combien coûte une application mobile ?', a: 'Le budget dépend du nombre d’écrans, des fonctionnalités et du back-office nécessaire. Un MVP permet de démarrer avec un budget réduit. Vous recevez un devis détaillé après le cadrage.' },
				{ q: 'Pourquoi Flutter ou React Native ?', a: 'Ces technologies permettent de produire une application iOS et Android à partir d’un seul code, avec des performances proches du natif, ce qui réduit les coûts de développement et de maintenance.' },
			],
			articles: [
				'combien-coute-vraiment-une-application-mobile-en-2026-le-vrai-prix-selon-votre-besoin',
				'application-mobile-ou-site-web-responsive-pwa-comment-choisir-le-bon-format-pour-votre-projet',
				'comment-rediger-un-cahier-des-charges-pour-votre-site-web-ou-application-modele-et-checklist',
			],
		},
	},
	{
		icon: BrainCircuit,
		title: 'Intelligence Artificielle',
		description: 'Intégration de modèles IA dans vos produits : chatbots métier, RAG, analyse de données, recommandation.',
		stack: ['Python', 'LangChain', 'Gemini', 'FastAPI'],
		accent: false,
		iconBg: 'linear-gradient(135deg, #a855f7, #ec4899)',
		page: {
			slug: 'intelligence-artificielle',
			metaTitle: 'Intégration de l’intelligence artificielle pour PME',
			metaDescription: 'Chatbots métier, assistants RAG connectés à vos documents, agents IA : intégrez l’intelligence artificielle dans votre entreprise de façon concrète et sécurisée.',
			h1: 'Intelligence artificielle pour les entreprises',
			intro: [
				'L’intelligence artificielle n’est plus réservée aux grands groupes. Une PME peut aujourd’hui répondre plus vite à ses clients, retrouver une information dans ses documents en quelques secondes ou automatiser l’analyse de ses données.',
				'Nous intégrons l’IA là où elle apporte un gain mesurable : chatbots qui connaissent votre métier, assistants connectés à vos documents internes, agents qui exécutent des tâches et outils d’analyse. Chaque projet part d’un cas d’usage concret, pas d’une mode.',
			],
			includes: [
				{ title: 'Chatbot métier', text: 'Un assistant sur votre site ou sur WhatsApp qui répond à vos clients à partir de vos propres informations.' },
				{ title: 'RAG sur vos documents', text: 'Interrogez vos procédures, contrats ou fiches produits en langage naturel, avec des réponses sourcées.' },
				{ title: 'Agents IA', text: 'Des assistants capables d’enchaîner des actions : qualifier une demande, remplir un CRM, préparer un document.' },
				{ title: 'Analyse et classement', text: 'Tri automatique des e-mails, extraction d’informations dans des documents, synthèse de données.' },
				{ title: 'Intégration à vos outils', text: 'Connexion de l’IA à votre CRM, votre site, vos bases de données et vos outils existants via API.' },
				{ title: 'Données maîtrisées', text: 'Choix des modèles et de l’hébergement selon vos exigences de confidentialité et de conformité RGPD.' },
			],
			forWho: ['PME qui reçoivent beaucoup de demandes clients', 'Équipes qui perdent du temps à chercher l’information', 'Entreprises avec beaucoup de documents', 'Startups qui intègrent l’IA à leur produit'],
			faq: [
				{ q: 'Par où commencer avec l’IA dans une PME ?', a: 'On commence par identifier une tâche répétitive ou une question fréquente qui coûte du temps. Un premier projet ciblé permet de mesurer le gain avant d’aller plus loin.' },
				{ q: 'Qu’est-ce que le RAG ?', a: 'Le RAG (génération augmentée par la recherche) permet à une IA de répondre à partir de vos propres documents plutôt que de ses seules connaissances générales. Les réponses sont plus fiables et peuvent citer leurs sources.' },
				{ q: 'Mes données sont-elles en sécurité ?', a: 'Le choix du modèle et de l’hébergement se fait selon vos contraintes. Les données sensibles peuvent rester sur des services hébergés en Europe ou être exclues du traitement.' },
			],
			articles: [
				'rag-chatbots-metier-et-agents-ia-le-guide-complet-pour-integrer-lintelligence-artificielle-en-entreprise-en-2026',
				'intelligence-artificielle-pour-les-pme-ce-qui-est-possible-en-2026',
				'chatbot-whatsapp-business-pour-pme-automatiser-le-service-client-sans-perdre-le-contact-humain',
			],
		},
	},
	{
		icon: Zap,
		title: 'Automatisation',
		description: 'Automatisez les tâches répétitives qui coûtent du temps : traitements de documents, workflows, synchronisation CRM/ERP, génération de rapports et emails automatiques.',
		stack: ['Python', 'n8n', 'Zapier', 'Make', 'API REST'],
		accent: false,
		iconBg: 'linear-gradient(135deg, #f59e0b, #ef4444)',
		page: {
			slug: 'automatisation-n8n',
			metaTitle: 'Automatisation n8n pour PME : gagnez des heures chaque semaine',
			metaDescription: 'Automatisation de vos tâches répétitives avec n8n, Make et Python : relances, facturation, CRM, e-mails et rapports. Gagnez du temps chaque semaine.',
			h1: 'Automatisation des processus avec n8n',
			intro: [
				'Relancer un prospect, copier une commande dans un tableur, envoyer une facture, mettre à jour le CRM : ces petites tâches prennent des heures chaque semaine et sont une source d’erreurs.',
				'Nous automatisons ces tâches avec n8n, Make ou Python, en connectant les outils que vous utilisez déjà. Vos logiciels communiquent entre eux, les tâches s’exécutent seules et vos équipes se concentrent sur ce qui a de la valeur.',
			],
			includes: [
				{ title: 'Audit des tâches répétitives', text: 'On repère avec vous les tâches qui coûtent le plus de temps et celles qui rapporteront le plus une fois automatisées.' },
				{ title: 'Workflows n8n', text: 'Des scénarios d’automatisation robustes, documentés et hébergés selon vos besoins.' },
				{ title: 'Facturation et relances', text: 'Création des factures, envoi automatique et relance des impayés sans intervention manuelle.' },
				{ title: 'CRM et prospection', text: 'Les nouveaux contacts arrivent dans votre CRM, sont qualifiés et reçoivent le bon message au bon moment.' },
				{ title: 'Documents et rapports', text: 'Extraction de données dans des documents, génération de rapports et tableaux de bord automatiques.' },
				{ title: 'Automatisation avec IA', text: 'Tri des e-mails, réponses suggérées, résumés : l’IA intégrée à vos workflows quand elle est utile.' },
			],
			forWho: ['Dirigeants de PME qui manquent de temps', 'Équipes commerciales et administratives', 'E-commerçants', 'Entreprises qui utilisent plusieurs logiciels qui ne se parlent pas'],
			faq: [
				{ q: 'Qu’est-ce que n8n ?', a: 'n8n est un outil d’automatisation qui connecte vos logiciels entre eux (CRM, e-mail, agenda, facturation, tableurs) pour faire circuler l’information automatiquement. Il peut être hébergé chez vous, ce qui limite les coûts et garde vos données sous contrôle.' },
				{ q: 'n8n, Make ou Zapier : que choisir ?', a: 'Zapier est simple mais devient vite coûteux, Make est très visuel, n8n est le plus flexible et peut être auto-hébergé. Nous recommandons l’outil adapté à votre volume et à votre budget.' },
				{ q: 'Combien de temps peut-on gagner ?', a: 'Cela dépend de vos processus. L’audit de départ chiffre le temps passé sur chaque tâche pour estimer le gain avant de lancer le projet.' },
			],
			articles: [
				'automatisation-n8n-2026-comment-les-pme-francaises-gagnent-15h-par-semaine',
				'automatisation-ia-pour-pme-comment-gagner-dix-heures-par-semaine-avec-n8n-et-lia',
				'automatiser-la-facturation-et-les-relances-clients-avec-n8n-le-guide-pratique-pour-les-pme',
			],
		},
	},
	{
		icon: Megaphone,
		title: 'Marketing Digital',
		description: 'Stratégie de contenu, SEO technique, campagnes publicitaires et présence réseaux sociaux pour accroître votre visibilité et convertir vos visiteurs.',
		stack: ['SEO', 'Google Ads', 'Meta Ads', 'Analytics'],
		accent: false,
		iconBg: 'linear-gradient(135deg, #3b82f6, #6366f1)',
		page: {
			slug: 'marketing-digital-seo',
			metaTitle: 'Marketing digital et référencement SEO',
			metaDescription: 'Référencement naturel, SEO local, Google Ads, Meta Ads et réseaux sociaux : une stratégie de marketing digital pour être visible et attirer des clients.',
			h1: 'Marketing digital et référencement SEO',
			intro: [
				'Un bon site ne suffit pas : il faut que vos clients le trouvent. Le marketing digital rassemble tout ce qui vous rend visible au bon moment, sur Google, sur les réseaux sociaux et désormais dans les assistants IA comme ChatGPT.',
				'Nous construisons une stratégie adaptée à votre budget : référencement naturel et local, contenus de blog, campagnes Google Ads et Meta Ads, suivi des résultats. L’objectif est simple : plus de demandes de contact qualifiées.',
			],
			includes: [
				{ title: 'Référencement naturel (SEO)', text: 'Audit, optimisation technique, mots-clés et contenus pour remonter durablement dans Google.' },
				{ title: 'SEO local', text: 'Fiche Google Business, avis clients et pages locales pour être trouvé par les clients près de chez vous.' },
				{ title: 'GEO', text: 'Optimiser votre présence pour apparaître dans les réponses de ChatGPT, Gemini et des moteurs IA.' },
				{ title: 'Publicité en ligne', text: 'Campagnes Google Ads et Meta Ads ciblées, testées et pilotées selon votre coût par client.' },
				{ title: 'Contenu et réseaux sociaux', text: 'Articles de blog, calendrier éditorial et publications pour nourrir votre visibilité.' },
				{ title: 'Mesure des résultats', text: 'Suivi Analytics et Search Console pour savoir ce qui rapporte vraiment des clients.' },
			],
			forWho: ['Entreprises peu visibles sur Google', 'Commerces et services locaux', 'PME qui veulent plus de demandes de devis', 'Marques qui lancent une offre'],
			faq: [
				{ q: 'Combien de temps pour voir les résultats du SEO ?', a: 'Les premiers effets du référencement naturel apparaissent généralement après quelques semaines à quelques mois, selon la concurrence. La publicité en ligne peut apporter des contacts dès son lancement en parallèle.' },
				{ q: 'Qu’est-ce que le SEO local ?', a: 'C’est l’ensemble des actions qui vous font apparaître quand un client cherche un service près de chez lui : fiche Google Business, avis, pages dédiées à votre zone et cohérence de vos informations en ligne.' },
				{ q: 'Qu’est-ce que le GEO ?', a: 'Le GEO (Generative Engine Optimization) consiste à rendre votre entreprise compréhensible et citée par les assistants IA comme ChatGPT ou Gemini, en complément du référencement Google classique.' },
			],
			articles: [
				'seo-local-2026-la-strategie-complete-pour-dominer-google',
				'le-geo-le-nouveau-referencement-pour-apparaitre-dans-chatgpt-et-gemini',
				'vitesse-de-site-web-et-core-web-vitals-comment-gagner-des-positions-et-des-clients-en-2026',
			],
		},
	},
	{
		icon: Target,
		title: 'Génération de Leads B2B & B2C',
		description: 'Systèmes d\'acquisition de prospects qualifiés : landing pages optimisées, scraping éthique, campagnes email, tunnels de conversion et CRM automatisé.',
		stack: ['HubSpot', 'Lemlist', 'LinkedIn', 'Email automation'],
		accent: false,
		iconBg: 'linear-gradient(135deg, #ec4899, #f97316)',
		page: {
			slug: 'generation-de-leads',
			metaTitle: 'Génération de leads B2B et B2C',
			metaDescription: 'Landing pages, campagnes e-mail et LinkedIn, tunnels de conversion et CRM automatisé : un système d’acquisition qui vous apporte des prospects qualifiés.',
			h1: 'Génération de leads B2B et B2C',
			intro: [
				'Trouver de nouveaux clients ne devrait pas dépendre uniquement du bouche-à-oreille. Un système d’acquisition bien construit vous apporte des prospects qualifiés de façon régulière et prévisible.',
				'Nous mettons en place l’ensemble de la chaîne : pages d’atterrissage qui convertissent, campagnes e-mail et LinkedIn, tunnels de conversion et CRM automatisé pour suivre et relancer chaque prospect au bon moment.',
			],
			includes: [
				{ title: 'Landing pages', text: 'Des pages dédiées à une offre, conçues et testées pour transformer les visiteurs en contacts.' },
				{ title: 'Prospection e-mail et LinkedIn', text: 'Ciblage, séquences de messages personnalisés et suivi des réponses, dans le respect du RGPD.' },
				{ title: 'Tunnels de conversion', text: 'Le parcours complet du premier contact jusqu’au rendez-vous ou à l’achat.' },
				{ title: 'CRM automatisé', text: 'Chaque prospect est enregistré, qualifié et relancé automatiquement dans HubSpot ou votre CRM.' },
				{ title: 'WhatsApp Business', text: 'Réponses rapides et relances automatisées sur le canal préféré de vos clients.' },
				{ title: 'Suivi et optimisation', text: 'Mesure du coût par prospect et amélioration continue des campagnes.' },
			],
			forWho: ['Entreprises B2B qui veulent plus de rendez-vous', 'Startups en phase d’acquisition', 'Prestataires de services', 'Équipes commerciales qui veulent gagner du temps'],
			faq: [
				{ q: 'Qu’est-ce qu’un lead qualifié ?', a: 'C’est un contact qui correspond à votre client idéal et qui a montré un intérêt réel pour votre offre. Le système de génération de leads vise ces contacts plutôt que le volume.' },
				{ q: 'La prospection par e-mail est-elle légale ?', a: 'En B2B, la prospection par e-mail est encadrée par le RGPD : le message doit concerner l’activité du destinataire et permettre de se désinscrire facilement. Nos campagnes respectent ces règles.' },
				{ q: 'Faut-il déjà avoir un CRM ?', a: 'Non. Nous pouvons mettre en place un CRM adapté à votre taille ou connecter celui que vous utilisez déjà.' },
			],
			articles: [
				'agence-growth-hacking-paris-accelerez-votre-croissance-en-2026',
				'chatbot-whatsapp-business-pour-pme-automatiser-le-service-client-sans-perdre-le-contact-humain',
				'pourquoi-un-logiciel-comme-vendia-est-devenu-indispensable-pour-votre-entreprise',
			],
		},
	},
	{
		icon: Database,
		title: 'Data Engineering',
		description: 'Pipelines de données robustes, entrepôts analytiques et dashboards pour piloter vos décisions avec des données fiables.',
		stack: ['PostgreSQL', 'BigQuery', 'dbt', 'Airflow'],
		accent: false,
		iconBg: 'linear-gradient(135deg, #10b981, #06b6d4)',
	},
	{
		icon: BookOpen,
		title: 'Formation',
		description: 'Formations sur mesure pour vos équipes : développement web et mobile, IA, automatisation, data. Formats présentiel, distanciel ou e-learning.',
		stack: ['Python', 'SvelteKit', 'Flutter', 'FastAPI', 'IA / ML'],
		accent: false,
		iconBg: 'linear-gradient(135deg, #059669, #065f46)',
	},
	{
		icon: Layers,
		title: 'Design UI/UX',
		description: 'Interfaces élégantes, design systems cohérents et expériences utilisateur centrées sur la conversion.',
		stack: ['Figma', 'Framer', 'Storybook', 'Prototypage'],
		accent: false,
		iconBg: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
	},
	{
		icon: Server,
		title: 'Backend & API',
		description: 'APIs RESTful et GraphQL scalables, sécurisées, documentées et prêtes pour la production.',
		stack: ['Node.js', 'Django', 'PostgreSQL', 'Docker'],
		accent: false,
		iconBg: 'linear-gradient(135deg, #6366f1, #06b6d4)',
	},
];

export const servicePages = services.filter((s): s is Service & { page: ServicePage } => !!s.page);

export function getService(slug: string) {
	return servicePages.find((s) => s.page.slug === slug) ?? null;
}
