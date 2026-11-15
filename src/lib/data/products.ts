/**
 * Produits de Norbert Digital Service.
 * Ajouter un produit ici suffit pour qu'il apparaisse automatiquement
 * dans les formulaires de contact (FR et EN), rubrique « Demander une démo ».
 */
export interface Product {
	slug: string;
	name: string;
	fr: string;
	en: string;
}

export const products: Product[] = [
	{ slug: 'vendia', name: 'Vendia', fr: 'Démo Vendia (agent WhatsApp)', en: 'Vendia demo (WhatsApp agent)' },
	{ slug: 'velume', name: 'Vélume', fr: 'Démo Vélume (logiciel de gestion)', en: 'Vélume demo (management software)' }
];
