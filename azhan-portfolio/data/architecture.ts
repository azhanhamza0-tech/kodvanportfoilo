export interface ArchitectureSystem {
  id: string;
  title: {
    en: string;
    ku: string;
  };
  subtitle: {
    en: string;
    ku: string;
  };
  systemType: {
    en: string;
    ku: string;
  };
  overview: {
    en: string;
    ku: string;
  };
  keyDecisions: {
    title: { en: string; ku: string };
    rationale: { en: string; ku: string };
    alternativesConsidered: { en: string; ku: string };
    tradeOff: { en: string; ku: string };
  }[];
  dataFlowSteps: {
    step: number;
    title: { en: string; ku: string };
    description: { en: string; ku: string };
    layer: "ui" | "state" | "storage" | "hardware" | "network";
  }[];
  securityAndReliability: {
    en: string;
    ku: string;
  }[];
}

export const architectureData: ArchitectureSystem[] = [
  {
    id: "offline-pos-architecture",
    title: {
      en: "Offline-First Retail POS & Hardware Printing Architecture",
      ku: "تەلارسازیی سیستەمی کاشێری Offline-First و چاپی گەرمی",
    },
    subtitle: {
      en: "How Xizmat Market guarantees zero downtime in retail stores through client-side persistence and direct ESC/POS hardware compilation.",
      ku: "چۆن سیستەمی مارکێتی خزمەت کارکردنی بەردەوام مسۆگەر دەکات بە پاشەکەوتکردنی ناوخۆیی و چاپی ڕاستەوخۆ بەبێ پێویستی بە ئینتەرنێت.",
    },
    systemType: {
      en: "Mission-Critical Retail System",
      ku: "سیستەمی بازرگانی هەستیار",
    },
    overview: {
      en: "Retail environments cannot tolerate network latency or broadband outages during rush hours. The architecture treats the local browser as the primary database engine using IndexedDB, decoupling transaction execution from server connectivity.",
      ku: "فرۆشگاکان ناتوانن لە کاتی قەرەباڵغیدا چاوەڕوانی خێرایی ئینتەرنێت بن یان بەهۆی پچڕانی هێڵەوە کارەکانیان رابوەستێنن. ئەم تەلارسازییە براوزەر وەک کۆگای سەرەکیی داتا بەکاردەهێنێت بە سوودوەرگرتن لە IndexedDB، بەمەش فرۆشتن لە کێشەی هێڵ جیا دەکرێتەوە.",
    },
    keyDecisions: [
      {
        title: {
          en: "IndexedDB over LocalStorage for Transaction Engine",
          ku: "بەکارهێنانی IndexedDB لە جیاتی LocalStorage",
        },
        rationale: {
          en: "IndexedDB supports asynchronous execution, structured object cloning, and indexed binary keys. This prevents UI thread freezes when searching 5,000+ barcode products.",
          ku: "سیستەمی IndexedDB بە شێوەی ناهاوکات کار دەکات و دەتوانێت هەزاران کاڵا بە بارکۆد پۆلێن بکات بەبێ ئەوەی شاشەی فرۆشتن سست بکات.",
        },
        alternativesConsidered: {
          en: "LocalStorage (synchronous, 5MB limit, blocks UI thread) and WebSQL (deprecated).",
          ku: "کۆگای LocalStorage (سنووردارە بۆ 5MB و شاشە دەوەستێنێت) و WebSQL (کۆنە و پشتگیری ناکرێت).",
        },
        tradeOff: {
          en: "Requires more complex Promise-based migration and transactional rollback wrappers.",
          ku: "پێویستی بە کۆدی ئاڵۆزتر هەیە بۆ کۆنترۆڵکردنی مامەڵە داراییەکان و گەڕاندنەوە لە کاتی هەڵەدا.",
        },
      },
      {
        title: {
          en: "Direct Thermal ESC/POS Print Stream Compilation",
          ku: "داڕشتنی ڕاستەوخۆی فۆرماتی چاپی گەرمی بۆ وەسڵەکان",
        },
        rationale: {
          en: "Standard browser printing shows print dialogs and margins. Direct ESC/POS byte streaming and tailored CSS print sheets trigger instant 80mm/58mm paper cuts without user interference.",
          ku: "چاپی ئاسایی براوزەر پەنجەرەی زیادە دەکاتەوە؛ بەڵام داڕشتنی ڕاستەوخۆ بە ستانداردی 80mm و 58mm وا دەکات وەسڵ دەستبەجێ بە کەمتر لە چرکەیەک چاپ بکرێت.",
        },
        alternativesConsidered: {
          en: "PDF generation (slow, heavy CPU consumption) or native desktop wrapper.",
          ku: "دروستکردنی فایلی PDF (سستە و کاتێکی زۆر دەبات) یان دانانی پرۆگرامی دیسکتۆپی جیاواز.",
        },
        tradeOff: {
          en: "Requires strict line-width calculation and custom Kurdish ligature shaping for thermal printer fonts.",
          ku: "پێویستی بە ژماردنی دروستی پانی دێڕەکان و ڕێکخستنی پیتە کوردییەکان هەیە لەسەر کاغەز.",
        },
      },
      {
        title: {
          en: "Deterministic Cashier Hotkeys (F2 Search, F4 Pay)",
          ku: "کورتکراوەی جێگیری کیبۆرد بۆ کاشێر (F2 بۆ گەڕان، F4 بۆ تەواوکردن)",
        },
        rationale: {
          en: "Cashiers should never need to touch a mouse during high-throughput checkout. Keyboard listeners intercept function keys safely while preventing default browser behaviors.",
          ku: "کاشێر نابێت لە کاتی فرۆشتنی خێرادا پێویستی بە ماوس هەبێت؛ کلیلە خێراکان ڕێگە دەدەن بەبێ دەستلێدانی ماوس سەبەتە پڕ بکرێت و پارە وەربگیرێت.",
        },
        alternativesConsidered: {
          en: "Touch-only interface or standard form buttons requiring mouse navigation.",
          ku: "تەنها بەکارهێنانی تاچ یان دوگمەی ئاسایی کە پێویستی بە کلیکی ماوس دەبێت.",
        },
        tradeOff: {
          en: "Requires rigorous event capture to prevent accidental page refresh on F5 or help dialog on F1.",
          ku: "پێویستی بە کۆنترۆڵکردنی توندی ڕووداوەکان هەیە تا براوزەر بە هەڵە پەڕە نوێ نەکاتەوە.",
        },
      },
    ],
    dataFlowSteps: [
      {
        step: 1,
        title: { en: "Barcode Scan Event", ku: "سکانکردنی بارکۆد" },
        description: {
          en: "Hardware scanner fires rapid keypress events into the global input dispatcher with checksum validation.",
          ku: "سکانەرەکە زنجیرەی کۆدەکە بە خێرایی بۆ ناو سیستەم دەنێرێت لەگەڵ پشکنینی ڕاستیی بارکۆدەکە.",
        },
        layer: "hardware",
      },
      {
        step: 2,
        title: { en: "IndexedDB Local Lookup", ku: "گەڕانی ناوخۆیی لە داتابەیس" },
        description: {
          en: "Microsecond index search finds product pricing, current stock, and category without network latency.",
          ku: "بە چەند میلیچرکەیەک زانیاری نرخ و بڕی کاڵاکە لە بیرگەی ناوخۆدا دەدۆزرێتەوە بەبێ چاوەڕوانی ئینتەرنێت.",
        },
        layer: "storage",
      },
      {
        step: 3,
        title: { en: "Cart State Transition", ku: "نوێکردنەوەی سەبەتەی کڕین" },
        description: {
          en: "Atomic state dispatcher computes subtotal, item discount, taxable margin, and net profit ledger in real-time.",
          ku: "کۆی گشتی، داشکاندن و قازانجی خاوێنی کڕینەکە دەستبەجێ بە هاوکێشەی ماتماتیکی ئەپدەیت دەبێت.",
        },
        layer: "state",
      },
      {
        step: 4,
        title: { en: "Local Persistence & Thermal Print", ku: "پاشەکەوتکردن و چاپی وەسڵ" },
        description: {
          en: "Invoice is committed to offline sales journal and formatted into 80mm receipt stream for instant printing.",
          ku: "وەسڵەکە لە دەفتەری فرۆشتنی ناوخۆدا تۆمار دەکرێت و بە فۆرماتی 80mm دەخرێتە سەر چاپکەرەکە.",
        },
        layer: "hardware",
      },
    ],
    securityAndReliability: [
      {
        en: "Strict role-based permissions separating Cashier (sales only), Manager (stock editing), and Admin (financial reports).",
        ku: "جیاکردنەوەی تەواوی دەسەڵاتەکان: کاشێر تەنها بۆ فرۆشتن، بەڕێوەبەر بۆ دەستکاری کاڵا، و ئەدمین بۆ هەموو ڕاپۆرتە داراییەکان.",
      },
      {
        en: "IndexedDB atomic transactions with automatic rollback on corrupted receipt entries.",
        ku: "مامەڵەی مسۆگەری ناوخۆیی بە گەڕانەوەی خۆکار ئەگەر هەڵەیەک لە کاتی تۆماری وەسڵدا ڕووبدات.",
      },
      {
        en: "Local data encryption and safe CSV export preventing unintended price leakage.",
        ku: "پاراستنی داتای ناوخۆیی فرۆشگا و هەناردەکردنی سەلامەتی CSV بەبێ دزەپێکردنی نهێنی نرخەکان.",
      },
    ],
  },
  {
    id: "streaming-media-architecture",
    title: {
      en: "Media Streaming & Adaptive Client State Architecture",
      ku: "تەلارسازیی پەخشی ڤیدیۆ و بەڕێوەبردنی دۆخی بینەر",
    },
    subtitle: {
      en: "How Rwanin Stream delivers a seamless, high-performance cinematic interface with lazy poster pipelines and persistent watchlists.",
      ku: "چۆن پلاتفۆرمی ڕوانین خێرایی بەرز و ئەزموونێکی سینەمایی خاوێن بۆ بینینی فیلم و زنجیرە مسۆگەر دەکات.",
    },
    systemType: {
      en: "Media & Entertainment Platform",
      ku: "پلاتفۆرمی میدیا و بینینی فیلم",
    },
    overview: {
      en: "Streaming web interfaces require zero-jank transitions, rapid poster decoding, and lightweight bookmarking of watch progress. This architecture decouples media metadata from heavy video buffers to maximize initial page response.",
      ku: "ماڵپەڕی فیلم پێویستی بە بارکردنی دەستبەجێی پۆستەرەکان، دەستپێکردنی خێرای ڤیدیۆ و تۆمارکردنی شوێنی وەستانی فیلم هەیە. تەلارسازییەکە زانیارییەکان لە ڤیدیۆ جیا دەکاتەوە بۆ خێرایی زۆر لەسەر هەموو ئامێرێک.",
    },
    keyDecisions: [
      {
        title: {
          en: "Two-Tier Poster Caching & Blur Placeholder Generation",
          ku: "بارکردنی زیرەکی پۆستەرەکان بە فۆرماتی کەمی قەبارە",
        },
        rationale: {
          en: "Browsing 50+ movies simultaneously on mobile drains cellular bandwidth. Posters load with progressive WebP decoding and low-res blurred skeletons.",
          ku: "کردنەوەی دەیان پۆستەری فیلم لەسەر مۆبایل ئینتەرنێت بەفیڕۆ دەدات؛ بەم شێوازە سەرەتا دیمەنی شووشەیی کەم قەبارە دەردەکەوێت تا وێنەکە تەواو دەبێت.",
        },
        alternativesConsidered: {
          en: "Full-resolution original JPEG loading directly from external URLs.",
          ku: "بارکردنی ڕاستەوخۆی وێنە گەورەکان لە ماڵپەڕی دەرەکی کە براوزەر سست دەکات.",
        },
        tradeOff: {
          en: "Requires client-side aspect ratio reservation to prevent layout shifts (CLS).",
          ku: "پێویستی بە دیاریکردنی پێشوەختەی درێژی و پانی وێنەکان هەیە تا لاپەڕەکە جوڵەی نەخوازراو نەکات.",
        },
      },
      {
        title: {
          en: "Client-Side Watchlist & Bookmark State Serialization",
          ku: "پاراستنی لیستی دڵخوازەکان لە بیرگەی براوزەردا",
        },
        rationale: {
          en: "Allowing users to bookmark movies and save watch history instantly without requiring a mandatory database roundtrip on every click improves perceived responsiveness.",
          ku: "بینەر دەتوانێت بەبێ دواکەوتن فیلم بۆ لیستی سەیرکردن زیاد بکات بەبێ ئەوەی پێویست بکات لەسەر هەر کلیکێک چاوەڕوانی سێرڤەر بێت.",
        },
        alternativesConsidered: {
          en: "Mandatory server-side session authentication for every bookmark action.",
          ku: "پێویستکردنی هەژمار و چوونەژوورەوەی زۆرەملێ پێش ئەوەی بینەر بتوانێت فیلمێک دڵخواز بکات.",
        },
        tradeOff: {
          en: "Requires sync reconciliation when the user eventually logs into their VIP account.",
          ku: "پێویستی بە یەکخستنی داتای ناوخۆ هەیە لە کاتی چوونەژوورەوەی بینەر بۆ هەژماری VIP.",
        },
      },
    ],
    dataFlowSteps: [
      {
        step: 1,
        title: { en: "Catalog Query & Filter", ku: "گەڕان و فلتەرکردنی کەتەلۆگ" },
        description: {
          en: "Debounced multi-filter parameters (Genre, Dubbing, Year, Rating) evaluated in-memory without page reload.",
          ku: "فلتەرکردنی دەستبەجێ بەپێی چەشن، دۆبلاژ و ساڵ لە ناو بیرگەدا بەبێ بارکردنەوەی پەڕە ئەنجام دەدرێت.",
        },
        layer: "state",
      },
      {
        step: 2,
        title: { en: "Metadata & Trailer Stream", ku: "بارکردنی زانیاری و ترەیلەر" },
        description: {
          en: "Movie modal opens with YouTube trailer embed and cast credits while keeping main feed scroll position intact.",
          ku: "پەڕەی تایبەتی فیلم دەکرێتەوە لەگەڵ ترەیلەر و زانیاری دۆبلاژ بەبێ لەدەستدانی شوێنی پێشووی بینەر.",
        },
        layer: "ui",
      },
      {
        step: 3,
        title: { en: "Watch State Persistence", ku: "تۆمارکردنی دۆخی بینین" },
        description: {
          en: "Playback timestamps and watchlist status are atomically committed to browser local cache.",
          ku: "خولەکی وەستانی فیلم و لیستی دڵخوازەکان ڕاستەوخۆ لە بیرگەی براوزەردا تۆمار دەکرێن.",
        },
        layer: "storage",
      },
    ],
    securityAndReliability: [
      {
        en: "Strict sanitized iframe sandbox for embedded trailers preventing unauthorized script execution.",
        ku: "پاراستنی تەواوی پەخشی ترەیلەرەکان لە ناو چوارچێوەی پارێزراو بۆ ڕێگری لە سکریپتی زیانبەخش.",
      },
      {
        en: "Responsive bottom sheet navigation on mobile providing native app ergonomics via PWA.",
        ku: "مێنیوی ژێرەوەی مۆبایل وەک ئەپی ڕاستەقینە کار دەکات لە ڕێگەی تەکنەلۆژیای پێشکەوتووی PWA.",
      },
    ],
  },
];
