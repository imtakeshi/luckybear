"use client";

import { useEffect, useMemo, useState } from "react";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

/** Декоративный таймер и счётчик «онлайн» для удержания внимания; не претендует на реальные данные */
export function ScarcityBar() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const online = useMemo(() => {
    const base = 1200 + ((now / 60000) % 1) * 80;
    return Math.round(base);
  }, [now]);

  const end = useMemo(() => {
    const d = new Date(now);
    const h = d.getHours();
    const m = d.getMinutes();
    const sec = 59 - (d.getSeconds() % 60);
    const leftH = h % 3 === 0 && m > 45 ? 0 : 2 - (h % 3);
    const leftM = 59 - m;
    return { leftH: Math.max(0, leftH), leftM: Math.max(0, leftM), sec };
  }, [now]);

  return (
    <div className="rounded-2xl border border-gold/40 bg-gold-soft/60 p-4 text-sm text-ink">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-medium">
          Ограниченный бонусный пакет: окно активации обновляется по расписанию.
        </p>
        <div
          className="font-mono text-lg tracking-widest text-gold"
          aria-live="polite"
          aria-atomic="true"
        >
          {pad(end.leftH)}:{pad(end.leftM)}:{pad(end.sec)}
        </div>
      </div>
      <p className="mt-2 text-ink-muted">
        Сейчас на странице обзора активны примерно{" "}
        <strong className="text-ink">{online}</strong> посетителей — спрос на
        материалы о Lucky Bear растёт в пиковые часы.
      </p>
    </div>
  );
}
