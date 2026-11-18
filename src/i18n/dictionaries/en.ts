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
  days: {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
  },
  services: ["On the square", "Takeaway", "Kebab", "Bar & Café"],
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
        a: "Yes: call us or just walk in. We'll tell you right away when your pizza will be ready, so you don't have to wait.",
      },
      {
        q: "Do you deliver?",
        a: "No, we don't deliver. You can eat with us on the square or order takeaway: call us and pick it up whenever suits you.",
      },
      {
        q: "Do I need to book a table?",
        a: "On weekdays usually not. On Fridays, Saturdays and in summer the square fills up quickly, so it's best to call ahead.",
      },
      {
        q: "Do you have gluten-free or lactose-free options?",
        a: "Ask our staff about gluten-free dough and lactose-free mozzarella. Please always tell us about any allergies or intolerances.",
      },
      {
        q: "Can I pay by card?",
        a: "Yes, we accept cash, debit cards and the main credit cards.",
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
      { title: "Call", text: "Phone us during opening hours." },
      { title: "Order", text: "Tell us what you'd like and when you'll come by." },
      { title: "Pick up", text: "Stop by the square: it'll be hot and ready." },
    ],
    whereTitle: "Where to pick up",
    directions: "Directions",
    whatsapp: "Message us on WhatsApp",
  },
  cta: {
    title: "Pizza tonight? *Call us.*",
    text: "We'll bake it while you're on your way: stop by and pick it up hot and fresh.",
    menu: "Browse the menu",
  },
  footer: {
    contacts: "Contact",
    hours: "Hours",
    explore: "Explore",
    reviews: "Reviews on Google",
    madeWith: "Made with love (and a little flour) in the Sarca Valley.",
  },
  menuPage: {
    eyebrow: "Our menu",
    title: "All the flavour of *Lo Sfizio*",
    intro:
      "Pizza, kebab, piadina and drinks. Search for your favourite dish or filter by vegetarian and spicy options.",
    notesLabel: "Menu notes",
    notes: [
      "Gluten-free dough and lactose-free mozzarella: please ask our staff about availability.",
      "Extra toppings: from €1 to €2.50 depending on the ingredient.",
      "Allergen information is available on request: please ask our staff.",
    ],
    searchLabel: "Search the menu",
    searchPlaceholder: "Search for a pizza or an ingredient…",
    clearSearch: "Clear search",
    filtersLabel: "Filters",
    vegetarian: "Vegetarian",
    spicy: "Spicy",
    categoriesLabel: "Categories",
    countOne: "1 item",
    countOther: "{n} items",
    empty: "Nothing found. Try another ingredient!",
    reset: "Reset filters",
  },
  privacy: {
    eyebrow: "Policy",
    title: "Privacy & cookies",
    draftNote: "Draft text: to be reviewed by a consultant before final publication.",
    sections: [
      {
        title: "Data controller",
        text: "{holder}, {address}. Phone: {phone}.",
      },
      {
        title: "Data collected by this website",
        text: "This is a static website: it contains no forms, collects no personal data and stores nothing on its servers. Orders are taken by phone.",
      },
      {
        title: "Cookies and local storage",
        text: 'The website uses no profiling cookies and no analytics. We only store your chosen language (in a technical cookie) and the light/dark theme (in your browser\'s storage). Google Maps is loaded only if you click "Show the map": in that case Google may set its own cookies, according to its policy (policies.google.com/privacy).',
      },
      {
        title: "Hosting",
        text: "The website is hosted by Vercel Inc., which may record technical data (such as IP addresses) in server logs for security and operational purposes.",
      },
      {
        title: "Your rights",
        text: "You can request access to, correction or deletion of your data at any time by contacting the data controller using the details above, and you can lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali).",
      },
    ],
  },
  notFound: {
    title: "Someone ate this page.",
    text: "The page you're looking for doesn't exist (or ended up in the oven). Head back home and pick your pizza.",
    back: "Back to home",
  },
};
