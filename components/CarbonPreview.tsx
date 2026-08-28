import Link from "next/link";
import { Reveal } from "./Reveal";

export function CarbonPreview() {
  return (
    <section className="border-y border-forest/10 bg-[#0F1A14] py-20 text-mist md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sprout">
            Ferramenta interativa
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-5xl">
            Sua pegada, em tempo real
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist/80">
            Ajuste deslocamento, alimentação e energia. O resultado é recalculado
            na hora — sem formulário, sem espera.
          </p>
          <Link
            href="/calculadora"
            className="mt-8 inline-flex rounded-md bg-sprout px-6 py-3.5 text-base font-semibold text-ink transition hover:bg-white"
          >
            Calcular minha pegada
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
