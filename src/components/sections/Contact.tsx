"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone } from "lucide-react";
import { fullAddress, mapsLink, site, telLink, whatsappLink } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import { Rich } from "@/i18n/Rich";
import { Button } from "@/components/ui/Button";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal";
import styles from "./Contact.module.scss";

/** Come ordinare da asporto: si ordina solo per telefono (nessuna prenotazione o ordine sul sito). */
export function Contact() {
  const { dict } = useI18n();
  const t = dict.contact;
  const wa = whatsappLink();

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.side}>
          <SectionHeading
            id="contact-title"
            eyebrow={t.eyebrow}
            title={<Rich text={t.title} />}
            intro={t.intro}
          />

          <motion.ol
            className={styles.steps}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          >
            {t.steps.map((step, i) => (
              <motion.li key={step.title} variants={staggerItem} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <Reveal delay={0.1} className={styles.card}>
          <OpenStatus tone="light" />

          <a href={telLink} className={styles.phone}>
            <span className={styles.phoneIcon}>
              <Phone aria-hidden="true" />
            </span>
            <span>
              <span className={styles.phoneLabel}>{t.callUs}</span>
              <span className={styles.phoneNumber}>{site.contacts.phoneDisplay}</span>
            </span>
          </a>

          {wa && (
            <div className={styles.wa}>
              <Button href={wa} variant="light" icon={<WhatsappIcon />}>
                {t.whatsapp}
              </Button>
              <p>{t.whatsappHint}</p>
            </div>
          )}

          <div className={styles.where}>
            <MapPin aria-hidden="true" />
            <div>
              <p className={styles.whereTitle}>{t.whereTitle}</p>
              <p>{fullAddress}</p>
            </div>
          </div>

          <div className={styles.ctas}>
            <Button href={telLink} size="lg" icon={<Phone />}>
              {dict.common.call}
            </Button>
            <Button href={mapsLink} size="lg" variant="light" icon={<Navigation />}>
              {t.directions}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
