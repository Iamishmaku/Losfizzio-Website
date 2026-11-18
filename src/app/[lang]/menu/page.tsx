import type { Metadata } from "next";
import { Info, Phone } from "lucide-react";
import { site, telLink } from "@/data/site";
import { fmt } from "@/i18n/format";
import { Rich } from "@/i18n/Rich";
import { getDictionary, getLocale } from "@/i18n/server";
import { alternates } from "@/lib/seo";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary();
  return {
    title: dict.meta.menuTitle,
    description: dict.meta.menuDescription,
    alternates: alternates(locale, "/menu"),
    openGraph: { url: `/${locale}/menu` },
  };
}

export default async function MenuPage() {
  const dict = await getDictionary();
  const t = dict.menuPage;

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.head}>
          <SectionHeading as="h1" eyebrow={t.eyebrow} title={<Rich text={t.title} />} intro={t.intro} />
          <Button href={telLink} icon={<Phone />} size="lg">
            {fmt(dict.common.order, { phone: site.contacts.phoneDisplay })}
          </Button>
        </div>

        <MenuExplorer />

        <aside className={styles.notes} aria-label={t.notesLabel}>
          <Info aria-hidden="true" />
          <ul>
            {t.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
