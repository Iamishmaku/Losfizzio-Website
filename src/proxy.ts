import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale, matchLocale } from "@/i18n/config";

/** File veri del sito con estensione: vanno serviti così come sono. */
const SITE_FILES = new Set([
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
  "/llms.txt",
  "/icon.svg",
]);
const PUBLIC_DIRS = ["/images/", "/.well-known/"];

/**
 * Pagine esistenti (dopo la lingua). Se aggiungi una pagina in src/app/[lang], aggiungila anche qui,
 * altrimenti il suo indirizzo porterebbe alla pagina 404.
 */
const PAGES = new Set(["", "menu", "privacy", "opengraph-image"]);

function notFound(request: NextRequest) {
  return NextResponse.redirect(new URL("/404", request.url), 307);
}

/**
 * - Indirizzi inesistenti (con o senza estensione) → pagina /404.
 * - Indirizzi senza lingua (es. "/" o "/menu") → lingua scelta in precedenza (cookie),
 *   altrimenti quella del browser (Accept-Language), altrimenti l'italiano.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/404") return;

  // File con estensione
  if (pathname.includes(".")) {
    if (SITE_FILES.has(pathname) || PUBLIC_DIRS.some((d) => pathname.startsWith(d))) return;
    return notFound(request);
  }

  const parts = pathname.split("/").filter(Boolean);

  // Indirizzo con la lingua: esiste solo se la pagina è tra quelle note
  if (isLocale(parts[0])) {
    return PAGES.has(parts.slice(1).join("/")) ? undefined : notFound(request);
  }

  // Indirizzo senza lingua: se la pagina non esiste, niente giri inutili
  if (!PAGES.has(parts.join("/"))) return notFound(request);

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved) ? saved : matchLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${parts.length ? `/${parts.join("/")}` : ""}`;
  const res = NextResponse.redirect(url);
  // La scelta dipende dagli header della richiesta: le cache non devono condividerla tra utenti
  res.headers.set("Vary", "Accept-Language, Cookie");
  res.headers.set("Cache-Control", "private, no-store");
  return res;
}

export const config = {
  // Esclude solo i file interni di Next e l'icona generata
  matcher: ["/((?!_next/|api/|apple-icon).*)"],
};
