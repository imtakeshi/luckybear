import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgrammaticPage } from "@/lib/programmatic-factory";
import { programmaticSlugs } from "@/lib/nav";
import { SeoPageView } from "@/components/SeoPageView";
import { getSiteUrl } from "@/lib/affiliate";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return programmaticSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const model = getProgrammaticPage(params.slug);
  if (!model) return {};
  const canonical = `${getSiteUrl()}/p/${params.slug}`;
  return {
    title: model.title,
    description: model.description,
    keywords: model.keywords,
    alternates: { canonical },
  };
}

export default function ProgrammaticPage({ params }: Props) {
  const model = getProgrammaticPage(params.slug);
  if (!model) notFound();
  return <SeoPageView model={model} path={`/p/${params.slug}`} />;
}
