"use client";

import { useMemo, type ReactNode } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Send, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { site, telLink, whatsappLink } from "@/data/site";
import { intlLocale, type Locale } from "@/i18n/config";
import { fmt } from "@/i18n/format";
import { useI18n } from "@/i18n/I18nProvider";
import { Rich } from "@/i18n/Rich";
import type { Dictionary } from "@/i18n/dictionaries/it";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Contact.module.scss";

function makeSchema(e: Dictionary["contact"]["errors"]) {
  return z
    .object({
      type: z.enum(["asporto", "tavolo"]),
      name: z.string().trim().min(2, e.name),
      phone: z
        .string()
        .trim()
        .regex(/^[+\d][\d\s./-]{5,}$/, e.phone),
      date: z.string().min(1, e.date),
      time: z.string().min(1, e.time),
      people: z.string().optional(),
      notes: z.string().trim().max(500, e.notes).optional(),
    })
    .refine((v) => v.type !== "tavolo" || (Number(v.people) >= 1 && Number(v.people) <= 40), {
      path: ["people"],
      message: e.people,
    });
}

type FormValues = z.infer<ReturnType<typeof makeSchema>>;

function formatDate(iso: string, locale: Locale) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(intlLocale[locale], {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function buildMessage(v: FormValues, m: Dictionary["contact"]["message"], locale: Locale) {
  const lines = [
    `${fmt(m.greeting, { name: site.name })} ${v.type === "tavolo" ? m.wantTable : m.wantTakeaway}`,
    `${m.name}: ${v.name}`,
    `${m.phone}: ${v.phone}`,
    `${m.when}: ${formatDate(v.date, locale)} ${m.at} ${v.time}`,
  ];
  if (v.type === "tavolo") lines.push(`${m.people}: ${v.people}`);
  if (v.notes) lines.push(`${v.type === "asporto" ? m.order : m.notes}: ${v.notes}`);
  return lines.join("\n");
}

export function Contact() {
  const { locale, dict } = useI18n();
  const t = dict.contact;
  const schema = useMemo(() => makeSchema(t.errors), [t.errors]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { type: "asporto", name: "", phone: "", date: "", time: "", people: "2", notes: "" },
  });

  const type = useWatch({ control, name: "type" });

  const onSubmit = async (values: FormValues) => {
    const message = buildMessage(values, t.message, locale);
    const wa = whatsappLink(message);
    const callAction = { label: dict.common.call, onClick: () => window.location.assign(telLink) };

    if (wa) {
      window.open(wa, "_blank", "noopener,noreferrer");
      toast.success(t.toastWhatsappTitle, { description: t.toastWhatsappText });
      reset();
      return;
    }

    if (site.contacts.email) {
      const subject = values.type === "tavolo" ? t.subjectTable : t.subjectTakeaway;
      window.location.assign(
        `mailto:${site.contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
      );
      reset();
      return;
    }

    try {
      await navigator.clipboard.writeText(message);
      toast.success(t.toastCopiedTitle, {
        description: t.toastCopiedText,
        action: callAction,
        duration: 10000,
      });
    } catch {
      toast(t.toastCallTitle, {
        description: site.contacts.phoneDisplay,
        action: callAction,
        duration: 10000,
      });
    }
  };

  const options = [
    { value: "asporto", label: t.takeaway, icon: ShoppingBag },
    { value: "tavolo", label: t.table, icon: UtensilsCrossed },
  ] as const;

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.side}>
          <SectionHeading
            id="contact-title"
            eyebrow={t.eyebrow}
            title={<Rich text={t.title} />}
            intro={t.intro}
          />
          <Reveal className={styles.phoneCard}>
            <span className={styles.phoneIcon}>
              <Phone aria-hidden="true" />
            </span>
            <div>
              <p className={styles.phoneLabel}>{t.callUs}</p>
              <a href={telLink} className={styles.phoneNumber}>
                {site.contacts.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <fieldset className={styles.typeGroup}>
              <legend className="sr-only">{t.typeLegend}</legend>
              {options.map(({ value, label, icon: Icon }) => (
                <label key={value} className={clsx(styles.typeOption, type === value && styles.typeActive)}>
                  <input type="radio" value={value} {...register("type")} />
                  {type === value && (
                    <motion.span
                      layoutId="contact-type"
                      className={styles.typePill}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </label>
              ))}
            </fieldset>

            <div className={styles.row}>
              <Field label={t.name} error={errors.name?.message} id="f-name">
                <input id="f-name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
              </Field>
              <Field label={t.phone} error={errors.phone?.message} id="f-phone">
                <input
                  id="f-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  {...register("phone")}
                  aria-invalid={!!errors.phone}
                />
              </Field>
            </div>

            <div className={styles.row}>
              <Field label={t.date} error={errors.date?.message} id="f-date">
                <input id="f-date" type="date" {...register("date")} aria-invalid={!!errors.date} />
              </Field>
              <Field label={t.time} error={errors.time?.message} id="f-time">
                <input
                  id="f-time"
                  type="time"
                  step={900}
                  {...register("time")}
                  aria-invalid={!!errors.time}
                />
              </Field>
            </div>

            <AnimatePresence initial={false}>
              {type === "tavolo" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className={styles.collapse}
                >
                  <Field label={t.people} error={errors.people?.message} id="f-people">
                    <input
                      id="f-people"
                      type="number"
                      min={1}
                      max={40}
                      inputMode="numeric"
                      {...register("people")}
                      aria-invalid={!!errors.people}
                    />
                  </Field>
                </motion.div>
              )}
            </AnimatePresence>

            <Field
              label={type === "asporto" ? t.notesTakeaway : t.notesTable}
              error={errors.notes?.message}
              id="f-notes"
            >
              <textarea
                id="f-notes"
                rows={4}
                placeholder={type === "asporto" ? t.placeholderTakeaway : t.placeholderTable}
                {...register("notes")}
                aria-invalid={!!errors.notes}
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              iconRight={<Send />}
              disabled={isSubmitting}
              className={styles.submit}
            >
              {whatsappLink() ? t.submitWhatsapp : t.submitPrepare}
            </Button>
            <p className={styles.disclaimer}>{t.disclaimer}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  id,
  children,
}: {
  label: string;
  error?: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <div className={clsx(styles.field, error && styles.hasError)}>
      <label htmlFor={id}>{label}</label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            className={styles.error}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
