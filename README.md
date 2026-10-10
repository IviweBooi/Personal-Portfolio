# Iviwe Booi — Portfolio

Personal portfolio for https://iviwebooi.co.za, featuring selected projects, experience, certificates, and photography.

## Local preview

Run `npm run dev`, then open http://localhost:8000. Python 3 is required for this simple preview server.

## Build and hosting

Requires Node.js 22 or newer. Run `npm run build`; the static site is copied from `site/` into `dist/`. No npm dependencies or environment variables are required. Netlify uses the committed `netlify.toml` to build and publish `dist/`.

## Editing

- `site/index.html`: content, sections, project cards, certificates and metadata.
- `site/styles.css`: responsive layout, branding and motion.
- `site/app.js`: geometric sculpture, project dialogs, gallery, certificate filters and résumé requests.
- `site/assets/`: local fonts, logo, certificates and optimized photographs/screenshots.

Résumé requests prepare an email in the visitor’s email client, with a copy-to-clipboard fallback. There is no automatic résumé download or backend email submission. Contact links use email directly; EmailJS is no longer used.

PDF Merge and Venetic covers are live-site screenshots. AI Content Detector and ChillBuddy covers show their original frontends running locally and are labeled as previews. Images load lazily below the fold; screenshot WebP conversion is lossless. Motion respects reduced-motion preferences.
