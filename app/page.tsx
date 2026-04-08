import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AffiliateCta } from "@/components/AffiliateCta";
import { FAQBlock } from "@/components/FAQBlock";
import { GeoStrip } from "@/components/GeoStrip";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { PseudoReviews } from "@/components/PseudoReviews";
import { RatingStars } from "@/components/RatingStars";
import { ScarcityBar } from "@/components/ScarcityBar";
import { SimilarCasinos } from "@/components/SimilarCasinos";
import { getSiteUrl } from "@/lib/affiliate";
import { homeChapters } from "@/lib/home-build";
import { primarySeoRoutes } from "@/lib/nav";

const site = getSiteUrl();

export const metadata: Metadata = {
  title:
    "Lucky Bear casino — большой обзор: бонусы, регистрация, зеркало, слоты и GEO",
  description:
    "Справочный лонгрид о lucky bear casino и лаки бир казино: luckybear вход, luckybear бонус, промокод lucky bear, слоты на деньги, отзывы, гео и ответственная подача.",
  alternates: { canonical: `${site}/` },
  keywords: [
    "lucky bear casino",
    "лаки бир казино",
    "luckybear вход",
    "luckybear регистрация",
    "luckybear зеркало",
    "luckybear бонус",
    "промокод lucky bear",
    "онлайн казино",
    "игровые автоматы",
    "слоты на деньги",
    "laki bir",
    "lucky ber",
  ],
};

const homeFaq = [
  {
    q: "Это официальный сайт Lucky Bear?",
    a: "Нет. Это независимый информационный портал. Переходы в казино помечены как партнёрские и открываются в новой вкладке.",
  },
  {
    q: "Почему так много повторов lucky bear casino?",
    a: "Формулировки отражают реальные поисковые запросы и синонимы (luckybear casino, лаки бир казино, lucky ber, laki bir), чтобы читатель находил ответ в одном месте.",
  },
  {
    q: "Обещаете ли вы доход?",
    a: "Нет. Исходы азартных игр случайны. Мы описываем интерфейс, бонусы и риски, без гарантий.",
  },
  {
    q: "Как проверить luckybear зеркало?",
    a: "Сверяйте SSL, юридические документы и ответы поддержки, а не только дизайн. При сомнениях не вводите платёжные данные.",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site}/#website`,
        url: site,
        name: "Lucky Bear — справочный портал",
        inLanguage: "ru-RU",
        publisher: { "@id": `${site}/#org` },
      },
      {
        "@type": "Organization",
        "@id": `${site}/#org`,
        name: "Lucky Bear editorial",
        url: site,
      },
      {
        "@type": "WebPage",
        "@id": `${site}/#webpage`,
        url: `${site}/`,
        name:
          "Lucky Bear casino — большой обзор: бонусы, регистрация, зеркало, слоты и GEO",
        isPartOf: { "@id": `${site}/#website` },
        inLanguage: "ru-RU",
        description:
      "Справочный лонгрид о lucky bear casino и лаки бир казино: luckybear вход, luckybear бонус, промокод lucky bear, слоты на деньги, отзывы, гео и ответственная подача.",
        about: [
          "lucky bear casino",
          "luckybear бонус",
          "промокод lucky bear",
          "онлайн казино",
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <article>
          <header className="border-b border-surface-accent pb-8">
            <p className="text-sm text-ink-muted">
              Независимый справочник · редакционный стиль · партнёрские переходы помечены
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Lucky Bear casino и лаки бир казино: структурированный обзор для спокойных
              решений
            </h1>
            <p className="mt-4 text-ink/90">
              Этот лонгрид собран вокруг запросов{" "}
              <span className="font-medium text-ink">
                lucky bear casino, luckybear вход, luckybear регистрация, luckybear зеркало,
                luckybear бонус, промокод lucky bear
              </span>{" "}
              и практических тем вроде игровых автоматов и слотов на деньги. Мы сознательно
              тянем синонимы{" "}
              <span className="font-medium">лаки бир казино</span>, варианты{" "}
              <span className="font-medium">laki bir</span> и{" "}
              <span className="font-medium">lucky ber</span>, чтобы страница отвечала живой
              выдаче поиска, а не оторванным заголовкам.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <RatingStars value={4.5} label="Редакционная полнота обзора: 4,5 из 5" />
              <span className="text-sm text-ink-muted">
                Оценка отражает глубину материала, не «честность казино».
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <AffiliateCta ariaLabel="Открыть страницу казино">Играть сейчас</AffiliateCta>
              <AffiliateCta variant="secondary" ariaLabel="Перейти к бонусной витрине">
                Получить бонус
              </AffiliateCta>
              <AffiliateCta variant="ghost" ariaLabel="Партнёрский переход в Lucky Bear">
                Перейти в казино
              </AffiliateCta>
            </div>
          </header>

          <ScarcityBar />

          <div className="mt-8 overflow-hidden rounded-2xl border border-surface-accent bg-surface shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=70"
              alt="Обзор Lucky Bear casino: современный интерфейс онлайн казино на десктопе, слоты и игровые автоматы в браузере"
              width={1400}
              height={720}
              className="h-56 w-full object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 720px"
            />
            <p className="p-4 text-xs text-ink-muted">
              Декоративная иллюстрация: не подтверждает контрактные обязательства оператора.
            </p>
          </div>

          <section className="prose-local mt-10 max-w-none">
            <h2>С чего начать читателю</h2>
            <p>
              Если вы впервые сталкиваетесь с термином{" "}
              <abbr title="Know Your Customer — верификация личности">KYC</abbr>, начните с
              разделов про luckybear регистрацию и документы. Это сэкономит время при первом
              выводе: большинство споров в отзывах о любом онлайн казино происходит именно на
              стыке бонуса и верификации, а не из‑за «несправедливого слота».
            </p>
            <p>
              Промокод lucky bear может иметь разный смысл: публичный код на лендинге,
              персональный после e‑mail рассылки, партнёрский с меткой. Для ясности фиксируйте
              источник кода и дату активации — поддержка быстрее помогает при чётком тикете.
            </p>
            <p>
              Ниже — развёрнутые главы: они масштабируются, если добавлять новые маршруты в{" "}
              <code className="rounded bg-surface-accent px-1 text-sm">app/p/[slug]</code> и
              расширять <code className="rounded bg-surface-accent px-1 text-sm">nav.ts</code>
              . Такой подход держит единый стиль внутренних ссылок и экономит время на выпуск
              сотен SEO‑страниц без ручного копипаста верстки.
            </p>
          </section>

          <section className="mt-10 rounded-2xl border border-surface-accent bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-ink">Таблица: что сравнить до депозита</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Условные поля — сверяйте фактические цифры после luckybear входа на официальном
              интерфейсе.
            </p>
            <div className="prose-local mt-4 overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Параметр</th>
                    <th>Lucky bear casino — на что смотреть</th>
                    <th>Комментарий редакции</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Вейджер</td>
                    <td>x30–x50</td>
                    <td>Чем ниже, тем проще отыгрыш, но проверьте ставку</td>
                  </tr>
                  <tr>
                    <td>Фриспины</td>
                    <td>пакетами</td>
                    <td>Срок жизни спинов часто короче, чем у кэша</td>
                  </tr>
                  <tr>
                    <td>Лимит ставки</td>
                    <td>в правилах</td>
                    <td>Превышение ломает luckybear бонус</td>
                  </tr>
                  <tr>
                    <td>KYC</td>
                    <td>1–3 дня</td>
                    <td>Чёткие фото ускоряют проверку</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="prose-local mt-12 max-w-none">
            <h2>Быстрые внутренние ссылки</h2>
            <p>
              Чтобы усилить перелинковку, держите под рукой короткий список основных маршрутов:
            </p>
            <ul>
              {primarySeoRoutes.map((r) => (
                <li key={r.href}>
                  <Link
                    className="text-brand-hover underline decoration-brand/30 underline-offset-4"
                    href={r.href}
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {homeChapters.map((ch) => (
            <section key={ch.h2} className="prose-local mt-12 max-w-none">
              <h2>{ch.h2}</h2>
              {ch.paragraphs.map((p, i) => (
                <p key={`${ch.h2}-${i}`}>{p}</p>
              ))}
            </section>
          ))}

          <FAQBlock title="Частые вопросы читателей" items={homeFaq} />
          <PseudoReviews />
          <SimilarCasinos />
          <GeoStrip />

          <section className="prose-local mt-12 max-w-none rounded-2xl border border-dashed border-ink/15 bg-surface p-6">
            <h2>SEO‑блок внизу страницы (видимый)</h2>
            <p>
              Завершающий справочный фрагмент объединяет LSI: интернет‑казино, видеослоты,
              лимиты ответственной игры, программы лояльности, турниры и live‑дилеры. Мы
              повторяем lucky bear casino / лаки бир казино / luckybear casino не для
              «плотности», а потому что так реально ищут люди — включая ошибочные{" "}
              <strong>lucky ber</strong> и <strong>laki bir</strong>.
            </p>
            <p>
              Технически проект готов к росту: добавьте новый элемент в{" "}
              <code className="rounded bg-surface-accent px-1 text-sm">programmaticSlugs</code>{" "}
              и заголовки в фабрику — страница появится в сборке, sitemap и меню автоматически.
            </p>
            <p>
              Партнёрская ссылка задаётся окружением{" "}
              <code className="rounded bg-surface-accent px-1 text-sm">
                NEXT_PUBLIC_AFFILIATE_URL
              </code>
              ; базовый адрес сайта —{" "}
              <code className="rounded bg-surface-accent px-1 text-sm">
                NEXT_PUBLIC_SITE_URL
              </code>{" "}
              для корректных canonical и карты сайта на Vercel.
            </p>
          </section>

          <InternalLinks currentPath="/" />

          <div className="mt-10 flex flex-wrap gap-3 border-t border-surface-accent pt-8">
            <AffiliateCta ariaLabel="Главный CTA: играть">Играть сейчас</AffiliateCta>
            <AffiliateCta variant="secondary" ariaLabel="Главный CTA: бонус">
              Получить бонус
            </AffiliateCta>
          </div>
        </article>
      </div>
    </>
  );
}
