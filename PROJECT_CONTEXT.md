# YugJapanese Website Project Context

## Project Name
YugJapanese Website

## Project Description
This project is dedicated exclusively to the development, deployment, and maintenance of the official YugJapanese learning website.

The website is a standalone web learning product separate from the Flutter application.

It should help users learn Japanese directly on the web, following the same educational direction as the app: Hiragana first, then Katakana, then Kanji, with practice, review, progress, and clear guidance.

Its primary goals are:

- Help users learn Japanese through the website.
- Provide web-based lessons and practice flows.
- Mirror the app's learning purpose and structure where appropriate.
- Provide APK downloads.
- Display release notes.
- Explain features.
- Host documentation.
- Improve SEO.
- Build the YugJapanese brand.

The website must never modify the Flutter application itself.

All Flutter development belongs in the YugJapanese application project.

The website repository is separate from the application repository.

## Tech Stack
Framework:
- Next.js (App Router)

Language:
- TypeScript

Styling:
- Tailwind CSS

Deployment:
- Vercel

Repository:
- GitHub

Package Manager:
- npm

Hosting:
- Vercel

Target Browsers:
- Modern desktop and mobile browsers

SEO:
- Next.js Metadata API
- Open Graph
- Twitter Cards
- Sitemap

## Design Philosophy
The website should be modern, clean, elegant, and fast.

The visual style should reflect Japanese aesthetics:

- Minimal
- Spacious
- Calm
- Accessible
- Responsive
- Professional

Avoid unnecessary animations.

Favor readability over flashy effects.

Prioritize performance and accessibility.

Use semantic HTML wherever possible.

## Primary Pages
- Home
- Learn
- Lessons
- Practice
- Review
- Progress
- Download
- Features
- Screenshots
- FAQ
- Privacy Policy
- Credits
- Changelog
- Contact

## Future Pages
- Blog
- Roadmap
- Documentation
- Developer Notes
- Press Kit
- Media Kit
- Support
- Community

## Website Goals
1. Help users start learning Japanese directly from the website.
2. Teach Hiragana, Katakana, and Kanji in a structured order.
3. Provide web-based practice, review, and progress experiences.
4. Explain why YugJapanese is different.
5. Allow users to download the latest APK.
6. Help users install the application.
7. Host official documentation.
8. Improve discoverability through search engines.
9. Serve as the official home of YugJapanese.

## Development Rules
- Maintain clean architecture.
- Use reusable React components.
- Prefer server components when appropriate.
- Minimize client-side JavaScript.
- Avoid unnecessary dependencies.
- Optimize images.
- Follow accessibility best practices.
- Use TypeScript strictly.
- Keep components small and modular.

## Coding Standards
Use:

- TypeScript
- ESLint
- Prettier
- Strict typing
- Meaningful component names
- Clear folder organization
- Reusable UI components
- No duplicated code

## Performance Goals
- Fast initial page load.
- Excellent Lighthouse scores.
- SEO optimized.
- Responsive on all devices.
- Minimal bundle size.
- Lazy-load images where appropriate.

## Deployment Goals
- Every push to main should automatically deploy through Vercel.
- Preview deployments should be available for pull requests.
- Production deployments should be stable and reproducible.

## Repository Structure
- `app/`
- `components/`
- `public/`
- `styles/`
- `lib/`
- `hooks/`
- `types/`

## Documentation
Maintain:

- `README.md`
- `PROJECT_LOG.md`
- `CHANGELOG.md`
- `ROADMAP.md`
- `LICENSE`

## Milestone Workflow
Every task should follow a milestone-based workflow.

Each milestone should include:

- Objective
- Scope
- Constraints
- Deliverables
- Verification steps
- Documentation updates
- Commit recommendations

No milestone should modify unrelated functionality.

## Assistant Behavior
Act as a senior software engineer and technical architect.

Prefer maintainable solutions over quick fixes.

Explain architectural decisions.

Preserve project consistency.

Recommend best practices when appropriate.

Verify changes before declaring success.

Never fabricate successful builds or deployments.

When uncertain, investigate first before making assumptions.

## Brand Guidelines
Brand Name:
YugJapanese

Mission:
Make learning Japanese accessible through a beautiful, offline-first experience.

Core Values:
- Simplicity
- Privacy
- Offline-first
- High-quality learning
- No ads
- No subscriptions
- User-focused design

Tone:
Friendly, professional, encouraging, and educational.

Visual Identity:
Modern minimalism inspired by Japanese aesthetics with clean typography, generous whitespace, and subtle accent colors.
