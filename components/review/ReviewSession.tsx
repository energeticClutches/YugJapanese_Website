"use client";

import { useCallback, useState } from "react";
import { QuizRunner } from "@/components/practice/QuizRunner";
import { buildQuestions, type Question } from "@/components/practice/quizSession";
import { recordReviewSession } from "@/lib/progress";
import type { PracticePrompt, ScriptId } from "@/types/learning";

export type ReviewSet = {
  id: string;
  label: string;
  description: string;
  /** Recorded against progress; mixed sets report the script they draw most from. */
  scriptId: ScriptId;
  recall: string;
  prompts: PracticePrompt[];
};

/**
 * Review draws from characters across scripts rather than one at a time.
 *
 * This is a review foundation, not spaced repetition: there is no per-character
 * history, so nothing is scheduled by how well you knew it last time. Questions
 * are drawn at random from the chosen set.
 */
export function ReviewSession({ sets }: { sets: ReviewSet[] }) {
  const [set, setSet] = useState<ReviewSet | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);

  const start = useCallback((chosen: ReviewSet) => {
    setSet(chosen);
    setQuestions(buildQuestions(chosen.prompts));
  }, []);

  const restart = useCallback(() => {
    if (set) setQuestions(buildQuestions(set.prompts));
  }, [set]);

  const changeSet = useCallback(() => {
    setSet(null);
    setQuestions([]);
  }, []);

  const complete = useCallback(
    ({ correct, total }: { correct: number; total: number }) => {
      if (set) {
        recordReviewSession({ scriptId: set.scriptId, correct, total });
      }
    },
    [set],
  );

  if (!set) {
    return (
      <div className="practice-panel">
        <h2>Choose a review set</h2>
        <p className="practice-intro">
          Ten characters drawn at random from everything in that set, mixing
          lessons so nothing stays in the order you learned it.
        </p>
        <div className="pool-grid">
          {sets.map((option) => (
            <button
              className="pool-button"
              key={option.id}
              onClick={() => start(option)}
              type="button"
            >
              <strong>{option.label}</strong>
              <span>
                {option.prompts.length} characters · {option.description}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <QuizRunner
      changeSetLabel="Change review set"
      onChangeSet={changeSet}
      onComplete={complete}
      onRestart={restart}
      questions={questions}
      recall={set.recall}
      setLabel={`${set.label} review`}
    />
  );
}
