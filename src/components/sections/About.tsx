"use client";

import { motion } from "framer-motion";
import { Clock, Flame, MapPin, Wheat } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Rich } from "@/i18n/Rich";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";
import styles from "./About.module.scss";

const icons = [Wheat, Flame, MapPin, Clock];

export function About() {
  const { dict } = useI18n();

  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <SectionHeading
              id="about-title"
              eyebrow={dict.about.eyebrow}
              title={<Rich text={dict.about.title} />}
              intro={dict.about.intro}
            />
          </div>

          <motion.ul
            className={styles.features}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          >
            {dict.about.features.map(({ title, text }, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.li key={title} className={styles.card} variants={staggerItem} whileHover={{ y: -6 }}>
                  <span className={styles.icon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
