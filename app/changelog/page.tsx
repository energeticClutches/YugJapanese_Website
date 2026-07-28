import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { releaseNotes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Official YugJapanese website and release notes.",
};

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        eyebrow="Changelog"
        title="A clear record of what changed."
        description="Release notes keep users informed and help every update feel understandable."
      />
      <section className="page-section section-alt">
        <div className="shell timeline">
          {releaseNotes.map((release) => (
            <article className="note-card" key={release.version}>
              <p className="eyebrow">{release.date}</p>
              <h3>{release.version}</h3>
              <ul>
                {release.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
