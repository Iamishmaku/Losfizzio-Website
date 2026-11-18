export const locales = ["it", "en", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

/** Cookie in cui salviamo la lingua scelta dall'utente (letto dal proxy). */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  de: "Deutsch",
};

/** Tag BCP 47 per Intl (date, prezzi). */
export const intlLocale: Record<Locale, string> = {
  it: "it-IT",
  en: "en-GB",
  de: "de-DE",
};

export const ogLocale: Record<Locale, string> = {
  it: "it_IT",
  en: "en_GB",
  de: "de_DE",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Costruisce un percorso con il prefisso della lingua, es. ("en", "/menu") → "/en/menu". */
export function localePath(locale: Locale, path = "") {
  if (!path || path === "/") return `/${locale}`;
  if (path.startsWith("#")) return `/${locale}${path}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Testo tradotto nelle tre lingue. */
export type Localized<T = string> = Record<Locale, T>;

/** Crea un testo localizzato; se manca una traduzione usa l'italiano. */
export function l(it: string, en?: string, de?: string): Localized {
  return { it, en: en ?? it, de: de ?? en ?? it };
}

/** Lingua per i visitatori stranieri la cui lingua non è disponibile (es. francese, olandese). */
export const foreignFallbackLocale: Locale = "en";

/**
 * Sceglie la lingua migliore da un header Accept-Language, es. "de-CH,de;q=0.9,en;q=0.8".
 * Nessuna lingua disponibile → inglese; header assente (es. motori di ricerca) → italiano.
 */
export function matchLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return defaultLocale;
  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag: tag.toLowerCase(), q: q ? Number(q.trim().slice(2)) || 0 : 1 };
    })
    .filter((x) => x.tag && x.q > 0)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }
  return ranked.some((r) => r.tag !== "*") ? foreignFallbackLocale : defaultLocale;
}
