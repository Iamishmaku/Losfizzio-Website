import type { MetadataRoute } from "next";
import { partners } from "@/data/partners";
import { site } from "@/data/site";
import { locales } from "@/i18n/config";

/** Logo delle aziende amiche, indicati a Google come immagini della pagina /partners. */
const partnerImages = partners.flatMap((p) => (p.logo ? [`${site.url}${p.logo.src}`] : []));

const pages: {
  path: string;
  priority: number;
  changeFrequency: "monthly" | "yearly";
  images?: string[];
}[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/menu", priority: 0.9, changeFrequency: "monthly" },
  { path: "/partners", priority: 0.7, changeFrequency: "monthly", images: partnerImages },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, priority, changeFrequency, images }) =>
    locales.map((locale) => ({
      url: `${site.url}/${locale}${path}`,
      changeFrequency,
      priority,
      ...(images?.length ? { images } : {}),
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`])),
      },
    })),
  );
}
