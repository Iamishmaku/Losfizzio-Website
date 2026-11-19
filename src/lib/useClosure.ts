"use client";

import { useSyncExternalStore } from "react";
import { BUILD_DATE } from "./build-date";
import { activeClosure, dateKeyInRome, type ActiveClosure } from "./hours";

function subscribe(cb: () => void) {
  const t = window.setInterval(cb, 10 * 60 * 1000);
  return () => window.clearInterval(t);
}

const BUILD_KEY = dateKeyInRome(BUILD_DATE);

/**
 * Chiusura straordinaria in corso (o null). Come per la stagione, la pagina statica usa la data
 * della pubblicazione e il browser si aggiorna subito alla data di oggi: a chiusura finita l'avviso sparisce da solo.
 */
export function useClosure(): ActiveClosure | null {
  const key = useSyncExternalStore(
    subscribe,
    () => dateKeyInRome(),
    () => BUILD_KEY,
  );
  return activeClosure(key);
}
