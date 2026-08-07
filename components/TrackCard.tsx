import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { countCharacters, getSampleCharacters } from "@/lib/learning";
import type { ScriptTrack } from "@/types/learning";

type TrackCardProps = {
  track: ScriptTrack;
};

export function TrackCard({ track }: TrackCardProps) {
  const samples = getSampleCharacters(track);

  return (
    <article className="track-card">
      <p className="eyebrow">{track.subtitle}</p>
      <h3>{track.title}</h3>
      <p className="track-title-jp" lang="ja">
        {track.japaneseTitle}
      </p>
      <p>{track.description}</p>

      <ul className="kana-row" aria-label={`Example ${track.title} characters`}>
        {samples.map((character) => (
          <li className="kana-chip" key={character} lang="ja">
            {character}
          </li>
        ))}
      </ul>

      <dl className="track-lessons">
        <dt>
          {track.lessons.length} lessons · {countCharacters(track)} characters
        </dt>
        <dd>{track.lessons.map((lesson) => lesson.title).join(" · ")}</dd>
      </dl>

      <Link className="track-link" href={`/learn/${track.id}`}>
        Start {track.title}
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </article>
  );
}
