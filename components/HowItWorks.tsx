import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Educar",
    text: "Informação clara sobre causas e efeitos do desmatamento e das queimadas.",
  },
  {
    n: "02",
    title: "Missões",
    text: "Desafios de conscientização no app — o aluno participa, não só assiste.",
  },
  {
    n: "03",
    title: "Agir",
    text: "Hábitos e engajamento concreto na escola, em casa e na comunidade.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-mid">
            Como funciona
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            Do conhecimento à ação, em três passos
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-0 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delayMs={i * 120}>
              <li
                className={`relative py-2 md:pr-10 ${
                  i < steps.length - 1
                    ? "md:border-r md:border-forest/15"
                    : ""
                } ${i > 0 ? "border-t border-forest/15 pt-8 md:border-t-0 md:pt-2 md:pl-10" : ""}`}
              >
                <span className="font-display text-5xl font-semibold text-sprout-deep/25">
                  {step.n}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-forest">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-base leading-relaxed text-ash">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
