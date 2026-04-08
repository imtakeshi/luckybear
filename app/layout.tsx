import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/affiliate";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-geist-sans" });

const site = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default:
      "Lucky Bear casino — справочный портал: бонусы, отзывы, регистрация, слоты",
    template: "%s · Lucky Bear portal",
  },
  description:
    "Независимые гиды по lucky bear casino и лаки бир казино: luckybear вход, luckybear бонус, промокод lucky bear, слоты на деньги и гео‑материалы. С ответственной подачей, без обещаний выигрыша.",
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
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Lucky Bear editorial",
    title: "Lucky Bear — информационный портал",
    description:
      "Обзоры, ответы на НЧ и СЧ запросы, внутренняя перелинковка для быстрой навигации.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
