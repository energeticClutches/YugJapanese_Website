import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { WritingCanvas } from "@/components/practice/WritingCanvas";
import { practicePools } from "@/lib/learning";

export const metadata: Metadata = {
  title: "Writing practice",
  description:
    "Trace Hiragana, Katakana, and beginner Kanji by hand in the browser, with a guide character you can hide.",
};

export default function WritingPracticePage() {
  return (
    <>
      <PageHero
        eyebrow="Writing practice"
        title="Trace the shape until your hand knows it."
        description="Draw over the guide character with a mouse, finger, or stylus. Reading a character and writing it are different skills, and writing is what makes the shape stick."
      >
        <div className="page-actions">
          <ButtonLink href="/practice" variant="secondary">
            Recognition practice instead
          </ButtonLink>
        </div>
      </PageHero>

      <section className="page-section section-alt">
        <div className="shell practice-shell">
          <WritingCanvas pools={practicePools} />
          <p className="practice-footnote">
            Your strokes are not scored or checked, and nothing you draw is
            saved or sent anywhere. Stroke-order data has not been written for
            this site yet, so the guide shows the finished character rather than
            the order to draw it in. The Android app has stroke-order guidance
            and handwriting accuracy scoring today.
          </p>
        </div>
      </section>
    </>
  );
}
