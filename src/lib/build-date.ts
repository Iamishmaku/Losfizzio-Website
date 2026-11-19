/**
 * Data della pubblicazione del sito (impostata in next.config.ts), uguale sul server e nel browser.
 * Le pagine statiche la usano al posto di `new Date()`, che durante la generazione non è disponibile.
 */
export const BUILD_DATE = new Date(process.env.NEXT_PUBLIC_BUILD_DATE ?? "2026-01-01T00:00:00Z");
