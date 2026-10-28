# Deadlock Research

A static ICT324 research showcase using the extracted Deadlock Wiki brown UI, adapted for the project and for phones.

- Website: https://saltylem0n.github.io/deadlock-early-game/
- Repository: https://github.com/SaltyLem0n/deadlock-early-game

## Run locally

Serve this folder with a static HTTP server, for example `python -m http.server 4173`. There is no package installation or build step.

## Structure and content updates

- `index.html`: the seven research sections, real progress entries, dates, reference list and deliverable status.
- `styles/01-vector.css` through `styles/04-templates.css`: unchanged captured wiki stylesheets. Avoid editing these vendor files.
- `styles/research.css`: project branding, research components, accessibility adjustments and responsive layouts.
- `app.js`: theme and width controls, mobile menu, reference searches, cutoff explanations and active navigation.
- `assets/`: the 225 captured local UI assets, retained with their original filenames and bytes.
- `ui-asset-manifest.json`: original asset/source provenance.
- `files/`: proposal DOCX and research design notes. These are planning documents, not a final paper or dataset.
- `ATTRIBUTION.md`: UI source and ownership notices.
- `QA_REPORT.md`: actual verification and its limits.

Default appearance is brown/dark with constrained width. Light mode and full-width mode are user-selectable. Phone layouts use a fixed header, collapsible section menu, stacked panels and independently scrolling wide tables. Width switching is hidden on phones where the layout already uses the available width.

The earlier terminal styling, pixel fonts and CRT controls have been removed. Two project accessibility adjustments strengthen muted text and darken light-mode links on raised panels while preserving the original default brown/green appearance.

## Research integrity

Keep the exact formal title. Team names and student IDs are omitted at the user's request. Update the last-updated date only after actual content changes, using Asia/Bangkok. Progress entries need a real date and done/stuck/next evidence.

Do not replace pending dataset, results, final-paper, slides or research-code states without verified artifacts. The course requires at least three classifiers; XGBoost remains conditional in the proposal until confirmed or replaced. Keep reference IDs stable because citations link to them. If references change, update the visible bibliography count and its checked date only after actual verification.

## Publication

GitHub Pages publishes the repository root from `main`; `.nojekyll` is included. Keep local asset/download URLs relative for the `/deadlock-early-game/` project prefix. Do not add secrets or runtime-only services to the static site.

## Attribution

The UI source is the public Deadlock Wiki homepage capture dated 27 October 2026. The extraction in the parent workspace is retained unchanged. See `ATTRIBUTION.md` and `ui-asset-manifest.json`; do not assume the source wiki's CC BY-SA text notice licenses all images or fonts. This academic project is independent of the wiki and Valve.
