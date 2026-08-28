import { LEVEL_META, ALERT_LEVELS } from "@/lib/alerts/levels";

export function FireLegend() {
  return (
    <div
      className="rounded-lg border border-forest/15 bg-white/95 px-3 py-2.5 shadow-md backdrop-blur-sm"
      aria-label="Legenda de níveis de alerta"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ash">
        Nível de alerta
      </p>
      <ul className="space-y-1.5">
        {ALERT_LEVELS.map((level) => (
          <li key={level} className="flex items-center gap-2 text-sm text-ink">
            <span
              className="inline-block h-3 w-3 shrink-0 rounded-full border border-white shadow-sm"
              style={{ backgroundColor: LEVEL_META[level].color }}
              aria-hidden
            />
            {LEVEL_META[level].label}
          </li>
        ))}
      </ul>
    </div>
  );
}
