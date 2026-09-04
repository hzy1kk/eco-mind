import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <section id="problema" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#3d3429]/[0.08] to-transparent"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burn">
            O problema
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            Florestas desaparecem. A sensação de impotência permanece.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {[
            {
              title: "Desmatamento e queimadas",
              text: "Florestas destruídas, biodiversidade ameaçada e um futuro mais inseguro para quem depende da natureza.",
            },
            {
              title: "Notícias sem caminho",
              text: "Vemos o que acontece… e sentimos que não há o que fazer no dia a dia.",
            },
            {
              title: "Falta uma ponte",
              text: "Entre a preocupação e ações concretas: informação clara, hábitos e engajamento na escola e na comunidade.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delayMs={i * 100}>
              <div className="border-t-2 border-burn/40 pt-5">
                <h3 className="font-display text-xl font-semibold text-earth">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ash">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
