import { dayOrder, site, type DayKey, type Season, type TimeSlot } from "@/data/site";

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

/** Mese e giorno a Roma nel formato "MM-GG". */
function monthDayInRome(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const month = parts.find((p) => p.type === "month")?.value ?? "01";
  const day = parts.find((p) => p.type === "day")?.value ?? "01";
  return `${month}-${day}`;
}

/** Stagione (orario estivo o invernale) in una certa data. */
export function seasonOn(date = new Date()): Season {
  const md = monthDayInRome(date);
  const { from, to } = site.summer;
  const inSummer = from <= to ? md >= from && md <= to : md >= from || md <= to;
  return inSummer ? "summer" : "winter";
}

/** Orari della settimana per una stagione. */
export function weekHours(season: Season): Record<DayKey, readonly TimeSlot[]> {
  return site.hours[season];
}

/** Data a Roma nel formato "AAAA-MM-GG". */
export function dateKeyInRome(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "01";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

/** Mezzogiorno (ora di Roma, circa) di una data "AAAA-MM-GG": comodo per calcolare giorno della settimana e stagione. */
function noonOf(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 11));
}

function nextDayKey(key: string) {
  const d = noonOf(key);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
}

export interface ActiveClosure {
  /** Ultimo giorno di chiusura (incluso) */
  until: string;
  /** Giorno e ora della riapertura */
  reopenDate: string | null;
  reopenTime: string | null;
}

/** Chiusura straordinaria in corso in una certa data, con giorno e ora di riapertura. */
export function activeClosure(dateKey: string): ActiveClosure | null {
  const closure = site.closures.find((c) => dateKey >= c.from && dateKey <= c.to);
  if (!closure) return null;
  let key = closure.to;
  for (let i = 0; i < 30; i++) {
    key = nextDayKey(key);
    if (site.closures.some((c) => key >= c.from && key <= c.to)) continue;
    const noon = noonOf(key);
    const slots = weekHours(seasonOn(noon))[nowInRome(noon).day];
    if (slots.length) return { until: closure.to, reopenDate: key, reopenTime: slots[0].open };
  }
  return { until: closure.to, reopenDate: null, reopenTime: null };
}

/** Formatta una data "AAAA-MM-GG" per esteso, es. "martedì 24 novembre". */
export function formatDayKey(key: string, intlLocale: string) {
  return noonOf(key).toLocaleDateString(intlLocale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: TIME_ZONE,
  });
}

export type OpenStatus =
  | { open: true; closesAt: string }
  | { open: false; opensAt: string | null; opensDay: DayKey | null; closure?: ActiveClosure };

export function getOpenStatus(date = new Date()): OpenStatus {
  const closure = activeClosure(dateKeyInRome(date));
  if (closure) return { open: false, opensAt: closure.reopenTime, opensDay: null, closure };

  const { day, minutes } = nowInRome(date);
  const hours = weekHours(seasonOn(date));
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

/** Le fasce orarie come elenco di stringhe, da mostrare una per riga. */
export function slotLines(slots: readonly TimeSlot[], closedLabel: string) {
  return slots.length ? slots.map((s) => `${s.open} – ${s.close}`) : [closedLabel];
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

/** Orari della stagione in corso, per i dati strutturati di Google (calcolati quando il sito viene pubblicato). */
export function openingHoursSpecification(date: Date) {
  const hours = weekHours(seasonOn(date));
  return dayOrder.flatMap((d) =>
    hours[d].map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${schemaDay[d]}`,
      opens: s.open,
      closes: s.close,
    })),
  );
}

/** Chiusure straordinarie per i dati strutturati di Google (giorni con apertura e chiusura alle 00:00). */
export function specialClosuresSpecification(date: Date) {
  const today = dateKeyInRome(date);
  return site.closures
    .filter((c) => c.to >= today)
    .map((c) => ({
      "@type": "OpeningHoursSpecification",
      opens: "00:00",
      closes: "00:00",
      validFrom: c.from,
      validThrough: c.to,
    }));
}
