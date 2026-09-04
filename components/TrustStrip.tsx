import { Reveal } from "./Reveal";

const badges = [
  "Dados INPE",
  "Open Source",
  "Projeto escolar",
  "100% gratuito",
];

export function TrustStrip() {
  return (
    <section className="border-y border-forest/10 bg-white/50 py-8">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {badges.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-sm font-medium text-ash"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sprout-deep" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
