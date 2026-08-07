import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the YugJapanese website handles your data: no accounts, no tracking, and learning progress stored only on your own device.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Nothing you do here is sent anywhere."
        description="This page describes what the website actually does today, not what it intends to do."
      />
      <section className="page-section section-alt">
        <div className="shell content-grid">
          <article className="note-card">
            <h3>No account, ever</h3>
            <p>
              There is no sign-up, no login, and no email field anywhere on this
              site. Lessons, practice, review, writing, and search all work
              without identifying you in any way.
            </p>
          </article>

          <article className="note-card">
            <h3>Progress stays on your device</h3>
            <p>
              If you finish a practice or review session, or trace a character,
              the site stores counters in your browser&apos;s local storage:
              how many sessions you finished, how many characters you traced,
              your best session score, the script you last studied, and the date
              you last studied. Individual answers are not recorded. This never
              leaves your browser, and the Progress page can delete it at any
              time.
            </p>
          </article>

          <article className="note-card">
            <h3>No analytics or trackers</h3>
            <p>
              The website loads no analytics, no advertising scripts, and no
              third-party trackers. It sets no cookies. Nothing you draw on the
              writing canvas is saved or transmitted.
            </p>
          </article>

          <article className="note-card">
            <h3>Hosting</h3>
            <p>
              The site is served as static pages by Vercel, which processes
              standard server request logs as part of delivering any website.
              That is outside this project&apos;s control and is separate from
              the learning data described above.
            </p>
          </article>

          <article className="note-card">
            <h3>The Android app is separate</h3>
            <p>
              The YugJapanese Android app is a different product with its own
              storage and its own privacy behaviour. It keeps learning data on
              your device and works offline. Nothing on this page describes the
              app.
            </p>
          </article>

          <article className="note-card">
            <h3>Questions</h3>
            <p>
              If anything here is unclear, the Contact page has the official
              address to write to. This document describes current behaviour and
              will be updated whenever that behaviour changes.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
