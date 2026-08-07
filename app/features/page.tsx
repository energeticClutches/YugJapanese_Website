import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { appFeatures, plannedPractice, webFeatures } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features",
  description:
    "What you can do on the YugJapanese website today, what is still being built, and what the offline Android app adds.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="What the website does, and what the app adds."
        description="The website is being built into a full learning experience. Here is an honest split of what works on the web right now and what still lives only in the Android app."
      />

      <section className="page-section section-alt">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">On the website</p>
            <h2>Available now, in any browser.</h2>
          </div>
          <div className="feature-grid">
            {webFeatures.map((feature) => (
              <FeatureCard feature={feature} key={feature.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell">
          <div className="section-heading">
            <span className="tag">In progress</span>
            <h2>Coming to the website.</h2>
            <p>
              These are being built here now. Until they land, the Android app
              already covers them.
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
        </div>
      </section>

      <section className="page-section section-alt">
        <div className="shell">
          <div className="section-heading">
            <span className="tag">Android app</span>
            <h2>In the offline app today.</h2>
            <p>
              The Android app is the complete experience and works with no
              connection at all.
            </p>
          </div>
          <div className="feature-grid">
            {appFeatures.map((feature) => (
              <FeatureCard feature={feature} key={feature.title} />
            ))}
          </div>
          <div className="page-actions">
            <ButtonLink href="/download">Download the app</ButtonLink>
            <ButtonLink href="/learn" variant="secondary">
              Start learning on the web
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
