import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Credits",
  description: "Credits and acknowledgements for the YugJapanese website.",
};

export default function CreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="Credits"
        title="Built with care and gratitude."
        description="Credits should recognize the people, tools, and resources that help YugJapanese serve learners well."
      />
      <section className="page-section">
        <div className="shell content-grid">
          <article className="note-card">
            <h3>Website</h3>
            <p>Next.js, TypeScript, Tailwind CSS, and Vercel deployment.</p>
          </article>
          <article className="note-card">
            <h3>Brand direction</h3>
            <p>Modern minimalism inspired by Japanese aesthetics and generous whitespace.</p>
          </article>
        </div>
      </section>
    </>
  );
}
