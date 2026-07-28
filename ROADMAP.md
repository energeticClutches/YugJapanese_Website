# Roadmap

## Milestone 1: Project Foundation

### Objective

Set up the website's documentation, architecture rules, and brand direction.

### Scope

- Project context
- Brand guidelines
- Documentation baseline
- Folder structure planning

### Constraints

- Do not change the Flutter application
- Keep the website repository separate
- Favor maintainable structure over quick fixes

### Deliverables

- Project context document
- README
- Project log
- Changelog
- Roadmap
- License

### Verification Steps

- Confirm the repository documents the project goals and rules clearly
- Confirm the website scope is separate from the Flutter app
- Confirm the stack and page priorities are recorded

### Documentation Updates

- Update `PROJECT_CONTEXT.md` when requirements change
- Record progress in `PROJECT_LOG.md`
- Note user-visible changes in `CHANGELOG.md`

### Commit Recommendations

- Use one commit per milestone
- Keep commits focused on a single theme
- Avoid unrelated cleanup in foundation commits

## Milestone 2: Site Shell

### Objective

Create the initial Next.js website shell and shared layout system.

### Scope

- App Router structure
- Shared layout
- Global metadata
- Core navigation
- Base styling system

### Constraints

- Minimize client-side JavaScript
- Use semantic HTML
- Keep bundle size small

### Deliverables

- Homepage shell
- Shared layout and navigation
- SEO metadata setup

### Verification Steps

- Confirm responsive rendering on desktop and mobile
- Confirm metadata is present
- Confirm the layout remains accessible and readable

### Documentation Updates

- Update `PROJECT_LOG.md`
- Add release notes to `CHANGELOG.md`

### Commit Recommendations

- Separate layout work from page content work
- Keep styling changes cohesive

### Status

Completed on 2026-07-28.

## Milestone 3: Core Content

### Objective

Ship the main user-facing pages for downloads, features, support, and trust.

### Scope

- Download page
- Features page
- Screenshots page
- FAQ
- Privacy Policy
- Credits
- Changelog
- Contact

### Constraints

- Keep content concise and useful
- Prioritize clarity and accessibility

### Deliverables

- Core marketing and support pages
- Download instructions
- Release information

### Verification Steps

- Confirm pages are reachable
- Confirm page copy matches the brand voice
- Confirm download and support information is clear

### Documentation Updates

- Update `PROJECT_LOG.md`
- Update `CHANGELOG.md`

### Commit Recommendations

- Group related pages together
- Keep copy and layout changes in reviewable chunks

### Status

Initial version completed on 2026-07-28.
