/**
 * Menu della pizzeria, in italiano, inglese e tedesco.
 * l("italiano", "english", "deutsch"): se una traduzione manca viene usato il testo italiano.
 * ⚠️ Piatti e prezzi sono un esempio realistico: vanno sostituiti con il menu reale prima della messa online.
 */
import { intlLocale, l, type Locale, type Localized } from "@/i18n/config";

export type Tag = "vegetariana" | "piccante" | "novita" | "consigliata";

export type Topping =
  | "tomato"
  | "mozzarella"
  | "basil"
  | "salami"
  | "ham"
  | "mushroom"
  | "olive"
  | "pepper"
  | "onion"
  | "rocket"
  | "tuna"
  | "egg"
  | "sausage"
  | "speck"
  | "zucchini";

export interface MenuItem {
  /** Identificativo stabile (usato per le pizze in evidenza e come chiave). */
  id: string;
  name: Localized;
  description: Localized;
  price: number;
  tags?: Tag[];
  /** Usati per disegnare l'illustrazione della pizza (quando manca la foto). */
  toppings?: Topping[];
  /**
   * Foto del piatto, es. "/images/menu/margherita.jpg" (file in public/images/menu).
   * Se presente, sostituisce l'illustrazione disegnata.
   */
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: Localized;
  subtitle?: Localized;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: "classiche",
    title: l("Pizze classiche", "Classic pizzas", "Klassische Pizzen"),
    subtitle: l(
      "Impasto lievitato a lungo, steso a mano e cotto al momento.",
      "Slow-risen dough, stretched by hand and baked to order.",
      "Lang gereifter Teig, von Hand ausgezogen und frisch gebacken.",
    ),
    items: [
      {
        id: "marinara",
        name: l("Marinara"),
        description: l(
          "Pomodoro, aglio, origano, olio extravergine d'oliva",
          "Tomato, garlic, oregano, extra virgin olive oil",
          "Tomate, Knoblauch, Oregano, natives Olivenöl extra",
        ),
        price: 5.5,
        tags: ["vegetariana"],
        toppings: ["tomato"],
      },
      {
        id: "margherita",
        name: l("Margherita"),
        description: l(
          "Pomodoro, fior di latte, basilico fresco",
          "Tomato, fior di latte mozzarella, fresh basil",
          "Tomate, Fior-di-Latte-Mozzarella, frisches Basilikum",
        ),
        price: 6.5,
        tags: ["vegetariana"],
        toppings: ["tomato", "mozzarella", "basil"],
      },
      {
        id: "prosciutto",
        name: l("Prosciutto"),
        description: l(
          "Pomodoro, fior di latte, prosciutto cotto",
          "Tomato, fior di latte mozzarella, cooked ham",
          "Tomate, Fior-di-Latte-Mozzarella, Kochschinken",
        ),
        price: 8,
        toppings: ["tomato", "mozzarella", "ham"],
      },
      {
        id: "funghi",
        name: l("Funghi"),
        description: l(
          "Pomodoro, fior di latte, funghi champignon",
          "Tomato, fior di latte mozzarella, button mushrooms",
          "Tomate, Fior-di-Latte-Mozzarella, Champignons",
        ),
        price: 8,
        tags: ["vegetariana"],
        toppings: ["tomato", "mozzarella", "mushroom"],
      },
      {
        id: "prosciutto-funghi",
        name: l("Prosciutto e funghi"),
        description: l(
          "Pomodoro, fior di latte, prosciutto cotto, funghi",
          "Tomato, fior di latte mozzarella, cooked ham, mushrooms",
          "Tomate, Fior-di-Latte-Mozzarella, Kochschinken, Champignons",
        ),
        price: 8.5,
        toppings: ["tomato", "mozzarella", "ham", "mushroom"],
      },
      {
        id: "diavola",
        name: l("Diavola"),
        description: l(
          "Pomodoro, fior di latte, salame piccante",
          "Tomato, fior di latte mozzarella, spicy salami",
          "Tomate, Fior-di-Latte-Mozzarella, scharfe Salami",
        ),
        price: 8,
        tags: ["piccante"],
        toppings: ["tomato", "mozzarella", "salami"],
      },
      {
        id: "capricciosa",
        name: l("Capricciosa"),
        description: l(
          "Pomodoro, fior di latte, prosciutto cotto, funghi, carciofi, olive",
          "Tomato, fior di latte mozzarella, cooked ham, mushrooms, artichokes, olives",
          "Tomate, Fior-di-Latte-Mozzarella, Kochschinken, Champignons, Artischocken, Oliven",
        ),
        price: 9,
        toppings: ["tomato", "mozzarella", "ham", "mushroom", "olive"],
      },
      {
        id: "quattro-formaggi",
        name: l("Quattro formaggi"),
        description: l(
          "Fior di latte, gorgonzola, emmental, grana",
          "Fior di latte mozzarella, gorgonzola, emmental, grana cheese",
          "Fior-di-Latte-Mozzarella, Gorgonzola, Emmentaler, Grana",
        ),
        price: 9,
        tags: ["vegetariana"],
        toppings: ["mozzarella"],
      },
      {
        id: "tonno-cipolla",
        name: l("Tonno e cipolla"),
        description: l(
          "Pomodoro, fior di latte, tonno, cipolla rossa",
          "Tomato, fior di latte mozzarella, tuna, red onion",
          "Tomate, Fior-di-Latte-Mozzarella, Thunfisch, rote Zwiebeln",
        ),
        price: 8.5,
        toppings: ["tomato", "mozzarella", "tuna", "onion"],
      },
      {
        id: "wurstel-patatine",
        name: l("Wurstel e patatine", "Frankfurter & fries", "Würstel & Pommes"),
        description: l(
          "Pomodoro, fior di latte, wurstel, patatine fritte",
          "Tomato, fior di latte mozzarella, frankfurters, fries",
          "Tomate, Fior-di-Latte-Mozzarella, Würstchen, Pommes frites",
        ),
        price: 8.5,
        toppings: ["tomato", "mozzarella", "sausage"],
      },
    ],
  },
  {
    id: "speciali",
    title: l("Pizze speciali", "Signature pizzas", "Spezialpizzen"),
    subtitle: l(
      "Le nostre ricette, con prodotti del territorio.",
      "Our own recipes, made with local produce.",
      "Unsere eigenen Rezepte mit Produkten aus der Region.",
    ),
    items: [
      {
        id: "lo-sfizio",
        name: l("Lo Sfizio"),
        description: l(
          "Pomodoro, fior di latte, speck, funghi, scaglie di grana",
          "Tomato, fior di latte mozzarella, speck, mushrooms, grana shavings",
          "Tomate, Fior-di-Latte-Mozzarella, Speck, Champignons, Grana-Späne",
        ),
        price: 10.5,
        tags: ["consigliata"],
        toppings: ["tomato", "mozzarella", "speck", "mushroom"],
      },
      {
        id: "trentina",
        name: l("Trentina"),
        description: l(
          "Fior di latte, speck, formaggio di malga, noci",
          "Fior di latte mozzarella, speck, mountain cheese, walnuts",
          "Fior-di-Latte-Mozzarella, Speck, Almkäse, Walnüsse",
        ),
        price: 10.5,
        toppings: ["mozzarella", "speck"],
      },
      {
        id: "gardesana",
        name: l("Gardesana"),
        description: l(
          "Pomodorini, fior di latte, olive, capperi, olio del Garda",
          "Cherry tomatoes, fior di latte mozzarella, olives, capers, Lake Garda olive oil",
          "Kirschtomaten, Fior-di-Latte-Mozzarella, Oliven, Kapern, Olivenöl vom Gardasee",
        ),
        price: 9.5,
        tags: ["vegetariana"],
        toppings: ["tomato", "mozzarella", "olive", "basil"],
      },
      {
        id: "ortolana",
        name: l("Ortolana"),
        description: l(
          "Pomodoro, fior di latte, verdure grigliate di stagione",
          "Tomato, fior di latte mozzarella, grilled seasonal vegetables",
          "Tomate, Fior-di-Latte-Mozzarella, gegrilltes Saisongemüse",
        ),
        price: 9.5,
        tags: ["vegetariana"],
        toppings: ["tomato", "mozzarella", "zucchini", "pepper", "onion"],
      },
      {
        id: "bufalina",
        name: l("Bufalina"),
        description: l(
          "Pomodoro, mozzarella di bufala a crudo, basilico",
          "Tomato, fresh buffalo mozzarella added after baking, basil",
          "Tomate, Büffelmozzarella (nach dem Backen), Basilikum",
        ),
        price: 10,
        tags: ["vegetariana"],
        toppings: ["tomato", "mozzarella", "basil"],
      },
      {
        id: "rucola-crudo",
        name: l("Rucola e crudo", "Rocket & prosciutto", "Rucola & Rohschinken"),
        description: l(
          "Pomodoro, fior di latte, prosciutto crudo, rucola, grana",
          "Tomato, fior di latte mozzarella, prosciutto crudo, rocket, grana",
          "Tomate, Fior-di-Latte-Mozzarella, Rohschinken, Rucola, Grana",
        ),
        price: 10.5,
        toppings: ["tomato", "mozzarella", "ham", "rocket"],
      },
      {
        id: "calabrese",
        name: l("Calabrese"),
        description: l(
          "Pomodoro, fior di latte, 'nduja, salame piccante, cipolla",
          "Tomato, fior di latte mozzarella, 'nduja, spicy salami, onion",
          "Tomate, Fior-di-Latte-Mozzarella, 'Nduja, scharfe Salami, Zwiebeln",
        ),
        price: 10,
        tags: ["piccante", "novita"],
        toppings: ["tomato", "mozzarella", "salami", "onion", "pepper"],
      },
      {
        id: "pizza-kebab",
        name: l("Pizza kebab"),
        description: l(
          "Pomodoro, fior di latte, carne kebab, cipolla, salsa yogurt",
          "Tomato, fior di latte mozzarella, kebab meat, onion, yoghurt sauce",
          "Tomate, Fior-di-Latte-Mozzarella, Kebabfleisch, Zwiebeln, Joghurtsoße",
        ),
        price: 10,
        tags: ["consigliata"],
        toppings: ["tomato", "mozzarella", "sausage", "onion"],
      },
    ],
  },
  {
    id: "kebab",
    title: l("Kebab & piadine", "Kebab & piadina", "Kebab & Piadina"),
    subtitle: l(
      "Per un pranzo veloce o una cena da asporto.",
      "For a quick lunch or a takeaway dinner.",
      "Für ein schnelles Mittagessen oder ein Abendessen zum Mitnehmen.",
    ),
    items: [
      {
        id: "kebab-pane",
        name: l("Kebab nel pane", "Kebab sandwich", "Kebab im Brot"),
        description: l(
          "Carne kebab, insalata, pomodoro, cipolla, salse a scelta",
          "Kebab meat, lettuce, tomato, onion, choice of sauces",
          "Kebabfleisch, Salat, Tomate, Zwiebeln, Soßen nach Wahl",
        ),
        price: 6.5,
      },
      {
        id: "kebab-durum",
        name: l("Kebab piadina (dürüm)", "Kebab wrap (dürüm)", "Dürüm Kebab"),
        description: l(
          "Piadina arrotolata con carne kebab, verdure e salse",
          "Rolled flatbread with kebab meat, vegetables and sauces",
          "Gerolltes Fladenbrot mit Kebabfleisch, Gemüse und Soßen",
        ),
        price: 7,
      },
      {
        id: "kebab-piatto",
        name: l("Kebab piatto", "Kebab plate", "Kebab-Teller"),
        description: l(
          "Carne kebab, patatine, insalata mista, salse",
          "Kebab meat, fries, mixed salad, sauces",
          "Kebabfleisch, Pommes frites, gemischter Salat, Soßen",
        ),
        price: 10,
      },
      {
        id: "falafel",
        name: l("Falafel nel pane", "Falafel sandwich", "Falafel im Brot"),
        description: l(
          "Falafel, insalata, pomodoro, salsa tahina",
          "Falafel, lettuce, tomato, tahini sauce",
          "Falafel, Salat, Tomate, Tahinisoße",
        ),
        price: 6.5,
        tags: ["vegetariana"],
      },
      {
        id: "piadina-crudo",
        name: l(
          "Piadina crudo e squacquerone",
          "Piadina with prosciutto & squacquerone",
          "Piadina mit Rohschinken & Squacquerone",
        ),
        description: l(
          "Prosciutto crudo, squacquerone, rucola",
          "Prosciutto crudo, squacquerone soft cheese, rocket",
          "Rohschinken, Squacquerone-Frischkäse, Rucola",
        ),
        price: 7,
      },
      {
        id: "patatine",
        name: l("Patatine fritte", "French fries", "Pommes frites"),
        description: l(
          "Porzione media, con ketchup o maionese",
          "Medium portion, with ketchup or mayonnaise",
          "Mittlere Portion, mit Ketchup oder Mayonnaise",
        ),
        price: 3.5,
        tags: ["vegetariana"],
      },
    ],
  },
  {
    id: "bar",
    title: l("Bar & bevande", "Bar & drinks", "Bar & Getränke"),
    subtitle: l(
      "Dal caffè del mattino allo spritz in piazza.",
      "From morning espresso to a spritz on the square.",
      "Vom Espresso am Morgen bis zum Spritz auf der Piazza.",
    ),
    items: [
      {
        id: "espresso",
        name: l("Caffè espresso", "Espresso", "Espresso"),
        description: l("Al banco o al tavolo", "At the bar or at your table", "An der Bar oder am Tisch"),
        price: 1.3,
      },
      {
        id: "cappuccino",
        name: l("Cappuccino"),
        description: l("Con latte fresco", "With fresh milk", "Mit frischer Milch"),
        price: 1.8,
      },
      {
        id: "bibite",
        name: l("Bibite in lattina", "Canned soft drinks", "Softdrinks (Dose)"),
        description: l(
          "Coca-Cola, Fanta, Sprite, tè freddo",
          "Coca-Cola, Fanta, Sprite, iced tea",
          "Coca-Cola, Fanta, Sprite, Eistee",
        ),
        price: 3,
      },
      {
        id: "acqua",
        name: l(
          "Acqua naturale o frizzante",
          "Still or sparkling water",
          "Mineralwasser still oder sprudelnd",
        ),
        description: l("Bottiglia da 0,5 l", "0.5 l bottle", "Flasche 0,5 l"),
        price: 1.5,
      },
      {
        id: "birra-piccola",
        name: l("Birra alla spina piccola", "Small draught beer", "Bier vom Fass, klein"),
        description: l("0,2 l", "0.2 l", "0,2 l"),
        price: 3,
      },
      {
        id: "birra-media",
        name: l("Birra alla spina media", "Medium draught beer", "Bier vom Fass, mittel"),
        description: l("0,4 l", "0.4 l", "0,4 l"),
        price: 5,
      },
      {
        id: "spritz",
        name: l("Spritz"),
        description: l("Aperol, Campari o Hugo", "Aperol, Campari or Hugo", "Aperol, Campari oder Hugo"),
        price: 4.5,
      },
      {
        id: "vino",
        name: l("Calice di vino", "Glass of wine", "Glas Wein"),
        description: l(
          "Vini del Trentino, bianco o rosso",
          "Trentino wines, white or red",
          "Weine aus dem Trentino, weiß oder rot",
        ),
        price: 4,
      },
    ],
  },
];

/** Le pizze messe in evidenza nella home (per id). */
export const featuredIds = ["lo-sfizio", "margherita", "diavola", "gardesana", "pizza-kebab", "ortolana"];

export function formatPrice(price: number, locale: Locale) {
  return new Intl.NumberFormat(intlLocale[locale], { style: "currency", currency: "EUR" }).format(price);
}

export function getFeatured(): MenuItem[] {
  const all = menu.flatMap((c) => c.items);
  return featuredIds.map((id) => all.find((i) => i.id === id)).filter((i): i is MenuItem => Boolean(i));
}
