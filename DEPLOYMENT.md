# Netlify deployment

The repository builds with `npm run build` on Node.js 22 and publishes `dist/`, as configured in `netlify.toml`. Source lives in `site/`.

1. Review the pull request and its Netlify deploy preview, if the existing Git integration provides one.
2. Merge into the production branch only when ready to update the live portfolio.
3. Confirm that https://iviwebooi.co.za shows the redesign and that project links, certificate filters, photo gallery, and résumé-request dialog work.

This redesign needs no EmailJS settings. Résumé requests open an email draft and can be copied if no mail client is configured. The old downloadable résumé and sitemap entry are removed from published files.

A Git connection to Netlify is expected from the previous repository documentation, but its dashboard settings must be verified separately if merging does not trigger a deployment.
