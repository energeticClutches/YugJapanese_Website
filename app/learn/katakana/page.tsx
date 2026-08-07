import type { Metadata } from "next";
import { ScriptOverview } from "@/components/learning/ScriptOverview";
import { requireTrack } from "@/lib/learning";

const track = requireTrack("katakana");

export const metadata: Metadata = {
  title: "Learn Katakana",
  description:
    "Learn Katakana after Hiragana: five lessons covering the vowels and the K, S, T, and N rows, with romaji, pronunciation, and everyday loanwords.",
};

export default function KatakanaPage() {
  return <ScriptOverview track={track} />;
}
