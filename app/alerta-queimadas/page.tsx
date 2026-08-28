import type { Metadata } from "next";
import { AlertaQueimadasClient } from "@/components/alerts/AlertaQueimadasClient";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Alerta de queimadas — EcoMind",
  description:
    "Mapa interativo de alertas de queimadas no Brasil. Veja níveis de risco e reporte novos focos.",
};

export default function AlertaQueimadasPage() {
  return (
    <>
      <Header solid />
      <main className="pt-16">
        <div className="border-b border-forest/10 bg-mist px-5 py-3 md:px-8">
          <h1 className="font-display text-xl font-semibold text-forest md:text-2xl">
            Alerta de queimadas
          </h1>
          <p className="mt-0.5 text-sm text-ash">
            Mapa interativo com níveis de alerta no Brasil. Toque no + para
            reportar.
          </p>
        </div>
        <AlertaQueimadasClient />
      </main>
    </>
  );
}
