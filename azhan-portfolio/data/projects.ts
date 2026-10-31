export type ProjectType =
  | "Production System"
  | "Full-Stack App"
  | "Personal Project"
  | "Practice Project"
  | "Concept Project";

export interface ProjectScreenshot {
  url: string;
  caption: {
    en: string;
    ku: string;
  };
}

export interface ProjectItem {
  id: string;
  title: {
    en: string;
    ku: string;
  };
  type: ProjectType;
  typeLabel: {
    en: string;
    ku: string;
  };
  category: "all" | "fullstack" | "frontend" | "concept";
  shortDescription: {
    en: string;
    ku: string;
  };
  problemSolved: {
    en: string;
    ku: string;
  };
  mainFeatures: {
    en: string[];
    ku: string[];
  };
  technologies: string[];
  thumbnail: string;
  screenshots?: ProjectScreenshot[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  completionDate?: string;
  architectureNotes?: {
    en: string;
    ku: string;
  };
}

export const projectCategoryFilters = [
  { id: "all", label: { en: "All Projects", ku: "هەموو پڕۆژەکان" } },
  { id: "fullstack", label: { en: "Systems & Full-Stack Apps", ku: "سیستەم و ئەپی تەواو" } },
  { id: "frontend", label: { en: "Frontend Apps", ku: "ئەپی فرۆنتێند" } },
  { id: "concept", label: { en: "Concepts & Tools", ku: "بیرۆکە و ئامراز" } },
];

/**
 * Projects configuration list.
 * Includes flagship production & full-stack applications alongside architectural concepts.
 */
export const projectsData: ProjectItem[] = [
  {
    id: "rwanin-movie-stream",
    title: {
      en: "Rwanin Stream — Cinema & Movie Streaming Platform",
      ku: "ڕوانین ستریم — پلاتفۆرمی سینەما و بینینی فیلم و زنجیرە",
    },
    type: "Full-Stack App",
    typeLabel: {
      en: "Flagship Streaming Platform",
      ku: "پلاتفۆرمی پێشکەوتووی ستریمینگ",
    },
    category: "fullstack",
    shortDescription: {
      en: "A high-performance cinematic streaming web application featuring Kurdish dubbed content, granular catalog filters, VIP subscriptions, responsive mobile video player, and installable PWA experience.",
      ku: "پلاتفۆرمێکی پێشکەوتووی ستریمینگ و بینینی فیلم و زنجیرە بە دیزاینی سینەمایی شیک، پاڵپشتی دۆبلاژی کوردی، فلتەری پێشکەوتوو، ئەندامێتی VIP و کارکردن وەک ئەپی مۆبایل (PWA).",
    },
    problemSolved: {
      en: "Regional media platforms frequently suffer from intrusive popups, poor Kurdish RTL support, sluggish loading, and broken mobile viewports. Rwanin delivers a Netflix-grade dark cinematic interface, instant filter & search capabilities, fluent Kurdish RTL typography, and an immersive viewing environment across desktop and smartphones.",
      ku: "زۆربەی ماڵپەڕە ناوخۆییەکانی فیلم بەهۆی زۆریی ڕیکلامی بێزارکەر، نەگونجانی ڕووکاری کوردی بۆ مۆبایل و خێرایی کەمی بارکردنەوە بێزارکەرن. ڕوانین ستریم ئەزموونێکی بەرز لە ئاستی نێتفلێکس پێشکەش دەکات بە شێوازی تاریك و خاوێن، گەڕانی دەستبەجێ بەبێ وەستان، و پاڵپشتی فۆرماتی مۆبایل و دیسکتۆپ.",
    },
    mainFeatures: {
      en: [
        "Immersive Netflix-style dark cinematic UI with glassmorphic cards and dynamic hero spotlight banner",
        "Dedicated multi-tier categories for Featured Movies, TV Series, Anime, and Kurdish Dubbed cinema",
        "Granular catalog exploration engine with multi-filters for genres, release years, IMDB score, and dubbing status",
        "Comprehensive movie detail pages featuring direct media player, YouTube trailer modal, cast credits, and dubbing team info",
        "VIP membership subscription gateway with exclusive badge indicators and premium streaming tiers",
        "User personalized watchlist, favorites bookmarking, and recent watch history",
        "Dedicated staff, translator, and voice actors directory page celebrating regional dubbing talent",
        "Fully responsive mobile and tablet design with Progressive Web App (PWA) installation prompt",
      ],
      ku: [
        "ڕووکاری سینەمایی تاریك بە دیزاینی شووشەیی مۆدێرن (Glassmorphism) و نمایشکەری سەرەکی فیلمە ترێندەکان",
        "پۆلێنبەندی ورد بۆ فیلمە نوێیەکان، زنجیرە جیهانییەکان، ئەنیمێ و بەرهەمە دۆبلاژکراوە کوردییەکان",
        "پشکنەری پێشکەوتووی کەتەلۆگ بە فلتەری ژانەر (ئاکشن، دراما، کۆمیدی)، ساڵی دەرچوون، نمرەی IMDB و زمان",
        "پەڕەی تایبەتی فیلم بە پەخشی ڤیدیۆ، ترەیلەری یوتیوب، کورتەی چیرۆک، و ناساندنی ئەکتەرەکان و ستافی دۆبلاژ",
        "بەشی بەشداریکردنی VIP بۆ بەردەستکردنی ناوەڕۆکی تایبەت و کوالێتی بەرز بە ئەزموونی جیاواز",
        "لیستی سەیرکردن (Watchlist)، تۆماری دڵخوازەکان و مێژووی بینین بۆ بەکارهێنەر",
        "پەڕەی تایبەتی ستاف و وەرگێڕان و دەنگبێژانی کوردی بۆ ڕێزگرتن لە کاری بەرهەمهێنەران",
        "وەڵامدەرەوەی تەواو (Responsive) بۆ هەموو مۆبایل و تابلێتەکان لەگەڵ تایبەتمەندی دابەزاندنی خێرا (PWA Install)",
      ],
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "PWA",
      "Video Streaming UI",
      "RTL Architecture",
    ],
    thumbnail: "/projects/elvare/01_home_desktop.png",
    screenshots: [
      {
        url: "/projects/elvare/01_home_desktop.png",
        caption: {
          en: "Cinematic Home Hero Banner & Trending Media Highlights",
          ku: "پەڕەی سەرەکی بە دیزاینی سینەمایی، بانەری گەورەی فیلمی ترێند و پێشنیارە نوێیەکان",
        },
      },
      {
        url: "/projects/elvare/02_movie_details.png",
        caption: {
          en: "Movie Details View with Streaming Player, Trailer, Synopsis & Cast Credits",
          ku: "پەڕەی تایبەتی فیلم: پەخشکردنی ڤیدیۆ، ترەیلەر، کورتەی چیرۆک و زانیاری دۆبلاژی کوردی",
        },
      },
      {
        url: "/projects/elvare/03_catalog_explore.png",
        caption: {
          en: "Full Catalog Exploration Engine with Multi-Filter Parameters (Genre, Year, Rating, Audio)",
          ku: "پشکنەری کەتەلۆگ بە فلتەری چەشن، ساڵ، نمرەی IMDB و زمان",
        },
      },
      {
        url: "/projects/elvare/04_vip_page.png",
        caption: {
          en: "VIP Subscription Tiers & Exclusive Premium Membership Benefits",
          ku: "پەڕەی ئەندامێتی VIP و سوودەکانی پلانی تایبەت",
        },
      },
      {
        url: "/projects/elvare/05_staff_page.png",
        caption: {
          en: "Translators, Voice Actors & Dubbing Team Directory",
          ku: "پەڕەی ناساندنی کارمەندان، وەرگێڕان و ستافی دۆبلاژکاران",
        },
      },
      {
        url: "/projects/elvare/06_login_page.png",
        caption: {
          en: "Secure User Authentication & Account Login Screen",
          ku: "پەڕەی پارێزراوی چوونەژوورەوە و دروستکردنی هەژمار",
        },
      },
      {
        url: "/projects/elvare/07_home_mobile.png",
        caption: {
          en: "Mobile Responsive Home Experience with Bottom Bar & App Install",
          ku: "ڕووکاری سەرەکی لەسەر شاشەی مۆبایل بە وەڵامدانەوەی خێرا و مێنیوی دەستی",
        },
      },
      {
        url: "/projects/elvare/08_movie_mobile.png",
        caption: {
          en: "Mobile Movie Details & Optimized Video Player Layout",
          ku: "بینینی فیلم لەسەر مۆبایل بە قەبارەی ڕێکخراو و کۆنترۆڵی ئاسان",
        },
      },
    ],
    featured: true,
    completionDate: "2024 - 2026",
    architectureNotes: {
      en: "Architected with an optimized lazy-loading poster image pipeline, modular video player abstractions, and persistent client-side state for user watchlists and playback bookmarks.",
      ku: "پڕۆژەکە بە پشتبەستن بە شێوازی مۆدیولار دروستکراوە. سیستەمی بارکردنی وێنە و پۆستەرەکان بە شێوازی بەرەوپێشچووی Lazy-loading داڕێژراوە تا ڕێگری بکات لە بەفیڕۆچوونی هێڵی ئینتەرنێت. هەروەها هەڵگرتنی ناوخۆیی (Local Storage) بەکارهاتووە بۆ پاراستنی لیستی سەیرکردن و پاشەکەوتکردنی دۆخی بینەر بەبێ دواکەوتن.",
    },
  },
  {
    id: "xizmat-market-pos",
    title: {
      en: "Xizmat Market — Advanced POS, Inventory & Commercial Management System",
      ku: "مارکێتی خزمەت — سیستەمی پێشکەوتووی کاشێر، کۆگا و ژمێریاری",
    },
    type: "Production System",
    typeLabel: {
      en: "Production POS & Retail System",
      ku: "سیستەمی بازرگانی بەرهەمهێندراو (POS)",
    },
    category: "fullstack",
    shortDescription: {
      en: "An enterprise-grade, offline-first retail Point of Sale (POS) and inventory platform for markets, featuring barcode sales, debt ledgers, profit analytics, cashier shifts, and thermal receipt printing.",
      ku: "سیستەمێکی بازرگانیی تەواو بۆ بەڕێوەبردنی سوپەرمارکێت و فرۆشگاکان بە شێوازی ئۆفلاین (Offline-first PWA)، لەخۆگری فرۆشتنی خێرای کاشێر بە بارکۆد، کۆگا، حیساباتی قەرز، ژمێریاریی قازانج، و چاپی وەسڵی گەرمی.",
    },
    problemSolved: {
      en: "Traditional POS software is vulnerable to connectivity loss, suffers from sluggish UI during peak rush hours, and provides weak profit visibility. Xizmat Market was built with an Offline-First PWA architecture, persistent local data sync, instant barcode scanning with keyboard shortcuts (F2 search, F4 complete), automated thermal receipt printing, and comprehensive Gross/Net profit analytics.",
      ku: "سیستەمە تەقلیدییەکانی کاشێر لە کاتی پچڕانی ئینتەرنێتدا لە کار دەکەون، خێراییان لە کاتی قەرەباڵغی مارکێتدا دادەبەزێت، و شیکارییەکی ڕوون بۆ قازانجی خاوێن و قەرزی کڕیار نادەن. سیستەمی مارکێتی خزمەت بە شێوازی Offline-First لەسەر براوزەر دروستکراوە بە کورتکراوەی کیبۆرد (F2 بۆ گەڕان، F4 بۆ تەواوکردنی فرۆشتن) و پاشەکەوتکردنی دەستبەجێ بەبێ وەستان، لەگەڵ هەژمارکردنی وردی قازانجی خاوێن (Net Profit) و تێچووی کاڵا (COGS).",
    },
    mainFeatures: {
      en: [
        "Lightning-fast cashier POS checkout with barcode scanner integration and keyboard shortcuts (F2 search, F4 complete)",
        "Offline-first PWA architecture with instant local data persistence during network interruptions",
        "Executive analytics dashboard in both Dark and Light modes displaying sales volume, net profit, and receivables",
        "Comprehensive inventory & warehouse management with low-stock warnings, barcode registry, and CSV bulk import",
        "Advanced customer & supplier debt ledger with net balance tracking and installment payment logs",
        "Financial reporting suite calculating gross profit, cost of goods sold (COGS), net profit, and CSV data exports",
        "Multiformat thermal receipt printing engine supporting 80mm, 58mm POS receipt printers and standard A4 invoices",
        "Granular role-based security (Super Admin, Branch Manager, Cashier) and shift opening/closing audits",
        "Clean Kurdish Sorani RTL interface tailored for fast eye scanning and retail ergonomics",
      ],
      ku: [
        "تێرمیناڵی کاشێر و فرۆشتنی خێرا بە سکانەری بارکۆد، پۆلێنبەندی کاڵا و کلیلە خێراکانی F2 و F4",
        "کارکردنی ئۆفلاین (Offline-First) بە بەکارهێنانی داتای ناوخۆ بەبێ وەستان لە کاتی بڕانی ئینتەرنێتدا",
        "داشبۆردی بەڕێوەبردن لە دوو دۆخی تاریك و ڕووناك بە نیشاندانی فرۆشتنی ئەمڕۆ، قازانجی خاوێن، و کۆی قەرزەکان",
        "بەڕێوەبردنی کۆگا و کاڵاکان: دیاریکردنی نرخی کڕین و فرۆشتن، ئاگاداریی کەمی کاڵا، و هاوردەکردنی CSV",
        "پانێڵی پێشکەوتووی بەڕێوەبردنی قەرزەکان بۆ کڕیاران و دابینکەران، باڵانسی ڕووت و تۆماری دانەوە",
        "ڕاپۆرتی دارایی و ژمێریاری: داهاتی فرۆشتن (Revenue)، تێچووی کاڵای فرۆشراو (COGS)، داشکاندن، و هەناردەی CSV",
        "سیستەمی چاپی وەسڵی گەرمی (Thermal Print) بۆ قەبارەی 80mm، 58mm و فاکتۆری فەرمیی A4",
        "بەڕێوەبردنی کارمەندان بە دەسەڵاتی جیاواز (ئەدمینی سەرەکی، بەڕێوەبەر، کاشێر) و تۆمارکردنی شیفتەکان",
        "ڕووکارێکی تەواو کوردی بە شێوازی ستانداردی RTL بۆ خوێندنەوەی خێرا و کارکردنی درێژخایەن بەبێ ماندووبوونی چاو",
      ],
    },
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Offline PWA",
      "IndexedDB / Local Storage",
      "Thermal ESC/POS Printing Engine",
      "Financial Analytics",
      "CSV Data Engine",
      "RTL Architecture",
    ],
    thumbnail: "/projects/cashier/01_dashboard_dark.png",
    screenshots: [
      {
        url: "/projects/cashier/01_dashboard_dark.png",
        caption: {
          en: "Executive Dashboard (Dark Mode) — Daily Sales, Net Profit, Debt & Low-Stock Alerts",
          ku: "داشبۆردی سەرەکی (دۆخی تاریك) — فرۆشتنی ئەمڕۆ، قازانجی خاوێن، کۆی قەرزەکان و ئاگاداری کۆگا",
        },
      },
      {
        url: "/projects/cashier/03_pos_sales_dark.png",
        caption: {
          en: "Cashier POS Terminal (Dark Mode) — Barcode Scanning, Cart & Hotkeys (F2/F4)",
          ku: "ڕووکاری فرۆشتن و کاشێر — سکانکردنی بارکۆد، سەبەتەی کڕین، کلیلە خێراکان و داشکاندن",
        },
      },
      {
        url: "/projects/cashier/06_inventory.png",
        caption: {
          en: "Product & Stock Management — Cost/Sell Prices, Stock Levels & CSV Import",
          ku: "بەڕێوەبردنی کاڵاکان و کۆگا — نرخی کڕین، نرخی فرۆشتن، بڕی کۆگا، و هاوردەکردنی CSV",
        },
      },
      {
        url: "/projects/cashier/07_debt_management.png",
        caption: {
          en: "Advanced Debt Management — Customer Receivables, Supplier Payables & Net Balance",
          ku: "پانێڵی بەڕێوەبردنی قەرزەکان — قەرزی کڕیاران و دابینکەران، باڵانسی ڕووت و دانەوەی قەرز",
        },
      },
      {
        url: "/projects/cashier/09_financial_reports.png",
        caption: {
          en: "Financial Reports & Profit Analytics — Revenue, COGS, Gross & Net Profit",
          ku: "ڕاپۆرتی دارایی و قازانج — داهات، تێچووی کاڵا (COGS)، قازانجی سەرەتایی و قازانجی خاوێن",
        },
      },
      {
        url: "/projects/cashier/11_receipt_print.png",
        caption: {
          en: "Thermal Receipt Print Preview — 80mm, 58mm POS & A4 Invoice Formats",
          ku: "پێشبینی و چاپی وەسڵ — پاڵپشتی چاپکەری گەرمیی 80mm و 58mm و کاغەزی A4",
        },
      },
      {
        url: "/projects/cashier/08_suppliers.png",
        caption: {
          en: "Suppliers & Companies Management Directory with Debt Balance Tracking",
          ku: "پانێڵی دابینکەران و کۆمپانیاکان — تۆماری کڕین و بەدواداچوونی باڵانسی کۆمپانیاکان",
        },
      },
      {
        url: "/projects/cashier/10_roles_staff.png",
        caption: {
          en: "Employee & Role Management with Role-Based Access Control",
          ku: "بەڕێوەبردنی کارمەندان — دیاریکردنی دەسەڵاتەکان (ئەدمین، بەڕێوەبەر، کاشێر)",
        },
      },
      {
        url: "/projects/cashier/02_dashboard_light.png",
        caption: {
          en: "High-Contrast Light Mode Executive Dashboard",
          ku: "داشبۆرد لە دۆخی ڕۆشنایی (Light Mode) بە کۆنتراستی بەرز",
        },
      },
      {
        url: "/projects/cashier/04_pos_sales_light.png",
        caption: {
          en: "Cashier POS Terminal in Light Mode",
          ku: "ڕووکاری کاشێر لە دۆخی ڕۆشنایی (Light Mode)",
        },
      },
      {
        url: "/projects/cashier/05_sales_history.png",
        caption: {
          en: "Sales History & Receipts — Review, Reprint and Return Handling",
          ku: "مێژووی فرۆشتن و وەسڵەکان — پشکنین، چاپی دووبارە و گەڕاندنەوە",
        },
      },
    ],
    featured: true,
    completionDate: "2025 - 2026",
    architectureNotes: {
      en: "Architected with an Offline-First philosophy utilizing IndexedDB and client-side sync pipelines, ensuring 100% operational uptime in retail stores regardless of network stability. Features dedicated print CSS and ESC/POS formatters compatible with all thermal receipt hardware.",
      ku: "سیستەمەکە بە تەلارسازیی Offline-First داڕێژراوە. بە بەکارهێنانی IndexedDB و کاشی ناوخۆیی، سیستەمەکە بەبێ ڕاوەستان کاردەکات ئەگەر ئینتەرنێت بپچڕێت. پاش بەستنەوەی ئینتەرنێت داتاکان بە شێوازێکی هاوکات ڕێکدەخرێنەوە. سیستەمی چاپی وەسڵەکان لەسەر مۆدیولی ڕاستەوخۆی وێب کار دەکات بۆ گونجان لەگەڵ سەرجەم جۆرەکانی چاپکەری گەرمیی بازاڕ.",
    },
  },
  {
    id: "kurdish-lexicon-ui",
    title: {
      en: "Kurdish Typography & Lexicon Explorer",
      ku: "پشکنەری فەرهەنگ و تایپۆگرافی کوردی",
    },
    type: "Concept Project",
    typeLabel: {
      en: "Concept Project",
      ku: "پڕۆژەی بیرۆکە",
    },
    category: "concept",
    shortDescription: {
      en: "A bilingual design concept exploring flawless Right-to-Left (RTL) typography, font scaling, and instant term lookup in Kurdish Sorani and English.",
      ku: "بیرۆکەیەکی دیزاینی دووزمانە کە گرنگی بە ڕێکخستنی دەقی ڕاست-بۆ-چەپ (RTL)، فۆنتە کوردییەکان و گەڕانی خێرای وشەسازی دەدات.",
    },
    problemSolved: {
      en: "Many modern web interfaces fail to render Kurdish Sorani text with natural line-heights, proper ligatures, and cohesive bilingual switching. This concept provides an exemplary RTL-first design system.",
      ku: "زۆرێک لە ماڵپەڕەکان کێشەی نەگونجانی فۆنت و تێکچوونی ڕیزبەندییان لە کاتی گۆڕینی زمان بۆ کوردی هەیە. ئەم بیرۆکەیە نیشاندەری ڕێکاری نموونەییە بۆ دیزاینی تەواوگونجاو بە RTL.",
    },
    mainFeatures: {
      en: [
        "First-class bidirectional layout switching (LTR / RTL) without UI jump",
        "Curated Kurdish font stack paired with modern Latin geometric sans",
        "Instant debounced search filter across bilingual term definitions",
        "High-contrast color modes optimized for long reading sessions",
        "Responsive article view with smooth font size scaler controls",
      ],
      ku: [
        "گۆڕینی نەرمی ئاراستەی دەقەکان بەبێ تێکچوونی شێوەی ڕووکارەکە",
        "هەڵبژاردنی فۆنتی کوردیی ستاندارد کە لەگەڵ فۆنتە ئینگلیزییەکان دەگونجێت",
        "گەڕانی دەستبەجێ بەناو زاراوەکان و پێناسە دووزمانەییەکاندا",
        "دۆخی تاریك بە کۆنتراستی بەرز بۆ پاراستنی چاو لە کاتی خوێندنەوەدا",
        "کۆنترۆڵکردنی قەبارەی دەق و شاشەی وەڵامدەرەوە بۆ مۆبایل و کۆمپیوتەر",
      ],
    },
    technologies: ["React", "TypeScript", "CSS Grid", "Tailwind CSS", "Semantic HTML5"],
    thumbnail: "/projects/lexicon.svg",
    featured: false,
    completionDate: "2024",
    architectureNotes: {
      en: "Structured with bidirectional CSS custom properties and localized string dictionaries for seamless runtime language switching.",
      ku: "بونیاتنراو لەسەر گۆڕاوەکانی CSS و فەرهەنگی ناوخۆیی بۆ دەستبەجێ گۆڕینی زمان بەبێ پێویستی بە بارکردنەوەی پەڕە.",
    },
  },
  {
    id: "devflow-kanban",
    title: {
      en: "DevFlow Task & Workspace",
      ku: "دێڤ‌فلۆ — بەڕێوەبەری ئەرک و کارەکان",
    },
    type: "Practice Project",
    typeLabel: {
      en: "Practice Project",
      ku: "پڕۆژەی ڕاهێنان",
    },
    category: "frontend",
    shortDescription: {
      en: "An interactive, drag-and-drop task management board built to explore complex client state, responsive layouts, and local persistence.",
      ku: "تەختەیەکی کارلێککەری بەڕێوەبردنی ئەرکەکان کە بۆ ڕاهێنان لەسەر بەڕێوەبردنی دۆخی ئاڵۆز لە ڕیاکت و پاشەکەوتکردنی ناوخۆیی دروستکراوە.",
    },
    problemSolved: {
      en: "Developers and students often struggle with cluttered task trackers that lack keyboard accessibility and clean offline storage. This practice project experiments with responsive column layouts and atomic state updates.",
      ku: "بەڕێوەبردنی کارەکان پێویستی بە ڕووکارێکی خێرا و سادە هەیە کە بەبێ پێویستی بە سێرڤەری گەورە لەسەر براوزەر بە خاوێنی کار بکات و هەموو شاشەیەک لەخۆبگرێت.",
    },
    mainFeatures: {
      en: [
        "Interactive board with multi-column task sorting and filtering",
        "Full keyboard accessibility and clear visual focus rings",
        "Persistent browser storage with automatic JSON serialization",
        "Fluid dark mode UI with glassmorphic cards and priority tags",
        "Strict TypeScript types for task states and action dispatchers",
      ],
      ku: [
        "تەختەی کارلێککەر بە ستوونی ڕێکخراو و فلتەرکردنی ئەرکەکان",
        "دەستڕاگەیشتوویی تەواو لە ڕێگەی کیبۆرد و ئاماژە بینراوەکانەوە",
        "پاشەکەوتکردنی خۆکارانەی زانیارییەکان لە ناو بیرگەی براوزەردا",
        "ڕووکاری مۆدێرنی تاریك بە دیزاینی شووشەیی و نیشانەی ئەولەویەت",
        "نووسینی تایپی توندوتۆڵ بە تایپسکریپت بۆ گۆڕانکارییەکانی دۆخ",
      ],
    },
    technologies: ["React", "TypeScript", "TSX", "CSS Modules", "HTML5"],
    thumbnail: "/projects/devflow.svg",
    featured: false,
    completionDate: "2024",
    architectureNotes: {
      en: "Implements custom React hooks for state persistence and event delegation, ensuring seamless 60fps card transitions.",
      ku: "بەکارهێنانی هووکی تایبەتی ڕیاکت بۆ هەڵگرتنی دۆخ لە براوزەر بەبێ دابەزینی خێرایی کارکردن.",
    },
  },
  {
    id: "code-snippet-vault",
    title: {
      en: "Snippet Vault & Script Helper",
      ku: "خەزنەی کۆد و یاریدەدەری سکریپت",
    },
    type: "Practice Project",
    typeLabel: {
      en: "Practice Project",
      ku: "پڕۆژەی ڕاهێنان",
    },
    category: "concept",
    shortDescription: {
      en: "A developer utility concept for storing reusable JavaScript/TypeScript snippets and Python utility functions with tagged organization.",
      ku: "ئامرازێکی کرداری بۆ کۆکردنەوە و پۆلێنکردنی کۆدە دووبارە بەکارهاتووەکانی جاڤاسکریپت، تایپسکریپت و سکریپتەکانی پایسۆن.",
    },
    problemSolved: {
      en: "Finding frequently used utility algorithms, regex snippets, and Python data helpers usually wastes development time. Snippet Vault provides clean categorized indexing with instant copy actions.",
      ku: "دۆزینەوەی ئەو کۆد و فەنکشنانەی لە پڕۆژەکاندا دووبارە دەبنەوە کاتێکی زۆر دەبات؛ ئەم ئامرازە بە خێرایی و ڕێکوپێکی پۆلێنیان دەکات.",
    },
    mainFeatures: {
      en: [
        "Categorized code blocks for React hooks, TS utility types, and Python scripts",
        "One-click copy to clipboard with clear accessible visual status indicator",
        "Tag-based filtering and instant search by keyword or language",
        "Syntax highlighting preview container with line numbering",
        "Clean, distraction-free minimalist developer aesthetics",
      ],
      ku: [
        "پۆلێنکردنی کۆد بۆ هووکی ڕیاکت، تایپی تایپسکریپت و سکریپتی پایسۆن",
        "کۆپیکردنی کۆدەکان بە یەك کلیک لەگەڵ ئاگاداریی بینراوی سەرکەوتوو",
        "فلتەرکردن بەپێی تاگەکان و گەڕانی خێرا بەپێی وشەی سەرەکی یان زمان",
        "نیشاندانی ڕەنگاوڕەنگی کۆدەکان لەگەڵ ژمارەی دێڕەکان",
        "ڕووکارێکی خاوێن و بێ سەرلێشێواندن بۆ پرۆگرامسازان",
      ],
    },
    technologies: ["TypeScript", "React", "Python (Logic)", "HTML5", "CSS"],
    thumbnail: "/projects/snippetvault.svg",
    featured: false,
    completionDate: "2023",
    architectureNotes: {
      en: "Designed with a modular filter pipeline and reusable clipboard hooks implementing fallback copy mechanisms for older browsers.",
      ku: "داڕێژراو بە مۆدیوڵی فلتەرکردنی خێرا و ئامرازی کۆپیکردنی مسۆگەر بۆ سەرجەم براوزەرەکان.",
    },
  },
];
