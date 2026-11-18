import type { Metadata } from "next";
import { fullAddress, site } from "@/data/site";
import { fmt } from "@/i18n/format";
import { getDictionary, getLocale } from "@/i18n/server";
import { alternates } from "@/lib/seo";
import styles from "./page.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary();
  return {
    title: dict.meta.privacyTitle,
    description: dict.meta.privacyDescription,
    alternates: alternates(locale, "/privacy"),
    robots: { index: false, follow: true },
  };
}

export default async function PrivacyPage() {
  const dict = await getDictionary();
  const t = dict.privacy;
  const vars = {
    holder: dict.meta.fullName,
    address: fullAddress,
    phone: site.contacts.phoneDisplay + (site.contacts.email ? `, ${site.contacts.email}` : ""),
  };

  return (
    <article className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p className={styles.note}>{t.draftNote}</p>
        {t.sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            <p>{fmt(s.text, vars)}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
