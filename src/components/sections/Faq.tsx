import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { getDictionary } from "@/i18n/server";
import { Rich } from "@/i18n/Rich";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Faq.module.scss";

export async function Faq() {
  const dict = await getDictionary();
  const t = dict.faq;

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={`container ${styles.grid}`}>
        <SectionHeading id="faq-title" eyebrow={t.eyebrow} title={<Rich text={t.title} />} intro={t.intro} />
        <Reveal delay={0.1}>
          <Accordion.Root type="single" collapsible className={styles.accordion} defaultValue="item-0">
            {t.items.map((f, i) => (
              <Accordion.Item key={f.q} value={`item-${i}`} className={styles.item}>
                <Accordion.Header asChild>
                  <h3>
                    <Accordion.Trigger className={styles.trigger}>
                      <span>{f.q}</span>
                      <span className={styles.icon} aria-hidden="true">
                        <Plus />
                      </span>
                    </Accordion.Trigger>
                  </h3>
                </Accordion.Header>
                <Accordion.Content className={styles.content}>
                  <p>{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
