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
  const { companyName, vatNumber } = site.legal;
  const holder = [companyName || site.name, vatNumber && `${dict.footer.vat} ${vatNumber}`]
    .filter(Boolean)
    .join(" · ");
  const vars = {
    name: site.name,
    holder,
    address: fullAddress,
    phone: site.contacts.phoneDisplay,
  };

  return (
    <article className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p className={styles.updated}>{t.lastUpdated}</p>
        <p className={styles.intro}>{fmt(t.intro, vars)}</p>
        {t.sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            {fmt(s.text, vars)
              .split("\n\n")
              .map((para, i) => (
                <p key={i}>
                  {para.split("\n").map((line, j, lines) => (
                    <span key={j}>
                      {line}
                      {j < lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
          </section>
        ))}
      </div>
    </article>
  );
}
