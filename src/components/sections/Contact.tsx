"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ShoppingBag, Send, UtensilsCrossed } from "lucide-react";
import { site, telLink, whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Contact.module.scss";

const schema = z
  .object({
    type: z.enum(["asporto", "tavolo"]),
    name: z.string().trim().min(2, "Inserisci il tuo nome"),
    phone: z
      .string()
      .trim()
      .regex(/^[+\d][\d\s./-]{5,}$/, "Inserisci un numero di telefono valido"),
    date: z.string().min(1, "Scegli il giorno"),
    time: z.string().min(1, "Scegli l'orario"),
    people: z.string().optional(),
    notes: z.string().trim().max(500, "Massimo 500 caratteri").optional(),
  })
  .refine((v) => v.type !== "tavolo" || (Number(v.people) >= 1 && Number(v.people) <= 40), {
    path: ["people"],
    message: "Indica quante persone (1–40)",
  });

type FormValues = z.infer<typeof schema>;

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("it-IT", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function buildMessage(v: FormValues) {
  const lines = [
    `Ciao ${site.name}! Vorrei ${v.type === "tavolo" ? "prenotare un tavolo" : "ordinare da asporto"}.`,
    `Nome: ${v.name}`,
    `Telefono: ${v.phone}`,
    `Quando: ${formatDate(v.date)} alle ${v.time}`,
  ];
  if (v.type === "tavolo") lines.push(`Persone: ${v.people}`);
  if (v.notes) lines.push(`${v.type === "asporto" ? "Ordine / note" : "Note"}: ${v.notes}`);
  return lines.join("\n");
}

export function Contact() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      type: "asporto",
      name: "",
      phone: "",
      date: "",
      time: "",
      people: "2",
      notes: "",
    },
  });

  const type = useWatch({ control, name: "type" });

  const onSubmit = async (values: FormValues) => {
    const message = buildMessage(values);
    const wa = whatsappLink(message);

    if (wa) {
      window.open(wa, "_blank", "noopener,noreferrer");
      toast.success("Ti stiamo portando su WhatsApp", {
        description: "Invia il messaggio per confermare.",
      });
      reset();
      return;
    }

    if (site.contacts.email) {
      const subject = values.type === "tavolo" ? "Prenotazione tavolo" : "Ordine da asporto";
      window.location.assign(
        `mailto:${site.contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
      );
      reset();
      return;
    }

    try {
      await navigator.clipboard.writeText(message);
      toast.success("Richiesta pronta e copiata!", {
        description: "Chiamaci per confermare: ti leggiamo noi i dettagli.",
        action: {
          label: "Chiama",
          onClick: () => window.location.assign(telLink),
        },
        duration: 10000,
      });
    } catch {
      toast("Chiamaci per confermare", {
        description: site.contacts.phoneDisplay,
        action: {
          label: "Chiama",
          onClick: () => window.location.assign(telLink),
        },
        duration: 10000,
      });
    }
  };

  return (
    <section id="contatti" className={styles.section} aria-labelledby="contact-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.side}>
          <SectionHeading
            id="contact-title"
            eyebrow="Prenota o ordina"
            title={
              <>
                Hai <em>fame</em>? Passa a prenderla.
              </>
            }
            intro="Compila il modulo per preparare la tua richiesta di asporto o prenotazione. Per gli ordini dell'ultimo minuto il modo più veloce resta una telefonata."
          />
          <Reveal className={styles.phoneCard}>
            <span className={styles.phoneIcon}>
              <Phone aria-hidden="true" />
            </span>
            <div>
              <p className={styles.phoneLabel}>Chiamaci</p>
              <a href={telLink} className={styles.phoneNumber}>
                {site.contacts.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <fieldset className={styles.typeGroup}>
              <legend className="sr-only">Cosa desideri?</legend>
              {(
                [
                  { value: "asporto", label: "Asporto", icon: ShoppingBag },
                  { value: "tavolo", label: "Tavolo", icon: UtensilsCrossed },
                ] as const
              ).map(({ value, label, icon: Icon }) => (
                <label key={value} className={clsx(styles.typeOption, type === value && styles.typeActive)}>
                  <input type="radio" value={value} {...register("type")} />
                  {type === value && (
                    <motion.span
                      layoutId="contact-type"
                      className={styles.typePill}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </label>
              ))}
            </fieldset>

            <div className={styles.row}>
              <Field label="Nome" error={errors.name?.message} id="f-name">
                <input id="f-name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
              </Field>
              <Field label="Telefono" error={errors.phone?.message} id="f-phone">
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
              <Field label="Giorno" error={errors.date?.message} id="f-date">
                <input id="f-date" type="date" {...register("date")} aria-invalid={!!errors.date} />
              </Field>
              <Field label="Orario" error={errors.time?.message} id="f-time">
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
                  <Field label="Numero di persone" error={errors.people?.message} id="f-people">
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
              label={type === "asporto" ? "Cosa ordini?" : "Note (facoltative)"}
              error={errors.notes?.message}
              id="f-notes"
            >
              <textarea
                id="f-notes"
                rows={4}
                placeholder={
                  type === "asporto"
                    ? "Es. 2 Margherita, 1 Diavola, 1 kebab nel pane"
                    : "Es. seggiolone, tavolo all'aperto…"
                }
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
              {whatsappLink() ? "Invia su WhatsApp" : "Prepara la richiesta"}
            </Button>
            <p className={styles.disclaimer}>
              La richiesta è confermata solo dopo la nostra risposta. I dati non vengono salvati su questo
              sito.
            </p>
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
  children: React.ReactNode;
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
