"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarX2, X } from "lucide-react";
import { intlLocale } from "@/i18n/config";
import { fmt } from "@/i18n/format";
import { useI18n } from "@/i18n/I18nProvider";
import { formatDayKey } from "@/lib/hours";
import { useClosure } from "@/lib/useClosure";
import styles from "./ClosureBanner.module.scss";

/** Testo dell'avviso di chiusura nella lingua corrente (o null se non c'è una chiusura in corso). */
export function useClosureText() {
  const { locale, dict } = useI18n();
  const closure = useClosure();
  if (!closure) return null;
  const date = (key: string) => formatDayKey(key, intlLocale[locale]);
  return {
    title: dict.closure.title,
    text:
      closure.reopenDate && closure.reopenTime
        ? fmt(dict.closure.banner, {
            until: date(closure.until),
            reopen: date(closure.reopenDate),
            time: closure.reopenTime,
          })
        : dict.closure.title,
  };
}

/** Avviso fisso in basso su tutte le pagine durante una chiusura straordinaria. */
export function ClosureBanner() {
  const { dict } = useI18n();
  const closure = useClosureText();
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {closure && !dismissed && (
        <motion.aside
          className={styles.banner}
          role="status"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          <span className={styles.icon}>
            <CalendarX2 aria-hidden="true" />
          </span>
          <p>
            <strong>{closure.title}</strong>
            <span>{closure.text}</span>
          </p>
          <button className={styles.close} onClick={() => setDismissed(true)} aria-label={dict.closure.close}>
            <X />
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
