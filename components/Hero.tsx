import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "./ui/AnimatedCounter";

export function Hero() {
  return (
    <section
      id="topo"
      className="hero-visual relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0 animate-fade-in bg-[radial-gradient(ellipse_at_30%_20%,rgba(184,236,200,0.18),transparent_50%)]" />
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
        <div className="max-w-2xl">
          <div className="animate-fade-up mb-4 flex items-center gap-3 md:mb-6">
            <Image
              src="/brand/logo-ecomind.png"
              alt="EcoMind"
              width={512}
              height={512}
              className="h-20 w-20 rounded-full drop-shadow-lg ring-2 ring-sprout/30 md:h-28 md:w-28"
              priority
            />
          </div>

          <p className="animate-fade-up animate-delay-1 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-mist sm:text-5xl md:text-7xl">
            EcoMind
          </p>

          <h1 className="animate-fade-up animate-delay-2 mt-3 max-w-xl font-display text-xl font-medium leading-snug text-sprout sm:text-2xl md:mt-4 md:text-3xl">
            Cada decisão é uma{" "}
            <em className="not-italic text-mist">semente</em>.
          </h1>

          <p className="animate-fade-up animate-delay-3 mt-4 max-w-lg text-base leading-relaxed text-mist/90 md:mt-5 md:text-xl">
            Dados ambientais, pegada de carbono e alertas de queimadas — tudo
            traduzido em ações simples do dia a dia.
          </p>

          <div className="animate-fade-up animate-delay-3 mt-6 inline-flex items-center gap-2 rounded-full border border-mist/20 bg-ink/30 px-4 py-2 text-sm text-mist/90 backdrop-blur-sm">
            <span className="font-display text-lg font-semibold text-sprout">
              <AnimatedCounter target={19300} />
            </span>
            <span>toneladas de CO₂ evitadas pela comunidade</span>
          </div>

          <div className="animate-fade-up animate-delay-3 mt-7 flex flex-wrap items-center gap-3 md:mt-9">
            <Link
              href="/calculadora"
              className="btn-primary inline-flex rounded-md bg-sprout px-5 py-3 text-base font-semibold text-forest md:px-6 md:py-3.5"
            >
              Calcular minha pegada
            </Link>
            <Link
              href="/alerta-queimadas"
              className="inline-flex rounded-md border border-mist/35 px-5 py-3 text-base font-medium text-mist transition hover:border-mist/70 hover:bg-white/10 md:px-6 md:py-3.5"
            >
              Ver mapa de queimadas
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist/50 md:flex"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">
          role para explorar
        </span>
        <div className="h-8 w-px animate-pulse bg-mist/40" />
      </div>
    </section>
  );
}
