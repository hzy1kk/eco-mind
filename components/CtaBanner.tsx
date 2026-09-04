import Link from "next/link";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-forest px-8 py-14 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(184,236,200,0.2),transparent_55%)]" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold text-mist md:text-4xl">
                Pronto para fazer a diferença?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-mist/80">
                Calcule sua pegada, teste seu conhecimento e acompanhe queimadas
                em tempo real — tudo gratuito.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/calculadora"
                  className="btn-primary inline-flex rounded-md bg-sprout px-6 py-3.5 text-base font-semibold text-forest"
                >
                  Começar agora
                </Link>
                <Link
                  href="/baixar"
                  className="inline-flex rounded-md border border-mist/30 px-6 py-3.5 text-base font-medium text-mist transition hover:bg-white/10"
                >
                  Instalar no celular
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
