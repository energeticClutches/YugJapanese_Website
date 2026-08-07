# Project Log

## 2026-07-28

- Added the baseline project context and brand guidelines.
- Established the website as a standalone product separate from the Flutter application.
- Documented the intended stack, design direction, page map, and development rules.
- Created the initial repository documentation set for future implementation work.
- Built the initial Next.js website with primary pages, shared components, responsive styling, SEO metadata, sitemap, and robots file.
- Added a project-bound hero visual asset at `public/yugjapanese-hero.png`.
- Verified the site with TypeScript, ESLint, and a production build.

## 2026-07-28 (polish pass)

- Fixed the Screenshots page being unreachable from any navigation: added a `footerLinks` list in `lib/site.ts` covering all eight primary pages and wired it into `SiteFooter`.
- Added a zero-JavaScript mobile navigation menu to `SiteHeader` using the native `details`/`summary` disclosure pattern (matching the existing FAQ page convention), since `.nav-links` previously had no replacement below the 920px breakpoint.
- Loaded the Manrope typeface for real via `next/font/google` in `app/layout.tsx`; previously `--font-sans` named "Manrope" without ever loading it, so the site silently rendered in system fonts.
- Added a branded favicon and Apple touch icon (`app/icon.tsx`, `app/apple-icon.tsx`) generated with `next/og`'s `ImageResponse`, matching the existing vermilion "YJ" brand mark. No new dependencies required.
- Verified all changes with `npm run typecheck`, `npm run lint`, `npm run build`, and manual browser testing at desktop and mobile viewports.

## 2026-07-31

- Reviewed the YugJapanese app development history document to mirror its milestone-driven workflow for the website.
- Added `WEBSITE_MILESTONES.md` with a 30-milestone website plan covering foundation, content, downloads, SEO, docs, deployment, CI, release, and maintenance.
- Updated `ROADMAP.md` to point to the complete website milestone plan and record the milestone-planning work.
- Corrected the website direction to be a learning-first product, not only an official download and marketing site.
- Added an initial `/learn` page and adjusted homepage CTAs/content toward Japanese learning.

## 2026-07-31 (Milestones 1-5)

Completed Milestones 1 through 5 of `WEBSITE_MILESTONES.md`.

- Milestone 1: rewrote `README.md`, which still described a download and marketing site rather than a learning product, and added a website-vs-app capability table so the boundary is written down rather than assumed.
- Milestone 3: the design system had no support for Japanese text at all, which the milestone's own verification step requires. Added a `--font-jp` token, a `.jp` class, and `.kana-chip`, `.track-card`, `.planned-card`, and `.tag` patterns, plus a `jp` Tailwind font family. Japanese renders with the reader's system gothic font instead of a bundled CJK webfont: no Japanese text shipped before this change, so a multi-megabyte font would have been cost with no benefit. Worth revisiting at Milestone 7 when the glyph set in use is known.
- Milestone 4: replaced the header's APK button with a "Start learning" action. It duplicated the Download nav item and was the loudest element on every page, which read as a download site. Download remains in the nav, footer, and homepage.
- Milestone 5: rebuilt the homepage around the three-script learning path, using `TrackCard` with real kana so visitors see Japanese immediately.
- Corrected a factual problem across the site: feature, FAQ, stat, metadata, and footer copy described app-only capabilities (handwriting stroke scoring, offline use, spaced repetition, bundled audio) in the website's own voice. Under the learning-first direction those read as website claims. Split `features` into `webFeatures` (true of the site today), `appFeatures` (Android only), and `plannedPractice` (shipped nowhere on the web), and rewrote the FAQ to answer web-versus-app directly. This also satisfies the Milestone 11 constraint against claiming app-level handwriting scoring before it exists.
- Rewrote `/learn`, which was written in roadmap voice ("The website should guide learners...") and addressed the project rather than the learner.
- Collapsed the duplicate milestone list in `ROADMAP.md`. It numbered milestones differently from `WEBSITE_MILESTONES.md`, so the two files disagreed about what a milestone number meant. `ROADMAP.md` now tracks position and known gaps only.
- Verified with `npm run typecheck`, `npm run lint`, and `npm run build` (17 routes, all static), plus browser checks confirming kana render with the Japanese font stack and no console errors.

## 2026-07-31 (Milestones 6-10)

Completed Milestones 6 through 10. The website now teaches Japanese rather than describing an app that does.

- Milestone 6: added `types/learning.ts` and `lib/learning/`. `LearningCharacter` is a discriminated union on `kind` rather than one wide type of optional fields, because kana and kanji genuinely differ — kana map a symbol to a sound, kanji map a symbol to a meaning plus several readings. Everything above character level (lessons, tracks) is shared. Data is split one file per script with a shared index, rather than a single `lib/learning.ts`, which would have run past 900 lines.
- Milestone 7-9: 75 characters across 15 lessons, all statically generated. Katakana and Kanji reuse `ScriptOverview` and `LessonView` without modification — adding a script costs a data file and two route wrappers.
- Milestone 10: `/practice` recognition mode. Questions are built on the learner's click rather than during render, so the shuffled order cannot differ between the server and client renders; there are no hydration warnings. Prompts are derived from the same lesson data the pages render, so practice can never drift from what the site teaches.
- Removed `learningTracks` from `lib/site.ts`. It restated track names, descriptions, and lesson lists that now live in `lib/learning`, and would have drifted. `TrackCard` takes a `ScriptTrack` and derives its sample characters and counts from real lesson data.
- Removed "Character recognition" from `plannedPractice` now that it actually ships, and added Practice to the header nav and footer.
- Fixed a CSS specificity bug found during verification: `.page-section p` (0,1,1) was overriding single-class rules like `.char-glyph` (0,1,0), so the large character on every lesson page rendered at 16px instead of 60px. Affected glyphs, readings, notes, and the practice character. Raised the specificity of the affected rules rather than weakening the shared paragraph rule.
- Verified with `npm run typecheck`, `npm run lint`, and `npm run build` (33 routes), plus browser testing of a full practice session including keyboard input, wrong answers, summary, and restart.

## 2026-07-31 (Milestones 11-15)

Completed Milestones 11 through 15, with Milestone 14 delivered as architecture only.

- Milestone 11: `/practice/writing`. One pointer-events code path covers mouse, touch, and stylus. The canvas keeps a fixed 320-unit internal coordinate space and maps pointer positions through its rendered size, so the stage can shrink on mobile without distorting strokes; the backing store is scaled to the device pixel ratio. No scoring and no stroke-order checking, because no stroke-order data has been authored — the page says so rather than implying otherwise.
- Milestone 12: `/review`. Extracted the quiz loop from `RecognitionPractice` into `QuizRunner` and `quizSession.ts` so review and practice share one implementation. Review sets mix lessons, and the kana set mixes both syllabaries. Sets stay homogeneous in answer type; a mixed kana/kanji round would offer romaji and English meanings as alternatives to the same question. Labelled a review foundation, not spaced repetition, since no per-character history exists.
- Milestone 13: `/progress` and `lib/progress.ts`. Counts only, in localStorage, no identifiers. Read after mount because localStorage does not exist on the server. Every access is wrapped: blocked storage explains itself, and corrupt values are normalised — verified by storing malformed JSON and wrong-typed values, which produced a clean zeroed page rather than a crash.
- Milestone 14: audio architecture with an empty manifest. `public/` has no audio files and none are licensed, so `PronunciationCue` is a server component rendering written guidance, and the client `AudioButton` is never mounted today. Lesson pages ship no `<audio>` elements at all. Recording or licensing audio is the actual blocker.
- Milestone 15: `/search` over an index derived from lesson data, ranked exact-character → exact-meaning → prefix → substring. Seventy-five entries needs no debounce and no dependency.
- Rewrote `app/privacy/page.tsx`. It had been rendering the instruction "Add exact legal language before production" on a public page, and it now describes the actual local-storage behaviour introduced by Milestone 13.
- Restructured the header nav to lead with learning routes (Learn, Practice, Review, Search, Progress, Download); Features, FAQ, and Contact moved to the footer, which they were already in.
- Verified with `npm run typecheck`, `npm run lint`, `npm run build` (41 routes), plus browser testing of drawing/clear/guide-toggle, a full review session, progress recording and reset, search across every field type, corrupt-storage handling, and 375px layout on each new route. No console errors or hydration warnings.

## 2026-07-31 (feature content alignment)

- Aligned the website's product copy with the shipped Flutter app's real capabilities, sourced from the app's development history.
- Expanded `features` in `lib/site.ts` from six generic entries to twelve concrete ones covering the Hiragana/Katakana/Kanji path, handwriting stroke scoring, spaced repetition, offline audio, offline search and dictionary, quiz modes, dashboard, analytics, and streaks/achievements. The homepage keeps `slice(0, 6)`, so the six strongest differentiators lead there while the Features page shows all twelve.
- Replaced the FAQ entries, which previously described the website's own scope and roadmap, with questions about how the app works.
- Updated the homepage and Screenshots `interface-panel` rows and the homepage `stats` to describe app behavior rather than website meta.
- Deliberately excluded all internal development detail (milestones, bug IDs, CI/CD) from the public site; the website presents the product, not how it was built.
- Verified with `npm run typecheck`, `npm run lint`, `npm run build`, and browser checks of Home, Features, and FAQ with no console errors.

## 2026-08-08 (commit and content-accuracy pass)

The Milestone 1-15 learning-platform pivot (`/learn`, `/practice`, `/practice/writing`, `/review`, `/progress`, `/search`, and full Hiragana/Katakana/Kanji lesson content) existed only as uncommitted working-tree changes with no git history behind it. Re-verified independently rather than trusting prior log entries: `npm run typecheck`, `npm run lint`, and `npm run build` (40 routes, all static/SSG) all pass clean.

Browser-testing that verification surfaced a real accuracy bug: several pages still described writing practice, review, and progress tracking as not yet built on the website, even though Milestones 11-13 had shipped all three. Found and fixed every instance:

- `lib/site.ts`: `plannedPractice` still listed Writing practice, Review sessions, and Progress tracking; replaced with the one capability that is actually still missing, Learning analytics (Milestone 16), and corrected the stale comment above it.
- `lib/site.ts` FAQ: "Can I learn on the website, or do I need the app?" said writing practice and review were "in progress"; rewritten to state plainly that lessons, practice, writing, review, progress, and search all work today, with the app's real advantages (stroke scoring, spaced repetition, audio, offline) listed instead.
- `lib/site.ts` FAQ: "Do I need an account?" said progress tracking "will be stored" in the future tense; corrected to present tense.
- `app/learn/page.tsx`: the "In progress" section said only lessons and recognition practice were live; corrected to list everything that has actually shipped.
- `app/page.tsx`: the homepage's Android-app section flatly stated writing practice, review, and progress tracking "are still being built into the website"; rewritten to say the website already has them and describe what the app adds on top.
- `app/practice/page.tsx`: the footnote said writing practice "is not built into the website yet" in the same sentence as spaced repetition, which genuinely isn't; split them and linked to `/practice/writing`. Added `.practice-footnote a` styling since inline links had no visible affordance under the site's `a { text-decoration: none }` default.

Re-verified `npm run typecheck`, `npm run lint`, `npm run build`, and browser-checked `/learn`, `/practice`, `/faq`, and `/` for the corrected copy and no console errors, before committing and pushing all of it (Milestones 1-15 plus this accuracy pass) to `origin/main`.
