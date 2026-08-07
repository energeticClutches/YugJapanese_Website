# Changelog

All notable changes to this project will be documented in this file.

## Unreleased

- Established the initial project documentation baseline.
- Defined the YugJapanese website scope, brand guidelines, and implementation rules.
- Added the first Next.js website implementation.
- Added Home, Download, Features, Screenshots, FAQ, Privacy Policy, Credits, Changelog, and Contact pages.
- Added responsive premium styling, SEO metadata, sitemap, robots file, and a hero product visual.
- Added a complete 30-milestone website plan modeled after the YugJapanese app development workflow.
- Reframed the website as a learning-first Japanese study experience and added the initial Learn page.
- Added a footer link to every primary page, including Screenshots, which previously had no way to be reached from the site.
- Added a mobile navigation menu so all primary pages remain reachable on small screens.
- Loaded the Manrope typeface so the site's typography renders as designed instead of falling back to system fonts.
- Added a branded favicon and Apple touch icon.
- Rewrote the Features list to describe the app's actual capabilities: the Hiragana to Katakana to Kanji learning path, handwriting practice with stroke accuracy scoring, spaced repetition review, offline pronunciation audio, offline search and dictionary, practice and quiz modes, the progress dashboard, learning analytics, and streaks and achievements.
- Rewrote the FAQ around what users actually ask about the app: learning order, handwriting feedback, offline use, review practice, and progress tracking.
- Updated the homepage and Screenshots interface panels to describe real app features instead of placeholder copy.
- Updated the homepage statistics to reflect the app rather than the website's own page count.
- Rebuilt the homepage around the Hiragana, Katakana, and Kanji learning path, showing real characters from each script.
- Rewrote the Learn page to speak to learners instead of describing the project's own roadmap.
- Separated what the website does from what the Android app does, across the homepage, Features page, FAQ, and footer. The site no longer describes app-only capabilities such as handwriting scoring, offline use, or pronunciation audio as its own.
- Added an honest "in progress" section covering practice, writing, review, and progress tracking, which are not available on the web yet.
- Made "Start learning" the primary action in the site header, replacing the APK button that duplicated the Download link.
- Added Japanese typography to the design system so kana and kanji render clearly at large sizes.
- Added Hiragana lessons: five lessons covering the vowels and the K, S, T, and N rows, with romaji, pronunciation hints, and example words.
- Added Katakana lessons in the same structure, using real loanwords, with the characters learners most often confuse called out.
- Added beginner Kanji lessons in five groups — numbers, people, days, nature, and school — each character with its meaning, on'yomi and kun'yomi readings, radical, stroke count, and example words.
- Added recognition practice at `/practice`: pick a script, work through ten characters with instant feedback, and see a summary. Number keys pick an answer and Enter moves on.
- Added Practice to the site navigation and footer.
- Fixed the large character on lesson pages rendering at body-text size instead of display size.
- Added writing practice at `/practice/writing`: trace characters by hand with a mouse, finger, or stylus, with a guide you can hide. Strokes are not scored or saved.
- Added review at `/review`, including a set that mixes Hiragana and Katakana so the scripts stop being learned in isolation.
- Added `/progress`: counts of the sessions you have finished, stored only on your own device, with a reset control. No account and nothing sent anywhere.
- Added `/search`: look up any character by character, romaji, meaning, reading, or a word it appears in.
- Added written pronunciation guidance to every kana lesson card. Recorded audio is not available yet.
- Rewrote the Privacy Policy to describe what the site actually does, including the new local progress storage.
- Reordered the site navigation to lead with learning: Learn, Practice, Review, Search, Progress, and Download.
- Fixed several pages (Home, Learn, Practice, FAQ) that still described writing practice, review, and progress tracking as not yet built, after they had already shipped. Copy now accurately states what works on the website today versus what the Android app adds on top.
