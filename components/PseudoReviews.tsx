const reviews = [
  {
    name: "Андрей, 34",
    city: "Алматы",
    text: "Искал обзор именно по lucky bear casino: интересовали слоты и понятный luckybear вход. По факту удобнее оказалась мобильная версия, чем ожидал. Бонусы читал в правилах дважды — так спокойнее.",
    score: 5,
  },
  {
    name: "Марина, 29",
    city: "Ташкент",
    text: "Часто путают написание: laki bir, lucky ber — я сама так ошиблась в поиске. Важно смотреть на адрес и поддержку. Тексты вроде этого помогли структурировать, что проверить до регистрации.",
    score: 4,
  },
  {
    name: "Дмитрий, 41",
    city: "Новосибирск",
    text: "Для меня ключевое — прозрачность по верификации и выводам. Псевдо‑отзывы везде есть, поэтому я ориентируюсь на скриншоты личного кабинета и время ответа поддержки, а не на эмоции.",
    score: 4,
  },
];

export function PseudoReviews() {
  return (
    <section className="mt-12 rounded-2xl border border-surface-accent bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-ink">
        Комментарии читателей (моделируемые отзывы)
      </h2>
      <p className="mt-2 text-sm text-ink-muted">
        Блок носит иллюстративный характер и показывает типичные мотивы обсуждений вокруг
        лаки бир казино. Не воспринимайте примеры как доказательство честности оператора.
      </p>
      <ul className="mt-4 grid gap-4 lg:grid-cols-3">
        {reviews.map((r) => (
          <li
            key={r.name}
            className="rounded-xl border border-surface-accent bg-surface p-4 text-sm"
          >
            <p className="font-semibold text-ink">
              {r.name}{" "}
              <span className="font-normal text-ink-muted">· {r.city}</span>
            </p>
            <p className="mt-1 text-xs text-gold" aria-label={`Оценка ${r.score} из 5`}>
              {"★".repeat(r.score)}
              <span className="text-ink/20">{"★".repeat(5 - r.score)}</span>
            </p>
            <p className="mt-2 text-ink/90">{r.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
