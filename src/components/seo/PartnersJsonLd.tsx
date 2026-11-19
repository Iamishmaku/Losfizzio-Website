import { partners } from "@/data/partners";
import { site } from "@/data/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/it";

/**
 * Dati strutturati schema.org della pagina /partners: la pagina, il percorso di navigazione (breadcrumb)
 * e l'elenco delle attività amiche con indirizzo e contatti, nella lingua della pagina.
 */
export function PartnersJsonLd({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const homeUrl = `${site.url}/${locale}`;
  const pageUrl = `${homeUrl}/partners`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#page`,
        url: pageUrl,
        name: dict.meta.partnersTitle,
        description: dict.meta.partnersDescription,
        inLanguage: locale,
        isPartOf: { "@type": "WebSite", name: site.name, url: homeUrl },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#list` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.nav.home, item: homeUrl },
          { "@type": "ListItem", position: 2, name: dict.partnersPage.eyebrow, item: pageUrl },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#list`,
        name: dict.partnersPage.listLabel,
        numberOfItems: partners.length,
        itemListElement: partners.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": p.schemaType,
            "@id": `${pageUrl}#${p.id}`,
            name: p.name,
            description: p.description[locale],
            ...(p.website ? { url: p.website } : {}),
            ...(p.logo ? { logo: `${site.url}${p.logo.src}` } : {}),
            ...(p.phone ? { telephone: p.phone.tel } : {}),
            ...(p.email ? { email: p.email } : {}),
            ...(p.address
              ? {
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: p.address.street,
                    postalCode: p.address.postalCode,
                    addressLocality: p.address.city,
                    addressRegion: p.address.province,
                    addressCountry: "IT",
                  },
                }
              : {}),
            sameAs: [p.website, p.instagram, p.facebook].filter(Boolean),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Il contenuto è generato solo da dati statici del progetto
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
