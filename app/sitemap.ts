import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/affiliate";
import { primarySeoRoutes, programmaticSlugs } from "@/lib/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const last = new Date();
  const urls: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: last, changeFrequency: "weekly", priority: 1 },
    ...primarySeoRoutes.map((r) => ({
      url: `${base}${r.href}`,
      lastModified: last,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...programmaticSlugs.map((slug) => ({
      url: `${base}/p/${slug}`,
      lastModified: last,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
  return urls;
}
