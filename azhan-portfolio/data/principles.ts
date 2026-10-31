export interface PrincipleItem {
  id: string;
  category: "quality" | "architecture" | "ux" | "growth";
  title: {
    en: string;
    ku: string;
  };
  summary: {
    en: string;
    ku: string;
  };
  details: {
    en: string;
    ku: string;
  };
  realWorldApplication: {
    en: string;
    ku: string;
  };
  status: "established" | "learning_goal";
  statusLabel: {
    en: string;
    ku: string;
  };
}

export const engineeringPrinciplesData: PrincipleItem[] = [
  {
    id: "type-safety-as-documentation",
    category: "quality",
    title: {
      en: "Type Safety as Living Documentation",
      ku: "تایپسکریپت وەک بەڵگەنامەی ڕاستەقینەی کۆد",
    },
    summary: {
      en: "Types are not just compile checks; they are the contract that defines how data moves and prevents silent failures.",
      ku: "تایپەکان تەنها بۆ پشکنینی هەڵە نین، بەڵکو پەیماننامەیەکن کە شێوازی جوڵەی داتا ڕوون دەکەنەوە و ڕێگری لە هەڵەی شاراوە دەکەن.",
    },
    details: {
      en: "I avoid using `any` as an escape hatch. When modeling real-world domains like market checkouts or media streams, I prefer strict Discriminated Unions and readonly immutability so invalid states cannot even compile.",
      ku: "دوور دەکەومەوە لە بەکارهێنانی `any`. کاتێک سیستەمی فرۆشتن یان پەخشی فیلم مۆدێل دەکەم، جۆرەکانی Discriminated Unions بەکاردەهێنم تا دۆخی نادروست هەر لە بنەڕەتەوە دروست نەبێت.",
    },
    realWorldApplication: {
      en: "In Xizmat Market POS, invoice totals and change calculations are constrained to strictly validated state transitions.",
      ku: "لە سیستەمی مارکێتی خزمەتدا، هەژماری وەسڵ و پارەی ماوەتەوە بە یاسای توندی تایپ پارێزراوە.",
    },
    status: "established",
    statusLabel: {
      en: "Daily Practice",
      ku: "شێوازی کارکردنی ڕۆژانە",
    },
  },
  {
    id: "offline-resilience",
    category: "architecture",
    title: {
      en: "Offline Resilience & Data Integrity",
      ku: "خۆڕاگری لە کاتی نەمانی ئینتەرنێت و پاراستنی داتا",
    },
    summary: {
      en: "Never assume a reliable internet connection. Software should degrade gracefully and protect user progress.",
      ku: "هیچ کات وادامەنێ ئینتەرنێت بەردەوامە؛ پێویستە بەرنامە تەنانەت بەبێ ئینتەرنێتیش بە بێ کێشە کار بکات.",
    },
    details: {
      en: "Retail cashier desks cannot halt because broadband drops. Architecting systems to store data locally first with IndexedDB ensures business continuity, queueing sync tasks until connectivity is restored.",
      ku: "مێزی کاشێر نابێت بوەستێت بەهۆی بڕانی هێڵەوە؛ دانانی تەلارسازیی ئۆفلاین بە سوودوەرگرتن لە داتای ناوخۆ بەردەوامی بە کارەکە دەبەخشێت.",
    },
    realWorldApplication: {
      en: "Built into Xizmat Market POS, allowing cashier checkout and receipt printing entirely offline.",
      ku: "لەسەر سیستەمی مارکێتی خزمەت جێبەجێ کراوە، کە تەواوی فرۆشتن و چاپی وەسڵ بە شێوازی ئۆفلاین کار دەکات.",
    },
    status: "established",
    statusLabel: {
      en: "Daily Practice",
      ku: "شێوازی کارکردنی ڕۆژانە",
    },
  },
  {
    id: "pragmatic-architecture",
    category: "architecture",
    title: {
      en: "Pragmatic Architecture over Speculative Complexity",
      ku: "تەلارسازیی کرداری لە جیاتی ئاڵۆزیی ناپێویست",
    },
    summary: {
      en: "Solve the immediate engineering problem cleanly before abstracting for hypothetical future scales.",
      ku: "کێشەی ئێستا بە خاوێنی و سادەیی چارەسەر بکە پێش ئەوەی بەرنامەکە بە ئاڵۆزیی زیادە قورس بکەیت.",
    },
    details: {
      en: "Premature microservices and redundant global state libraries introduce needless cognitive load. I value straightforward React hooks, localized state, and clear folder boundaries.",
      ku: "بەستنەوەی فریمۆرک و کتێبخانەی قورسی بێسوود تەنها کۆد ئاڵۆز دەکات؛ من گرنگی بە سادەیی و دابەشکردنی ڕێکوپێکی فایلەکان دەدەم.",
    },
    realWorldApplication: {
      en: "Using custom React hooks instead of massive third-party state managers in both portfolio and client apps.",
      ku: "بەکارهێنانی هووکی ڕیاکت لە جیاتی دەیان پاکێجی دەرەکی لە پۆرتفۆلیۆ و پڕۆژەکاندا.",
    },
    status: "established",
    statusLabel: {
      en: "Daily Practice",
      ku: "شێوازی کارکردنی ڕۆژانە",
    },
  },
  {
    id: "rtl-engineering-craft",
    category: "ux",
    title: {
      en: "First-Class RTL & Bidirectional Engineering",
      ku: "ئەندازیاریی ڕاستەقینەی زمانەکانی ڕاست-بۆ-چەپ (RTL)",
    },
    summary: {
      en: "Kurdish Sorani localization requires thoughtful font metrics, natural line heights, and symmetric mirror layouts.",
      ku: "زمانی کوردی تەنها گۆڕینی `dir=rtl` نییە، بەڵکو پێویستی بە فۆنتی ڕێك، بەرزیی گونجاوی دێڕ و هاوسەنگیی دیزاین هەیە.",
    },
    details: {
      en: "Many apps break in RTL due to hardcoded margins or misaligned icons. I engineer bidirectional layouts with logical properties (`ps`, `pe`, `start`, `end`) and carefully paired font scales.",
      ku: "زۆرێک لە ماڵپەڕەکان کێشەی نەگونجانی فۆنت و تێکچوونی خشتەیان هەیە لە کاتی گۆڕینی زمان بۆ کوردی؛ من گرنگی بە گونجانی بێ کێشەی هەردوو زمانی کوردی و ئینگلیزی دەدەم.",
    },
    realWorldApplication: {
      en: "Seamless instant toggle between Sorani Kurdish and English in this portfolio and Rwanin Cinema.",
      ku: "گۆڕینی دەستبەجێ لە نێوان کوردی و ئینگلیزی لەم پۆرتفۆلیۆیە و لە پلاتفۆرمی ڕوانیندا بەبێ تێکچوونی ڕووکارەکە.",
    },
    status: "established",
    statusLabel: {
      en: "Daily Practice",
      ku: "شێوازی کارکردنی ڕۆژانە",
    },
  },
  {
    id: "user-ergonomics",
    category: "ux",
    title: {
      en: "High-Speed Keyboard Ergonomics",
      ku: "خێرایی کارکردن بە کلیلەکانی کیبۆرد",
    },
    summary: {
      en: "Professional desktop tools should reward power users with fluid keyboard shortcuts and visible focus rings.",
      ku: "ئامرازە بەسوودەکان دەبێت خێرایی بە بەکارهێنەر بدەن بە کورتکراوەکانی کیبۆرد و ئاماژەی ڕوونی سەر شاشە.",
    },
    details: {
      en: "Cashiers handling 50 items a minute cannot reach for a mouse every three seconds. Designing software with keyboard shortcuts (like F2 and F4) and focus management directly impacts productivity.",
      ku: "کاشێرێک لە قەرەباڵغیدا ناتوانێت ماوس بەکاربهێنێت؛ دابینکردنی کلیلە خێراکان لەسەر کیبۆرد و دیزاینی ئاسان دەبێتە هۆی فرۆشتنی چەندین هێندە خێراتر.",
    },
    realWorldApplication: {
      en: "Command palette (`Ctrl+K`) in this portfolio and cashier shortcuts in Xizmat Market POS.",
      ku: "سیستەمی گەڕانی خێرا (`Ctrl+K`) لەم پۆرتفۆلیۆیەدا و کلیلە خێراکانی مارکێتی خزمەت.",
    },
    status: "established",
    statusLabel: {
      en: "Daily Practice",
      ku: "شێوازی کارکردنی ڕۆژانە",
    },
  },
  {
    id: "continuous-testing",
    category: "growth",
    title: {
      en: "Automated Testing & End-to-End Verification",
      ku: "پشکنینی خۆکارانە و تاقیکردنەوەی بەردەوامی کۆد",
    },
    summary: {
      en: "Writing tests for critical calculations, parsing logic, and state transitions to prevent regressions.",
      ku: "نووسینی تاقیکردنەوەی خۆکار بۆ لۆژیکی هەستیار و هەژمارەکان بۆ ڕێگری لە دروستبوونی هەڵە لە داهاتوودا.",
    },
    details: {
      en: "While I have focused heavily on building robust interfaces and data persistence, I am continuously deepening my test-driven practices with Vitest and integration testing for edge-case validation.",
      ku: "لەگەڵ دروستکردنی ئەپ و سیستەمی بەسوود، بەردەوامم لە فێربوونی شێوازە نوێیەکانی پشکنینی خۆکار و تاقیکردنەوەی یەکەکان (Unit Testing) بە Vitest.",
    },
    realWorldApplication: {
      en: "Unit tests verifying receipt formatting calculations and barcode checksum functions in this codebase.",
      ku: "پشکنینە خۆکارەکان بۆ ژماردنی وەسڵ و دروستیی بارکۆد لەم پۆرتفۆلیۆیەدا.",
    },
    status: "learning_goal",
    statusLabel: {
      en: "Active Growth Focus",
      ku: "سەرنجی ئێستای فێربوون",
    },
  },
];
