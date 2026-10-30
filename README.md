# website-myselion.com

Site **mySelion** (https://www.myselion.com), recréé hors d'Odoo sur le contenant partagé
`@coeur-historique/website-shell` (Astro 6), sur la base de `website-selion.be`.

## Contenu repris de l'ancien site Odoo (27/10/2026)

| Ancien (Odoo) | Nouveau | Source |
| --- | --- | --- |
| `/` | `/fr/` | `src/components/home/HomePageContent.astro` + `src/i18n/contenu/fr.json` |
| `/blog`, `/blog/<catégorie>` | `/fr/blog/` (filtres Casus · Tutoriels · Communauté) | `src/pages/[lang]/blog/` |
| `/blog/<catégorie>/<article>` (12 articles) | `/fr/blog/<slug>/` | `src/content/blog/<slug>.fr.md`, couvertures dans `src/assets/blog/` |
| `/contactus` | `/fr/contact/` | formulaire générique du shell |
| `/legal`, `/privacy`, `/cookies`, `/cgu`, `/cluf` | `/fr/legal/mentions-legales/`, `vie-privee/`, `cookies/`, `conditions-generales/`, `cluf/` | `src/content/legal/*.html` |

Les anciennes URL sont redirigées en 301 dans `vercel.json`. Français uniquement, comme l'ancien
site. Seul changement de fond : l'hébergeur des mentions légales (Odoo → Vercel).

## À compléter avant la bascule

- Logo haute définition : l'ancien site ne fournit qu'un 156 px (`src/assets/logo-myselion.png`).
- Réseaux sociaux : aucun n'était configuré sur l'ancien site.
- Textes légaux : ils citent encore `www.selion.be` (repris tels quels de l'ancien site).
- Lien « Se connecter » : pointe vers `https://app.myselion.net/login` (la plateforme) ; l'ancien
  `https://www.myselion.com/web/login` (Odoo) répond 404 depuis la bascule du domaine (30/10/2026).
- Vercel : créer le projet (variable `SHELL_READ_TOKEN`, voir `vercel.json`), puis la procédure
  `myselion4nonprofit/docs/procedure/verification-hebdomadaire-site.md` avant la bascule DNS.

## Développement

```bash
npm install
npm run dev
npm run build
```
