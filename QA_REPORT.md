# Website verification

Verified on 27 October 2026 (Asia/Bangkok).

- Public website: https://saltylem0n.github.io/deadlock-early-game/
- Repository: https://github.com/SaltyLem0n/deadlock-early-game
- Publishing source: `main`, repository root, GitHub Pages branch publishing.
- Application revision verified: `a54d94e359ce418d8d263d34a1504a4c00fbc5b8`.

## Content and scope

All seven required sections are present: Home, Problem, Data, Method, Progress log, Results, and Files & references. The formal research title is preserved. Team names and IDs are omitted as requested by the user on 27 October 2026.

The content distinguishes collection targets from collected counts, proposed models from trained models, and planned deliverables from available files. The third-classifier requirement is explicit: XGBoost is conditional in the proposal and must be confirmed or replaced by M3. Results, final paper, slides, research code and dataset are honestly pending.

The bibliography contains 12 provider, official documentation and original-paper references checked during implementation. Internal citations target stable reference IDs.

## Browser verification performed

- Desktop rendering observed at 1440 x 1000 locally and 1552 pixels wide on the public site.
- Phone rendering observed at 390 x 844 and 320 x 740 locally; public phone rendering and controls also verified at a measured CSS viewport width of 434 pixels.
- No page-level horizontal overflow at the verified narrow widths. Wide tables remain inside horizontally scrollable regions. A cutoff-control overflow at 320 pixels was fixed and rechecked.
- All seven navigation links were activated on the public site; each produced the expected URL fragment and section focus.
- Active section tracking was corrected and verified. The keyboard skip link moves focus to `main`.
- Mobile menu opening, closing after selection, Escape dismissal and focus return were verified.
- The 5-, 10- and 15-minute controls update the explanation. Enter and Space activation were verified.
- Reference search, form submission, clear/reset, no-match feedback and restoration of a filtered-out citation target were verified. Public search for XGBoost displayed one of 12 references.
- CRT controls toggle scanlines, with `pointer-events: none`, and retain the preference after reload. Default effects are off.
- Both bundled fonts loaded. Images rendered without broken sources. Computed border radii were zero.
- The final public page used the requested parchment background and exact primary ink colour.

Reduced-motion support was checked in the implementation: the media query suppresses animation and scanlines, and JavaScript disables the effects control when `prefers-reduced-motion: reduce` matches. That preference was not emulated in the browser.

## Downloads and publication

GitHub reported a successful Pages build for the verified application revision. Anonymous HTTP requests to all 21 referenced local assets, page/script/style files and downloads returned HTTP 200 and matched the local source (normalizing Git text line endings where applicable).

The public page opened in a browser without a login prompt. All links use relative paths for the project's `/deadlock-early-game/` prefix.

The in-app browser downloaded both files successfully. Their saved copies matched the source bytes:

| File | SHA-256 |
| --- | --- |
| Proposal DOCX | `306624dc481f8848a7f5cba602f331390828f6e96feb0fe11c5515c92e79f199` |
| Research design notes | `2beeefb2eaecf42195f5ac5f94f1c2829d0c2de8d6ad8773c37aaf587600f9ef` |

Brave's automation download-capture calls timed out; the successful in-app downloads and byte comparisons provide the download verification.

## Structural and accessibility checks

- JavaScript passed `node --check`.
- Authored changes passed `git diff --check`.
- No duplicate HTML IDs or missing local anchor/file targets were found.
- Primary ink contrast: 8.13:1 on parchment, 6.83:1 on wax, and 5.48:1 on amber.
- Native links and buttons, visible focus indicators, labeled search, table captions, live result counts, and reduced-motion handling are implemented.

This is a website verification record. It does not establish dataset validity, model performance, research reproducibility or completion of the final academic deliverables.
