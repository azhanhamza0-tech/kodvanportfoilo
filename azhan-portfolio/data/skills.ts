export type SkillProficiency = "Current Focus" | "Working Knowledge" | "Learning and Improving";

export interface SkillItem {
  id: string;
  name: string;
  category: "frontend" | "programming" | "productivity";
  proficiency: {
    en: SkillProficiency;
    ku: string;
  };
  highlight: boolean;
  description: {
    en: string;
    ku: string;
  };
  keyTopics: string[];
  iconName: string;
}

export interface SkillCategory {
  id: "all" | "frontend" | "programming" | "productivity";
  label: {
    en: string;
    ku: string;
  };
  description: {
    en: string;
    ku: string;
  };
}

export const skillCategories: SkillCategory[] = [
  {
    id: "all",
    label: { en: "All Skills", ku: "هەموو لێهاتووییەکان" },
    description: {
      en: "Comprehensive technical capabilities across the full engineering stack.",
      ku: "کۆی گشتیی توانستە تەکنیکییەکان و تەلارسازیی ئەندازیاریی سیستەم.",
    },
  },
  {
    id: "frontend",
    label: { en: "Frontend & Web Architecture", ku: "تەلارسازیی وێب و فرۆنتێند" },
    description: {
      en: "Next.js App Router, React 19, strict TypeScript, responsive layouts, and streaming media UX.",
      ku: "نێکست جەی ئێس، ڕیاکت ١٩، تایپسکریپت، پلاتفۆرمی ستریمینگ و ڕووکاری دوولایەنە.",
    },
  },
  {
    id: "programming",
    label: { en: "Backend, Python & Systems", ku: "باکێند، پایسۆن و سیستەم" },
    description: {
      en: "Algorithmic pipelines, offline databases, hardware peripheral interfacing, and workflow automation.",
      ku: "ئەلگۆریتمەکانی پایسۆن، داتابەیسی خۆجێیی، پەیوەستکردنی ئامێرەکان و ئۆتۆمەیشن.",
    },
  },
  {
    id: "productivity",
    label: { en: "Productivity & Documentation", ku: "ئامرازەکانی بەرهەمهێنان و ئۆفیس" },
    description: {
      en: "Structured reporting, technical specification, data analysis, and presentations.",
      ku: "دروستکردنی بەڵگەنامەی ڕێکخراو، شیکردنەوەی داتای ئەکسڵ و پێشکەشکاری.",
    },
  },
];

export const skillsData: SkillItem[] = [
  // Full-Stack & Frontend
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    proficiency: {
      en: "Current Focus",
      ku: "سەرنجی ئێستا",
    },
    highlight: true,
    description: {
      en: "Full-stack web architecture using App Router, React Server Components (RSC), API routes, SSR, and Turbopack.",
      ku: "تەلارسازیی فول-ستاکی وێب بە ئەپ-ڕاوتەر، سێرڤەر کۆمپۆنێنت، خێراکردنی کارکردن و بەرهەمهێنانی پەیجی دینامیکی.",
    },
    keyTopics: ["App Router", "Server Components", "API Handlers", "Turbopack Bundling"],
    iconName: "Server",
  },
  {
    id: "react",
    name: "React 19",
    category: "frontend",
    proficiency: {
      en: "Current Focus",
      ku: "سەرنجی ئێستا",
    },
    highlight: true,
    description: {
      en: "Component-driven development, custom reactive hooks, state machines, and high-performance render lifecycles.",
      ku: "گەشەپێدانی ڕووکاری کارلێککەر لەسەر بنەمای پێکهاتەکان، دروستکردنی Hookـی تایبەت و بەڕێوەبردنی خێرای دۆخ.",
    },
    keyTopics: ["Custom Hooks", "State Machines", "useSyncExternalStore", "Render Optimization"],
    iconName: "Atom",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    proficiency: {
      en: "Current Focus",
      ku: "سەرنجی ئێستا",
    },
    highlight: true,
    description: {
      en: "Strict type contracts, generics, discriminated unions, utility types, and complete compile-time runtime safety.",
      ku: "تایپکردنی توندوتۆڵ، بەکارهێنانی Generics، ڕێگریکردن لە هەڵەی کاتی کارکردن و گەرەنتیکردنی پاکیی کۆد.",
    },
    keyTopics: ["Strict Type Safety", "Generics", "Discriminated Unions", "API Contracts"],
    iconName: "ShieldCheck",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    proficiency: {
      en: "Current Focus",
      ku: "سەرنجی ئێستا",
    },
    highlight: true,
    description: {
      en: "Modern ES6+ specifications, async/await, event loop mechanics, Web APIs, and functional programming paradigms.",
      ku: "ستانداردە مۆدێرنەکانی ECMAScript، لۆژیکی کارکردنی ناهاوکات (Async)، مۆدێلی ڕووداوەکان و Web APIs.",
    },
    keyTopics: ["ES6+ Standards", "Async/Await", "Web Storage & IndexedDB", "Event Mechanics"],
    iconName: "FileCode",
  },
  {
    id: "html-css",
    name: "HTML5 & Modern CSS",
    category: "frontend",
    proficiency: {
      en: "Working Knowledge",
      ku: "زانیاریی کرداری",
    },
    highlight: true,
    description: {
      en: "Semantic markup, CSS Grid, Flexbox, custom design tokens, Tailwind CSS, and bidirectional RTL/LTR layout symmetry.",
      ku: "پێکهاتەی سیمانتیکی وێب، دیزاینی شاشە بە Grid و Flexbox، تەلارسازی تاڵوەیند و ڕێکخستنی دەقاودەقی زمانی کوردی (RTL).",
    },
    keyTopics: ["Semantic HTML5", "Tailwind CSS", "CSS Grid & Flexbox", "Bilingual RTL/LTR"],
    iconName: "Palette",
  },
  {
    id: "tsx",
    name: "TSX & Architecture",
    category: "frontend",
    proficiency: {
      en: "Current Focus",
      ku: "سەرنجی ئێستا",
    },
    highlight: false,
    description: {
      en: "Type-safe UI component hierarchies, render props, slot compositions, and accessible interactive patterns.",
      ku: "داڕشتنی ڕووکاری بەکارهێنەر بە سینتاکسی TSX، دابەشکردنی مۆدیوولار و پاراستنی سەربەخۆیی پێکهاتەکان.",
    },
    keyTopics: ["Typed Component Props", "Compound Components", "Slot Architecture", "Accessibility (a11y)"],
    iconName: "Layers",
  },

  // Backend, Python & Systems Architecture
  {
    id: "python",
    name: "Python",
    category: "programming",
    proficiency: {
      en: "Working Knowledge",
      ku: "زانیاریی کرداری",
    },
    highlight: true,
    description: {
      en: "Algorithmic logic, mathematical checksum validations (GS1 EAN-13), file automation scripts, and data processing.",
      ku: "لۆژیکی ئەلگۆریتمی، هاوکێشەی پشکنینی بارکۆدی جیهانی (GS1 Checksum)، سکریپتی ئۆتۆماتیک و شیکردنەوەی داتا.",
    },
    keyTopics: ["Algorithmic Logic", "GS1 Modulo-10 Checksums", "Data Pipelines", "File I/O Automation"],
    iconName: "Terminal",
  },
  {
    id: "database-offline",
    name: "Offline Storage & Databases",
    category: "programming",
    proficiency: {
      en: "Current Focus",
      ku: "سەرنجی ئێستا",
    },
    highlight: true,
    description: {
      en: "Client-side ACID storage with IndexedDB, SQLite data modeling, optimistic state queuing, and cloud reconciliation.",
      ku: "تەلارسازی داتابەیسی خۆجێیی بە IndexedDB و SQLite، پاراستنی مامەڵەکان لە ئۆفلایندا و ناردنەوە بۆ کلاود.",
    },
    keyTopics: ["IndexedDB Caching", "SQLite Schemas", "Offline Queues", "ACID Data Durability"],
    iconName: "Database",
  },
  {
    id: "hardware-io",
    name: "Hardware I/O & ESC/POS",
    category: "programming",
    proficiency: {
      en: "Working Knowledge",
      ku: "زانیاریی کرداری",
    },
    highlight: true,
    description: {
      en: "Raw peripheral interfacing for thermal receipt printers (80mm ESC/POS commands) and real-time USB barcode scanner capture.",
      ku: "پەیوەستکردنی ڕاستەوخۆی پرینتەری حەراری (ESC/POS) و خوێنەری بارکۆد بە سیستەمی فرۆشتن بە خێرایی باڵا.",
    },
    keyTopics: ["ESC/POS Thermal Printing", "Barcode Scanners", "Sub-50ms Spooling", "Monospace Formatting"],
    iconName: "Cpu",
  },

  // Productivity Tools
  {
    id: "excel",
    name: "Microsoft Excel",
    category: "productivity",
    proficiency: {
      en: "Working Knowledge",
      ku: "زانیاریی کرداری",
    },
    highlight: false,
    description: {
      en: "Data modeling, inventory spreadsheets, financial calculations, pivot tables, and commercial reporting.",
      ku: "بەڕێوەبردن و شیکردنەوەی داتای کۆگا و فرۆشتن، هاوکێشە بیرکارییەکان، خشتەی داڕێژراو و هێڵکارییەکان.",
    },
    keyTopics: ["Advanced Formulas", "Financial Ledgers", "Pivot Tables", "Inventory Data"],
    iconName: "Sheet",
  },
  {
    id: "word",
    name: "Microsoft Word",
    category: "productivity",
    proficiency: {
      en: "Working Knowledge",
      ku: "زانیاریی کرداری",
    },
    highlight: false,
    description: {
      en: "Professional engineering documentation, project specifications, contracts, and formatted technical reports.",
      ku: "نووسینی بەڵگەنامەی ئەندازیاری، ڕاپۆرتی تەکنیکی پڕۆژە، ڕێکخستنی شێواز و هێڵی فەرمی.",
    },
    keyTopics: ["Technical Documentation", "Typography Styles", "Project Specs", "Export Formats"],
    iconName: "FileText",
  },
  {
    id: "powerpoint",
    name: "Microsoft PowerPoint",
    category: "productivity",
    proficiency: {
      en: "Working Knowledge",
      ku: "زانیاریی کرداری",
    },
    highlight: false,
    description: {
      en: "Visual architectural slide decks, project pitch presentations, diagrams, and client walkthroughs.",
      ku: "دیزاینی سلاید و تەلارسازیی پڕۆژەکان بە شێوازی بینراو بۆ پێشکەشکردن بە خاوەنکار و تیمەکان.",
    },
    keyTopics: ["Architecture Presentations", "Visual Storytelling", "Project Pitch Decks"],
    iconName: "Presentation",
  },
];
