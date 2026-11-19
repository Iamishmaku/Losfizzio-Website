"use client";

import { useSyncExternalStore } from "react";
import type { Season } from "@/data/site";
import { BUILD_DATE } from "./build-date";
import { seasonOn } from "./hours";

function subscribe(cb: () => void) {
  const t = window.setInterval(cb, 60 * 60 * 1000);
  return () => window.clearInterval(t);
}

/**
 * Stagione degli orari (estivo/invernale). La pagina statica viene generata con la stagione del giorno
 * della pubblicazione; nel browser si aggiorna subito alla stagione di oggi, senza bisogno di ripubblicare.
 */
export function useSeason(): Season {
  return useSyncExternalStore(
    subscribe,
    () => seasonOn(),
    () => seasonOn(BUILD_DATE),
  );
}
