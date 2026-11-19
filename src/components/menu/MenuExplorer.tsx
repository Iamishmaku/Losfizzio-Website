"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Flame, Leaf, Search, X } from "lucide-react";
import clsx from "clsx";
import { menu, type Tag } from "@/data/menu";
import { fmt } from "@/i18n/format";
import { useI18n } from "@/i18n/I18nProvider";
import { PizzaArt } from "@/components/ui/PizzaArt";
import { MenuItemRow } from "./MenuItemRow";
import styles from "./MenuExplorer.module.scss";

const filters: { tag: Tag; key: "vegetarian" | "spicy"; icon: typeof Leaf }[] = [
  { tag: "vegetariana", key: "vegetarian", icon: Leaf },
  { tag: "piccante", key: "spicy", icon: Flame },
];

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export function MenuExplorer() {
  const { locale, dict } = useI18n();
  const t = dict.menuPage;
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Tag[]>([]);
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const q = normalize(deferredQuery.trim());
    return menu
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (i) =>
            (!q || normalize(`${i.name[locale]} ${i.description?.[locale] ?? ""}`).includes(q)) &&
            active.every((t) => i.tags?.includes(t)),
        ),
      }))
      .filter((c) => c.items.length);
  }, [deferredQuery, active, locale]);

  const toggle = (t: Tag) => setActive((a) => (a.includes(t) ? a.filter((x) => x !== t) : [...a, t]));
  const total = filtered.reduce((n, c) => n + c.items.length, 0);

  return (
    <div className={styles.explorer}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarInner}>
          <label className={styles.search}>
            <Search aria-hidden="true" />
            <span className="sr-only">{t.searchLabel}</span>
            <input
              type="search"
              placeholder={t.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label={t.clearSearch}>
                <X />
              </button>
            )}
          </label>
          <div className={styles.filters} role="group" aria-label={t.filtersLabel}>
            {filters.map(({ tag, key, icon: Icon }) => (
              <button
                key={tag}
                type="button"
                className={clsx(styles.chip, active.includes(tag) && styles.chipActive)}
                aria-pressed={active.includes(tag)}
                onClick={() => toggle(tag)}
                data-tag={tag}
              >
                <Icon aria-hidden="true" />
                {t[key]}
              </button>
            ))}
          </div>
        </div>
        <nav className={styles.catNav} aria-label={t.categoriesLabel}>
          {menu.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={clsx(!filtered.some((f) => f.id === c.id) && styles.dim)}
            >
              {c.title[locale]}
            </a>
          ))}
        </nav>
      </div>

      <p className={styles.count} aria-live="polite">
        {total === 1 ? t.countOne : fmt(t.countOther, { n: total })}
      </p>

      <LayoutGroup>
        <AnimatePresence mode="popLayout">
          {filtered.map((c, ci) => {
            const pizzaSample = c.items.find((i) => i.toppings)?.toppings;
            return (
              <motion.section
                layout
                key={c.id}
                id={c.id}
                className={styles.category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-labelledby={`${c.id}-title`}
              >
                <header className={styles.catHead}>
                  <div>
                    <p className={styles.catIndex}>{String(ci + 1).padStart(2, "0")}</p>
                    <h2 id={`${c.id}-title`}>{c.title[locale]}</h2>
                    {c.subtitle && <p className={styles.catSub}>{c.subtitle[locale]}</p>}
                  </div>
                  {pizzaSample && (
                    <motion.div
                      className={styles.catArt}
                      initial={{ rotate: -40, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <PizzaArt seed={c.id} toppings={pizzaSample} />
                    </motion.div>
                  )}
                </header>
                <ul className={styles.items}>
                  <AnimatePresence mode="popLayout" initial={false}>
                    {c.items.map((item) => (
                      <motion.li
                        layout
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                      >
                        <MenuItemRow item={item} />
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
                {c.note && <p className={styles.catNote}>{c.note[locale]}</p>}
              </motion.section>
            );
          })}
        </AnimatePresence>
      </LayoutGroup>

      {total === 0 && (
        <motion.div className={styles.empty} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <p>{t.empty}</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActive([]);
            }}
          >
            {t.reset}
          </button>
        </motion.div>
      )}
    </div>
  );
}
