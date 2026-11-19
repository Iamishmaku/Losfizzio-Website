# Lo Sfizio · Sito web

Sito della pizzeria **Lo Sfizio** in piazza a Dro (TN). È un sito statico in Next.js, pronto per Vercel.

## Stack

| Cosa | Libreria |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, tutte le pagine prerenderizzate) + React 19 + TypeScript |
| Stili | [Sass](https://sass-lang.com) con CSS Modules (`*.module.scss`) + variabili/mixin in `src/styles/_abstracts.scss` |
| Animazioni | [Framer Motion](https://motion.dev): parallax, comparse allo scroll, transizioni di tab e form |
| Componenti UI | [Radix UI](https://www.radix-ui.com) (Dialog, Tabs, Accordion, Tooltip, Dropdown Menu): accessibili e senza stile, stilizzati in Sass |
| Carosello | [Embla Carousel](https://www.embla-carousel.com) + autoplay |
| Scroll fluido | [Lenis](https://lenis.darkroom.engineering) (si disattiva se l'utente preferisce meno animazioni) |
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

## Chiusure straordinarie

Per ferie o chiusure, aggiungi le date in `closures` in `src/data/site.ts` (formato `AAAA-MM-GG`, estremi inclusi).
Durante la chiusura il sito mostra un avviso su tutte le pagine, il badge "Chiuso · riapre …" e un riquadro negli orari;
il giorno della riapertura gli avvisi spariscono da soli.

## Pagina 404

Ogni indirizzo inesistente porta a `/404`. L'elenco delle pagine esistenti è in `src/proxy.ts` (`PAGES`):
se si aggiunge una pagina nuova in `src/app/[lang]`, va aggiunta anche lì.

## Lingue e tema

- **Lingue:** italiano, inglese e tedesco, con indirizzi separati (`/it`, `/en`, `/de`), tutti statici.
  Chi apre `/` viene mandato nella sua lingua: prima conta quella scelta in precedenza sul sito (cookie),
  poi la lingua del browser/sistema. Per le altre lingue (francese, olandese…) si usa l'inglese,
  per i motori di ricerca l'italiano. Lo fa `src/proxy.ts`.
- **Tema chiaro/scuro:** segue il sistema operativo. Si cambia in qualsiasi momento dall'header
  (icona schermo/sole/luna: Automatico, Chiaro, Scuro) e la scelta resta salvata nel browser.
- Anche la lingua si cambia dall'header (icona globo con la sigla: IT, EN, DE).

## Dove modificare i contenuti

Tutti i contenuti stanno in pochi file. Modificandoli si aggiornano le pagine, il SEO e i dati strutturati per Google.

- `src/data/site.ts`: indirizzo, telefono, WhatsApp, e-mail, social, **orari**
- `src/data/menu.ts`: categorie, piatti, prezzi, etichette (vegetariana, piccante…), ingredienti per il disegno della pizza
  e pizze in evidenza. Ogni testo è scritto come `l("italiano", "english", "deutsch")`
- `src/i18n/dictionaries/it.ts`, `en.ts`, `de.ts`: tutti i testi del sito nelle tre lingue (comprese le FAQ).
  Le parti tra `*asterischi*` vengono evidenziate in rosso

### ⚠️ Da verificare prima di andare online

I dati reali della pizzeria non erano disponibili, quindi alcuni valori sono **segnaposto**. Sono tutti marcati con `DA VERIFICARE`:

- [x] Nome: "Lo Sfizio" (confermato)
- [x] Indirizzo: Piazza Repubblica 15, 38074 Dro (TN)
- [x] Numero di telefono e WhatsApp: `388 907 7320` (su WhatsApp solo chiamate, niente messaggi)
- [x] E-mail: non c'è (resta nascosta)
- [x] Orario invernale: lun–ven 11:30–14:00 e 17:30–22:30, sab–dom 11:30–22:30
- [x] Orario estivo: tutti i giorni 11:30–22:30
- [x] Orario estivo dal 1 aprile al 30 settembre (`summer` in `src/data/site.ts`): il sito cambia orario da solo
- [x] Menu dal menu cartaceo (novembre 2026), tradotto in inglese e tedesco
- [ ] Prezzi mancanti: pizza Salamino & gorgonzola, Peperoni & gorgonzola, Senza glutine, Con Nutella (ora "prezzo su richiesta")
- [x] Risposte delle FAQ: carta sì, pizza senza glutine sì, prenotazione non obbligatoria
- [x] Instagram (@losfiziodro) e Facebook
- [x] Privacy riscritta su misura (niente account, moduli o statistiche; un solo cookie tecnico per la lingua)
- [x] Impresa: Ishmaku Sauela (Registro Imprese, Piazza Repubblica 15, Dro)
- [ ] Partita IVA (`legal.vatNumber` in `src/data/site.ts`): obbligatoria per legge, compare in fondo alla pagina e nella privacy

### Ordini e prenotazioni

Sul sito non ci sono prenotazioni né ordini online: la sezione "Ordina da asporto" spiega come ordinare per telefono.
Con `contacts.whatsapp` compilato in `src/data/site.ts` compare il pulsante "Chiamaci su WhatsApp" (solo chiamate, niente messaggi): apre la chat e il cliente tocca l'icona del telefono.

## Deploy su Vercel

Il progetto Vercel **losfizzio-website-884e** è collegato a GitHub: ogni modifica salvata sul repository viene pubblicata da sola.

- Indirizzo principale: `https://www.losfiziodro.it` (predefinito nel codice, non servono variabili d'ambiente).
  Per cambiarlo si può creare su Vercel la variabile `NEXT_PUBLIC_SITE_URL`, di tipo *Config*.
- Dominio **losfiziodro.it** comprato su Register.it, con i DNS gestiti da **Cloudflare**
  (nameserver `konnor.ns.cloudflare.com` e `walk.ns.cloudflare.com`). Record su Cloudflare, con proxy disattivato
  (nuvoletta grigia, "DNS only"):
  - **A** `@` → `216.198.79.1`
  - **CNAME** `www` → `5fded2d005e45dd1.vercel-dns-017.com`
- Su Vercel (*Settings → Domains*) `losfiziodro.it` rimanda con un redirect a `www.losfiziodro.it`.

## Struttura

```
src/
  app/[lang]/          pagine in ogni lingua (home, /menu, /privacy, 404) e immagine Open Graph
  app/                 sitemap, robots, manifest, icone, 404 globale
  i18n/                lingue disponibili, dizionari dei testi, rilevamento della lingua
  proxy.ts             reindirizza "/" alla lingua del visitatore
  components/
    layout/            Header (menu mobile, scelta lingua e tema) e Footer
    sections/          sezioni della home (Hero, Chi siamo, Pizze in evidenza, Menu, Orari e mappa, FAQ, Ordina da asporto)
    menu/              menu completo con ricerca e filtri
    ui/                componenti riutilizzabili (Button, Reveal, PizzaArt, OpenStatus…)
    providers/         Lenis, MotionConfig, Tooltip
    seo/               dati strutturati JSON-LD (schema.org Restaurant)
  data/                contenuti modificabili
  lib/                 calcolo orari e stato "aperto/chiuso" sul fuso di Roma
  styles/              Sass globale, variabili e mixin
```

### Immagini

Le pizze sono illustrazioni SVG generate dal codice (`PizzaArt`) a partire dagli ingredienti, così il sito è completo anche senza foto.
Per usare le foto vere mettile in `public/images/menu/` e aggiungi `image: "/images/menu/nome.jpg"` al piatto in `src/data/menu.ts` (istruzioni in `public/images/menu/LEGGIMI.md`).

### Privacy

Il sito non usa cookie di profilazione né strumenti di analisi: salva solo la lingua scelta (cookie tecnico) e il tema (memoria del browser). La mappa di Google si carica solo quando l'utente la richiede.
