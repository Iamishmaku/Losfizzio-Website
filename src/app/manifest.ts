import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lo Sfizio · Pizzeria, Kebab, Bar & Caffè",
    short_name: site.name,
    description:
      "Pizzeria in piazza a Dro (TN) · Pizzeria on the square in Dro · Pizzeria auf der Piazza in Dro",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fbf3e4",
    theme_color: "#c8321f",
    lang: "it",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/images/logo/lo-sfizio-icona-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/logo/lo-sfizio-icona-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
