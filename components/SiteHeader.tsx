import Link from "next/link";
import { primarySeoRoutes } from "@/lib/nav";
import { AffiliateCta } from "@/components/AffiliateCta";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-accent bg-white/90 backdrop-blur">
      <a href="#main" className="sr-only focus-skip">
        Перейти к содержанию
      </a>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-bold text-white"
            aria-hidden
          >
            LB
          </span>
          <span className="text-sm font-semibold text-ink">
            Lucky Bear — справочный портал
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-sm" aria-label="Разделы">
          {primarySeoRoutes.slice(0, 4).map((r) => (
            <Link
              key={r.href}
              className="rounded-lg px-2 py-1 text-ink-muted hover:bg-surface hover:text-ink"
              href={r.href}
            >
              {r.label}
            </Link>
          ))}
          <Link
            className="rounded-lg px-2 py-1 text-ink-muted hover:bg-surface hover:text-ink"
            href="/p/lucky-bear-kazino-otzyvy-realnye"
          >
            Гайды
          </Link>
        </nav>
        <AffiliateCta variant="secondary" ariaLabel="Перейти к официальному разделу казино">
          Перейти в казино
        </AffiliateCta>
      </div>
    </header>
  );
}
