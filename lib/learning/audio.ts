import type { AudioAsset } from "@/types/learning";

/**
 * Pronunciation audio, resolved by sound rather than by character.
 *
 * あ and ア are the same mora, so one recording serves both. The Hiragana and
 * Katakana tracks teach 25 sounds across 50 characters, which halves how much
 * has to be recorded.
 *
 * `RECORDED_SOUNDS` is intentionally empty: no audio has been recorded or
 * licensed for this site, and `public/audio/` does not exist yet. Nothing in
 * the UI claims audio until a sound is listed here.
 *
 * To enable a sound: put `<sound>.mp3` in `public/audio/kana/`, add its name
 * below, and the play control appears on every character using that sound. See
 * RECORDING.md for the full list and the process.
 *
 * Only self-owned or appropriately licensed recordings may be added. Audio
 * downloaded from another site is not usable here regardless of where the file
 * is stored locally.
 */
const RECORDED_SOUNDS: ReadonlySet<string> = new Set([]);

/** Kanji have several readings, so no single clip represents the character. */
export function getPronunciationAudio(sound: string): AudioAsset | undefined {
  if (!RECORDED_SOUNDS.has(sound)) return undefined;

  return {
    src: `/audio/kana/${sound}.mp3`,
    label: `Play ${sound}`,
  };
}

export function hasAnyAudio(): boolean {
  return RECORDED_SOUNDS.size > 0;
}
