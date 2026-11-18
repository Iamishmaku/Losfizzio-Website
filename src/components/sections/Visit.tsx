"use client";

import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Info, MapPin, Navigation, Phone } from "lucide-react";
import { dayLabels, dayOrder, fullAddress, mapsEmbed, mapsLink, site, telLink } from "@/data/site";
import { slotLines } from "@/lib/hours";
import { useRomeClock } from "@/lib/useRomeClock";
import { Button } from "@/components/ui/Button";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Visit.module.scss";

export function Visit() {
  const today = useRomeClock()?.day ?? null;
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className={styles.section} aria-labelledby="visit-title">
      <div className="container">
        <SectionHeading
          id="visit-title"
          tone="light"
          eyebrow="Vieni a trovarci"
          title={
            <>
              Ti aspettiamo <em>in piazza</em>
            </>
          }
          intro="Nel centro di Dro, a due passi dalla ciclabile della Valle del Sarca e a pochi minuti da Arco e Riva del Garda."
        />

        <div className={styles.grid}>
          <Reveal className={styles.card} id="orari">
            <div className={styles.cardHead}>
              <h3>Orari di apertura</h3>
              <OpenStatus tone="light" />
            </div>
            <dl className={styles.hours}>
              {dayOrder.map((d) => (
                <div key={d} className={clsx(styles.day, d === today && styles.today)}>
                  <dt>
                    {dayLabels[d]}
                    {d === today && <span className={styles.todayBadge}>oggi</span>}
                  </dt>
                  <dd className={clsx(!site.hours[d].length && styles.closed)}>
                    {slotLines(site.hours[d]).map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <p className={styles.note}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button className={styles.info} aria-label="Informazioni sugli orari">
                    <Info />
                  </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className={styles.tooltip} sideOffset={6}>
                    Nei giorni festivi e in alta stagione gli orari possono cambiare.
                    <Tooltip.Arrow className={styles.tooltipArrow} />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
              Orari soggetti a variazioni nei festivi: nel dubbio, chiamaci.
            </p>
          </Reveal>

          <Reveal className={styles.mapCard} delay={0.1} id="dove-siamo">
            <div className={styles.map}>
              {mapLoaded ? (
                <iframe
                  src={mapsEmbed}
                  title={`Mappa: ${site.name}, ${fullAddress}`}
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
                  <span className={styles.mapCta}>Mostra la mappa</span>
                  <span className={styles.mapHint}>Caricando la mappa accetti i cookie di Google Maps.</span>
                </button>
              )}
            </div>
            <div className={styles.address}>
              <div>
                <h3>Dove siamo</h3>
                <p>{fullAddress}</p>
              </div>
              <div className={styles.addressCtas}>
                <Button href={mapsLink} variant="light" icon={<Navigation />}>
                  Indicazioni
                </Button>
                <Button href={telLink} icon={<Phone />}>
                  Chiama
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
