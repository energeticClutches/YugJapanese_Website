import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { CharacterCard } from "@/components/learning/CharacterCard";
import { getLessonNeighbours } from "@/lib/learning";
import type { Lesson, ScriptTrack } from "@/types/learning";

/** The lesson body shared by all three scripts. */
export function LessonView({
  track,
  lesson,
}: {
  track: ScriptTrack;
  lesson: Lesson;
}) {
  const { previous, next, position, total } = getLessonNeighbours(
    track.id,
    lesson.slug,
  );

  return (
    <>
      <PageHero
        eyebrow={`${track.title} · Lesson ${position} of ${total}`}
        title={lesson.title}
        description={lesson.summary}
      >
        <p className="lesson-kana-preview" lang="ja">
          {lesson.subtitle}
        </p>
      </PageHero>

      <section className="page-section section-alt">
        <div className="shell">
          <div className="char-grid">
            {lesson.characters.map((character) => (
              <CharacterCard character={character} key={character.character} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell">
          <nav className="lesson-nav" aria-label="Lesson navigation">
            {previous ? (
              <Link className="lesson-nav-link" href={`/learn/${track.id}/${previous.slug}`}>
                <ArrowLeft aria-hidden="true" size={18} />
                <span>
                  <small>Previous</small>
                  <strong>{previous.title}</strong>
                </span>
              </Link>
            ) : (
              <Link className="lesson-nav-link" href={`/learn/${track.id}`}>
                <ArrowLeft aria-hidden="true" size={18} />
                <span>
                  <small>Back to</small>
                  <strong>{track.title}</strong>
                </span>
              </Link>
            )}

            {next && (
              <Link
                className="lesson-nav-link lesson-nav-link--next"
                href={`/learn/${track.id}/${next.slug}`}
              >
                <span>
                  <small>Next</small>
                  <strong>{next.title}</strong>
                </span>
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            )}
          </nav>

          <div className="page-actions">
            <ButtonLink href="/practice">Practice these characters</ButtonLink>
            <ButtonLink href={`/learn/${track.id}`} variant="secondary">
              All {track.title} lessons
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
