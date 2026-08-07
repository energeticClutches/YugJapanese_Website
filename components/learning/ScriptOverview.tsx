import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { countCharacters, getNextTrack } from "@/lib/learning";
import type { ScriptTrack } from "@/types/learning";

/**
 * The overview body shared by all three script pages. Each route file stays a
 * thin wrapper so the routes are explicit while the UI lives in one place.
 */
export function ScriptOverview({ track }: { track: ScriptTrack }) {
  const nextTrack = getNextTrack(track.id);
  const characterCount = countCharacters(track);

  return (
    <>
      <PageHero
        eyebrow={`Step ${track.order} of ${3}`}
        title={track.title}
        description={track.intro}
      >
        <div className="page-actions">
          <ButtonLink href={`/learn/${track.id}/${track.lessons[0].slug}`}>
            Start lesson 1
          </ButtonLink>
          <ButtonLink href="/practice" variant="secondary">
            Practice what you know
          </ButtonLink>
        </div>
      </PageHero>

      <section className="page-section section-alt">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">
              {track.lessons.length} lessons · {characterCount} characters
            </p>
            <h2>Lessons</h2>
          </div>

          <ol className="lesson-list">
            {track.lessons.map((lesson, index) => (
              <li key={lesson.slug}>
                <Link
                  className="lesson-link"
                  href={`/learn/${track.id}/${lesson.slug}`}
                >
                  <span className="lesson-index">{index + 1}</span>
                  <span className="lesson-text">
                    <strong>{lesson.title}</strong>
                    <span className="lesson-preview" lang="ja">
                      {lesson.subtitle}
                    </span>
                    <span className="lesson-summary">{lesson.summary}</span>
                  </span>
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section">
        <div className="shell">
          <div className="section-heading">
            <h2>{nextTrack ? `Next: ${nextTrack.title}` : "Keep practising"}</h2>
            <p>
              {nextTrack
                ? nextTrack.description
                : "You have reached the last script in the path. Keep reviewing with recognition practice, or get the Android app for writing practice and spaced repetition."}
            </p>
          </div>
          <div className="page-actions">
            {nextTrack ? (
              <ButtonLink href={`/learn/${nextTrack.id}`}>
                Go to {nextTrack.title}
              </ButtonLink>
            ) : (
              <ButtonLink href="/practice">Start practice</ButtonLink>
            )}
            <ButtonLink href="/learn" variant="secondary">
              Back to the learning path
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
