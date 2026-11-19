"use client";

import clsx from "clsx";
import { intlLocale } from "@/i18n/config";
import { fmt } from "@/i18n/format";
import { useI18n } from "@/i18n/I18nProvider";
import { formatDayKey, getOpenStatus } from "@/lib/hours";
import { useRomeClock } from "@/lib/useRomeClock";
import styles from "./OpenStatus.module.scss";

/** Badge "aperto/chiuso" calcolato lato client sull'ora di Roma (la pagina resta statica). */
export function OpenStatus({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const { locale, dict } = useI18n();
  const clock = useRomeClock();
  // clock cambia ogni minuto: ricalcoliamo lo stato di conseguenza
  const status = clock ? getOpenStatus() : null;

  let text = dict.status.fallback;
  if (status && clock) {
    if (status.open) text = fmt(dict.status.openNow, { time: status.closesAt });
    else if (status.closure?.reopenDate && status.closure.reopenTime)
      text = fmt(dict.closure.badge, {
        reopen: formatDayKey(status.closure.reopenDate, intlLocale[locale]),
        time: status.closure.reopenTime,
      });
    else if (status.opensAt && status.opensDay)
      text = fmt(dict.status.closedOpens, {
        when:
          status.opensDay === clock.day
            ? dict.status.today
            : // in italiano, polacco e slovacco i giorni vanno in minuscolo, in inglese e tedesco no
              locale !== "en" && locale !== "de"
              ? dict.days[status.opensDay].toLowerCase()
              : dict.days[status.opensDay],
        time: status.opensAt,
      });
    else text = dict.status.closed;
  }

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
      {text}
    </span>
  );
}
