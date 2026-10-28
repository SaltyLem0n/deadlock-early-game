# Wiki UI redesign verification

Local verification: 28 October 2026 (Asia/Bangkok).

## Scope and preservation

The seven research sections, formal title, 5/10/15-minute study design, player-soul analysis, conditional third classifier, 12 references and two downloads are preserved. Names and student IDs remain omitted. Research data, model results, final research code, final paper and slides remain pending.

An automated comparison confirmed that the existing research paragraphs, table cells and definitions in Problem through Files & references remain present, and the reference titles/URLs are unchanged. The proposal DOCX retains SHA-256 `306624dc481f8848a7f5cba602f331390828f6e96feb0fe11c5515c92e79f199`.

All 242 files in the source extraction match their before-edit hashes. The four numbered stylesheets and 225 captured assets in the website match the source bytes. Git attributes preserve those vendor bytes during publication. Attribution and the original asset manifest are included.

## Desktop and phone checks

- Browser-tested widths: 320, 390, 768, 1024 and 1280 CSS pixels. No page-level horizontal overflow or cutoff-control overflow was observed.
- The 1280 x 720 desktop composition uses the source background, original fonts, sidebar, tiles, panels and compact spacing. The content begins about 89px from the top, aligning with the extracted reference's header structure.
- Default brown base and accent verified: `#241c16` and `#60f8b3`. Body font is Inter; headings use Valve Occult with source fallbacks. Navigation tile radii are 4px. Both active font files loaded and visible images rendered without broken sources.
- Full-width switching changed the content width from about 948px to 1074px at the tested desktop viewport, then returned to constrained width. Both modes fit the page width.
- Light/dark controls work with pointer, Enter and Space activation, and return to the default dark presentation.
- The phone header remains available during scrolling. Section headings and the reference search remain below it. The menu closes after selection and on Escape, returning focus appropriately.
- All seven sidebar links produce the expected fragment and section focus. Active navigation and the keyboard skip link work.
- Keyboard ArrowRight moved the wide data table's horizontal scroll position, with scrolling contained inside the table region.

## Project interactions

- 5-, 10- and 15-minute explanations change correctly using pointer, Enter and Space activation.
- Header reference search forwards its query to the bibliography, focuses its input and displays matching results.
- Bibliography filtering, form submission, no-match feedback and clear/reset work. Searching XGBoost displays one of 12 references. Clearing also clears the header query.
- Following an internal citation restores a reference hidden by a prior search.
- No backend-only account/edit controls, copied wiki activity/news, hero directory or CRT controls are presented as project features.

## Accessibility and structural checks

- Sampled text contrast meets 4.5:1 in both modes: minimum 6.29:1 in dark mode and 4.86:1 in light mode across the checked body, caption, card, metadata, reference and link samples. This is a scoped contrast check, not a full accessibility certification.
- Visible keyboard focus, native controls, labeled searches, live filter counts, table captions and semantic headings are present.
- Reduced-motion CSS suppresses inherited animation/transition effects. The preference was inspected in code, not emulated in the browser.
- JavaScript passes `node --check`. Local anchor, file and stylesheet-asset targets resolve; there are no duplicate IDs.
- The browser console contained no warnings or errors during the recorded local checks.

## Publication and downloads

Pending the redesign's public deployment and final download verification. The existing public destination is https://saltylem0n.github.io/deadlock-early-game/ and repository is https://github.com/SaltyLem0n/deadlock-early-game.

This record verifies the website, not completion of the academic research or experimental validity.
