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
              <strong>Daily practice</strong>
              <p>Readable practice cards with visible progress.</p>
            </div>
            <div className="mini-row">
              <strong>Review flow</strong>
              <p>Vocabulary and kana moments are kept simple and calm.</p>
            </div>
            <div className="mini-row">
              <strong>Offline mode</strong>
              <p>Downloads and availability are treated as first-class details.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
