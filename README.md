# YugJapanese Website

A learning-first Japanese website, built as a standalone product separate from the Flutter application.

The website exists to teach Japanese on the web, following the same educational direction as the app: Hiragana first, then Katakana, then Kanji, with practice, review, and progress. APK downloads and marketing pages support that goal rather than replacing it.

## Purpose

- Help users learn Japanese directly in the browser
- Teach Hiragana, Katakana, and Kanji in a structured order
- Provide web-based practice, review, and progress experiences
- Provide APK downloads for the offline Android app
- Publish release notes and changelog updates
- Host official documentation
- Improve SEO and discoverability
- Strengthen the YugJapanese brand

## Website vs. app

The website and the Android app are separate implementations at different stages. Website copy must never claim an app-only capability as its own.

| | Website | Android app |
| --- | --- | --- |
| Learning path for all three scripts | Yes | Yes |
| Lessons, recognition practice, review, search | Yes | Yes |
| Writing practice | Tracing only, no scoring | Stroke accuracy scoring |
| Spaced repetition | No — random review | Yes |
| Pronunciation audio | No recordings yet | Yes |
| Progress tracking | Local counts only | Full analytics |
| Works with no connection | No | Yes |
| Account required | No | No |

## Local data

The website stores learning progress in the browser under `yugjapanese.progress.v1`: session counts, characters traced, best score, last script, and last studied date. No individual answers, no identifiers, no account, no server. `lib/progress.ts` wraps every access, because localStorage throws in private browsing, and normalises corrupt values rather than trusting stored JSON. The Progress page can delete it. `app/privacy/page.tsx` must be kept in step with any change here.

## Audio

`public/` contains no audio. `RECORDED_SOUNDS` in `lib/learning/audio.ts` is empty, so `PronunciationCue` renders written guidance and no playback is claimed anywhere.

Audio resolves by **sound, not character** — あ and ア are the same mora, so `a.mp3` serves both. Twenty-five clips cover all 50 kana the site teaches. Kanji are excluded: 日 has several readings, so no single clip represents it.

See [RECORDING.md](RECORDING.md) for the checklist and process. To enable a sound, drop `<sound>.mp3` into `public/audio/kana/` and add its name to `RECORDED_SOUNDS`; controls appear automatically, and sounds not listed keep showing written guidance.

Only self-owned or appropriately licensed recordings may be added. Audio from another website cannot be used here — a working download link is not a licence, and storing the file locally does not change its ownership. This applies to the app repository too, where bundling third-party audio into a published APK distributes it at scale.

`webFeatures` in `lib/site.ts` describes the website, `appFeatures` describes the app, and `plannedPractice` covers work that is not shipped anywhere on the web yet. Keep them separate.

## Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- npm
- Vercel

## Principles

- Modern, clean, elegant, and fast
- Japanese-inspired minimal design
- Accessible and responsive
- Semantic HTML first
- Small, reusable React components
- Minimal client-side JavaScript
- Strict TypeScript

## Pages

Live:

- Home
- Learn, plus per-script overviews and 15 lesson pages
- Practice (recognition) and Practice / Writing
- Review
- Progress
- Search
- Download
- Features
- Screenshots
- FAQ
- Privacy Policy
- Credits
- Changelog
- Contact

Planned (Milestone 16 onward):

- Learning analytics
- User documentation
- Blog and public roadmap

## Documentation

- `PROJECT_CONTEXT.md`
- `WEBSITE_MILESTONES.md` — the authoritative milestone plan
- `PROJECT_LOG.md`
- `CHANGELOG.md`
- `ROADMAP.md`
- `LICENSE`

## Working Rule

This repository is for the website only. It must never modify the Flutter application itself.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Verify production readiness:

```bash
npm run typecheck
npm run lint
npm run build
```
