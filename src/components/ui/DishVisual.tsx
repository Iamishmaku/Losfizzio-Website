import Image from "next/image";
import clsx from "clsx";
import type { MenuItem } from "@/data/menu";
import { PizzaArt } from "./PizzaArt";
import styles from "./DishVisual.module.scss";

interface Props {
  item: MenuItem;
  /** Attributo `sizes` per next/image: quanto è larga l'immagine nel layout. */
  sizes?: string;
  className?: string;
}

/** Mostra la foto del piatto se c'è, altrimenti l'illustrazione disegnata. */
export function DishVisual({ item, sizes = "(min-width: 1024px) 300px, 70vw", className }: Props) {
  if (item.image) {
    return (
      <span className={clsx(styles.photo, className)}>
        <Image src={item.image} alt={`${item.name}: ${item.description}`} fill sizes={sizes} />
      </span>
    );
  }
  return <PizzaArt toppings={item.toppings} seed={item.name} title={item.name} className={className} />;
}
