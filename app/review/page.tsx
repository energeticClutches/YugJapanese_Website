import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ReviewSession } from "@/components/review/ReviewSession";
import { reviewSets } from "@/lib/learning";

export const metadata: Metadata = {
  title: "Review",
  description:
    "Review the characters you have learned, with Hiragana and Katakana mixed together so nothing stays in lesson order.",
};

export default function ReviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Review"
        title="Come back to what you learned last week."
        description="Lessons teach characters in neat rows. Review pulls them out of that order and mixes the scripts, which is closer to how you will actually meet them."
      />

      <section className="page-section section-alt">
        <div className="shell practice-shell">
          <ReviewSession sets={reviewSets} />
          <p className="practice-footnote">
            This is a review foundation, not spaced repetition. Characters are
            drawn at random from the set you pick — the site does not yet track
            which ones you personally struggle with, so nothing is scheduled
            based on how well you knew it last time. The Android app does
            schedule reviews that way.
          </p>
        </div>
      </section>
    </>
  );
}
