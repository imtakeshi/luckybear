import Image from "next/image";
import type { SeoPageModel } from "@/lib/seo-types";
import { getSiteUrl } from "@/lib/affiliate";
import { AffiliateCta } from "@/components/AffiliateCta";
import { FAQBlock } from "@/components/FAQBlock";
import { GeoStrip } from "@/components/GeoStrip";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { PseudoReviews } from "@/components/PseudoReviews";
import { RatingStars } from "@/components/RatingStars";
import { ScarcityBar } from "@/components/ScarcityBar";
import { SimilarCasinos } from "@/components/SimilarCasinos";

function ProseSections({ model }: { model: SeoPageModel }) {
  return (
    <div className="prose-local max-w-none">
      {model.lead.map((p, i) => (
        <p key={`l-${i}`}>{p}</p>
      ))}
      {model.sections.map((s, si) => (
        <section key={si}>
          <h2>{s.h2}</h2>
          {s.paragraphs.map((p, pi) => (
            <p key={pi}>{p}</p>
          ))}
          {s.h3?.map((h, hi) => (
            <div key={hi}>
              <h3>{h.title}</h3>
              {h.paragraphs.map((p, pi) => (
                <p key={pi}>{p}</p>
              ))}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export function SeoPageView({
  model,
  path,
  hideGeo,
}: {
  model: SeoPageModel;
  path: string;
  /** для гео-лендингов не дублировать тройной блок */
  hideGeo?: boolean;
}) {
  const site = getSiteUrl();
  const url = `${site}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: model.h1,
    description: model.description,
    inLanguage: "ru-RU",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Lucky Bear editorial portal" },
    publisher: {
      "@type": "Organization",
      name: "Lucky Bear editorial portal",
    },
    about: model.keywords.slice(0, 12).join(", "),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <header className="border-b border-surface-accent pb-8">
          <p className="text-sm text-ink-muted">Обновляемый гайд · информационный формат</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {model.h1}
          </h1>
          <p className="mt-3 text-ink/90">{model.description}</p>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <RatingStars value={4.3} label="Редакционная оценка удобства материала: 4,3 из 5" />
            <span className="text-sm text-ink-muted">
              Оценка относится к полноте обзора, не к гарантиям выплат.
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <AffiliateCta ariaLabel="Играть в казино по партнёрской ссылке">Играть сейчас</AffiliateCta>
            <AffiliateCta variant="secondary" ariaLabel="Открыть страницу с бонусами">
              Получить бонус
            </AffiliateCta>
          </div>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <ScarcityBar />
            <div className="mt-8 overflow-hidden rounded-2xl border border-surface-accent bg-surface shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1596838132731-3301c3fde94c?auto=format&fit=crop&w=1200&q=70"
                alt="Иллюстрация к обзору Lucky Bear casino: интерфейс слотов и онлайн казино на экране ноутбука"
                width={1200}
                height={630}
                className="h-48 w-full object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 720px"
              />
              <p className="p-4 text-xs text-ink-muted">
                Изображение носит декоративный характер и не подтверждает лицензию оператора.
              </p>
            </div>
            <ProseSections model={model} />
            {model.table ? (
              <div className="prose-local mt-8 overflow-x-auto">
                <table>
                  {model.table.caption ? <caption className="mb-2 text-left text-sm">{model.table.caption}</caption> : null}
                  <thead>
                    <tr>
                      {model.table.headers.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {model.table.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((c, ci) => (
                          <td key={ci}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
            <FAQBlock title="FAQ по теме страницы" items={model.faq} />
            <PseudoReviews />
            <SimilarCasinos />
            {!hideGeo ? <GeoStrip /> : null}
            <InternalLinks currentPath={path} />
            <section className="prose-local mt-12 rounded-2xl border border-dashed border-ink/15 bg-surface p-6">
              <h2 className="!mt-0 text-xl font-semibold">Расширенный справочный блок</h2>
              {model.footerSeo.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {model.lsiNote?.length ? (
                <p className="text-sm text-ink-muted">
                  См. также формулировки: {model.lsiNote.join(" · ")}.
                </p>
              ) : null}
            </section>
            <div className="mt-10 flex flex-wrap gap-3 border-t border-surface-accent pt-8">
              <AffiliateCta ariaLabel="Перейти в казино по партнёрской ссылке">
                Перейти в казино
              </AffiliateCta>
              <AffiliateCta variant="ghost" ariaLabel="Повторно открыть бонусную витрину">
                Получить бонус
              </AffiliateCta>
            </div>
          </div>
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-surface-accent bg-white p-4 text-sm text-ink/90 shadow-sm">
              <p className="font-semibold text-ink">Коротко</p>
              <ul className="mt-2 list-disc space-y-2 pl-4">
                <li>Lucky Bear — запросы: lucky bear casino, luckybear зеркало.</li>
                <li>Проверяйте KYC, лимиты, отыгрыш промокодов.</li>
                <li>Слоты на деньги требуют дисциплины банкролла.</li>
              </ul>
              <div className="mt-4">
                <AffiliateCta className="w-full" ariaLabel="CTA: официальный раздел">
                  Играть сейчас
                </AffiliateCta>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
