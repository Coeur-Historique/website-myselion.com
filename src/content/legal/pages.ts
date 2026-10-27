// Textes légaux repris de l'ancien www.myselion.com (Odoo) le 27/10/2026. Les 4 premiers slugs
// sont imposés par les liens légaux du footer du shell (/fr/legal/<slug>/) ; le CLUF est
// propre à mySelion (lien dans le fatfooter).
export const LEGAL_PAGES = [
  { slug: 'mentions-legales', title: 'Mentions légales', source: 'https://www.myselion.com/legal' },
  { slug: 'vie-privee', title: 'Vie privée', source: 'https://www.myselion.com/privacy' },
  { slug: 'cookies', title: 'Cookies', source: 'https://www.myselion.com/cookies' },
  { slug: 'conditions-generales', title: 'Conditions générales de vente', source: 'https://www.myselion.com/cgu' },
  { slug: 'cluf', title: 'Contrat de Licence Utilisateur Final (CLUF)', source: 'https://www.myselion.com/cluf' },
] as const;
