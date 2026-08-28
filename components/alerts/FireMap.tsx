"use client";

import { useCallback, useEffect, useState } from "react";
import { isInBrazil } from "@/lib/alerts/geo";
import type { AlertLevel, FireAlert } from "@/lib/alerts/types";
import { FireLegend } from "./FireLegend";
import { MapView } from "./MapView";
import { ReportFireModal } from "./ReportFireModal";

type MapLayer = "map" | "satellite";

interface FiresMeta {
  count: number;
  inpe: number;
  nasa: number;
  inpeSource: string | null;
  nasaEnabled: boolean;
  updatedAt: string;
  errors?: string[];
}

export default function FireMap() {
  const [alerts, setAlerts] = useState<FireAlert[]>([]);
  const [meta, setMeta] = useState<FiresMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const [layer, setLayer] = useState<MapLayer>("map");
  const [modalOpen, setModalOpen] = useState(false);
  const [pickMode, setPickMode] = useState(false);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadAllAlerts = useCallback(async () => {
    const [firesRes, userRes] = await Promise.all([
      fetch("/api/fires"),
      fetch("/api/alerts"),
    ]);

    let satellite: FireAlert[] = [];
    let metaPayload: FiresMeta | null = null;

    if (firesRes.ok) {
      const firesData = (await firesRes.json()) as {
        alerts: FireAlert[];
        meta: FiresMeta;
      };
      satellite = firesData.alerts;
      metaPayload = firesData.meta;
    }

    const user: FireAlert[] = userRes.ok
      ? ((await userRes.json()) as FireAlert[])
      : [];

    const userOnly = user.filter((a) => a.source === "user");
    return {
      alerts: [...satellite, ...userOnly],
      meta: metaPayload,
    };
  }, []);

  useEffect(() => {
    loadAllAlerts()
      .then(({ alerts: data, meta: m }) => {
        setAlerts(data);
        setMeta(m);
        if (m?.errors?.length && data.length === 0) {
          setError(m.errors.join(" "));
        }
      })
      .catch(() => setError("Não foi possível carregar os focos de queimada."))
      .finally(() => setLoading(false));
  }, [loadAllAlerts]);

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
      const { alerts: updated, meta: m } = await loadAllAlerts();
      setAlerts(updated);
      setMeta(m);
      closeReport();
    } catch {
      setError("Erro de rede ao enviar alerta.");
    } finally {
      setSubmitting(false);
    }
  }

  const sourceLabel =
    meta && meta.inpe > 0
      ? `INPE · ${meta.inpe} focos${meta.nasa > 0 ? ` · NASA ${meta.nasa}` : ""}`
      : meta?.nasa
        ? `NASA FIRMS · ${meta.nasa} focos`
        : null;

  return (
    <div className="relative h-[calc(100svh-4rem)] w-full">
      {loading ? (
        <div className="flex h-full items-center justify-center bg-mist-soft text-ash">
          Carregando focos de satélite...
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

      {sourceLabel ? (
        <div className="pointer-events-none absolute left-3 top-14 z-[500] sm:top-16">
          <div className="pointer-events-auto rounded-lg border border-forest/15 bg-white/95 px-3 py-1.5 text-xs font-medium text-forest shadow-md backdrop-blur-sm">
            {sourceLabel}
            {meta?.inpeSource === "inpe-10min" ? " · ~10 min" : null}
          </div>
        </div>
      ) : null}

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
