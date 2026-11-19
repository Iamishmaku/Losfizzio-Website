/**
 * Testi del sito in italiano (lingua principale).
 * Le parti tra *asterischi* vengono evidenziate in corsivo rosso.
 * I segnaposto tra {graffe} vengono sostituiti automaticamente.
 */
export const it = {
  meta: {
    title: "Lo Sfizio · Pizzeria in piazza a Dro",
    titleTemplate: "%s · Lo Sfizio Dro",
    description:
      "Lo Sfizio è la pizzeria in piazza a Dro (Trento): pizze cotte al momento, kebab, piadine, bar e caffè. Mangia da noi in piazza o ordina da asporto.",
    keywords: [
      "pizzeria Dro",
      "pizza Dro",
      "kebab Dro",
      "pizza asporto Dro",
      "Lo Sfizio Dro",
      "pizzeria Valle del Sarca",
    ],
    fullName: "Lo Sfizio · Pizzeria, Kebab, Bar & Caffè",
    tagline: "La pizza in piazza a Dro",
    menuTitle: "Menu",
    menuDescription:
      "Il menu di Lo Sfizio a Dro: pizze classiche e speciali, kebab, piadine, bar e bevande. Prezzi e ingredienti.",
    privacyTitle: "Privacy e cookie",
    privacyDescription: "Informativa privacy e cookie del sito di Lo Sfizio.",
    ogBadge: "Asporto · {phone}",
    ogKicker: "Pizzeria · Kebab · Bar · Caffè",
  },
  common: {
    skipToContent: "Vai al contenuto",
    call: "Chiama",
    callNumber: "Chiama {phone}",
    order: "Ordina: {phone}",
  },
  nav: {
    home: "Home",
    about: "Chi siamo",
    menu: "Menu",
    hours: "Orari",
    location: "Dove siamo",
    contact: "Contatti",
    privacy: "Privacy e cookie",
    mainLabel: "Navigazione principale",
    mobileLabel: "Navigazione mobile",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    menuTitle: "Menu di navigazione",
    homeAria: "{name}, torna alla home",
  },
  settings: {
    language: "Lingua",
    theme: "Tema",
    themeSystem: "Automatico",
    themeLight: "Chiaro",
    themeDark: "Scuro",
  },
  status: {
    openNow: "Aperto ora · chiude alle {time}",
    closedOpens: "Chiuso · apre {when} alle {time}",
    today: "oggi",
    closed: "Chiuso",
    fallback: "Orari di apertura",
  },
  closure: {
    title: "Chiusura straordinaria",
    banner: "Siamo chiusi fino a {until} compreso. Riapriamo {reopen} alle {time}!",
    badge: "Chiuso · riapre {reopen} alle {time}",
    close: "Chiudi avviso",
  },
  days: {
    mon: "Lunedì",
    tue: "Martedì",
    wed: "Mercoledì",
    thu: "Giovedì",
    fri: "Venerdì",
    sat: "Sabato",
    sun: "Domenica",
  },
  services: ["In piazza", "Asporto", "Senza glutine", "Kebab", "Bar & Caffè"],
  hero: {
    title: "La pizza *in piazza* a Dro.",
    lead: "Pizze cotte al momento, kebab, piadine e un buon caffè, nel cuore di Dro. Siediti in piazza o passa a ritirarla da asporto.",
    ctaMenu: "Scopri il menu",
    ctaPhone: "Ordina al telefono",
    ring: "Pizzeria · Kebab · Bar · Caffè · In piazza a Dro · ",
    illustration: "Illustrazione di una pizza",
  },
  marquee: [
    "Pizza cotta al momento",
    "Kebab",
    "Asporto",
    "Piadine",
    "Bar & caffè",
    "Spritz in piazza",
    "Impasto a lunga lievitazione",
  ],
  about: {
    eyebrow: "Chi siamo",
    title: "Un piccolo *sfizio*, ogni giorno.",
    intro:
      "Lo Sfizio è la pizzeria della piazza di Dro: un posto semplice e accogliente dove fermarsi per una pizza, un kebab o un caffè. Ingredienti scelti, forno sempre acceso e un sorriso al banco.",
    features: [
      {
        title: "Impasto che riposa",
        text: "Lasciamo lievitare l'impasto con calma: una pizza leggera, digeribile e con il cornicione che fa rumore.",
      },
      {
        title: "Cotta al momento",
        text: "Ogni pizza viene stesa a mano e infornata quando la ordini. Niente scorciatoie, solo il tempo giusto.",
      },
      {
        title: "In piazza a Dro",
        text: "Tavoli all'aperto nel centro del paese: il posto giusto dopo un giro in bici o una giornata in falesia.",
      },
      {
        title: "Pronta da asporto",
        text: "Chiama, dicci a che ora passi e la trovi pronta e calda. Perfetta per la cena a casa con gli amici.",
      },
    ],
  },
  featured: {
    eyebrow: "Le più amate",
    title: "Le pizze da *non perdere*",
    prev: "Pizza precedente",
    next: "Pizza successiva",
    carousel: "carosello",
    slide: "slide",
    slideOf: "{n} di {total}",
    dots: "Scegli la pizza",
    goTo: "Vai alla pizza {n}",
  },
  menuPreview: {
    eyebrow: "Il menu",
    title: "Scegli il tuo *sfizio*",
    intro:
      "Dalle classiche di sempre alle nostre specialità, passando per kebab e piadine. E per chiudere, un caffè al banco.",
    tabsLabel: "Categorie del menu",
    fullMenu: "Vedi il menu completo",
  },
  tags: {
    vegetariana: "Vegetariana",
    piccante: "Piccante",
    novita: "Novità",
    consigliata: "La consigliata",
  },
  visit: {
    season: { winter: "Orario invernale", summer: "Orario estivo" },
    eyebrow: "Vieni a trovarci",
    title: "Ti aspettiamo *in piazza*",
    intro:
      "Nel centro di Dro, a due passi dalla ciclabile della Valle del Sarca e a pochi minuti da Arco e Riva del Garda.",
    hoursTitle: "Orari di apertura",
    today: "oggi",
    note: "Orari soggetti a variazioni nei festivi: nel dubbio, chiamaci.",
    tooltip: "Nei giorni festivi e in alta stagione gli orari possono cambiare.",
    infoLabel: "Informazioni sugli orari",
    showMap: "Mostra la mappa",
    mapHint: "Caricando la mappa accetti i cookie di Google Maps.",
    mapTitle: "Mappa: {name}, {address}",
    whereTitle: "Dove siamo",
    directions: "Indicazioni",
  },
  faq: {
    eyebrow: "Domande frequenti",
    title: "Tutto quello che *vuoi sapere*",
    intro: "Non trovi la risposta? Chiamaci: siamo più veloci a rispondere che a sfornare una margherita.",
    items: [
      {
        q: "Si può ordinare da asporto?",
        a: "Sì: chiamaci (anche su WhatsApp) o passa direttamente in pizzeria. Ti diciamo subito a che ora sarà pronta la tua pizza, così non devi aspettare.",
      },
      {
        q: "Fate consegne a domicilio?",
        a: "No, non facciamo consegne. Puoi mangiare da noi in piazza oppure ordinare da asporto: chiamaci e passa a ritirare all'orario che preferisci.",
      },
      {
        q: "Serve prenotare un tavolo?",
        a: "No, la prenotazione non è obbligatoria: passa quando vuoi e ti troviamo un posto in piazza.",
      },
      {
        q: "Avete la pizza senza glutine?",
        a: "Sì, facciamo anche la pizza senza glutine: chiedila quando ordini. Segnalaci sempre eventuali allergie o intolleranze.",
      },
      {
        q: "Si può pagare con la carta?",
        a: "Sì, puoi pagare con la carta oppure in contanti.",
      },
      {
        q: "Fate pizze per feste e gruppi?",
        a: "Certo: per compleanni, squadre e gruppi numerosi contattaci qualche giorno prima e organizziamo insieme quantità e orari.",
      },
      {
        q: "Dove si parcheggia?",
        a: "Ci sono parcheggi pubblici a pochi passi dalla piazza di Dro. Ci si arriva comodamente anche in bici lungo la ciclabile della Valle del Sarca.",
      },
    ],
  },
  contact: {
    eyebrow: "Ordina da asporto",
    title: "Ordinare è *facilissimo*",
    intro:
      "Per ordinare basta una telefonata: ti diciamo subito a che ora è pronta e la trovi calda in pizzeria.",
    callUs: "Chiamaci",
    steps: [
      { title: "Chiama", text: "Al telefono o su WhatsApp, negli orari di apertura." },
      { title: "Ordina", text: "Dicci cosa desideri e a che ora passi." },
      { title: "Ritira", text: "Passa in piazza: la trovi pronta e calda." },
    ],
    whereTitle: "Dove ritirare",
    directions: "Indicazioni",
    follow: "Seguici",
    whatsapp: "Chiamaci su WhatsApp",
    whatsappHint:
      "Si apre WhatsApp: tocca l'icona del telefono per chiamarci. Su WhatsApp rispondiamo solo alle chiamate, non ai messaggi.",
  },
  cta: {
    title: "Stasera pizza? *Chiamaci.*",
    text: "La prepariamo mentre arrivi: passi in pizzeria e la ritiri calda e fragrante.",
    menu: "Sfoglia il menu",
  },
  footer: {
    rights: "Tutti i diritti riservati.",
    vat: "P.IVA",
    contacts: "Contatti",
    hours: "Orari",
    explore: "Esplora",
    reviews: "Recensioni su Google",
    madeWith: "Fatto con passione (e un po' di farina) in Valle del Sarca.",
  },
  menuPage: {
    priceOnRequest: "Prezzo su richiesta",
    eyebrow: "Il nostro menu",
    title: "Tutto il gusto dello *Sfizio*",
    intro:
      "Pizze, kebab, piadine e bevande. Cerca il tuo piatto preferito o filtra per le proposte vegetariane e piccanti.",
    notesLabel: "Note sul menu",
    notes: [
      "Alcuni prodotti possono essere surgelati.",
      "Servizio al tavolo: 1,50 €.",
      "Pizza senza glutine disponibile: chiedila quando ordini.",
      "Allergeni: chiedi al personale, ti diciamo cosa contiene ogni piatto.",
    ],
    searchLabel: "Cerca nel menu",
    searchPlaceholder: "Cerca una pizza o un ingrediente…",
    clearSearch: "Cancella ricerca",
    filtersLabel: "Filtri",
    vegetarian: "Vegetariane",
    spicy: "Piccanti",
    categoriesLabel: "Categorie",
    countOne: "1 proposta",
    countOther: "{n} proposte",
    empty: "Nessuna proposta trovata. Prova con un altro ingrediente!",
    reset: "Azzera i filtri",
  },
  privacy: {
    eyebrow: "Informativa",
    title: "Privacy Policy",
    lastUpdated: "Ultimo aggiornamento: novembre 2026",
    intro:
      "Questa pagina spiega quali dati tratta il sito di {name}, perché e per quanto tempo, ai sensi del Regolamento UE 2016/679 (GDPR).",
    sections: [
      { title: "Titolare del trattamento", text: "{holder}\n{address}\nTelefono: {phone}" },
      {
        title: "Dati raccolti",
        text: "Il sito è una semplice vetrina: non ci sono account, moduli, ordini o pagamenti online e non usiamo strumenti di statistica o di profilazione.\n\nQuando visiti il sito, il server che lo ospita riceve il tuo indirizzo IP e i dati tecnici della richiesta (browser, pagina richiesta, data e ora), necessari per mostrarti le pagine e proteggere il sito da abusi.\n\nSe scegli una lingua o un tema (chiaro o scuro), salviamo questa preferenza sul tuo dispositivo, come spiegato nella sezione «Cookie».",
      },
      {
        title: "Base giuridica",
        text: "Il trattamento dei dati tecnici di navigazione e la memorizzazione delle tue preferenze si basano sul legittimo interesse a offrirti un sito sicuro e funzionante (art. 6, par. 1, lett. f GDPR). Non trattiamo dati che richiedono il tuo consenso.",
      },
      {
        title: "Cookie",
        text: "Usiamo un solo cookie tecnico: NEXT_LOCALE, che ricorda la lingua che hai scelto (durata un anno). Il tema chiaro/scuro viene salvato nella memoria del browser (localStorage) e non viene inviato a nessuno. Non usiamo cookie di profilazione né di statistica, per questo il sito non mostra un banner dei cookie.\n\nLa mappa di Google Maps viene caricata solo se fai clic su «Mostra la mappa»: da quel momento Google può impostare i propri cookie.",
      },
      {
        title: "Conservazione dei dati",
        text: "I dati tecnici di navigazione restano nei registri del fornitore di hosting solo per il tempo necessario al funzionamento e alla sicurezza del sito. Le preferenze di lingua e tema restano sul tuo dispositivo finché non le cancelli dal browser.",
      },
      {
        title: "Destinatari dei dati",
        text: "Il sito è ospitato da Vercel Inc. (Stati Uniti), che tratta i dati tecnici di navigazione per nostro conto come responsabile del trattamento. Il trasferimento verso gli Stati Uniti avviene con le garanzie previste dal GDPR (EU-U.S. Data Privacy Framework e clausole contrattuali standard). Il dominio è gestito tramite Cloudflare Inc., che si limita a indicare al tuo browser dove si trova il sito. Non vendiamo né cediamo i tuoi dati a nessuno.",
      },
      {
        title: "Servizi contattati dal tuo browser",
        text: "Alcuni pulsanti aprono servizi esterni, solo se ci clicchi: Google Maps (mappa e indicazioni stradali), WhatsApp, Instagram e Facebook (Meta). Questi servizi ricevono il tuo indirizzo IP, possono impostare propri cookie e trattano i dati secondo le loro informative.",
      },
      {
        title: "Diritti dell'interessato",
        text: "Ai sensi degli artt. 15–22 GDPR hai il diritto di accedere ai tuoi dati, chiederne la rettifica o la cancellazione, limitarne il trattamento, opporti al trattamento e chiederne la portabilità. Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).",
      },
      {
        title: "Contatti",
        text: "Per qualsiasi richiesta sul trattamento dei dati puoi chiamarci al {phone} oppure scriverci o passare in pizzeria: {address}.",
      },
    ],
  },
  notFound: {
    title: "Qualcuno ha mangiato questa pagina.",
    text: "La pagina che cerchi non esiste (o è finita nel forno). Torna alla home e scegli la tua pizza.",
    back: "Torna alla home",
  },
};

export type Dictionary = typeof it;
