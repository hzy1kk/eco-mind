import type { AlertLevel } from "./types";

/** Maps INPE Fire Radiative Power (MW) to display level. */
export function frpToLevel(frp: number | null | undefined): AlertLevel {
  if (frp == null || Number.isNaN(frp)) return "medio";
  if (frp >= 100) return "critico";
  if (frp >= 50) return "alto";
  if (frp >= 20) return "medio";
  return "baixo";
}
