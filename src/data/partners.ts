/**
 * Aziende amiche e partner, mostrate nella pagina /partners.
 * Per aggiungerne una basta aggiungere un elemento a `partners`: la pagina si aggiorna da sola.
 * I testi sono scritti come `l("italiano", "english", "deutsch")`; i campi facoltativi vuoti non vengono mostrati.
 */
import { l, type Localized } from "@/i18n/config";

export interface Partner {
  /** Identificativo univoco (solo lettere minuscole e trattini). */
  id: string;
  name: string;
  /** Tipo di attività, mostrato sopra al nome. */
  category: Localized;
  /** Tipo schema.org per i dati strutturati di Google, es. "BikeStore", "AmusementPark", "Restaurant", "LocalBusiness". */
  schemaType: string;
  description: Localized;
  /**
   * Logo facoltativo: file in `public/images/partners/` (meglio SVG) con le sue dimensioni.
   * Viene mostrato su fondo chiaro in entrambi i temi; senza logo compare un'icona.
   */
  logo?: { src: string; width: number; height: number };
  /** Elenco breve di cosa fanno (compare come etichette). */
  services: Localized[];
  address?: { street: string; postalCode: string; city: string; province: string };
  /** Numero da mostrare e in formato internazionale senza spazi (link tel:). */
  phone?: { display: string; tel: string };
  email?: string;
  /** Indirizzo completo, con https://. */
  website?: string;
  /** Indirizzo completo del profilo, con https://. */
  instagram?: string;
  /** Indirizzo completo della pagina, con https://. */
  facebook?: string;
  /** Orari a testo libero. */
  hours?: Localized;
}

export const partners: Partner[] = [
  {
    id: "lelettrica",
    name: "Lelettrica",
    category: l("Noleggio e riparazione bici", "Bike rental & repair", "Fahrradverleih & Reparatur"),
    schemaType: "BikeStore",
    description: l(
      "I nostri vicini di Dro: noleggiano e-bike e bici classiche per scoprire il Lago di Garda e le valli intorno e riparano qualsiasi due ruote. Dopo la pedalata, una pizza in piazza ci sta sempre.",
      "Our neighbours in Dro: they rent e-bikes and classic bikes for exploring Lake Garda and the valleys around it, and they repair anything on two wheels. After the ride, a pizza on the square always hits the spot.",
      "Unsere Nachbarn in Dro: Sie verleihen E-Bikes und klassische Fahrräder, um den Gardasee und die Täler ringsum zu entdecken, und reparieren alles auf zwei Rädern. Nach der Tour passt eine Pizza auf der Piazza immer.",
    ),
    logo: { src: "/images/partners/lelettrica.svg", width: 241, height: 118 },
    services: [
      l("Noleggio e-bike Flyer", "Flyer e-bike rental", "Flyer-E-Bike-Verleih"),
      l("Noleggio bici classiche", "Classic bike rental", "Verleih klassischer Fahrräder"),
      l(
        "Riparazione di e-bike, bici e monopattini",
        "E-bike, bike & e-scooter repair",
        "Reparatur von E-Bikes, Fahrrädern & E-Scootern",
      ),
    ],
    address: { street: "Via Roma 90", postalCode: "38074", city: "Dro", province: "TN" },
    phone: { display: "338 123 2434", tel: "+393381232434" },
    email: "info@lelettricaleoni.com",
    website: "https://www.lelettricaleoni.com",
    instagram: "https://www.instagram.com/lelettricaleoni",
    hours: l(
      "Tutti i giorni 9:00–13:00 e 14:00–19:00",
      "Every day 9:00–13:00 and 14:00–19:00",
      "Täglich 9:00–13:00 und 14:00–19:00 Uhr",
    ),
  },
  {
    id: "elias-adventure-park",
    name: "Elias Adventure Park",
    category: l("Parco avventura", "Adventure park", "Abenteuerpark"),
    schemaType: "AmusementPark",
    description: l(
      "Un parco avventura tra roccia e alberi alle pendici del Monte Brento, lungo il fiume Sarca: percorsi per bambini e adulti e zip line fino a oltre 500 metri. Una giornata all'aria aperta che finisce benissimo con una pizza da noi.",
      "An adventure park among rock and trees on the slopes of Monte Brento, along the Sarca river: courses for kids and adults and zip lines of over 500 metres. A day outdoors that ends perfectly with a pizza at our place.",
      "Ein Abenteuerpark zwischen Fels und Bäumen am Fuß des Monte Brento, entlang des Flusses Sarca: Parcours für Kinder und Erwachsene und Zip-Lines von über 500 Metern. Ein Tag im Freien, der mit einer Pizza bei uns perfekt endet.",
    ),
    logo: { src: "/images/partners/elias-adventure-park.png", width: 512, height: 512 },
    services: [
      l("Percorsi per bambini e adulti", "Courses for kids and adults", "Parcours für Kinder und Erwachsene"),
      l("Zip line e teleferica Big Zip", "Zip lines and Big Zip", "Zip-Lines und Big Zip"),
      l(
        "Compleanni e gruppi su prenotazione",
        "Birthdays and groups by reservation",
        "Geburtstage und Gruppen auf Anfrage",
      ),
    ],
    address: { street: "Località Gaggiolo 2", postalCode: "38074", city: "Dro", province: "TN" },
    phone: { display: "338 166 7807", tel: "+393381667807" },
    email: "eliasadventureparkinfo@gmail.com",
    website: "https://www.eliasadventurepark.com",
    facebook: "https://www.facebook.com/eliasadventurepark",
    hours: l(
      "Aprile–ottobre, 10:00–18:30 (ultimo ingresso 16:00): tutti i giorni da giugno a metà settembre, negli altri mesi nei weekend e festivi",
      "April–October, 10:00–18:30 (last entry 16:00): every day from June to mid-September, weekends and holidays the rest of the season",
      "April–Oktober, 10:00–18:30 Uhr (letzter Einlass 16:00 Uhr): täglich von Juni bis Mitte September, in der übrigen Saison an Wochenenden und Feiertagen",
    ),
  },
];

export function partnerAddress(p: Partner) {
  const a = p.address;
  return a ? `${a.street}, ${a.postalCode} ${a.city} (${a.province})` : null;
}

export function partnerMapsLink(p: Partner) {
  const a = p.address;
  if (!a) return null;
  const query = `${p.name}, ${a.street}, ${a.postalCode} ${a.city} ${a.province}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Indirizzo del sito senza "https://" e senza barra finale, per mostrarlo nel testo del link. */
export function displayUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/+$/, "");
}

/** Nome utente da un indirizzo Instagram, es. "@lelettricaleoni". */
export function instagramHandle(url: string) {
  const name = url.replace(/\/+$/, "").split("/").pop();
  return name ? `@${name}` : url;
}
