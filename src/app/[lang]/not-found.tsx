import { ArrowLeft } from "lucide-react";
import { localePath } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/server";
import { Button } from "@/components/ui/Button";
import { PizzaArt } from "@/components/ui/PizzaArt";
import styles from "./not-found.module.scss";

export default async function NotFound() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <section className={styles.page}>
      <div className={styles.art}>
        <PizzaArt seed="404" toppings={["tomato", "mozzarella", "olive"]} />
        <span className={styles.slice} aria-hidden="true" />
      </div>
      <p className={styles.code}>404</p>
      <h1>{dict.notFound.title}</h1>
      <p>{dict.notFound.text}</p>
      <Button href={localePath(locale)} size="lg" icon={<ArrowLeft />}>
        {dict.notFound.back}
      </Button>
    </section>
  );
}
