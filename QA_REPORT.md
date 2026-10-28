# Wiki UI redesign verification

Local and public verification: 28 October 2026 (Asia/Bangkok).

Application revision verified: `25a0172ab060a242077387036e917422fb738ebe`. Later documentation-only commits do not change the application assets verified below.

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

- Public site: https://saltylem0n.github.io/deadlock-early-game/
- Existing repository: https://github.com/SaltyLem0n/deadlock-early-game
- GitHub Pages reported the application revision built successfully. The corresponding [Pages workflow](https://github.com/SaltyLem0n/deadlock-early-game/actions/runs/40611284328) completed successfully.
- Anonymous requests checked 238 public files (8,342,550 bytes), covering all 225 assets, five stylesheets, HTML/JavaScript, downloads and published documentation/provenance. Every response was HTTP 200 and matched its local source, preserving vendor bytes exactly and normalizing authored text line endings where appropriate.
- The canonical public homepage opened in the browser without login and displayed the redesigned wiki shell, seven sections, 12 references and loaded Inter/Valve Occult fonts.
- On the public site, all seven sidebar links produced the correct fragment/focus. Appearance controls worked with Enter and Space; reference search/clear and cutoff selection worked. The phone menu, fixed header and section visibility were verified at 390 CSS pixels with no page overflow.
- Both files downloaded successfully through the in-app browser and the saved copies matched the source bytes. The proposal also matches the supplied original Word document.

| Download | SHA-256 |
| --- | --- |
| Proposal DOCX | `306624dc481f8848a7f5cba602f331390828f6e96feb0fe11c5515c92e79f199` |
| Research design notes | `2beeefb2eaecf42195f5ac5f94f1c2829d0c2de8d6ad8773c37aaf587600f9ef` |

All static asset and download paths work beneath the repository's `/deadlock-early-game/` prefix. The final preview was captured from the canonical live homepage in dark, constrained-width mode.

This record verifies the website, not completion of the academic research or experimental validity.
