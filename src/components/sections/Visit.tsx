"use client";

import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Info, MapPin, Navigation, Phone } from "lucide-react";
import { dayOrder, fullAddress, mapsEmbed, mapsLink, site, telLink } from "@/data/site";
import { slotLines } from "@/lib/hours";
import { fmt } from "@/i18n/format";
import { useI18n } from "@/i18n/I18nProvider";
import { Rich } from "@/i18n/Rich";
import { useRomeClock } from "@/lib/useRomeClock";
import { Button } from "@/components/ui/Button";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Visit.module.scss";

export function Visit() {
  const { dict } = useI18n();
  const t = dict.visit;
  const today = useRomeClock()?.day ?? null;
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className={styles.section} aria-labelledby="visit-title">
      <div className="container">
        <SectionHeading
          id="visit-title"
          tone="light"
          eyebrow={t.eyebrow}
          title={<Rich text={t.title} />}
          intro={t.intro}
        />

        <div className={styles.grid}>
          <Reveal className={styles.card} id="hours">
            <div className={styles.cardHead}>
              <h3>{t.hoursTitle}</h3>
              <OpenStatus tone="light" />
            </div>
            <dl className={styles.hours}>
              {dayOrder.map((d) => (
                <div key={d} className={clsx(styles.day, d === today && styles.today)}>
                  <dt>
                    {dict.days[d]}
                    {d === today && <span className={styles.todayBadge}>{t.today}</span>}
                  </dt>
                  <dd className={clsx(!site.hours[d].length && styles.closed)}>
                    {slotLines(site.hours[d], dict.status.closed).map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <p className={styles.note}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button className={styles.info} aria-label={t.infoLabel}>
                    <Info />
                  </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className={styles.tooltip} sideOffset={6}>
                    {t.tooltip}
                    <Tooltip.Arrow className={styles.tooltipArrow} />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
              {t.note}
            </p>
          </Reveal>

          <Reveal className={styles.mapCard} delay={0.1} id="location">
            <div className={styles.map}>
              {mapLoaded ? (
                <iframe
                  src={mapsEmbed}
                  title={fmt(t.mapTitle, { name: site.name, address: fullAddress })}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <button className={styles.mapPlaceholder} onClick={() => setMapLoaded(true)}>
                  <motion.span
                    className={styles.pin}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <MapPin />
                  </motion.span>
                  <span className={styles.mapCta}>{t.showMap}</span>
                  <span className={styles.mapHint}>{t.mapHint}</span>
                </button>
              )}
            </div>
            <div className={styles.address}>
              <div>
                <h3>{t.whereTitle}</h3>
                <p>{fullAddress}</p>
              </div>
              <div className={styles.addressCtas}>
                <Button href={mapsLink} variant="light" icon={<Navigation />}>
                  {t.directions}
                </Button>
                <Button href={telLink} icon={<Phone />}>
                  {dict.common.call}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
