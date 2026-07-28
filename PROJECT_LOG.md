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
