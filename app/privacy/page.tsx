import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy principles for YugJapanese and the official website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy should feel simple."
        description="YugJapanese is guided by minimal data collection, transparent communication, and user-focused decisions."
      />
      <section className="page-section section-alt">
        <div className="shell content-grid">
          <article className="note-card">
            <h3>Website privacy</h3>
            <p>
              This website should collect only what is necessary for security,
              analytics, and operation. Add exact legal language before production.
            </p>
          </article>
          <article className="note-card">
            <h3>Application privacy</h3>
            <p>
              The Flutter application has its own implementation details and should be
              documented without changing app code from this repository.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
