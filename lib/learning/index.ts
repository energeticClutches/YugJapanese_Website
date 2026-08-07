import type {
  Lesson,
  LearningCharacter,
  PracticePool,
  PracticePrompt,
  ScriptId,
  ScriptTrack,
} from "@/types/learning";
import { hiragana } from "./hiragana";
import { katakana } from "./katakana";
import { kanji } from "./kanji";

/** Every script track, in the order they should be learned. */
export const scriptTracks: ScriptTrack[] = [hiragana, katakana, kanji].sort(
  (a, b) => a.order - b.order,
);

export function getTrack(id: ScriptId): ScriptTrack | undefined {
  return scriptTracks.find((track) => track.id === id);
}

/** Like `getTrack`, for callers that know the id is valid at build time. */
export function requireTrack(id: ScriptId): ScriptTrack {
  const track = getTrack(id);
  if (!track) {
    throw new Error(`Unknown script track: ${id}`);
  }
  return track;
}

export function getLesson(id: ScriptId, slug: string): Lesson | undefined {
  return getTrack(id)?.lessons.find((lesson) => lesson.slug === slug);
}

/** The track a learner should study after this one, if any. */
export function getNextTrack(id: ScriptId): ScriptTrack | undefined {
  const track = getTrack(id);
  if (!track) return undefined;
  return scriptTracks.find((candidate) => candidate.order === track.order + 1);
}

/**
 * The lessons either side of `slug` within a track, for prev/next navigation.
 * Both are undefined at the ends rather than wrapping around.
 */
export function getLessonNeighbours(id: ScriptId, slug: string) {
  const lessons = getTrack(id)?.lessons ?? [];
  const index = lessons.findIndex((lesson) => lesson.slug === slug);

  return {
    previous: index > 0 ? lessons[index - 1] : undefined,
    next: index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : undefined,
    position: index + 1,
    total: lessons.length,
  };
}

/** What a learner must recall for a character: the sound for kana, the meaning for kanji. */
export function getRecallAnswer(character: LearningCharacter): string {
  return character.kind === "kana" ? character.romaji : character.meaning;
}

export function countCharacters(track: ScriptTrack): number {
  return track.lessons.reduce((total, lesson) => total + lesson.characters.length, 0);
}

/** A few characters from the start of a track, for preview cards. */
export function getSampleCharacters(track: ScriptTrack, count = 5): string[] {
  return track.lessons
    .flatMap((lesson) => lesson.characters)
    .slice(0, count)
    .map((character) => character.character);
}

/**
 * Practice sets, one per script. Built from the same lesson data the pages
 * render, so practice can never drift from what the site actually teaches.
 */
/** Every prompt in a track, flattened. */
function promptsFor(id: ScriptId): PracticePrompt[] {
  const track = getTrack(id);
  if (!track) return [];

  return track.lessons.flatMap((lesson) =>
    lesson.characters.map(
      (character): PracticePrompt => ({
        character: character.character,
        answer: getRecallAnswer(character),
        scriptId: id,
        lessonSlug: lesson.slug,
      }),
    ),
  );
}

/**
 * Review sets deliberately mix lessons, and the kana set mixes both syllabaries
 * so ア and あ appear side by side.
 *
 * Sets stay homogeneous in answer type: mixing kana and kanji in one round
 * would offer romaji and English meanings as alternatives to the same question,
 * which tests nothing useful.
 */
export const reviewSets = [
  {
    id: "all-kana",
    label: "All kana",
    description: "Hiragana and Katakana mixed together",
    // Recorded under hiragana, the first script the set draws from.
    scriptId: "hiragana" as ScriptId,
    recall: "sound",
    prompts: [...promptsFor("hiragana"), ...promptsFor("katakana")],
  },
  {
    id: "hiragana",
    label: "Hiragana",
    description: "recall the sound",
    scriptId: "hiragana" as ScriptId,
    recall: "sound",
    prompts: promptsFor("hiragana"),
  },
  {
    id: "katakana",
    label: "Katakana",
    description: "recall the sound",
    scriptId: "katakana" as ScriptId,
    recall: "sound",
    prompts: promptsFor("katakana"),
  },
  {
    id: "kanji",
    label: "Kanji",
    description: "recall the meaning",
    scriptId: "kanji" as ScriptId,
    recall: "meaning",
    prompts: promptsFor("kanji"),
  },
];

export const practicePools: PracticePool[] = scriptTracks.map((track) => ({
  id: track.id,
  label: track.title,
  recall: track.id === "kanji" ? "meaning" : "sound",
  prompts: track.lessons.flatMap((lesson) =>
    lesson.characters.map(
      (character): PracticePrompt => ({
        character: character.character,
        answer: getRecallAnswer(character),
        scriptId: track.id,
        lessonSlug: lesson.slug,
      }),
    ),
  ),
}));
