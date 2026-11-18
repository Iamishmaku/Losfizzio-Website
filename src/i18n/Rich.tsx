import { Fragment } from "react";

/**
 * Rende il testo tradotto evidenziando le parti tra asterischi: "Un piccolo *sfizio*" → Un piccolo <em>sfizio</em>.
 */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/\*(.+?)\*/g);
  return <>{parts.map((p, i) => (i % 2 === 1 ? <em key={i}>{p}</em> : <Fragment key={i}>{p}</Fragment>))}</>;
}

/** Divide un titolo in parole per animarle, tenendo unite le parti tra asterischi (evidenziate). */
export function splitWords(text: string): { text: string; accent: boolean }[] {
  const out: { text: string; accent: boolean }[] = [];
  text.split(/\*(.+?)\*/g).forEach((part, i) => {
    if (i % 2 === 1) out.push({ text: part, accent: true });
    else
      part
        .split(/\s+/)
        .filter(Boolean)
        .forEach((w) => out.push({ text: w, accent: false }));
  });
  return out;
}
