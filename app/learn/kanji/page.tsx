import type { Metadata } from "next";
import { ScriptOverview } from "@/components/learning/ScriptOverview";
import { requireTrack } from "@/lib/learning";

const track = requireTrack("kanji");

export const metadata: Metadata = {
  title: "Learn Kanji",
  description:
    "Beginner Kanji in five groups — numbers, people, days, nature, and school — with meanings, on'yomi and kun'yomi readings, radicals, and example words.",
};

export default function KanjiPage() {
  return <ScriptOverview track={track} />;
}
