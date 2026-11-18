import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./config";
import type { Dictionary } from "./dictionaries/it";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  it: () => import("./dictionaries/it").then((m) => m.it),
  en: () => import("./dictionaries/en").then((m) => m.en),
  de: () => import("./dictionaries/de").then((m) => m.de),
};

/** Lingua della pagina corrente (dal segmento /[lang] dell'URL). Solo Server Components. */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!isLocale(value)) notFound();
  return value;
}

export async function getDictionaryFor(locale: Locale) {
  return dictionaries[locale]();
}

/** Testi tradotti per la pagina corrente. Solo Server Components. */
export async function getDictionary() {
  return getDictionaryFor(await getLocale());
}
