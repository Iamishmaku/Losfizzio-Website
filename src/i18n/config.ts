import { cs as csPhrases, pl as plPhrases, sk as skPhrases } from "./content";

export const locales = ["it", "en", "de", "pl", "sk", "cs"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

/** Cookie in cui salviamo la lingua scelta dall'utente (letto dal proxy). */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  de: "Deutsch",
  pl: "Polski",
  sk: "Slovenčina",
  cs: "Čeština",
};

/** Tag BCP 47 per Intl (date, prezzi). */
export const intlLocale: Record<Locale, string> = {
  it: "it-IT",
  en: "en-GB",
  de: "de-DE",
  pl: "pl-PL",
  sk: "sk-SK",
  cs: "cs-CZ",
};

export const ogLocale: Record<Locale, string> = {
  it: "it_IT",
  en: "en_GB",
  de: "de_DE",
  pl: "pl_PL",
  sk: "sk_SK",
  cs: "cs_CZ",
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

/** Testo tradotto in tutte le lingue del sito. */
export type Localized<T = string> = Record<Locale, T>;

/**
 * Crea un testo localizzato da italiano, inglese e tedesco.
 * Polacco, slovacco e ceco vengono da src/i18n/content.ts (cercati con il testo italiano);
 * se una traduzione manca si usa l'inglese, e se manca anche quello l'italiano.
 */
export function l(it: string, en?: string, de?: string): Localized {
  const english = en ?? it;
  return {
    it,
    en: english,
    de: de ?? english,
    pl: plPhrases[it] ?? english,
    sk: skPhrases[it] ?? english,
    cs: csPhrases[it] ?? english,
  };
}

/** Lingue simili a una di quelle del sito (aggiungine qui se serve, es. { hr: "en" }). */
const localeAliases: Partial<Record<string, Locale>> = {};

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
    const alias = localeAliases[base];
    if (alias) return alias;
  }
  return ranked.some((r) => r.tag !== "*") ? foreignFallbackLocale : defaultLocale;
}
