"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import type { Question } from "./quizSession";

type QuizRunnerProps = {
  questions: Question[];
  /** What the learner is recalling, e.g. "sound". Used in the prompt line. */
  recall: string;
  setLabel: string;
  /** Fired once when the final question is answered and the summary appears. */
  onComplete: (result: { correct: number; total: number }) => void;
  onRestart: () => void;
  onChangeSet: () => void;
  changeSetLabel?: string;
};

/**
 * Runs a multiple-choice round: question, feedback, next, summary.
 *
 * Shared by recognition practice and review so the two behave identically and
 * only differ in which prompts they are handed.
 */
export function QuizRunner({
  questions,
  recall,
  setLabel,
  onComplete,
  onRestart,
  onChangeSet,
  changeSetLabel = "Change set",
}: QuizRunnerProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const reportedRef = useRef(false);

  const question = questions[index];
  const isComplete = questions.length > 0 && index >= questions.length;

  const choose = useCallback(
    (option: string) => {
      if (selected !== null || !question) return;
      setSelected(option);
      if (option === question.answer) {
        setScore((current) => current + 1);
      }
    },
    [selected, question],
  );

  const advance = useCallback(() => {
    if (selected === null) return;
    setSelected(null);
    setIndex((current) => current + 1);
  }, [selected]);

  // Number keys pick an answer; Enter or Space moves on.
  useEffect(() => {
    if (!question) return;

    function onKeyDown(event: KeyboardEvent) {
      if (selected === null) {
        const position = Number(event.key);
        if (
          Number.isInteger(position) &&
          position >= 1 &&
          position <= question.options.length
        ) {
          event.preventDefault();
          choose(question.options[position - 1]);
        }
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        advance();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [question, selected, choose, advance]);

  // Move focus to the continue button so keyboard users are not stranded.
  useEffect(() => {
    if (selected !== null) {
      nextButtonRef.current?.focus();
    }
  }, [selected]);

  // Report the result exactly once, however many times this re-renders.
  useEffect(() => {
    if (isComplete && !reportedRef.current) {
      reportedRef.current = true;
      onComplete({ correct: score, total: questions.length });
    }
  }, [isComplete, score, questions.length, onComplete]);

  const restart = useCallback(() => {
    reportedRef.current = false;
    setIndex(0);
    setSelected(null);
    setScore(0);
    onRestart();
  }, [onRestart]);

  if (isComplete) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="practice-panel">
        <p className="eyebrow">{setLabel}</p>
        <h2>
          {score} out of {questions.length}
        </h2>
        <p className="practice-intro">
          {percentage >= 80
            ? "Strong recall. Try another set, or move on to the next script."
            : "Worth another pass. Repetition is what makes these stick."}
        </p>
        <div className="page-actions">
          <button
            className="button-link button-link--primary"
            onClick={restart}
            type="button"
          >
            <RotateCcw aria-hidden="true" size={18} />
            Go again
          </button>
          <button
            className="button-link button-link--secondary"
            onClick={onChangeSet}
            type="button"
          >
            {changeSetLabel}
          </button>
        </div>
      </div>
    );
  }

  if (!question) return null;

  const isCorrect = selected === question.answer;

  return (
    <div className="practice-panel">
      <div className="practice-progress">
        <span>
          Question {index + 1} of {questions.length}
        </span>
        <span>{score} correct</span>
      </div>

      <p className="practice-glyph" lang="ja">
        {question.character}
      </p>
      <p className="practice-prompt">What is the {recall}?</p>

      <div className="practice-options">
        {question.options.map((option, position) => {
          const isChosen = selected === option;
          const isAnswer = option === question.answer;
          const state =
            selected === null
              ? ""
              : isAnswer
                ? " practice-option--correct"
                : isChosen
                  ? " practice-option--wrong"
                  : " practice-option--dim";

          return (
            <button
              className={`practice-option${state}`}
              disabled={selected !== null}
              key={option}
              onClick={() => choose(option)}
              type="button"
            >
              <kbd>{position + 1}</kbd>
              {option}
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="practice-feedback" role="status">
        {selected !== null && (
          <p className={isCorrect ? "feedback-correct" : "feedback-wrong"}>
            {isCorrect ? (
              <>
                <Check aria-hidden="true" size={18} />
                Correct
              </>
            ) : (
              <>
                <X aria-hidden="true" size={18} />
                {question.character} is {question.answer}
              </>
            )}
          </p>
        )}
      </div>

      <div className="page-actions">
        <button
          className="button-link button-link--primary"
          disabled={selected === null}
          onClick={advance}
          ref={nextButtonRef}
          type="button"
        >
          {index + 1 === questions.length ? "See results" : "Next character"}
        </button>
        <button
          className="button-link button-link--secondary"
          onClick={onChangeSet}
          type="button"
        >
          {changeSetLabel}
        </button>
      </div>
    </div>
  );
}
