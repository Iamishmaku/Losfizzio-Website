"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Flame, Leaf, Search, X } from "lucide-react";
import clsx from "clsx";
import { menu, type Tag } from "@/data/menu";
import { PizzaArt } from "@/components/ui/PizzaArt";
import { MenuItemRow } from "./MenuItemRow";
import styles from "./MenuExplorer.module.scss";

const filters: { tag: Tag; label: string; icon: typeof Leaf }[] = [
  { tag: "vegetariana", label: "Vegetariane", icon: Leaf },
  { tag: "piccante", label: "Piccanti", icon: Flame },
];

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export function MenuExplorer() {
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
            (!q || normalize(`${i.name} ${i.description}`).includes(q)) &&
            active.every((t) => i.tags?.includes(t)),
        ),
      }))
      .filter((c) => c.items.length);
  }, [deferredQuery, active]);

  const toggle = (t: Tag) => setActive((a) => (a.includes(t) ? a.filter((x) => x !== t) : [...a, t]));
  const total = filtered.reduce((n, c) => n + c.items.length, 0);

  return (
    <div className={styles.explorer}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarInner}>
          <label className={styles.search}>
            <Search aria-hidden="true" />
            <span className="sr-only">Cerca nel menu</span>
            <input
              type="search"
              placeholder="Cerca una pizza o un ingrediente…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Cancella ricerca">
                <X />
              </button>
            )}
          </label>
          <div className={styles.filters} role="group" aria-label="Filtri">
            {filters.map(({ tag, label, icon: Icon }) => (
              <button
                key={tag}
                type="button"
                className={clsx(styles.chip, active.includes(tag) && styles.chipActive)}
                aria-pressed={active.includes(tag)}
                onClick={() => toggle(tag)}
                data-tag={tag}
              >
                <Icon aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
        </div>
        <nav className={styles.catNav} aria-label="Categorie">
          {menu.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={clsx(!filtered.some((f) => f.id === c.id) && styles.dim)}
            >
              {c.title}
            </a>
          ))}
        </nav>
      </div>

      <p className={styles.count} aria-live="polite">
        {total === 1 ? "1 proposta" : `${total} proposte`}
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
                    <h2 id={`${c.id}-title`}>{c.title}</h2>
                    {c.subtitle && <p className={styles.catSub}>{c.subtitle}</p>}
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
                        key={item.name}
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
              </motion.section>
            );
          })}
        </AnimatePresence>
      </LayoutGroup>

      {total === 0 && (
        <motion.div className={styles.empty} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <p>Nessuna proposta trovata. Prova con un altro ingrediente!</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActive([]);
            }}
          >
            Azzera i filtri
          </button>
        </motion.div>
      )}
    </div>
  );
}
