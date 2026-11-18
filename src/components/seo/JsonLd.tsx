import { mapsLink, site } from "@/data/site";
import { menu } from "@/data/menu";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/it";
import { openingHoursSpecification } from "@/lib/hours";

/** Dati strutturati schema.org per Google (scheda ristorante, orari, menu), nella lingua della pagina. */
export function JsonLd({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const sameAs = [site.social.instagram, site.social.facebook].filter(Boolean);
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#restaurant`,
    name: site.name,
    alternateName: dict.meta.fullName,
    description: dict.meta.description,
    url: `${site.url}/${locale}`,
    inLanguage: locale,
    telephone: site.contacts.phone,
    ...(site.contacts.email ? { email: site.contacts.email } : {}),
    image: `${site.url}/${locale}/opengraph-image`,
    servesCuisine: ["Pizza", "Italian", "Kebab"],
    priceRange: "€",
    acceptsReservations: true,
    hasMap: mapsLink,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: openingHoursSpecification(),
    hasMenu: {
      "@type": "Menu",
      url: `${site.url}/${locale}/menu`,
      inLanguage: locale,
      hasMenuSection: menu.map((c) => ({
        "@type": "MenuSection",
        name: c.title[locale],
        hasMenuItem: c.items.map((i) => ({
          "@type": "MenuItem",
          name: i.name[locale],
          description: i.description[locale],
          offers: { "@type": "Offer", price: i.price.toFixed(2), priceCurrency: "EUR" },
        })),
      })),
    },
    ...(sameAs.length ? { sameAs } : {}),
    areaServed: ["Dro", "Arco", "Riva del Garda", "Pietramurata", "Ceniga"],
  };

  return (
    <script
      type="application/ld+json"
      // Il contenuto è generato solo da dati statici del progetto
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
