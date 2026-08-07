import type { ScriptId } from "@/types/learning";

/**
 * Local-only learning progress.
 *
 * Everything here lives in the browser's localStorage and never leaves the
 * device. There is no account, no server, and no identifier of any kind — only
 * counts and a date. Every access is wrapped because localStorage throws in
 * private browsing modes and when storage is disabled or full.
 */

const STORAGE_KEY = "yugjapanese.progress.v1";

export type ProgressData = {
  version: 1;
  practiceSessions: number;
  reviewSessions: number;
  writingAttempts: number;
  /** Best session score as a whole percentage, 0-100. */
  bestScorePercent: number;
  lastScript: ScriptId | null;
  /** ISO date string, date only — no time of day is recorded. */
  lastStudied: string | null;
};

export const emptyProgress: ProgressData = {
  version: 1,
  practiceSessions: 0,
  reviewSessions: 0,
  writingAttempts: 0,
  bestScorePercent: 0,
  lastScript: null,
  lastStudied: null,
};

export function isStorageAvailable(): boolean {
  try {
    const probe = "__yj_probe__";
    window.localStorage.setItem(probe, probe);
    window.localStorage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
}

/** Coerces unknown stored JSON into a valid shape, discarding anything odd. */
function normalise(raw: unknown): ProgressData {
  if (typeof raw !== "object" || raw === null) return emptyProgress;

  const value = raw as Record<string, unknown>;
  const count = (input: unknown): number =>
    typeof input === "number" && Number.isFinite(input) && input >= 0
      ? Math.floor(input)
      : 0;

  const script = value.lastScript;
  const lastScript =
    script === "hiragana" || script === "katakana" || script === "kanji"
      ? script
      : null;

  return {
    version: 1,
    practiceSessions: count(value.practiceSessions),
    reviewSessions: count(value.reviewSessions),
    writingAttempts: count(value.writingAttempts),
    bestScorePercent: Math.min(100, count(value.bestScorePercent)),
    lastScript,
    lastStudied: typeof value.lastStudied === "string" ? value.lastStudied : null,
  };
}

export function readProgress(): ProgressData {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return emptyProgress;
    return normalise(JSON.parse(stored));
  } catch {
    // Unreadable or corrupt data is treated as no progress rather than an error.
    return emptyProgress;
  }
}

function writeProgress(data: ProgressData): ProgressData {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage unavailable. Progress is a convenience, so this stays silent and
    // the returned value still updates the current session's UI.
  }
  return data;
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

type SessionResult = {
  scriptId: ScriptId;
  correct: number;
  total: number;
};

function withSession(
  current: ProgressData,
  { scriptId, correct, total }: SessionResult,
): ProgressData {
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  return {
    ...current,
    bestScorePercent: Math.max(current.bestScorePercent, percent),
    lastScript: scriptId,
    lastStudied: today(),
  };
}

export function recordPracticeSession(result: SessionResult): ProgressData {
  const current = readProgress();
  return writeProgress({
    ...withSession(current, result),
    practiceSessions: current.practiceSessions + 1,
  });
}

export function recordReviewSession(result: SessionResult): ProgressData {
  const current = readProgress();
  return writeProgress({
    ...withSession(current, result),
    reviewSessions: current.reviewSessions + 1,
  });
}

export function recordWritingAttempt(scriptId: ScriptId): ProgressData {
  const current = readProgress();
  return writeProgress({
    ...current,
    writingAttempts: current.writingAttempts + 1,
    lastScript: scriptId,
    lastStudied: today(),
  });
}

export function resetProgress(): ProgressData {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing to remove if storage is unavailable.
  }
  return emptyProgress;
}
