import { Reveal } from "./Reveal";

const points = [
  "Aprendizado ativo: o aluno participa, não só assiste",
  "Cidadania e responsabilidade com o meio ambiente",
  "Ligação com Geografia, Biologia e atualidades",
  "Engajamento da turma em um projeto real, feito por alunos",
];

export function School() {
  return (
    <section
      id="escola"
      className="relative overflow-hidden bg-forest py-20 text-mist md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sprout/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-forest-mid/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sprout">
            Por que importa na escola
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-5xl">
            Transformar o tema ambiental em aprendizagem viva
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist/85">
            A EcoMind dialoga com o que está nas notícias e com o currículo —
            e é um projeto da turma, o que aumenta o engajamento.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {points.map((point, i) => (
            <Reveal key={point} delayMs={i * 80}>
              <li className="flex gap-4 border-l-2 border-sprout/50 pl-5">
                <span className="text-base leading-relaxed text-mist/95">
                  {point}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
