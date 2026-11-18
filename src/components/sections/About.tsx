"use client";

import { motion } from "framer-motion";
import { Clock, Flame, MapPin, Wheat } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";
import styles from "./About.module.scss";

const features = [
  {
    icon: Wheat,
    title: "Impasto che riposa",
    text: "Lasciamo lievitare l'impasto con calma: una pizza leggera, digeribile e con il cornicione che fa rumore.",
  },
  {
    icon: Flame,
    title: "Cotta al momento",
    text: "Ogni pizza viene stesa a mano e infornata quando la ordini. Niente scorciatoie, solo il tempo giusto.",
  },
  {
    icon: MapPin,
    title: "In piazza a Dro",
    text: "Tavoli all'aperto nel centro del paese: il posto giusto dopo un giro in bici o una giornata in falesia.",
  },
  {
    icon: Clock,
    title: "Pronta da asporto",
    text: "Chiama, dicci a che ora passi e la trovi pronta e calda. Perfetta per la cena a casa con gli amici.",
  },
];

export function About() {
  return (
    <section id="chi-siamo" className={styles.section} aria-labelledby="about-title">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <SectionHeading
              id="about-title"
              eyebrow="Chi siamo"
              title={
                <>
                  Un piccolo <em>sfizio</em>, ogni giorno.
                </>
              }
              intro="Lo Sfizio è la pizzeria della piazza di Dro: un posto semplice e accogliente dove fermarsi per una pizza, un kebab o un caffè. Ingredienti scelti, forno sempre acceso e un sorriso al banco."
            />
          </div>

          <motion.ul
            className={styles.features}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          >
            {features.map(({ icon: Icon, title, text }) => (
              <motion.li key={title} className={styles.card} variants={staggerItem} whileHover={{ y: -6 }}>
                <span className={styles.icon}>
                  <Icon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
