/**
 * Menu di Lo Sfizio (dal menu cartaceo, novembre 2026), in italiano, inglese e tedesco.
 * l("italiano", "english", "deutsch"): se una traduzione manca viene usato il testo italiano.
 * `toppings` serve solo per disegnare la pizza; `price` mancante = "prezzo su richiesta".
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
  | "zucchini"
  | "fries"
  | "nduja"
  | "corn"
  | "spinach"
  | "ricotta"
  | "anchovy"
  | "capers"
  | "garlic"
  | "chili"
  | "gorgonzola"
  | "bufala"
  | "porcini"
  | "grana"
  | "radicchio"
  | "cheese"
  | "salsiccia"
  | "potato"
  | "bacon"
  | "rosemary"
  | "shrimp"
  | "artichoke"
  | "eggplant"
  | "cherrytomato"
  | "salmon"
  | "walnut"
  | "asparagus"
  | "kebab"
  | "nutella";

export interface MenuItem {
  /** Identificativo stabile (usato per le pizze in evidenza e come chiave). */
  id: string;
  name: Localized;
  description?: Localized;
  /** Prezzo in euro. Se manca, il sito mostra "prezzo su richiesta". */
  price?: number;
  tags?: Tag[];
  /** Usati per disegnare l'illustrazione della pizza. */
  toppings?: Topping[];
  /** Foto facoltativa, es. "/images/menu/margherita.jpg": sostituisce il disegno. */
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: Localized;
  subtitle?: Localized;
  /** Nota in fondo alla categoria (es. aggiunte e supplementi). */
  note?: Localized;
  items: MenuItem[];
}

const T = "tomato";
const M = "mozzarella";

export const menu: MenuCategory[] = [
  {
    id: "pizze",
    title: l("Pizze", "Pizzas", "Pizzen"),
    subtitle: l(
      "Tutte cotte al momento. Disponibile anche la pizza senza glutine.",
      "All baked to order. Gluten-free pizza also available.",
      "Alle frisch gebacken. Auch glutenfreie Pizza erhältlich.",
    ),
    items: [
      {
        id: "margherita",
        name: l("Margherita"),
        description: l("Pomodoro, mozzarella", "Tomato, mozzarella", "Tomate, Mozzarella"),
        price: 7,
        tags: ["vegetariana"],
        toppings: [T, M, "basil"],
      },
      {
        id: "calabrese",
        name: l("Calabrese"),
        description: l(
          "Mozzarella, aglio, peperoncino",
          "Mozzarella, garlic, chilli",
          "Mozzarella, Knoblauch, Chili",
        ),
        price: 7,
        tags: ["vegetariana", "piccante"],
        toppings: [M, "garlic", "chili"],
      },
      {
        id: "panna-prosciutto-mais",
        name: l("Panna, prosciutto & mais", "Cream, ham & sweetcorn", "Sahne, Schinken & Mais"),
        description: l(
          "Pomodoro, mozzarella, panna, prosciutto, mais",
          "Tomato, mozzarella, cream, ham, sweetcorn",
          "Tomate, Mozzarella, Sahne, Schinken, Mais",
        ),
        price: 10,
        toppings: [T, M, "ham", "corn"],
      },
      {
        id: "diavola",
        name: l("Diavola"),
        description: l(
          "Pomodoro, mozzarella, salamino piccante, peperoni",
          "Tomato, mozzarella, spicy salami, peppers",
          "Tomate, Mozzarella, scharfe Salami, Paprika",
        ),
        price: 10,
        tags: ["piccante"],
        toppings: [T, M, "salami", "pepper"],
      },
      {
        id: "salamino-piccante",
        name: l("Salamino piccante", "Spicy salami", "Scharfe Salami"),
        description: l(
          "Pomodoro, mozzarella, salamino piccante",
          "Tomato, mozzarella, spicy salami",
          "Tomate, Mozzarella, scharfe Salami",
        ),
        price: 8.5,
        tags: ["piccante"],
        toppings: [T, M, "salami"],
      },
      {
        id: "prosciutto",
        name: l("Al prosciutto", "Ham", "Schinken"),
        description: l(
          "Pomodoro, mozzarella, prosciutto cotto",
          "Tomato, mozzarella, cooked ham",
          "Tomate, Mozzarella, Kochschinken",
        ),
        price: 8.5,
        toppings: [T, M, "ham"],
      },
      {
        id: "viennese",
        name: l("Viennese"),
        description: l(
          "Pomodoro, mozzarella, würstel",
          "Tomato, mozzarella, frankfurters",
          "Tomate, Mozzarella, Würstchen",
        ),
        price: 8.5,
        toppings: [T, M, "sausage"],
      },
      {
        id: "braccio-di-ferro",
        name: l("Braccio di ferro", "Popeye", "Popeye"),
        description: l(
          "Pomodoro, mozzarella, ricotta, spinaci",
          "Tomato, mozzarella, ricotta, spinach",
          "Tomate, Mozzarella, Ricotta, Spinat",
        ),
        price: 10,
        tags: ["vegetariana"],
        toppings: [T, M, "spinach", "ricotta"],
      },
      {
        id: "napoli",
        name: l("Napoli"),
        description: l(
          "Pomodoro, mozzarella, capperi, acciuga",
          "Tomato, mozzarella, capers, anchovies",
          "Tomate, Mozzarella, Kapern, Sardellen",
        ),
        price: 9,
        toppings: [T, M, "anchovy", "capers"],
      },
      {
        id: "gorgonzola",
        name: l("Al gorgonzola", "Gorgonzola", "Gorgonzola"),
        description: l(
          "Pomodoro, mozzarella, gorgonzola",
          "Tomato, mozzarella, gorgonzola",
          "Tomate, Mozzarella, Gorgonzola",
        ),
        price: 9,
        tags: ["vegetariana"],
        toppings: [T, M, "gorgonzola"],
      },
      {
        id: "crudo",
        name: l("Al crudo", "Prosciutto crudo", "Rohschinken"),
        description: l(
          "Pomodoro, mozzarella, prosciutto crudo",
          "Tomato, mozzarella, prosciutto crudo (cured ham)",
          "Tomate, Mozzarella, Rohschinken",
        ),
        price: 9.5,
        toppings: [T, M, "ham"],
      },
      {
        id: "speck",
        name: l("Con speck", "Speck", "Speck"),
        description: l(
          "Pomodoro, mozzarella, speck",
          "Tomato, mozzarella, speck",
          "Tomate, Mozzarella, Speck",
        ),
        price: 9.5,
        toppings: [T, M, "speck"],
      },
      {
        id: "bufalina",
        name: l("Bufalina", "Buffalo mozzarella", "Büffelmozzarella"),
        description: l(
          "Pomodoro, mozzarella di bufala, rucola",
          "Tomato, buffalo mozzarella, rocket",
          "Tomate, Büffelmozzarella, Rucola",
        ),
        price: 10.5,
        tags: ["vegetariana"],
        toppings: [T, "bufala", "rocket"],
      },
      {
        id: "romana",
        name: l("Alla romana", "Romana", "Romana"),
        description: l(
          "Pomodoro, mozzarella, acciuga, capperi, olive",
          "Tomato, mozzarella, anchovies, capers, olives",
          "Tomate, Mozzarella, Sardellen, Kapern, Oliven",
        ),
        price: 10,
        toppings: [T, M, "anchovy", "capers", "olive"],
      },
      {
        id: "porcini-grana",
        name: l("Porcini & grana", "Porcini & grana", "Steinpilze & Grana"),
        description: l(
          "Pomodoro, mozzarella, funghi porcini, grana",
          "Tomato, mozzarella, porcini mushrooms, grana cheese",
          "Tomate, Mozzarella, Steinpilze, Grana",
        ),
        price: 10.5,
        tags: ["vegetariana"],
        toppings: [T, M, "porcini", "grana"],
      },
      {
        id: "tonno",
        name: l("Al tonno", "Tuna", "Thunfisch"),
        description: l(
          "Pomodoro, mozzarella, tonno",
          "Tomato, mozzarella, tuna",
          "Tomate, Mozzarella, Thunfisch",
        ),
        price: 9,
        toppings: [T, M, "tuna"],
      },
      {
        id: "tonno-cipolla",
        name: l("Tonno & cipolla", "Tuna & onion", "Thunfisch & Zwiebeln"),
        description: l(
          "Pomodoro, mozzarella, tonno, cipolla",
          "Tomato, mozzarella, tuna, onion",
          "Tomate, Mozzarella, Thunfisch, Zwiebeln",
        ),
        price: 10,
        toppings: [T, M, "tuna", "onion"],
      },
      {
        id: "prosciutto-funghi",
        name: l("Prosciutto & funghi", "Ham & mushrooms", "Schinken & Champignons"),
        description: l(
          "Pomodoro, mozzarella, prosciutto, funghi champignon",
          "Tomato, mozzarella, ham, button mushrooms",
          "Tomate, Mozzarella, Schinken, Champignons",
        ),
        price: 10,
        toppings: [T, M, "ham", "mushroom"],
      },
      {
        id: "radicchio-taleggio",
        name: l("Radicchio & taleggio", "Radicchio & taleggio", "Radicchio & Taleggio"),
        description: l(
          "Pomodoro, mozzarella, radicchio, taleggio",
          "Tomato, mozzarella, radicchio, taleggio cheese",
          "Tomate, Mozzarella, Radicchio, Taleggio-Käse",
        ),
        price: 10.5,
        tags: ["vegetariana"],
        toppings: [T, M, "radicchio", "cheese"],
      },
      {
        id: "saporita",
        name: l("Saporita"),
        description: l(
          "Pomodoro, mozzarella, salsiccia, patate lesse",
          "Tomato, mozzarella, fresh sausage, boiled potatoes",
          "Tomate, Mozzarella, frische Bratwurst, gekochte Kartoffeln",
        ),
        price: 10,
        toppings: [T, M, "salsiccia", "potato"],
      },
      {
        id: "bacon",
        name: l("Al bacon", "Bacon", "Bacon"),
        description: l(
          "Mozzarella, bacon, patate lesse, rosmarino",
          "Mozzarella, bacon, boiled potatoes, rosemary",
          "Mozzarella, Bacon, gekochte Kartoffeln, Rosmarin",
        ),
        price: 10,
        toppings: [M, "bacon", "potato", "rosemary"],
      },
      {
        id: "gamberi-rucola",
        name: l("Gamberi & rucola", "Prawns & rocket", "Garnelen & Rucola"),
        description: l(
          "Pomodoro, mozzarella, gamberi, rucola",
          "Tomato, mozzarella, prawns, rocket",
          "Tomate, Mozzarella, Garnelen, Rucola",
        ),
        price: 10.5,
        toppings: [T, M, "shrimp", "rocket"],
      },
      {
        id: "capricciosa",
        name: l("Capricciosa"),
        description: l(
          "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi",
          "Tomato, mozzarella, cooked ham, mushrooms, artichokes",
          "Tomate, Mozzarella, Kochschinken, Champignons, Artischocken",
        ),
        price: 12,
        toppings: [T, M, "ham", "mushroom", "artichoke"],
      },
      {
        id: "verdura",
        name: l("Con verdura", "Vegetable", "Gemüse"),
        description: l(
          "Pomodoro, mozzarella, verdura mista",
          "Tomato, mozzarella, mixed vegetables",
          "Tomate, Mozzarella, gemischtes Gemüse",
        ),
        price: 11,
        tags: ["vegetariana"],
        toppings: [T, M, "zucchini", "pepper", "eggplant"],
      },
      {
        id: "montanara",
        name: l("Alla montanara", "Montanara", "Montanara"),
        description: l(
          "Pomodoro, mozzarella, funghi, salsiccia trentina",
          "Tomato, mozzarella, mushrooms, Trentino sausage",
          "Tomate, Mozzarella, Champignons, Trentiner Wurst",
        ),
        price: 11,
        toppings: [T, M, "mushroom", "salsiccia"],
      },
      {
        id: "forte",
        name: l("Forte"),
        description: l(
          "Pomodoro, mozzarella, salamino, gorgonzola, porcini",
          "Tomato, mozzarella, salami, gorgonzola, porcini mushrooms",
          "Tomate, Mozzarella, Salami, Gorgonzola, Steinpilze",
        ),
        price: 12,
        toppings: [T, M, "salami", "gorgonzola", "porcini"],
      },
      {
        id: "quattro-formaggi",
        name: l("4 formaggi", "Four cheeses", "Vier Käse"),
        description: l(
          "Pomodoro, mozzarella, 4 formaggi misti",
          "Tomato, mozzarella, four mixed cheeses",
          "Tomate, Mozzarella, vier verschiedene Käsesorten",
        ),
        price: 11.5,
        tags: ["vegetariana"],
        toppings: [T, M, "gorgonzola", "cheese", "grana"],
      },
      {
        id: "nord-est",
        name: l("Nord-Est"),
        description: l(
          "Pomodoro, mozzarella, radicchio, gorgonzola, speck",
          "Tomato, mozzarella, radicchio, gorgonzola, speck",
          "Tomate, Mozzarella, Radicchio, Gorgonzola, Speck",
        ),
        price: 12,
        toppings: [T, M, "radicchio", "gorgonzola", "speck"],
      },
      {
        id: "lo-sfizio",
        name: l("Lo Sfizio"),
        description: l(
          "Pomodoro, mozzarella di bufala, rucola, pachino, crudo",
          "Tomato, buffalo mozzarella, rocket, cherry tomatoes, prosciutto crudo",
          "Tomate, Büffelmozzarella, Rucola, Kirschtomaten, Rohschinken",
        ),
        price: 12.5,
        tags: ["consigliata"],
        toppings: [T, "bufala", "ham", "rocket", "cherrytomato"],
      },
      {
        id: "nizzarda",
        name: l("Nizzarda", "Niçoise", "Nizza"),
        description: l(
          "Pomodoro, mozzarella, cipolla, olive, capperi",
          "Tomato, mozzarella, onion, olives, capers",
          "Tomate, Mozzarella, Zwiebeln, Oliven, Kapern",
        ),
        price: 9.5,
        tags: ["vegetariana"],
        toppings: [T, M, "onion", "olive", "capers"],
      },
      {
        id: "parmigiana",
        name: l("Parmigiana"),
        description: l(
          "Pomodoro, mozzarella, melanzana, parmigiano grattugiato",
          "Tomato, mozzarella, aubergine, grated parmesan",
          "Tomate, Mozzarella, Aubergine, geriebener Parmesan",
        ),
        price: 9.5,
        tags: ["vegetariana"],
        toppings: [T, M, "eggplant", "grana"],
      },
      {
        id: "caprese",
        name: l("Caprese"),
        description: l(
          "Pomodoro, mozzarella a fette, basilico, pomodorini",
          "Tomato, sliced mozzarella, basil, cherry tomatoes",
          "Tomate, Mozzarellascheiben, Basilikum, Kirschtomaten",
        ),
        price: 9.5,
        tags: ["vegetariana"],
        toppings: [T, "bufala", "cherrytomato", "basil"],
      },
      {
        id: "trevigiana",
        name: l("Trevigiana"),
        description: l(
          "Pomodoro, mozzarella, radicchio, gorgonzola",
          "Tomato, mozzarella, radicchio, gorgonzola",
          "Tomate, Mozzarella, Radicchio, Gorgonzola",
        ),
        price: 10,
        tags: ["vegetariana"],
        toppings: [T, M, "radicchio", "gorgonzola"],
      },
      {
        id: "primavera",
        name: l("Primavera"),
        description: l(
          "Pomodoro, mozzarella, crudo, rucola, pomodorini",
          "Tomato, mozzarella, prosciutto crudo, rocket, cherry tomatoes",
          "Tomate, Mozzarella, Rohschinken, Rucola, Kirschtomaten",
        ),
        price: 11.5,
        toppings: [T, M, "ham", "rocket", "cherrytomato"],
      },
      {
        id: "provola-speck",
        name: l("Provola & speck", "Provola & speck", "Provola & Speck"),
        description: l(
          "Pomodoro, mozzarella, provola piccante, speck",
          "Tomato, mozzarella, spicy provola cheese, speck",
          "Tomate, Mozzarella, pikanter Provola-Käse, Speck",
        ),
        price: 10.5,
        toppings: [T, M, "cheese", "speck"],
      },
      {
        id: "pugliese",
        name: l("Pugliese"),
        description: l(
          "Pomodoro, mozzarella, cipolla",
          "Tomato, mozzarella, onion",
          "Tomate, Mozzarella, Zwiebeln",
        ),
        price: 8.5,
        tags: ["vegetariana"],
        toppings: [T, M, "onion"],
      },
      {
        id: "siciliana",
        name: l("Siciliana", "Sicilian", "Sizilianisch"),
        description: l(
          "Pomodoro, mozzarella, capperi, olive",
          "Tomato, mozzarella, capers, olives",
          "Tomate, Mozzarella, Kapern, Oliven",
        ),
        price: 9,
        tags: ["vegetariana"],
        toppings: [T, M, "capers", "olive"],
      },
      {
        id: "mia",
        name: l("Mia"),
        description: l(
          "Pomodoro, mozzarella, salamino piccante, gorgonzola, asparagi, aglio",
          "Tomato, mozzarella, spicy salami, gorgonzola, asparagus, garlic",
          "Tomate, Mozzarella, scharfe Salami, Gorgonzola, Spargel, Knoblauch",
        ),
        price: 12.5,
        tags: ["piccante"],
        toppings: [T, M, "salami", "gorgonzola", "asparagus", "garlic"],
      },
      {
        id: "trentina",
        name: l("Trentina"),
        description: l(
          "Pomodoro, mozzarella, salsiccia trentina",
          "Tomato, mozzarella, Trentino sausage",
          "Tomate, Mozzarella, Trentiner Wurst",
        ),
        price: 9.5,
        toppings: [T, M, "salsiccia"],
      },
      {
        id: "sostanziosa",
        name: l("Sostanziosa", "Hearty", "Deftig"),
        description: l(
          "Pomodoro, mozzarella, salsiccia, peperoni, olive nere, cipolla",
          "Tomato, mozzarella, sausage, peppers, black olives, onion",
          "Tomate, Mozzarella, Wurst, Paprika, schwarze Oliven, Zwiebeln",
        ),
        price: 13.5,
        toppings: [T, M, "salsiccia", "pepper", "olive", "onion"],
      },
      {
        id: "rustica",
        name: l("Rustica"),
        description: l(
          "Pomodoro, mozzarella, salamino piccante, gorgonzola, cipolla",
          "Tomato, mozzarella, spicy salami, gorgonzola, onion",
          "Tomate, Mozzarella, scharfe Salami, Gorgonzola, Zwiebeln",
        ),
        price: 11.5,
        tags: ["piccante"],
        toppings: [T, M, "salami", "gorgonzola", "onion"],
      },
      {
        id: "norvegese",
        name: l("Norvegese", "Norwegian", "Norwegisch"),
        description: l(
          "Pomodoro, mozzarella, salmone norvegese, rucola",
          "Tomato, mozzarella, Norwegian salmon, rocket",
          "Tomate, Mozzarella, norwegischer Lachs, Rucola",
        ),
        price: 11,
        toppings: [T, M, "salmon", "rocket"],
      },
      {
        id: "julia",
        name: l("Julia"),
        description: l(
          "Pomodoro, mozzarella, peperoni",
          "Tomato, mozzarella, peppers",
          "Tomate, Mozzarella, Paprika",
        ),
        price: 9,
        tags: ["vegetariana"],
        toppings: [T, M, "pepper"],
      },
      {
        id: "bomba",
        name: l("Bomba"),
        description: l(
          "Margherita, salamino piccante, funghi, carciofi, peperoni, uovo",
          "Margherita, spicy salami, mushrooms, artichokes, peppers, egg",
          "Margherita, scharfe Salami, Champignons, Artischocken, Paprika, Ei",
        ),
        price: 14,
        tags: ["piccante"],
        toppings: [T, M, "egg", "salami", "mushroom", "artichoke", "pepper"],
      },
      {
        id: "noci",
        name: l("Noci", "Walnut", "Walnuss"),
        description: l(
          "Mozzarella, gorgonzola, noci",
          "Mozzarella, gorgonzola, walnuts",
          "Mozzarella, Gorgonzola, Walnüsse",
        ),
        price: 10,
        tags: ["vegetariana"],
        toppings: [M, "gorgonzola", "walnut"],
      },
      {
        id: "bianca",
        name: l("Bianca", "White", "Weiß"),
        description: l(
          "Mozzarella, pancetta, asparagi, taleggio",
          "Mozzarella, bacon, asparagus, taleggio cheese",
          "Mozzarella, Bauchspeck, Spargel, Taleggio-Käse",
        ),
        price: 11.5,
        toppings: [M, "bacon", "asparagus", "cheese"],
      },
      {
        id: "monte-baldo",
        name: l("Monte Baldo"),
        description: l(
          "Pomodoro, mozzarella, salame piccante, salsiccia trentina, peperoni",
          "Tomato, mozzarella, spicy salami, Trentino sausage, peppers",
          "Tomate, Mozzarella, scharfe Salami, Trentiner Wurst, Paprika",
        ),
        price: 12,
        tags: ["piccante"],
        toppings: [T, M, "salami", "salsiccia", "pepper"],
      },
      {
        id: "carbonara",
        name: l("Carbonara"),
        description: l(
          "Pomodoro, mozzarella, pancetta, uovo, parmigiano grattugiato",
          "Tomato, mozzarella, bacon, egg, grated parmesan",
          "Tomate, Mozzarella, Bauchspeck, Ei, geriebener Parmesan",
        ),
        price: 11.5,
        toppings: [T, M, "egg", "bacon", "grana"],
      },
      {
        id: "patate-fritte",
        name: l("Con patate fritte", "Fries", "Pommes"),
        description: l("Margherita, patate fritte", "Margherita, fries", "Margherita, Pommes frites"),
        price: 12,
        tags: ["vegetariana"],
        toppings: [T, M, "fries"],
      },
      {
        id: "iliria",
        name: l("Iliria"),
        description: l(
          "Pomodoro, mozzarella, formaggio bianco, olive nere, origano",
          "Tomato, mozzarella, white cheese, black olives, oregano",
          "Tomate, Mozzarella, Weißkäse, schwarze Oliven, Oregano",
        ),
        price: 10,
        tags: ["vegetariana"],
        toppings: [T, M, "ricotta", "olive"],
      },
      {
        id: "horror",
        name: l("Horror"),
        description: l(
          "Margherita, prosciutto cotto, würstel, gorgonzola, cipolla",
          "Margherita, cooked ham, frankfurters, gorgonzola, onion",
          "Margherita, Kochschinken, Würstchen, Gorgonzola, Zwiebeln",
        ),
        price: 12,
        toppings: [T, M, "ham", "sausage", "gorgonzola", "onion"],
      },
      {
        id: "dragonball",
        name: l("Dragonball"),
        description: l(
          "Pomodoro, mozzarella, prosciutto cotto, würstel, edamer",
          "Tomato, mozzarella, cooked ham, frankfurters, Edam cheese",
          "Tomate, Mozzarella, Kochschinken, Würstchen, Edamer",
        ),
        price: 11.5,
        toppings: [T, M, "ham", "sausage", "cheese"],
      },
      {
        id: "kebab",
        name: l("Con kebab", "Kebab", "Kebab"),
        description: l(
          "Pomodoro, mozzarella, carne di kebab",
          "Tomato, mozzarella, kebab meat",
          "Tomate, Mozzarella, Kebabfleisch",
        ),
        price: 11.5,
        toppings: [T, M, "kebab"],
      },
      {
        id: "odeta",
        name: l("Odeta"),
        description: l(
          "Calabrese, salamino piccante, taleggio, zucchine a julienne",
          "Calabrese, spicy salami, taleggio cheese, julienned courgettes",
          "Calabrese, scharfe Salami, Taleggio-Käse, Zucchini-Streifen",
        ),
        price: 11,
        tags: ["piccante"],
        toppings: [M, "garlic", "chili", "salami", "cheese", "zucchini"],
      },
      {
        id: "mazinga-zeta",
        name: l("Mazinga Zeta"),
        description: l(
          "Calabrese, salamino piccante, acciughe, pomodorini ciliegia",
          "Calabrese, spicy salami, anchovies, cherry tomatoes",
          "Calabrese, scharfe Salami, Sardellen, Kirschtomaten",
        ),
        price: 11.5,
        tags: ["piccante"],
        toppings: [M, "garlic", "chili", "salami", "anchovy", "cherrytomato"],
      },
      {
        id: "salamino-gorgonzola",
        name: l("Salamino & gorgonzola", "Spicy salami & gorgonzola", "Scharfe Salami & Gorgonzola"),
        description: l(
          "Pomodoro, mozzarella, salamino piccante, gorgonzola",
          "Tomato, mozzarella, spicy salami, gorgonzola",
          "Tomate, Mozzarella, scharfe Salami, Gorgonzola",
        ),
        tags: ["piccante"],
        toppings: [T, M, "salami", "gorgonzola"],
      },
      {
        id: "peperoni-gorgonzola",
        name: l("Peperoni & gorgonzola", "Peppers & gorgonzola", "Paprika & Gorgonzola"),
        description: l(
          "Pomodoro, mozzarella, peperoni, gorgonzola",
          "Tomato, mozzarella, peppers, gorgonzola",
          "Tomate, Mozzarella, Paprika, Gorgonzola",
        ),
        tags: ["vegetariana"],
        toppings: [T, M, "pepper", "gorgonzola"],
      },
      {
        id: "senza-glutine",
        name: l("Pizza senza glutine", "Gluten-free pizza", "Glutenfreie Pizza"),
        description: l(
          "La pizza che preferisci, con impasto senza glutine",
          "Your favourite pizza, made with gluten-free dough",
          "Deine Lieblingspizza mit glutenfreiem Teig",
        ),
        toppings: [T, M, "basil"],
      },
      {
        id: "nutella",
        name: l("Con Nutella", "Nutella", "Nutella"),
        description: l(
          "Focaccia, Nutella, zucchero a velo",
          "Focaccia, Nutella, icing sugar",
          "Focaccia, Nutella, Puderzucker",
        ),
        tags: ["vegetariana"],
        toppings: ["nutella"],
      },
    ],
  },
  {
    id: "primi",
    title: l("Primi piatti", "Pasta", "Pasta"),
    items: [
      {
        id: "spaghetti-pomodoro",
        name: l("Spaghetti al pomodoro", "Spaghetti with tomato sauce", "Spaghetti mit Tomatensoße"),
        price: 9,
        tags: ["vegetariana"],
      },
      {
        id: "spaghetti-bolognese",
        name: l("Spaghetti alla bolognese", "Spaghetti bolognese", "Spaghetti Bolognese"),
        price: 9,
      },
      {
        id: "spaghetti-aglio-olio",
        name: l(
          "Spaghetti aglio, olio e peperoncino",
          "Spaghetti with garlic, oil & chilli",
          "Spaghetti mit Knoblauch, Öl & Chili",
        ),
        price: 9,
        tags: ["vegetariana", "piccante"],
      },
      {
        id: "spaghetti-carbonara",
        name: l("Spaghetti alla carbonara", "Spaghetti carbonara", "Spaghetti Carbonara"),
        price: 11,
      },
      {
        id: "penne-pomodoro",
        name: l("Penne al pomodoro", "Penne with tomato sauce", "Penne mit Tomatensoße"),
        price: 9,
        tags: ["vegetariana"],
      },
      {
        id: "penne-bolognese",
        name: l("Penne alla bolognese", "Penne bolognese", "Penne Bolognese"),
        price: 9,
      },
      {
        id: "penne-arrabbiata",
        name: l("Penne all'arrabbiata", "Penne arrabbiata", "Penne Arrabbiata"),
        price: 9.5,
        tags: ["vegetariana", "piccante"],
      },
      {
        id: "tortellini-bolognese",
        name: l("Tortellini alla bolognese", "Tortellini bolognese", "Tortellini Bolognese"),
        price: 9,
      },
      {
        id: "tortellini-ricotta-spinaci",
        name: l(
          "Tortellini ricotta e spinaci al burro e salvia",
          "Ricotta & spinach tortellini with butter and sage",
          "Tortellini mit Ricotta & Spinat in Butter und Salbei",
        ),
        price: 9.5,
        tags: ["vegetariana"],
      },
      {
        id: "tortellini-panna-prosciutto",
        name: l(
          "Tortellini panna e prosciutto",
          "Tortellini with cream & ham",
          "Tortellini mit Sahne & Schinken",
        ),
        price: 9.5,
      },
      {
        id: "lasagne",
        name: l("Lasagne alla bolognese", "Lasagne bolognese", "Lasagne Bolognese"),
        price: 9,
      },
      {
        id: "tagliatelle",
        name: l("Tagliatelle fatte in casa", "Homemade tagliatelle", "Hausgemachte Tagliatelle"),
        price: 9,
      },
      {
        id: "pasta-burro",
        name: l("Pasta al burro", "Pasta with butter", "Pasta mit Butter"),
        price: 8,
        tags: ["vegetariana"],
      },
    ],
  },
  {
    id: "insalate",
    title: l("Insalate e antipasti", "Salads & starters", "Salate & Vorspeisen"),
    note: l(
      "Aggiunte all'insalata: mozzarella 3,00 € · mozzarella di bufala 4,00 € · funghi champignon 2,00 € · carciofi 2,00 € · grana 4,00 € · leerdammer 3,00 € · olive nere 2,40 € · uovo 2,40 €",
      "Salad extras: mozzarella €3.00 · buffalo mozzarella €4.00 · button mushrooms €2.00 · artichokes €2.00 · grana €4.00 · Leerdammer €3.00 · black olives €2.40 · egg €2.40",
      "Extras zum Salat: Mozzarella 3,00 € · Büffelmozzarella 4,00 € · Champignons 2,00 € · Artischocken 2,00 € · Grana 4,00 € · Leerdammer 3,00 € · schwarze Oliven 2,40 € · Ei 2,40 €",
    ),
    items: [
      {
        id: "insalata-mista-piccola",
        name: l("Insalata mista piccola", "Small mixed salad", "Kleiner gemischter Salat"),
        description: l(
          "Insalata verde, carote, rucola, radicchio, pomodoro, cappuccio, mais",
          "Green salad, carrots, rocket, radicchio, tomato, cabbage, sweetcorn",
          "Grüner Salat, Karotten, Rucola, Radicchio, Tomate, Weißkraut, Mais",
        ),
        price: 7,
        tags: ["vegetariana"],
      },
      {
        id: "insalatona-mista",
        name: l("Insalatona mista", "Large mixed salad", "Großer gemischter Salat"),
        description: l(
          "Insalata verde, carote, rucola, radicchio, pomodoro, cappuccio, mais",
          "Green salad, carrots, rocket, radicchio, tomato, cabbage, sweetcorn",
          "Grüner Salat, Karotten, Rucola, Radicchio, Tomate, Weißkraut, Mais",
        ),
        price: 9,
        tags: ["vegetariana"],
      },
      { id: "contorno", name: l("Contorno", "Side dish", "Beilage"), price: 2.5, tags: ["vegetariana"] },
      {
        id: "crudo-melone",
        name: l("Prosciutto crudo & melone", "Prosciutto crudo & melon", "Rohschinken & Melone"),
        price: 13,
      },
      {
        id: "affettato-misto",
        name: l("Affettato misto", "Mixed cold cuts", "Aufschnittplatte"),
        description: l(
          "Prosciutto crudo, speck, salame piccante, salame dolce, bresaola, formaggio grana",
          "Prosciutto crudo, speck, spicy salami, mild salami, bresaola, grana cheese",
          "Rohschinken, Speck, scharfe Salami, milde Salami, Bresaola, Grana",
        ),
        price: 13,
      },
    ],
  },
  {
    id: "piadine",
    title: l("Piadine tradizionali", "Traditional piadina", "Traditionelle Piadina"),
    subtitle: l(
      "La piadina romagnola, farcita al momento.",
      "Italian flatbread, filled to order.",
      "Italienisches Fladenbrot, frisch belegt.",
    ),
    items: [
      {
        id: "piadina-bresaola",
        name: l("Bresaola, rucola & grana", "Bresaola, rocket & grana", "Bresaola, Rucola & Grana"),
        price: 6.5,
      },
      {
        id: "piadina-cotto-funghi",
        name: l(
          "Cotto, mozzarella & funghi",
          "Ham, mozzarella & mushrooms",
          "Schinken, Mozzarella & Champignons",
        ),
        price: 6.5,
      },
      {
        id: "piadina-speck-provola",
        name: l("Speck, provola & pomodoro", "Speck, provola & tomato", "Speck, Provola & Tomate"),
        price: 6.5,
      },
      {
        id: "piadina-crudo-mozzarella",
        name: l(
          "Crudo, mozzarella & pomodoro",
          "Prosciutto crudo, mozzarella & tomato",
          "Rohschinken, Mozzarella & Tomate",
        ),
        price: 6.5,
      },
      {
        id: "piadina-cotto-edamer",
        name: l("Cotto & edamer", "Ham & Edam", "Schinken & Edamer"),
        price: 6.5,
      },
      {
        id: "piadina-crudo-taleggio",
        name: l("Crudo & taleggio", "Prosciutto crudo & taleggio", "Rohschinken & Taleggio"),
        price: 6.5,
      },
      { id: "piadina-crudo", name: l("Al crudo", "Prosciutto crudo", "Rohschinken"), price: 6 },
      {
        id: "piadina-cotto-carciofi",
        name: l(
          "Cotto, mozzarella & carciofi",
          "Ham, mozzarella & artichokes",
          "Schinken, Mozzarella & Artischocken",
        ),
        price: 6.5,
      },
      { id: "piadina-nutella", name: l("Nutella"), price: 5.5, tags: ["vegetariana"] },
      {
        id: "piadina-speck-gorgonzola",
        name: l("Speck & gorgonzola", "Speck & gorgonzola", "Speck & Gorgonzola"),
        price: 6.5,
      },
    ],
  },
  {
    id: "extra",
    title: l("Kebab ed extra", "Kebab & more", "Kebab & mehr"),
    items: [
      { id: "panino-kebab", name: l("Panino kebab", "Kebab sandwich", "Kebab im Brot"), price: 6.5 },
      { id: "piadina-kebab", name: l("Piadina kebab", "Kebab wrap", "Kebab-Piadina"), price: 6.5 },
      {
        id: "patatine-fritte",
        name: l("Patatine fritte", "French fries", "Pommes frites"),
        price: 5,
        tags: ["vegetariana"],
      },
      { id: "panini-farciti", name: l("Panini farciti", "Filled rolls", "Belegte Brötchen"), price: 6 },
      { id: "toast", name: l("Toast"), price: 4.5 },
      {
        id: "cotoletta-patate",
        name: l("Cotoletta con patate", "Breaded cutlet with fries", "Schnitzel mit Pommes"),
        price: 13,
      },
      {
        id: "wurstel-patate",
        name: l("Würstel con patate", "Frankfurters with fries", "Würstchen mit Pommes"),
        price: 8.5,
      },
      {
        id: "trancio-margherita",
        name: l("Trancio margherita", "Margherita slice", "Pizzastück Margherita"),
        price: 3,
        tags: ["vegetariana"],
      },
      {
        id: "trancio-farcito",
        name: l("Trancio di pizza farcito", "Pizza slice with toppings", "Belegtes Pizzastück"),
        price: 3.5,
      },
    ],
  },
];

/** Le pizze messe in evidenza nella home (per id). */
export const featuredIds = ["lo-sfizio", "margherita", "diavola", "capricciosa", "bomba", "nord-est"];

/** Prezzo formattato nella lingua della pagina, o null se il prezzo non è indicato. */
export function formatPrice(price: number | undefined, locale: Locale) {
  if (price === undefined) return null;
  return new Intl.NumberFormat(intlLocale[locale], { style: "currency", currency: "EUR" }).format(price);
}

export function getFeatured(): MenuItem[] {
  const all = menu.flatMap((c) => c.items);
  return featuredIds.map((id) => all.find((i) => i.id === id)).filter((i): i is MenuItem => Boolean(i));
}
