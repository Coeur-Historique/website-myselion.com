// src/i18n/index.ts — wrapper local du moteur i18n partage (website-shell), lie aux
// donnees PROPRES a ce site (translations.json + TRANSLATED_PATHS). Voir
// website-shell/src/i18n/engine.ts pour le moteur generique lui-meme. Ce fichier
// est deja generique -- aucune modification necessaire pour un nouveau site.
import {
  createTranslator,
  getLocaleFromPathname as sharedGetLocaleFromPathname,
  localizePath as sharedLocalizePath,
  stripLocaleFromPathname as sharedStripLocaleFromPathname,
  getSwitcherHref as sharedGetSwitcherHref,
  getEntryLocale,
  getEntrySlug,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  type Locale,
  type TranslationDictionary,
} from '@coeur-historique/website-shell/i18n';
import translations from './translations.json';

export { SUPPORTED_LOCALES, DEFAULT_LOCALE, getEntryLocale, getEntrySlug };
export type { Locale };
export type TranslationKey = keyof typeof translations;

export const t = createTranslator(translations as TranslationDictionary);
export const getLocaleFromPathname = sharedGetLocaleFromPathname;
export const localizePath = sharedLocalizePath;
export const stripLocaleFromPathname = sharedStripLocaleFromPathname;

// Chemins (sans prefixe de langue) reellement traduits sur CE site -- propre a
// chaque site, jamais code en dur dans le moteur partage (voir
// website-shell/src/i18n/engine.ts, commentaire d'en-tete sur ce point precis).
// A COMPLETER au fur et a mesure des pages ajoutees (voir README.md).
export const TRANSLATED_PATHS: readonly string[] = [
  '/',
  '/contact',
  '/blog',
  '/legal/mentions-legales',
  '/legal/vie-privee',
  '/legal/cookies',
  '/legal/conditions-generales',
  '/legal/cluf',
];

export function getSwitcherHref(currentPathWithoutLocale: string, targetLocale: Locale): string {
  return sharedGetSwitcherHref(currentPathWithoutLocale, targetLocale, TRANSLATED_PATHS);
}

export function getBlogEntryLocale(entryId: string): Locale {
  return getEntryLocale(entryId, 'fr') as Locale;
}

export function getBlogEntrySlug(entry: { id: string; data: { customSlug?: string } }): string {
  return getEntrySlug(entry);
}
