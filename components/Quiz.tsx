"use client";

import { useState } from "react";
import { QUIZ_QUESTIONS } from "@/data/quiz";

export function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  const question = QUIZ_QUESTIONS[index];

  function handleAnswer(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);
    const correct = optionIndex === question.correct;
    if (correct) setScore((s) => s + 1);
    setFeedback(question.feedback);
  }

  function next() {
    if (index >= QUIZ_QUESTIONS.length - 1) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setFeedback(null);
  }

  function restart() {
    setIndex(0);
    setScore(0);
    setSelected(null);
    setFeedback(null);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-forest/15 bg-white/90 p-8 text-center shadow-sm">
        <p className="font-display text-3xl font-semibold text-forest">
          {score}/{QUIZ_QUESTIONS.length}
        </p>
        <p className="mt-2 text-lg text-ash">
          {score >= 4
            ? "Excelente! Você conhece bem os dados do planeta."
            : score >= 2
              ? "Bom começo — continue aprendendo com a EcoMind."
              : "Cada resposta é uma semente de consciência. Refaça o quiz!"}
        </p>
        <button
          type="button"
          onClick={restart}
          className="mt-6 rounded-md bg-forest px-6 py-3 text-sm font-semibold text-mist hover:bg-forest-mid"
        >
          Refazer o quiz
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-forest-mid">
        Pergunta {index + 1} de {QUIZ_QUESTIONS.length}
      </p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
        {question.q}
      </h2>

      <ul className="mt-8 space-y-3">
        {question.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = i === question.correct;
          let style =
            "border-forest/15 bg-white hover:border-forest-mid/40 text-ink";
          if (selected !== null) {
            if (isCorrect) style = "border-forest bg-sprout/30 text-forest";
            else if (isSelected) style = "border-burn bg-burn/10 text-burn";
            else style = "border-forest/10 bg-mist/50 text-ash/60";
          }

          return (
            <li key={opt}>
              <button
                type="button"
                disabled={selected !== null}
                onClick={() => handleAnswer(i)}
                className={`w-full rounded-xl border px-5 py-4 text-left text-base font-medium transition ${style}`}
              >
                {opt}
              </button>
            </li>
          );
        })}
      </ul>

      {feedback ? (
        <div className="mt-6 rounded-xl border border-forest/10 bg-mist-soft p-5">
          <p className="text-base leading-relaxed text-ash">{feedback}</p>
          <button
            type="button"
            onClick={next}
            className="mt-4 rounded-md bg-forest px-5 py-2.5 text-sm font-semibold text-mist hover:bg-forest-mid"
          >
            {index >= QUIZ_QUESTIONS.length - 1 ? "Ver resultado" : "Próxima"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
