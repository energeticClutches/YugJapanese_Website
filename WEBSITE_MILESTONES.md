# YugJapanese Website Milestone Plan

This plan treats the website as a Japanese learning product, not only as a download or marketing site.

The website should help users learn Japanese directly on the web, using the same educational direction as the app: Hiragana first, Katakana second, Kanji after that, with writing practice, review, progress, and offline-first values.

The Flutter app remains separate. The website may describe, link to, and support the app, but it must not modify app code.

## Milestone 1 - Website Learning Product Foundation

Objective: Define the website as a web-based Japanese learning experience.

Scope:
- Website-only project scope
- Learning mission
- App/website boundary
- Documentation baseline
- Brand principles

Constraints:
- Do not modify the Flutter app
- Keep the website repository independent
- The website must teach Japanese, not only advertise the app

Deliverables:
- `PROJECT_CONTEXT.md`
- `README.md`
- `ROADMAP.md`
- `PROJECT_LOG.md`
- `CHANGELOG.md`
- `LICENSE`

Verification steps:
- Confirm the website is described as a learning product
- Confirm the Flutter app boundary is explicit
- Confirm documentation files exist

Documentation updates:
- Record foundation work in `PROJECT_LOG.md`
- Add foundation entry to `CHANGELOG.md`

Commit recommendation:
- `docs: define website learning product scope`

Status: Completed on 2026-07-31. `README.md` was rewritten to describe the learning product; it previously still described a download and marketing site.

## Milestone 2 - Next.js Learning Platform Bootstrap

Objective: Create the technical foundation for a fast, typed, maintainable learning website.

Scope:
- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- npm scripts

Constraints:
- Use strict TypeScript
- Prefer server components for static learning content
- Add client-side JavaScript only for interactive practice features

Deliverables:
- `app/`
- `components/`
- `lib/`
- `types/`
- `styles/`
- project configuration files

Verification steps:
- Run `npm run typecheck`
- Run `npm run lint`
- Run `npm run build`

Documentation updates:
- Add local development commands to `README.md`

Commit recommendation:
- `chore: bootstrap learning website`

Status: Completed on 2026-07-31. Verified with `npm run typecheck`, `npm run lint`, and `npm run build`.

## Milestone 3 - Learning Design System

Objective: Build a calm visual system that supports reading, memorization, writing practice, and long study sessions.

Scope:
- Color tokens
- Typography
- Lesson card styles
- Practice panel styles
- Feedback states
- Accessibility foundations

Constraints:
- Prioritize readability
- Avoid distracting animations
- Keep Japanese characters large and clear
- Maintain strong contrast

Deliverables:
- `styles/design-system.css`
- Tailwind theme extensions
- reusable layout patterns

Verification steps:
- Confirm large kana and kanji render clearly
- Confirm mobile reading comfort
- Confirm focus states are visible

Documentation updates:
- Record visual-system decisions in `PROJECT_LOG.md`

Commit recommendation:
- `style: add learning-focused design system`

Status: Completed on 2026-07-31. Added a `--font-jp` token, a `.jp` text class, and `.kana-chip` / `.track-card` / `.planned-card` / `.tag` patterns. Japanese text uses the reader's system gothic font rather than a bundled CJK webfont; revisit once lesson content shows which glyphs are actually needed.

## Milestone 4 - Site Shell And Learning Navigation

Objective: Create navigation that puts learning first.

Scope:
- Header
- Footer
- Learn route
- Download route
- Features and support routes
- shared page components

Constraints:
- Learning must be visible from the main navigation
- Downloads support the learning product but should not replace it
- Keep navigation simple on mobile

Deliverables:
- `components/SiteHeader.tsx`
- `components/SiteFooter.tsx`
- `components/PageHero.tsx`
- `components/ButtonLink.tsx`
- `app/learn/page.tsx`

Verification steps:
- Confirm `/learn` is reachable from navigation
- Confirm homepage CTA starts learning
- Confirm routes work on mobile and desktop

Documentation updates:
- Record navigation changes in `PROJECT_LOG.md`

Commit recommendation:
- `feat: add learning-first navigation`

Status: Completed on 2026-07-31. The header's primary action is now "Start learning" rather than the APK button, which duplicated the Download nav link and made the site read as a download page. Download stays in the nav, footer, and homepage.

## Milestone 5 - Learning Homepage

Objective: Make the homepage immediately communicate that users can learn Japanese here.

Scope:
- First-viewport learning CTA
- Hiragana/Katakana/Kanji positioning
- practice and review summary
- offline app download as secondary path

Constraints:
- The first CTA should start learning
- Do not make the homepage only a product brochure
- Keep copy clear for beginners

Deliverables:
- `app/page.tsx`
- homepage learning sections

Verification steps:
- Confirm users understand they can learn Japanese on the website
- Confirm `Start learning` points to `/learn`
- Confirm download is present but secondary

Documentation updates:
- Update `CHANGELOG.md`

Commit recommendation:
- `feat: make homepage learning-first`

Status: Completed on 2026-07-31. The homepage leads with the three-script learning path and real kana; app capabilities moved into a clearly labelled Android app section. Website copy no longer claims app-only features such as handwriting scoring or offline use.

## Milestone 6 - Learning Content Model

Objective: Centralize lessons, characters, readings, examples, and practice metadata.

Scope:
- script tracks
- lesson groups
- character records
- romaji
- pronunciation hints
- meanings
- example words
- stroke metadata placeholders

Constraints:
- Keep data typed
- Avoid duplicated lesson content
- Do not copy private app internals unless intentionally exported as public website content

Deliverables:
- `lib/learning.ts`
- `types/learning.ts`
- initial Hiragana lesson data

Verification steps:
- Run typecheck
- Confirm lesson pages consume typed content
- Confirm lesson order is deterministic

Documentation updates:
- Record content model in `PROJECT_LOG.md`

Commit recommendation:
- `feat: add learning content model`

Status: Completed on 2026-07-31. `types/learning.ts` plus `lib/learning/` (one data file per script, with a shared index of lookup and practice helpers). `LearningCharacter` is a discriminated union on `kind`, so kana carry romaji and a pronunciation hint while kanji carry meaning, on'yomi, kun'yomi, and radical, without one wide type of optional fields. `StrokeMetadata` exists but is only populated for kanji stroke counts; stroke-order data is Milestone 11.

## Milestone 7 - Hiragana Lesson Pages

Objective: Teach Hiragana as the first full website learning module.

Scope:
- Hiragana overview
- lesson list
- character detail cards
- readings
- example words
- beginner explanations

Constraints:
- Keep lessons beginner-friendly
- Do not overwhelm users with too much grammar
- Use large readable Japanese characters

Deliverables:
- `app/learn/hiragana/page.tsx`
- `app/learn/hiragana/[lesson]/page.tsx`
- Hiragana data

Verification steps:
- Confirm all lesson links work
- Confirm characters render correctly
- Confirm mobile layout is readable

Documentation updates:
- Update `CHANGELOG.md`

Commit recommendation:
- `feat: add hiragana lessons`

Status: Completed on 2026-07-31. Five lessons, 25 characters, statically generated at `/learn/hiragana` and `/learn/hiragana/[lesson]`. Covers the vowels and the K, S, T, and N rows. The irregular readings (し, ち, つ) and the ぬ/ね shape confusion are called out explicitly.

## Milestone 8 - Katakana Lesson Pages

Objective: Add Katakana after Hiragana using the same reusable lesson system.

Scope:
- Katakana overview
- lesson list
- character cards
- readings
- example loanwords

Constraints:
- Reuse the lesson architecture from Hiragana
- Avoid duplicating UI code
- Keep progression clearly after Hiragana

Deliverables:
- `app/learn/katakana/page.tsx`
- `app/learn/katakana/[lesson]/page.tsx`
- Katakana data

Verification steps:
- Confirm shared lesson components work for both scripts
- Confirm route generation works
- Run typecheck and build

Documentation updates:
- Record reuse decisions in `PROJECT_LOG.md`

Commit recommendation:
- `feat: add katakana lessons`

Status: Completed on 2026-07-31. Five lessons, 25 characters, at `/learn/katakana` and `/learn/katakana/[lesson]`. Reuses `ScriptOverview` and `LessonView` unchanged — the only additions were the data file and two route wrappers. Examples are real loanwords, since that is what Katakana is actually used for, and the シ/ツ and ソ/ン confusions are flagged.

## Milestone 9 - Kanji Foundation Lessons

Objective: Introduce beginner Kanji through meaning, readings, radicals, and examples.

Scope:
- Kanji overview
- beginner Kanji groups
- meanings
- onyomi and kunyomi
- radicals
- examples

Constraints:
- Do not overload beginners
- Keep Kanji explanations short and useful
- Reuse lesson layout where possible

Deliverables:
- `app/learn/kanji/page.tsx`
- `app/learn/kanji/[lesson]/page.tsx`
- starter Kanji data

Verification steps:
- Confirm Kanji metadata renders correctly
- Confirm Japanese text is accessible and readable
- Confirm lesson order is clear

Documentation updates:
- Add Kanji milestone progress to `PROJECT_LOG.md`

Commit recommendation:
- `feat: add kanji foundation lessons`

Status: Completed on 2026-07-31. Five groups of five — numbers, people, days, nature, school — at `/learn/kanji` and `/learn/kanji/[lesson]`. Each character shows meaning, on'yomi, kun'yomi, radical, stroke count, a one-sentence note, and two example words. The groups are chosen so their characters combine into words a beginner meets immediately (学校, 先生, 学生, 日本). No grammar is introduced.

## Milestone 10 - Practice Mode Foundation

Objective: Add interactive web practice for recognition and recall.

Scope:
- client practice component
- question generation
- answer states
- result feedback
- restart flow

Constraints:
- Keep client-side JavaScript focused and small
- Use typed data from the learning model
- Make practice usable with keyboard and touch

Deliverables:
- `app/practice/page.tsx`
- `components/practice/`
- recognition practice mode

Verification steps:
- Confirm questions advance correctly
- Confirm keyboard interaction works
- Confirm no hydration errors

Documentation updates:
- Update `CHANGELOG.md`

Commit recommendation:
- `feat: add recognition practice mode`

Status: Completed on 2026-07-31. `/practice` with a single client component (2.2 kB). Ten questions per session, four options each, instant feedback, session summary, and restart. Number keys pick an answer and Enter advances; focus moves to the continue button after each answer. Questions are built when the learner picks a set rather than during render, so the shuffle never differs between server and client. Prompts derive from the same lesson data the pages render, so practice cannot drift from what the site teaches.

## Milestone 11 - Writing Practice Foundation

Objective: Bring the app's writing-first learning spirit to the web.

Scope:
- writing canvas
- stroke-order guidance placeholder
- tracing state
- reset and clear actions
- simple completion feedback

Constraints:
- Keep first version simple
- Do not claim app-level handwriting scoring until implemented
- Support touch and pointer input

Deliverables:
- `app/practice/writing/page.tsx`
- `components/practice/WritingCanvas.tsx`

Verification steps:
- Test mouse and touch drawing
- Confirm reset works
- Confirm layout does not shift on mobile

Documentation updates:
- Record limitations clearly

Commit recommendation:
- `feat: add web writing practice foundation`

Status: Completed on 2026-07-31. `/practice/writing` with a pointer-events canvas, so mouse, touch, and stylus all work from one code path. Includes a hideable guide character, clear, and next/previous. The backing store is scaled to the device pixel ratio and the stage is fluid, so it fits a 375px screen.

No stroke scoring and no stroke-order validation. Stroke-order data has not been authored, so the guide shows the finished character rather than a stroke sequence, and the page says so plainly. Strokes are never read, saved, or transmitted.

## Milestone 12 - Review Mode

Objective: Add review sessions so learners can revisit characters.

Scope:
- review queue model
- due/weak item placeholders
- session summary
- lightweight local state

Constraints:
- Do not overbuild spaced repetition before storage is ready
- Keep review behavior explainable
- Avoid storing sensitive data

Deliverables:
- `app/review/page.tsx`
- review utilities

Verification steps:
- Confirm review session can start and finish
- Confirm empty states are useful
- Confirm local state is optional and safe

Documentation updates:
- Update `PROJECT_LOG.md`

Commit recommendation:
- `feat: add review mode foundation`

Status: Completed on 2026-07-31. `/review` with four sets, including an "All kana" set that mixes Hiragana and Katakana so あ and ア appear in the same round. Sets stay homogeneous in answer type — mixing kana and kanji would offer romaji and English meanings as alternatives to one question, which tests nothing.

This is a review foundation, not spaced repetition. There is no per-character history, so nothing is scheduled by how well it was known last time; questions are drawn at random. The page states this.

The quiz loop was extracted into `QuizRunner` and `quizSession.ts`, so review and recognition practice share one implementation rather than duplicating it.

## Milestone 13 - Progress Tracking

Objective: Let learners see what they have studied on the website.

Scope:
- local progress storage
- completed lessons
- practice counts
- weak item indicators
- reset data control

Constraints:
- Keep progress local by default
- Make privacy behavior clear
- Do not require accounts

Deliverables:
- `app/progress/page.tsx`
- local storage helpers
- progress UI

Verification steps:
- Confirm progress persists locally
- Confirm reset works
- Confirm private browsing failure states are handled

Documentation updates:
- Update privacy notes

Commit recommendation:
- `feat: add local progress tracking`

Status: Completed on 2026-07-31. `/progress` backed by `lib/progress.ts`, storing counts in localStorage under `yugjapanese.progress.v1`. Tracks practice sessions, review sessions, characters traced, best score, last script, and last studied date. No individual answers, no identifiers, no account, no server.

Read after mount rather than during render, since localStorage does not exist on the server and touching it while rendering would cause a hydration mismatch. Every access is wrapped: blocked storage shows an explanatory state instead of failing, and corrupt or wrong-typed stored values are normalised rather than thrown on. Reset asks for confirmation and removes the key outright.

`app/privacy/page.tsx` was rewritten to describe this behaviour. It previously carried placeholder text, including a note to add legal language before production, which was rendering publicly.

## Milestone 14 - Audio And Pronunciation

Objective: Support pronunciation practice on the website.

Scope:
- audio asset strategy
- playback controls
- pronunciation fields
- fallback states

Constraints:
- Use licensed or self-owned audio only
- Optimize audio file sizes
- Do not block lessons if audio is unavailable

Deliverables:
- audio asset guidelines
- playback component
- pronunciation integration

Verification steps:
- Confirm audio plays on desktop and mobile
- Confirm controls are keyboard accessible
- Confirm missing audio states are clear

Documentation updates:
- Record audio source and licensing decisions

Commit recommendation:
- `feat: add pronunciation playback`

Status: Architecture completed on 2026-07-31; no audio exists. `public/` contains no audio files and none have been recorded or licensed, so `audioManifest` in `lib/learning/audio.ts` is deliberately empty and every lookup returns undefined.

`PronunciationCue` is a server component that renders written guidance ("Say it as a") when no recording exists, and only mounts the `AudioButton` client component once a clip is available. Because the manifest is empty, lesson pages currently ship zero audio-related JavaScript and render no `<audio>` elements — verified in the browser. `AudioButton` fails quietly on a missing file or a rejected `play()`.

Reworked on 2026-07-31 to resolve by sound rather than character, since あ and ア are the same mora — 25 clips cover all 50 kana taught. `RECORDING.md` holds the checklist, generated from the lesson data.

Options investigated and rejected: audio from learn-japanese-adventure.com is All Rights Reserved and its terms prohibit reproduction, permanent storage, and retransmission; `gTTS` scrapes Google Translate against its terms. Local synthesis is not possible either — this machine has only English voices installed, no ffmpeg, and no espeak. That same finding weakens the Web Speech API as a fallback: a stock English-locale Windows install has no `ja-JP` voice, so many visitors would get silence.

To finish properly: record 25 morae with a fluent speaker, or generate them with a permissively licensed engine such as VOICEVOX (free for commercial use, requires crediting the voice library). Until a sound is listed in `RECORDED_SOUNDS`, no playback is claimed anywhere in the UI.

## Milestone 15 - Search And Mini Dictionary

Objective: Let users quickly find characters, readings, and meanings.

Scope:
- search page
- indexed learning content
- favorites placeholder
- history placeholder

Constraints:
- Keep search fast and local
- Do not require a backend
- Avoid heavy search dependencies unless needed

Deliverables:
- `app/search/page.tsx`
- search utilities
- result cards

Verification steps:
- Confirm kana, romaji, and meaning searches work
- Confirm no-results state is helpful
- Confirm mobile input is usable

Documentation updates:
- Update `CHANGELOG.md`

Commit recommendation:
- `feat: add website search`

Status: Completed on 2026-07-31. `/search` over an index built at module load from the same lesson data the pages render, so results can never drift from what the site teaches. Matches characters, romaji, meanings, on'yomi and kun'yomi, radicals, script and lesson names, and example words by written form, reading, romaji, and English meaning — "cat" finds こ and ね through ねこ.

Results are ranked: exact character, then exact primary meaning, then prefix, then substring, so "a" surfaces あ and ア above "rain". Seventy-five entries means plain string matching needs no debounce and no search dependency. No backend.

Favorites and history from the milestone scope are not built. Both imply stored per-user state and belong with progress work rather than here.

## Milestone 16 - Learning Analytics

Objective: Give learners simple insight into their practice.

Scope:
- completed lessons
- practice accuracy
- weak areas
- streak summary
- lightweight charts or lists

Constraints:
- Keep analytics local
- Avoid misleading metrics
- Prefer simple explanations over complex charts

Deliverables:
- analytics utilities
- progress insights UI

Verification steps:
- Confirm metrics match stored progress
- Confirm empty states are clear
- Confirm calculations are documented

Documentation updates:
- Record metric definitions

Commit recommendation:
- `feat: add learning insights`

Status: Planned.

## Milestone 17 - User Documentation

Objective: Explain how to learn with the website and when to use the APK.

Scope:
- docs landing page
- study guide
- install guide
- troubleshooting
- offline learning explanation

Constraints:
- Keep docs beginner-friendly
- Separate web learning docs from app install docs
- Keep claims accurate

Deliverables:
- `app/docs/page.tsx`
- documentation content

Verification steps:
- Confirm docs are linked
- Confirm instructions are accurate
- Confirm docs are readable on mobile

Documentation updates:
- Update `README.md`

Commit recommendation:
- `feat: add learning documentation`

Status: Planned.

## Milestone 18 - APK Download Support

Objective: Support offline learning through official APK downloads.

Scope:
- download page
- install instructions
- versioned APK naming
- checksum display
- release note pairing

Constraints:
- Do not claim an APK exists until the file is present
- Do not store signing material
- Keep web learning as the primary website purpose

Deliverables:
- `app/download/page.tsx`
- `public/downloads/`
- release manifest

Verification steps:
- Confirm APK link works
- Confirm checksum matches
- Confirm install guidance is accurate

Documentation updates:
- Add APK publishing steps

Commit recommendation:
- `feat: add apk download workflow`

Status: Initial page completed. APK asset workflow planned.

## Milestone 19 - Public Changelog

Objective: Publish clear notes for website learning features and APK releases.

Scope:
- changelog page
- learning-feature releases
- APK release notes
- version/date structure

Constraints:
- Separate website feature changes from app releases
- Do not fabricate versions
- Keep dates accurate

Deliverables:
- `app/changelog/page.tsx`
- structured release data

Verification steps:
- Confirm latest notes appear first
- Confirm notes are readable
- Confirm links are correct

Documentation updates:
- Update `CHANGELOG.md`

Commit recommendation:
- `feat: add public changelog`

Status: Initial version completed.

## Milestone 20 - SEO For Learning Content

Objective: Make lessons, practice pages, and docs discoverable.

Scope:
- metadata
- sitemap
- robots
- lesson page titles
- structured descriptions

Constraints:
- Avoid keyword stuffing
- Keep titles useful for learners
- Use accurate canonical URLs

Deliverables:
- page metadata
- `app/sitemap.ts`
- `app/robots.ts`

Verification steps:
- Run production build
- Inspect sitemap routes
- Confirm learning pages have metadata

Documentation updates:
- Record SEO decisions

Commit recommendation:
- `feat: add learning seo foundation`

Status: Partially completed.

## Milestone 21 - Accessibility Audit

Objective: Make learning usable with keyboard, screen readers, touch, and zoom.

Scope:
- heading order
- focus states
- semantic lesson cards
- accessible practice controls
- reduced motion
- contrast

Constraints:
- Japanese characters must be readable
- Practice controls must not require a mouse only
- Keep feedback accessible

Deliverables:
- accessibility fixes
- checklist

Verification steps:
- Keyboard navigation pass
- mobile zoom review
- Lighthouse accessibility check

Documentation updates:
- Add accessibility checklist

Commit recommendation:
- `fix: improve learning accessibility`

Status: Planned.

## Milestone 22 - Performance Optimization

Objective: Keep lessons and practice fast on mobile.

Scope:
- static rendering
- image optimization
- bundle review
- practice component splitting
- asset loading

Constraints:
- Keep first-load JavaScript low
- Do not add heavy dependencies unnecessarily
- Lazy-load interactive modules where useful

Deliverables:
- optimized pages
- performance notes

Verification steps:
- Run production build
- Review first-load JavaScript
- Run Lighthouse where available

Documentation updates:
- Record performance results

Commit recommendation:
- `perf: optimize learning website`

Status: Planned.

## Milestone 23 - Responsive Learning Polish

Objective: Make lessons and practice comfortable on phones, tablets, and desktop.

Scope:
- lesson grids
- character cards
- writing canvas layout
- quiz controls
- navigation

Constraints:
- No overlapping text
- No viewport-scaled font sizes
- Touch targets must be comfortable

Deliverables:
- responsive CSS refinements
- mobile QA notes

Verification steps:
- Test common mobile widths
- Test tablet layout
- Confirm writing/practice controls fit

Documentation updates:
- Record responsive QA

Commit recommendation:
- `style: polish responsive learning flows`

Status: Planned.

## Milestone 24 - Visual Asset System

Objective: Use accurate learning visuals, screenshots, and brand assets.

Scope:
- lesson visuals
- final screenshots
- social preview image
- icons
- asset naming rules

Constraints:
- Use real app screenshots when possible
- Avoid misleading mockups
- Optimize all assets

Deliverables:
- organized `public/` assets
- final Open Graph image
- screenshot gallery

Verification steps:
- Confirm file sizes
- Confirm alt text
- Confirm images render clearly

Documentation updates:
- Add asset guidelines

Commit recommendation:
- `assets: add learning website visuals`

Status: Planned.

## Milestone 25 - Privacy-Safe Local Learning Data

Objective: Keep web learning progress private and understandable.

Scope:
- local storage policy
- reset progress
- privacy copy
- no-account flow

Constraints:
- Do not collect learner data by default
- Do not add trackers without explicit decision
- Clearly explain local progress behavior

Deliverables:
- privacy updates
- local-data controls

Verification steps:
- Confirm progress reset removes local data
- Confirm privacy page matches implementation

Documentation updates:
- Update privacy policy notes

Commit recommendation:
- `feat: add privacy-safe progress controls`

Status: Planned.

## Milestone 26 - GitHub And CI

Objective: Prepare the website repository for reliable development.

Scope:
- GitHub repository
- CI workflow
- typecheck
- lint
- build
- Dependabot

Constraints:
- Keep website repo separate from app repo
- Avoid committing generated files or secrets
- Verify every dependency update

Deliverables:
- `.github/workflows/website_ci.yml`
- Dependabot config
- repository workflow notes

Verification steps:
- Confirm CI runs on pull requests
- Confirm CI fails on broken builds
- Confirm dependency PRs are manageable

Documentation updates:
- Add CI notes to `README.md`

Commit recommendation:
- `ci: add website verification workflow`

Status: Planned.

## Milestone 27 - Vercel Deployment

Objective: Deploy the learning website with stable production and preview environments.

Scope:
- Vercel project
- production deployment
- preview deployments
- domain configuration
- environment settings

Constraints:
- Keep builds reproducible
- Do not store secrets in source control
- Confirm production domain before public release

Deliverables:
- live website
- preview deployment workflow
- deployment notes

Verification steps:
- Confirm production URL loads
- Confirm learning pages load
- Confirm sitemap and robots are reachable

Documentation updates:
- Add deployment steps

Commit recommendation:
- `deploy: configure vercel learning website`

Status: Planned.

## Milestone 28 - Release Candidate Validation

Objective: Validate the learning website before launch.

Scope:
- lesson routes
- practice routes
- download route
- SEO
- accessibility
- performance
- content accuracy

Constraints:
- Do not mark ready with placeholder core learning content
- Document known issues
- Verify primary learning flow manually

Deliverables:
- release-candidate checklist
- bug list
- final launch notes

Verification steps:
- Run `npm run typecheck`
- Run `npm run lint`
- Run `npm run build`
- Test Start Learning flow
- Test lesson and practice pages

Documentation updates:
- Add RC notes to `PROJECT_LOG.md`

Commit recommendation:
- `chore: validate website release candidate`

Status: Planned.

## Milestone 29 - Website v1.0.0 Launch

Objective: Launch the first stable version of the YugJapanese learning website.

Scope:
- production deployment
- learning routes
- docs
- download support
- release notes
- social preview

Constraints:
- Do not launch with placeholder learning content as final
- Confirm primary learning flow works
- Keep app claims accurate

Deliverables:
- production website
- v1.0.0 website release notes
- optional tagged GitHub release

Verification steps:
- Confirm production URL
- Confirm `/learn` flow
- Confirm core lessons
- Confirm download behavior
- Confirm metadata and sitemap

Documentation updates:
- Update `CHANGELOG.md`
- Update `PROJECT_LOG.md`

Commit recommendation:
- `release: publish website v1.0.0`

Status: Planned.

## Milestone 30 - Ongoing Learning Website Maintenance

Objective: Keep the website accurate, useful, fast, and aligned with the app's learning purpose.

Scope:
- lesson updates
- practice improvements
- content corrections
- dependency updates
- accessibility checks
- performance checks
- release notes

Constraints:
- Do not let website lessons drift away from app behavior
- Keep public claims accurate
- Avoid broad rewrites without a milestone

Deliverables:
- maintenance checklist
- recurring review notes
- focused improvements

Verification steps:
- Run full verification for code changes
- Review public learning pages after content changes
- Confirm release notes stay current

Documentation updates:
- Keep `PROJECT_LOG.md`, `CHANGELOG.md`, and `ROADMAP.md` current

Commit recommendation:
- `chore: maintain learning website`

Status: Planned.
