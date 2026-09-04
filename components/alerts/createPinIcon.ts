import L from "leaflet";
import { LEVEL_META } from "@/lib/alerts/levels";
import type { AlertLevel } from "@/lib/alerts/types";

export function createPinIcon(level: AlertLevel): L.DivIcon {
  const color = LEVEL_META[level].color;
  return L.divIcon({
    className: "fire-pin-icon",
    html: `<div style="background:${color};width:16px;height:16px;border-radius:50%;border:2.5px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.35);"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -10],
  });
}
