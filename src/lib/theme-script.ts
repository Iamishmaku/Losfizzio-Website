export const THEME_STORAGE_KEY = "theme";

/**
 * Script eseguito nel <head> prima del disegno della pagina: applica il tema scelto
 * dall'utente evitando il "lampo" di colore sbagliato. Senza scelta salvata vale il tema di sistema (solo CSS).
 * Sta in un file senza "use client" perché viene usato dal layout (Server Component).
 */
export const themeScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
