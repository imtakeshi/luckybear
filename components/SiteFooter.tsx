import Link from "next/link";
import { primarySeoRoutes } from "@/lib/nav";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-surface-accent bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-ink-muted">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-semibold text-ink">О проекте</p>
            <p className="mt-2 leading-relaxed">
              Независимый информационный ресурс о Lucky Bear casino, лаки бир казино и
              смежных темах: luckybear регистрация, промокод lucky bear, игровые автоматы и
              слоты на деньги. Материалы не являются финансовой консультацией.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink">Навигация</p>
            <ul className="mt-2 grid gap-1">
              {primarySeoRoutes.map((r) => (
                <li key={r.href}>
                  <Link className="hover:text-ink" href={r.href}>
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-ink">Ответственность</p>
            <p className="mt-2 leading-relaxed">
              Азартные игры могут вызывать зависимость. Проверяйте локальные законы.
              Играйте только на средства, которые готовы потерять, и используйте лимиты.
            </p>
          </div>
        </div>
        <p className="mt-8 border-t border-surface-accent pt-6 text-xs">
          © {year} Lucky Bear editorial notes. Все торговые марки принадлежат правообладателям.
        </p>
      </div>
    </footer>
  );
}
