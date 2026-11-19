import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { fontClasses } from "@/fonts/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/providers/Providers";
import { ClosureBanner } from "@/components/ui/ClosureBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { locales, ogLocale, type Locale } from "@/i18n/config";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getDictionaryFor, getLocale } from "@/i18n/server";
import { alternates } from "@/lib/seo";
import { themeScript } from "@/lib/theme-script";
import "@/styles/globals.scss";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionaryFor(locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.title, template: dict.meta.titleTemplate },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    applicationName: site.name,
    alternates: alternates(locale, ""),
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      url: `/${locale}`,
      siteName: dict.meta.fullName,
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: { card: "summary_large_image", title: dict.meta.title, description: dict.meta.description },
    formatDetection: { telephone: true, address: true },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#c8321f" },
    { media: "(prefers-color-scheme: dark)", color: "#15100b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale: Locale = await getLocale();
  const dict = await getDictionaryFor(locale);

  return (
    // suppressHydrationWarning: lo script del tema può aggiungere data-theme prima che React si avvii
    <html lang={locale} className={fontClasses} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#contenuto" className="skip-link">
          {dict.common.skipToContent}
        </a>
        <JsonLd locale={locale} dict={dict} />
        <I18nProvider locale={locale} dict={dict}>
          <Providers>
            <Header />
            <main id="contenuto">{children}</main>
            <Footer />
            <ClosureBanner />
          </Providers>
        </I18nProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
