/**
 * The learning content model.
 *
 * Kana and kanji are genuinely different shapes of data — kana map a symbol to
 * a sound, kanji map a symbol to a meaning plus several readings — so
 * `LearningCharacter` is a discriminated union on `kind` rather than one wide
 * type full of optional fields. Everything above the character level (lessons,
 * tracks) is shared by all three scripts.
 */

export type ScriptId = "hiragana" | "katakana" | "kanji";

export type ExampleWord = {
  /** The word as written, e.g. "ねこ" or "日本". */
  word: string;
  /** Kana reading, e.g. "にほん". Equal to `word` for kana-only examples. */
  reading: string;
  romaji: string;
  meaning: string;
};

/**
 * Stroke data is not authored yet. Writing practice is Milestone 11, so these
 * fields exist to be filled then and must not be presented as guidance now.
 */
export type StrokeMetadata = {
  count?: number;
  note?: string;
};

type CharacterBase = {
  character: string;
  examples: ExampleWord[];
  strokes: StrokeMetadata;
};

export type KanaCharacter = CharacterBase & {
  kind: "kana";
  romaji: string;
  /** Beginner-facing sound hint, e.g. "ah, like the a in father". */
  pronunciation: string;
  /** Optional warning for characters learners commonly misread. */
  watchOut?: string;
};

export type KanjiCharacter = CharacterBase & {
  kind: "kanji";
  meaning: string;
  /** Readings borrowed from Chinese, written in katakana by convention. */
  onyomi: string[];
  /** Native Japanese readings, written in hiragana by convention. */
  kunyomi: string[];
  radical?: string;
  /** One beginner-friendly sentence about the character. */
  note: string;
};

export type LearningCharacter = KanaCharacter | KanjiCharacter;

export type Lesson = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  characters: LearningCharacter[];
};

export type ScriptTrack = {
  id: ScriptId;
  title: string;
  japaneseTitle: string;
  subtitle: string;
  /** Short description used on cards. */
  description: string;
  /** Longer beginner explanation used on the script overview page. */
  intro: string;
  /** Position in the learning path, starting at 1. */
  order: number;
  lessons: Lesson[];
};

/**
 * Practice metadata: what a learner has to recall when shown a character.
 * For kana that is the romaji; for kanji it is the meaning.
 */
export type PracticePrompt = {
  character: string;
  answer: string;
  scriptId: ScriptId;
  lessonSlug: string;
};

/** A selectable group of prompts on the practice page. */
export type PracticePool = {
  id: ScriptId;
  label: string;
  /** What the learner is being asked to recall, e.g. "sound" or "meaning". */
  recall: string;
  prompts: PracticePrompt[];
};

/**
 * A pronunciation recording. No audio has been produced for this site yet, so
 * the manifest in `lib/learning/audio.ts` is empty and every lookup returns
 * undefined. The type exists so recordings can be added without a refactor.
 */
export type AudioAsset = {
  /** Path relative to `public/`, e.g. "/audio/hiragana/a.mp3". */
  src: string;
  /** Describes the clip for assistive technology. */
  label: string;
};

/** One searchable record in the mini dictionary. */
export type SearchEntry = {
  id: string;
  character: string;
  kind: LearningCharacter["kind"];
  scriptId: ScriptId;
  scriptTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  /** Romaji for kana, meaning for kanji. */
  primary: string;
  /** Secondary line: pronunciation hint for kana, readings for kanji. */
  secondary: string;
  href: string;
  /** Lowercased strings this entry matches on. */
  terms: string[];
};
