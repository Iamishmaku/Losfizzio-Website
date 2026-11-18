import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/providers/Providers";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import "@/styles/globals.scss";

const display = localFont({
  src: [
    {
      path: "../fonts/fraunces-latin-standard-normal.woff2",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../fonts/fraunces-latin-standard-italic.woff2",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const body = localFont({
  src: [
    {
      path: "../fonts/manrope-latin-wght-normal.woff2",
      style: "normal",
      weight: "200 800",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Pizzeria in piazza a Dro`,
    template: `%s · ${site.name} Dro`,
  },
  description: site.description,
  keywords: [
    "pizzeria Dro",
    "pizza Dro",
    "kebab Dro",
    "pizza asporto Dro",
    "Lo Sfizio Dro",
    "pizzeria Valle del Sarca",
    "pizzeria Arco",
  ],
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.fullName,
    title: `${site.name} · Pizzeria in piazza a Dro`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Pizzeria in piazza a Dro`,
    description: site.description,
  },
  formatDetection: { telephone: true, address: true },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#c8321f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#contenuto" className="skip-link">
          Vai al contenuto
        </a>
        <JsonLd />
        <Providers>
          <Header />
          <main id="contenuto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
