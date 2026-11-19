/**
 * Traduzioni in polacco (pl), slovacco (sk) e ceco (cs) dei testi del menu e delle aziende amiche.
 * La chiave è il testo italiano usato in `l("italiano", ...)` (src/data/menu.ts e src/data/partners.ts).
 * Se un testo manca qui, il sito usa la versione inglese (o quella italiana, per i nomi delle pizze).
 *
 * ⚠️ Traduzioni non fatte da madrelingua: conviene farle rileggere.
 */

type Phrases = Record<string, string>;

export const pl: Phrases = {
  // Categorie
  Pizze: "Pizze",
  "Tutte cotte al momento. Disponibile anche la pizza senza glutine.":
    "Wszystkie pieczone na zamówienie. Dostępna również pizza bezglutenowa.",
  "Primi piatti": "Makarony",
  "Insalate e antipasti": "Sałatki i przystawki",
  "Piadine tradizionali": "Tradycyjne piadiny",
  "La piadina romagnola, farcita al momento.": "Włoski placek piadina, nadziewany na zamówienie.",
  "Kebab ed extra": "Kebab i inne",
  "Aggiunte all'insalata: mozzarella 3,00 € · mozzarella di bufala 4,00 € · funghi champignon 2,00 € · carciofi 2,00 € · grana 4,00 € · leerdammer 3,00 € · olive nere 2,40 € · uovo 2,40 €":
    "Dodatki do sałatki: mozzarella 3,00 € · mozzarella z mleka bawolego 4,00 € · pieczarki 2,00 € · karczochy 2,00 € · grana 4,00 € · leerdammer 3,00 € · czarne oliwki 2,40 € · jajko 2,40 €",

  // Pizze: nomi tradotti
  "Panna, prosciutto & mais": "Śmietana, szynka i kukurydza",
  "Salamino piccante": "Pikantne salami",
  "Al prosciutto": "Z szynką",
  "Braccio di ferro": "Popeye",
  "Al gorgonzola": "Gorgonzola",
  "Al crudo": "Z szynką dojrzewającą",
  "Con speck": "Ze speckiem",
  Bufalina: "Z mozzarellą bawolą",
  "Alla romana": "Romana",
  "Porcini & grana": "Borowiki i grana",
  "Al tonno": "Z tuńczykiem",
  "Tonno & cipolla": "Tuńczyk i cebula",
  "Prosciutto & funghi": "Szynka i pieczarki",
  "Radicchio & taleggio": "Radicchio i taleggio",
  "Al bacon": "Z boczkiem",
  "Gamberi & rucola": "Krewetki i rukola",
  "Con verdura": "Z warzywami",
  "Alla montanara": "Montanara",
  "4 formaggi": "4 sery",
  Nizzarda: "Nicejska",
  "Provola & speck": "Provola i speck",
  Siciliana: "Sycylijska",
  Sostanziosa: "Sycąca",
  Norvegese: "Norweska",
  Noci: "Z orzechami",
  Bianca: "Biała",
  "Con patate fritte": "Z frytkami",
  "Con kebab": "Z kebabem",
  "Salamino & gorgonzola": "Pikantne salami i gorgonzola",
  "Peperoni & gorgonzola": "Papryka i gorgonzola",
  "Pizza senza glutine": "Pizza bezglutenowa",
  "Con Nutella": "Z Nutellą",

  // Pizze: ingredienti
  "Pomodoro, mozzarella": "Pomidory, mozzarella",
  "Mozzarella, aglio, peperoncino": "Mozzarella, czosnek, chili",
  "Pomodoro, mozzarella, panna, prosciutto, mais": "Pomidory, mozzarella, śmietana, szynka, kukurydza",
  "Pomodoro, mozzarella, salamino piccante, peperoni": "Pomidory, mozzarella, pikantne salami, papryka",
  "Pomodoro, mozzarella, salamino piccante": "Pomidory, mozzarella, pikantne salami",
  "Pomodoro, mozzarella, prosciutto cotto": "Pomidory, mozzarella, szynka gotowana",
  "Pomodoro, mozzarella, würstel": "Pomidory, mozzarella, parówki",
  "Pomodoro, mozzarella, ricotta, spinaci": "Pomidory, mozzarella, ricotta, szpinak",
  "Pomodoro, mozzarella, capperi, acciuga": "Pomidory, mozzarella, kapary, anchois",
  "Pomodoro, mozzarella, gorgonzola": "Pomidory, mozzarella, gorgonzola",
  "Pomodoro, mozzarella, prosciutto crudo": "Pomidory, mozzarella, szynka dojrzewająca (prosciutto crudo)",
  "Pomodoro, mozzarella, speck": "Pomidory, mozzarella, speck",
  "Pomodoro, mozzarella di bufala, rucola": "Pomidory, mozzarella z mleka bawolego, rukola",
  "Pomodoro, mozzarella, acciuga, capperi, olive": "Pomidory, mozzarella, anchois, kapary, oliwki",
  "Pomodoro, mozzarella, funghi porcini, grana": "Pomidory, mozzarella, borowiki, ser grana",
  "Pomodoro, mozzarella, tonno": "Pomidory, mozzarella, tuńczyk",
  "Pomodoro, mozzarella, tonno, cipolla": "Pomidory, mozzarella, tuńczyk, cebula",
  "Pomodoro, mozzarella, prosciutto, funghi champignon": "Pomidory, mozzarella, szynka, pieczarki",
  "Pomodoro, mozzarella, radicchio, taleggio": "Pomidory, mozzarella, radicchio, ser taleggio",
  "Pomodoro, mozzarella, salsiccia, patate lesse":
    "Pomidory, mozzarella, świeża kiełbasa, gotowane ziemniaki",
  "Mozzarella, bacon, patate lesse, rosmarino": "Mozzarella, boczek, gotowane ziemniaki, rozmaryn",
  "Pomodoro, mozzarella, gamberi, rucola": "Pomidory, mozzarella, krewetki, rukola",
  "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi":
    "Pomidory, mozzarella, szynka gotowana, pieczarki, karczochy",
  "Pomodoro, mozzarella, verdura mista": "Pomidory, mozzarella, mieszane warzywa",
  "Pomodoro, mozzarella, funghi, salsiccia trentina": "Pomidory, mozzarella, pieczarki, kiełbasa z Trydentu",
  "Pomodoro, mozzarella, salamino, gorgonzola, porcini": "Pomidory, mozzarella, salami, gorgonzola, borowiki",
  "Pomodoro, mozzarella, 4 formaggi misti": "Pomidory, mozzarella, cztery rodzaje sera",
  "Pomodoro, mozzarella, radicchio, gorgonzola, speck": "Pomidory, mozzarella, radicchio, gorgonzola, speck",
  "Pomodoro, mozzarella di bufala, rucola, pachino, crudo":
    "Pomidory, mozzarella z mleka bawolego, rukola, pomidorki koktajlowe, szynka dojrzewająca",
  "Pomodoro, mozzarella, cipolla, olive, capperi": "Pomidory, mozzarella, cebula, oliwki, kapary",
  "Pomodoro, mozzarella, melanzana, parmigiano grattugiato": "Pomidory, mozzarella, bakłażan, tarty parmezan",
  "Pomodoro, mozzarella a fette, basilico, pomodorini":
    "Pomidory, mozzarella w plastrach, bazylia, pomidorki koktajlowe",
  "Pomodoro, mozzarella, radicchio, gorgonzola": "Pomidory, mozzarella, radicchio, gorgonzola",
  "Pomodoro, mozzarella, crudo, rucola, pomodorini":
    "Pomidory, mozzarella, szynka dojrzewająca, rukola, pomidorki koktajlowe",
  "Pomodoro, mozzarella, provola piccante, speck": "Pomidory, mozzarella, pikantny ser provola, speck",
  "Pomodoro, mozzarella, cipolla": "Pomidory, mozzarella, cebula",
  "Pomodoro, mozzarella, capperi, olive": "Pomidory, mozzarella, kapary, oliwki",
  "Pomodoro, mozzarella, salamino piccante, gorgonzola, asparagi, aglio":
    "Pomidory, mozzarella, pikantne salami, gorgonzola, szparagi, czosnek",
  "Pomodoro, mozzarella, salsiccia trentina": "Pomidory, mozzarella, kiełbasa z Trydentu",
  "Pomodoro, mozzarella, salsiccia, peperoni, olive nere, cipolla":
    "Pomidory, mozzarella, kiełbasa, papryka, czarne oliwki, cebula",
  "Pomodoro, mozzarella, salamino piccante, gorgonzola, cipolla":
    "Pomidory, mozzarella, pikantne salami, gorgonzola, cebula",
  "Pomodoro, mozzarella, salmone norvegese, rucola": "Pomidory, mozzarella, łosoś norweski, rukola",
  "Pomodoro, mozzarella, peperoni": "Pomidory, mozzarella, papryka",
  "Margherita, salamino piccante, funghi, carciofi, peperoni, uovo":
    "Margherita, pikantne salami, pieczarki, karczochy, papryka, jajko",
  "Mozzarella, gorgonzola, noci": "Mozzarella, gorgonzola, orzechy włoskie",
  "Mozzarella, pancetta, asparagi, taleggio": "Mozzarella, boczek, szparagi, ser taleggio",
  "Pomodoro, mozzarella, salame piccante, salsiccia trentina, peperoni":
    "Pomidory, mozzarella, pikantne salami, kiełbasa z Trydentu, papryka",
  "Pomodoro, mozzarella, pancetta, uovo, parmigiano grattugiato":
    "Pomidory, mozzarella, boczek, jajko, tarty parmezan",
  "Margherita, patate fritte": "Margherita, frytki",
  "Pomodoro, mozzarella, formaggio bianco, olive nere, origano":
    "Pomidory, mozzarella, biały ser, czarne oliwki, oregano",
  "Margherita, prosciutto cotto, würstel, gorgonzola, cipolla":
    "Margherita, szynka gotowana, parówki, gorgonzola, cebula",
  "Pomodoro, mozzarella, prosciutto cotto, würstel, edamer":
    "Pomidory, mozzarella, szynka gotowana, parówki, ser edamski",
  "Pomodoro, mozzarella, carne di kebab": "Pomidory, mozzarella, mięso kebab",
  "Calabrese, salamino piccante, taleggio, zucchine a julienne":
    "Calabrese, pikantne salami, ser taleggio, cukinia w paski",
  "Calabrese, salamino piccante, acciughe, pomodorini ciliegia":
    "Calabrese, pikantne salami, anchois, pomidorki koktajlowe",
  "Pomodoro, mozzarella, salamino piccante, gorgonzola": "Pomidory, mozzarella, pikantne salami, gorgonzola",
  "Pomodoro, mozzarella, peperoni, gorgonzola": "Pomidory, mozzarella, papryka, gorgonzola",
  "La pizza che preferisci, con impasto senza glutine": "Twoja ulubiona pizza na cieście bezglutenowym",
  "Focaccia, Nutella, zucchero a velo": "Focaccia, Nutella, cukier puder",

  // Primi piatti
  "Spaghetti al pomodoro": "Spaghetti z sosem pomidorowym",
  "Spaghetti alla bolognese": "Spaghetti bolognese",
  "Spaghetti aglio, olio e peperoncino": "Spaghetti z czosnkiem, oliwą i chili",
  "Spaghetti alla carbonara": "Spaghetti carbonara",
  "Penne al pomodoro": "Penne z sosem pomidorowym",
  "Penne alla bolognese": "Penne bolognese",
  "Penne all'arrabbiata": "Penne arrabbiata (pikantne)",
  "Tortellini alla bolognese": "Tortellini bolognese",
  "Tortellini ricotta e spinaci al burro e salvia": "Tortellini z ricottą i szpinakiem, z masłem i szałwią",
  "Tortellini panna e prosciutto": "Tortellini ze śmietaną i szynką",
  "Lasagne alla bolognese": "Lasagne bolognese",
  "Tagliatelle fatte in casa": "Domowe tagliatelle",
  "Pasta al burro": "Makaron z masłem",

  // Insalate e antipasti
  "Insalata mista piccola": "Mała sałatka mieszana",
  "Insalatona mista": "Duża sałatka mieszana",
  "Insalata verde, carote, rucola, radicchio, pomodoro, cappuccio, mais":
    "Zielona sałata, marchew, rukola, radicchio, pomidor, kapusta, kukurydza",
  Contorno: "Dodatek",
  "Prosciutto crudo & melone": "Szynka dojrzewająca z melonem",
  "Affettato misto": "Deska wędlin",
  "Prosciutto crudo, speck, salame piccante, salame dolce, bresaola, formaggio grana":
    "Szynka dojrzewająca, speck, pikantne salami, łagodne salami, bresaola, ser grana",

  // Piadine
  "Bresaola, rucola & grana": "Bresaola, rukola i grana",
  "Cotto, mozzarella & funghi": "Szynka, mozzarella i pieczarki",
  "Speck, provola & pomodoro": "Speck, provola i pomidor",
  "Crudo, mozzarella & pomodoro": "Szynka dojrzewająca, mozzarella i pomidor",
  "Cotto & edamer": "Szynka i ser edamski",
  "Crudo & taleggio": "Szynka dojrzewająca i taleggio",
  "Cotto, mozzarella & carciofi": "Szynka, mozzarella i karczochy",
  "Speck & gorgonzola": "Speck i gorgonzola",

  // Kebab ed extra
  "Panino kebab": "Kebab w bułce",
  "Piadina kebab": "Kebab w placku",
  "Patatine fritte": "Frytki",
  "Panini farciti": "Kanapki",
  "Cotoletta con patate": "Kotlet panierowany z frytkami",
  "Würstel con patate": "Parówki z frytkami",
  "Trancio margherita": "Kawałek pizzy margherita",
  "Trancio di pizza farcito": "Kawałek pizzy z dodatkami",

  // Aziende amiche
  "Noleggio e riparazione bici": "Wypożyczalnia i serwis rowerów",
  "I nostri vicini di Dro: noleggiano e-bike e bici classiche per scoprire il Lago di Garda e le valli intorno e riparano qualsiasi due ruote. Dopo la pedalata, una pizza in piazza ci sta sempre.":
    "Nasi sąsiedzi z Dro: wypożyczają rowery elektryczne i klasyczne, by odkrywać Jezioro Garda i okoliczne doliny, i naprawiają wszystko na dwóch kółkach. Po przejażdżce pizza na placu zawsze smakuje najlepiej.",
  "Noleggio e-bike Flyer": "Wypożyczalnia e-bike'ów Flyer",
  "Noleggio bici classiche": "Wypożyczalnia rowerów klasycznych",
  "Riparazione di e-bike, bici e monopattini": "Naprawa e-bike'ów, rowerów i hulajnóg",
  "Tutti i giorni 9:00–13:00 e 14:00–19:00": "Codziennie 9:00–13:00 i 14:00–19:00",
  "Parco avventura": "Park linowy",
  "Un parco avventura tra roccia e alberi alle pendici del Monte Brento, lungo il fiume Sarca: percorsi per bambini e adulti e zip line fino a oltre 500 metri. Una giornata all'aria aperta che finisce benissimo con una pizza da noi.":
    "Park linowy wśród skał i drzew u stóp Monte Brento, nad rzeką Sarca: trasy dla dzieci i dorosłych oraz tyrolki dłuższe niż 500 metrów. Dzień na świeżym powietrzu, który najlepiej zakończyć pizzą u nas.",
  "Percorsi per bambini e adulti": "Trasy dla dzieci i dorosłych",
  "Zip line e teleferica Big Zip": "Tyrolki i Big Zip",
  "Compleanni e gruppi su prenotazione": "Urodziny i grupy po rezerwacji",
  "Aprile–ottobre, 10:00–18:30 (ultimo ingresso 16:00): tutti i giorni da giugno a metà settembre, negli altri mesi nei weekend e festivi":
    "Kwiecień–październik, 10:00–18:30 (ostatnie wejście 16:00): codziennie od czerwca do połowy września, w pozostałych miesiącach w weekendy i święta",
};

export const sk: Phrases = {
  // Categorie
  Pizze: "Pizze",
  "Tutte cotte al momento. Disponibile anche la pizza senza glutine.":
    "Všetky pečené na objednávku. K dispozícii je aj bezlepková pizza.",
  "Primi piatti": "Cestoviny",
  "Insalate e antipasti": "Šaláty a predjedlá",
  "Piadine tradizionali": "Tradičné piadiny",
  "La piadina romagnola, farcita al momento.": "Talianska placka piadina, plnená na objednávku.",
  "Kebab ed extra": "Kebab a ďalšie",
  "Aggiunte all'insalata: mozzarella 3,00 € · mozzarella di bufala 4,00 € · funghi champignon 2,00 € · carciofi 2,00 € · grana 4,00 € · leerdammer 3,00 € · olive nere 2,40 € · uovo 2,40 €":
    "Prílohy k šalátu: mozzarella 3,00 € · byvolia mozzarella 4,00 € · šampiňóny 2,00 € · artičoky 2,00 € · grana 4,00 € · leerdammer 3,00 € · čierne olivy 2,40 € · vajce 2,40 €",

  // Pizze: nomi tradotti
  "Panna, prosciutto & mais": "Smotana, šunka a kukurica",
  "Salamino piccante": "Pikantná saláma",
  "Al prosciutto": "So šunkou",
  "Braccio di ferro": "Pepek námorník",
  "Al gorgonzola": "Gorgonzola",
  "Al crudo": "So sušenou šunkou",
  "Con speck": "So speckom",
  Bufalina: "S byvolou mozzarellou",
  "Alla romana": "Romana",
  "Porcini & grana": "Hríby a grana",
  "Al tonno": "S tuniakom",
  "Tonno & cipolla": "Tuniak a cibuľa",
  "Prosciutto & funghi": "Šunka a šampiňóny",
  "Radicchio & taleggio": "Radicchio a taleggio",
  "Al bacon": "So slaninou",
  "Gamberi & rucola": "Krevety a rukola",
  "Con verdura": "So zeleninou",
  "Alla montanara": "Montanara",
  "4 formaggi": "4 syry",
  Nizzarda: "Nicejská",
  "Provola & speck": "Provola a speck",
  Siciliana: "Sicílska",
  Sostanziosa: "Sýta",
  Norvegese: "Nórska",
  Noci: "S orechmi",
  Bianca: "Biela",
  "Con patate fritte": "S hranolkami",
  "Con kebab": "S kebabom",
  "Salamino & gorgonzola": "Pikantná saláma a gorgonzola",
  "Peperoni & gorgonzola": "Paprika a gorgonzola",
  "Pizza senza glutine": "Bezlepková pizza",
  "Con Nutella": "S Nutellou",

  // Pizze: ingredienti
  "Pomodoro, mozzarella": "Paradajky, mozzarella",
  "Mozzarella, aglio, peperoncino": "Mozzarella, cesnak, čili",
  "Pomodoro, mozzarella, panna, prosciutto, mais": "Paradajky, mozzarella, smotana, šunka, kukurica",
  "Pomodoro, mozzarella, salamino piccante, peperoni": "Paradajky, mozzarella, pikantná saláma, paprika",
  "Pomodoro, mozzarella, salamino piccante": "Paradajky, mozzarella, pikantná saláma",
  "Pomodoro, mozzarella, prosciutto cotto": "Paradajky, mozzarella, varená šunka",
  "Pomodoro, mozzarella, würstel": "Paradajky, mozzarella, párky",
  "Pomodoro, mozzarella, ricotta, spinaci": "Paradajky, mozzarella, ricotta, špenát",
  "Pomodoro, mozzarella, capperi, acciuga": "Paradajky, mozzarella, kapary, ančovičky",
  "Pomodoro, mozzarella, gorgonzola": "Paradajky, mozzarella, gorgonzola",
  "Pomodoro, mozzarella, prosciutto crudo": "Paradajky, mozzarella, sušená šunka (prosciutto crudo)",
  "Pomodoro, mozzarella, speck": "Paradajky, mozzarella, speck",
  "Pomodoro, mozzarella di bufala, rucola": "Paradajky, byvolia mozzarella, rukola",
  "Pomodoro, mozzarella, acciuga, capperi, olive": "Paradajky, mozzarella, ančovičky, kapary, olivy",
  "Pomodoro, mozzarella, funghi porcini, grana": "Paradajky, mozzarella, hríby, syr grana",
  "Pomodoro, mozzarella, tonno": "Paradajky, mozzarella, tuniak",
  "Pomodoro, mozzarella, tonno, cipolla": "Paradajky, mozzarella, tuniak, cibuľa",
  "Pomodoro, mozzarella, prosciutto, funghi champignon": "Paradajky, mozzarella, šunka, šampiňóny",
  "Pomodoro, mozzarella, radicchio, taleggio": "Paradajky, mozzarella, radicchio, syr taleggio",
  "Pomodoro, mozzarella, salsiccia, patate lesse": "Paradajky, mozzarella, čerstvá klobása, varené zemiaky",
  "Mozzarella, bacon, patate lesse, rosmarino": "Mozzarella, slanina, varené zemiaky, rozmarín",
  "Pomodoro, mozzarella, gamberi, rucola": "Paradajky, mozzarella, krevety, rukola",
  "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi":
    "Paradajky, mozzarella, varená šunka, šampiňóny, artičoky",
  "Pomodoro, mozzarella, verdura mista": "Paradajky, mozzarella, miešaná zelenina",
  "Pomodoro, mozzarella, funghi, salsiccia trentina": "Paradajky, mozzarella, šampiňóny, klobása z Trentina",
  "Pomodoro, mozzarella, salamino, gorgonzola, porcini": "Paradajky, mozzarella, saláma, gorgonzola, hríby",
  "Pomodoro, mozzarella, 4 formaggi misti": "Paradajky, mozzarella, štyri druhy syra",
  "Pomodoro, mozzarella, radicchio, gorgonzola, speck": "Paradajky, mozzarella, radicchio, gorgonzola, speck",
  "Pomodoro, mozzarella di bufala, rucola, pachino, crudo":
    "Paradajky, byvolia mozzarella, rukola, cherry paradajky, sušená šunka",
  "Pomodoro, mozzarella, cipolla, olive, capperi": "Paradajky, mozzarella, cibuľa, olivy, kapary",
  "Pomodoro, mozzarella, melanzana, parmigiano grattugiato":
    "Paradajky, mozzarella, baklažán, strúhaný parmezán",
  "Pomodoro, mozzarella a fette, basilico, pomodorini":
    "Paradajky, mozzarella na plátky, bazalka, cherry paradajky",
  "Pomodoro, mozzarella, radicchio, gorgonzola": "Paradajky, mozzarella, radicchio, gorgonzola",
  "Pomodoro, mozzarella, crudo, rucola, pomodorini":
    "Paradajky, mozzarella, sušená šunka, rukola, cherry paradajky",
  "Pomodoro, mozzarella, provola piccante, speck": "Paradajky, mozzarella, pikantný syr provola, speck",
  "Pomodoro, mozzarella, cipolla": "Paradajky, mozzarella, cibuľa",
  "Pomodoro, mozzarella, capperi, olive": "Paradajky, mozzarella, kapary, olivy",
  "Pomodoro, mozzarella, salamino piccante, gorgonzola, asparagi, aglio":
    "Paradajky, mozzarella, pikantná saláma, gorgonzola, špargľa, cesnak",
  "Pomodoro, mozzarella, salsiccia trentina": "Paradajky, mozzarella, klobása z Trentina",
  "Pomodoro, mozzarella, salsiccia, peperoni, olive nere, cipolla":
    "Paradajky, mozzarella, klobása, paprika, čierne olivy, cibuľa",
  "Pomodoro, mozzarella, salamino piccante, gorgonzola, cipolla":
    "Paradajky, mozzarella, pikantná saláma, gorgonzola, cibuľa",
  "Pomodoro, mozzarella, salmone norvegese, rucola": "Paradajky, mozzarella, nórsky losos, rukola",
  "Pomodoro, mozzarella, peperoni": "Paradajky, mozzarella, paprika",
  "Margherita, salamino piccante, funghi, carciofi, peperoni, uovo":
    "Margherita, pikantná saláma, šampiňóny, artičoky, paprika, vajce",
  "Mozzarella, gorgonzola, noci": "Mozzarella, gorgonzola, vlašské orechy",
  "Mozzarella, pancetta, asparagi, taleggio": "Mozzarella, slanina, špargľa, syr taleggio",
  "Pomodoro, mozzarella, salame piccante, salsiccia trentina, peperoni":
    "Paradajky, mozzarella, pikantná saláma, klobása z Trentina, paprika",
  "Pomodoro, mozzarella, pancetta, uovo, parmigiano grattugiato":
    "Paradajky, mozzarella, slanina, vajce, strúhaný parmezán",
  "Margherita, patate fritte": "Margherita, hranolky",
  "Pomodoro, mozzarella, formaggio bianco, olive nere, origano":
    "Paradajky, mozzarella, biely syr, čierne olivy, oregano",
  "Margherita, prosciutto cotto, würstel, gorgonzola, cipolla":
    "Margherita, varená šunka, párky, gorgonzola, cibuľa",
  "Pomodoro, mozzarella, prosciutto cotto, würstel, edamer":
    "Paradajky, mozzarella, varená šunka, párky, eidam",
  "Pomodoro, mozzarella, carne di kebab": "Paradajky, mozzarella, kebabové mäso",
  "Calabrese, salamino piccante, taleggio, zucchine a julienne":
    "Calabrese, pikantná saláma, syr taleggio, cuketa na prúžky",
  "Calabrese, salamino piccante, acciughe, pomodorini ciliegia":
    "Calabrese, pikantná saláma, ančovičky, cherry paradajky",
  "Pomodoro, mozzarella, salamino piccante, gorgonzola": "Paradajky, mozzarella, pikantná saláma, gorgonzola",
  "Pomodoro, mozzarella, peperoni, gorgonzola": "Paradajky, mozzarella, paprika, gorgonzola",
  "La pizza che preferisci, con impasto senza glutine": "Tvoja obľúbená pizza z bezlepkového cesta",
  "Focaccia, Nutella, zucchero a velo": "Focaccia, Nutella, práškový cukor",

  // Primi piatti
  "Spaghetti al pomodoro": "Špagety s paradajkovou omáčkou",
  "Spaghetti alla bolognese": "Špagety bolognese",
  "Spaghetti aglio, olio e peperoncino": "Špagety s cesnakom, olejom a čili",
  "Spaghetti alla carbonara": "Špagety carbonara",
  "Penne al pomodoro": "Penne s paradajkovou omáčkou",
  "Penne alla bolognese": "Penne bolognese",
  "Penne all'arrabbiata": "Penne arrabbiata (pikantné)",
  "Tortellini alla bolognese": "Tortellini bolognese",
  "Tortellini ricotta e spinaci al burro e salvia": "Tortellini s ricottou a špenátom, na masle so šalviou",
  "Tortellini panna e prosciutto": "Tortellini so smotanou a šunkou",
  "Lasagne alla bolognese": "Lasagne bolognese",
  "Tagliatelle fatte in casa": "Domáce tagliatelle",
  "Pasta al burro": "Cestoviny na masle",

  // Insalate e antipasti
  "Insalata mista piccola": "Malý miešaný šalát",
  "Insalatona mista": "Veľký miešaný šalát",
  "Insalata verde, carote, rucola, radicchio, pomodoro, cappuccio, mais":
    "Zelený šalát, mrkva, rukola, radicchio, paradajka, kapusta, kukurica",
  Contorno: "Príloha",
  "Prosciutto crudo & melone": "Sušená šunka s melónom",
  "Affettato misto": "Mix nárezov",
  "Prosciutto crudo, speck, salame piccante, salame dolce, bresaola, formaggio grana":
    "Sušená šunka, speck, pikantná saláma, jemná saláma, bresaola, syr grana",

  // Piadine
  "Bresaola, rucola & grana": "Bresaola, rukola a grana",
  "Cotto, mozzarella & funghi": "Šunka, mozzarella a šampiňóny",
  "Speck, provola & pomodoro": "Speck, provola a paradajka",
  "Crudo, mozzarella & pomodoro": "Sušená šunka, mozzarella a paradajka",
  "Cotto & edamer": "Šunka a eidam",
  "Crudo & taleggio": "Sušená šunka a taleggio",
  "Cotto, mozzarella & carciofi": "Šunka, mozzarella a artičoky",
  "Speck & gorgonzola": "Speck a gorgonzola",

  // Kebab ed extra
  "Panino kebab": "Kebab v žemli",
  "Piadina kebab": "Kebab v placke",
  "Patatine fritte": "Hranolky",
  "Panini farciti": "Plnené sendviče",
  "Cotoletta con patate": "Vyprážaný rezeň s hranolkami",
  "Würstel con patate": "Párky s hranolkami",
  "Trancio margherita": "Kúsok pizze margherita",
  "Trancio di pizza farcito": "Kúsok pizze s oblohou",

  // Aziende amiche
  "Noleggio e riparazione bici": "Požičovňa a servis bicyklov",
  "I nostri vicini di Dro: noleggiano e-bike e bici classiche per scoprire il Lago di Garda e le valli intorno e riparano qualsiasi due ruote. Dopo la pedalata, una pizza in piazza ci sta sempre.":
    "Naši susedia v Dro: požičiavajú elektrobicykle aj klasické bicykle na objavovanie Lago di Garda a okolitých dolín a opravia čokoľvek na dvoch kolesách. Po vyjažďke padne pizza na námestí vždy vhod.",
  "Noleggio e-bike Flyer": "Požičovňa elektrobicyklov Flyer",
  "Noleggio bici classiche": "Požičovňa klasických bicyklov",
  "Riparazione di e-bike, bici e monopattini": "Oprava elektrobicyklov, bicyklov a kolobežiek",
  "Tutti i giorni 9:00–13:00 e 14:00–19:00": "Denne 9:00–13:00 a 14:00–19:00",
  "Parco avventura": "Lanový park",
  "Un parco avventura tra roccia e alberi alle pendici del Monte Brento, lungo il fiume Sarca: percorsi per bambini e adulti e zip line fino a oltre 500 metri. Una giornata all'aria aperta che finisce benissimo con una pizza da noi.":
    "Lanový park medzi skalami a stromami na úpätí Monte Brento, pri rieke Sarca: trasy pre deti aj dospelých a lanovky dlhšie ako 500 metrov. Deň na čerstvom vzduchu, ktorý najlepšie zakončí pizza u nás.",
  "Percorsi per bambini e adulti": "Trasy pre deti a dospelých",
  "Zip line e teleferica Big Zip": "Lanovky a Big Zip",
  "Compleanni e gruppi su prenotazione": "Oslavy narodenín a skupiny na rezerváciu",
  "Aprile–ottobre, 10:00–18:30 (ultimo ingresso 16:00): tutti i giorni da giugno a metà settembre, negli altri mesi nei weekend e festivi":
    "Apríl–október, 10:00–18:30 (posledný vstup 16:00): denne od júna do polovice septembra, v ostatných mesiacoch cez víkendy a sviatky",
};

export const cs: Phrases = {
  // Categorie
  Pizze: "Pizzy",
  "Tutte cotte al momento. Disponibile anche la pizza senza glutine.":
    "Všechny pečené na objednávku. K dispozici je i bezlepková pizza.",
  "Primi piatti": "Těstoviny",
  "Insalate e antipasti": "Saláty a předkrmy",
  "Piadine tradizionali": "Tradiční piadiny",
  "La piadina romagnola, farcita al momento.": "Italská placka piadina, plněná na objednávku.",
  "Kebab ed extra": "Kebab a další",
  "Aggiunte all'insalata: mozzarella 3,00 € · mozzarella di bufala 4,00 € · funghi champignon 2,00 € · carciofi 2,00 € · grana 4,00 € · leerdammer 3,00 € · olive nere 2,40 € · uovo 2,40 €":
    "Přílohy k salátu: mozzarella 3,00 € · buvolí mozzarella 4,00 € · žampiony 2,00 € · artyčoky 2,00 € · grana 4,00 € · leerdammer 3,00 € · černé olivy 2,40 € · vejce 2,40 €",

  // Pizze: nomi tradotti
  "Panna, prosciutto & mais": "Smetana, šunka a kukuřice",
  "Salamino piccante": "Pikantní salám",
  "Al prosciutto": "Se šunkou",
  "Braccio di ferro": "Pepek námořník",
  "Al gorgonzola": "Gorgonzola",
  "Al crudo": "Se sušenou šunkou",
  "Con speck": "Se speckem",
  Bufalina: "S buvolí mozzarellou",
  "Alla romana": "Romana",
  "Porcini & grana": "Hřiby a grana",
  "Al tonno": "S tuňákem",
  "Tonno & cipolla": "Tuňák a cibule",
  "Prosciutto & funghi": "Šunka a žampiony",
  "Radicchio & taleggio": "Radicchio a taleggio",
  "Al bacon": "Se slaninou",
  "Gamberi & rucola": "Krevety a rukola",
  "Con verdura": "Se zeleninou",
  "Alla montanara": "Montanara",
  "4 formaggi": "4 sýry",
  Nizzarda: "Nicejská",
  "Provola & speck": "Provola a speck",
  Siciliana: "Sicilská",
  Sostanziosa: "Sytá",
  Norvegese: "Norská",
  Noci: "S ořechy",
  Bianca: "Bílá",
  "Con patate fritte": "S hranolky",
  "Con kebab": "S kebabem",
  "Salamino & gorgonzola": "Pikantní salám a gorgonzola",
  "Peperoni & gorgonzola": "Paprika a gorgonzola",
  "Pizza senza glutine": "Bezlepková pizza",
  "Con Nutella": "S Nutellou",

  // Pizze: ingredienti
  "Pomodoro, mozzarella": "Rajčata, mozzarella",
  "Mozzarella, aglio, peperoncino": "Mozzarella, česnek, chilli",
  "Pomodoro, mozzarella, panna, prosciutto, mais": "Rajčata, mozzarella, smetana, šunka, kukuřice",
  "Pomodoro, mozzarella, salamino piccante, peperoni": "Rajčata, mozzarella, pikantní salám, paprika",
  "Pomodoro, mozzarella, salamino piccante": "Rajčata, mozzarella, pikantní salám",
  "Pomodoro, mozzarella, prosciutto cotto": "Rajčata, mozzarella, vařená šunka",
  "Pomodoro, mozzarella, würstel": "Rajčata, mozzarella, párky",
  "Pomodoro, mozzarella, ricotta, spinaci": "Rajčata, mozzarella, ricotta, špenát",
  "Pomodoro, mozzarella, capperi, acciuga": "Rajčata, mozzarella, kapary, ančovičky",
  "Pomodoro, mozzarella, gorgonzola": "Rajčata, mozzarella, gorgonzola",
  "Pomodoro, mozzarella, prosciutto crudo": "Rajčata, mozzarella, sušená šunka (prosciutto crudo)",
  "Pomodoro, mozzarella, speck": "Rajčata, mozzarella, speck",
  "Pomodoro, mozzarella di bufala, rucola": "Rajčata, buvolí mozzarella, rukola",
  "Pomodoro, mozzarella, acciuga, capperi, olive": "Rajčata, mozzarella, ančovičky, kapary, olivy",
  "Pomodoro, mozzarella, funghi porcini, grana": "Rajčata, mozzarella, hřiby, sýr grana",
  "Pomodoro, mozzarella, tonno": "Rajčata, mozzarella, tuňák",
  "Pomodoro, mozzarella, tonno, cipolla": "Rajčata, mozzarella, tuňák, cibule",
  "Pomodoro, mozzarella, prosciutto, funghi champignon": "Rajčata, mozzarella, šunka, žampiony",
  "Pomodoro, mozzarella, radicchio, taleggio": "Rajčata, mozzarella, radicchio, sýr taleggio",
  "Pomodoro, mozzarella, salsiccia, patate lesse": "Rajčata, mozzarella, čerstvá klobása, vařené brambory",
  "Mozzarella, bacon, patate lesse, rosmarino": "Mozzarella, slanina, vařené brambory, rozmarýn",
  "Pomodoro, mozzarella, gamberi, rucola": "Rajčata, mozzarella, krevety, rukola",
  "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi":
    "Rajčata, mozzarella, vařená šunka, žampiony, artyčoky",
  "Pomodoro, mozzarella, verdura mista": "Rajčata, mozzarella, míchaná zelenina",
  "Pomodoro, mozzarella, funghi, salsiccia trentina": "Rajčata, mozzarella, žampiony, klobása z Trentina",
  "Pomodoro, mozzarella, salamino, gorgonzola, porcini": "Rajčata, mozzarella, salám, gorgonzola, hřiby",
  "Pomodoro, mozzarella, 4 formaggi misti": "Rajčata, mozzarella, čtyři druhy sýra",
  "Pomodoro, mozzarella, radicchio, gorgonzola, speck": "Rajčata, mozzarella, radicchio, gorgonzola, speck",
  "Pomodoro, mozzarella di bufala, rucola, pachino, crudo":
    "Rajčata, buvolí mozzarella, rukola, cherry rajčata, sušená šunka",
  "Pomodoro, mozzarella, cipolla, olive, capperi": "Rajčata, mozzarella, cibule, olivy, kapary",
  "Pomodoro, mozzarella, melanzana, parmigiano grattugiato": "Rajčata, mozzarella, lilek, strouhaný parmazán",
  "Pomodoro, mozzarella a fette, basilico, pomodorini":
    "Rajčata, mozzarella na plátky, bazalka, cherry rajčata",
  "Pomodoro, mozzarella, radicchio, gorgonzola": "Rajčata, mozzarella, radicchio, gorgonzola",
  "Pomodoro, mozzarella, crudo, rucola, pomodorini":
    "Rajčata, mozzarella, sušená šunka, rukola, cherry rajčata",
  "Pomodoro, mozzarella, provola piccante, speck": "Rajčata, mozzarella, pikantní sýr provola, speck",
  "Pomodoro, mozzarella, cipolla": "Rajčata, mozzarella, cibule",
  "Pomodoro, mozzarella, capperi, olive": "Rajčata, mozzarella, kapary, olivy",
  "Pomodoro, mozzarella, salamino piccante, gorgonzola, asparagi, aglio":
    "Rajčata, mozzarella, pikantní salám, gorgonzola, chřest, česnek",
  "Pomodoro, mozzarella, salsiccia trentina": "Rajčata, mozzarella, klobása z Trentina",
  "Pomodoro, mozzarella, salsiccia, peperoni, olive nere, cipolla":
    "Rajčata, mozzarella, klobása, paprika, černé olivy, cibule",
  "Pomodoro, mozzarella, salamino piccante, gorgonzola, cipolla":
    "Rajčata, mozzarella, pikantní salám, gorgonzola, cibule",
  "Pomodoro, mozzarella, salmone norvegese, rucola": "Rajčata, mozzarella, norský losos, rukola",
  "Pomodoro, mozzarella, peperoni": "Rajčata, mozzarella, paprika",
  "Margherita, salamino piccante, funghi, carciofi, peperoni, uovo":
    "Margherita, pikantní salám, žampiony, artyčoky, paprika, vejce",
  "Mozzarella, gorgonzola, noci": "Mozzarella, gorgonzola, vlašské ořechy",
  "Mozzarella, pancetta, asparagi, taleggio": "Mozzarella, slanina, chřest, sýr taleggio",
  "Pomodoro, mozzarella, salame piccante, salsiccia trentina, peperoni":
    "Rajčata, mozzarella, pikantní salám, klobása z Trentina, paprika",
  "Pomodoro, mozzarella, pancetta, uovo, parmigiano grattugiato":
    "Rajčata, mozzarella, slanina, vejce, strouhaný parmazán",
  "Margherita, patate fritte": "Margherita, hranolky",
  "Pomodoro, mozzarella, formaggio bianco, olive nere, origano":
    "Rajčata, mozzarella, bílý sýr, černé olivy, oregano",
  "Margherita, prosciutto cotto, würstel, gorgonzola, cipolla":
    "Margherita, vařená šunka, párky, gorgonzola, cibule",
  "Pomodoro, mozzarella, prosciutto cotto, würstel, edamer":
    "Rajčata, mozzarella, vařená šunka, párky, eidam",
  "Pomodoro, mozzarella, carne di kebab": "Rajčata, mozzarella, kebabové maso",
  "Calabrese, salamino piccante, taleggio, zucchine a julienne":
    "Calabrese, pikantní salám, sýr taleggio, cuketa na nudličky",
  "Calabrese, salamino piccante, acciughe, pomodorini ciliegia":
    "Calabrese, pikantní salám, ančovičky, cherry rajčata",
  "Pomodoro, mozzarella, salamino piccante, gorgonzola": "Rajčata, mozzarella, pikantní salám, gorgonzola",
  "Pomodoro, mozzarella, peperoni, gorgonzola": "Rajčata, mozzarella, paprika, gorgonzola",
  "La pizza che preferisci, con impasto senza glutine": "Tvoje oblíbená pizza z bezlepkového těsta",
  "Focaccia, Nutella, zucchero a velo": "Focaccia, Nutella, moučkový cukr",

  // Primi piatti
  "Spaghetti al pomodoro": "Špagety s rajčatovou omáčkou",
  "Spaghetti alla bolognese": "Špagety bolognese",
  "Spaghetti aglio, olio e peperoncino": "Špagety s česnekem, olejem a chilli",
  "Spaghetti alla carbonara": "Špagety carbonara",
  "Penne al pomodoro": "Penne s rajčatovou omáčkou",
  "Penne alla bolognese": "Penne bolognese",
  "Penne all'arrabbiata": "Penne arrabbiata (pikantní)",
  "Tortellini alla bolognese": "Tortellini bolognese",
  "Tortellini ricotta e spinaci al burro e salvia": "Tortellini s ricottou a špenátem, na másle se šalvějí",
  "Tortellini panna e prosciutto": "Tortellini se smetanou a šunkou",
  "Lasagne alla bolognese": "Lasagne bolognese",
  "Tagliatelle fatte in casa": "Domácí tagliatelle",
  "Pasta al burro": "Těstoviny na másle",

  // Insalate e antipasti
  "Insalata mista piccola": "Malý míchaný salát",
  "Insalatona mista": "Velký míchaný salát",
  "Insalata verde, carote, rucola, radicchio, pomodoro, cappuccio, mais":
    "Zelený salát, mrkev, rukola, radicchio, rajče, zelí, kukuřice",
  Contorno: "Příloha",
  "Prosciutto crudo & melone": "Sušená šunka s melounem",
  "Affettato misto": "Mix uzenin",
  "Prosciutto crudo, speck, salame piccante, salame dolce, bresaola, formaggio grana":
    "Sušená šunka, speck, pikantní salám, jemný salám, bresaola, sýr grana",

  // Piadine
  "Bresaola, rucola & grana": "Bresaola, rukola a grana",
  "Cotto, mozzarella & funghi": "Šunka, mozzarella a žampiony",
  "Speck, provola & pomodoro": "Speck, provola a rajče",
  "Crudo, mozzarella & pomodoro": "Sušená šunka, mozzarella a rajče",
  "Cotto & edamer": "Šunka a eidam",
  "Crudo & taleggio": "Sušená šunka a taleggio",
  "Cotto, mozzarella & carciofi": "Šunka, mozzarella a artyčoky",
  "Speck & gorgonzola": "Speck a gorgonzola",

  // Kebab ed extra
  "Panino kebab": "Kebab v housce",
  "Piadina kebab": "Kebab v placce",
  "Patatine fritte": "Hranolky",
  "Panini farciti": "Plněné sendviče",
  "Cotoletta con patate": "Smažený řízek s hranolky",
  "Würstel con patate": "Párky s hranolky",
  "Trancio margherita": "Kousek pizzy margherita",
  "Trancio di pizza farcito": "Kousek pizzy s oblohou",

  // Aziende amiche
  "Noleggio e riparazione bici": "Půjčovna a servis kol",
  "I nostri vicini di Dro: noleggiano e-bike e bici classiche per scoprire il Lago di Garda e le valli intorno e riparano qualsiasi due ruote. Dopo la pedalata, una pizza in piazza ci sta sempre.":
    "Naši sousedé v Dro: půjčují elektrokola i klasická kola na objevování Lago di Garda a okolních údolí a opraví cokoli na dvou kolech. Po vyjížďce přijde pizza na náměstí vždycky vhod.",
  "Noleggio e-bike Flyer": "Půjčovna elektrokol Flyer",
  "Noleggio bici classiche": "Půjčovna klasických kol",
  "Riparazione di e-bike, bici e monopattini": "Opravy elektrokol, kol a koloběžek",
  "Tutti i giorni 9:00–13:00 e 14:00–19:00": "Denně 9:00–13:00 a 14:00–19:00",
  "Parco avventura": "Lanový park",
  "Un parco avventura tra roccia e alberi alle pendici del Monte Brento, lungo il fiume Sarca: percorsi per bambini e adulti e zip line fino a oltre 500 metri. Una giornata all'aria aperta che finisce benissimo con una pizza da noi.":
    "Lanový park mezi skalami a stromy na úpatí Monte Brento, u řeky Sarca: trasy pro děti i dospělé a lanovky delší než 500 metrů. Den na čerstvém vzduchu, který nejlépe zakončí pizza u nás.",
  "Percorsi per bambini e adulti": "Trasy pro děti a dospělé",
  "Zip line e teleferica Big Zip": "Lanovky a Big Zip",
  "Compleanni e gruppi su prenotazione": "Oslavy narozenin a skupiny na rezervaci",
  "Aprile–ottobre, 10:00–18:30 (ultimo ingresso 16:00): tutti i giorni da giugno a metà settembre, negli altri mesi nei weekend e festivi":
    "Duben–říjen, 10:00–18:30 (poslední vstup 16:00): denně od června do poloviny září, v ostatních měsících o víkendech a svátcích",
};
