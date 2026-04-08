import Link from "next/link";
import { primarySeoRoutes, programmaticSlugs } from "@/lib/nav";

export function InternalLinks({ currentPath }: { currentPath: string }) {
  const primary = primarySeoRoutes.filter((r) => r.href !== currentPath);
  const progSample = programmaticSlugs
    .filter((_, i) => i % 3 === 0)
    .slice(0, 12)
    .map((slug) => ({ href: `/p/${slug}`, label: slug.replace(/-/g, " ") }));

  return (
    <nav
      className="mt-12 rounded-2xl border border-surface-accent bg-white p-6 shadow-sm"
      aria-label="Связанные материалы"
    >
      <h2 className="text-xl font-semibold text-ink">Полезные разделы портала</h2>
      <p className="mt-2 text-sm text-ink-muted">
        Внутренняя перелинковка помогает быстрее найти подробности по бонусам, входу,
        отзывам и слотам Lucky Bear.
      </p>
      <div className="mt-4 grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-ink">Основные SEO‑страницы</p>
          <ul className="mt-2 grid gap-2 text-sm">
            {primary.map((r) => (
              <li key={r.href}>
                <Link
                  className="text-brand-hover underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
                  href={r.href}
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Длинные запросы и гайды</p>
          <ul className="mt-2 grid gap-2 text-sm">
            {progSample.map((r) => (
              <li key={r.href}>
                <Link
                  className="text-brand-hover underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
                  href={r.href}
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
