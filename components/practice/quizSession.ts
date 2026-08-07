import type { PracticePrompt } from "@/types/learning";

export const QUESTION_COUNT = 10;
const OPTION_COUNT = 4;

export type Question = {
  character: string;
  answer: string;
  options: string[];
};

export function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Builds a multiple-choice round from a set of prompts. Distractors are drawn
 * from the same set, so a Hiragana round only ever offers Hiragana answers.
 *
 * Callers must invoke this in an event handler rather than during render — the
 * shuffle is random, so running it while rendering would produce different
 * output on the server and the client.
 */
export function buildQuestions(
  prompts: PracticePrompt[],
  count = QUESTION_COUNT,
): Question[] {
  const allAnswers = Array.from(new Set(prompts.map((prompt) => prompt.answer)));

  return shuffle(prompts)
    .slice(0, count)
    .map((prompt) => {
      const distractors = shuffle(
        allAnswers.filter((answer) => answer !== prompt.answer),
      ).slice(0, OPTION_COUNT - 1);

      return {
        character: prompt.character,
        answer: prompt.answer,
        options: shuffle([prompt.answer, ...distractors]),
      };
    });
}
