"use client";

import { usePathname, useRouter } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, Globe, Monitor, Moon, Sun } from "lucide-react";
import { LOCALE_COOKIE, localeNames, locales, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";
import { setThemePref, useThemePref, type ThemePref } from "@/lib/theme";
import styles from "./Settings.module.scss";

export function LanguageMenu() {
  const { locale, dict } = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  const change = (next: Locale) => {
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");
    router.push(`/${next}${rest}${window.location.hash}`);
  };

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger
        className={styles.trigger}
        aria-label={`${dict.settings.language}: ${localeNames[locale]}`}
      >
        <Globe aria-hidden="true" />
        <span className={styles.code}>{locale.toUpperCase()}</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.content} align="end" sideOffset={8}>
          <DropdownMenu.Label className={styles.label}>{dict.settings.language}</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={locale} onValueChange={(v) => change(v as Locale)}>
            {locales.map((l) => (
              <DropdownMenu.RadioItem key={l} value={l} className={styles.item} lang={l}>
                <span className={styles.itemCode}>{l.toUpperCase()}</span>
                {localeNames[l]}
                <DropdownMenu.ItemIndicator className={styles.check}>
                  <Check />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

const themeIcons: Record<ThemePref, typeof Sun> = { system: Monitor, light: Sun, dark: Moon };

export function ThemeMenu() {
  const { dict } = useI18n();
  const pref = useThemePref();
  const labels: Record<ThemePref, string> = {
    system: dict.settings.themeSystem,
    light: dict.settings.themeLight,
    dark: dict.settings.themeDark,
  };
  const Current = themeIcons[pref];

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger className={styles.trigger} aria-label={`${dict.settings.theme}: ${labels[pref]}`}>
        <Current aria-hidden="true" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.content} align="end" sideOffset={8}>
          <DropdownMenu.Label className={styles.label}>{dict.settings.theme}</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={pref} onValueChange={(v) => setThemePref(v as ThemePref)}>
            {(Object.keys(themeIcons) as ThemePref[]).map((t) => {
              const Icon = themeIcons[t];
              return (
                <DropdownMenu.RadioItem key={t} value={t} className={styles.item}>
                  <Icon aria-hidden="true" className={styles.itemIcon} />
                  {labels[t]}
                  <DropdownMenu.ItemIndicator className={styles.check}>
                    <Check />
                  </DropdownMenu.ItemIndicator>
                </DropdownMenu.RadioItem>
              );
            })}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
