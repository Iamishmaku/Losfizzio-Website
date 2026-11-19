import localFont from "next/font/local";

/**
 * Caratteri del sito, ospitati nel progetto (licenza OFL).
 * Ogni carattere è diviso in due file con lo stesso nome di famiglia:
 * - "latin": lettere dell'italiano, dell'inglese e del tedesco;
 * - "latin-ext": lettere accentate di polacco e slovacco (ą, ł, č, ľ, ô…).
 * Il browser scarica il secondo file solo se la pagina contiene quelle lettere (unicode-range).
 * I valori devono essere scritti per esteso: next/font non accetta costanti.
 */

export const display = localFont({
  src: [
    { path: "./fraunces-latin-standard-normal.woff2", style: "normal", weight: "100 900" },
    { path: "./fraunces-latin-standard-italic.woff2", style: "italic", weight: "100 900" },
  ],
  declarations: [
    { prop: "font-family", value: "display" },
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const displayExt = localFont({
  src: [
    { path: "./fraunces-latin-ext-standard-normal.woff2", style: "normal", weight: "100 900" },
    { path: "./fraunces-latin-ext-standard-italic.woff2", style: "italic", weight: "100 900" },
  ],
  declarations: [
    { prop: "font-family", value: "display" },
    {
      prop: "unicode-range",
      value:
        "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
  ],
  variable: "--font-display-ext",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

export const body = localFont({
  src: [{ path: "./manrope-latin-wght-normal.woff2", style: "normal", weight: "200 800" }],
  declarations: [
    { prop: "font-family", value: "body" },
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
});

export const bodyExt = localFont({
  src: [{ path: "./manrope-latin-ext-wght-normal.woff2", style: "normal", weight: "200 800" }],
  declarations: [
    { prop: "font-family", value: "body" },
    {
      prop: "unicode-range",
      value:
        "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
  ],
  variable: "--font-body-ext",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

/** Classi da mettere su <html> per attivare tutti i caratteri. */
export const fontClasses = [display.variable, displayExt.variable, body.variable, bodyExt.variable].join(" ");
