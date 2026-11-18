import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PizzaArt } from "@/components/ui/PizzaArt";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.art}>
        <PizzaArt seed="404" toppings={["tomato", "mozzarella", "olive"]} />
        <span className={styles.slice} aria-hidden="true" />
      </div>
      <p className={styles.code}>404</p>
      <h1>Qualcuno ha mangiato questa pagina.</h1>
      <p>La pagina che cerchi non esiste (o è finita nel forno). Torna alla home e scegli la tua pizza.</p>
      <Button href="/" size="lg" icon={<ArrowLeft />}>
        Torna alla home
      </Button>
    </section>
  );
}
