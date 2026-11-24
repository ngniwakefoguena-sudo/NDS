export type Pays = {
	slug: string;
	nom: string; // Cameroun
	du: string; // du Cameroun
	au: string; // au Cameroun
	villes: string[];
	paiements: string;
	domaine: string;
	monnaie: string;
	contexte: string;
	faqs: { q: string; a: string }[];
};

export const pays: Pays[] = [
	{
		slug: 'cameroun',
		nom: 'Cameroun',
		du: 'du Cameroun',
		au: 'au Cameroun',
		villes: ['Douala', 'Yaoundé', 'Bafoussam', 'Garoua', 'Bamenda', 'Kribi', 'Limbé'],
		paiements: 'Orange Money, MTN Mobile Money, carte bancaire et virement',
		domaine: '.cm',
		monnaie: 'FCFA (XAF) ou euros',
		contexte:
			'Au Cameroun, la grande majorité des clients découvrent une entreprise sur leur téléphone, la contactent sur WhatsApp et paient par Mobile Money. Le pays est bilingue : un site en français et en anglais touche aussi les régions anglophones et la diaspora. Norbert, fondateur de Norbert Digital Service, est camerounais et connaît ces usages de l’intérieur.',
		faqs: [
			{ q: 'Combien coûte la création d’un site internet au Cameroun ?', a: 'Le prix dépend du type de site (vitrine, e-commerce, plateforme), du nombre de pages et des fonctions comme le paiement Orange Money ou MTN MoMo. Après un premier échange gratuit, vous recevez un devis détaillé sous 24h, en FCFA ou en euros.' },
			{ q: 'Êtes-vous une agence web à Douala ou à Yaoundé ?', a: 'Nous travaillons à distance avec des entreprises de Douala, Yaoundé, Bafoussam et de tout le Cameroun, par WhatsApp, visio et e-mail. Vous avez un seul interlocuteur du devis à la mise en ligne, avec un suivi à chaque étape.' },
			{ q: 'Mon site peut-il être en français et en anglais ?', a: 'Oui. Nous créons des sites bilingues français-anglais, utiles pour toucher les régions anglophones du Cameroun, les clients d’Afrique de l’Ouest anglophone et la diaspora.' },
			{ q: 'Faut-il un nom de domaine en .cm ?', a: 'Ce n’est pas obligatoire. Un .cm rassure les clients locaux, un .com convient mieux si vous visez aussi l’international. Nous vous conseillons selon vos marchés et nous nous occupons de la configuration.' },
		],
	},
	{
		slug: 'cote-d-ivoire',
		nom: 'Côte d’Ivoire',
		du: 'de Côte d’Ivoire',
		au: 'en Côte d’Ivoire',
		villes: ['Abidjan', 'Yamoussoukro', 'Bouaké', 'San-Pédro', 'Daloa', 'Korhogo'],
		paiements: 'Orange Money, MTN MoMo, Moov Money, Wave, carte bancaire et virement',
		domaine: '.ci',
		monnaie: 'FCFA (XOF) ou euros',
		contexte:
			'La Côte d’Ivoire est l’un des marchés digitaux les plus dynamiques d’Afrique de l’Ouest. Les clients d’Abidjan comparent sur Google, écrivent sur WhatsApp et paient avec Wave ou Orange Money. Nous avons déjà réalisé le site d’ICS Innovations, entreprise basée à Abidjan.',
		faqs: [
			{ q: 'Combien coûte un site internet en Côte d’Ivoire ?', a: 'Le prix dépend du type de site, du nombre de pages et des fonctions (paiement Wave, Orange Money, catalogue, réservation…). Après un échange gratuit, vous recevez un devis détaillé sous 24h, en FCFA ou en euros.' },
			{ q: 'Travaillez-vous avec des entreprises d’Abidjan ?', a: 'Oui. Nous avons notamment réalisé le site d’ICS Innovations à Abidjan. Nous accompagnons les entreprises de Cocody, du Plateau, de Marcory, de Yopougon et de toute la Côte d’Ivoire, entièrement à distance.' },
			{ q: 'Mon site peut-il accepter Wave et Orange Money ?', a: 'Oui. Nous intégrons les paiements Mobile Money via des agrégateurs comme CinetPay, PayDunya ou Flutterwave, en plus de la carte bancaire.' },
			{ q: 'Pouvez-vous gérer ma visibilité sur Google à Abidjan ?', a: 'Oui : fiche Google Business, pages optimisées avec votre ville et votre activité, données structurées et suivi dans la Search Console, pour apparaître quand on cherche votre métier à Abidjan.' },
		],
	},
	{
		slug: 'senegal',
		nom: 'Sénégal',
		du: 'du Sénégal',
		au: 'au Sénégal',
		villes: ['Dakar', 'Thiès', 'Saint-Louis', 'Touba', 'Mbour', 'Ziguinchor'],
		paiements: 'Wave, Orange Money, Free Money, carte bancaire et virement',
		domaine: '.sn',
		monnaie: 'FCFA (XOF) ou euros',
		contexte:
			'Au Sénégal, Wave a changé les habitudes de paiement et WhatsApp est le premier canal de contact avec les clients. Un site rapide sur mobile, relié à WhatsApp et au paiement en ligne, fait la différence face à la concurrence de Dakar.',
		faqs: [
			{ q: 'Combien coûte la création d’un site web au Sénégal ?', a: 'Le prix dépend du type de site et des fonctions souhaitées (paiement Wave, catalogue, prise de rendez-vous…). Le devis est gratuit et envoyé sous 24h, en FCFA ou en euros.' },
			{ q: 'Êtes-vous une agence web à Dakar ?', a: 'Nous accompagnons les entreprises de Dakar, Thiès, Saint-Louis et de tout le Sénégal à distance, par WhatsApp, visio et e-mail, avec un seul interlocuteur.' },
			{ q: 'Mon site peut-il accepter le paiement Wave ?', a: 'Oui, via des agrégateurs comme PayDunya, CinetPay ou Flutterwave, en plus d’Orange Money et de la carte bancaire.' },
			{ q: 'Pouvez-vous créer un chatbot WhatsApp pour mon commerce ?', a: 'Oui, avec Vendia : vos clients écrivent sur WhatsApp, un assistant répond à toute heure, présente vos produits et prend les commandes.' },
		],
	},
	{
		slug: 'gabon',
		nom: 'Gabon',
		du: 'du Gabon',
		au: 'au Gabon',
		villes: ['Libreville', 'Port-Gentil', 'Franceville', 'Oyem', 'Moanda'],
		paiements: 'Airtel Money, Moov Money, carte bancaire et virement',
		domaine: '.ga',
		monnaie: 'FCFA (XAF) ou euros',
		contexte:
			'Au Gabon, beaucoup d’entreprises de Libreville et de Port-Gentil n’ont pas encore de site à jour : être bien présent sur Google et WhatsApp est un vrai avantage. Nous créons des sites et outils simples à gérer, pensés pour le mobile.',
		faqs: [
			{ q: 'Combien coûte un site internet au Gabon ?', a: 'Le prix dépend du type de site, du nombre de pages et des fonctions. Après un échange gratuit, vous recevez un devis détaillé sous 24h, en FCFA ou en euros.' },
			{ q: 'Travaillez-vous avec des entreprises de Libreville et Port-Gentil ?', a: 'Oui, entièrement à distance, par WhatsApp, visio et e-mail, avec un suivi à chaque étape jusqu’à la mise en ligne.' },
			{ q: 'Mon site peut-il accepter Airtel Money ?', a: 'Oui, via des agrégateurs de paiement compatibles, en plus de la carte bancaire.' },
			{ q: 'Pouvez-vous aussi gérer mes réseaux sociaux ?', a: 'Oui : création de visuels, publications programmées sur Facebook, Instagram et LinkedIn, et campagnes publicitaires ciblées sur le Gabon.' },
		],
	},
];

export const getPays = (slug: string) => pays.find((p) => p.slug === slug);
