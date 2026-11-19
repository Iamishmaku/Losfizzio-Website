# Immagini del menu

**Di base il sito usa le illustrazioni disegnate dal codice** (componente `PizzaArt`): ogni pizza viene
disegnata con i suoi ingredienti, indicati nel campo `toppings` del piatto in `src/data/menu.ts`, per esempio:

```ts
{
  id: "diavola",
  name: l("Diavola"),
  description: l("Pomodoro, fior di latte, salame piccante", "Tomato, fior di latte, spicy salami", "Tomate, Fior di Latte, scharfe Salami"),
  price: 8,
  toppings: ["tomato", "mozzarella", "salami"],
}
```

Ingredienti disponibili per il disegno: `tomato`, `mozzarella`, `basil`, `salami`, `ham`, `mushroom`, `olive`,
`pepper`, `onion`, `rocket`, `tuna`, `egg`, `sausage`, `speck`, `zucchini`.

## Foto (facoltative)

Se un giorno si vogliono usare foto vere al posto di un disegno: metti qui il file (JPG o WebP, quadrato, almeno
800×800 px) e aggiungi al piatto `image: "/images/menu/nome-file.jpg"`. Usa solo foto della pizzeria o di cui
avete i diritti.
