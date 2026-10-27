# Deadlock Research Terminal

A buildless ICT324 research showcase intended for GitHub Pages. All research status is explicitly distinguished from completed empirical work.

## Run locally

Serve this folder using a static HTTP server, for example `python -m http.server 4173`. Open the printed URL. There is no package installation or build step.

## Update content

`index.html` is the single source for project content, including the team, update date, progress entries, reference list and deliverable states. `app.js` implements optional CRT effects, mobile navigation, a cutoff explainer and reference filtering. `styles.css` contains design and responsive rules.

- Team names and student IDs are omitted at the user's request. Add only verified identities if the user later requests publication.
- Update the visible `<time>` date and its `datetime` attribute after actual content changes, using Asia/Bangkok.
- Add real progress entries with done/stuck/next evidence; do not backdate invented activity.
- Replace pending dataset/results sections only after verifying research artifacts.
- The course requires three algorithms. XGBoost remains conditional in the proposal until confirmed.
- Add final paper/slides/code/data links only once those files exist. The DOCX download is a proposal.
- Reference IDs must remain stable because text citations link to them. Update the reference count in HTML if the bibliography changes; the filter derives its own count at runtime.
- If adding cutoff stages, update both the static fallback text and the explanatory stage content in `app.js`.

## Publish

Repository: https://github.com/SaltyLem0n/deadlock-early-game. Public project URL: https://saltylem0n.github.io/deadlock-early-game/. The site can publish directly from the repository's root on its default branch; `.nojekyll` is included. Relative asset and download paths support project URLs under `/<repository>/`.

## Sources and asset licenses

Research content: the supplied `Deadlock_Early_Game_Win_Prediction_Proposal.docx`. Course structure: page 8 of `ICT324-ProjectInfo.pdf`. The website includes 12 verified references, checked 27 October 2026.

- Fonts: Google Fonts, Press Start 2P and VT323. Bundled SIL Open Font License notices are in `assets/fonts/`.
- Icons: pixelarticons 2.4.2, https://github.com/halfmage/pixelarticons. MIT license is in `assets/icons/LICENSE`.
- No official game artwork is bundled. The palette is inspired by the Hidden King; this is an independent academic project.

## Verification

See `QA_REPORT.md` in the project workspace for the actual test record. A working website does not mean the research dataset, experiments or final paper are complete.
