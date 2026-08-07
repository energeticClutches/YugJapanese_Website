import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { TrackCard } from "@/components/TrackCard";
import { scriptTracks } from "@/lib/learning";
import { plannedPractice } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn Japanese",
  description:
    "Learn Japanese from zero: Hiragana first, then Katakana, then Kanji, with a clear lesson path for each script.",
};

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn Japanese"
        title="Start with the characters. Everything else follows."
        description="Japanese has three writing systems, and there is a right order to meet them in. Start with Hiragana, add Katakana, then begin Kanji once reading feels natural."
      >
        <div className="page-actions">
          <ButtonLink href="/learn/hiragana">Start with Hiragana</ButtonLink>
          <ButtonLink href="/practice" variant="secondary">
            Practise what you know
          </ButtonLink>
        </div>
      </PageHero>

      <section className="page-section section-alt" id="tracks">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">The learning path</p>
            <h2>Three scripts, learned in order.</h2>
            <p>
              Each script builds on the one before it. Hiragana teaches you every
              sound in Japanese, Katakana reuses those sounds for words borrowed
              from other languages, and Kanji adds meaning on top of both.
            </p>
          </div>
          <div className="track-grid">
            {scriptTracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell">
          <div className="section-heading">
            <span className="tag">In progress</span>
            <h2>What is coming to the website.</h2>
            <p>
              Lessons, recognition and writing practice, review, progress, and
              search are all live on the web now. Analytics is next — until it
              ships, the Android app already has it.
            </p>
          </div>
          <div className="content-grid">
            {plannedPractice.map((item) => (
              <article className="planned-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="page-actions">
            <ButtonLink href="/download">Get the offline app</ButtonLink>
            <ButtonLink href="/features" variant="secondary">
              Compare website and app
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
