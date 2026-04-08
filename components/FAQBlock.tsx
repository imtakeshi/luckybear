"use client";

import { useId, useState } from "react";

export type FaqItem = { q: string; a: string };

export function FAQBlock({ title, items }: { title: string; items: FaqItem[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="mt-12 rounded-2xl border border-surface-accent bg-white p-6 shadow-sm"
      aria-labelledby={`${baseId}-h`}
    >
      <h2 id={`${baseId}-h`} className="text-xl font-semibold text-ink">
        {title}
      </h2>
      <div className="mui-accordion mt-4 divide-y divide-surface-accent">
        {items.map((it, i) => {
          const isOpen = open === i;
          const panelId = `${baseId}-panel-${i}`;
          const btnId = `${baseId}-btn-${i}`;
          return (
            <div key={i} className="py-3">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-3 text-left font-medium text-ink"
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{it.q}</span>
                <span className="text-brand" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className={`mt-2 text-ink/90 ${isOpen ? "" : "hidden"}`}
              >
                <p>{it.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
