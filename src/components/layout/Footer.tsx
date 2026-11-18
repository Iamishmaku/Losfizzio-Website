import Link from "next/link";
import { MapPin, Phone, Mail, Star } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { dayLabels, dayOrder, fullAddress, mapsLink, navLinks, site, telLink } from "@/data/site";
import { slotLines } from "@/lib/hours";
import { Logo } from "@/components/ui/Logo";
import styles from "./Footer.module.scss";

export function Footer() {
  const { instagram, facebook, googleReviews } = site.social;

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
          <p>{site.description}</p>
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
                aria-label="Recensioni su Google"
              >
                <Star />
              </a>
            )}
          </div>
        </div>

        <div>
          <h2 className={styles.title}>Contatti</h2>
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
            {site.contacts.email && (
              <li>
                <Mail aria-hidden="true" />
                <a href={`mailto:${site.contacts.email}`}>{site.contacts.email}</a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>Orari</h2>
          <dl className={styles.hours}>
            {dayOrder.map((d) => (
              <div key={d}>
                <dt>{dayLabels[d]}</dt>
                <dd>
                  {slotLines(site.hours[d]).map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className={styles.title}>Esplora</h2>
          <ul className={styles.links}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/privacy">Privacy e cookie</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          © {site.fullName} · {site.address.city} ({site.address.province})
        </p>
        <p>Fatto con passione (e un po&apos; di farina) in Valle del Sarca.</p>
      </div>
    </footer>
  );
}
