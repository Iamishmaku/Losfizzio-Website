import type { Metadata } from "next";
import Image from "next/image";
import { Bike, Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import {
  displayUrl,
  instagramHandle,
  partnerAddress,
  partnerMapsLink,
  partners,
} from "@/data/partners";
import { site, telLink } from "@/data/site";
import { locales, localePath, ogLocale } from "@/i18n/config";
import { fmt } from "@/i18n/format";
import { Rich } from "@/i18n/Rich";
import { getDictionary, getLocale } from "@/i18n/server";
import { alternates } from "@/lib/seo";
import { PartnersJsonLd } from "@/components/seo/PartnersJsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import styles from "./page.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { partnersTitle: title, partnersDescription: description } = dict.meta;
  // Una pagina con un proprio openGraph perde l'immagine del layout: la indichiamo qui (anteprima su social e WhatsApp)
  const image = `/${locale}/opengraph-image`;
  return {
    title,
    description,
    keywords: dict.meta.partnersKeywords,
    alternates: alternates(locale, "/partners"),
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      url: `/${locale}/partners`,
      siteName: dict.meta.fullName,
      title: dict.meta.titleTemplate.replace("%s", title),
      description,
      images: [{ url: image, width: 1200, height: 630, alt: dict.meta.fullName }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.titleTemplate.replace("%s", title),
      description,
      images: [image],
    },
  };
}

export default async function PartnersPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.partnersPage;

  return (
    <div className={styles.page}>
      <PartnersJsonLd locale={locale} dict={dict} />
      <div className="container">
        <SectionHeading as="h1" eyebrow={t.eyebrow} title={<Rich text={t.title} />} intro={t.intro} />

        <ul className={styles.list} aria-label={t.listLabel}>
          {partners.map((p) => {
            const address = partnerAddress(p);
            const maps = partnerMapsLink(p);
            return (
              <li key={p.id} id={p.id}>
                <article className={styles.card} aria-labelledby={`partner-${p.id}`}>
                  {p.logo && (
                    <div className={styles.logo}>
                      <Image
                        src={p.logo.src}
                        width={p.logo.width}
                        height={p.logo.height}
                        alt={fmt(t.logoAlt, { name: p.name })}
                      />
                    </div>
                  )}

                  <header className={styles.top}>
                    {!p.logo && (
                      <span className={styles.icon}>
                        <Bike aria-hidden="true" />
                      </span>
                    )}
                    <div>
                      <p className={styles.category}>{p.category[locale]}</p>
                      <h2 id={`partner-${p.id}`}>
                        {/* Link "pulito" (senza noreferrer): il partner vede nelle sue statistiche le visite che gli mandiamo */}
                        {p.website ? (
                          <a href={p.website} target="_blank" rel="noopener">
                            {p.name}
                          </a>
                        ) : (
                          p.name
                        )}
                      </h2>
                    </div>
                  </header>

                  <p className={styles.description}>{p.description[locale]}</p>

                  {p.services.length > 0 && (
                    <ul className={styles.tags}>
                      {p.services.map((s) => (
                        <li key={s.it}>{s[locale]}</li>
                      ))}
                    </ul>
                  )}

                  <ul className={styles.contacts}>
                    {address && maps && (
                      <li>
                        <MapPin aria-hidden="true" />
                        <a
                          href={maps}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t.directions}: ${address}`}
                        >
                          {address}
                        </a>
                      </li>
                    )}
                    {p.hours && (
                      <li>
                        <Clock aria-hidden="true" />
                        <span>
                          <span className="sr-only">{t.hours}: </span>
                          {p.hours[locale]}
                        </span>
                      </li>
                    )}
                    {p.phone && (
                      <li>
                        <Phone aria-hidden="true" />
                        <a href={`tel:${p.phone.tel}`}>{p.phone.display}</a>
                      </li>
                    )}
                    {p.email && (
                      <li>
                        <Mail aria-hidden="true" />
                        <a href={`mailto:${p.email}`}>{p.email}</a>
                      </li>
                    )}
                    {p.website && (
                      <li>
                        <Globe aria-hidden="true" />
                        <a
                          href={p.website}
                          target="_blank"
                          rel="noopener"
                          aria-label={`${t.website}: ${displayUrl(p.website)}`}
                        >
                          {displayUrl(p.website)}
                        </a>
                      </li>
                    )}
                    {p.instagram && (
                      <li>
                        <InstagramIcon />
                        <a href={p.instagram} target="_blank" rel="noopener noreferrer">
                          {instagramHandle(p.instagram)}
                        </a>
                      </li>
                    )}
                    {p.facebook && (
                      <li>
                        <FacebookIcon />
                        <a href={p.facebook} target="_blank" rel="noopener noreferrer">
                          Facebook
                        </a>
                      </li>
                    )}
                  </ul>
                </article>
              </li>
            );
          })}
        </ul>

        <section className={styles.after} aria-labelledby="after-title">
          <div>
            <h2 id="after-title">
              <Rich text={t.afterTitle} />
            </h2>
            <p>{t.afterText}</p>
          </div>
          <div className={styles.actions}>
            <Button href={localePath(locale, "/menu")} variant="secondary" size="lg">
              {dict.cta.menu}
            </Button>
            <Button href={telLink} icon={<Phone />} size="lg">
              {fmt(dict.common.callNumber, { phone: site.contacts.phoneDisplay })}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
