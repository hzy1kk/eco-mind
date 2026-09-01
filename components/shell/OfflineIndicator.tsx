"use client";

import { useEffect, useState } from "react";

function readOnline() {
  if (typeof navigator === "undefined") return true;
  return navigator.onLine;
}

export function OfflineIndicator() {
  const [offline, setOffline] = useState(() => !readOnline());

  useEffect(() => {
    const onOnline = () => setOffline(false);
    const onOffline = () => setOffline(true);
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }, []);

  if (!offline) return null;

  return (
    <div
      role="status"
      className="fixed left-0 right-0 top-0 z-[60] bg-burn px-4 py-2 text-center text-xs font-semibold text-mist"
    >
      Você está offline — algumas funções podem estar limitadas
    </div>
  );
}
