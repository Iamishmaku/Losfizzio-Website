import clsx from "clsx";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import styles from "./SectionHeading.module.scss";

interface Props {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  id?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  id,
  as: H = "h2",
}: Props) {
  return (
    <Reveal className={clsx(styles.heading, styles[align], styles[tone])}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <H id={id} className={styles.title}>
        {title}
      </H>
      {intro && <p className={styles.intro}>{intro}</p>}
    </Reveal>
  );
}
