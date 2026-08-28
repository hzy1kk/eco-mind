import { Reveal } from "./Reveal";

export function AlertsPreview() {
  return (
    <section
      id="alertas"
      className="border-y border-forest/10 bg-forest py-20 text-mist md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sprout">
            Queimadas Alert
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-5xl">
            Veja alertas em tempo real
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist/85">
            Mapa interativo do Brasil com pins por nível de risco — Crítico,
            Alto, Médio e Baixo. Reporte novos focos e ajude a conscientizar
            sua comunidade.
          </p>
          <a
            href="/alerta-queimadas"
            className="mt-8 inline-flex rounded-md bg-sprout px-6 py-3.5 text-base font-semibold text-forest transition hover:bg-white"
          >
            Abrir mapa de alertas
          </a>
        </Reveal>
      </div>
    </section>
  );
}
