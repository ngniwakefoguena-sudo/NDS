import { services } from './services';
import { serviceSlugEn } from '$lib/i18n';
import type { Service, ServiceFaq } from './services';

/** Version anglaise des pages services (/en/services/<slug>). */
export interface ServicePageEn {
	slug: string;
	frSlug: string;
	title: string;
	description: string;
	metaTitle: string;
	metaDescription: string;
	h1: string;
	intro: string[];
	includes: { title: string; text: string }[];
	forWho: string[];
	faq: ServiceFaq[];
}

const remote: ServiceFaq = {
	q: 'Do you work with clients outside France?',
	a: 'Yes. Norbert Digital Service works 100% remotely with businesses all over the world: Europe, Africa, North America and the Middle East. We work by video call, WhatsApp and e-mail, in English or French, with regular updates at every stage.'
};

const en: Record<string, Omit<ServicePageEn, 'slug' | 'frSlug'>> = {
	'creation-site-web': {
		title: 'Website Development',
		description: 'High-performance websites and web apps, optimised for SEO, accessibility and conversion.',
		metaTitle: 'Website development services: business websites & online stores',
		metaDescription: 'Professional website design and development for businesses worldwide: fast business websites and online stores that rank on Google and turn visitors into clients. Free quote within 24 hours.',
		h1: 'Professional website design and development',
		intro: [
			'Your website is often the first contact between your business and a future client. If it is slow, hard to read on a phone or invisible on Google, that client goes to a competitor without ever calling you.',
			'Norbert Digital Service designs business websites, online stores and custom web applications for SMEs, freelancers and startups. Every site is fast, mobile-first, optimised for search engines and built to generate enquiries.'
		],
		includes: [
			{ title: 'Business website', text: 'Present your company, services and work with a clear, modern site that is easy to update.' },
			{ title: 'Online store', text: 'Shopify, WooCommerce or custom e-commerce: we pick the right solution for your catalogue and budget.' },
			{ title: 'Custom web application', text: 'Client portals, internal tools, booking platforms: web apps built around your processes.' },
			{ title: 'Website redesign', text: 'Modernise your current site without losing your Google rankings, thanks to a careful migration and redirect plan.' },
			{ title: 'Technical SEO included', text: 'Speed, tags, structured data and sitemap: your site launches with solid foundations to be found on Google.' },
			{ title: 'Edit your own content', text: 'A simple admin area to change your texts and images and publish blog posts yourself.' }
		],
		forWho: ['SMEs that want a website that brings in clients', 'Freelancers and independent professionals', 'Startups launching a product', 'Shops that want to sell online'],
		faq: [
			{ q: 'How much does a website cost?', a: 'It depends on the type of site (business site, online store, web app), the number of pages and the features. After a first call, you receive a detailed quote with no hidden costs.' },
			{ q: 'How long does it take to build a website?', a: 'A business website usually takes a few weeks; an online store or custom application takes longer. We agree on the schedule together from the start.' },
			{ q: 'Will my website rank on Google?', a: 'Yes. Technical SEO is built in from day one: loading speed, page structure, tags and structured data. We can also help with content and ongoing SEO.' },
			{ q: 'Can I update the website myself?', a: 'Yes. You get an admin area to update texts and images and publish articles, with no technical knowledge required.' },
			remote
		]
	},
	'application-mobile': {
		title: 'Mobile App Development',
		description: 'Cross-platform iOS and Android apps, fast and native-feeling, from mock-up to app store release.',
		metaTitle: 'Mobile app development company: iOS & Android apps',
		metaDescription: 'iOS and Android mobile app development with Flutter and React Native for businesses worldwide: MVP, UX design, development and release on the App Store and Google Play. Free quote.',
		h1: 'iOS and Android mobile app development',
		intro: [
			'A mobile app keeps your business in your clients’ pocket: bookings, orders, loyalty, service tracking or an internal tool for your teams.',
			'We build iOS and Android apps from a single codebase with Flutter or React Native. The result: a smooth app on both platforms, a controlled budget and simpler updates.'
		],
		includes: [
			{ title: 'UX/UI design', text: 'User journeys and interactive mock-ups approved with you before development starts.' },
			{ title: 'iOS and Android in one project', text: 'One shared codebase with Flutter or React Native to cut costs and delays.' },
			{ title: 'MVP for startups', text: 'A first version focused on the essentials, to test your idea quickly with real users.' },
			{ title: 'Back office and API', text: 'The server, database and admin interface that power your app.' },
			{ title: 'App store release', text: 'Preparation and publication on the App Store and Google Play, store listings included.' },
			{ title: 'Maintenance and updates', text: 'OS updates, fixes and new features after launch.' }
		],
		forWho: ['Startups launching a mobile product', 'Retailers and networks building loyalty', 'Companies equipping field teams', 'Founders who need an MVP'],
		faq: [
			{ q: 'Do I need a mobile app or a website?', a: 'It depends on usage: notifications, offline use, how often people use it. Sometimes a PWA (installable website) is enough. We help you choose the right format from the first call.' },
			{ q: 'How much does a mobile app cost?', a: 'The budget depends on the number of screens, the features and the back office required. An MVP lets you start with a smaller budget. You receive a detailed quote after scoping.' },
			{ q: 'Why Flutter or React Native?', a: 'They produce an iOS and an Android app from a single codebase with near-native performance, which lowers development and maintenance costs.' },
			{ q: 'Can you turn my website into an app?', a: 'Yes. Depending on your needs, we build a full mobile app or an installable web app (PWA) from your existing site, with notifications and offline access.' },
			remote
		]
	},
	'intelligence-artificielle': {
		title: 'Artificial Intelligence',
		description: 'AI built into your products: business chatbots, RAG, data analysis and recommendations.',
		metaTitle: 'AI chatbot development & AI agents for business (WhatsApp, website)',
		metaDescription: 'AI solutions for businesses worldwide: AI chatbots for your website and WhatsApp, RAG on your documents, AI agents and integration with your tools, with full control over your data. Free consultation.',
		h1: 'Artificial intelligence for businesses',
		intro: [
			'AI is no longer reserved for large companies. A well-designed assistant answers your clients around the clock, finds the right information in your documents in seconds and takes repetitive work off your team.',
			'We design AI tools around your real needs: chatbots trained on your own information, search across your documents, agents that chain actions in your tools, always with control over your data.'
		],
		includes: [
			{ title: 'Business chatbot', text: 'An assistant on your website or WhatsApp that answers clients using your own information.' },
			{ title: 'RAG on your documents', text: 'Ask questions about your procedures, contracts or product sheets in plain language, with sourced answers.' },
			{ title: 'AI agents', text: 'Assistants that chain actions: qualify a request, update a CRM, prepare a document.' },
			{ title: 'Analysis and sorting', text: 'Automatic e-mail triage, data extraction from documents and summaries.' },
			{ title: 'Integration with your tools', text: 'AI connected to your CRM, website, databases and existing tools through APIs.' },
			{ title: 'Data under control', text: 'Models and hosting chosen to match your privacy and GDPR requirements.' }
		],
		forWho: ['SMEs receiving many client requests', 'Teams wasting time looking for information', 'Companies with large document bases', 'Startups adding AI to their product'],
		faq: [
			{ q: 'What can an AI chatbot do for my business?', a: 'Answer frequent questions 24/7, qualify leads, book appointments and hand complex requests to your team, using your own information.' },
			{ q: 'Is my data safe?', a: 'Yes. We choose the models and hosting according to your confidentiality requirements, and your data is never used to train public models.' },
			{ q: 'How long does an AI project take?', a: 'A first chatbot or document assistant can be live in a few weeks. We usually start with a pilot on a limited scope.' },
			{ q: 'Do you build WhatsApp AI assistants?', a: 'Yes, including Vendia, our AI sales agent on WhatsApp that quotes, collects payment and sends the contract automatically.' },
			remote
		]
	},
	'automatisation-n8n': {
		title: 'Business Automation',
		description: 'Automate repetitive tasks with n8n and AI: invoicing, CRM, reporting and follow-ups.',
		metaTitle: 'AI automation agency: n8n workflows & business process automation',
		metaDescription: 'Business process automation for SMEs worldwide with n8n and AI: invoicing, reminders, CRM, reports and document processing. Save hours every week. Free audit.',
		h1: 'Business process automation with n8n',
		intro: [
			'Copying data from one tool to another, chasing unpaid invoices, preparing the same report every Monday: these tasks eat hours every week and create errors.',
			'We automate them with n8n and AI. Your tools talk to each other, information flows on its own and your team focuses on work that actually needs a human.'
		],
		includes: [
			{ title: 'Repetitive task audit', text: 'We identify the tasks that cost the most time and those that will pay back fastest once automated.' },
			{ title: 'n8n workflows', text: 'Robust, documented automation scenarios, hosted the way you need.' },
			{ title: 'Invoicing and reminders', text: 'Invoices created, sent and followed up automatically, without manual work.' },
			{ title: 'CRM and prospecting', text: 'New contacts land in your CRM, get qualified and receive the right message at the right time.' },
			{ title: 'Documents and reports', text: 'Data extracted from documents, reports and dashboards generated automatically.' },
			{ title: 'AI-powered automation', text: 'E-mail triage, suggested replies and summaries: AI inside your workflows where it helps.' }
		],
		forWho: ['SME owners short on time', 'Sales and admin teams', 'E-commerce businesses', 'Companies using several tools that don’t talk to each other'],
		faq: [
			{ q: 'What is n8n?', a: 'n8n is an automation platform that connects hundreds of apps (CRM, e-mail, spreadsheets, accounting, WhatsApp) to build workflows that run on their own.' },
			{ q: 'How much time can automation save?', a: 'Most SMEs we work with save several hours per week on admin and sales tasks. The audit tells you which tasks will save the most.' },
			{ q: 'Do I need to change my current software?', a: 'No. We connect the tools you already use; automation works around them.' },
			{ q: 'Who maintains the workflows?', a: 'We document every workflow, train your team and offer maintenance so everything keeps running as your tools evolve.' },
			remote
		]
	},
	'marketing-digital-seo': {
		title: 'SEO & Digital Marketing',
		description: 'SEO, GEO, Google Ads and Meta Ads to bring qualified clients to your business.',
		metaTitle: 'SEO agency & digital marketing services for businesses worldwide',
		metaDescription: 'SEO and digital marketing agency: international SEO, GEO for ChatGPT and AI search, Google Ads, Meta Ads, content and analytics to bring you more qualified leads. Free audit.',
		h1: 'SEO and digital marketing agency',
		intro: [
			'A great website is useless if nobody finds it. Your clients search on Google, ask ChatGPT and scroll social media: you need to be visible in all three.',
			'We combine SEO, GEO (optimisation for AI search engines), paid advertising and content to bring you qualified visitors, and we measure what actually turns into clients.'
		],
		includes: [
			{ title: 'Search engine optimisation (SEO)', text: 'Audit, technical fixes, keywords and content to climb Google rankings for the long term.' },
			{ title: 'International SEO', text: 'Multilingual pages, hreflang and targeted content to be found in every country you serve.' },
			{ title: 'GEO', text: 'Optimise your presence to appear in answers from ChatGPT, Gemini and AI search engines.' },
			{ title: 'Online advertising', text: 'Targeted Google Ads and Meta Ads campaigns, tested and managed by cost per client.' },
			{ title: 'Content and social media', text: 'Blog articles, editorial calendar and posts that keep your brand visible.' },
			{ title: 'Measuring results', text: 'Analytics and Search Console tracking to know what really brings in clients.' }
		],
		forWho: ['Businesses that are hard to find on Google', 'Service companies selling internationally', 'SMEs that want more quote requests', 'Brands launching a new offer'],
		faq: [
			{ q: 'How long does SEO take to work?', a: 'The first results usually appear within 2 to 4 months, and they grow over time. Paid ads can bring visitors from the first week.' },
			{ q: 'What is GEO?', a: 'Generative Engine Optimisation: making sure AI assistants such as ChatGPT and Gemini know your business and recommend it in their answers.' },
			{ q: 'Do you manage Google Ads and Meta Ads?', a: 'Yes. We set up, test and manage campaigns based on your cost per lead, with transparent reporting.' },
			{ q: 'Can you do SEO in several languages?', a: 'Yes. We build multilingual pages with the right technical setup so each language version ranks in its own market.' },
			remote
		]
	},
	'generation-de-leads': {
		title: 'Lead Generation',
		description: 'Landing pages, outreach and automated CRM to fill your pipeline with qualified B2B and B2C leads.',
		metaTitle: 'Lead generation services: landing pages, outreach & CRM (B2B, B2C)',
		metaDescription: 'Lead generation for B2B and B2C businesses worldwide: high-converting landing pages, e-mail and LinkedIn outreach, conversion funnels, automated CRM and WhatsApp follow-ups.',
		h1: 'B2B and B2C lead generation',
		intro: [
			'Traffic is only useful if it turns into conversations with potential clients. Lead generation connects every step, from the first visit to the booked meeting.',
			'We build the pages, messages and automations that capture interest, qualify prospects and follow up at the right moment, so your sales team talks to the right people.'
		],
		includes: [
			{ title: 'Landing pages', text: 'Pages dedicated to one offer, designed and tested to turn visitors into contacts.' },
			{ title: 'E-mail and LinkedIn outreach', text: 'Targeting, personalised message sequences and reply tracking, compliant with GDPR.' },
			{ title: 'Conversion funnels', text: 'The full journey from first contact to meeting or purchase.' },
			{ title: 'Automated CRM', text: 'Every prospect recorded, qualified and followed up automatically in HubSpot or your CRM.' },
			{ title: 'WhatsApp Business', text: 'Fast replies and automated follow-ups on your clients’ favourite channel.' },
			{ title: 'Tracking and optimisation', text: 'Cost per lead measured and campaigns improved continuously.' }
		],
		forWho: ['B2B companies that want more meetings', 'Startups in growth phase', 'Service providers', 'Sales teams that want to save time'],
		faq: [
			{ q: 'What is a qualified lead?', a: 'A contact who matches your target and has shown real interest, for example by requesting a quote or booking a call.' },
			{ q: 'Which channels work best?', a: 'It depends on your market: LinkedIn and e-mail for B2B, ads, landing pages and WhatsApp for B2C. We test and keep what performs.' },
			{ q: 'Is outreach compliant with GDPR?', a: 'Yes. We follow GDPR rules for B2B prospecting, with clear opt-out options in every message.' },
			{ q: 'How do you measure results?', a: 'Number of leads, cost per lead, meetings booked and deals closed, tracked in your CRM.' },
			remote
		]
	},
	'data-engineering': {
		title: 'Data Engineering',
		description: 'Data pipelines, warehouses and dashboards so you can steer your business with reliable numbers.',
		metaTitle: 'Data engineering and business dashboards',
		metaDescription: 'Data engineering for SMEs worldwide: automated data collection, data warehouse, data cleaning, scheduled pipelines and clear dashboards to run your business on reliable figures.',
		h1: 'Data engineering and dashboards',
		intro: [
			'Your data is scattered across your CRM, e-commerce, ads and spreadsheets. Bringing it together by hand takes hours and the figures are often out of date.',
			'We build pipelines that collect, clean and centralise your data automatically, then dashboards that give your team the right numbers at the right time.'
		],
		includes: [
			{ title: 'Automated collection', text: 'Connections to your tools (CRM, ERP, e-commerce, ads) through APIs, with no manual exports.' },
			{ title: 'Data warehouse', text: 'A central PostgreSQL or BigQuery database where all your data is organised and ready to analyse.' },
			{ title: 'Cleaning and reliability', text: 'Duplicates, inconsistent formats and missing values handled before data reaches your reports.' },
			{ title: 'Dashboards', text: 'Clear, automatically updated KPIs for your teams and management.' },
			{ title: 'Data extraction', text: 'Structured collection of public data (directories, catalogues, prices) within each site’s terms of use.' },
			{ title: 'Scheduled pipelines', text: 'Jobs that run on their own every night or every hour, with alerts if something goes wrong.' }
		],
		forWho: ['SMEs still running on spreadsheets', 'Managers who want reliable figures', 'Multi-channel e-commerce businesses', 'Marketing teams tracking several platforms'],
		faq: [
			{ q: 'Which tools do you use?', a: 'Python, SQL, PostgreSQL, BigQuery, n8n and dashboard tools such as Looker Studio or Metabase, chosen to fit your budget.' },
			{ q: 'Do I need a big data project?', a: 'No. Most SMEs start with a few connected sources and one dashboard, then add more over time.' },
			{ q: 'Who can see the dashboards?', a: 'You decide: access by role for management, sales or marketing, on desktop and mobile.' },
			{ q: 'How often is the data updated?', a: 'As often as you need: daily, hourly or in near real time depending on the sources.' },
			remote
		]
	},
	formation: {
		title: 'AI Training',
		description: 'Hands-on training in AI, ChatGPT, automation and development for teams and developers.',
		metaTitle: 'AI and ChatGPT training for teams, automation and development courses',
		metaDescription: 'Hands-on training for teams worldwide: generative AI and ChatGPT, n8n automation, web and mobile development, Python and data. Remote or on-site, adapted to your business.',
		h1: 'AI, automation and development training',
		intro: [
			'AI tools only create value when your team knows how to use them well, safely and in their daily work.',
			'We run practical training sessions built around your business cases: generative AI, automation with n8n, web and mobile development, Python and data. Remote anywhere in the world, or on-site.'
		],
		includes: [
			{ title: 'AI for everyday work', text: 'Use ChatGPT, Gemini and AI assistants effectively and safely for writing, analysis, research and summaries.' },
			{ title: 'Automation with n8n', text: 'Build your first workflows, connect your tools and automate simple tasks on your own.' },
			{ title: 'Web development', text: 'SvelteKit, APIs and databases: tracks for beginner and experienced developers.' },
			{ title: 'Mobile development', text: 'Build an iOS and Android app with Flutter, from the first screen to store release.' },
			{ title: 'Python and data', text: 'Work with data, automate processing and build APIs with FastAPI.' },
			{ title: 'Flexible format', text: 'Remote, on-site or e-learning, in short sessions or multi-week programmes.' }
		],
		forWho: ['Teams adopting AI', 'Managers who want to understand before investing', 'Developers growing their skills', 'Schools and training organisations'],
		faq: [
			{ q: 'Are the trainings available in English?', a: 'Yes, all trainings are available in English or French.' },
			{ q: 'Do participants need technical skills?', a: 'Not for the AI and automation courses. Development courses are adapted to each level.' },
			{ q: 'Can the training be tailored to my company?', a: 'Yes. We build exercises around your own processes, documents and tools.' },
			{ q: 'How long is a training?', a: 'From a half-day introduction to programmes over several weeks, depending on your goals.' },
			remote
		]
	},
	'design-ui-ux': {
		title: 'UI/UX Design',
		description: 'User journeys, Figma mock-ups and design systems for websites and apps that convert.',
		metaTitle: 'UI/UX design agency for websites and mobile apps',
		metaDescription: 'UI/UX design for websites and apps: user journeys, Figma mock-ups, clickable prototypes, design systems, interface audits and accessibility. For startups and businesses worldwide.',
		h1: 'UI/UX design for websites and apps',
		intro: [
			'Good design is not just about looking nice: it guides visitors to the right action, builds trust and makes your product easy to use.',
			'We design interfaces from your users’ goals, test them with prototypes and deliver mock-ups ready for development.'
		],
		includes: [
			{ title: 'User journeys', text: 'Analysis of your visitors and their goals to build a simple path to contact or purchase.' },
			{ title: 'Figma mock-ups', text: 'Detailed desktop and mobile screens, true to the final result.' },
			{ title: 'Clickable prototype', text: 'Test navigation before development and fix what needs fixing at the right time.' },
			{ title: 'Design system', text: 'Colours, typography and reusable components for a consistent brand everywhere.' },
			{ title: 'Interface audit', text: 'Review of your current site or app with a prioritised list of improvements.' },
			{ title: 'Accessibility', text: 'Contrast, text size and keyboard navigation for an interface everyone can use.' }
		],
		forWho: ['Startups preparing their product', 'Businesses whose website converts poorly', 'Product teams that need mock-ups', 'Brands that want a consistent image'],
		faq: [
			{ q: 'What is the difference between UI and UX?', a: 'UX is how the journey works and feels; UI is what the screens look like. We handle both together.' },
			{ q: 'Do you deliver files for developers?', a: 'Yes. Figma files with specs, components and assets ready for your developers or ours.' },
			{ q: 'Can you redesign only part of my site?', a: 'Yes, for example a homepage, a checkout or a sign-up flow, based on an audit of what blocks users.' },
			{ q: 'How long does a design project take?', a: 'From a few days for an audit to several weeks for a full product design.' },
			remote
		]
	},
	'backend-api': {
		title: 'Backend & API Development',
		description: 'Secure, scalable APIs, databases and integrations for your web and mobile products.',
		metaTitle: 'Backend and API development: REST, GraphQL, databases and integrations',
		metaDescription: 'Backend and API development for startups and businesses worldwide: REST and GraphQL APIs, PostgreSQL and MongoDB databases, authentication, third-party integrations, Docker deployment.',
		h1: 'Backend and API development',
		intro: [
			'Behind every app and website, a backend stores data, enforces business rules and connects to other services. When it is slow or fragile, everything else suffers.',
			'We design and build secure, documented backends and APIs that scale with your business, and we take over and modernise existing systems.'
		],
		includes: [
			{ title: 'REST and GraphQL APIs', text: 'Clear, documented interfaces for your web and mobile apps and your partners.' },
			{ title: 'Databases', text: 'Design and optimisation of PostgreSQL or MongoDB databases suited to your data.' },
			{ title: 'Authentication and security', text: 'User accounts, roles, encryption and security best practices from day one.' },
			{ title: 'Third-party integrations', text: 'Payments, e-mail, CRM, ERP, WhatsApp: your system connected to the services you need.' },
			{ title: 'Deployment and hosting', text: 'Production deployment with Docker, monitoring and automatic backups.' },
			{ title: 'Legacy takeover', text: 'Audit, fixes and modernisation of a backend that has become slow or hard to maintain.' }
		],
		forWho: ['Startups building their product', 'Companies connecting several systems', 'Front-end teams that need an API', 'Mobile projects that need a server'],
		faq: [
			{ q: 'Which technologies do you use?', a: 'Node.js, Python (FastAPI), PostgreSQL, MongoDB, Docker and the main cloud providers, chosen for your project.' },
			{ q: 'Can you work on an existing backend?', a: 'Yes. We start with an audit, then fix and modernise step by step without breaking what works.' },
			{ q: 'Is the API documented?', a: 'Yes. Every API comes with up-to-date documentation (OpenAPI) so other developers can use it easily.' },
			{ q: 'Do you handle hosting?', a: 'We can deploy and monitor your backend, or deliver it ready to run on your own infrastructure.' },
			remote
		]
	}
};

export interface ServiceEn extends Pick<Service, 'icon' | 'stack' | 'iconBg' | 'accent'> {
	page: ServicePageEn;
}

export const servicesEn: ServiceEn[] = services
	.filter((s) => s.page && en[s.page.slug])
	.map((s) => {
		const fr = s.page!.slug;
		return { icon: s.icon, stack: s.stack, iconBg: s.iconBg, accent: s.accent, page: { slug: serviceSlugEn[fr], frSlug: fr, ...en[fr] } };
	});

export const getServiceEn = (slug: string) => servicesEn.find((s) => s.page.slug === slug);

export const processEn = [
	{ title: 'Discovery call', text: 'A first call to understand your business, goals and constraints. You then receive a clear proposal: scope, schedule and budget.' },
	{ title: 'Design', text: 'Mock-ups, architecture or automation scenario: we agree on what will be built before writing a single line of code.' },
	{ title: 'Build', text: 'Development in stages, with regular check-ins and a test version so you can give feedback along the way.' },
	{ title: 'Launch and support', text: 'Go-live, training and support after launch to fix, improve and evolve your product.' }
];
