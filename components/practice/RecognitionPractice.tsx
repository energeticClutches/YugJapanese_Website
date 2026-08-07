"use client";

import { useCallback, useState } from "react";
import { recordPracticeSession } from "@/lib/progress";
import type { PracticePool } from "@/types/learning";
import { QuizRunner } from "./QuizRunner";
import { buildQuestions, type Question } from "./quizSession";

/**
 * Recognition practice: see a character, recall its sound or meaning.
 *
 * Questions are built when the learner picks a set rather than during render,
 * so the shuffled order never differs between the server and client renders.
 */
export function RecognitionPractice({ pools }: { pools: PracticePool[] }) {
  const [pool, setPool] = useState<PracticePool | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);

  const start = useCallback((chosen: PracticePool) => {
    setPool(chosen);
    setQuestions(buildQuestions(chosen.prompts));
  }, []);

  const restart = useCallback(() => {
    if (pool) setQuestions(buildQuestions(pool.prompts));
  }, [pool]);

  const changeSet = useCallback(() => {
    setPool(null);
    setQuestions([]);
  }, []);

  const complete = useCallback(
    ({ correct, total }: { correct: number; total: number }) => {
      if (pool) {
        recordPracticeSession({ scriptId: pool.id, correct, total });
      }
    },
    [pool],
  );

  if (!pool) {
    return (
      <div className="practice-panel">
        <h2>Choose what to practise</h2>
        <p className="practice-intro">
          Ten characters at a time. You will see a character and pick what it
          means or how it sounds.
        </p>
        <div className="pool-grid">
          {pools.map((option) => (
            <button
              className="pool-button"
              key={option.id}
              onClick={() => start(option)}
              type="button"
            >
              <strong>{option.label}</strong>
              <span>
                {option.prompts.length} characters · recall the {option.recall}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <QuizRunner
      onChangeSet={changeSet}
      onComplete={complete}
      onRestart={restart}
      questions={questions}
      recall={pool.recall}
      setLabel={`${pool.label} practice`}
    />
  );
}
