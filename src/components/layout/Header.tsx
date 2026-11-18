"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site, telLink } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { OpenStatus } from "@/components/ui/OpenStatus";
import styles from "./Header.module.scss";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 320 && y > prev && !open);
  });

  return (
    <motion.header
      className={clsx(styles.header, scrolled && styles.scrolled)}
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label={`${site.name}, torna alla home`}>
          <Logo />
        </Link>

        <nav className={styles.nav} aria-label="Navigazione principale">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href={telLink} icon={<Phone />} className={styles.call}>
            {site.contacts.phoneDisplay}
          </Button>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button className={styles.burger} aria-label="Apri il menu">
                <Menu />
              </button>
            </Dialog.Trigger>
            <AnimatePresence>
              {open && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild forceMount>
                    <motion.div
                      className={styles.overlay}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  </Dialog.Overlay>
                  <Dialog.Content asChild forceMount aria-describedby={undefined}>
                    <motion.div
                      className={styles.sheet}
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 280,
                      }}
                      data-lenis-prevent
                    >
                      <div className={styles.sheetTop}>
                        <Dialog.Title className="sr-only">Menu di navigazione</Dialog.Title>
                        <Logo />
                        <Dialog.Close className={styles.close} aria-label="Chiudi il menu">
                          <X />
                        </Dialog.Close>
                      </div>
                      <nav aria-label="Navigazione mobile">
                        <motion.ul
                          className={styles.sheetNav}
                          initial="hidden"
                          animate="show"
                          variants={{
                            show: {
                              transition: {
                                staggerChildren: 0.06,
                                delayChildren: 0.1,
                              },
                            },
                          }}
                        >
                          {[{ href: "/", label: "Home" }, ...navLinks].map((l) => (
                            <motion.li
                              key={l.href}
                              variants={{
                                hidden: { opacity: 0, x: 30 },
                                show: { opacity: 1, x: 0 },
                              }}
                            >
                              <Link href={l.href} onClick={() => setOpen(false)}>
                                {l.label}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </nav>
                      <div className={styles.sheetBottom}>
                        <OpenStatus />
                        <Button href={telLink} icon={<Phone />} size="lg">
                          Chiama {site.contacts.phoneDisplay}
                        </Button>
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </div>
    </motion.header>
  );
}
