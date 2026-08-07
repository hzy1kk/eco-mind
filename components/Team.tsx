import { Reveal } from "./Reveal";

const team = [
  { name: "Ana Flávia", role: "CEO / Design", initials: "AF" },
  { name: "Lucas Lohan", role: "CTO / Programação (UX-UI)", initials: "LL" },
  { name: "André Soares", role: "Tecnologia / Programação", initials: "AS" },
  { name: "Gabriel Rosa", role: "Marketing / Conteúdo", initials: "GR" },
];

export function Team() {
  return (
    <section id="equipe" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-mid">
            Nossa equipe
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            Quatro pessoas, um projeto
          </h2>
          <p className="mt-4 max-w-xl text-lg text-ash">
            Cada um cobre uma parte para o projeto andar junto — da marca ao
            código, da ideia ao conteúdo.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person, i) => (
            <Reveal key={person.name} delayMs={i * 90}>
              <li>
                <div
                  aria-hidden
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-lg font-semibold text-sprout"
                >
                  {person.initials}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm leading-snug text-ash">{person.role}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
