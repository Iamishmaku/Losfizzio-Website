import { dayOrder, site, type DayKey, type TimeSlot } from "@/data/site";

const TIME_ZONE = "Europe/Rome";

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/** Ora corrente nel fuso orario della pizzeria, indipendentemente da quello del visitatore. */
export function nowInRome(date = new Date()): { day: DayKey; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const weekday =
    parts
      .find((p) => p.type === "weekday")
      ?.value.toLowerCase()
      .slice(0, 3) ?? "mon";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);

  return { day: weekday as DayKey, minutes: hour * 60 + minute };
}

export type OpenStatus =
  { open: true; closesAt: string } | { open: false; opensAt: string | null; opensDay: DayKey | null };

export function getOpenStatus(date = new Date()): OpenStatus {
  const { day, minutes } = nowInRome(date);
  const hours = site.hours as Record<DayKey, readonly TimeSlot[]>;
  const today = hours[day];

  const current = today.find((s) => minutes >= toMinutes(s.open) && minutes < toMinutes(s.close));
  if (current) return { open: true, closesAt: current.close };

  const laterToday = today.find((s) => toMinutes(s.open) > minutes);
  if (laterToday) return { open: false, opensAt: laterToday.open, opensDay: day };

  const startIdx = dayOrder.indexOf(day);
  for (let i = 1; i <= 7; i++) {
    const next = dayOrder[(startIdx + i) % 7];
    if (hours[next].length) return { open: false, opensAt: hours[next][0].open, opensDay: next };
  }
  return { open: false, opensAt: null, opensDay: null };
}

export function formatSlots(slots: readonly TimeSlot[]) {
  if (!slots.length) return "Chiuso";
  return slots.map((s) => `${s.open} – ${s.close}`).join(" · ");
}

/** Le fasce orarie come elenco di stringhe, da mostrare una per riga. */
export function slotLines(slots: readonly TimeSlot[]) {
  return slots.length ? slots.map((s) => `${s.open} – ${s.close}`) : ["Chiuso"];
}

/** Formato schema.org "Mo-Su" per i dati strutturati. */
const schemaDay: Record<DayKey, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

export function openingHoursSpecification() {
  const hours = site.hours as Record<DayKey, readonly TimeSlot[]>;
  return dayOrder.flatMap((d) =>
    hours[d].map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${schemaDay[d]}`,
      opens: s.open,
      closes: s.close,
    })),
  );
}
