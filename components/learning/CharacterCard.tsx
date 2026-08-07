import { AlertCircle } from "lucide-react";
import { PronunciationCue } from "./PronunciationCue";
import type { ExampleWord, LearningCharacter } from "@/types/learning";

function ExampleList({ examples }: { examples: ExampleWord[] }) {
  if (examples.length === 0) return null;

  return (
    <dl className="example-list">
      {examples.map((example) => (
        <div className="example-row" key={`${example.word}-${example.romaji}`}>
          <dt lang="ja">{example.word}</dt>
          <dd>
            <span className="example-reading">
              {/* Repeating the reading adds nothing when the word is already kana. */}
              {example.reading !== example.word ? `${example.reading} · ` : ""}
              {example.romaji}
            </span>
            <span className="example-meaning">{example.meaning}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function CharacterCard({ character }: { character: LearningCharacter }) {
  return (
    <article className="char-card">
      <p className="char-glyph" lang="ja">
        {character.character}
      </p>

      <div className="char-body">
        {character.kind === "kana" ? (
          <>
            <p className="char-romaji">{character.romaji}</p>
            <p className="char-note">{character.pronunciation}</p>
            <PronunciationCue romaji={character.romaji} />
          </>
        ) : (
          <>
            <p className="char-romaji">{character.meaning}</p>
            <dl className="reading-list">
              {character.onyomi.length > 0 && (
                <div>
                  <dt>On&apos;yomi</dt>
                  <dd lang="ja">{character.onyomi.join("、")}</dd>
                </div>
              )}
              {character.kunyomi.length > 0 && (
                <div>
                  <dt>Kun&apos;yomi</dt>
                  <dd lang="ja">{character.kunyomi.join("、")}</dd>
                </div>
              )}
              {character.radical && (
                <div>
                  <dt>Radical</dt>
                  <dd lang="ja">{character.radical}</dd>
                </div>
              )}
              {character.strokes.count !== undefined && (
                <div>
                  <dt>Strokes</dt>
                  <dd>{character.strokes.count}</dd>
                </div>
              )}
            </dl>
            <p className="char-note">{character.note}</p>
          </>
        )}

        {character.kind === "kana" && character.watchOut && (
          <p className="watch-out">
            <AlertCircle aria-hidden="true" size={16} />
            {character.watchOut}
          </p>
        )}

        <ExampleList examples={character.examples} />
      </div>
    </article>
  );
}
