"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Star } from "lucide-react";
import { dayOrder, fullAddress, mapsLink, site, telLink, whatsappLink } from "@/data/site";
import { localePath } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";
import { slotLines, weekHours } from "@/lib/hours";
import { useSeason } from "@/lib/useSeason";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "@/components/ui/SocialIcons";
import styles from "./Footer.module.scss";

export function Footer() {
  const { locale, dict } = useI18n();
  const { instagram, facebook, googleReviews } = site.social;
  const season = useSeason();
  const hours = weekHours(season);
  const links = [
    { href: localePath(locale, "#about"), label: dict.nav.about },
    { href: localePath(locale, "/menu"), label: dict.nav.menu },
    { href: localePath(locale, "#hours"), label: dict.nav.hours },
    { href: localePath(locale, "#location"), label: dict.nav.location },
    { href: localePath(locale, "#contact"), label: dict.nav.contact },
    { href: localePath(locale, "/privacy"), label: dict.nav.privacy },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0 30 C240 60 480 0 720 30 C960 60 1200 0 1440 30 L1440 60 L0 60Z" fill="currentColor" />
        </svg>
      </div>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo tone="light" />
          <p>{dict.meta.description}</p>
          <div className={styles.social}>
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
            )}
            {facebook && (
              <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
            )}
            {googleReviews && (
              <a
                href={googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.footer.reviews}
              >
                <Star />
              </a>
            )}
          </div>
        </div>

        <div>
          <h2 className={styles.title}>{dict.footer.contacts}</h2>
          <ul className={styles.list}>
            <li>
              <MapPin aria-hidden="true" />
              <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                {fullAddress}
              </a>
            </li>
            <li>
              <Phone aria-hidden="true" />
              <a href={telLink}>{site.contacts.phoneDisplay}</a>
            </li>
            {whatsappLink() && (
              <li>
                <WhatsappIcon />
                <a href={whatsappLink()!} target="_blank" rel="noopener noreferrer">
                  {dict.contact.whatsapp}
                </a>
              </li>
            )}
            {site.contacts.email && (
              <li>
                <Mail aria-hidden="true" />
                <a href={`mailto:${site.contacts.email}`}>{site.contacts.email}</a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>{dict.footer.hours}</h2>
          <p className={styles.season}>{dict.visit.season[season]}</p>
          <dl className={styles.hours}>
            {dayOrder.map((d) => (
              <div key={d}>
                <dt>{dict.days[d]}</dt>
                <dd>
                  {slotLines(hours[d], dict.status.closed).map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className={styles.title}>{dict.footer.explore}</h2>
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          © {dict.meta.fullName} · {site.address.city} ({site.address.province})
        </p>
        <p>{dict.footer.madeWith}</p>
      </div>
    </footer>
  );
}
