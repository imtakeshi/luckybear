export function RatingStars({
  value,
  label,
  max = 5,
}: {
  value: number;
  label: string;
  max?: number;
}) {
  const full = Math.round(Math.min(max, Math.max(0, value)));
  return (
    <div
      className="flex items-center gap-1"
      aria-label={label}
      role="img"
    >
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={i < full ? "text-gold" : "text-ink/15"}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}
