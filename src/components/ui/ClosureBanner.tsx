"use client";

import { useSyncExternalStore } from "react";
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
    id: closure.until,
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

/*
 * Quando il visitatore chiude l'avviso con la X, lo ricordiamo nel browser (localStorage)
 * per quella chiusura: non ricompare cambiando pagina né riaprendo il sito.
 * Una nuova chiusura (date diverse) ha un altro identificativo, quindi l'avviso torna a vedersi.
 */
const DISMISS_KEY = "losfizio:closure-dismissed";
const listeners = new Set<() => void>();
let dismissedInMemory: string | null = null; // se il browser blocca localStorage

function readDismissed() {
  try {
    return window.localStorage.getItem(DISMISS_KEY) ?? dismissedInMemory;
  } catch {
    return dismissedInMemory;
  }
}

function subscribeDismissed(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function dismissClosure(id: string) {
  dismissedInMemory = id;
  try {
    window.localStorage.setItem(DISMISS_KEY, id);
  } catch {
    // modalità privata o archiviazione bloccata: resta nascosto finché la pagina è aperta
  }
  listeners.forEach((l) => l());
}

/** Avviso fisso in basso su tutte le pagine durante una chiusura straordinaria. */
export function ClosureBanner() {
  const { dict } = useI18n();
  const closure = useClosureText();
  const dismissedId = useSyncExternalStore(subscribeDismissed, readDismissed, () => null);
  const dismissed = closure !== null && dismissedId === closure.id;

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
          <button className={styles.close} onClick={() => closure && dismissClosure(closure.id)} aria-label={dict.closure.close}>
            <X />
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
