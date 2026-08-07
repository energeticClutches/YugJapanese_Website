"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import {
  emptyProgress,
  isStorageAvailable,
  readProgress,
  resetProgress,
  type ProgressData,
} from "@/lib/progress";

const SCRIPT_LABELS: Record<string, string> = {
  hiragana: "Hiragana",
  katakana: "Katakana",
  kanji: "Kanji",
};

/**
 * Reads progress after mount rather than during render. localStorage does not
 * exist on the server, so touching it while rendering would produce different
 * markup on each side and a hydration mismatch.
 */
export function ProgressPanel() {
  const [progress, setProgress] = useState<ProgressData>(emptyProgress);
  const [loaded, setLoaded] = useState(false);
  const [storageOk, setStorageOk] = useState(true);
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    setStorageOk(isStorageAvailable());
    setProgress(readProgress());
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="practice-panel" aria-busy="true">
        <p className="practice-intro">Reading your progress from this device…</p>
      </div>
    );
  }

  if (!storageOk) {
    return (
      <div className="practice-panel">
        <h2>Progress is unavailable</h2>
        <p className="practice-intro">
          This browser is blocking local storage, which is usually private
          browsing or a privacy setting. Lessons, practice, review, and search
          all still work — nothing is recorded.
        </p>
      </div>
    );
  }

  const hasActivity =
    progress.practiceSessions > 0 ||
    progress.reviewSessions > 0 ||
    progress.writingAttempts > 0;

  const stats = [
    { value: progress.practiceSessions, label: "practice sessions" },
    { value: progress.reviewSessions, label: "review sessions" },
    { value: progress.writingAttempts, label: "characters traced" },
    { value: `${progress.bestScorePercent}%`, label: "best score" },
  ];

  return (
    <>
      <div className="progress-grid">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>

      {hasActivity ? (
        <p className="progress-meta">
          Last studied {progress.lastStudied}
          {progress.lastScript
            ? ` · ${SCRIPT_LABELS[progress.lastScript] ?? progress.lastScript}`
            : ""}
        </p>
      ) : (
        <div className="practice-panel progress-empty">
          <h2>Nothing recorded yet</h2>
          <p className="practice-intro">
            Finish a practice or review session, or trace a character, and it
            will show up here.
          </p>
          <div className="page-actions">
            <Link className="button-link button-link--primary" href="/practice">
              Start practice
            </Link>
            <Link className="button-link button-link--secondary" href="/review">
              Start review
            </Link>
          </div>
        </div>
      )}

      <div className="progress-controls">
        {confirming ? (
          <>
            <p>Delete all progress stored on this device? This cannot be undone.</p>
            <div className="page-actions">
              <button
                className="button-link button-link--primary"
                onClick={() => {
                  setProgress(resetProgress());
                  setConfirming(false);
                }}
                type="button"
              >
                Yes, delete it
              </button>
              <button
                className="button-link button-link--secondary"
                onClick={() => setConfirming(false)}
                type="button"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <button
            className="writing-button"
            disabled={!hasActivity}
            onClick={() => setConfirming(true)}
            type="button"
          >
            <Trash2 aria-hidden="true" size={17} />
            Reset progress
          </button>
        )}
      </div>
    </>
  );
}
