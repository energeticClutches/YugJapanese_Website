import type { Metadata } from "next";
import { Lock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProgressPanel } from "@/components/progress/ProgressPanel";

export const metadata: Metadata = {
  title: "Progress",
  description:
    "See what you have practised, stored only on your own device. No account, no sign-up, and nothing sent anywhere.",
};

export default function ProgressPage() {
  return (
    <>
      <PageHero
        eyebrow="Progress"
        title="What you have practised so far."
        description="A simple count of the sessions you have finished, kept on this device only."
      />

      <section className="page-section section-alt">
        <div className="shell practice-shell">
          <ProgressPanel />

          <div className="privacy-note">
            <Lock aria-hidden="true" size={18} />
            <div>
              <strong>This never leaves your device.</strong>
              <p>
                Progress is stored in your browser&apos;s local storage. There
                is no account, no sign-up, and no server involved — nothing is
                transmitted anywhere. Only counts and the date you last studied
                are kept; individual answers are not recorded. Clearing your
                browser data, or using the reset button above, deletes it
                permanently. Progress does not follow you to another browser or
                device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
