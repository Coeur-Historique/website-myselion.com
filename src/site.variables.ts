// src/site.variables.ts — FICHIER UNIQUE DE VARIABLES DU SITE mySelion (myselion.com).
//
// Migration du site Odoo www.myselion.com vers le contenant partagé website-shell
// (27/10/2026), sur la base de website-selion.be. Contenu repris à l'identique de
// l'ancien site (accueil, offres, blog, textes légaux) : voir README.md.
// mySelion est une marque de GROUPE SELION srl. (footer de l'ancien site :
// « MYSELION, a GROUPE SELION company ») : même entité juridique et même n° de TVA.
import type { SiteConfig } from '@coeur-historique/website-shell/types';

export const SITE_VARIABLES: SiteConfig = {
  title: "mySelion",
  slogan: "Tout votre business sur une plateforme",
  description: "mySelion : plateforme de gestion complète, intégrée et évolutive. Facturation, achats, comptabilité, TVA et administration, déployée en 1 heure.",
  legalForm: "SRL",
  legalDenomination: "GROUPE SELION srl.",
  themeClass: "theme-myselion",
  favicon: "/favicon-myselion.png",
  domain: "https://www.myselion.com",
  // Ancien site en français uniquement.
  locales: ["fr"],
  ogImageUrl: "https://www.myselion.com/favicon-myselion.png",

  analytics: {
    gaMeasurementId: "",
    searchConsoleVerification: "",
    googleAdsId: "",
    adsensePublisherId: "",
    metaPixelId: "",
    pinterestTagId: "",
  },

  labels: {
    cible: "header.nav.cible",
    service: "header.nav.service",
    objectif: "header.nav.objectif",
    blog: "header.nav.blog",
    volontariat: "header.nav.volontariat",
  },

  features: {
    showBlog: true,
    showAffiliation: false,
    showBenchmark: false,
    showDonation: false,
    showStickyContactBar: true,
  },

  // Coordonnées du footer de l'ancien site (www.myselion.com, 27/10/2026).
  contactData: {
    phone: "+32 4 295 20 63",
    phoneUrl: "tel:+3242952063",
    email: "info@myselion.com",
    emailUrl: "mailto:info@myselion.com",
    address: "Rue Velbruck 6, 4000 Liège, Belgique",
    // Plan Google Maps de la page contact standard (shell-contact).
    mapQuery: "mySelion, Rue Velbruck 6, 4000 Liège",
    tvaNumber: "BE0556676367",
    kboUrl: "https://kbopub.economie.fgov.be/kbopub/toonondernemingps.html?ondernemingsnummer=0556676367",
    // Lien « Rappel immédiat » de l'offre Business sur l'ancien site.
    ringMeUrl: "https://service.ringcentral.eu/application/ringme/callback?rdr=%2Fapplication%2Fringme%2Fcallback&mbid=0889F6D7728060B49486E239B1D6BF6C9790437971065%2C0%2C10001%2C1%2C0&s=2010&referrer=https%3A%2F%2Fcharli.odoo.com%2F&nm=&pn=&ap=&assetId=f7cade80b7cc92b991cf4d2806d6bd78&assetServiceLink=https%3A%2F%2Fbrand-assets.ringcentral.com&localeId=fr_FR",
  },

  // L'ancien site n'avait aucun réseau social configuré : seul l'agenda « Demo Request » est repris.
  socialLinks: {
    googleAgenda: { url: "https://calendar.app.google/HaY66yydHRhzNKVN8", label: "Démonstration", icon: "fa-solid fa-calendar-days", hoverClass: "" },
  },

  // Menus du header (titres figés par le shell) : entrées propres à mySelion.
  cible: [
    { name: "Offres", slug: "/#offres" },
    { name: "Atouts", slug: "/#atouts" },
  ],

  service: [
    { name: "Modules", slug: "/#modules" },
    { name: "Plateforme", slug: "/#plateforme" },
  ],

  objectif: [
    { name: "Casus", slug: "/blog/?categorie=casus" },
    { name: "Tutoriels", slug: "/blog/?categorie=tutoriels" },
    { name: "Programme Partenaire #spread", slug: "/blog/programme-partenaire-spread/" },
  ],

  // « Se connecter » de l'ancien header : accès à la plateforme.
  headerCta: { name: "Se connecter", slug: "https://www.myselion.com/web/login" },

  fatFooter: [
    {
      title: "mySelion",
      links: [
        { name: "Modules", slug: "/#modules" },
        { name: "Offres", slug: "/#offres" },
        { name: "Atouts", slug: "/#atouts" },
        { name: "Démonstration", slug: "https://calendar.app.google/HaY66yydHRhzNKVN8" },
        { name: "Contact", slug: "/contact/" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { name: "Casus", slug: "/blog/?categorie=casus" },
        { name: "Tutoriels", slug: "/blog/?categorie=tutoriels" },
        { name: "Communauté", slug: "/blog/?categorie=communaute" },
        { name: "Programme Partenaire #spread", slug: "/blog/programme-partenaire-spread/" },
      ],
    },
    {
      title: "Légal",
      links: [
        { name: "CLUF", slug: "/legal/cluf/" },
      ],
    },
    {
      title: "GROUPE SELION",
      links: [
        { name: "GROUPE SELION", slug: "https://selion.be" },
      ],
    },
  ],
};

export const ENTITY_NAME = SITE_VARIABLES.legalDenomination ?? `${SITE_VARIABLES.title} ${SITE_VARIABLES.legalForm}`;

// Couleurs de marque reprises du thème Odoo de l'ancien www.myselion.com (--o-color-1/2/5).
export const THEME_VARS = {
  brandDarkBlue: '#2E4C77',
  brandDarkBlueRgb: '46, 76, 119',
  brandRed: '#4877B9',
  brandRedRgb: '72, 119, 185',
  brandBurgundy: '#114B5F',
};
