import { notFound } from "next/navigation";
import { getPrimarySeoPage } from "@/lib/primary-factory";
import { SeoPageView } from "@/components/SeoPageView";

export function PrimaryRoutePage({ slug }: { slug: string }) {
  const model = getPrimarySeoPage(slug);
  if (!model) notFound();
  const hideGeo =
    slug === "lucky-bear-uzbekistan" ||
    slug === "lucky-bear-kazakhstan" ||
    slug === "lucky-bear-rossiya";
  return (
    <SeoPageView model={model} path={`/${slug}`} hideGeo={hideGeo} />
  );
}
