import type { Topping } from "@/data/menu";

/**
 * Illustrazione SVG di una pizza, generata in modo deterministico a partire
 * dagli ingredienti e da un "seed" (di solito il nome della pizza).
 * Non usa hook, quindi funziona sia in Server che in Client Components.
 */

interface PizzaArtProps {
  toppings?: readonly Topping[];
  seed?: string;
  className?: string;
  title?: string;
  /** Dimensione fissa in px (utile per l'immagine Open Graph). */
  size?: number;
}

function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r1 = (n: number) => Math.round(n * 10) / 10;

interface Spot {
  x: number;
  y: number;
  rot: number;
  s: number;
}

/** Distribuisce n punti nel cerchio evitando sovrapposizioni troppo evidenti. */
function scatter(rand: () => number, n: number, radius: number, taken: Spot[], minDist: number): Spot[] {
  const out: Spot[] = [];
  let attempts = 0;
  while (out.length < n && attempts < n * 40) {
    attempts++;
    const a = rand() * Math.PI * 2;
    const d = Math.sqrt(rand()) * radius;
    const x = 100 + Math.cos(a) * d;
    const y = 100 + Math.sin(a) * d;
    const ok = [...taken, ...out].every((p) => (p.x - x) ** 2 + (p.y - y) ** 2 > minDist ** 2);
    if (ok)
      out.push({
        x: r1(x),
        y: r1(y),
        rot: Math.round(rand() * 360),
        s: r1(0.85 + rand() * 0.35),
      });
  }
  taken.push(...out);
  return out;
}

const counts: Partial<Record<Topping, number>> = {
  basil: 5,
  salami: 7,
  ham: 6,
  mushroom: 7,
  olive: 9,
  pepper: 6,
  onion: 6,
  rocket: 9,
  tuna: 8,
  egg: 1,
  sausage: 9,
  speck: 6,
  zucchini: 7,
  fries: 11,
  nduja: 6,
  corn: 16,
  spinach: 7,
  ricotta: 6,
  anchovy: 6,
  capers: 14,
  garlic: 9,
  chili: 8,
  gorgonzola: 7,
  bufala: 5,
  porcini: 6,
  grana: 14,
  radicchio: 6,
  cheese: 7,
  salsiccia: 10,
  potato: 7,
  bacon: 6,
  rosemary: 7,
  shrimp: 6,
  artichoke: 5,
  eggplant: 6,
  cherrytomato: 7,
  salmon: 6,
  walnut: 9,
  asparagus: 6,
  kebab: 9,
  nutella: 0,
};

/** Ingredienti piccoli: possono stare più vicini tra loro. */
const small = new Set<Topping>([
  "olive",
  "tuna",
  "capers",
  "corn",
  "garlic",
  "chili",
  "walnut",
  "grana",
  "salsiccia",
]);

function ToppingShape({ type, spot }: { type: Topping; spot: Spot }) {
  const t = `translate(${spot.x} ${spot.y}) rotate(${spot.rot}) scale(${spot.s})`;
  switch (type) {
    case "basil":
      return (
        <g transform={t}>
          <path d="M0 -11 C9 -6 9 6 0 11 C-9 6 -9 -6 0 -11Z" fill="#2f6b3a" />
          <path d="M0 -9 L0 9" stroke="#4f9a54" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      );
    case "salami":
      return (
        <g transform={t}>
          <circle r="11" fill="#a3261b" />
          <circle r="11" fill="none" stroke="#7d1a12" strokeWidth="1.5" />
          <circle cx="-4" cy="-3" r="1.6" fill="#f3c7b6" />
          <circle cx="4" cy="2" r="1.3" fill="#f3c7b6" />
          <circle cx="-1" cy="5" r="1.1" fill="#f3c7b6" />
          <circle cx="3" cy="-6" r="0.9" fill="#f3c7b6" />
        </g>
      );
    case "ham":
      return (
        <g transform={t}>
          <path d="M-12 -4 C-8 -11 6 -10 11 -5 C14 1 9 9 1 9 C-7 10 -14 4 -12 -4Z" fill="#eda1a0" />
          <path
            d="M-9 -3 C-4 -7 5 -6 8 -2"
            stroke="#f8c9c4"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );
    case "mushroom":
      return (
        <g transform={t}>
          <path
            d="M-9 0 C-9 -8 9 -8 9 0 C9 2 6 2 4 2 L3 8 C3 10 -3 10 -3 8 L-4 2 C-6 2 -9 2 -9 0Z"
            fill="#e9d6b6"
          />
          <path d="M-9 0 C-9 -8 9 -8 9 0" fill="none" stroke="#9c7650" strokeWidth="1.6" />
        </g>
      );
    case "olive":
      return (
        <g transform={t}>
          <ellipse rx="5" ry="4.2" fill="#1d1a16" />
          <ellipse rx="2" ry="1.6" fill="#c8321f" opacity="0.9" />
        </g>
      );
    case "pepper":
      return (
        <g transform={t}>
          <path
            d="M-10 -2 C-4 -7 4 -7 10 -2"
            stroke="#e8b923"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );
    case "onion":
      return (
        <g transform={t}>
          <path
            d="M-9 3 C-6 -7 6 -7 9 3"
            stroke="#9a3f86"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-6 3 C-4 -3 4 -3 6 3"
            stroke="#c98abb"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );
    case "rocket":
      return (
        <g transform={t}>
          <path
            d="M0 -10 L3 -6 L1 -5 L4 -1 L1 0 L3 4 L0 3 L0 10 L0 3 L-3 4 L-1 0 L-4 -1 L-1 -5 L-3 -6Z"
            fill="#3d7d34"
            stroke="#3d7d34"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </g>
      );
    case "tuna":
      return (
        <g transform={t}>
          <path d="M-5 -3 C-1 -6 5 -4 5 0 C5 4 -1 5 -4 3 C-7 1 -7 -1 -5 -3Z" fill="#c9a07a" />
          <path d="M-3 -1 L3 1" stroke="#a87e57" strokeWidth="1" strokeLinecap="round" />
        </g>
      );
    case "egg":
      return (
        <g transform={t}>
          <path d="M-14 0 C-14 -10 -2 -14 8 -10 C16 -6 15 8 6 11 C-4 14 -14 9 -14 0Z" fill="#fffaf0" />
          <circle cx="0" cy="0" r="6.5" fill="#f2a71b" />
        </g>
      );
    case "sausage":
      return (
        <g transform={t}>
          <circle r="5.5" fill="#b5653a" />
          <circle r="3.5" fill="#d89466" />
        </g>
      );
    case "speck":
      return (
        <g transform={t}>
          <path d="M-12 -3 C-6 -6 6 -6 12 -3 L11 3 C5 0 -5 0 -11 3Z" fill="#8f2b26" />
          <path
            d="M-11 3 C-5 0 5 0 11 3"
            stroke="#fbe1d6"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );
    case "fries":
      // patatine fritte: bastoncini dorati
      return (
        <g transform={t}>
          <rect
            x="-10"
            y="-2.6"
            width="20"
            height="5.2"
            rx="2"
            fill="#f2c14e"
            stroke="#c98a22"
            strokeWidth="0.8"
          />
          <rect x="-9" y="-1.8" width="18" height="1.6" rx="0.8" fill="#fde49a" />
        </g>
      );
    case "nduja":
      // 'nduja: macchia cremosa rosso scuro con olio arancio, ben distinta dal pomodoro
      return (
        <g transform={t}>
          <path
            d="M-11 -2 C-12 -9 -2 -12 4 -10 C11 -8 13 -1 10 5 C7 11 -2 12 -6 9 C-11 6 -10 2 -11 -2Z"
            fill="#6e1610"
            stroke="#4a0d08"
            strokeWidth="1"
          />
          <path d="M-6 -3 C-6 -7 1 -8 4 -5 C8 -3 7 2 3 4 C-1 5 -6 2 -6 -3Z" fill="#9b2a17" />
          <circle cx="-3" cy="-5" r="1.4" fill="#f39c4a" />
          <circle cx="5" cy="1" r="1.1" fill="#f39c4a" />
          <circle cx="-1" cy="5" r="1" fill="#e07a35" />
        </g>
      );
    case "corn":
      return (
        <g transform={t}>
          <ellipse rx="2.6" ry="2.2" fill="#f7c93b" stroke="#d9a21b" strokeWidth="0.6" />
        </g>
      );
    case "spinach":
      return (
        <g transform={t}>
          <path d="M-9 0 C-9 -7 -2 -9 3 -7 C9 -5 10 2 6 6 C2 9 -6 8 -9 0Z" fill="#2c5a2a" />
          <path d="M-7 1 C-2 -1 3 -2 7 -1" stroke="#4d8a45" strokeWidth="1" fill="none" />
        </g>
      );
    case "ricotta":
      return (
        <g transform={t}>
          <path d="M-8 1 C-9 -5 -3 -8 2 -7 C7 -6 9 -1 7 4 C5 8 -4 8 -8 1Z" fill="#fffdf6" />
          <circle cx="-2" cy="-2" r="1.2" fill="#ece6d6" />
          <circle cx="3" cy="2" r="1" fill="#ece6d6" />
        </g>
      );
    case "anchovy":
      return (
        <g transform={t}>
          <path d="M-12 0 C-6 -3 6 -3 12 0 C6 3 -6 3 -12 0Z" fill="#7a5a43" />
          <path d="M-10 0 L10 0" stroke="#b8977a" strokeWidth="0.8" />
        </g>
      );
    case "capers":
      return (
        <g transform={t}>
          <circle r="2.4" fill="#5f7a2e" />
          <circle cx="-0.7" cy="-0.7" r="0.8" fill="#8fa858" />
        </g>
      );
    case "garlic":
      return (
        <g transform={t}>
          <ellipse rx="3" ry="2.2" fill="#f6efd9" stroke="#d6c79f" strokeWidth="0.6" />
        </g>
      );
    case "chili":
      return (
        <g transform={t}>
          <circle r="2.4" fill="#d1261a" />
          <circle r="1" fill="#f6c76a" />
        </g>
      );
    case "gorgonzola":
      return (
        <g transform={t}>
          <path d="M-8 -1 C-8 -6 -2 -8 3 -7 C8 -5 9 1 6 5 C2 8 -6 7 -8 -1Z" fill="#f4eed8" />
          <path
            d="M-4 -3 L-1 0 L-3 3 M2 -4 L4 -1 M1 2 L4 4"
            stroke="#6f8aa3"
            strokeWidth="1.1"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );
    case "bufala":
      return (
        <g transform={t}>
          <circle r="11" fill="#fffef9" />
          <circle r="11" fill="none" stroke="#efe7d2" strokeWidth="1.2" />
          <ellipse cx="-3" cy="-3" rx="4" ry="2.5" fill="#ffffff" />
        </g>
      );
    case "porcini":
      return (
        <g transform={t}>
          <path
            d="M-9 0 C-9 -8 9 -8 9 0 C9 2 6 2 4 2 L3 8 C3 10 -3 10 -3 8 L-4 2 C-6 2 -9 2 -9 0Z"
            fill="#e8d3ad"
          />
          <path d="M-9 0 C-9 -8 9 -8 9 0 C6 1 -6 1 -9 0Z" fill="#7a4a24" />
        </g>
      );
    case "grana":
      return (
        <g transform={t}>
          <path d="M-4 -2 L4 -3 L3 2 L-3 3Z" fill="#fbecb3" stroke="#e5cf86" strokeWidth="0.5" />
        </g>
      );
    case "radicchio":
      return (
        <g transform={t}>
          <path d="M-10 0 C-10 -7 -2 -9 4 -7 C10 -5 11 2 7 6 C2 10 -7 8 -10 0Z" fill="#7d1f3d" />
          <path
            d="M-7 0 C-3 -2 2 -3 7 -1 M-5 3 C-1 2 3 2 6 3"
            stroke="#f3e3ea"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );
    case "cheese":
      return (
        <g transform={t}>
          <path d="M-9 -2 C-9 -7 -1 -9 4 -7 C9 -5 10 1 7 5 C3 8 -6 7 -9 -2Z" fill="#f6d77a" opacity="0.95" />
          <circle cx="-3" cy="-2" r="1.3" fill="#e9bf4a" />
          <circle cx="3" cy="2" r="1.1" fill="#e9bf4a" />
        </g>
      );
    case "salsiccia":
      return (
        <g transform={t}>
          <path d="M-4 -2 C-4 -5 2 -5 4 -2 C6 1 3 5 -1 4 C-4 3 -5 1 -4 -2Z" fill="#a8593a" />
          <circle cx="0" cy="0" r="1" fill="#d58b65" />
        </g>
      );
    case "potato":
      return (
        <g transform={t}>
          <circle r="7" fill="#f3d68c" />
          <circle r="7" fill="none" stroke="#d9b45b" strokeWidth="1" />
          <circle cx="-2" cy="-2" r="1.5" fill="#fae7b0" />
        </g>
      );
    case "bacon":
      return (
        <g transform={t}>
          <path d="M-12 -3 C-6 -6 6 -1 12 -4 L12 2 C6 5 -6 0 -12 3Z" fill="#c2574b" />
          <path d="M-12 0 C-6 -3 6 2 12 -1" stroke="#f6d6c8" strokeWidth="1.6" fill="none" />
        </g>
      );
    case "rosemary":
      return (
        <g transform={t}>
          <path d="M0 -9 L0 9" stroke="#3e5a2c" strokeWidth="0.8" />
          {[-7, -3.5, 0, 3.5, 7].map((y) => (
            <g key={y}>
              <path d={`M0 ${y} L-3.5 ${y - 2}`} stroke="#4f7a3a" strokeWidth="1.2" strokeLinecap="round" />
              <path d={`M0 ${y} L3.5 ${y - 2}`} stroke="#4f7a3a" strokeWidth="1.2" strokeLinecap="round" />
            </g>
          ))}
        </g>
      );
    case "shrimp":
      return (
        <g transform={t}>
          <path d="M6 -5 C-4 -9 -10 0 -5 6 C-3 8 0 7 0 5 C-4 3 -3 -3 4 -1Z" fill="#f29a7a" />
          <path d="M-6 0 L-3 1 M-4 4 L-1 3" stroke="#fdd3c0" strokeWidth="0.9" strokeLinecap="round" />
        </g>
      );
    case "artichoke":
      return (
        <g transform={t}>
          <path d="M0 -9 C7 -6 8 4 0 9 C-8 4 -7 -6 0 -9Z" fill="#9aa65a" />
          <path d="M0 -6 C4 -3 4 3 0 6 C-4 3 -4 -3 0 -6Z" fill="#d6d48f" />
        </g>
      );
    case "eggplant":
      return (
        <g transform={t}>
          <circle r="8" fill="#4a2a4f" />
          <circle r="6.6" fill="#efe4c4" />
          <circle cx="-2" cy="-1" r="0.8" fill="#bfae7c" />
          <circle cx="2" cy="1" r="0.8" fill="#bfae7c" />
        </g>
      );
    case "cherrytomato":
      return (
        <g transform={t}>
          <circle r="5.5" fill="#e3301f" />
          <circle r="4" fill="#f26b4f" />
          <circle cx="-1.5" cy="-1.5" r="1" fill="#ffd2b8" />
        </g>
      );
    case "salmon":
      return (
        <g transform={t}>
          <path d="M-11 -3 C-5 -7 6 -6 11 -2 L10 3 C5 0 -5 0 -11 3Z" fill="#f08a5d" />
          <path d="M-8 -1 L8 0 M-6 1.5 L6 2" stroke="#ffc7a8" strokeWidth="0.9" />
        </g>
      );
    case "walnut":
      return (
        <g transform={t}>
          <path d="M-4 -3 C-2 -5 2 -5 4 -3 C5 0 4 4 0 4 C-4 4 -5 0 -4 -3Z" fill="#8a5a2b" />
          <path d="M0 -4 L0 4 M-3 0 L3 0" stroke="#5e3b18" strokeWidth="0.7" />
        </g>
      );
    case "asparagus":
      return (
        <g transform={t}>
          <rect x="-11" y="-1.6" width="18" height="3.2" rx="1.6" fill="#6f9a3e" />
          <path d="M7 -2.6 C11 -2.6 12 2.6 7 2.6Z" fill="#4f7a2e" />
        </g>
      );
    case "kebab":
      return (
        <g transform={t}>
          <path d="M-8 -2 C-4 -5 4 -4 8 -2 L7 2 C3 4 -4 4 -7 2Z" fill="#9a5a34" />
          <path d="M-6 -1 L6 0" stroke="#c98a5e" strokeWidth="0.9" />
        </g>
      );
    case "zucchini":
      return (
        <g transform={t}>
          <circle r="7.5" fill="#3f7a35" />
          <circle r="5.8" fill="#e6e7a8" />
          <circle r="1.6" fill="#c9cc7d" />
        </g>
      );
    default:
      return null;
  }
}

export function PizzaArt({
  toppings = ["tomato", "mozzarella"],
  seed = "pizza",
  className,
  title,
  size,
}: PizzaArtProps) {
  const h = hash(seed + toppings.join());
  const rand = rng(h);
  const id = `pz${h.toString(36)}`;
  const hasSauce = toppings.includes("tomato");
  const isNutella = toppings.includes("nutella");
  const hasCheese = toppings.includes("mozzarella") || (!hasSauce && !isNutella);

  const taken: Spot[] = [];

  // Bruciature del cornicione
  const char = Array.from({ length: 14 }, () => {
    const a = rand() * Math.PI * 2;
    const d = 88 + rand() * 6;
    return {
      x: r1(100 + Math.cos(a) * d),
      y: r1(100 + Math.sin(a) * d),
      r: r1(1.5 + rand() * 3),
    };
  });

  // Mozzarella
  const cheese = hasCheese
    ? Array.from({ length: hasSauce ? 9 : 16 }, () => {
        const a = rand() * Math.PI * 2;
        const d = Math.sqrt(rand()) * 62;
        return {
          x: r1(100 + Math.cos(a) * d),
          y: r1(100 + Math.sin(a) * d),
          rx: r1(10 + rand() * 9),
          ry: r1(8 + rand() * 7),
          rot: Math.round(rand() * 180),
        };
      })
    : [];

  // Ingredienti: prima i grandi, poi i piccoli
  const order: Topping[] = [
    "egg",
    "bufala",
    "nduja",
    "potato",
    "eggplant",
    "spinach",
    "radicchio",
    "ricotta",
    "gorgonzola",
    "cheese",
    "ham",
    "speck",
    "bacon",
    "salmon",
    "salami",
    "kebab",
    "mushroom",
    "porcini",
    "artichoke",
    "zucchini",
    "asparagus",
    "shrimp",
    "anchovy",
    "basil",
    "pepper",
    "onion",
    "sausage",
    "salsiccia",
    "cherrytomato",
    "tuna",
    "olive",
    "capers",
    "corn",
    "garlic",
    "chili",
    "walnut",
    "grana",
    "rosemary",
    "rocket",
    "fries",
  ];
  const layers = order
    .filter((tp) => toppings.includes(tp))
    .map((tp) => ({
      type: tp,
      spots:
        tp === "egg"
          ? [{ x: 100, y: 100, rot: Math.round(rand() * 360), s: 1.4 }]
          : scatter(rand, counts[tp] ?? 6, 66, taken, small.has(tp) ? 9 : 17),
    }));

  // Origano (o zucchero a velo sulla pizza alla Nutella)
  const herbs = Array.from({ length: isNutella ? 60 : 26 }, () => {
    const a = rand() * Math.PI * 2;
    const d = Math.sqrt(rand()) * 76;
    return { x: r1(100 + Math.cos(a) * d), y: r1(100 + Math.sin(a) * d) };
  });

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <radialGradient id={`${id}-crust`} cx="50%" cy="45%" r="55%">
          <stop offset="70%" stopColor="#f2c06d" />
          <stop offset="88%" stopColor="#e0a346" />
          <stop offset="100%" stopColor="#b77a24" />
        </radialGradient>
        <radialGradient id={`${id}-sauce`} cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor={isNutella ? "#7a4422" : hasSauce ? "#e0452c" : "#fff2d1"} />
          <stop offset="100%" stopColor={isNutella ? "#4a2412" : hasSauce ? "#b72a17" : "#f3d9a2"} />
        </radialGradient>
        <radialGradient id={`${id}-shine`} cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="97" fill={`url(#${id}-crust)`} />
      {char.map((c, i) => (
        <circle key={i} cx={c.x} cy={c.y} r={c.r} fill="#6b3d12" opacity="0.55" />
      ))}
      <circle cx="100" cy="100" r="82" fill={`url(#${id}-sauce)`} />

      {cheese.map((c, i) => (
        <ellipse
          key={i}
          cx={c.x}
          cy={c.y}
          rx={c.rx}
          ry={c.ry}
          transform={`rotate(${c.rot} ${c.x} ${c.y})`}
          fill="#fdf1c9"
          opacity="0.95"
        />
      ))}

      {layers.map((l) =>
        l.spots.map((s, i) => <ToppingShape key={`${l.type}${i}`} type={l.type} spot={s} />),
      )}

      {herbs.map((p, i) =>
        isNutella ? (
          // zucchero a velo
          <circle key={i} cx={p.x} cy={p.y} r="1.4" fill="#fffaf1" opacity="0.85" />
        ) : (
          // origano
          <circle key={i} cx={p.x} cy={p.y} r="0.9" fill="#3b5a2a" opacity="0.7" />
        ),
      )}

      <circle cx="100" cy="100" r="82" fill={`url(#${id}-shine)`} />
    </svg>
  );
}
