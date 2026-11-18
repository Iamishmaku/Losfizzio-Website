/**
 * Menu della pizzeria.
 * ⚠️ Piatti e prezzi sono un esempio realistico: vanno sostituiti con il menu reale prima della messa online.
 */

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
  name: string;
  description: string;
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
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export const tagLabels: Record<Tag, string> = {
  vegetariana: "Vegetariana",
  piccante: "Piccante",
  novita: "Novità",
  consigliata: "La consigliata",
};

export const menu: MenuCategory[] = [
  {
    id: "classiche",
    title: "Pizze classiche",
    subtitle: "Impasto lievitato a lungo, steso a mano e cotto al momento.",
    items: [
      {
        name: "Marinara",
        description: "Pomodoro, aglio, origano, olio extravergine d'oliva",
        price: 5.5,
        tags: ["vegetariana"],
        toppings: ["tomato"],
      },
      {
        name: "Margherita",
        description: "Pomodoro, fior di latte, basilico fresco",
        price: 6.5,
        tags: ["vegetariana"],
        toppings: ["tomato", "mozzarella", "basil"],
      },
      {
        name: "Prosciutto",
        description: "Pomodoro, fior di latte, prosciutto cotto",
        price: 8,
        toppings: ["tomato", "mozzarella", "ham"],
      },
      {
        name: "Funghi",
        description: "Pomodoro, fior di latte, funghi champignon",
        price: 8,
        tags: ["vegetariana"],
        toppings: ["tomato", "mozzarella", "mushroom"],
      },
      {
        name: "Prosciutto e funghi",
        description: "Pomodoro, fior di latte, prosciutto cotto, funghi",
        price: 8.5,
        toppings: ["tomato", "mozzarella", "ham", "mushroom"],
      },
      {
        name: "Diavola",
        description: "Pomodoro, fior di latte, salame piccante",
        price: 8,
        tags: ["piccante"],
        toppings: ["tomato", "mozzarella", "salami"],
      },
      {
        name: "Capricciosa",
        description: "Pomodoro, fior di latte, prosciutto cotto, funghi, carciofi, olive",
        price: 9,
        toppings: ["tomato", "mozzarella", "ham", "mushroom", "olive"],
      },
      {
        name: "Quattro formaggi",
        description: "Fior di latte, gorgonzola, emmental, grana",
        price: 9,
        tags: ["vegetariana"],
        toppings: ["mozzarella"],
      },
      {
        name: "Tonno e cipolla",
        description: "Pomodoro, fior di latte, tonno, cipolla rossa",
        price: 8.5,
        toppings: ["tomato", "mozzarella", "tuna", "onion"],
      },
      {
        name: "Wurstel e patatine",
        description: "Pomodoro, fior di latte, wurstel, patatine fritte",
        price: 8.5,
        toppings: ["tomato", "mozzarella", "sausage"],
      },
    ],
  },
  {
    id: "speciali",
    title: "Pizze speciali",
    subtitle: "Le nostre ricette, con prodotti del territorio.",
    items: [
      {
        name: "Lo Sfizio",
        description: "Pomodoro, fior di latte, speck, funghi, scaglie di grana",
        price: 10.5,
        tags: ["consigliata"],
        toppings: ["tomato", "mozzarella", "speck", "mushroom"],
      },
      {
        name: "Trentina",
        description: "Fior di latte, speck, formaggio di malga, noci",
        price: 10.5,
        toppings: ["mozzarella", "speck"],
      },
      {
        name: "Gardesana",
        description: "Pomodorini, fior di latte, olive, capperi, olio del Garda",
        price: 9.5,
        tags: ["vegetariana"],
        toppings: ["tomato", "mozzarella", "olive", "basil"],
      },
      {
        name: "Ortolana",
        description: "Pomodoro, fior di latte, verdure grigliate di stagione",
        price: 9.5,
        tags: ["vegetariana"],
        toppings: ["tomato", "mozzarella", "zucchini", "pepper", "onion"],
      },
      {
        name: "Bufalina",
        description: "Pomodoro, mozzarella di bufala a crudo, basilico",
        price: 10,
        tags: ["vegetariana"],
        toppings: ["tomato", "mozzarella", "basil"],
      },
      {
        name: "Rucola e crudo",
        description: "Pomodoro, fior di latte, prosciutto crudo, rucola, grana",
        price: 10.5,
        toppings: ["tomato", "mozzarella", "ham", "rocket"],
      },
      {
        name: "Calabrese",
        description: "Pomodoro, fior di latte, 'nduja, salame piccante, cipolla",
        price: 10,
        tags: ["piccante", "novita"],
        toppings: ["tomato", "mozzarella", "salami", "onion", "pepper"],
      },
      {
        name: "Pizza kebab",
        description: "Pomodoro, fior di latte, carne kebab, cipolla, salsa yogurt",
        price: 10,
        tags: ["consigliata"],
        toppings: ["tomato", "mozzarella", "sausage", "onion"],
      },
    ],
  },
  {
    id: "kebab",
    title: "Kebab & piadine",
    subtitle: "Per un pranzo veloce o una cena da asporto.",
    items: [
      {
        name: "Kebab nel pane",
        description: "Carne kebab, insalata, pomodoro, cipolla, salse a scelta",
        price: 6.5,
      },
      {
        name: "Kebab piadina (dürüm)",
        description: "Piadina arrotolata con carne kebab, verdure e salse",
        price: 7,
      },
      {
        name: "Kebab piatto",
        description: "Carne kebab, patatine, insalata mista, salse",
        price: 10,
      },
      {
        name: "Falafel nel pane",
        description: "Falafel, insalata, pomodoro, salsa tahina",
        price: 6.5,
        tags: ["vegetariana"],
      },
      {
        name: "Piadina crudo e squacquerone",
        description: "Prosciutto crudo, squacquerone, rucola",
        price: 7,
      },
      {
        name: "Patatine fritte",
        description: "Porzione media, con ketchup o maionese",
        price: 3.5,
        tags: ["vegetariana"],
      },
    ],
  },
  {
    id: "bar",
    title: "Bar & bevande",
    subtitle: "Dal caffè del mattino allo spritz in piazza.",
    items: [
      {
        name: "Caffè espresso",
        description: "Al banco o al tavolo",
        price: 1.3,
      },
      { name: "Cappuccino", description: "Con latte fresco", price: 1.8 },
      {
        name: "Bibite in lattina",
        description: "Coca-Cola, Fanta, Sprite, tè freddo",
        price: 3,
      },
      {
        name: "Acqua naturale o frizzante",
        description: "Bottiglia da 0,5 l",
        price: 1.5,
      },
      { name: "Birra alla spina piccola", description: "0,2 l", price: 3 },
      { name: "Birra alla spina media", description: "0,4 l", price: 5 },
      { name: "Spritz", description: "Aperol, Campari o Hugo", price: 4.5 },
      {
        name: "Calice di vino",
        description: "Vini del Trentino, bianco o rosso",
        price: 4,
      },
    ],
  },
];

export const menuNotes = [
  "Impasto senza glutine e mozzarella senza lattosio: chiedi al personale la disponibilità.",
  "Aggiunte: da 1 € a 2,50 € in base all'ingrediente.",
  "Gli allergeni presenti nei piatti sono indicati nell'apposito registro: chiedi al personale.",
];

/** Le pizze messe in evidenza nella home (per nome). */
export const featuredNames = ["Lo Sfizio", "Margherita", "Diavola", "Gardesana", "Pizza kebab", "Ortolana"];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

export function getFeatured(): MenuItem[] {
  const all = menu.flatMap((c) => c.items);
  return featuredNames.map((n) => all.find((i) => i.name === n)).filter((i): i is MenuItem => Boolean(i));
}
