"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function readDismissed() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem("ecomind-install-dismissed") === "1";
}

function readStandalone() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(display-mode: standalone)").matches;
}

export function InstallBanner() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(
    null,
  );
  const [dismissed, setDismissed] = useState(readDismissed);
  const [installed, setInstalled] = useState(readStandalone);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  async function install() {
    if (!deferred) return;
    await deferred.prompt();
    const { outcome } = await deferred.userChoice;
    if (outcome === "accepted") setInstalled(true);
    setDeferred(null);
  }

  function dismiss() {
    setDismissed(true);
    sessionStorage.setItem("ecomind-install-dismissed", "1");
  }

  if (installed || dismissed || !deferred) return null;

  return (
    <div className="fixed inset-x-0 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-40 mx-4 md:bottom-4 md:left-auto md:right-4 md:mx-0 md:max-w-sm">
      <div className="flex items-center gap-3 rounded-xl border border-forest/15 bg-white/95 p-4 shadow-lg backdrop-blur-md">
        <div className="flex-1">
          <p className="text-sm font-semibold text-forest">Instalar EcoMind</p>
          <p className="text-xs text-ash">Acesso rápido na tela inicial</p>
        </div>
        <button
          type="button"
          onClick={install}
          className="rounded-md bg-forest px-3 py-2 text-xs font-semibold text-mist"
        >
          Instalar
        </button>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fechar"
          className="text-ash/60 hover:text-ash"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
