"use client";

import { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { BRAZIL_CENTER, BRAZIL_DEFAULT_ZOOM } from "@/lib/alerts/geo";
import { LEVEL_META } from "@/lib/alerts/levels";
import type { FireAlert } from "@/lib/alerts/types";
import { createPinIcon } from "./createPinIcon";

type MapLayer = "map" | "satellite";

const TILES: Record<MapLayer, { url: string; attribution: string }> = {
  map: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics",
  },
};

function MapClickHandler({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click(e) {
      if (!enabled) return;
      onClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

function LayerSwitcher({ layer }: { layer: MapLayer }) {
  const map = useMap();

  useEffect(() => {
    map.invalidateSize();
  }, [map, layer]);

  return null;
}

interface MapViewProps {
  alerts: FireAlert[];
  layer: MapLayer;
  pickMode: boolean;
  onMapClick: (lat: number, lng: number) => void;
  selectedCoords: { lat: number; lng: number } | null;
}

export function MapView({
  alerts,
  layer,
  pickMode,
  onMapClick,
  selectedCoords,
}: MapViewProps) {
  const tile = TILES[layer];

  return (
    <MapContainer
      center={BRAZIL_CENTER}
      zoom={BRAZIL_DEFAULT_ZOOM}
      className="h-full w-full"
      scrollWheelZoom
    >
      <TileLayer attribution={tile.attribution} url={tile.url} />
      <LayerSwitcher layer={layer} />
      <MapClickHandler enabled={pickMode} onClick={onMapClick} />

      {alerts.map((alert) => (
        <Marker
          key={alert.id}
          position={[alert.lat, alert.lng]}
          icon={createPinIcon(alert.level)}
        >
          <Popup>
            <div className="min-w-[160px] text-sm">
              <p className="font-semibold text-ink">
                {LEVEL_META[alert.level].label}
              </p>
              {alert.description ? (
                <p className="mt-1 text-ash">{alert.description}</p>
              ) : null}
              <p className="mt-2 text-xs text-ash/80">
                {new Date(alert.reportedAt).toLocaleString("pt-BR")}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}

      {selectedCoords ? (
        <Marker
          position={[selectedCoords.lat, selectedCoords.lng]}
          icon={createPinIcon("critico")}
        />
      ) : null}
    </MapContainer>
  );
}
