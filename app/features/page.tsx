import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { features } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore YugJapanese features for offline-first Japanese learning.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Learning tools with room to breathe."
        description="YugJapanese focuses on useful practice, calm design, privacy, and a distraction-free learning space."
      />
      <section className="page-section section-alt">
        <div className="shell feature-grid">
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.title} />
          ))}
        </div>
      </section>
    </>
  );
}
