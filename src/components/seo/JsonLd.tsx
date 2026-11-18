import { mapsLink, site } from "@/data/site";
import { menu } from "@/data/menu";
import { openingHoursSpecification } from "@/lib/hours";

/** Dati strutturati schema.org per Google (scheda ristorante, orari, menu). */
export function JsonLd() {
  const sameAs = [site.social.instagram, site.social.facebook].filter(Boolean);
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#restaurant`,
    name: site.name,
    alternateName: site.fullName,
    description: site.description,
    url: site.url,
    telephone: site.contacts.phone,
    ...(site.contacts.email ? { email: site.contacts.email } : {}),
    image: `${site.url}/opengraph-image`,
    servesCuisine: ["Pizza", "Italiana", "Kebab"],
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: openingHoursSpecification(),
    hasMenu: {
      "@type": "Menu",
      url: `${site.url}/menu`,
      hasMenuSection: menu.map((c) => ({
        "@type": "MenuSection",
        name: c.title,
        hasMenuItem: c.items.map((i) => ({
          "@type": "MenuItem",
          name: i.name,
          description: i.description,
          offers: {
            "@type": "Offer",
            price: i.price.toFixed(2),
            priceCurrency: "EUR",
          },
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
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
