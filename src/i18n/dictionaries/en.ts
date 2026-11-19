import type { Dictionary } from "./it";

/** English texts. Parts between *asterisks* are highlighted; {braces} are placeholders. */
export const en: Dictionary = {
  meta: {
    title: "Lo Sfizio · Pizzeria on the square in Dro",
    titleTemplate: "%s · Lo Sfizio Dro",
    description:
      "Lo Sfizio is the pizzeria on the main square of Dro (Trentino, near Lake Garda): freshly baked pizza, kebab, piadina, bar and coffee. Eat with us on the square or order takeaway.",
    keywords: [
      "pizzeria Dro",
      "pizza Dro",
      "kebab Dro",
      "takeaway pizza Dro",
      "Lo Sfizio Dro",
      "pizza near Arco",
      "pizza Lake Garda",
    ],
    fullName: "Lo Sfizio · Pizzeria, Kebab, Bar & Café",
    tagline: "Pizza on the square in Dro",
    menuTitle: "Menu",
    menuDescription:
      "The menu of Lo Sfizio in Dro: classic and signature pizzas, kebab, piadina, bar and drinks. Prices and ingredients.",
    partnersTitle: "What to do in Dro: e-bikes & adventure park",
    partnersDescription:
      "Things to do in Dro and the Sarca Valley: e-bike rental, an adventure park and the local friends of Lo Sfizio. Addresses, opening hours and contacts.",
    partnersKeywords: [
      "things to do in Dro",
      "e-bike rental Dro",
      "adventure park Dro",
      "Elias Adventure Park",
      "Lelettrica Dro",
      "Sarca Valley",
    ],
    privacyTitle: "Privacy & cookies",
    privacyDescription: "Privacy and cookie policy of the Lo Sfizio website.",
    ogBadge: "Takeaway · {phone}",
    ogKicker: "Pizzeria · Kebab · Bar · Café",
  },
  common: {
    skipToContent: "Skip to content",
    call: "Call",
    callNumber: "Call {phone}",
    order: "Order: {phone}",
  },
  nav: {
    home: "Home",
    about: "About us",
    menu: "Menu",
    hours: "Opening hours",
    location: "Find us",
    partners: "Friends",
    contact: "Contact",
    privacy: "Privacy & cookies",
    mainLabel: "Main navigation",
    mobileLabel: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuTitle: "Navigation menu",
    homeAria: "{name}, back to home",
  },
  settings: {
    language: "Language",
    theme: "Theme",
    themeSystem: "Automatic",
    themeLight: "Light",
    themeDark: "Dark",
  },
  status: {
    openNow: "Open now · closes at {time}",
    closedOpens: "Closed · opens {when} at {time}",
    today: "today",
    closed: "Closed",
    fallback: "Opening hours",
  },
  closure: {
    title: "Temporarily closed",
    banner: "We are closed until {until} (inclusive). We reopen on {reopen} at {time}!",
    badge: "Closed · reopens {reopen} at {time}",
    close: "Close notice",
  },
  days: {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
  },
  services: ["On the square", "Takeaway", "Gluten-free", "Kebab", "Bar & Café"],
  hero: {
    title: "Pizza *on the square* in Dro.",
    lead: "Freshly baked pizza, kebab, piadina and great coffee in the heart of Dro. Grab a table on the square or pick it up to take away.",
    ctaMenu: "See the menu",
    ctaPhone: "Order by phone",
    ring: "Pizzeria · Kebab · Bar · Café · On the square in Dro · ",
    illustration: "Illustration of a pizza",
  },
  marquee: [
    "Baked to order",
    "Kebab",
    "Takeaway",
    "Piadina",
    "Bar & coffee",
    "Spritz on the square",
    "Slow-rising dough",
  ],
  about: {
    eyebrow: "About us",
    title: "A little *treat*, every day.",
    intro:
      "Lo Sfizio is the pizzeria on Dro's main square: a simple, friendly place to stop for a pizza, a kebab or a coffee. Good ingredients, the oven always on and a smile at the counter.",
    features: [
      {
        title: "Dough that takes its time",
        text: "We let our dough rise slowly: a light, easy-to-digest pizza with a crust that crunches.",
      },
      {
        title: "Baked to order",
        text: "Every pizza is stretched by hand and goes in the oven when you order it. No shortcuts, just the right timing.",
      },
      {
        title: "On the square in Dro",
        text: "Outdoor tables in the village centre: the perfect stop after a bike ride or a day of climbing.",
      },
      {
        title: "Ready for takeaway",
        text: "Call us, tell us when you'll come by and it'll be hot and ready. Perfect for dinner at home with friends.",
      },
    ],
  },
  featured: {
    eyebrow: "Crowd favourites",
    title: "Pizzas *not to miss*",
    prev: "Previous pizza",
    next: "Next pizza",
    carousel: "carousel",
    slide: "slide",
    slideOf: "{n} of {total}",
    dots: "Choose a pizza",
    goTo: "Go to pizza {n}",
  },
  menuPreview: {
    eyebrow: "The menu",
    title: "Pick your *treat*",
    intro:
      "From timeless classics to our signature pizzas, plus kebab and piadina. And to finish, an espresso at the bar.",
    tabsLabel: "Menu categories",
    fullMenu: "See the full menu",
  },
  tags: {
    vegetariana: "Vegetarian",
    piccante: "Spicy",
    novita: "New",
    consigliata: "Our pick",
  },
  visit: {
    season: { winter: "Winter hours", summer: "Summer hours" },
    eyebrow: "Come and see us",
    title: "See you *on the square*",
    intro:
      "In the centre of Dro, a few steps from the Sarca Valley cycle path and minutes from Arco and Riva del Garda.",
    hoursTitle: "Opening hours",
    today: "today",
    note: "Hours may change on public holidays: if in doubt, give us a call.",
    tooltip: "Hours may vary on public holidays and in high season.",
    infoLabel: "About our opening hours",
    showMap: "Show the map",
    mapHint: "Loading the map means accepting Google Maps cookies.",
    mapTitle: "Map: {name}, {address}",
    whereTitle: "Find us",
    directions: "Directions",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Everything you *want to know*",
    intro: "Can't find the answer? Call us: we answer faster than we bake a margherita.",
    items: [
      {
        q: "Can I order takeaway?",
        a: "Yes: call us (on WhatsApp too) or just walk in. We'll tell you right away when your pizza will be ready, so you don't have to wait.",
      },
      {
        q: "Do you deliver?",
        a: "No, we don't deliver. You can eat with us on the square or order takeaway: call us and pick it up whenever suits you.",
      },
      {
        q: "Do I need to book a table?",
        a: "No, booking isn't required: come by whenever you like and we'll find you a seat on the square.",
      },
      {
        q: "Do you have gluten-free pizza?",
        a: "Yes, we also make gluten-free pizza: just ask when you order. Please always tell us about any allergies or intolerances.",
      },
      {
        q: "Can I pay by card?",
        a: "Yes, you can pay by card or in cash.",
      },
      {
        q: "Do you make pizzas for parties and groups?",
        a: "Of course: for birthdays, teams and large groups, get in touch a few days ahead and we'll plan quantities and times together.",
      },
      {
        q: "Where can I park?",
        a: "There are public car parks a short walk from the square in Dro. It's also easy to reach by bike along the Sarca Valley cycle path.",
      },
    ],
  },
  contact: {
    eyebrow: "Takeaway",
    title: "Ordering is *easy*",
    intro:
      "Ordering is just a phone call away: we'll tell you right away when it'll be ready, and it'll be hot when you pick it up.",
    callUs: "Call us",
    steps: [
      { title: "Call", text: "By phone or on WhatsApp, during opening hours." },
      { title: "Order", text: "Tell us what you'd like and when you'll come by." },
      { title: "Pick up", text: "Stop by the square: it'll be hot and ready." },
    ],
    whereTitle: "Where to pick up",
    directions: "Directions",
    follow: "Follow us",
    whatsapp: "Call us on WhatsApp",
    whatsappHint:
      "WhatsApp will open: tap the phone icon to call us. On WhatsApp we only answer calls, not messages.",
  },
  cta: {
    title: "Pizza tonight? *Call us.*",
    text: "We'll bake it while you're on your way: stop by and pick it up hot and fresh.",
    menu: "Browse the menu",
  },
  footer: {
    rights: "All rights reserved.",
    vat: "VAT",
    contacts: "Contact",
    hours: "Hours",
    explore: "Explore",
    reviews: "Reviews on Google",
    madeWith: "Made with love (and a little flour) in the Sarca Valley.",
  },
  menuPage: {
    priceOnRequest: "Price on request",
    eyebrow: "Our menu",
    title: "All the flavour of *Lo Sfizio*",
    intro:
      "Pizza, kebab, piadina and drinks. Search for your favourite dish or filter by vegetarian and spicy options.",
    notesLabel: "Menu notes",
    notes: [
      "Some products may be frozen.",
      "Table service: €1.50.",
      "Gluten-free pizza available: just ask when you order.",
      "Allergens: please ask our staff, we'll tell you what each dish contains.",
    ],
    searchLabel: "Search the menu",
    searchPlaceholder: "Search for a pizza or an ingredient…",
    clearSearch: "Clear search",
    filtersLabel: "Filters",
    vegetarian: "Vegetarian",
    spicy: "Spicy",
    categoriesLabel: "Categories",
    countOne: "1 item",
    countFew: "{n} items",
    countOther: "{n} items",
    empty: "Nothing found. Try another ingredient!",
    reset: "Reset filters",
  },
  partnersPage: {
    eyebrow: "Friends & partners",
    title: "The *friends* of Lo Sfizio in Dro",
    intro:
      "The businesses we work with and the friends we love to recommend to anyone visiting Dro: e-bike rental, an adventure park and more, in the Sarca Valley close to Arco and Lake Garda.",
    afterTitle: "After the trip, *we'll be waiting* on the square",
    afterText:
      "Whether you're back from a bike ride or a day of adventure, Lo Sfizio is the pizzeria on the square in Dro: pizzas baked to order, kebab, piadina and a good coffee.",
    listLabel: "Friendly businesses",
    logoAlt: "{name} logo",
    hours: "Opening hours",
    website: "Website",
    directions: "Directions",
  },
  privacy: {
    eyebrow: "Policy",
    title: "Privacy Policy",
    lastUpdated: "Last updated: November 2026",
    intro:
      "This page explains which data the {name} website processes, why and for how long, under the EU General Data Protection Regulation 2016/679 (GDPR).",
    sections: [
      { title: "Data Controller", text: "{holder}\n{address}\nPhone: {phone}" },
      {
        title: "Data Collected",
        text: 'The website is a simple showcase: there are no accounts, forms, online orders or payments, and we use no analytics or profiling tools.\n\nWhen you visit the site, the server hosting it receives your IP address and the technical details of the request (browser, page requested, date and time), which are needed to show you the pages and protect the site from abuse.\n\nTo keep the site fast we use Vercel Speed Insights, which measures page loading times anonymously and in aggregate: it uses no cookies, does not identify visitors and is not used for advertising.\n\nIf you choose a language or a theme (light or dark), we save that preference on your device, as explained in the "Cookies" section.',
      },
      {
        title: "Legal Basis",
        text: "Processing technical browsing data and storing your preferences is based on our legitimate interest in giving you a safe and working website (Art. 6(1)(f) GDPR). We do not process any data that requires your consent.",
      },
      {
        title: "Cookies",
        text: 'We use a single technical cookie: NEXT_LOCALE, which remembers the language you chose (one year). The light/dark theme is saved in your browser\'s storage (localStorage) and is not sent to anyone. We use no profiling or analytics cookies, which is why the site shows no cookie banner.\n\nGoogle Maps is loaded only if you click "Show the map": from then on Google may set its own cookies.',
      },
      {
        title: "Data Retention",
        text: "Technical browsing data stays in the hosting provider's logs only for as long as needed to run and secure the site. Your language and theme preferences stay on your device until you clear them from your browser.",
      },
      {
        title: "Data Recipients",
        text: "The website is hosted by Vercel Inc. (United States), which processes technical browsing data on our behalf as a data processor. Transfers to the United States rely on the safeguards provided by the GDPR (EU-U.S. Data Privacy Framework and standard contractual clauses). The domain is managed through Cloudflare Inc., which only tells your browser where the site is located. We never sell or share your data.",
      },
      {
        title: "Services contacted by your browser",
        text: "Some buttons open external services, only if you click them: Google Maps (map and directions), WhatsApp, Instagram and Facebook (Meta). These services receive your IP address, may set their own cookies and process data under their own policies.",
      },
      {
        title: "Your Rights",
        text: "Under Arts. 15–22 GDPR you have the right to access your data, request its rectification or erasure, restrict its processing, object to processing and request data portability. You also have the right to lodge a complaint with the Italian data protection authority (Garante per la protezione dei dati personali, www.garanteprivacy.it).",
      },
      {
        title: "Contact",
        text: "For any request about data processing you can call us on {phone}, or write to us or drop by the pizzeria: {address}.",
      },
    ],
  },
  notFound: {
    title: "Someone ate this page.",
    text: "The page you're looking for doesn't exist (or ended up in the oven). Head back home and pick your pizza.",
    back: "Back to home",
  },
};
