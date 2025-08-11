import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/contact", "/esports", "/cookies", "/kvkk"];
  const locales = ["tr", "en"] as const;

  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of locales) {
    for (const page of pages) {
      const path = page === "/" ? `/${locale}` : `/${locale}${page}`;
      entries.push({
        url: new URL(path, siteUrl).toString(),
        lastModified: now,
        changeFrequency: "weekly",
        priority: page === "/" ? 1 : 0.7,
      });
    }
  }

  return entries;
}


