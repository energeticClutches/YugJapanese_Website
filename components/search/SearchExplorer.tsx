"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { searchCharacters } from "@/lib/learning/search";
import type { SearchEntry } from "@/types/learning";

const EXAMPLE_QUERIES = ["a", "shi", "cat", "water", "日", "コーヒー"];

export function SearchExplorer({ totalEntries }: { totalEntries: number }) {
  const [query, setQuery] = useState("");

  // The index is 75 entries, so filtering on every keystroke is imperceptible
  // and needs no debounce.
  const results = useMemo(() => searchCharacters(query), [query]);
  const trimmed = query.trim();

  return (
    <>
      <div className="search-field">
        <Search aria-hidden="true" size={20} />
        <input
          aria-label="Search characters, readings, meanings, and example words"
          autoComplete="off"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try a, shi, cat, water, or 日"
          type="search"
          value={query}
        />
      </div>

      {trimmed === "" ? (
        <div className="search-hint">
          <p>
            Search all {totalEntries} characters taught here by character,
            romaji, meaning, reading, or example word.
          </p>
          <div className="search-examples">
            {EXAMPLE_QUERIES.map((example) => (
              <button
                className="search-chip"
                key={example}
                onClick={() => setQuery(example)}
                type="button"
              >
                <span lang="ja">{example}</span>
              </button>
            ))}
          </div>
        </div>
      ) : results.length === 0 ? (
        <div className="search-hint">
          <p>
            Nothing matches <strong>{trimmed}</strong>.
          </p>
          <p className="search-note">
            Only the characters currently taught on this site are searchable —
            the vowels and K, S, T, and N rows of each kana script, plus 25
            beginner Kanji. Later rows are not written yet.
          </p>
        </div>
      ) : (
        <>
          <p className="search-count" role="status">
            {results.length} {results.length === 1 ? "result" : "results"}
          </p>
          <ul className="search-results">
            {results.map((entry) => (
              <SearchResult entry={entry} key={entry.id} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

function SearchResult({ entry }: { entry: SearchEntry }) {
  return (
    <li>
      <Link className="search-result" href={entry.href}>
        <span className="search-glyph" lang="ja">
          {entry.character}
        </span>
        <span className="search-body">
          <strong>{entry.primary}</strong>
          <span className="search-secondary">{entry.secondary}</span>
          <span className="search-source">
            {entry.scriptTitle} · {entry.lessonTitle}
          </span>
        </span>
      </Link>
    </li>
  );
}
