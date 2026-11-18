"use client";

import { Fragment, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { site, telLink } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { PizzaArt } from "@/components/ui/PizzaArt";
import styles from "./Hero.module.scss";

const ease = [0.22, 1, 0.36, 1] as const;

const words = ["La", "pizza", "in piazza", "a", "Dro."];

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
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <OpenStatus />
          </motion.div>

          <h1 id="hero-title" className={styles.title}>
            <span className="sr-only">{site.name}: </span>
            {words.map((w, i) => (
              <Fragment key={w}>
                <span className={styles.wordWrap}>
                  <motion.span
                    className={w === "in piazza" ? styles.accent : undefined}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, ease, delay: 0.1 + i * 0.08 }}
                  >
                    {w}
                  </motion.span>
                </span>
                {i < words.length - 1 && " "}
              </Fragment>
            ))}
          </h1>

          <motion.p
            className={styles.lead}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.55 }}
          >
            Pizze cotte al momento, kebab, piadine e un buon caffè, nel cuore di Dro. Siediti in piazza o
            passa a ritirarla da asporto.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
          >
            <Button href="/menu" size="lg" iconRight={<ArrowRight />}>
              Scopri il menu
            </Button>
            <Button href={telLink} size="lg" variant="secondary" icon={<Phone />}>
              Ordina al telefono
            </Button>
          </motion.div>

          <motion.ul
            className={styles.services}
            initial="hidden"
            animate="show"
            variants={{
              show: {
                transition: { staggerChildren: 0.07, delayChildren: 0.9 },
              },
            }}
          >
            {site.services.map((s) => (
              <motion.li
                key={s}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1 },
                }}
              >
                {s}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <div className={styles.visual}>
          <motion.div
            className={styles.board}
            initial={{ opacity: 0, scale: 0.85, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.15 }}
          >
            <motion.div style={{ rotate: pizzaRotate, y: pizzaY }} className={styles.pizzaWrap}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              >
                <PizzaArt
                  seed="hero"
                  toppings={["tomato", "mozzarella", "basil", "salami", "olive", "mushroom"]}
                  className={styles.pizza}
                  title="Illustrazione di una pizza"
                />
              </motion.div>
            </motion.div>

            <svg viewBox="0 0 200 200" className={styles.ring} aria-hidden="true">
              <defs>
                <path id="hero-ring" d="M100 100 m-88 0 a88 88 0 1 1 176 0 a88 88 0 1 1 -176 0" />
              </defs>
              <text>
                <textPath href="#hero-ring">
                  Pizzeria · Kebab · Bar · Caffè · In piazza a Dro · Pizzeria · Kebab · Bar ·
                </textPath>
              </text>
            </svg>
          </motion.div>

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
