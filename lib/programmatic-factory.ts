import type { FaqItem } from "@/components/FAQBlock";
import type { SeoPageModel, SeoSection } from "@/lib/seo-types";
import {
  programmaticSlugs,
  type ProgrammaticSlug,
} from "@/lib/nav";

const LSI = [
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
  "laki bir",
  "lucky ber",
  "luckybear casino",
  "играть на деньги",
  "live казино",
];

function hash32(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function pick<T>(slug: string, salt: string, arr: readonly T[]): T {
  return arr[hash32(`${slug}:${salt}`) % arr.length];
}

const POOL_A = [
  "Когда читатель формулирует запрос узко, важно не потерять общий контекст lucky bear casino: бонусы, KYC и платёжные лимиты связаны между собой сильнее, чем кажется на первый взгляд.",
  "Маркетинговые заголовки про «мгновенные выплаты» редко раскрывают полную картину: внутренние проверки, выходные сутки банков и статус верификации могут добавлять часы и дни.",
  "Слоты на деньги требуют плана сессии: отметьте стартовый баланс, верхнюю границу проигрыша и время окончания до того, как нажмёте первый спин.",
  "Live‑столы чувствительны к задержке сети: если пинг нестабилен, комфортнее начать с RNG‑игр, где нет таймера на действия соседей по столу.",
  "Онлайн казино в 2026 году активнее использует персонализацию: у двух игроков интерфейс бонусов может отличаться тегами сегмента, это не баг.",
] as const;

const POOL_B = [
  "Для luckybear регистрации используйте уникальный пароль и отдельную почту без «лёгких» секретных вопросов — утечки баз случаются и у сервисов вне казино.",
  "Промокод lucky bear может быть привязан к домену: если вы открыли страницу через другое luckybear зеркало, убедитесь, что реферальная метка сохранилась.",
  "Если вводите бренд с ошибкой lucky ber или laki bir, сверяйте контакты поддержки и SSL, а не только логотип.",
  "Игровые автоматы с бонус‑баем быстро меняют дисперсию: фиксируйте стоимость покупки в истории, чтобы не потерять счётчик банкролла.",
  "При валютных конвертациях сравните спред внутри казино с рыночным курсом — иногда дешевле пополнить напрямую в целевой валюте.",
] as const;

const POOL_C = [
  "Ответственная игра — не лозунг, а набор инструментов: лимиты времени, депозитов, паузы и самоисключение там, где площадка их реально поддерживает.",
  "Не публикуйте в открытый доступ сканы документов даже «с замазанными» полями — часть метаданных может раскрыть больше, чем ожидается.",
  "Сохраняйте PDF правил акции: при изменении условий в середине отыгрыша аргумент с датой сильнее устных обещаний оператора.",
  "Если luckybear бонус «застыл» в статусе ожидания, сначала проверьте, прошла ли полностью оплата и нет ли сплита на несколько депозитов.",
  "Турнирные таблицы могут обновляться с задержкой: не ориентируйтесь на рейтинг в последние минуты без пересчёта.",
] as const;

const TITLES: Record<ProgrammaticSlug, { h1: string; title: string; description: string }> = {
  "lucky-bear-kazino-otzyvy-realnye": {
    h1: "Lucky Bear казино отзывы реальные: как читать и что проверить",
    title: "Lucky Bear казино отзывы реальные — нейтральный разбор",
    description:
      "Гайд по lucky bear casino: отзывы, ошибки lucky ber/laki bir, luckybear вход и доказательная база вместо эмоций.",
  },
  "laki-bir-kazino-bonus-za-registraciyu": {
    h1: "Лаки бир казино бонус за регистрацию: условия и подводные камни",
    title: "Лаки бир казино бонус за регистрацию — справка",
    description:
      "Как читать бонус лаки бир казино после регистрации: luckybear бонус, вейджер, срок и ограничения по слотам.",
  },
  "igrat-v-lucky-bear-na-dengi": {
    h1: "Играть в Lucky Bear на деньги: лимиты, дисциплина и налоги",
    title: "Играть в Lucky Bear на деньги — практический чек‑лист",
    description:
      "Материал для запроса играть в lucky bear на деньги: банкролл, lucky bear casino и ответственные рамки.",
  },
  "skachat-lucky-bear-na-android": {
    h1: "Скачать Lucky Bear на Android безопасно: APK, PWA и проверки",
    title: "Скачать Lucky Bear на Android — инструкция безопасности",
    description:
      "Скачать lucky bear на андроид: как отличить подделку, зачем нужен luckybear вход только с официальной страницы.",
  },
  "luchshie-sloty-lucky-bear": {
    h1: "Лучшие слоты Lucky Bear: фильтры вместо «топов из воздуха»",
    title: "Лучшие слоты Lucky Bear — осмысленный подбор",
    description:
      "Запрос лучшие слоты lucky bear: волатильность, лимиты luckybear бонуса и типовые игровые автоматы.",
  },
  "lucky-bear-zerkalo-rabochee": {
    h1: "Рабочее зеркало Lucky Bear: безопасность и отличия интерфейса",
    title: "Luckybear зеркало — что проверить перед входом",
    description:
      "luckybear зеркало и риски фишинга: lucky bear casino, признаки подлинности домена и поддержка.",
  },
  "luckybear-vhod-lichniy-kabinet": {
    h1: "Luckybear вход и личный кабинет: 2FA и типовые ошибки",
    title: "Luckybear вход в личный кабинет — гид",
    description:
      "luckybear вход, история платежей, статус luckybear бонуса и промокод lucky bear в кабинете.",
  },
  "lucky-bear-bonus-bez-depozita": {
    h1: "Бонус без депозита Lucky Bear: редкость или маркетинг?",
    title: "Lucky Bear бездепозитный бонус — как читать правила",
    description:
      "luckybear бонус без депозита в лаки бир казино: вейджер, лимиты выигрыша и страны.",
  },
  "lucky-bear-fribety-i-akcii": {
    h1: "Фрибеты и акции Lucky Bear: отличия от классического кэшбэка",
    title: "Фрибеты Lucky Bear — нюансы активации",
    description:
      "Акции lucky bear casino: фрибеты, luckybear бонус, совмещение с промокод lucky bear.",
  },
  "lucky-bear-mobilnaya-versiya-brauzer": {
    h1: "Мобильная версия Lucky Bear в браузере: скорость и экономия трафика",
    title: "Мобильная Lucky Bear casino в браузере",
    description:
      "lucky bear casino на телефоне без лишних APK: luckybear вход, слоты и live.",
  },
  "lucky-bear-vyplaty-i-limiti": {
    h1: "Выплаты и лимиты Lucky Bear: что ускоряет вывод средств",
    title: "Выплаты Lucky Bear casino — лимиты и KYC",
    description:
      "Вывод в lucky bear casino: luckybear регистрация, верификация и лимиты по VIP.",
  },
  "lucky-bear-verifikaciya-akkaunta": {
    h1: "Верификация аккаунта Lucky Bear: документы и сроки",
    title: "KYC Lucky Bear — как пройти быстрее",
    description:
      "luckybear регистрация и KYC: загрузка файлов, типовые отказы лаки бир казино.",
  },
  "lucky-bear-keshbek-programma": {
    h1: "Кэшбек‑программа Lucky Bear: проценты и нюансы начисления",
    title: "Кэшбек Lucky Bear casino",
    description:
      "luckybear бонус в виде кэшбэка: периоды, лимиты, игровые автоматы и слоты на деньги.",
  },
  "lucky-bear-turniry-i-liderbordi": {
    h1: "Турниры и лидерборды Lucky Bear: очки, призовые и расписание",
    title: "Турниры Lucky Bear casino",
    description:
      "Турниры lucky bear casino: правила отбора слотов, вейджер отдельного пакета luckybear бонуса.",
  },
  "lucky-bear-live-igri": {
    h1: "Live‑игры Lucky Bear: студии, лимиты стола и этикет чата",
    title: "Live Lucky Bear casino",
    description:
      "Live‑казино в лаки бир казино: задержка сети, luckybear вход и отличия от RNG.",
  },
  "lucky-bear-prilozhenie-ios-kak-ustanovit": {
    h1: "Приложение Lucky Bear для iOS: пути установки и риски",
    title: "iOS‑клиент Lucky Bear casino",
    description:
      "Установка lucky bear casino на iPhone: TestFlight, веб‑оболочки, luckybear зеркало.",
  },
  "lucky-bear-oficialnyy-sayt-obzor": {
    h1: "Официальный сайт Lucky Bear: структура разделов и навигация",
    title: "Обзор официального сайта Lucky Bear",
    description:
      "Карта lucky bear casino: luckybear вход, касса, бонусы, служба поддержки.",
  },
  "lucky-bear-nadezhnost-i-litsenziya": {
    h1: "Надёжность Lucky Bear: лицензии, провайдеры и прозрачность правил",
    title: "Надёжность Lucky Bear casino",
    description:
      "Оценка надёжности лаки бир казино без обещаний «100%»: правила, партнёры, luckybear бонус.",
  },
  "lucky-bear-kriptovalyuty-popolnenie": {
    h1: "Пополнение криптовалютой в Lucky Bear: сети и комиссии",
    title: "Криптовалюты Lucky Bear casino",
    description:
      "USDT и другие сценарии: lucky bear casino, подтверждения сети, ошибки адреса.",
  },
  "lucky-bear-minimalnyy-depozit": {
    h1: "Минимальный депозит Lucky Bear: пороги и эквиваленты",
    title: "Минимальный депозит в Lucky Bear",
    description:
      "Минималка lucky bear casino по методам и валютам, luckybear бонус и активация.",
  },
  "lucky-ber-casino-chasto-pishut-s-oshibkoy": {
    h1: "Lucky ber casino: опечатка в поиске и как не попасть на клон",
    title: "Lucky ber casino — ловушки опечаток",
    description:
      "lucky ber, laki bir, luckybear casino: почему важно сверять домены lucky bear casino.",
  },
  "luckybear-promokod-s-aktivatsiey": {
    h1: "Промокод Luckybear с активацией: пошагово и с примерами ошибок",
    title: "Активация промокода lucky bear",
    description:
      "промокод lucky bear: где вводить после luckybear входа, сроки и регионы.",
  },
  "lucky-bear-ohota-za-bonusami": {
    h1: "Охота за бонусами Lucky Bear: когда выгодно, а когда вредно",
    title: "Бонус‑хаунтинг Lucky Bear casino",
    description:
      "luckybear бонус, математика отыгрыша и слоты на деньги без иллюзий.",
  },
  "sloty-laki-bir-reyting-volatilnosti": {
    h1: "Слоты лаки бир: рейтинг волатильности для практики",
    title: "Слоты лаки бир — волатильность и RTP",
    description:
      "Подбор слотов лаки бир казино под цели: lucky bear casino и параметры машин.",
  },
  "lucky-bear-bonus-na-pervyy-depozit": {
    h1: "Бонус на первый депозит Lucky Bear: математика пакета",
    title: "Первый депозит Lucky Bear casino",
    description:
      "luckybear бонус к депозиту: процент, фриспины, ограничение ставки.",
  },
  "lucky-bear-bezopasnost-dannyh": {
    h1: "Безопасность данных в Lucky Bear: пароли, сессии, Wi‑Fi",
    title: "Безопасность Lucky Bear casino",
    description:
      "luckybear регистрация и защита аккаунта в lucky bear casino.",
  },
  "lucky-bear-podderzhka-24-7": {
    h1: "Поддержка Lucky Bear 24/7: чат, почта и качество ответов",
    title: "Поддержка Lucky Bear casino",
    description:
      "Как фиксировать тикеты и доказательства при спорах по luckybear бонусу.",
  },
  "lucky-bear-igrovye-avtomaty-klassika": {
    h1: "Игровые автоматы Lucky Bear: классика против видеослотов",
    title: "Классические автоматы Lucky Bear",
    description:
      "Игровые автоматы lucky bear casino: простые линии, лимиты, luckybear вход.",
  },
  "lucky-bear-dzhekpoty-progressivnye": {
    h1: "Прогрессивные джекпоты в Lucky Bear: риски и ожидания",
    title: "Джекпоты Lucky Bear casino",
    description:
      "Прогрессивные джекпоты lucky bear casino: математика, лимиты ставок и бонусные ограничения.",
  },
  "lucky-bear-programma-loyalnosti-urovni": {
    h1: "Программа лояльности Lucky Bear: уровни, баллы и обмен",
    title: "Лояльность Lucky Bear",
    description:
      "Уровни программы лояльности лаки бир казино: luckybear бонус и кэшбек по статусу.",
  },
  "lucky-bear-kazahstan-tyenge-limits": {
    h1: "Lucky Bear в Казахстане: лимиты в тенге и платежи",
    title: "Тенге и лимиты Lucky Bear KZ",
    description:
      "lucky bear casino для KZT: лимиты, luckybear регистрация и локальные карты.",
  },
  "lucky-bear-uzbekistan-sum-popolnenie": {
    h1: "Пополнение Lucky Bear из Узбекистана в сумах",
    title: "UZS и Lucky Bear casino",
    description:
      "Пополнение lucky bear casino из Узбекистана: сумы, комиссии и luckybear зеркало.",
  },
  "lucky-bear-rossiya-rubli-vyvody": {
    h1: "Выводы в рублях Lucky Bear: правовая оговорка и практика лимитов",
    title: "Рубли и вывод Lucky Bear",
    description:
      "Информация без призывов нарушать закон: рублёвые лимиты lucky bear casino и KYC.",
  },
  "lucky-bear-slots-book-dead-obzor": {
    h1: "Book of Dead в Lucky Bear: механика бонус‑раунда и волатильность",
    title: "Book of Dead — обзор в Lucky Bear",
    description:
      "Слот Book of Dead в lucky bear casino: фриспины, риск‑раунд, luckybear бонус.",
  },
  "lucky-bear-slots-sweet-bonanza-obzor": {
    h1: "Sweet Bonanza в Lucky Bear: множители и покупка бонуса",
    title: "Sweet Bonanza — обзор в Lucky Bear",
    description:
      "Sweet Bonanza как пример высокой волатильности в лаки бир казино.",
  },
  "lucky-bear-slots-gates-olympus-obzor": {
    h1: "Gates of Olympus в Lucky Bear: анте и серии множителей",
    title: "Gates of Olympus — обзор в Lucky Bear",
    description:
      "Gates of Olympus в lucky bear casino: лимиты ставки и отыгрыш luckybear бонуса.",
  },
  "lucky-bear-strategiya-bankroll": {
    h1: "Банкролл‑стратегия для Lucky Bear: дисциплина важнее «систем»",
    title: "Стратегия банкролла Lucky Bear",
    description:
      "Управление банкроллом в lucky bear casino без мифов о «гарантированной прибыли».",
  },
  "lucky-bear-otvetstvennaya-igra": {
    h1: "Ответственная игра в Lucky Bear: лимиты и сигналы риска",
    title: "Ответственная игра Lucky Bear",
    description:
      "Как использовать лимиты, паузы и самоконтроль при игре на lucky bear casino.",
  },
  "lucky-bear-sravnenie-s-drugimi-kazino": {
    h1: "Сравнение Lucky Bear с другими казино: нейтральные критерии",
    title: "Сравнение Lucky Bear casino",
    description:
      "Сравниваем lucky bear casino по правилам, поддержке и прозрачности бонусов.",
  },
  "kak-poluchit-keshbek-lucky-bear": {
    h1: "Как получить кэшбек в Lucky Bear: правила и календарь",
    title: "Кэшбек Lucky Bear — как получить",
    description:
      "kak получить кэшбек lucky bear: периоды, лимиты, luckybear вход и статус VIP.",
  },
} satisfies Record<ProgrammaticSlug, { h1: string; title: string; description: string }>;

const PROGRAMMATIC_SET = new Set<string>(programmaticSlugs as unknown as string[]);

function faqFor(slug: ProgrammaticSlug, topic: string): FaqItem[] {
  return [
    {
      q: `Чем полезен материал по теме «${topic}» для lucky bear casino?`,
      a: "Он структурирует проверки: платежи, luckybear бонус, промокод lucky bear и ограничения слотов — без обещаний быстрого обогащения.",
    },
    {
      q: "Почему важно сверять lucky ber и laki bir?",
      a: "Опечатки ведут на клоны. Сравнивайте SSL, политику конфиденциальности и ответы поддержки, а не только визуальный дизайн.",
    },
    {
      q: "Можно ли сочетать несколько luckybear бонусов?",
      a: "Часто нет: активный пакет блокирует новый. Читайте правило stacking в документе акции.",
    },
    {
      q: "Какие слоты на деньги лучше для длинной сессии?",
      a: "Обычно машины со средней волатильностью и понятным лимитом ставки — но итог зависит от вашего банкролла и цели сессии.",
    },
    {
      q: "Нужен ли luckybear зеркало каждый день?",
      a: "Не всем пользователям. Если домен открывается штатно, зеркало не требуется; храните только проверенные ссылки.",
    },
  ];
}

function sectionsFor(slug: ProgrammaticSlug): SeoSection[] {
  const t = TITLES[slug];
  return [
    {
      h2: "Контекст запроса и практические шаги",
      paragraphs: [
        `${t.h1.split(":")[0]} — темой этого лонгрида мы связываем lucky bear casino, лаки бир казино и типовые сценарии luckybear входа. Дальше — универсальные рекомендации, применимые к большинству онлайн казино с бонусной витриной.`,
        pick(slug, "a1", POOL_A),
        pick(slug, "b1", POOL_B),
      ],
    },
    {
      h2: "Бонусы, промокоды и слоты",
      paragraphs: [
        pick(slug, "c1", POOL_C),
        `Промокод lucky bear может дополнять пакет free spins или процент к депозиту — фиксируйте код, дату и скриншот формы активации сразу после luckybear регистрации.`,
        pick(slug, "a2", POOL_A),
      ],
      h3: [
        {
          title: "GEO и валюты",
          paragraphs: [
            "Для смежных гайдов смотрите разделы про Казахстан, Россию и Узбекистан на основных страницах портала — там валютные нюансы раскрыты отдельно.",
            pick(slug, "b2", POOL_B),
          ],
        },
      ],
    },
    {
      h2: "Расширение темы без перегруза",
      paragraphs: [
        pick(slug, "c2", POOL_C),
        `Мы сознательно повторяем синонимы — luckybear casino, laki bir, lucky ber — не ради плотности, а чтобы страница отвечала реальным поисковым формулировкам читателей.`,
        pick(slug, "a3", POOL_A),
      ],
    },
  ];
}

function footerFor(slug: ProgrammaticSlug): string[] {
  const label = slug.replace(/-/g, " ");
  return [
    `SEO‑справка по запросу «${label}» включает LSI‑цепочку: онлайн казино, игровые автоматы, слоты на деньги, live казино, luckybear зеркало и luckybear бонус. Повторы отражают живой язык выдачи, а не попытку скрыть смысл.`,
    `Страница масштабируется: добавляйте новые programmatic slug в nav.ts — фабрика подтянет заголовки и соберёт секции. Для уникальности редактируйте пулы POOL_* или расширяйте TITLES.`,
    `Информация носит справочный характер. Перед любым депозитом перепроверьте актуальные правила lucky bear casino в интерфейсе оператора на момент действия.`,
  ];
}

export function getProgrammaticPage(slug: string): SeoPageModel | null {
  if (!PROGRAMMATIC_SET.has(slug)) return null;
  const s = slug as ProgrammaticSlug;
  const t = TITLES[s];
  return {
    slugPath: `p/${s}`,
    title: t.title,
    description: t.description,
    keywords: [...LSI],
    h1: t.h1,
    lead: [
      `Длинный справочник по запросу, связанному с ${t.h1}. Здесь собраны формулировки вокруг lucky bear casino и лаки бир казино, включая luckybear регистрацию, luckybear зеркало, промокод lucky bear и отличия слотов на деньги от демо‑режима.`,
      `Часть читателей приходит с опечатками laki bir или lucky ber — это нормально для поиска. Мы сохраняем технические термины luckybear casino, чтобы снизить путаницу между брендом и поддельными копиями сайта.`,
      pick(s, "lead", POOL_B),
    ],
    sections: sectionsFor(s),
    faq: faqFor(s, t.title),
    footerSeo: footerFor(s),
    lsiNote: [
      "бонусный вейджер",
      "лимит ставки",
      "история раундов",
      "поддержка 24/7",
    ],
  };
}

export function allProgrammaticPages(): SeoPageModel[] {
  return programmaticSlugs.map((s) => getProgrammaticPage(s)!);
}