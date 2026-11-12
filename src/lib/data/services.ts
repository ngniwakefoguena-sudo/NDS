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
			metaTitle: 'Création de site internet à Paris, Essonne et Yvelines',
			metaDescription: 'Création de site internet à Paris, Palaiseau, Essonne et Yvelines : sites vitrines et e-commerce rapides, bien référencés sur Google et pensés pour vous apporter des clients. Devis gratuit.',
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
				{ q: 'Comment créer un site internet pour mon entreprise ?', a: 'Le plus simple est de confier le projet à une agence web : nous définissons ensemble vos objectifs, rédigeons ou optimisons les textes, concevons le design puis développons le site. Vous recevez un site vitrine ou e-commerce prêt à attirer des clients, bien référencé sur Google, sans rien gérer techniquement.' },
				{ q: 'Où trouver une agence web ou un créateur de site près de chez moi ?', a: 'Norbert Digital Service est une agence web basée en Île-de-France, qui intervient à Paris, Palaiseau, Massy, Versailles, Saint-Quentin-en-Yvelines, en Essonne et dans les Yvelines, et partout en France à distance. Nous accompagnons aussi des entreprises en Afrique francophone.' },
				{ q: 'Faut-il passer par un freelance, une agence ou WordPress ?', a: 'Un outil à faire soi-même convient pour démarrer, mais demande du temps et limite le référencement. Un freelance ou une agence vous fait gagner du temps et livre un site plus rapide et mieux positionné sur Google. Nous développons des sites sur mesure ou sous WordPress, Shopify et WooCommerce selon votre besoin et votre budget.' },
			],
			articles: [
				'creation-de-site-internet-dans-les-yvelines-et-lessonne-le-guide-pour-les-tpe-et-pme',
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
			metaTitle: 'Création d’application mobile iOS et Android – Paris',
			metaDescription: 'Création d’application mobile iOS et Android à Paris et en Île-de-France avec Flutter et React Native : MVP, maquette, développement et publication sur l’App Store et Google Play. Devis gratuit.',
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
				{ q: 'Comment créer une application mobile pour mon entreprise ?', a: 'Tout commence par la définition des fonctionnalités essentielles, puis viennent les maquettes, le développement, les tests et la publication sur l’App Store et Google Play. Nous développons des applications iOS et Android avec Flutter, ce qui permet d’avoir une seule base de code pour les deux plateformes.' },
				{ q: 'Combien coûte le développement d’une application mobile ?', a: 'Le prix dépend du nombre d’écrans, des fonctionnalités (paiement, géolocalisation, notifications, espace client) et des connexions à vos outils. Après un premier échange, nous vous proposons un devis détaillé, avec souvent une première version simple pour lancer rapidement.' },
				{ q: 'Pouvez-vous transformer mon site en application ?', a: 'Oui. Selon votre besoin, nous créons une application mobile complète ou une application web installable (PWA) à partir de votre site existant, avec notifications et accès hors connexion.' },
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
			metaTitle: 'Intégration IA et chatbot pour PME – Île-de-France',
			metaDescription: 'Chatbot IA pour site web et WhatsApp, assistants RAG connectés à vos documents, agents IA : intégrez l’intelligence artificielle dans votre PME de façon concrète, sécurisée et conforme RGPD.',
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
				{ q: 'Comment intégrer l’intelligence artificielle dans mon entreprise ?', a: 'Nous identifions d’abord les tâches répétitives ou chronophages : réponses aux clients, rédaction, tri de documents, analyse de données. Puis nous mettons en place l’outil adapté, par exemple un chatbot IA sur votre site, un assistant connecté à vos documents ou une automatisation avec ChatGPT.' },
				{ q: 'Pouvez-vous créer un chatbot IA pour mon site ou WhatsApp ?', a: 'Oui. Nous concevons des chatbots et assistants IA alimentés avec les informations de votre entreprise, sur votre site web ou sur WhatsApp. Notre propre produit, Vendia, est un agent commercial IA sur WhatsApp qui gère devis, paiement et documents.' },
				{ q: 'L’IA est-elle accessible à une petite entreprise ?', a: 'Oui. Les outils d’IA sont devenus abordables : un premier assistant ou une première automatisation peut être mis en place rapidement, avec un budget maîtrisé et des gains de temps visibles dès les premières semaines.' },
			],
			articles: [
				'chatbot-ia-sur-votre-site-web-comment-transformer-vos-visiteurs-en-clients-24h-sur-24',
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
			metaTitle: 'Automatisation n8n et IA pour PME : gagnez du temps',
			metaDescription: 'Expert n8n en Île-de-France : automatisation de vos tâches répétitives avec n8n, Make, Python et l’IA (relances, facturation, CRM, e-mails, rapports). Gagnez des heures chaque semaine.',
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
				{ q: 'Comment automatiser les tâches répétitives de mon entreprise ?', a: 'Nous relions vos outils entre eux (formulaires, e-mails, CRM, facturation, agenda, WhatsApp) pour que les informations circulent automatiquement. Avec n8n, Make ou Zapier, une demande de contact peut par exemple créer un contact, envoyer un devis et prévenir votre équipe sans intervention.' },
				{ q: 'n8n, Make ou Zapier : lequel choisir ?', a: 'Zapier et Make sont simples à prendre en main, n8n est plus flexible et peut être hébergé chez vous pour maîtriser vos données et vos coûts. Nous vous conseillons l’outil le plus adapté à vos volumes et à votre budget.' },
				{ q: 'Pouvez-vous automatiser ma facturation et mes relances ?', a: 'Oui : génération des factures et devis, relances automatiques des impayés, rappels de rendez-vous et suivi des paiements font partie des automatisations les plus demandées par nos clients.' },
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
			metaTitle: 'Agence SEO et marketing digital – Paris, Essonne',
			metaDescription: 'Référencement naturel, SEO local et fiche Google Business, GEO (ChatGPT, Gemini), Google Ads, Meta Ads et réseaux sociaux : une stratégie marketing multicanale pour attirer des clients en Île-de-France.',
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
				{ q: 'Comment apparaître en premier sur Google ?', a: 'Il faut combiner un site rapide et bien structuré, des contenus qui répondent aux recherches de vos clients, une fiche Google Business Profile optimisée et des liens vers votre site. Nous travaillons ces quatre leviers pour améliorer durablement votre position sur Google.' },
				{ q: 'Comment avoir plus de clients grâce à internet ?', a: 'En étant visible là où vos clients cherchent : Google, Google Maps, réseaux sociaux et publicité en ligne. Nous mettons en place une stratégie complète : référencement naturel (SEO), SEO local, réseaux sociaux, Google Ads et Meta Ads, avec un suivi des résultats.' },
				{ q: 'Proposez-vous la gestion des réseaux sociaux et de la publicité ?', a: 'Oui : création de contenus, planification des publications sur Facebook, Instagram, LinkedIn et TikTok, et gestion de campagnes publicitaires Google Ads et Meta Ads pour générer des contacts et des ventes.' },
			],
			articles: [
				'fiche-google-business-profile-12-optimisations-pour-apparaitre-dans-le-pack-local-en-2026',
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
			metaTitle: 'Génération de leads B2B et B2C : prospects qualifiés',
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
				{ q: 'Comment trouver de nouveaux clients rapidement ?', a: 'Nous combinons plusieurs canaux : prospection ciblée par e-mail et LinkedIn, landing pages optimisées, publicité en ligne et relances automatiques. L’objectif est de vous apporter des prospects qualifiés, prêts à échanger avec vous.' },
				{ q: 'Comment faire de la prospection B2B efficace ?', a: 'En ciblant précisément les bonnes entreprises et les bons interlocuteurs, avec des messages personnalisés et un suivi régulier. Nous construisons les listes de prospects, rédigeons les séquences et automatisons les relances.' },
				{ q: 'Qu’est-ce qu’une landing page et en ai-je besoin ?', a: 'Une landing page est une page conçue pour un seul objectif, comme obtenir une demande de devis. Elle convertit bien mieux qu’une page d’accueil pour vos campagnes publicitaires et vos offres spécifiques.' },
			],
			articles: [
				'landing-page-qui-convertit-la-methode-en-9-etapes-pour-generer-plus-de-demandes-de-devis',
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
		page: {
			slug: 'data-engineering',
			metaTitle: 'Data engineering, web scraping et tableaux de bord',
			metaDescription: 'Centralisez vos données, automatisez leur collecte et pilotez votre activité avec des tableaux de bord fiables : pipelines, entrepôt de données, extraction et web scraping.',
			h1: 'Data engineering et tableaux de bord',
			intro: [
				'Vos chiffres sont éparpillés entre un CRM, des tableurs, un outil de facturation et des exports qu’il faut recopier à la main. Résultat : des décisions prises trop tard, ou sur des données fausses.',
				'Nous construisons la chaîne qui rassemble vos données au même endroit, les nettoie et les met à jour automatiquement. Vous obtenez des tableaux de bord fiables pour suivre vos ventes, vos clients et vos opérations sans retraitement manuel.',
			],
			includes: [
				{ title: 'Collecte automatisée', text: 'Connexion à vos outils (CRM, ERP, e-commerce, publicité) via API pour récupérer les données sans export manuel.' },
				{ title: 'Entrepôt de données', text: 'Une base centrale, PostgreSQL ou BigQuery, où toutes vos données sont rangées et prêtes à être analysées.' },
				{ title: 'Nettoyage et fiabilité', text: 'Doublons, formats incohérents, valeurs manquantes : les données sont contrôlées avant d’arriver dans vos rapports.' },
				{ title: 'Tableaux de bord', text: 'Des indicateurs clairs, mis à jour automatiquement, accessibles à vos équipes et à la direction.' },
				{ title: 'Extraction et web scraping', text: 'Collecte structurée de données publiques (annuaires, catalogues, prix) dans le respect des règles d’utilisation.' },
				{ title: 'Pipelines planifiés', text: 'Des traitements qui tournent seuls chaque nuit ou chaque heure, avec une alerte en cas de problème.' },
			],
			forWho: ['PME qui pilotent encore leur activité sur tableur', 'Directions qui veulent des chiffres fiables', 'E-commerçants multi-canaux', 'Équipes marketing qui suivent plusieurs plateformes'],
			faq: [
				{ q: 'Qu’est-ce que le data engineering ?', a: 'C’est la mise en place de l’infrastructure qui collecte, transforme et stocke vos données pour qu’elles soient fiables et exploitables. C’est la base indispensable avant tout tableau de bord ou projet d’IA.' },
				{ q: 'Faut-il une grosse quantité de données ?', a: 'Non. Même une petite entreprise gagne à centraliser ses données de ventes, de clients et de marketing. On dimensionne la solution selon votre volume réel.' },
				{ q: 'Le web scraping est-il légal ?', a: 'La collecte de données publiques est possible dans certaines limites : respect des conditions d’utilisation des sites, du RGPD pour les données personnelles et du droit des bases de données. Nous vérifions ces points avant chaque projet.' },
				{ q: 'Comment centraliser les données de mon entreprise ?', a: 'Nous connectons vos sources (site, CRM, comptabilité, fichiers Excel, outils métier) dans une base de données unique, puis construisons des tableaux de bord clairs pour suivre vos chiffres en temps réel.' },
				{ q: 'Pouvez-vous créer un tableau de bord pour suivre mon activité ?', a: 'Oui : chiffre d’affaires, ventes, prospects, stocks ou performance marketing, nous créons des tableaux de bord sur mesure (Looker Studio, Power BI ou applications web) mis à jour automatiquement.' },
				{ q: 'Qu’est-ce que le web scraping et est-ce légal ?', a: 'Le web scraping consiste à collecter automatiquement des données publiques sur des sites web, par exemple des prix ou des annonces. Il doit respecter les conditions des sites et le RGPD : nous vous conseillons sur ce qui est autorisé.' },
			],
			articles: [
				'intelligence-artificielle-pour-les-pme-ce-qui-est-possible-en-2026',
				'automatisation-n8n-2026-comment-les-pme-francaises-gagnent-15h-par-semaine',
				'rag-chatbots-metier-et-agents-ia-le-guide-complet-pour-integrer-lintelligence-artificielle-en-entreprise-en-2026',
			],
		},
	},
	{
		icon: BookOpen,
		title: 'Formation',
		description: 'Formations sur mesure pour vos équipes : développement web et mobile, IA, automatisation, data. Formats présentiel, distanciel ou e-learning.',
		stack: ['Python', 'SvelteKit', 'Flutter', 'FastAPI', 'IA / ML'],
		accent: false,
		iconBg: 'linear-gradient(135deg, #059669, #065f46)',
		page: {
			slug: 'formation',
			metaTitle: 'Formation IA, automatisation, développement web et mobile',
			metaDescription: 'Formations sur mesure pour vos équipes : intelligence artificielle, automatisation n8n, développement web et mobile, Python et data. En présentiel ou à distance.',
			h1: 'Formations IA, automatisation et développement',
			intro: [
				'Les outils évoluent vite : IA générative, automatisation, nouveaux frameworks. Vos équipes ont besoin de comprendre ce qui est possible et de savoir s’en servir dans leur travail de tous les jours.',
				'Nous proposons des formations pratiques, construites autour de vos cas d’usage réels. Chaque session alterne explications et exercices sur vos propres outils, pour que les participants repartent avec quelque chose qui fonctionne.',
			],
			includes: [
				{ title: 'IA au quotidien', text: 'Utiliser ChatGPT, Gemini et les assistants IA de façon efficace et sûre : rédaction, analyse, recherche, synthèse.' },
				{ title: 'Automatisation avec n8n', text: 'Créer ses premiers workflows, connecter ses outils et automatiser des tâches simples en autonomie.' },
				{ title: 'Développement web', text: 'SvelteKit, API, bases de données : des parcours pour développeurs débutants ou confirmés.' },
				{ title: 'Développement mobile', text: 'Créer une application iOS et Android avec Flutter, de la première interface à la publication.' },
				{ title: 'Python et data', text: 'Manipuler des données, automatiser des traitements et construire des API avec FastAPI.' },
				{ title: 'Format adapté', text: 'Présentiel, distanciel ou e-learning, en sessions courtes ou en parcours sur plusieurs semaines.' },
			],
			forWho: ['Équipes qui veulent adopter l’IA', 'Dirigeants qui veulent comprendre avant d’investir', 'Développeurs qui montent en compétences', 'Écoles et organismes de formation'],
			faq: [
				{ q: 'Les formations sont-elles adaptées aux débutants ?', a: 'Oui. Le niveau est fixé avant la formation avec un court échange sur le profil des participants. Les sessions IA et automatisation ne demandent aucune connaissance technique.' },
				{ q: 'La formation peut-elle porter sur nos propres outils ?', a: 'C’est même recommandé : les exercices sont construits à partir de vos documents, de vos logiciels et de vos tâches réelles pour un résultat directement utile.' },
				{ q: 'Combien de temps dure une formation ?', a: 'D’une demi-journée de découverte à un parcours de plusieurs semaines. Le programme et la durée sont proposés selon vos objectifs.' },
				{ q: 'Où suivre une formation à l’intelligence artificielle ou à ChatGPT ?', a: 'Nous proposons des formations pratiques à l’IA générative, à ChatGPT et à l’automatisation, en présentiel en Île-de-France ou à distance, adaptées à votre métier et à votre niveau.' },
				{ q: 'Proposez-vous des formations pour les équipes en entreprise ?', a: 'Oui. Nos formations peuvent être organisées pour vos équipes, avec des cas concrets tirés de votre activité, afin que chacun reparte avec des outils utilisables dès le lendemain.' },
				{ q: 'Peut-on apprendre à créer son propre site ou ses automatisations ?', a: 'Oui : nous formons aussi à la création et à la mise à jour de sites web, au référencement de base et à la mise en place d’automatisations avec n8n, pour gagner en autonomie.' },
			],
			articles: [
				'intelligence-artificielle-pour-les-pme-ce-qui-est-possible-en-2026',
				'automatisation-ia-pour-pme-comment-gagner-dix-heures-par-semaine-avec-n8n-et-lia',
				'rag-chatbots-metier-et-agents-ia-le-guide-complet-pour-integrer-lintelligence-artificielle-en-entreprise-en-2026',
			],
		},
	},
	{
		icon: Layers,
		title: 'Design UI/UX',
		description: 'Interfaces élégantes, design systems cohérents et expériences utilisateur centrées sur la conversion.',
		stack: ['Figma', 'Framer', 'Storybook', 'Prototypage'],
		accent: false,
		iconBg: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
		page: {
			slug: 'design-ui-ux',
			metaTitle: 'Design UI/UX : maquettes de site et d’application',
			metaDescription: 'Conception d’interfaces de sites web et d’applications : parcours utilisateur, maquettes Figma, prototypes et design system pensés pour convertir.',
			h1: 'Design UI/UX de sites et d’applications',
			intro: [
				'Un visiteur décide en quelques secondes s’il reste sur votre site ou votre application. Si l’information est difficile à trouver ou le parcours confus, il abandonne, même si votre offre est la bonne.',
				'Nous concevons des interfaces claires et agréables, en partant de vos utilisateurs : ce qu’ils cherchent, ce qui les bloque, ce qui les fait passer à l’action. Vous validez des maquettes et des prototypes cliquables avant tout développement.',
			],
			includes: [
				{ title: 'Parcours utilisateur', text: 'Analyse de vos visiteurs et de leurs objectifs pour construire un parcours simple jusqu’à la prise de contact ou l’achat.' },
				{ title: 'Maquettes Figma', text: 'Des écrans détaillés pour ordinateur et mobile, fidèles au rendu final.' },
				{ title: 'Prototype cliquable', text: 'Testez la navigation avant le développement et corrigez ce qui doit l’être au bon moment.' },
				{ title: 'Design system', text: 'Couleurs, typographies et composants réutilisables pour garder une image cohérente partout.' },
				{ title: 'Audit d’interface', text: 'Analyse de votre site ou application existant avec une liste d’améliorations priorisées.' },
				{ title: 'Accessibilité', text: 'Contrastes, tailles de texte et navigation au clavier pour une interface utilisable par tous.' },
			],
			forWho: ['Startups qui préparent leur produit', 'Entreprises dont le site convertit mal', 'Équipes produit qui ont besoin de maquettes', 'Marques qui veulent une image cohérente'],
			faq: [
				{ q: 'Quelle différence entre UI et UX ?', a: 'L’UX (expérience utilisateur) concerne le parcours et la facilité d’utilisation. L’UI (interface utilisateur) concerne l’aspect visuel : couleurs, typographies, boutons. Un bon design travaille les deux ensemble.' },
				{ q: 'Pouvez-vous seulement faire le design, sans le développement ?', a: 'Oui. Nous livrons les maquettes et le design system à votre équipe technique, ou nous assurons aussi le développement si vous le souhaitez.' },
				{ q: 'Combien d’allers-retours sont prévus ?', a: 'Le nombre de cycles de corrections est fixé dans la proposition. Le prototype cliquable permet de valider tôt et d’éviter les surprises.' },
				{ q: 'Qu’est-ce que le design UI/UX et pourquoi est-ce important ?', a: 'L’UI concerne l’apparence de votre site ou application, l’UX la facilité d’utilisation. Un bon design rend votre offre claire, inspire confiance et augmente le nombre de visiteurs qui deviennent clients.' },
				{ q: 'Pouvez-vous refaire le design de mon site ou de mon application ?', a: 'Oui. Nous analysons ce qui freine vos utilisateurs, puis proposons une nouvelle maquette moderne, adaptée au mobile, avant de passer au développement.' },
				{ q: 'Créez-vous aussi des logos et une identité visuelle ?', a: 'Nous concevons l’univers visuel de vos interfaces : couleurs, typographies, icônes et composants, en cohérence avec votre logo et votre marque.' },
			],
			articles: [
				'pourquoi-votre-site-web-vous-fait-perdre-des-clients-en-2026-et-comment-y-remedier',
				'application-mobile-ou-site-web-responsive-pwa-comment-choisir-le-bon-format-pour-votre-projet',
				'comment-rediger-un-cahier-des-charges-pour-votre-site-web-ou-application-modele-et-checklist',
			],
		},
	},
	{
		icon: Server,
		title: 'Backend & API',
		description: 'APIs RESTful et GraphQL scalables, sécurisées, documentées et prêtes pour la production.',
		stack: ['Node.js', 'Django', 'PostgreSQL', 'Docker'],
		accent: false,
		iconBg: 'linear-gradient(135deg, #6366f1, #06b6d4)',
		page: {
			slug: 'backend-api',
			metaTitle: 'Développement backend et API sur mesure',
			metaDescription: 'Développement d’API REST et GraphQL, backends et bases de données sur mesure avec Node.js, Django et FastAPI : sécurisés, documentés et prêts pour la production.',
			h1: 'Développement backend et API',
			intro: [
				'Derrière chaque application, site e-commerce ou outil métier, il y a un serveur qui gère les données, les comptes utilisateurs, les paiements et la connexion avec d’autres logiciels. S’il est mal conçu, tout le reste en souffre.',
				'Nous développons des backends et des API solides, sécurisés et documentés, avec Node.js, Django ou FastAPI. Ils sont pensés pour évoluer avec votre activité et se connecter facilement à vos outils.',
			],
			includes: [
				{ title: 'API REST et GraphQL', text: 'Des interfaces claires et documentées pour vos applications web, mobiles et vos partenaires.' },
				{ title: 'Bases de données', text: 'Conception et optimisation de bases PostgreSQL ou MongoDB adaptées à vos données.' },
				{ title: 'Authentification et sécurité', text: 'Comptes utilisateurs, rôles, chiffrement et bonnes pratiques de sécurité dès la conception.' },
				{ title: 'Intégrations tierces', text: 'Paiement, e-mail, CRM, ERP, WhatsApp : connexion de votre système aux services dont vous avez besoin.' },
				{ title: 'Déploiement et hébergement', text: 'Mise en production avec Docker, surveillance et sauvegardes automatiques.' },
				{ title: 'Reprise de l’existant', text: 'Audit, correction et modernisation d’un backend devenu lent ou difficile à maintenir.' },
			],
			forWho: ['Startups qui construisent leur produit', 'Entreprises qui connectent plusieurs logiciels', 'Équipes front-end qui ont besoin d’une API', 'Projets mobiles qui ont besoin d’un serveur'],
			faq: [
				{ q: 'Qu’est-ce qu’une API ?', a: 'Une API est une porte d’entrée qui permet à deux logiciels d’échanger des données de façon sécurisée. C’est ce qui permet par exemple à votre application mobile de récupérer les informations de votre base de données.' },
				{ q: 'Node.js, Django ou FastAPI : que choisir ?', a: 'Le choix dépend de votre projet et de votre équipe : FastAPI pour les API rapides et l’IA, Django pour les applications complètes avec back-office, Node.js pour les applications temps réel. Nous recommandons la technologie la plus adaptée.' },
				{ q: 'Pouvez-vous reprendre un projet existant ?', a: 'Oui. Nous commençons par un audit du code et de l’architecture, puis proposons un plan de correction et d’amélioration.' },
				{ q: 'Pouvez-vous connecter mes logiciels entre eux avec une API ?', a: 'Oui. Nous développons des API et des connecteurs sur mesure pour faire communiquer votre site, votre application, votre CRM, votre outil de paiement ou votre ERP, sans double saisie.' },
				{ q: 'Pouvez-vous développer un logiciel ou un outil métier sur mesure ?', a: 'Oui : espace client, outil de gestion, plateforme de réservation ou back-office, nous développons des applications web sur mesure avec Python, Django, FastAPI et des bases de données PostgreSQL ou MongoDB.' },
				{ q: 'Comment intégrer le paiement en ligne ou Mobile Money ?', a: 'Nous intégrons les solutions de paiement adaptées à votre marché : carte bancaire (Stripe, PayPal) et Mobile Money (Orange Money, MTN Mobile Money), avec confirmation automatique et génération des reçus.' },
			],
			articles: [
				'cybersecurite-pour-pme-10-reflexes-pour-proteger-votre-site-web-et-vos-donnees-en-2026',
				'comment-rediger-un-cahier-des-charges-pour-votre-site-web-ou-application-modele-et-checklist',
				'combien-coute-vraiment-une-application-mobile-en-2026-le-vrai-prix-selon-votre-besoin',
			],
		},
	},
];

export const servicePages = services.filter((s): s is Service & { page: ServicePage } => !!s.page);

export function getService(slug: string) {
	return servicePages.find((s) => s.page.slug === slug) ?? null;
}
