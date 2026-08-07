import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { RecognitionPractice } from "@/components/practice/RecognitionPractice";
import { practicePools } from "@/lib/learning";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Practise recognising Hiragana, Katakana, and beginner Kanji. Ten characters at a time, with instant feedback.",
};

export default function PracticePage() {
  return (
    <>
      <PageHero
        eyebrow="Practice"
        title="Check what you actually remember."
        description="Recognition practice for the characters taught on this site. Pick a script, work through ten characters, and see how you did."
      />
      <section className="page-section section-alt">
        <div className="shell practice-shell">
          <RecognitionPractice pools={practicePools} />
          <p className="practice-footnote">
            This is recognition practice only. Try <Link href="/practice/writing">writing practice</Link> separately.
            Spaced repetition is not built into the website yet — the Android app has it today.
          </p>
        </div>
      </section>
    </>
  );
}
