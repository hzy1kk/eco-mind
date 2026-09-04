import Link from "next/link";
import { Reveal } from "./Reveal";

export function QuizPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-mid">
            Teste seu conhecimento
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            Quanto você sabe sobre o seu planeta?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ash">
            5 perguntas rápidas baseadas em dados reais. Sem cadastro, sem
            pegadinha.
          </p>
          <Link
            href="/quiz"
            className="mt-8 inline-flex rounded-md border border-forest/25 px-6 py-3.5 text-base font-semibold text-forest transition hover:bg-forest hover:text-mist"
          >
            Fazer o quiz
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
