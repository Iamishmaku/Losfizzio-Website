"use client";

import { useSyncExternalStore } from "react";
import { nowInRome } from "./hours";
import type { DayKey } from "@/data/site";

function subscribe(cb: () => void) {
  const t = window.setInterval(cb, 30_000);
  return () => window.clearInterval(t);
}

/** Snapshot come stringa, così React confronta per valore e non ri-renderizza a vuoto. */
const getSnapshot = () => {
  const { day, minutes } = nowInRome();
  return `${day}|${minutes}`;
};

/**
 * Giorno e ora correnti a Roma, aggiornati ogni 30 secondi.
 * Restituisce null durante il prerender (la pagina resta statica) e al primo render lato client.
 */
export function useRomeClock(): { day: DayKey; minutes: number } | null {
  const snap = useSyncExternalStore(subscribe, getSnapshot, () => null);
  if (!snap) return null;
  const [day, minutes] = snap.split("|");
  return { day: day as DayKey, minutes: Number(minutes) };
}
