"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./Marquee.module.scss";

function Star() {
  return (
    <svg viewBox="0 0 24 24" className={styles.star} aria-hidden="true">
      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5Z" fill="currentColor" />
    </svg>
  );
}

export function Marquee({ reverse = false }: { reverse?: boolean }) {
  const { dict } = useI18n();
  const items = dict.marquee;
  const row = (
    <div className={styles.row}>
      {items.map((t) => (
        <Fragment key={t}>
          <span>{t}</span>
          <Star />
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className={styles.clip} aria-hidden="true">
      <div className={styles.marquee}>
        <motion.div
          className={styles.track}
          animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {row}
          {row}
        </motion.div>
      </div>
    </div>
  );
}
