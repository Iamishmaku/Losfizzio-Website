import type { Metadata } from "next";
import localFont from "next/font/local";
import { ArrowLeft } from "lucide-react";
import { PizzaArt } from "@/components/ui/PizzaArt";
import { themeScript } from "@/lib/theme-script";
import "@/styles/globals.scss";
import styles from "./global-not-found.module.scss";

const display = localFont({
  src: [{ path: "../fonts/fraunces-latin-standard-normal.woff2", style: "normal", weight: "100 900" }],
  variable: "--font-display",
  fallback: ["Georgia", "serif"],
});

const body = localFont({
  src: [{ path: "../fonts/manrope-latin-wght-normal.woff2", style: "normal", weight: "200 800" }],
  variable: "--font-body",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "404 · Lo Sfizio",
  robots: { index: false },
};

const messages = [
  { lang: "it", title: "Pagina non trovata", back: "Torna alla home" },
  { lang: "en", title: "Page not found", back: "Back to home" },
  { lang: "de", title: "Seite nicht gefunden", back: "Zur Startseite" },
];

/** 404 per gli indirizzi che non corrispondono a nessuna pagina (in tre lingue, senza layout). */
export default function GlobalNotFound() {
  return (
    <html lang="it" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <main className={styles.page}>
          <div className={styles.art}>
            <PizzaArt seed="404" toppings={["tomato", "mozzarella", "olive"]} />
          </div>
          <p className={styles.code}>404</p>
          {messages.map((m) => (
            <div key={m.lang} lang={m.lang} className={styles.block}>
              <h1>{m.title}</h1>
              <a href={`/${m.lang}`} className={styles.link}>
                <ArrowLeft aria-hidden="true" />
                {m.back}
              </a>
            </div>
          ))}
        </main>
      </body>
    </html>
  );
}
