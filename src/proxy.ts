import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale, matchLocale } from "@/i18n/config";

/**
 * Sceglie la lingua per gli indirizzi senza prefisso (es. "/" o "/menu"):
 * 1. la lingua scelta in precedenza sul sito (cookie),
 * 2. altrimenti la lingua del browser/sistema (Accept-Language),
 * 3. altrimenti l'italiano.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
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
  // Esclude file interni di Next, file statici (con estensione) e le icone generate
  matcher: ["/((?!_next/|api/|apple-icon|.*\\..*).*)"],
};
