"use client";

import { Fragment, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { site, telLink } from "@/data/site";
import { localePath } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";
import { splitWords } from "@/i18n/Rich";
import { Button } from "@/components/ui/Button";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { PizzaArt } from "@/components/ui/PizzaArt";
import styles from "./Hero.module.scss";

function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M20 2 C34 10 34 30 20 38 C6 30 6 10 20 2Z" fill="#2f6b3a" />
      <path d="M20 6 L20 34" stroke="#5aa45f" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Tomato({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="17" fill="#d83a22" />
      <circle cx="20" cy="20" r="12" fill="#ef6a4c" />
      <circle cx="15" cy="17" r="2" fill="#fbd3a3" />
      <circle cx="25" cy="17" r="2" fill="#fbd3a3" />
      <circle cx="20" cy="26" r="2" fill="#fbd3a3" />
      <path d="M20 3 L23 8 L28 6 L25 10 L20 9 L15 10 L12 6 L17 8Z" fill="#2f6b3a" />
    </svg>
  );
}

function Mushroom({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M4 20 C4 6 36 6 36 20 C36 23 30 23 26 23 L25 34 C25 37 15 37 15 34 L14 23 C10 23 4 23 4 20Z"
        fill="#efe0c4"
      />
      <path d="M4 20 C4 6 36 6 36 20" fill="none" stroke="#9c7650" strokeWidth="2.5" />
    </svg>
  );
}

export function Hero() {
  const { locale, dict } = useI18n();
  const words = splitWords(dict.hero.title);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  const pizzaRotate = useTransform(smooth, [0, 1], [0, 90]);
  const pizzaY = useTransform(smooth, [0, 1], [0, 120]);
  const leafY = useTransform(smooth, [0, 1], [0, -220]);
  const tomatoY = useTransform(smooth, [0, 1], [0, -140]);
  const mushY = useTransform(smooth, [0, 1], [0, -300]);
  const textY = useTransform(smooth, [0, 1], [0, 80]);
  const textOpacity = useTransform(smooth, [0.35, 0.85], [1, 0]);

  return (
    <section ref={ref} className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div className={styles.copy} style={{ y: textY, opacity: textOpacity }}>
          <div className={styles.enter}>
            <OpenStatus />
          </div>

          <h1 id="hero-title" className={styles.title}>
            <span className="sr-only">{site.name}: </span>
            {words.map((w, i) => (
              <Fragment key={`${w.text}-${i}`}>
                <span className={styles.wordWrap}>
                  <span
                    className={w.accent ? styles.accent : undefined}
                    style={{ animationDelay: `${0.05 + i * 0.07}s` }}
                  >
                    {w.text}
                  </span>
                </span>
                {i < words.length - 1 && " "}
              </Fragment>
            ))}
          </h1>

          <p className={`${styles.lead} ${styles.enter}`} style={{ animationDelay: "0.3s" }}>
            {dict.hero.lead}
          </p>

          <div className={`${styles.ctas} ${styles.enter}`} style={{ animationDelay: "0.4s" }}>
            <Button href={localePath(locale, "/menu")} size="lg" iconRight={<ArrowRight />}>
              {dict.hero.ctaMenu}
            </Button>
            <Button href={telLink} size="lg" variant="secondary" icon={<Phone />}>
              {dict.hero.ctaPhone}
            </Button>
          </div>

          <ul className={styles.services}>
            {dict.services.map((s, i) => (
              <li key={s} style={{ animationDelay: `${0.5 + i * 0.06}s` }}>
                {s}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className={styles.visual}>
          <div className={styles.board}>
            <motion.div style={{ rotate: pizzaRotate, y: pizzaY }} className={styles.pizzaWrap}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              >
                <PizzaArt
                  seed="hero"
                  toppings={["tomato", "mozzarella", "basil", "salami", "olive", "mushroom"]}
                  className={styles.pizza}
                  title={dict.hero.illustration}
                />
              </motion.div>
            </motion.div>

          </div>

          <motion.div className={`${styles.float} ${styles.f1}`} style={{ y: leafY }}>
            <motion.div
              animate={{ rotate: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Leaf />
            </motion.div>
          </motion.div>
          <motion.div className={`${styles.float} ${styles.f2}`} style={{ y: tomatoY }}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Tomato />
            </motion.div>
          </motion.div>
          <motion.div className={`${styles.float} ${styles.f3}`} style={{ y: mushY }}>
            <motion.div
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <Mushroom />
            </motion.div>
          </motion.div>
          <motion.div className={`${styles.float} ${styles.f4}`} style={{ y: tomatoY }}>
            <Leaf className={styles.tilted} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
