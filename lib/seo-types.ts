import type { FaqItem } from "@/components/FAQBlock";

export type SeoTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type SeoSection = {
  h2: string;
  paragraphs: string[];
  h3?: { title: string; paragraphs: string[] }[];
};

export type SeoPageModel = {
  /** путь без слэша, напр. lucky-bear-bonus */
  slugPath: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  /** краткий лид 1–3 абзаца */
  lead: string[];
  sections: SeoSection[];
  table?: SeoTable;
  faq: FaqItem[];
  /** расширенный SEO-блок внизу (видимый текст) */
  footerSeo: string[];
  /** LSI / варианты написания для естественных повторов в тексте */
  lsiNote?: string[];
};
