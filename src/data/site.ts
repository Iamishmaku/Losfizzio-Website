/**
 * Dati principali della pizzeria.
 * ⚠️ Tutti i valori marcati con "DA VERIFICARE" vanno controllati prima della messa online.
 * Modificando questo file si aggiornano automaticamente tutte le pagine, i metadati SEO e i dati strutturati.
 * I testi tradotti (descrizioni, FAQ, ecc.) sono in src/i18n/dictionaries.
 */

export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

/** Fascia oraria nel formato "HH:MM" (24h). Una fascia che termina dopo mezzanotte non è supportata. */
export interface TimeSlot {
  open: string;
  close: string;
}

export const site = {
  name: "Lo Sfizio",
  /** URL definitivo del sito (usato per SEO, sitemap e Open Graph). DA VERIFICARE */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://losfizio-dro.vercel.app",

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
    /** Numero da mostrare (confermato dal titolare). */
    phoneDisplay: "388 907 7320",
    /** Numero in formato internazionale senza spazi (link tel:). */
    phone: "+393889077320",
    /**
     * Numero WhatsApp in formato internazionale senza "+" (link wa.me). Lascia vuoto per nascondere il pulsante.
     * Su WhatsApp i clienti possono solo chiamare, non scrivere. Stesso numero del cellulare (confermato).
     */
    whatsapp: "393889077320",
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
} as const;

export const dayOrder: DayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city} (${site.address.province})`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

export const telLink = `tel:${site.contacts.phone}`;

/**
 * Link che apre la conversazione WhatsApp con la pizzeria: da lì il cliente tocca l'icona del telefono per chiamare.
 * (WhatsApp non offre un link ufficiale che avvii direttamente la chiamata.)
 */
export function whatsappLink() {
  return site.contacts.whatsapp ? `https://wa.me/${site.contacts.whatsapp}` : null;
}
