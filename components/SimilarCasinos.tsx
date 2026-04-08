const items = [
  { name: "Lucky Bear", note: "Тема текущего обзора: слоты, бонусы, мобильный доступ." },
  { name: "Площадки с лицензией", note: "Сравнивайте правила отыгрыша и лимиты вывода заранее." },
  { name: "Бренды с прозрачной поддержкой", note: "Чат, почта, база знаний — минимальный набор для спокойной игры." },
];

export function SimilarCasinos() {
  return (
    <section className="mt-12 rounded-2xl border border-surface-accent bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-ink">Похожие казино и альтернативы</h2>
      <p className="mt-2 text-ink/90">
        Редакция портала сопоставляет Lucky Bear casino с другими онлайн‑казино по
        удобству интерфейса, скорости выплат и качеству бонусной политики. Ниже —
        нейтральная подборка ориентиров для собственного сравнения (не рейтинг и не
        финансовая рекомендация).
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {items.map((it) => (
          <li
            key={it.name}
            className="rounded-xl border border-surface-accent bg-surface p-4 text-sm"
          >
            <p className="font-semibold text-ink">{it.name}</p>
            <p className="mt-1 text-ink-muted">{it.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
