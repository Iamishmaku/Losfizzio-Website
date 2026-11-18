import { defaultLocale, locales, type Locale } from "@/i18n/config";

/**
 * Link canonico e versioni nelle altre lingue (hreflang) per una pagina.
 * `path` è il percorso senza lingua, es. "" per la home o "/menu".
 */
export function alternates(locale: Locale, path: string) {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
      "x-default": `/${defaultLocale}${path}`,
    },
  };
}
