"use client";

import { useEffect, useRef, useState } from "react";
import { CLIMATE_STATS, IMPACT_STATS } from "@/data/climate-stats";
import { Reveal } from "./Reveal";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const steps = 60;
        const inc = target / steps;
        let cur = 0;
        const t = setInterval(() => {
          cur += inc;
          if (cur >= target) {
            cur = target;
            clearInterval(t);
          }
          setValue(Math.floor(cur));
        }, 20);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export function ImpactStats() {
  return (
    <section className="border-y border-forest/10 bg-mist-soft/70 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-mid">
            Impacto coletivo
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest md:text-5xl">
            Números que crescem com a comunidade
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_STATS.map((stat, i) => (
            <Reveal key={stat.label} delayMs={i * 80}>
              <li className="text-center">
                <p className="font-display text-4xl font-semibold tabular-nums text-forest md:text-5xl">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-ash">{stat.label}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ClimateReality() {
  return (
    <section id="realidade" className="bg-[#0F1A14] py-20 text-mist md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sprout">
            A realidade, sem filtro
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-5xl">
            Os números não pedem licença pra mudar
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist/75">
            Antes de qualquer app ou calculadora, existe um planeta real
            reagindo às nossas escolhas. Aqui estão os dados mais recentes.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {CLIMATE_STATS.map((stat, i) => (
            <Reveal key={stat.value} delayMs={i * 90}>
              <li className="rounded-xl border border-mist/10 bg-ink/30 p-6">
                <p
                  className={`font-display text-3xl font-semibold ${
                    stat.trend === "down" ? "text-sprout" : "text-amber-400"
                  }`}
                >
                  {stat.trend === "up" ? "↑ " : "↓ "}
                  {stat.value}
                </p>
                <p className="mt-3 text-base leading-relaxed text-mist/85">
                  {stat.label}
                </p>
                <p className="mt-3 text-xs text-mist/50">Fonte: {stat.source}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
