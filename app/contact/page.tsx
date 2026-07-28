import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact YugJapanese for support, feedback, and website questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Share feedback, questions, or release issues."
        description="The website should make support feel approachable and official."
      />
      <section className="page-section">
        <div className="shell content-grid">
          <article className="contact-card">
            <h3>Email</h3>
            <p>
              Reach the project at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </article>
          <article className="contact-card">
            <h3>Support scope</h3>
            <p>
              Use this website for APK downloads, release notes, documentation, and
              official YugJapanese information.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
