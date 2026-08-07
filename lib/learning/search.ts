import type { SearchEntry } from "@/types/learning";
import { scriptTracks } from "./index";

/**
 * A flat index over every character the site teaches, built at module load from
 * the same lesson data the pages render. Seventy-five entries is small enough
 * that plain string matching is instant and no search dependency is warranted.
 */
export const searchIndex: SearchEntry[] = scriptTracks.flatMap((track) =>
  track.lessons.flatMap((lesson) =>
    lesson.characters.map((character): SearchEntry => {
      const primary =
        character.kind === "kana" ? character.romaji : character.meaning;

      const secondary =
        character.kind === "kana"
          ? character.pronunciation
          : [
              character.onyomi.length > 0 ? `On: ${character.onyomi.join("、")}` : "",
              character.kunyomi.length > 0 ? `Kun: ${character.kunyomi.join("、")}` : "",
            ]
              .filter(Boolean)
              .join("  ");

      const terms = [
        character.character,
        primary,
        track.title,
        track.japaneseTitle,
        lesson.title,
        ...(character.kind === "kana"
          ? [character.pronunciation]
          : [...character.onyomi, ...character.kunyomi, character.radical ?? ""]),
        // Example words are searchable by their written form, reading, romaji,
        // and English meaning, so "cat" and "neko" both find ね and こ.
        ...character.examples.flatMap((example) => [
          example.word,
          example.reading,
          example.romaji,
          example.meaning,
        ]),
      ]
        .filter(Boolean)
        .map((term) => term.toLowerCase());

      return {
        id: `${track.id}-${character.character}`,
        character: character.character,
        kind: character.kind,
        scriptId: track.id,
        scriptTitle: track.title,
        lessonSlug: lesson.slug,
        lessonTitle: lesson.title,
        primary,
        secondary,
        href: `/learn/${track.id}/${lesson.slug}`,
        terms,
      };
    }),
  ),
);

/**
 * Ranked search. Exact character matches come first, then prefix matches on any
 * term, then substring matches, so typing "a" surfaces あ and ア before "rain".
 */
export function searchCharacters(query: string, limit = 40): SearchEntry[] {
  const needle = query.trim().toLowerCase();
  if (needle === "") return [];

  const scored: { entry: SearchEntry; score: number }[] = [];

  for (const entry of searchIndex) {
    let score = 0;

    if (entry.character === query.trim()) {
      score = 4;
    } else if (entry.primary.toLowerCase() === needle) {
      score = 3;
    } else if (entry.terms.some((term) => term.startsWith(needle))) {
      score = 2;
    } else if (entry.terms.some((term) => term.includes(needle))) {
      score = 1;
    }

    if (score > 0) {
      scored.push({ entry, score });
    }
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((result) => result.entry);
}
