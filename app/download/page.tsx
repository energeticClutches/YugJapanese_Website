import type { Metadata } from "next";
import { Download, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description: "Download the latest YugJapanese APK and follow official install guidance.",
};

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="APK download"
        title="Download YugJapanese safely."
        description="This page is the official source for APK downloads, install guidance, and release confidence."
      >
        <div className="page-actions">
          <ButtonLink href={siteConfig.apkUrl}>Download latest APK</ButtonLink>
          <ButtonLink href="/changelog" variant="secondary">
            View release notes
          </ButtonLink>
        </div>
      </PageHero>
      <section className="page-section">
        <div className="shell content-grid">
          <article className="note-card">
            <Download aria-hidden="true" size={24} />
            <h3>Latest APK</h3>
            <p>
              Add the production APK at <strong>public/downloads/yugjapanese-latest.apk</strong>
              when the app release is ready.
            </p>
          </article>
          <article className="note-card">
            <ShieldCheck aria-hidden="true" size={24} />
            <h3>Install guidance</h3>
            <p>
              Only download from the official website and review release notes before installing.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
