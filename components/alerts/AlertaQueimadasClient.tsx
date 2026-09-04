"use client";

import dynamic from "next/dynamic";

const FireMap = dynamic(() => import("@/components/alerts/FireMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[calc(100svh-4rem)] items-center justify-center bg-mist-soft text-ash">
      Carregando mapa...
    </div>
  ),
});

export function AlertaQueimadasClient() {
  return <FireMap />;
}
