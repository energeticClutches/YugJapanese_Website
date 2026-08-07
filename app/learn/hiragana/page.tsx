import type { Metadata } from "next";
import { ScriptOverview } from "@/components/learning/ScriptOverview";
import { requireTrack } from "@/lib/learning";

const track = requireTrack("hiragana");

export const metadata: Metadata = {
  title: "Learn Hiragana",
  description:
    "Learn Hiragana from the beginning: five lessons covering the vowels and the K, S, T, and N rows, with romaji, pronunciation, and example words.",
};

export default function HiraganaPage() {
  return <ScriptOverview track={track} />;
}
