import type { Dictionary } from "./it";

/**
 * Teksty po polsku. Fragmenty między *gwiazdkami* są wyróżnione; {nawiasy} to symbole zastępcze.
 * ⚠️ Tłumaczenie nie zostało wykonane przez native speakera: warto je sprawdzić.
 */
export const pl: Dictionary = {
  meta: {
    title: "Lo Sfizio · Pizzeria na placu w Dro",
    titleTemplate: "%s · Lo Sfizio Dro",
    description:
      "Lo Sfizio to pizzeria na głównym placu w Dro (Trydent, niedaleko Jeziora Garda): pizza pieczona na zamówienie, kebab, piadina, bar i kawa. Zjedz u nas na placu albo zamów na wynos.",
    keywords: [
      "pizzeria Dro",
      "pizza Dro",
      "kebab Dro",
      "pizza na wynos Dro",
      "Lo Sfizio Dro",
      "pizza Arco",
      "pizza Jezioro Garda",
    ],
    fullName: "Lo Sfizio · Pizzeria, Kebab, Bar i Kawiarnia",
    tagline: "Pizza na placu w Dro",
    menuTitle: "Menu",
    menuDescription:
      "Menu Lo Sfizio w Dro: pizze klasyczne i specjalne, kebab, piadina, bar i napoje. Ceny i składniki.",
    partnersTitle: "Co robić w Dro: e-bike'i i park linowy",
    partnersDescription:
      "Co robić w Dro i w dolinie Sarca: wypożyczalnia e-bike'ów, park linowy i zaprzyjaźnione firmy Lo Sfizio. Adresy, godziny otwarcia i kontakty.",
    partnersKeywords: [
      "co robić w Dro",
      "wypożyczalnia e-bike Dro",
      "park linowy Dro",
      "Elias Adventure Park",
      "Lelettrica Dro",
      "dolina Sarca",
    ],
    privacyTitle: "Prywatność i pliki cookie",
    privacyDescription: "Polityka prywatności i plików cookie strony Lo Sfizio.",
    ogBadge: "Na wynos · {phone}",
    ogKicker: "Pizzeria · Kebab · Bar · Kawiarnia",
  },
  common: {
    skipToContent: "Przejdź do treści",
    call: "Zadzwoń",
    callNumber: "Zadzwoń {phone}",
    order: "Zamów: {phone}",
  },
  nav: {
    home: "Start",
    about: "O nas",
    menu: "Menu",
    hours: "Godziny otwarcia",
    location: "Dojazd",
    partners: "Przyjaciele",
    contact: "Kontakt",
    privacy: "Prywatność i cookie",
    mainLabel: "Nawigacja główna",
    mobileLabel: "Nawigacja mobilna",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    menuTitle: "Menu nawigacji",
    homeAria: "{name}, powrót na stronę główną",
  },
  settings: {
    language: "Język",
    theme: "Motyw",
    themeSystem: "Automatyczny",
    themeLight: "Jasny",
    themeDark: "Ciemny",
  },
  status: {
    openNow: "Otwarte · do {time}",
    closedOpens: "Zamknięte · otwieramy: {when}, {time}",
    today: "dziś",
    closed: "Zamknięte",
    fallback: "Godziny otwarcia",
  },
  closure: {
    title: "Tymczasowo zamknięte",
    banner: "Ostatni dzień zamknięcia: {until}. Zapraszamy ponownie: {reopen}, od {time}!",
    badge: "Zamknięte · otwieramy: {reopen}, {time}",
    close: "Zamknij komunikat",
  },
  days: {
    mon: "Poniedziałek",
    tue: "Wtorek",
    wed: "Środa",
    thu: "Czwartek",
    fri: "Piątek",
    sat: "Sobota",
    sun: "Niedziela",
  },
  services: ["Na placu", "Na wynos", "Bez glutenu", "Kebab", "Bar i kawiarnia"],
  hero: {
    title: "Pizza *na placu* w Dro.",
    lead: "Pizza pieczona na zamówienie, kebab, piadina i dobra kawa w samym sercu Dro. Usiądź na placu albo odbierz zamówienie na wynos.",
    ctaMenu: "Zobacz menu",
    ctaPhone: "Zamów telefonicznie",
    illustration: "Ilustracja pizzy",
  },
  marquee: [
    "Pieczona na zamówienie",
    "Kebab",
    "Na wynos",
    "Piadina",
    "Bar i kawa",
    "Spritz na placu",
    "Długo wyrastające ciasto",
  ],
  about: {
    eyebrow: "O nas",
    title: "Mała *przyjemność*, każdego dnia.",
    intro:
      "Lo Sfizio to pizzeria na głównym placu w Dro: proste i przyjazne miejsce na pizzę, kebab albo kawę. Dobre składniki, zawsze gorący piec i uśmiech przy ladzie.",
    features: [
      {
        title: "Ciasto, które ma czas",
        text: "Nasze ciasto wyrasta powoli: lekka, łatwostrawna pizza z chrupiącym brzegiem.",
      },
      {
        title: "Pieczona na zamówienie",
        text: "Każdą pizzę rozciągamy ręcznie i wkładamy do pieca dopiero, gdy ją zamówisz. Bez skrótów, tylko odpowiedni czas.",
      },
      {
        title: "Na placu w Dro",
        text: "Stoliki na zewnątrz w centrum miasteczka: idealny przystanek po wycieczce rowerowej albo dniu wspinaczki.",
      },
      {
        title: "Gotowa na wynos",
        text: "Zadzwoń, powiedz, o której przyjdziesz, a pizza będzie gorąca i gotowa. Idealna na kolację w domu ze znajomymi.",
      },
    ],
  },
  featured: {
    eyebrow: "Ulubione",
    title: "Pizze, których *nie można przegapić*",
    prev: "Poprzednia pizza",
    next: "Następna pizza",
    carousel: "karuzela",
    slide: "slajd",
    slideOf: "{n} z {total}",
    dots: "Wybierz pizzę",
    goTo: "Przejdź do pizzy {n}",
  },
  menuPreview: {
    eyebrow: "Menu",
    title: "Wybierz swoją *przyjemność*",
    intro:
      "Od ponadczasowej klasyki po nasze specjalności, do tego kebab i piadina. A na koniec espresso przy barze.",
    tabsLabel: "Kategorie menu",
    fullMenu: "Zobacz całe menu",
  },
  tags: {
    vegetariana: "Wegetariańska",
    piccante: "Ostra",
    novita: "Nowość",
    consigliata: "Polecamy",
  },
  visit: {
    season: { winter: "Godziny zimowe", summer: "Godziny letnie" },
    eyebrow: "Odwiedź nas",
    title: "Czekamy na Ciebie *na placu*",
    intro:
      "W centrum Dro, kilka kroków od ścieżki rowerowej doliny Sarca i kilka minut od Arco i Riva del Garda.",
    hoursTitle: "Godziny otwarcia",
    today: "dziś",
    note: "W święta godziny mogą się zmienić: w razie wątpliwości zadzwoń.",
    tooltip: "W święta i w szczycie sezonu godziny otwarcia mogą się różnić.",
    infoLabel: "Informacje o godzinach otwarcia",
    showMap: "Pokaż mapę",
    mapHint: "Wczytując mapę, akceptujesz pliki cookie Google Maps.",
    mapTitle: "Mapa: {name}, {address}",
    whereTitle: "Gdzie jesteśmy",
    directions: "Nawiguj",
  },
  faq: {
    eyebrow: "Częste pytania",
    title: "Wszystko, co *chcesz wiedzieć*",
    intro: "Nie ma tu odpowiedzi? Zadzwoń: odpowiadamy szybciej, niż pieczemy margheritę.",
    items: [
      {
        q: "Czy można zamówić na wynos?",
        a: "Tak: zadzwoń (także przez WhatsApp) albo po prostu przyjdź. Od razu powiemy Ci, o której pizza będzie gotowa, żebyś nie musiał czekać.",
      },
      {
        q: "Czy dowozicie do domu?",
        a: "Nie, nie mamy dowozu. Możesz zjeść u nas na placu albo zamówić na wynos: zadzwoń i odbierz o dogodnej porze.",
      },
      {
        q: "Czy trzeba rezerwować stolik?",
        a: "Nie, rezerwacja nie jest konieczna: przyjdź, kiedy chcesz, a znajdziemy Ci miejsce na placu.",
      },
      {
        q: "Czy macie pizzę bezglutenową?",
        a: "Tak, robimy też pizzę bezglutenową: wystarczy poprosić przy zamówieniu. Zawsze informuj nas o alergiach i nietolerancjach.",
      },
      {
        q: "Czy można płacić kartą?",
        a: "Tak, możesz zapłacić kartą lub gotówką.",
      },
      {
        q: "Czy robicie pizzę na imprezy i dla grup?",
        a: "Oczywiście: na urodziny, dla drużyn i dużych grup skontaktuj się z nami kilka dni wcześniej, a razem ustalimy ilości i godziny.",
      },
      {
        q: "Gdzie można zaparkować?",
        a: "Kilka kroków od placu w Dro są publiczne parkingi. Łatwo też dojechać rowerem ścieżką rowerową doliny Sarca.",
      },
    ],
  },
  contact: {
    eyebrow: "Na wynos",
    title: "Zamawianie jest *proste*",
    intro:
      "Wystarczy jeden telefon: od razu powiemy Ci, kiedy zamówienie będzie gotowe, a odbierzesz je gorące.",
    callUs: "Zadzwoń",
    steps: [
      { title: "Zadzwoń", text: "Telefonicznie lub przez WhatsApp, w godzinach otwarcia." },
      { title: "Zamów", text: "Powiedz, na co masz ochotę i o której przyjdziesz." },
      { title: "Odbierz", text: "Przyjdź na plac: wszystko będzie gorące i gotowe." },
    ],
    whereTitle: "Gdzie odebrać",
    directions: "Nawiguj",
    follow: "Obserwuj nas",
    whatsapp: "Zadzwoń przez WhatsApp",
    whatsappHint:
      "Otworzy się WhatsApp: dotknij ikony telefonu, aby do nas zadzwonić. Na WhatsAppie odbieramy tylko połączenia, nie wiadomości.",
  },
  cta: {
    title: "Pizza na wieczór? *Zadzwoń.*",
    text: "Upieczemy ją, zanim dojdziesz: przyjdź i odbierz gorącą i chrupiącą.",
    menu: "Przeglądaj menu",
  },
  footer: {
    rights: "Wszelkie prawa zastrzeżone.",
    vat: "NIP (P.IVA)",
    contacts: "Kontakt",
    hours: "Godziny otwarcia",
    explore: "Odkryj",
    reviews: "Opinie w Google",
    madeWith: "Zrobione z pasją (i odrobiną mąki) w dolinie Sarca.",
  },
  menuPage: {
    priceOnRequest: "Cena na zapytanie",
    eyebrow: "Nasze menu",
    title: "Cały smak *Lo Sfizio*",
    intro:
      "Pizza, kebab, piadina i napoje. Wyszukaj ulubione danie albo filtruj propozycje wegetariańskie i ostre.",
    notesLabel: "Uwagi do menu",
    notes: [
      "Niektóre produkty mogą być mrożone.",
      "Obsługa przy stoliku: 1,50 €.",
      "Dostępna pizza bezglutenowa: poproś o nią przy zamówieniu.",
      "Alergeny: zapytaj obsługę, powiemy Ci, co zawiera każde danie.",
    ],
    searchLabel: "Szukaj w menu",
    searchPlaceholder: "Szukaj pizzy lub składnika…",
    clearSearch: "Wyczyść wyszukiwanie",
    filtersLabel: "Filtry",
    vegetarian: "Wegetariańskie",
    spicy: "Ostre",
    categoriesLabel: "Kategorie",
    countOne: "1 pozycja",
    countFew: "{n} pozycje",
    countOther: "{n} pozycji",
    empty: "Nic nie znaleziono. Spróbuj innego składnika!",
    reset: "Wyczyść filtry",
  },
  partnersPage: {
    eyebrow: "Przyjaciele i partnerzy",
    title: "*Przyjaciele* Lo Sfizio w Dro",
    intro:
      "Firmy, z którymi współpracujemy, i przyjaciele, których chętnie polecamy odwiedzającym Dro: wypożyczalnia e-bike'ów, park linowy i nie tylko, w dolinie Sarca, niedaleko Arco i Jeziora Garda.",
    afterTitle: "Po wycieczce *czekamy* na placu",
    afterText:
      "Niezależnie od tego, czy wracasz z przejażdżki rowerem, czy z dnia pełnego przygód, Lo Sfizio to pizzeria na placu w Dro: pizza pieczona na zamówienie, kebab, piadina i dobra kawa.",
    listLabel: "Zaprzyjaźnione firmy",
    logoAlt: "Logo {name}",
    hours: "Godziny otwarcia",
    website: "Strona internetowa",
    directions: "Nawiguj",
  },
  privacy: {
    eyebrow: "Informacja",
    title: "Polityka prywatności",
    lastUpdated: "Ostatnia aktualizacja: listopad 2026",
    intro:
      "Ta strona wyjaśnia, jakie dane przetwarza strona internetowa {name}, w jakim celu i jak długo, zgodnie z unijnym rozporządzeniem 2016/679 (RODO).",
    sections: [
      { title: "Administrator danych", text: "{holder}\n{address}\nTelefon: {phone}" },
      {
        title: "Zbierane dane",
        text: "Strona jest zwykłą wizytówką: nie ma kont, formularzy, zamówień ani płatności online i nie używamy profilujących plików cookie ani reklam.\n\nGdy odwiedzasz stronę, serwer, na którym jest hostowana, otrzymuje Twój adres IP i dane techniczne żądania (przeglądarka, odwiedzana strona, data i godzina), niezbędne do wyświetlenia stron i ochrony serwisu przed nadużyciami.\n\nAby wiedzieć, ile osób odwiedza stronę, i dbać o jej szybkość, używamy Vercel Web Analytics i Vercel Speed Insights. Zbierają one anonimowo i zbiorczo odwiedzane podstrony, stronę, z której przyszedłeś, kraj, typ urządzenia i czas ładowania: nie używają plików cookie, nie identyfikują odwiedzających i nie służą celom reklamowym.\n\nJeśli wybierzesz język lub motyw (jasny albo ciemny), zapisujemy ten wybór na Twoim urządzeniu, jak opisano w sekcji „Pliki cookie”.",
      },
      {
        title: "Podstawa prawna",
        text: "Przetwarzanie technicznych danych o odwiedzinach i zapisywanie Twoich ustawień opiera się na naszym prawnie uzasadnionym interesie, jakim jest bezpieczna i działająca strona (art. 6 ust. 1 lit. f RODO). Nie przetwarzamy danych wymagających Twojej zgody.",
      },
      {
        title: "Pliki cookie",
        text: "Używamy tylko jednego technicznego pliku cookie: NEXT_LOCALE, który zapamiętuje wybrany język (przez rok). Motyw jasny/ciemny jest zapisywany w pamięci przeglądarki (localStorage) i nikomu nie jest wysyłany. Nie używamy plików cookie profilujących ani analitycznych, dlatego strona nie wyświetla banera cookie.\n\nMapa Google Maps wczytuje się dopiero po kliknięciu „Pokaż mapę”: od tego momentu Google może zapisywać własne pliki cookie.",
      },
      {
        title: "Okres przechowywania",
        text: "Techniczne dane o odwiedzinach pozostają w dziennikach dostawcy hostingu tylko tak długo, jak jest to potrzebne do działania i bezpieczeństwa strony. Ustawienia języka i motywu pozostają na Twoim urządzeniu, dopóki nie usuniesz ich w przeglądarce.",
      },
      {
        title: "Odbiorcy danych",
        text: "Strona jest hostowana przez Vercel Inc. (USA), który przetwarza techniczne dane o odwiedzinach w naszym imieniu jako podmiot przetwarzający. Przekazywanie danych do USA odbywa się z zabezpieczeniami przewidzianymi w RODO (EU-U.S. Data Privacy Framework i standardowe klauzule umowne). Domena jest obsługiwana przez Cloudflare Inc., który jedynie wskazuje Twojej przeglądarce, gdzie znajduje się strona. Nie sprzedajemy ani nie udostępniamy Twoich danych.",
      },
      {
        title: "Usługi, z którymi łączy się Twoja przeglądarka",
        text: "Niektóre przyciski otwierają zewnętrzne usługi, tylko jeśli je klikniesz: Google Maps (mapa i nawigacja), WhatsApp, Instagram i Facebook (Meta). Usługi te otrzymują Twój adres IP, mogą zapisywać własne pliki cookie i przetwarzają dane zgodnie z własnymi zasadami.",
      },
      {
        title: "Twoje prawa",
        text: "Zgodnie z art. 15–22 RODO masz prawo dostępu do swoich danych, ich sprostowania lub usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu wobec przetwarzania i przenoszenia danych. Masz też prawo wnieść skargę do włoskiego organu ochrony danych (Garante per la protezione dei dati personali, www.garanteprivacy.it).",
      },
      {
        title: "Kontakt",
        text: "W sprawie przetwarzania danych możesz zadzwonić pod numer {phone}, napisać do nas albo przyjść do pizzerii: {address}.",
      },
    ],
  },
  notFound: {
    title: "Ktoś zjadł tę stronę.",
    text: "Strona, której szukasz, nie istnieje (albo trafiła do pieca). Wróć na stronę główną i wybierz swoją pizzę.",
    back: "Wróć na stronę główną",
  },
};
