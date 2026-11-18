"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { formatPrice, getFeatured, tagLabels } from "@/data/menu";
import { DishVisual } from "@/components/ui/DishVisual";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Featured.module.scss";

const pizzas = getFeatured();

export function Featured() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false }, [
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
    setSnaps(embla.scrollSnapList());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect).on("reInit", onSelect);
    // Prima sincronizzazione con lo stato del carosello appena montato
    queueMicrotask(onSelect);
    return () => {
      embla.off("select", onSelect).off("reInit", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <section className={styles.section} aria-labelledby="featured-title">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            id="featured-title"
            eyebrow="Le più amate"
            title={
              <>
                Le pizze da <em>non perdere</em>
              </>
            }
          />
          <div className={styles.nav}>
            <button
              className={styles.arrow}
              onClick={() => embla?.scrollPrev()}
              aria-label="Pizza precedente"
            >
              <ArrowLeft />
            </button>
            <button
              className={styles.arrow}
              onClick={() => embla?.scrollNext()}
              aria-label="Pizza successiva"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.viewport} ref={emblaRef} aria-roledescription="carosello">
        <ul className={styles.track}>
          {pizzas.map((p, i) => (
            <li
              key={p.name}
              className={styles.slide}
              aria-roledescription="slide"
              aria-label={`${i + 1} di ${pizzas.length}`}
            >
              <motion.article className={styles.card} whileHover="hover" initial="rest" animate="rest">
                <motion.div
                  className={styles.art}
                  variants={{
                    rest: { rotate: 0, scale: 1 },
                    hover: { rotate: 25, scale: 1.05 },
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                >
                  <DishVisual item={p} sizes="(min-width: 1024px) 300px, (min-width: 560px) 40vw, 70vw" />
                </motion.div>
                <div className={styles.body}>
                  {p.tags?.length ? (
                    <ul className={styles.tags}>
                      {p.tags.map((t) => (
                        <li key={t} data-tag={t}>
                          {tagLabels[t]}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className={styles.titleRow}>
                    <h3>{p.name}</h3>
                    <span className={styles.price}>{formatPrice(p.price)}</span>
                  </div>
                  <p>{p.description}</p>
                </div>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.dots} role="group" aria-label="Scegli la pizza">
        {snaps.map((_, i) => (
          <button
            key={i}
            className={clsx(styles.dot, i === selected && styles.active)}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Vai alla pizza ${i + 1}`}
            aria-current={i === selected}
          />
        ))}
      </div>
    </section>
  );
}
