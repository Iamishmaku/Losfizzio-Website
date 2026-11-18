import type { Metadata } from "next";
import { Info, Phone } from "lucide-react";
import { menuNotes } from "@/data/menu";
import { site, telLink } from "@/data/site";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Menu",
  description: `Il menu di ${site.name} a Dro: pizze classiche e speciali, kebab, piadine, bar e bevande. Prezzi e ingredienti.`,
  alternates: { canonical: "/menu" },
  openGraph: { url: "/menu" },
};

export default function MenuPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            as="h1"
            eyebrow="Il nostro menu"
            title={
              <>
                Tutto il gusto dello <em>Sfizio</em>
              </>
            }
            intro="Pizze, kebab, piadine e bevande. Cerca il tuo piatto preferito o filtra per le proposte vegetariane e piccanti."
          />
          <Button href={telLink} icon={<Phone />} size="lg">
            Ordina: {site.contacts.phoneDisplay}
          </Button>
        </div>

        <MenuExplorer />

        <aside className={styles.notes} aria-label="Note sul menu">
          <Info aria-hidden="true" />
          <ul>
            {menuNotes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
