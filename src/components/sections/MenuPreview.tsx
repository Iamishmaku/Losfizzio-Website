"use client";

import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { menu } from "@/data/menu";
import { localePath } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";
import { Rich } from "@/i18n/Rich";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuItemRow } from "@/components/menu/MenuItemRow";
import styles from "./MenuPreview.module.scss";

const PREVIEW_COUNT = 6;

export function MenuPreview() {
  const { locale, dict } = useI18n();
  const t = dict.menuPreview;
  const [tab, setTab] = useState(menu[0].id);

  return (
    <section id="menu-preview" className={styles.section} aria-labelledby="menu-title">
      <div className="container">
        <SectionHeading
          id="menu-title"
          eyebrow={t.eyebrow}
          align="center"
          title={<Rich text={t.title} />}
          intro={t.intro}
        />

        <Tabs.Root value={tab} onValueChange={setTab} className={styles.tabs}>
          <Tabs.List className={styles.list} aria-label={t.tabsLabel}>
            {menu.map((c) => (
              <Tabs.Trigger key={c.id} value={c.id} className={styles.trigger}>
                {tab === c.id && (
                  <motion.span
                    layoutId="menu-tab-pill"
                    className={styles.pill}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={styles.label}>{c.title[locale]}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {menu.map((c) => (
            <Tabs.Content key={c.id} value={c.id} className={styles.content} forceMount hidden={tab !== c.id}>
              <AnimatePresence mode="wait">
                {tab === c.id && (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                  >
                    {c.subtitle && <p className={styles.subtitle}>{c.subtitle[locale]}</p>}
                    <ul className={styles.items}>
                      {c.items.slice(0, PREVIEW_COUNT).map((item, i) => (
                        <motion.li
                          key={item.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.04 * i, duration: 0.35 }}
                        >
                          <MenuItemRow item={item} />
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <div className={styles.cta}>
          <Button href={localePath(locale, "/menu")} size="lg" variant="secondary" iconRight={<ArrowRight />}>
            {t.fullMenu}
          </Button>
        </div>
      </div>
    </section>
  );
}
