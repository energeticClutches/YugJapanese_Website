import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Screenshots",
  description: "Preview the calm YugJapanese learning interface.",
};

export default function ScreenshotsPage() {
  return (
    <>
      <PageHero
        eyebrow="Screenshots"
        title="A clear interface for focused practice."
        description="The visual direction keeps lessons readable, gentle, and fast to understand."
      />
      <section className="page-section">
        <div className="shell screenshot-grid">
          <div className="screenshot-card">
            <Image
              src="/yugjapanese-hero.png"
              alt="YugJapanese app preview"
              width={1680}
              height={945}
              priority
            />
          </div>
          <div className="interface-panel">
            <div className="mini-row">
              <strong>Handwriting practice</strong>
              <p>Trace and write characters with real-time stroke accuracy scoring.</p>
            </div>
            <div className="mini-row">
              <strong>Spaced repetition review</strong>
              <p>Learned characters resurface right when you&apos;re about to forget them.</p>
            </div>
            <div className="mini-row">
              <strong>Progress dashboard</strong>
              <p>Streaks, achievements, and analytics show exactly where you stand.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
