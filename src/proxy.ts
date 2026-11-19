import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale, matchLocale } from "@/i18n/config";

/**
 * Sceglie la lingua per gli indirizzi senza prefisso (es. "/" o "/menu"):
 * 1. la lingua scelta in precedenza sul sito (cookie),
 * 2. altrimenti la lingua del browser/sistema (Accept-Language),
 * 3. altrimenti l'italiano.
 */
/** File veri del sito con estensione: vanno serviti così come sono. */
const SITE_FILES = new Set([
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
  "/llms.txt",
  "/icon.svg",
]);
const PUBLIC_DIRS = ["/images/", "/.well-known/"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Indirizzi con estensione (es. /bot.txt) che non sono file del sito: portiamo alla pagina /404 (stato 404)
  if (pathname.includes(".")) {
    if (SITE_FILES.has(pathname) || PUBLIC_DIRS.some((d) => pathname.startsWith(d))) return;
    const first = pathname.split("/")[1];
    if (!isLocale(first)) return NextResponse.redirect(new URL("/404", request.url), 307);
    return;
  }

  const first = pathname.split("/")[1];
  if (isLocale(first)) return;
  // /404 resta così com'è e mostra la pagina 404 (senza aggiungere la lingua)
  if (pathname === "/404") return;

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved) ? saved : matchLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url);
  // La scelta dipende dagli header della richiesta: le cache non devono condividerla tra utenti
  res.headers.set("Vary", "Accept-Language, Cookie");
  res.headers.set("Cache-Control", "private, no-store");
  return res;
}

export const config = {
  // Esclude solo i file interni di Next e l'icona generata (i file con estensione li gestisce la funzione qui sopra)
  matcher: ["/((?!_next/|api/|apple-icon).*)"],
};
