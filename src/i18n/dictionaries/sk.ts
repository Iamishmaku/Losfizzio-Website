import type { Dictionary } from "./it";

/**
 * Texty v slovenčine. Časti medzi *hviezdičkami* sú zvýraznené; {zátvorky} sú zástupné symboly.
 * ⚠️ Preklad nerobil rodený hovorca: oplatí sa ho skontrolovať.
 */
export const sk: Dictionary = {
  meta: {
    title: "Lo Sfizio · Pizzeria na námestí v Dro",
    titleTemplate: "%s · Lo Sfizio Dro",
    description:
      "Lo Sfizio je pizzeria na hlavnom námestí v Dro (Trentino, neďaleko Lago di Garda): pizza pečená na objednávku, kebab, piadina, bar a káva. Najedz sa u nás na námestí alebo si objednaj so sebou.",
    keywords: [
      "pizzeria Dro",
      "pizza Dro",
      "kebab Dro",
      "pizza so sebou Dro",
      "Lo Sfizio Dro",
      "pizza Arco",
      "pizza Lago di Garda",
    ],
    fullName: "Lo Sfizio · Pizzeria, Kebab, Bar a Kaviareň",
    tagline: "Pizza na námestí v Dro",
    menuTitle: "Menu",
    menuDescription:
      "Menu Lo Sfizio v Dro: klasické aj špeciálne pizze, kebab, piadina, bar a nápoje. Ceny a suroviny.",
    partnersTitle: "Čo robiť v Dro: elektrobicykle a lanový park",
    partnersDescription:
      "Čo robiť v Dro a v údolí Sarca: požičovňa elektrobicyklov, lanový park a priatelia Lo Sfizio. Adresy, otváracie hodiny a kontakty.",
    partnersKeywords: [
      "čo robiť v Dro",
      "požičovňa elektrobicyklov Dro",
      "lanový park Dro",
      "Elias Adventure Park",
      "Lelettrica Dro",
      "údolie Sarca",
    ],
    privacyTitle: "Ochrana súkromia a cookies",
    privacyDescription: "Zásady ochrany súkromia a súborov cookie na stránke Lo Sfizio.",
    ogBadge: "So sebou · {phone}",
    ogKicker: "Pizzeria · Kebab · Bar · Kaviareň",
  },
  common: {
    skipToContent: "Prejsť na obsah",
    call: "Zavolať",
    callNumber: "Zavolať {phone}",
    order: "Objednať: {phone}",
  },
  nav: {
    home: "Domov",
    about: "O nás",
    menu: "Menu",
    hours: "Otváracie hodiny",
    location: "Kde sme",
    partners: "Priatelia",
    contact: "Kontakt",
    privacy: "Súkromie a cookies",
    mainLabel: "Hlavná navigácia",
    mobileLabel: "Mobilná navigácia",
    openMenu: "Otvoriť menu",
    closeMenu: "Zavrieť menu",
    menuTitle: "Navigačné menu",
    homeAria: "{name}, späť na úvod",
  },
  settings: {
    language: "Jazyk",
    theme: "Vzhľad",
    themeSystem: "Automaticky",
    themeLight: "Svetlý",
    themeDark: "Tmavý",
  },
  status: {
    openNow: "Otvorené · do {time}",
    closedOpens: "Zatvorené · otvárame: {when} o {time}",
    today: "dnes",
    closed: "Zatvorené",
    fallback: "Otváracie hodiny",
  },
  closure: {
    title: "Dočasne zatvorené",
    banner: "Posledný deň zatvorenia: {until}. Znova otvárame: {reopen} o {time}!",
    badge: "Zatvorené · otvárame: {reopen} o {time}",
    close: "Zavrieť oznam",
  },
  days: {
    mon: "Pondelok",
    tue: "Utorok",
    wed: "Streda",
    thu: "Štvrtok",
    fri: "Piatok",
    sat: "Sobota",
    sun: "Nedeľa",
  },
  services: ["Na námestí", "So sebou", "Bez lepku", "Kebab", "Bar a kaviareň"],
  hero: {
    title: "Pizza *na námestí* v Dro.",
    lead: "Pizza pečená na objednávku, kebab, piadina a dobrá káva v srdci Dro. Sadni si na námestí alebo si ju vyzdvihni so sebou.",
    ctaMenu: "Pozrieť menu",
    ctaPhone: "Objednať telefonicky",
    illustration: "Ilustrácia pizze",
  },
  marquee: [
    "Pečená na objednávku",
    "Kebab",
    "So sebou",
    "Piadina",
    "Bar a káva",
    "Spritz na námestí",
    "Pomaly kysnuté cesto",
  ],
  about: {
    eyebrow: "O nás",
    title: "Malá *radosť* každý deň.",
    intro:
      "Lo Sfizio je pizzeria na hlavnom námestí v Dro: jednoduché a priateľské miesto na pizzu, kebab alebo kávu. Kvalitné suroviny, vždy rozpálená pec a úsmev pri pulte.",
    features: [
      {
        title: "Cesto, ktoré má čas",
        text: "Naše cesto nechávame pomaly kysnúť: ľahká, stráviteľná pizza s chrumkavým okrajom.",
      },
      {
        title: "Pečená na objednávku",
        text: "Každú pizzu ručne rozťahujeme a do pece ide, až keď si ju objednáš. Žiadne skratky, len správny čas.",
      },
      {
        title: "Na námestí v Dro",
        text: "Stoly vonku v centre obce: ideálna zastávka po výlete na bicykli alebo po dni lezenia.",
      },
      {
        title: "Pripravená so sebou",
        text: "Zavolaj, povedz, kedy prídeš, a pizza bude horúca a pripravená. Ideálna na večeru doma s priateľmi.",
      },
    ],
  },
  featured: {
    eyebrow: "Najobľúbenejšie",
    title: "Pizze, ktoré *musíš ochutnať*",
    prev: "Predchádzajúca pizza",
    next: "Ďalšia pizza",
    carousel: "karusel",
    slide: "snímka",
    slideOf: "{n} z {total}",
    dots: "Vyber pizzu",
    goTo: "Prejsť na pizzu {n}",
  },
  menuPreview: {
    eyebrow: "Menu",
    title: "Vyber si svoju *radosť*",
    intro: "Od nadčasovej klasiky po naše špeciality, k tomu kebab a piadina. A na záver espresso pri bare.",
    tabsLabel: "Kategórie menu",
    fullMenu: "Pozrieť celé menu",
  },
  tags: {
    vegetariana: "Vegetariánska",
    piccante: "Pikantná",
    novita: "Novinka",
    consigliata: "Odporúčame",
  },
  visit: {
    season: { winter: "Zimné otváracie hodiny", summer: "Letné otváracie hodiny" },
    eyebrow: "Príď k nám",
    title: "Čakáme ťa *na námestí*",
    intro: "V centre Dro, pár krokov od cyklotrasy údolím Sarca a pár minút od Arco a Riva del Garda.",
    hoursTitle: "Otváracie hodiny",
    today: "dnes",
    note: "Cez sviatky sa otváracie hodiny môžu zmeniť: ak si nie si istý, zavolaj nám.",
    tooltip: "Cez sviatky a v hlavnej sezóne sa otváracie hodiny môžu líšiť.",
    infoLabel: "Informácie o otváracích hodinách",
    showMap: "Zobraziť mapu",
    mapHint: "Načítaním mapy súhlasíš so súbormi cookie Google Maps.",
    mapTitle: "Mapa: {name}, {address}",
    whereTitle: "Kde sme",
    directions: "Navigovať",
  },
  faq: {
    eyebrow: "Časté otázky",
    title: "Všetko, čo *chceš vedieť*",
    intro: "Nenašiel si odpoveď? Zavolaj nám: odpovieme rýchlejšie, ako upečieme margheritu.",
    items: [
      {
        q: "Dá sa objednať so sebou?",
        a: "Áno: zavolaj nám (aj cez WhatsApp) alebo jednoducho príď. Hneď ti povieme, kedy bude pizza hotová, aby si nemusel čakať.",
      },
      {
        q: "Rozvážate domov?",
        a: "Nie, nerozvážame. Môžeš sa najesť u nás na námestí alebo si objednať so sebou: zavolaj a vyzdvihni si objednávku, kedy ti to vyhovuje.",
      },
      {
        q: "Treba si rezervovať stôl?",
        a: "Nie, rezervácia nie je potrebná: príď, kedy chceš, a nájdeme ti miesto na námestí.",
      },
      {
        q: "Máte bezlepkovú pizzu?",
        a: "Áno, robíme aj bezlepkovú pizzu: stačí o ňu požiadať pri objednávke. Vždy nám povedz o alergiách a intoleranciách.",
      },
      {
        q: "Dá sa platiť kartou?",
        a: "Áno, môžeš platiť kartou alebo v hotovosti.",
      },
      {
        q: "Robíte pizzu na oslavy a pre skupiny?",
        a: "Samozrejme: na narodeniny, pre tímy a veľké skupiny sa nám ozvi pár dní vopred a spolu dohodneme množstvo a čas.",
      },
      {
        q: "Kde sa dá parkovať?",
        a: "Pár krokov od námestia v Dro sú verejné parkoviská. Pohodlne sa sem dostaneš aj na bicykli po cyklotrase údolím Sarca.",
      },
    ],
  },
  contact: {
    eyebrow: "So sebou",
    title: "Objednať je *jednoduché*",
    intro: "Stačí jeden telefonát: hneď ti povieme, kedy bude objednávka hotová, a vyzdvihneš si ju horúcu.",
    callUs: "Zavolaj nám",
    steps: [
      { title: "Zavolaj", text: "Telefonicky alebo cez WhatsApp, počas otváracích hodín." },
      { title: "Objednaj", text: "Povedz nám, na čo máš chuť a kedy prídeš." },
      { title: "Vyzdvihni", text: "Príď na námestie: všetko bude horúce a pripravené." },
    ],
    whereTitle: "Kde vyzdvihnúť",
    directions: "Navigovať",
    follow: "Sleduj nás",
    whatsapp: "Zavolaj nám cez WhatsApp",
    whatsappHint:
      "Otvorí sa WhatsApp: ťukni na ikonu telefónu a zavolaj nám. Cez WhatsApp prijímame len hovory, nie správy.",
  },
  cta: {
    title: "Večer pizza? *Zavolaj nám.*",
    text: "Upečieme ju, kým prídeš: zastav sa a vyzdvihni si ju horúcu a chrumkavú.",
    menu: "Prezrieť menu",
  },
  footer: {
    rights: "Všetky práva vyhradené.",
    vat: "IČ DPH (P.IVA)",
    contacts: "Kontakt",
    hours: "Otváracie hodiny",
    explore: "Objavuj",
    reviews: "Recenzie na Google",
    madeWith: "Vyrobené s láskou (a trochou múky) v údolí Sarca.",
  },
  menuPage: {
    priceOnRequest: "Cena na požiadanie",
    eyebrow: "Naše menu",
    title: "Celá chuť *Lo Sfizio*",
    intro:
      "Pizza, kebab, piadina a nápoje. Vyhľadaj svoje obľúbené jedlo alebo filtruj vegetariánske a pikantné jedlá.",
    notesLabel: "Poznámky k menu",
    notes: [
      "Niektoré produkty môžu byť mrazené.",
      "Obsluha pri stole: 1,50 €.",
      "K dispozícii je bezlepková pizza: stačí o ňu požiadať pri objednávke.",
      "Alergény: opýtaj sa obsluhy, povieme ti, čo obsahuje každé jedlo.",
    ],
    searchLabel: "Hľadať v menu",
    searchPlaceholder: "Hľadaj pizzu alebo surovinu…",
    clearSearch: "Vymazať hľadanie",
    filtersLabel: "Filtre",
    vegetarian: "Vegetariánske",
    spicy: "Pikantné",
    categoriesLabel: "Kategórie",
    countOne: "1 položka",
    countFew: "{n} položky",
    countOther: "{n} položiek",
    empty: "Nič sme nenašli. Skús inú surovinu!",
    reset: "Zrušiť filtre",
  },
  partnersPage: {
    eyebrow: "Priatelia a partneri",
    title: "*Priatelia* Lo Sfizio v Dro",
    intro:
      "Firmy, s ktorými spolupracujeme, a priatelia, ktorých radi odporúčame návštevníkom Dro: požičovňa elektrobicyklov, lanový park a ďalšie, v údolí Sarca neďaleko Arco a Lago di Garda.",
    afterTitle: "Po výlete *ťa čakáme* na námestí",
    afterText:
      "Či sa vraciaš z vyjažďky na bicykli alebo z dňa plného dobrodružstva, Lo Sfizio je pizzeria na námestí v Dro: pizza pečená na objednávku, kebab, piadina a dobrá káva.",
    listLabel: "Spriatelené firmy",
    logoAlt: "Logo {name}",
    hours: "Otváracie hodiny",
    website: "Webová stránka",
    directions: "Navigovať",
  },
  privacy: {
    eyebrow: "Informácie",
    title: "Zásady ochrany súkromia",
    lastUpdated: "Posledná aktualizácia: november 2026",
    intro:
      "Táto stránka vysvetľuje, aké údaje spracúva webová stránka {name}, prečo a ako dlho, podľa nariadenia EÚ 2016/679 (GDPR).",
    sections: [
      { title: "Prevádzkovateľ", text: "{holder}\n{address}\nTelefón: {phone}" },
      {
        title: "Zbierané údaje",
        text: "Stránka je jednoduchá vizitka: nemá účty, formuláre, online objednávky ani platby a nepoužívame profilovacie cookies ani reklamu.\n\nKeď navštíviš stránku, server, na ktorom beží, dostane tvoju IP adresu a technické údaje požiadavky (prehliadač, požadovaná stránka, dátum a čas), ktoré sú potrebné na zobrazenie stránok a ochranu pred zneužitím.\n\nAby sme vedeli, koľko ľudí stránku navštevuje, a udržali ju rýchlu, používame Vercel Web Analytics a Vercel Speed Insights. Anonymne a súhrnne zbierajú navštívené stránky, stránku, z ktorej si prišiel, krajinu, typ zariadenia a čas načítania: nepoužívajú cookies, neidentifikujú návštevníkov a neslúžia na reklamné účely.\n\nAk si vyberieš jazyk alebo vzhľad (svetlý či tmavý), uložíme túto voľbu do tvojho zariadenia, ako je opísané v časti „Cookies“.",
      },
      {
        title: "Právny základ",
        text: "Spracúvanie technických údajov o návšteve a ukladanie tvojich nastavení je založené na našom oprávnenom záujme poskytovať bezpečnú a funkčnú stránku (čl. 6 ods. 1 písm. f GDPR). Nespracúvame žiadne údaje, na ktoré by bol potrebný tvoj súhlas.",
      },
      {
        title: "Cookies",
        text: "Používame jediný technický súbor cookie: NEXT_LOCALE, ktorý si pamätá zvolený jazyk (jeden rok). Svetlý/tmavý vzhľad sa ukladá do pamäte prehliadača (localStorage) a nikomu sa neposiela. Nepoužívame profilovacie ani analytické cookies, preto stránka nezobrazuje cookie lištu.\n\nMapa Google Maps sa načíta, až keď klikneš na „Zobraziť mapu“: odvtedy môže Google ukladať vlastné súbory cookie.",
      },
      {
        title: "Doba uchovávania",
        text: "Technické údaje o návšteve zostávajú v záznamoch poskytovateľa hostingu len tak dlho, ako je to potrebné na prevádzku a bezpečnosť stránky. Nastavenia jazyka a vzhľadu zostávajú v tvojom zariadení, kým ich v prehliadači nevymažeš.",
      },
      {
        title: "Príjemcovia údajov",
        text: "Stránku hosťuje Vercel Inc. (USA), ktorý spracúva technické údaje o návšteve v našom mene ako sprostredkovateľ. Prenos do USA prebieha so zárukami podľa GDPR (EU-U.S. Data Privacy Framework a štandardné zmluvné doložky). Doménu spravuje Cloudflare Inc., ktorý len oznámi tvojmu prehliadaču, kde sa stránka nachádza. Tvoje údaje nikomu nepredávame ani neposkytujeme.",
      },
      {
        title: "Služby, ktoré kontaktuje tvoj prehliadač",
        text: "Niektoré tlačidlá otvárajú externé služby, len ak na ne klikneš: Google Maps (mapa a navigácia), WhatsApp, Instagram a Facebook (Meta). Tieto služby dostanú tvoju IP adresu, môžu ukladať vlastné cookies a spracúvajú údaje podľa vlastných zásad.",
      },
      {
        title: "Tvoje práva",
        text: "Podľa čl. 15–22 GDPR máš právo na prístup k svojim údajom, ich opravu alebo vymazanie, obmedzenie spracúvania, namietanie proti spracúvaniu a prenosnosť údajov. Máš tiež právo podať sťažnosť talianskemu úradu na ochranu osobných údajov (Garante per la protezione dei dati personali, www.garanteprivacy.it).",
      },
      {
        title: "Kontakt",
        text: "V súvislosti so spracúvaním údajov nám môžeš zavolať na {phone}, napísať nám alebo prísť do pizzerie: {address}.",
      },
    ],
  },
  notFound: {
    title: "Niekto zjedol túto stránku.",
    text: "Stránka, ktorú hľadáš, neexistuje (alebo skončila v peci). Vráť sa na úvod a vyber si pizzu.",
    back: "Späť na úvod",
  },
};
