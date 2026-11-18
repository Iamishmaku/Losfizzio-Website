import type { Dictionary } from "./it";

/** Deutsche Texte. Teile zwischen *Sternchen* werden hervorgehoben; {Klammern} sind Platzhalter. */
export const de: Dictionary = {
  meta: {
    title: "Lo Sfizio · Pizzeria auf der Piazza in Dro",
    titleTemplate: "%s · Lo Sfizio Dro",
    description:
      "Lo Sfizio ist die Pizzeria auf dem Hauptplatz von Dro (Trentino, nahe Gardasee): frisch gebackene Pizza, Kebab, Piadina, Bar und Kaffee. Iss bei uns auf der Piazza oder bestelle zum Mitnehmen.",
    keywords: [
      "Pizzeria Dro",
      "Pizza Dro",
      "Kebab Dro",
      "Pizza zum Mitnehmen Dro",
      "Lo Sfizio Dro",
      "Pizza Arco",
      "Pizza Gardasee",
    ],
    fullName: "Lo Sfizio · Pizzeria, Kebab, Bar & Café",
    tagline: "Pizza auf der Piazza in Dro",
    menuTitle: "Speisekarte",
    menuDescription:
      "Die Speisekarte von Lo Sfizio in Dro: klassische und besondere Pizzen, Kebab, Piadina, Bar und Getränke. Preise und Zutaten.",
    privacyTitle: "Datenschutz & Cookies",
    privacyDescription: "Datenschutz- und Cookie-Hinweise der Website von Lo Sfizio.",
    ogBadge: "Zum Mitnehmen · {phone}",
    ogKicker: "Pizzeria · Kebab · Bar · Café",
  },
  common: {
    skipToContent: "Zum Inhalt springen",
    call: "Anrufen",
    callNumber: "{phone} anrufen",
    order: "Bestellen: {phone}",
  },
  nav: {
    home: "Start",
    about: "Über uns",
    menu: "Speisekarte",
    hours: "Öffnungszeiten",
    location: "Anfahrt",
    contact: "Kontakt",
    privacy: "Datenschutz & Cookies",
    mainLabel: "Hauptnavigation",
    mobileLabel: "Mobile Navigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    menuTitle: "Navigationsmenü",
    homeAria: "{name}, zur Startseite",
  },
  settings: {
    language: "Sprache",
    theme: "Design",
    themeSystem: "Automatisch",
    themeLight: "Hell",
    themeDark: "Dunkel",
  },
  status: {
    openNow: "Jetzt geöffnet · bis {time} Uhr",
    closedOpens: "Geschlossen · öffnet {when} um {time} Uhr",
    today: "heute",
    closed: "Geschlossen",
    fallback: "Öffnungszeiten",
  },
  days: {
    mon: "Montag",
    tue: "Dienstag",
    wed: "Mittwoch",
    thu: "Donnerstag",
    fri: "Freitag",
    sat: "Samstag",
    sun: "Sonntag",
  },
  services: ["Auf der Piazza", "Zum Mitnehmen", "Kebab", "Bar & Café"],
  hero: {
    title: "Pizza *auf der Piazza* in Dro.",
    lead: "Frisch gebackene Pizza, Kebab, Piadina und guter Kaffee mitten in Dro. Setz dich auf die Piazza oder hol sie dir zum Mitnehmen ab.",
    ctaMenu: "Zur Speisekarte",
    ctaPhone: "Telefonisch bestellen",
    ring: "Pizzeria · Kebab · Bar · Café · Auf der Piazza in Dro · ",
    illustration: "Illustration einer Pizza",
  },
  marquee: [
    "Frisch aus dem Ofen",
    "Kebab",
    "Zum Mitnehmen",
    "Piadina",
    "Bar & Kaffee",
    "Spritz auf der Piazza",
    "Lange Teigführung",
  ],
  about: {
    eyebrow: "Über uns",
    title: "Ein kleiner *Genuss*, jeden Tag.",
    intro:
      "Lo Sfizio ist die Pizzeria auf der Piazza von Dro: ein einfacher, gemütlicher Ort für eine Pizza, einen Kebab oder einen Kaffee. Ausgewählte Zutaten, ein Ofen, der immer heiß ist, und ein Lächeln an der Theke.",
    features: [
      {
        title: "Teig mit Zeit",
        text: "Unser Teig darf in Ruhe gehen: eine leichte, bekömmliche Pizza mit einem knusprigen Rand.",
      },
      {
        title: "Frisch gebacken",
        text: "Jede Pizza wird von Hand ausgezogen und erst gebacken, wenn du bestellst. Keine Abkürzungen, nur das richtige Timing.",
      },
      {
        title: "Auf der Piazza in Dro",
        text: "Tische im Freien mitten im Ort: genau richtig nach einer Radtour oder einem Klettertag.",
      },
      {
        title: "Fertig zum Mitnehmen",
        text: "Ruf an, sag uns, wann du kommst, und deine Pizza wartet heiß auf dich. Perfekt für einen Abend mit Freunden.",
      },
    ],
  },
  featured: {
    eyebrow: "Beliebteste Pizzen",
    title: "Pizzen, die du *probieren musst*",
    prev: "Vorherige Pizza",
    next: "Nächste Pizza",
    carousel: "Karussell",
    slide: "Folie",
    slideOf: "{n} von {total}",
    dots: "Pizza auswählen",
    goTo: "Zu Pizza {n}",
  },
  menuPreview: {
    eyebrow: "Die Speisekarte",
    title: "Such dir deinen *Genuss* aus",
    intro:
      "Von zeitlosen Klassikern bis zu unseren Spezialitäten, dazu Kebab und Piadina. Und zum Abschluss ein Espresso an der Bar.",
    tabsLabel: "Kategorien der Speisekarte",
    fullMenu: "Ganze Speisekarte ansehen",
  },
  tags: {
    vegetariana: "Vegetarisch",
    piccante: "Scharf",
    novita: "Neu",
    consigliata: "Unser Tipp",
  },
  visit: {
    eyebrow: "Besuch uns",
    title: "Wir warten *auf der Piazza*",
    intro:
      "Im Zentrum von Dro, wenige Schritte vom Radweg im Sarcatal und nur Minuten von Arco und Riva del Garda entfernt.",
    hoursTitle: "Öffnungszeiten",
    today: "heute",
    note: "An Feiertagen können sich die Zeiten ändern: im Zweifel einfach anrufen.",
    tooltip: "An Feiertagen und in der Hochsaison können die Öffnungszeiten abweichen.",
    infoLabel: "Hinweis zu den Öffnungszeiten",
    showMap: "Karte anzeigen",
    mapHint: "Mit dem Laden der Karte akzeptierst du die Cookies von Google Maps.",
    mapTitle: "Karte: {name}, {address}",
    whereTitle: "So findest du uns",
    directions: "Route",
  },
  faq: {
    eyebrow: "Häufige Fragen",
    title: "Alles, was du *wissen willst*",
    intro: "Keine Antwort gefunden? Ruf uns an: Wir antworten schneller, als eine Margherita gebacken ist.",
    items: [
      {
        q: "Kann ich zum Mitnehmen bestellen?",
        a: "Ja: Ruf uns an (auch über WhatsApp) oder komm direkt vorbei. Wir sagen dir sofort, wann deine Pizza fertig ist, damit du nicht warten musst.",
      },
      {
        q: "Liefert ihr nach Hause?",
        a: "Nein, wir liefern nicht. Du kannst bei uns auf der Piazza essen oder zum Mitnehmen bestellen: Ruf an und hol deine Bestellung ab, wann es dir passt.",
      },
      {
        q: "Muss ich einen Tisch reservieren?",
        a: "Unter der Woche meistens nicht. Freitags, samstags und im Sommer füllt sich die Piazza schnell: Ein kurzer Anruf lohnt sich.",
      },
      {
        q: "Gibt es glutenfreie oder laktosefreie Optionen?",
        a: "Frag unser Personal nach glutenfreiem Teig und laktosefreiem Mozzarella. Bitte sag uns immer Bescheid, wenn du Allergien oder Unverträglichkeiten hast.",
      },
      {
        q: "Kann ich mit Karte zahlen?",
        a: "Ja, wir akzeptieren Bargeld, EC-Karten und die gängigen Kreditkarten.",
      },
      {
        q: "Macht ihr Pizzen für Feiern und Gruppen?",
        a: "Natürlich: Für Geburtstage, Vereine und große Gruppen melde dich ein paar Tage vorher, dann planen wir Mengen und Zeiten gemeinsam.",
      },
      {
        q: "Wo kann ich parken?",
        a: "Öffentliche Parkplätze gibt es wenige Schritte von der Piazza in Dro entfernt. Mit dem Rad bist du über den Radweg im Sarcatal schnell da.",
      },
    ],
  },
  contact: {
    eyebrow: "Zum Mitnehmen",
    title: "Bestellen ist *ganz einfach*",
    intro:
      "Ein Anruf genügt: Wir sagen dir sofort, wann deine Bestellung fertig ist, und du holst sie heiß in der Pizzeria ab.",
    callUs: "Ruf uns an",
    steps: [
      { title: "Anrufen", text: "Per Telefon oder WhatsApp, während der Öffnungszeiten." },
      { title: "Bestellen", text: "Sag uns, was du möchtest und wann du kommst." },
      { title: "Abholen", text: "Komm auf die Piazza: Alles ist heiß und fertig." },
    ],
    whereTitle: "Abholung",
    directions: "Route",
    whatsapp: "Ruf uns über WhatsApp an",
    whatsappHint:
      "WhatsApp öffnet sich: Tippe auf das Telefonsymbol, um uns anzurufen. Über WhatsApp nehmen wir nur Anrufe an, keine Nachrichten.",
  },
  cta: {
    title: "Heute Abend Pizza? *Ruf an.*",
    text: "Wir backen sie, während du unterwegs bist: Komm vorbei und hol sie heiß und knusprig ab.",
    menu: "Speisekarte ansehen",
  },
  footer: {
    contacts: "Kontakt",
    hours: "Öffnungszeiten",
    explore: "Entdecken",
    reviews: "Bewertungen auf Google",
    madeWith: "Mit Liebe (und etwas Mehl) gemacht im Sarcatal.",
  },
  menuPage: {
    eyebrow: "Unsere Speisekarte",
    title: "Der ganze Geschmack von *Lo Sfizio*",
    intro:
      "Pizza, Kebab, Piadina und Getränke. Suche dein Lieblingsgericht oder filtere nach vegetarisch und scharf.",
    notesLabel: "Hinweise zur Speisekarte",
    notes: [
      "Glutenfreier Teig und laktosefreier Mozzarella: Bitte frag unser Personal nach der Verfügbarkeit.",
      "Extra-Zutaten: 1 € bis 2,50 € je nach Zutat.",
      "Informationen zu Allergenen erhältst du auf Nachfrage beim Personal.",
    ],
    searchLabel: "Speisekarte durchsuchen",
    searchPlaceholder: "Pizza oder Zutat suchen…",
    clearSearch: "Suche löschen",
    filtersLabel: "Filter",
    vegetarian: "Vegetarisch",
    spicy: "Scharf",
    categoriesLabel: "Kategorien",
    countOne: "1 Gericht",
    countOther: "{n} Gerichte",
    empty: "Nichts gefunden. Probier eine andere Zutat!",
    reset: "Filter zurücksetzen",
  },
  privacy: {
    eyebrow: "Hinweise",
    title: "Datenschutz & Cookies",
    draftNote: "Entwurf: vor der endgültigen Veröffentlichung von einer Fachperson prüfen lassen.",
    sections: [
      {
        title: "Verantwortlicher",
        text: "{holder}, {address}. Telefon: {phone}.",
      },
      {
        title: "Von dieser Website erhobene Daten",
        text: "Diese Website ist statisch: Sie enthält keine Formulare, erhebt keine personenbezogenen Daten und speichert nichts auf ihren Servern. Bestellungen werden telefonisch entgegengenommen. Die WhatsApp-Schaltfläche öffnet die WhatsApp-App, die Daten nach ihren eigenen Bedingungen verarbeitet.",
      },
      {
        title: "Cookies und lokaler Speicher",
        text: 'Die Website verwendet keine Profiling-Cookies und keine Analysetools. Wir speichern nur die gewählte Sprache (in einem technischen Cookie) und das helle/dunkle Design (im Speicher deines Browsers). Google Maps wird nur geladen, wenn du auf „Karte anzeigen" klickst: In diesem Fall kann Google eigene Cookies setzen, gemäß seiner Datenschutzerklärung (policies.google.com/privacy).',
      },
      {
        title: "Hosting",
        text: "Die Website wird von Vercel Inc. gehostet, das technische Daten (z. B. IP-Adressen) aus Sicherheits- und Betriebsgründen in Server-Logs speichern kann.",
      },
      {
        title: "Deine Rechte",
        text: "Du kannst jederzeit Auskunft, Berichtigung oder Löschung deiner Daten verlangen, indem du den Verantwortlichen über die oben genannten Kontaktdaten kontaktierst, und du kannst Beschwerde bei der italienischen Datenschutzbehörde (Garante per la protezione dei dati personali) einlegen.",
      },
    ],
  },
  notFound: {
    title: "Jemand hat diese Seite aufgegessen.",
    text: "Die gesuchte Seite gibt es nicht (oder sie ist im Ofen gelandet). Geh zurück zur Startseite und such dir deine Pizza aus.",
    back: "Zur Startseite",
  },
};
