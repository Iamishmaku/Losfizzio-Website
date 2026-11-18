/**
 * Dati principali della pizzeria.
 * ⚠️ Tutti i valori marcati con "DA VERIFICARE" vanno controllati prima della messa online.
 * Modificando questo file si aggiornano automaticamente tutte le pagine, i metadati SEO e i dati strutturati.
 */

export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

/** Fascia oraria nel formato "HH:MM" (24h). Una fascia che termina dopo mezzanotte non è supportata. */
export interface TimeSlot {
  open: string;
  close: string;
}

export const site = {
  name: "Lo Sfizio",
  fullName: "Lo Sfizio · Pizzeria, Kebab, Bar & Caffè",
  tagline: "La pizza in piazza a Dro",
  description:
    "Lo Sfizio è la pizzeria in piazza a Dro (Trento): pizze cotte al momento, kebab, piadine, bar e caffè. Mangia da noi in piazza o ordina da asporto.",
  /** URL definitivo del sito (usato per SEO, sitemap e Open Graph). DA VERIFICARE */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://losfizio-dro.vercel.app",
  locale: "it_IT",

  address: {
    /** Fonte: Tripadvisor e altri elenchi online (2026). */
    street: "Piazza Repubblica 15",
    postalCode: "38074",
    city: "Dro",
    province: "TN",
    region: "Trentino-Alto Adige",
    country: "IT",
  },
  /** Coordinate approssimative di Piazza Repubblica a Dro. DA VERIFICARE */
  geo: { lat: 45.9622, lng: 10.9117 },
  mapsQuery: "Lo Sfizio, Piazza Repubblica 15, 38074 Dro TN",

  contacts: {
    /** Numero da mostrare. Fonte: elenchi online (un elenco riporta 388 907 7920). DA VERIFICARE */
    phoneDisplay: "388 907 7320",
    /** Numero in formato internazionale senza spazi (link tel:). */
    phone: "+393889077320",
    /**
     * Numero WhatsApp in formato internazionale senza "+" (link wa.me), es. "393889077320".
     * Lascialo vuoto finché non è confermato che il numero è attivo su WhatsApp.
     */
    whatsapp: "",
    /** Lascia vuoto per nasconderla. */
    email: "",
  },

  social: {
    /** Lascia vuoto per nascondere l'icona. */
    instagram: "",
    facebook: "",
    /** Link alla scheda Google per le recensioni. */
    googleReviews: "https://www.google.com/maps/search/?api=1&query=Lo+Sfizio+Piazza+Repubblica+15+Dro",
  },

  /**
   * Orari di apertura (fuso orario Europe/Rome). Array vuoto = chiuso.
   * Fonte: RestaurantGuru (dato non recentissimo). DA VERIFICARE
   */
  hours: {
    mon: [{ open: "12:00", close: "22:00" }],
    tue: [{ open: "12:00", close: "22:30" }],
    wed: [{ open: "12:00", close: "22:30" }],
    thu: [{ open: "12:00", close: "22:30" }],
    fri: [{ open: "12:00", close: "22:30" }],
    sat: [{ open: "10:00", close: "22:30" }],
    sun: [{ open: "11:30", close: "22:30" }],
  } satisfies Record<DayKey, TimeSlot[]>,

  services: ["In piazza", "Asporto", "Kebab", "Bar & Caffè"],
} as const;

export const dayLabels: Record<DayKey, string> = {
  mon: "Lunedì",
  tue: "Martedì",
  wed: "Mercoledì",
  thu: "Giovedì",
  fri: "Venerdì",
  sat: "Sabato",
  sun: "Domenica",
};

export const dayOrder: DayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city} (${site.address.province})`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

export const telLink = `tel:${site.contacts.phone}`;

export function whatsappLink(text?: string) {
  if (!site.contacts.whatsapp) return null;
  const base = `https://wa.me/${site.contacts.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const navLinks = [
  { href: "/#chi-siamo", label: "Chi siamo" },
  { href: "/menu", label: "Menu" },
  { href: "/#orari", label: "Orari" },
  { href: "/#dove-siamo", label: "Dove siamo" },
  { href: "/#contatti", label: "Contatti" },
] as const;
