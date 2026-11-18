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
};

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
  const hasCheese = toppings.includes("mozzarella") || !hasSauce;

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
    "ham",
    "speck",
    "salami",
    "mushroom",
    "zucchini",
    "basil",
    "pepper",
    "onion",
    "sausage",
    "tuna",
    "olive",
    "rocket",
  ];
  const layers = order
    .filter((tp) => toppings.includes(tp))
    .map((tp) => ({
      type: tp,
      spots:
        tp === "egg"
          ? [{ x: 100, y: 100, rot: Math.round(rand() * 360), s: 1.4 }]
          : scatter(rand, counts[tp] ?? 6, 66, taken, tp === "olive" || tp === "tuna" ? 11 : 18),
    }));

  // Origano
  const herbs = Array.from({ length: 26 }, () => {
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
          <stop offset="0%" stopColor={hasSauce ? "#e0452c" : "#fff2d1"} />
          <stop offset="100%" stopColor={hasSauce ? "#b72a17" : "#f3d9a2"} />
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

      {herbs.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="0.9" fill="#3b5a2a" opacity="0.7" />
      ))}

      <circle cx="100" cy="100" r="82" fill={`url(#${id}-shine)`} />
    </svg>
  );
}
