// src/i18n/contenu.ts — textes du site par langue. fr.json est la source ; une langue
// ajoutée plus tard aura les mêmes clés, et une langue sans fichier retombe sur le français. Les traductions de l'interface du shell restent
// dans translations.json.
import fr from './contenu/fr.json';

export type Contenu = typeof fr;

// Langues publiées par le site, dans l'ordre du sélecteur de langue.
export const SITE_LOCALES = ['fr'] as const;
export type SiteLocale = (typeof SITE_LOCALES)[number];

const fichiers = import.meta.glob<Contenu>('./contenu/*.json', { eager: true, import: 'default' });

export function contenu(lang: string): Contenu {
  return fichiers[`./contenu/${lang}.json`] ?? fr;
}

/** Remplace les variables {nom} d'un texte. */
export function fmt(texte: string, valeurs: Record<string, string | number>): string {
  return texte.replace(/\{(\w+)\}/g, (_, cle: string) => String(valeurs[cle] ?? `{${cle}}`));
}

export const localeStaticPaths = () => SITE_LOCALES.map((lang) => ({ params: { lang } }));
