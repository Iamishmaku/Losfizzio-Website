import { dayOrder, fullAddress, site, type DayKey } from "@/data/site";
import { formatPrice, menu } from "@/data/menu";
import { partnerAddress, partners } from "@/data/partners";
import { it } from "@/i18n/dictionaries/it";
import { locales } from "@/i18n/config";
import { BUILD_DATE } from "@/lib/build-date";
import { dateKeyInRome, slotLines, weekHours } from "@/lib/hours";

/**
 * /llms.txt: descrizione del sito in Markdown per gli assistenti AI (standard llmstxt.org).
 * Generato dai dati del sito, quindi resta aggiornato da solo a ogni pubblicazione.
 */
function hoursBlock(season: "winter" | "summer") {
  const hours = weekHours(season);
  return dayOrder
    .map((d: DayKey) => `- ${it.days[d]}: ${slotLines(hours[d], it.status.closed).join(", ")}`)
    .join("\n");
}

function build() {
  const url = site.url;
  const page = (path: string) => locales.map((l) => `[${l.toUpperCase()}](${url}/${l}${path})`).join(" · ");
  const fmtDate = (md: string) => {
    const [m, d] = md.split("-").map(Number);
    return `${d}/${m}`;
  };
  const today = dateKeyInRome(BUILD_DATE);
  const closures = site.closures
    .filter((c) => c.to >= today)
    .map((c) => `- Chiusura straordinaria dal ${c.from} al ${c.to} (compresi)`)
    .join("\n");

  const menuText = menu
    .map((c) => {
      const items = c.items
        .map((i) => {
          const price = formatPrice(i.price, "it") ?? "prezzo su richiesta";
          const desc = i.description ? ` — ${i.description.it}` : "";
          return `- ${i.name.it}: ${price}${desc}`;
        })
        .join("\n");
      const note = c.note ? `\n\n${c.note.it}` : "";
      return `### ${c.title.it}\n\n${items}${note}`;
    })
    .join("\n\n");

  const partnersText = partners
    .map((p) => {
      const lines = [
        `### ${p.name} · ${p.category.it}`,
        "",
        p.description.it,
        "",
        `- Servizi: ${p.services.map((s) => s.it).join("; ")}`,
        ...(partnerAddress(p) ? [`- Indirizzo: ${partnerAddress(p)}`] : []),
        ...(p.hours ? [`- Orari: ${p.hours.it}`] : []),
        ...(p.phone ? [`- Telefono: ${p.phone.display} (${p.phone.tel})`] : []),
        ...(p.email ? [`- E-mail: ${p.email}`] : []),
        ...(p.website ? [`- Sito web: ${p.website}`] : []),
        ...(p.instagram ? [`- Instagram: ${p.instagram}`] : []),
        ...(p.facebook ? [`- Facebook: ${p.facebook}`] : []),
      ];
      return lines.join("\n");
    })
    .join("\n\n");

  return `# ${site.name} · Pizzeria a Dro (TN)

> ${it.meta.description}

Pizzeria, kebab, bar e caffè in ${fullAddress}, Trentino (Valle del Sarca, vicino ad Arco e Riva del Garda).
Il sito è disponibile in italiano, inglese e tedesco.

## Informazioni essenziali

- Indirizzo: ${fullAddress}
- Telefono: ${site.contacts.phoneDisplay} (${site.contacts.phone})
- WhatsApp: ${site.contacts.phoneDisplay}, solo chiamate (non rispondiamo ai messaggi)
- Asporto: sì, ordinando al telefono. Consegna a domicilio: no
- Tavoli all'aperto in piazza. Prenotazione non obbligatoria
- Pizza senza glutine disponibile
- Pagamenti: carta o contanti
- Servizio al tavolo: 1,50 €
- Instagram: ${site.social.instagram}
- Facebook: ${site.social.facebook}

## Orari

Orario estivo (dal ${fmtDate(site.summer.from)} al ${fmtDate(site.summer.to)}):

${hoursBlock("summer")}

Orario invernale (il resto dell'anno):

${hoursBlock("winter")}
${closures ? `\n${closures}\n` : ""}
## Pagine

- Home: ${page("")}
- Menu completo: ${page("/menu")}
- Cosa fare a Dro, aziende amiche e partner: ${page("/partners")}
- Privacy: ${page("/privacy")}

## Cosa fare a Dro: aziende amiche e partner

Attività di Dro e della Valle del Sarca con cui collaboriamo e che consigliamo a chi viene a trovarci
(dettagli in ${site.url}/it/partners):

${partnersText}

## Menu (prezzi in euro)

Alcuni prodotti possono essere surgelati. Allergeni: chiedere al personale.

${menuText}
`;
}

export function GET() {
  return new Response(build(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
