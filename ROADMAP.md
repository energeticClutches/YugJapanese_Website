# Roadmap

`WEBSITE_MILESTONES.md` is the authoritative milestone plan for this website. It carries the objective, scope, constraints, deliverables, verification steps, documentation updates, commit recommendation, and status for each of the 30 milestones.

This file previously kept a second, separate milestone list written when the website was scoped as a download and marketing site. That list numbered its milestones differently from `WEBSITE_MILESTONES.md`, so the two disagreed about what a given milestone number meant. It has been removed rather than maintained in parallel.

## Current position

Completed:

- Milestone 1 — Website Learning Product Foundation
- Milestone 2 — Next.js Learning Platform Bootstrap
- Milestone 3 — Learning Design System
- Milestone 4 — Site Shell And Learning Navigation
- Milestone 5 — Learning Homepage
- Milestone 6 — Learning Content Model
- Milestone 7 — Hiragana Lesson Pages
- Milestone 8 — Katakana Lesson Pages
- Milestone 9 — Kanji Foundation Lessons
- Milestone 10 — Practice Mode Foundation
- Milestone 11 — Writing Practice Foundation
- Milestone 12 — Review Mode
- Milestone 13 — Progress Tracking
- Milestone 14 — Audio And Pronunciation (architecture only — no audio exists)
- Milestone 15 — Search And Mini Dictionary

Next:

- Milestone 16 — Learning Analytics

## Known gaps

- Lesson coverage is partial. Each script has five lessons: Hiragana and Katakana cover the vowels and the K, S, T, and N rows only, which is 25 of the 46 basic kana. Dakuten, handakuten, combination sounds, and ん are not taught. Kanji covers 25 characters.
- No pronunciation audio exists. `public/` contains no audio files and none have been recorded or licensed, so `audioManifest` is empty and lesson cards show written guidance only. The playback path is built and will activate as soon as clips are registered.
- Stroke-order data is not authored. `StrokeMetadata` holds kanji stroke counts only, and the `note` field is unused. Writing practice therefore shows the finished character as a tracing guide and performs no stroke scoring or stroke-order checking.
- Review is not spaced repetition. There is no per-character history, so questions are drawn at random rather than scheduled by how well a character was known last time.
- Practice and review draw from a whole script or set at a time. There is no per-lesson practice, though `PracticePrompt` carries `lessonSlug` for it.
- Search has no favorites or history, both of which appear in the Milestone 15 scope. They imply stored per-user state and belong with progress work.
- Progress is per-browser. It does not sync across devices, and clearing browser data removes it.
- The Download page has no APK asset. The download link points at `public/downloads/yugjapanese-latest.apk`, which does not exist.
- The Privacy Policy now describes real behaviour, but it has not been reviewed by anyone qualified to review legal text.
