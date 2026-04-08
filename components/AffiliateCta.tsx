import { getAffiliateUrl } from "@/lib/affiliate";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-xl border border-brand/40 bg-brand-soft px-5 py-3 text-sm font-semibold text-brand-hover transition hover:border-brand hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-xl border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-brand/50 hover:text-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
};

export function AffiliateCta({
  children,
  label,
  variant = "primary",
  className = "",
  ariaLabel,
}: {
  children: React.ReactNode;
  label?: string;
  variant?: Variant;
  className?: string;
  /** Доступное имя действия, без «набивки» ключами */
  ariaLabel?: string;
}) {
  const href = getAffiliateUrl();
  return (
    <a
      href={href}
      rel="nofollow sponsored noopener noreferrer"
      target="_blank"
      className={`${styles[variant]} ${className}`}
      aria-label={ariaLabel ?? (typeof children === "string" ? children : label)}
    >
      {children}
    </a>
  );
}
