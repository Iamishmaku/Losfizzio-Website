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
  closure: {
    title: "Vorübergehend geschlossen",
    banner:
      "Wir haben bis einschließlich {until} geschlossen. Ab {reopen} um {time} Uhr sind wir wieder für euch da!",
    badge: "Geschlossen · wieder geöffnet ab {reopen}, {time} Uhr",
    close: "Hinweis schließen",
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
  services: ["Auf der Piazza", "Zum Mitnehmen", "Glutenfrei", "Kebab", "Bar & Café"],
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
    season: { winter: "Wintersaison", summer: "Sommersaison" },
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
        a: "Nein, eine Reservierung ist nicht nötig: Komm einfach vorbei, wir finden einen Platz für dich auf der Piazza.",
      },
      {
        q: "Gibt es glutenfreie Pizza?",
        a: "Ja, wir machen auch glutenfreie Pizza: Frag einfach bei der Bestellung danach. Bitte sag uns immer Bescheid, wenn du Allergien oder Unverträglichkeiten hast.",
      },
      {
        q: "Kann ich mit Karte zahlen?",
        a: "Ja, du kannst mit Karte oder bar bezahlen.",
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
    follow: "Folge uns",
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
    rights: "Alle Rechte vorbehalten.",
    vat: "USt-IdNr.",
    contacts: "Kontakt",
    hours: "Öffnungszeiten",
    explore: "Entdecken",
    reviews: "Bewertungen auf Google",
    madeWith: "Mit Liebe (und etwas Mehl) gemacht im Sarcatal.",
  },
  menuPage: {
    priceOnRequest: "Preis auf Anfrage",
    eyebrow: "Unsere Speisekarte",
    title: "Der ganze Geschmack von *Lo Sfizio*",
    intro:
      "Pizza, Kebab, Piadina und Getränke. Suche dein Lieblingsgericht oder filtere nach vegetarisch und scharf.",
    notesLabel: "Hinweise zur Speisekarte",
    notes: [
      "Einige Produkte können tiefgekühlt sein.",
      "Service am Tisch: 1,50 €.",
      "Glutenfreie Pizza erhältlich: Frag einfach bei der Bestellung danach.",
      "Allergene: Frag unser Personal, wir sagen dir, was in jedem Gericht steckt.",
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
    title: "Datenschutzerklärung",
    lastUpdated: "Zuletzt aktualisiert: November 2026",
    intro:
      "Diese Seite erklärt, welche Daten die Website von {name} verarbeitet, warum und wie lange, gemäß der Datenschutz-Grundverordnung (EU) 2016/679 (DSGVO).",
    sections: [
      { title: "Verantwortlicher", text: "{holder}\n{address}\nTelefon: {phone}" },
      {
        title: "Erhobene Daten",
        text: "Die Website ist ein einfaches Schaufenster: Es gibt keine Konten, keine Formulare, keine Online-Bestellungen oder -Zahlungen, und wir verwenden keine Analyse- oder Profiling-Tools.\n\nWenn Sie die Website besuchen, erhält der Server, auf dem sie gehostet wird, Ihre IP-Adresse und die technischen Angaben der Anfrage (Browser, aufgerufene Seite, Datum und Uhrzeit), die nötig sind, um Ihnen die Seiten anzuzeigen und die Website vor Missbrauch zu schützen.\n\nWenn Sie eine Sprache oder ein Design (hell oder dunkel) wählen, speichern wir diese Einstellung auf Ihrem Gerät, wie im Abschnitt „Cookies“ beschrieben.",
      },
      {
        title: "Rechtsgrundlage",
        text: "Die Verarbeitung der technischen Nutzungsdaten und die Speicherung Ihrer Einstellungen beruhen auf dem berechtigten Interesse, Ihnen eine sichere und funktionierende Website anzubieten (Art. 6 Abs. 1 lit. f DSGVO). Wir verarbeiten keine Daten, für die Ihre Einwilligung erforderlich ist.",
      },
      {
        title: "Cookies",
        text: "Wir verwenden ein einziges technisches Cookie: NEXT_LOCALE, das sich die gewählte Sprache merkt (ein Jahr). Das helle/dunkle Design wird im Speicher Ihres Browsers (localStorage) gespeichert und an niemanden gesendet. Wir verwenden keine Profiling- oder Analyse-Cookies, deshalb zeigt die Website kein Cookie-Banner.\n\nGoogle Maps wird nur geladen, wenn Sie auf „Karte anzeigen“ klicken: Ab dann kann Google eigene Cookies setzen.",
      },
      {
        title: "Datenspeicherung",
        text: "Technische Nutzungsdaten bleiben nur so lange in den Protokollen des Hosting-Anbieters, wie es für den Betrieb und die Sicherheit der Website nötig ist. Ihre Sprach- und Design-Einstellungen bleiben auf Ihrem Gerät, bis Sie sie im Browser löschen.",
      },
      {
        title: "Datenempfänger",
        text: "Die Website wird von Vercel Inc. (USA) gehostet, die technische Nutzungsdaten in unserem Auftrag als Auftragsverarbeiter verarbeitet. Die Übermittlung in die USA erfolgt mit den von der DSGVO vorgesehenen Garantien (EU-U.S. Data Privacy Framework und Standardvertragsklauseln). Die Domain wird über Cloudflare Inc. verwaltet, die Ihrem Browser lediglich mitteilt, wo sich die Website befindet. Wir verkaufen oder übermitteln Ihre Daten an niemanden.",
      },
      {
        title: "Von Ihrem Browser kontaktierte Dienste",
        text: "Einige Schaltflächen öffnen externe Dienste, nur wenn Sie darauf klicken: Google Maps (Karte und Route), WhatsApp, Instagram und Facebook (Meta). Diese Dienste erhalten Ihre IP-Adresse, können eigene Cookies setzen und verarbeiten Daten nach ihren eigenen Datenschutzbestimmungen.",
      },
      {
        title: "Betroffenenrechte",
        text: "Gemäß Art. 15–22 DSGVO haben Sie das Recht auf Auskunft, Berichtigung oder Löschung Ihrer Daten, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung und Datenübertragbarkeit. Sie haben zudem das Recht, bei der italienischen Datenschutzbehörde (Garante per la protezione dei dati personali, www.garanteprivacy.it) Beschwerde einzulegen.",
      },
      {
        title: "Kontakt",
        text: "Für alle Anfragen zum Datenschutz können Sie uns unter {phone} anrufen, uns schreiben oder in der Pizzeria vorbeikommen: {address}.",
      },
    ],
  },
  notFound: {
    title: "Jemand hat diese Seite aufgegessen.",
    text: "Die gesuchte Seite gibt es nicht (oder sie ist im Ofen gelandet). Geh zurück zur Startseite und such dir deine Pizza aus.",
    back: "Zur Startseite",
  },
};
