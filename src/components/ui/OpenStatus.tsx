"use client";

import clsx from "clsx";
import { dayLabels } from "@/data/site";
import { getOpenStatus, type OpenStatus as Status } from "@/lib/hours";
import { useRomeClock } from "@/lib/useRomeClock";
import styles from "./OpenStatus.module.scss";

function label(status: Status, today: string) {
  if (status.open) return `Aperto ora · chiude alle ${status.closesAt}`;
  if (!status.opensAt || !status.opensDay) return "Chiuso";
  const when = status.opensDay === today ? "oggi" : dayLabels[status.opensDay].toLowerCase();
  return `Chiuso · apre ${when} alle ${status.opensAt}`;
}

/** Badge "aperto/chiuso" calcolato lato client sull'ora di Roma (la pagina resta statica). */
export function OpenStatus({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const clock = useRomeClock();
  // clock cambia ogni minuto: ricalcoliamo lo stato di conseguenza
  const status = clock ? getOpenStatus() : null;

  return (
    <span
      className={clsx(
        styles.badge,
        styles[tone],
        status && (status.open ? styles.open : styles.closed),
        className,
      )}
      aria-live="polite"
    >
      <span className={styles.dot} aria-hidden="true" />
      {status && clock ? label(status, clock.day) : "Orari di apertura"}
    </span>
  );
}
