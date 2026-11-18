"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { site, telLink } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { PizzaArt } from "@/components/ui/PizzaArt";
import styles from "./CtaBand.module.scss";

export function CtaBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const x = useTransform(scrollYProgress, [0, 1], [80, -40]);

  return (
    <section ref={ref} className={styles.band} aria-labelledby="cta-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h2 id="cta-title">
            Stasera pizza? <em>Chiamaci.</em>
          </h2>
          <p>La prepariamo mentre arrivi. Calda, fragrante e pronta da portare a casa.</p>
          <div className={styles.ctas}>
            <Button href={telLink} variant="light" size="lg" icon={<Phone />}>
              {site.contacts.phoneDisplay}
            </Button>
            <Button
              href="/menu"
              variant="ghost"
              size="lg"
              iconRight={<ArrowRight />}
              className={styles.ghost}
            >
              Sfoglia il menu
            </Button>
          </div>
        </div>
        <motion.div className={styles.art} style={{ rotate, x }}>
          <PizzaArt seed="cta" toppings={["tomato", "mozzarella", "basil", "pepper", "olive", "onion"]} />
        </motion.div>
      </div>
    </section>
  );
}
