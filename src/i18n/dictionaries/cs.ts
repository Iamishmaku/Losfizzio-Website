import type { Dictionary } from "./it";

/**
 * Texty v češtině. Části mezi *hvězdičkami* jsou zvýrazněné; {závorky} jsou zástupné symboly.
 * ⚠️ Překlad nedělal rodilý mluvčí: vyplatí se ho zkontrolovat.
 */
export const cs: Dictionary = {
  meta: {
    title: "Lo Sfizio · Pizzerie na náměstí v Dro",
    titleTemplate: "%s · Lo Sfizio Dro",
    description:
      "Lo Sfizio je pizzerie na hlavním náměstí v Dro (Trentino, nedaleko Lago di Garda): pizza pečená na objednávku, kebab, piadina, bar a káva. Najez se u nás na náměstí nebo si objednej s sebou.",
    keywords: [
      "pizzerie Dro",
      "pizza Dro",
      "kebab Dro",
      "pizza s sebou Dro",
      "Lo Sfizio Dro",
      "pizza Arco",
      "pizza Lago di Garda",
    ],
    fullName: "Lo Sfizio · Pizzerie, Kebab, Bar a Kavárna",
    tagline: "Pizza na náměstí v Dro",
    menuTitle: "Menu",
    menuDescription:
      "Menu Lo Sfizio v Dro: klasické i speciální pizzy, kebab, piadina, bar a nápoje. Ceny a suroviny.",
    partnersTitle: "Co dělat v Dro: elektrokola a lanový park",
    partnersDescription:
      "Co dělat v Dro a v údolí Sarca: půjčovna elektrokol, lanový park a přátelé Lo Sfizio. Adresy, otevírací doba a kontakty.",
    partnersKeywords: [
      "co dělat v Dro",
      "půjčovna elektrokol Dro",
      "lanový park Dro",
      "Elias Adventure Park",
      "Lelettrica Dro",
      "údolí Sarca",
    ],
    privacyTitle: "Ochrana soukromí a cookies",
    privacyDescription: "Zásady ochrany soukromí a souborů cookie na webu Lo Sfizio.",
    ogBadge: "S sebou · {phone}",
    ogKicker: "Pizzerie · Kebab · Bar · Kavárna",
  },
  common: {
    skipToContent: "Přejít na obsah",
    call: "Zavolat",
    callNumber: "Zavolat {phone}",
    order: "Objednat: {phone}",
  },
  nav: {
    home: "Úvod",
    about: "O nás",
    menu: "Menu",
    hours: "Otevírací doba",
    location: "Kde jsme",
    partners: "Přátelé",
    contact: "Kontakt",
    privacy: "Soukromí a cookies",
    mainLabel: "Hlavní navigace",
    mobileLabel: "Mobilní navigace",
    openMenu: "Otevřít menu",
    closeMenu: "Zavřít menu",
    menuTitle: "Navigační menu",
    homeAria: "{name}, zpět na úvod",
  },
  settings: {
    language: "Jazyk",
    theme: "Vzhled",
    themeSystem: "Automaticky",
    themeLight: "Světlý",
    themeDark: "Tmavý",
  },
  status: {
    openNow: "Otevřeno · do {time}",
    closedOpens: "Zavřeno · otevíráme: {when} v {time}",
    today: "dnes",
    closed: "Zavřeno",
    fallback: "Otevírací doba",
  },
  closure: {
    title: "Dočasně zavřeno",
    banner: "Poslední den zavření: {until}. Znovu otevíráme: {reopen} v {time}!",
    badge: "Zavřeno · otevíráme: {reopen} v {time}",
    close: "Zavřít oznámení",
  },
  days: {
    mon: "Pondělí",
    tue: "Úterý",
    wed: "Středa",
    thu: "Čtvrtek",
    fri: "Pátek",
    sat: "Sobota",
    sun: "Neděle",
  },
  services: ["Na náměstí", "S sebou", "Bez lepku", "Kebab", "Bar a kavárna"],
  hero: {
    title: "Pizza *na náměstí* v Dro.",
    lead: "Pizza pečená na objednávku, kebab, piadina a dobrá káva v srdci Dro. Posaď se na náměstí, nebo si ji vyzvedni s sebou.",
    ctaMenu: "Zobrazit menu",
    ctaPhone: "Objednat telefonicky",
    ring: "Pizzerie · Kebab · Bar · Kavárna · Na náměstí v Dro · ",
    illustration: "Ilustrace pizzy",
  },
  marquee: [
    "Pečená na objednávku",
    "Kebab",
    "S sebou",
    "Piadina",
    "Bar a káva",
    "Spritz na náměstí",
    "Pomalu kynuté těsto",
  ],
  about: {
    eyebrow: "O nás",
    title: "Malá *radost* každý den.",
    intro:
      "Lo Sfizio je pizzerie na hlavním náměstí v Dro: jednoduché a přátelské místo na pizzu, kebab nebo kávu. Kvalitní suroviny, vždy rozpálená pec a úsměv u pultu.",
    features: [
      {
        title: "Těsto, které má čas",
        text: "Naše těsto necháváme pomalu kynout: lehká, stravitelná pizza s křupavým okrajem.",
      },
      {
        title: "Pečená na objednávku",
        text: "Každou pizzu ručně vytahujeme a do pece jde, až když si ji objednáš. Žádné zkratky, jen správný čas.",
      },
      {
        title: "Na náměstí v Dro",
        text: "Stoly venku v centru obce: ideální zastávka po výletě na kole nebo po dni lezení.",
      },
      {
        title: "Připravená s sebou",
        text: "Zavolej, řekni, kdy přijdeš, a pizza bude horká a připravená. Ideální na večeři doma s přáteli.",
      },
    ],
  },
  featured: {
    eyebrow: "Nejoblíbenější",
    title: "Pizzy, které *musíš ochutnat*",
    prev: "Předchozí pizza",
    next: "Další pizza",
    carousel: "karusel",
    slide: "snímek",
    slideOf: "{n} z {total}",
    dots: "Vyber pizzu",
    goTo: "Přejít na pizzu {n}",
  },
  menuPreview: {
    eyebrow: "Menu",
    title: "Vyber si svou *radost*",
    intro: "Od nadčasové klasiky po naše speciality, k tomu kebab a piadina. A na závěr espresso u baru.",
    tabsLabel: "Kategorie menu",
    fullMenu: "Zobrazit celé menu",
  },
  tags: {
    vegetariana: "Vegetariánská",
    piccante: "Pikantní",
    novita: "Novinka",
    consigliata: "Doporučujeme",
  },
  visit: {
    season: { winter: "Zimní otevírací doba", summer: "Letní otevírací doba" },
    eyebrow: "Přijď k nám",
    title: "Čekáme na tebe *na náměstí*",
    intro: "V centru Dro, pár kroků od cyklostezky údolím Sarca a pár minut od Arco a Riva del Garda.",
    hoursTitle: "Otevírací doba",
    today: "dnes",
    note: "O svátcích se otevírací doba může změnit: pokud si nejsi jistý, zavolej nám.",
    tooltip: "O svátcích a v hlavní sezóně se otevírací doba může lišit.",
    infoLabel: "Informace o otevírací době",
    showMap: "Zobrazit mapu",
    mapHint: "Načtením mapy souhlasíš se soubory cookie Google Maps.",
    mapTitle: "Mapa: {name}, {address}",
    whereTitle: "Kde jsme",
    directions: "Navigovat",
  },
  faq: {
    eyebrow: "Časté otázky",
    title: "Všechno, co *chceš vědět*",
    intro: "Nenašel jsi odpověď? Zavolej nám: odpovíme rychleji, než upečeme margheritu.",
    items: [
      {
        q: "Dá se objednat s sebou?",
        a: "Ano: zavolej nám (i přes WhatsApp), nebo prostě přijď. Hned ti řekneme, kdy bude pizza hotová, abys nemusel čekat.",
      },
      {
        q: "Rozvážíte domů?",
        a: "Ne, nerozvážíme. Můžeš se najíst u nás na náměstí, nebo si objednat s sebou: zavolej a vyzvedni si objednávku, kdy ti to vyhovuje.",
      },
      {
        q: "Je potřeba rezervovat stůl?",
        a: "Ne, rezervace není nutná: přijď, kdy chceš, a najdeme ti místo na náměstí.",
      },
      {
        q: "Máte bezlepkovou pizzu?",
        a: "Ano, děláme i bezlepkovou pizzu: stačí o ni požádat při objednávce. Vždy nám řekni o alergiích a intolerancích.",
      },
      {
        q: "Dá se platit kartou?",
        a: "Ano, můžeš platit kartou nebo v hotovosti.",
      },
      {
        q: "Děláte pizzu na oslavy a pro skupiny?",
        a: "Samozřejmě: na narozeniny, pro týmy a velké skupiny se nám ozvi pár dní předem a společně domluvíme množství a čas.",
      },
      {
        q: "Kde se dá parkovat?",
        a: "Pár kroků od náměstí v Dro jsou veřejná parkoviště. Pohodlně se sem dostaneš i na kole po cyklostezce údolím Sarca.",
      },
    ],
  },
  contact: {
    eyebrow: "S sebou",
    title: "Objednat je *jednoduché*",
    intro: "Stačí jeden telefonát: hned ti řekneme, kdy bude objednávka hotová, a vyzvedneš si ji horkou.",
    callUs: "Zavolej nám",
    steps: [
      { title: "Zavolej", text: "Telefonicky nebo přes WhatsApp, během otevírací doby." },
      { title: "Objednej", text: "Řekni nám, na co máš chuť a kdy přijdeš." },
      { title: "Vyzvedni", text: "Přijď na náměstí: všechno bude horké a připravené." },
    ],
    whereTitle: "Kde vyzvednout",
    directions: "Navigovat",
    follow: "Sleduj nás",
    whatsapp: "Zavolej nám přes WhatsApp",
    whatsappHint:
      "Otevře se WhatsApp: klepni na ikonu telefonu a zavolej nám. Přes WhatsApp přijímáme jen hovory, ne zprávy.",
  },
  cta: {
    title: "Večer pizza? *Zavolej nám.*",
    text: "Upečeme ji, než dorazíš: zastav se a vyzvedni si ji horkou a křupavou.",
    menu: "Prohlédnout menu",
  },
  footer: {
    rights: "Všechna práva vyhrazena.",
    vat: "DIČ (P.IVA)",
    contacts: "Kontakt",
    hours: "Otevírací doba",
    explore: "Objevuj",
    reviews: "Recenze na Google",
    madeWith: "Vyrobeno s láskou (a trochou mouky) v údolí Sarca.",
  },
  menuPage: {
    priceOnRequest: "Cena na vyžádání",
    eyebrow: "Naše menu",
    title: "Celá chuť *Lo Sfizio*",
    intro:
      "Pizza, kebab, piadina a nápoje. Vyhledej své oblíbené jídlo nebo filtruj vegetariánská a pikantní jídla.",
    notesLabel: "Poznámky k menu",
    notes: [
      "Některé produkty mohou být mražené.",
      "Obsluha u stolu: 1,50 €.",
      "K dispozici je bezlepková pizza: stačí o ni požádat při objednávce.",
      "Alergeny: zeptej se obsluhy, řekneme ti, co obsahuje každé jídlo.",
    ],
    searchLabel: "Hledat v menu",
    searchPlaceholder: "Hledej pizzu nebo surovinu…",
    clearSearch: "Vymazat hledání",
    filtersLabel: "Filtry",
    vegetarian: "Vegetariánská",
    spicy: "Pikantní",
    categoriesLabel: "Kategorie",
    countOne: "1 položka",
    countFew: "{n} položky",
    countOther: "{n} položek",
    empty: "Nic jsme nenašli. Zkus jinou surovinu!",
    reset: "Zrušit filtry",
  },
  partnersPage: {
    eyebrow: "Přátelé a partneři",
    title: "*Přátelé* Lo Sfizio v Dro",
    intro:
      "Firmy, se kterými spolupracujeme, a přátelé, které rádi doporučujeme návštěvníkům Dro: půjčovna elektrokol, lanový park a další, v údolí Sarca nedaleko Arco a Lago di Garda.",
    afterTitle: "Po výletě *na tebe čekáme* na náměstí",
    afterText:
      "Ať se vracíš z vyjížďky na kole, nebo ze dne plného dobrodružství, Lo Sfizio je pizzerie na náměstí v Dro: pizza pečená na objednávku, kebab, piadina a dobrá káva.",
    listLabel: "Spřátelené firmy",
    logoAlt: "Logo {name}",
    hours: "Otevírací doba",
    website: "Webové stránky",
    directions: "Navigovat",
  },
  privacy: {
    eyebrow: "Informace",
    title: "Zásady ochrany soukromí",
    lastUpdated: "Poslední aktualizace: listopad 2026",
    intro:
      "Tato stránka vysvětluje, jaké údaje zpracovává web {name}, proč a jak dlouho, podle nařízení EU 2016/679 (GDPR).",
    sections: [
      { title: "Správce údajů", text: "{holder}\n{address}\nTelefon: {phone}" },
      {
        title: "Shromažďované údaje",
        text: "Web je jednoduchá vizitka: nemá účty, formuláře, online objednávky ani platby a nepoužíváme analytické ani profilovací nástroje.\n\nKdyž web navštívíš, server, na kterém běží, obdrží tvou IP adresu a technické údaje požadavku (prohlížeč, požadovaná stránka, datum a čas), které jsou potřeba k zobrazení stránek a k ochraně před zneužitím.\n\nPokud si vybereš jazyk nebo vzhled (světlý či tmavý), uložíme tuto volbu do tvého zařízení, jak je popsáno v části „Cookies“.",
      },
      {
        title: "Právní základ",
        text: "Zpracování technických údajů o návštěvě a ukládání tvých nastavení je založeno na našem oprávněném zájmu poskytovat bezpečný a funkční web (čl. 6 odst. 1 písm. f GDPR). Nezpracováváme žádné údaje, ke kterým by byl potřeba tvůj souhlas.",
      },
      {
        title: "Cookies",
        text: "Používáme jediný technický soubor cookie: NEXT_LOCALE, který si pamatuje zvolený jazyk (jeden rok). Světlý/tmavý vzhled se ukládá do paměti prohlížeče (localStorage) a nikomu se neposílá. Nepoužíváme profilovací ani analytické cookies, proto web nezobrazuje cookie lištu.\n\nMapa Google Maps se načte, až když klikneš na „Zobrazit mapu“: od té chvíle může Google ukládat vlastní soubory cookie.",
      },
      {
        title: "Doba uchovávání",
        text: "Technické údaje o návštěvě zůstávají v záznamech poskytovatele hostingu jen tak dlouho, jak je potřeba pro provoz a bezpečnost webu. Nastavení jazyka a vzhledu zůstávají v tvém zařízení, dokud je v prohlížeči nesmažeš.",
      },
      {
        title: "Příjemci údajů",
        text: "Web hostuje Vercel Inc. (USA), který zpracovává technické údaje o návštěvě naším jménem jako zpracovatel. Předávání do USA probíhá se zárukami podle GDPR (EU-U.S. Data Privacy Framework a standardní smluvní doložky). Doménu spravuje Cloudflare Inc., který pouze sdělí tvému prohlížeči, kde se web nachází. Tvé údaje nikomu neprodáváme ani nepředáváme.",
      },
      {
        title: "Služby, které kontaktuje tvůj prohlížeč",
        text: "Některá tlačítka otevírají externí služby, jen pokud na ně klikneš: Google Maps (mapa a navigace), WhatsApp, Instagram a Facebook (Meta). Tyto služby obdrží tvou IP adresu, mohou ukládat vlastní cookies a zpracovávají údaje podle vlastních zásad.",
      },
      {
        title: "Tvá práva",
        text: "Podle čl. 15–22 GDPR máš právo na přístup ke svým údajům, jejich opravu nebo výmaz, omezení zpracování, vznesení námitky proti zpracování a přenositelnost údajů. Máš také právo podat stížnost italskému úřadu pro ochranu osobních údajů (Garante per la protezione dei dati personali, www.garanteprivacy.it).",
      },
      {
        title: "Kontakt",
        text: "S dotazy ke zpracování údajů nám můžeš zavolat na {phone}, napsat nám nebo přijít do pizzerie: {address}.",
      },
    ],
  },
  notFound: {
    title: "Někdo snědl tuhle stránku.",
    text: "Stránka, kterou hledáš, neexistuje (nebo skončila v peci). Vrať se na úvod a vyber si pizzu.",
    back: "Zpět na úvod",
  },
};
