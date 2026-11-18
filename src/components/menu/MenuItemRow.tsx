"use client";

import Image from "next/image";
import { Flame, Leaf, Sparkles, ThumbsUp } from "lucide-react";
import { formatPrice, type MenuItem, type Tag } from "@/data/menu";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./MenuItemRow.module.scss";

const tagIcon: Record<Tag, typeof Leaf> = {
  vegetariana: Leaf,
  piccante: Flame,
  novita: Sparkles,
  consigliata: ThumbsUp,
};

export function MenuItemRow({ item }: { item: MenuItem }) {
  const { locale, dict } = useI18n();
  return (
    <div className={styles.row} data-has-image={item.image ? "" : undefined}>
      {item.image && (
        <span className={styles.thumb}>
          <Image src={item.image} alt="" fill sizes="72px" />
        </span>
      )}
      <div className={styles.head}>
        <h3 className={styles.name}>{item.name[locale]}</h3>
        {item.tags?.map((t) => {
          const Icon = tagIcon[t];
          return (
            <span key={t} className={styles.tag} data-tag={t} title={dict.tags[t]}>
              <Icon aria-hidden="true" />
              <span className="sr-only">{dict.tags[t]}</span>
            </span>
          );
        })}
        <span className={styles.leader} aria-hidden="true" />
        <span className={styles.price}>{formatPrice(item.price, locale)}</span>
      </div>
      <p className={styles.desc}>{item.description[locale]}</p>
    </div>
  );
}
