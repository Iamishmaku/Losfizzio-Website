import Image from "next/image";
import { Flame, Leaf, Sparkles, ThumbsUp } from "lucide-react";
import { formatPrice, tagLabels, type MenuItem, type Tag } from "@/data/menu";
import styles from "./MenuItemRow.module.scss";

const tagIcon: Record<Tag, typeof Leaf> = {
  vegetariana: Leaf,
  piccante: Flame,
  novita: Sparkles,
  consigliata: ThumbsUp,
};

export function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className={styles.row} data-has-image={item.image ? "" : undefined}>
      {item.image && (
        <span className={styles.thumb}>
          <Image src={item.image} alt="" fill sizes="72px" />
        </span>
      )}
      <div className={styles.head}>
        <h3 className={styles.name}>{item.name}</h3>
        {item.tags?.map((t) => {
          const Icon = tagIcon[t];
          return (
            <span key={t} className={styles.tag} data-tag={t} title={tagLabels[t]}>
              <Icon aria-hidden="true" />
              <span className="sr-only">{tagLabels[t]}</span>
            </span>
          );
        })}
        <span className={styles.leader} aria-hidden="true" />
        <span className={styles.price}>{formatPrice(item.price)}</span>
      </div>
      <p className={styles.desc}>{item.description}</p>
    </div>
  );
}
