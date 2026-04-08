import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/affiliate";
import { getPrimarySeoPage } from "@/lib/primary-factory";

export function metaForPrimary(slug: string): Metadata {
  const m = getPrimarySeoPage(slug)!;
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: { canonical: `${getSiteUrl()}/${slug}` },
  };
}
