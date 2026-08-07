import { Volume2 } from "lucide-react";
import { getPronunciationAudio } from "@/lib/learning/audio";
import { AudioButton } from "./AudioButton";

/**
 * Shows how a character is pronounced.
 *
 * A server component: when no recording exists it renders written guidance with
 * zero client JavaScript, and only reaches for the interactive player once a
 * clip is actually available. No audio is recorded yet, so today this is always
 * the fallback path.
 */
export function PronunciationCue({ romaji }: { romaji: string }) {
  // Resolved by sound, so one recording covers both あ and ア.
  const asset = getPronunciationAudio(romaji);

  if (asset) {
    return <AudioButton asset={asset} />;
  }

  return (
    <p className="audio-pending">
      <Volume2 aria-hidden="true" size={16} />
      Say it as <strong>{romaji}</strong> · recorded audio coming later
    </p>
  );
}
