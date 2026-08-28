"use client";

import { useCallback, useEffect, useState } from "react";
import { isInBrazil } from "@/lib/alerts/geo";
import type { AlertLevel, FireAlert } from "@/lib/alerts/types";
import { FireLegend } from "./FireLegend";
import { MapView } from "./MapView";
import { ReportFireModal } from "./ReportFireModal";

type MapLayer = "map" | "satellite";

export default function FireMap() {
  const [alerts, setAlerts] = useState<FireAlert[]>([]);
  const [loading, setLoading] = useState(true);
  const [layer, setLayer] = useState<MapLayer>("map");
  const [modalOpen, setModalOpen] = useState(false);
  const [pickMode, setPickMode] = useState(false);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadAlerts = useCallback(async () => {
    const res = await fetch("/api/alerts");
    if (!res.ok) throw new Error("Falha ao carregar alertas.");
    return (await res.json()) as FireAlert[];
  }, []);

  useEffect(() => {
    loadAlerts()
      .then(setAlerts)
      .catch(() => setError("Não foi possível carregar os alertas."))
      .finally(() => setLoading(false));
  }, [loadAlerts]);

  function openReport() {
    setError(null);
    setCoords(null);
    setPickMode(false);
    setModalOpen(true);
  }

  function closeReport() {
    setModalOpen(false);
    setPickMode(false);
    setCoords(null);
    setError(null);
  }

  function handleMapClick(lat: number, lng: number) {
    if (!pickMode) return;
    if (!isInBrazil(lat, lng)) {
      setError("Marque um ponto dentro do Brasil.");
      return;
    }
    setCoords({ lat, lng });
    setError(null);
  }

  function handleGeolocation() {
    if (!navigator.geolocation) {
      setError("Geolocalização não disponível neste navegador.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        if (!isInBrazil(lat, lng)) {
          setError("Sua localização está fora do Brasil.");
          return;
        }
        setCoords({ lat, lng });
        setPickMode(false);
        setError(null);
      },
      () => setError("Não foi possível obter sua localização."),
    );
  }

  async function handleSubmit(data: {
    lat: number;
    lng: number;
    level: AlertLevel;
    description?: string;
  }) {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await res.json();
      if (!res.ok) {
        setError(payload.error ?? "Erro ao enviar alerta.");
        return;
      }
      const updated = await loadAlerts();
      setAlerts(updated);
      closeReport();
    } catch {
      setError("Erro de rede ao enviar alerta.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative h-[calc(100svh-4rem)] w-full">
      {loading ? (
        <div className="flex h-full items-center justify-center bg-mist-soft text-ash">
          Carregando mapa...
        </div>
      ) : (
        <MapView
          alerts={alerts}
          layer={layer}
          pickMode={pickMode && modalOpen}
          onMapClick={handleMapClick}
          selectedCoords={coords}
        />
      )}

      <div className="pointer-events-none absolute inset-x-0 top-3 z-[500] flex justify-center px-3">
        <div
          className="pointer-events-auto inline-flex rounded-lg border border-forest/15 bg-white/95 p-1 shadow-md backdrop-blur-sm"
          role="tablist"
          aria-label="Tipo de mapa"
        >
          {(["map", "satellite"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              role="tab"
              aria-selected={layer === mode}
              onClick={() => setLayer(mode)}
              className={`rounded-md px-4 py-1.5 text-sm font-semibold transition ${
                layer === mode
                  ? "bg-forest text-mist"
                  : "text-forest hover:bg-forest/10"
              }`}
            >
              {mode === "map" ? "Mapa" : "Satélite"}
            </button>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-24 left-3 z-[500] sm:bottom-6">
        <div className="pointer-events-auto">
          <FireLegend />
        </div>
      </div>

      <button
        type="button"
        onClick={openReport}
        aria-label="Reportar queimada"
        className="absolute bottom-6 right-4 z-[500] flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-3xl font-light text-white shadow-lg transition hover:bg-red-700"
      >
        +
      </button>

      {error && !modalOpen ? (
        <div className="absolute bottom-24 right-4 z-[500] max-w-xs rounded-lg bg-burn px-3 py-2 text-sm text-white shadow-md">
          {error}
        </div>
      ) : null}

      <ReportFireModal
        open={modalOpen}
        onClose={closeReport}
        onSubmit={handleSubmit}
        coords={coords}
        pickMode={pickMode}
        onStartPickMode={() => {
          setPickMode(true);
          setCoords(null);
          setError(null);
        }}
        onUseGeolocation={handleGeolocation}
        submitting={submitting}
        error={error}
      />
    </div>
  );
}
