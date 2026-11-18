# Lo Sfizio · Sito web

Sito della pizzeria **Lo Sfizio** in piazza a Dro (TN). È un sito statico in Next.js, pronto per Vercel.

## Stack

| Cosa | Libreria |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, tutte le pagine prerenderizzate) + React 19 + TypeScript |
| Stili | [Sass](https://sass-lang.com) con CSS Modules (`*.module.scss`) + variabili/mixin in `src/styles/_abstracts.scss` |
| Animazioni | [Framer Motion](https://motion.dev): parallax, comparse allo scroll, transizioni di tab e form |
| Componenti UI | [Radix UI](https://www.radix-ui.com) (Dialog, Tabs, Accordion, Tooltip): accessibili e senza stile, stilizzati in Sass |
| Carosello | [Embla Carousel](https://www.embla-carousel.com) + autoplay |
| Scroll fluido | [Lenis](https://lenis.darkroom.engineering) (si disattiva se l'utente preferisce meno animazioni) |
| Form | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| Notifiche | [Sonner](https://sonner.emilkowal.ski) |
| Icone | [Lucide](https://lucide.dev) |
| Font | Fraunces + Manrope, ospitati nel progetto (`src/fonts`, licenza OFL) |

## Comandi

```bash
npm install
npm run dev        # sviluppo su http://localhost:3000
npm run build      # build di produzione
npm start          # avvia la build
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run format     # Prettier
```

Serve Node.js 20.9 o superiore.

## Dove modificare i contenuti

Tutti i contenuti stanno in tre file. Modificandoli si aggiornano le pagine, il SEO e i dati strutturati per Google.

- `src/data/site.ts`: nome, indirizzo, telefono, WhatsApp, e-mail, social, **orari**
- `src/data/menu.ts`: categorie, piatti, prezzi, etichette (vegetariana, piccante…) e pizze in evidenza
- `src/data/faq.ts`: domande frequenti

### ⚠️ Da verificare prima di andare online

I dati reali della pizzeria non erano disponibili, quindi alcuni valori sono **segnaposto**. Sono tutti marcati con `DA VERIFICARE`:

- [ ] Nome esatto dell'attività (ora: "Lo Sfizio")
- [ ] Indirizzo (ora: Piazza Repubblica 15, Dro, da elenchi online) e coordinate
- [ ] Numero di telefono (ora: `388 907 7320`, da elenchi online; un elenco riporta `388 907 7920`)
- [ ] WhatsApp ed e-mail (ora vuoti: se li compili, il form invia la richiesta su WhatsApp o per e-mail)
- [ ] Orari di apertura (ora: orario continuato, da RestaurantGuru)
- [ ] Menu e prezzi (ora: esempio realistico)
- [ ] Risposte delle FAQ (pagamenti, senza glutine…)
- [ ] Link Instagram e Facebook (vuoti = icone nascoste)
- [ ] Testo della pagina Privacy

### Come funziona il modulo "Prenota o ordina"

Il sito è statico e non ha un backend: il modulo prepara il messaggio e lo invia nel primo canale configurato, in questo ordine:

1. WhatsApp (`contacts.whatsapp`)
2. e-mail (`contacts.email`)
3. nessuno dei due: copia il messaggio negli appunti e invita a telefonare

## Deploy su Vercel

1. Importa il repository su [vercel.com/new](https://vercel.com/new): Next.js viene riconosciuto in automatico, non serve configurare nulla.
2. In *Settings → Environment Variables* imposta `NEXT_PUBLIC_SITE_URL` con il dominio definitivo (es. `https://www.losfizio-dro.it`). Vedi `.env.example`.
3. Collega il dominio in *Settings → Domains*.

## Struttura

```
src/
  app/                 pagine (home, /menu, /privacy, 404), sitemap, robots, manifest, icone e immagine Open Graph
  components/
    layout/            Header (con menu mobile) e Footer
    sections/          sezioni della home (Hero, Chi siamo, Pizze in evidenza, Menu, Orari e mappa, FAQ, Contatti)
    menu/              menu completo con ricerca e filtri
    ui/                componenti riutilizzabili (Button, Reveal, PizzaArt, OpenStatus…)
    providers/         Lenis, MotionConfig, Tooltip, Toaster
    seo/               dati strutturati JSON-LD (schema.org Restaurant)
  data/                contenuti modificabili
  lib/                 calcolo orari e stato "aperto/chiuso" sul fuso di Roma
  styles/              Sass globale, variabili e mixin
```

### Immagini

Le pizze sono illustrazioni SVG generate dal codice (`PizzaArt`) a partire dagli ingredienti, così il sito è completo anche senza foto.
Per usare le foto vere mettile in `public/images/menu/` e aggiungi `image: "/images/menu/nome.jpg"` al piatto in `src/data/menu.ts` (istruzioni in `public/images/menu/LEGGIMI.md`).

### Privacy

Il sito non usa cookie né strumenti di analisi. La mappa di Google si carica solo quando l'utente la richiede.
