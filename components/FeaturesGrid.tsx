import Link from "next/link";
import { Reveal } from "./Reveal";

const features = [
  {
    href: "/calculadora",
    title: "Calculadora",
    desc: "Descubra sua pegada de carbono em segundos",
    accent: "bg-sprout/30 text-forest",
    icon: "◎",
  },
  {
    href: "/alerta-queimadas",
    title: "Mapa INPE",
    desc: "Focos de queimada em tempo quase real no Brasil",
    accent: "bg-burn/15 text-burn",
    icon: "⊕",
  },
  {
    href: "/quiz",
    title: "Quiz",
    desc: "Teste o que você sabe sobre o planeta",
    accent: "bg-forest/10 text-forest",
    icon: "?",
  },
  {
    href: "/#juntar",
    title: "Comunidade",
    desc: "Junte-se à causa e plante consciência",
    accent: "bg-mist-soft text-forest-mid",
    icon: "♣",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-mid">
            Ferramentas
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-5xl">
            Tudo em um só lugar
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.href} delayMs={i * 70}>
              <li>
                <Link
                  href={f.href}
                  className="group flex h-full flex-col rounded-2xl border border-forest/10 bg-white/70 p-6 transition hover:border-forest-mid/30 hover:bg-white hover:shadow-md"
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-xl ${f.accent}`}
                  >
                    {f.icon}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-forest group-hover:text-forest-mid">
                    {f.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ash">
                    {f.desc}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-forest-mid">
                    Abrir →
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
