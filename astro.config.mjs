import { defineConfig } from 'astro/config';
import purgecss from 'astro-purgecss';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Repo-modele (contenu) pour un nouveau site du groupe -- voir README.md pour la
// procedure complete de mise en route. Base sur website-coeur-historique.be
// (pilote de la migration multi-repos, voir myselion4nonprofit/docs/astro_multi_website_management/
// scoping-migration-multi-repos-2026-08-05.md), genericise le 16/08/2026.
//
// A FAIRE lors de la mise en route d'un nouveau site : remplacer SITE_DOMAIN et
// SITE_LOCALES ci-dessous par les vraies valeurs du site (doivent rester
// cohérentes avec src/site.variables.ts : domain/locales).
const SITE_DOMAIN = 'https://myselion.com';
// Français uniquement, comme l'ancien site (meme liste que site.variables.ts et src/i18n/contenu.ts).
const SITE_LOCALES = ['fr'];
const DEFAULT_LOCALE = SITE_LOCALES[0];
const sitemapLocaleMap = Object.fromEntries(SITE_LOCALES.map((locale) => [locale, locale]));

// https://astro.build/config
export default defineConfig({
  site: SITE_DOMAIN,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: SITE_LOCALES,
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    mdx(),
    icon(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: sitemapLocaleMap,
      },
    }),
    purgecss(),
  ],
  build: {
    inlineStylesheets: 'always',
  },
});
