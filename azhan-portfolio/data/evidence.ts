export interface TechnicalEvidenceItem {
  id: string;
  category: "architecture" | "type_safety" | "hardware" | "accessibility";
  title: {
    en: string;
    ku: string;
  };
  metricOrStandard: {
    en: string;
    ku: string;
  };
  verificationMethod: {
    en: string;
    ku: string;
  };
  details: {
    en: string;
    ku: string;
  };
  status: "verified" | "ongoing";
}

export const technicalEvidenceData: TechnicalEvidenceItem[] = [
  {
    id: "strict-typescript-standard",
    category: "type_safety",
    title: {
      en: "Strict TypeScript Compile & Zero 'any' Standard",
      ku: "ستانداردی توندی تایپسکریپت و سفڕ بەکارهێنانی 'any'",
    },
    metricOrStandard: {
      en: "Strict Type Safety — 100% TSX/TypeScript",
      ku: "سەلامەتیی تەواوی تایپ لە سەدا سەدی کۆدەکان",
    },
    verificationMethod: {
      en: "Automated compiler checks with TypeScript 5.x (`tsc --noEmit`) and strict linter rules.",
      ku: "پشکنینی خۆکاری کۆمپایلەر بە تایپسکریپتی نوێ و پشکنەری ESLint بەبێ هیچ هەڵەیەک.",
    },
    details: {
      en: "All domain models, state dispatchers, and prop contracts across this portfolio and referenced projects use explicit interfaces and discriminated unions. No shortcuts using `any` or untyped casts.",
      ku: "سەرجەم مۆدێلەکان و داتاکان بە شێوەیەکی توندوتۆڵ تایپی ڕوونیان بۆ دانراوە بۆ دڵنیابوونەوە لە نەبوونی هیچ هەڵەیەکی شاراوە.",
    },
    status: "verified",
  },
  {
    id: "offline-pwa-hardware-verification",
    category: "hardware",
    title: {
      en: "Offline PWA & Thermal ESC/POS Receipt Printing",
      ku: "کارکردنی ئۆفلاین و چاپی گەرمی لەسەر کاغەزی ڕاستەقینە",
    },
    metricOrStandard: {
      en: "Tested on 80mm & 58mm Thermal Receipt Hardware",
      ku: "تاقیکراوەتەوە لەسەر چاپکەری وەسڵی 80mm و 58mm",
    },
    verificationMethod: {
      en: "Physical hardware printout verification (Invoice #KHM-261017-6975) at Xizmat Market (Hawari Shar branch).",
      ku: "تاقیکردنەوەی کرداری و چاپی وەسڵی ڕاستەقینەی مارکێت (وەسڵی ژمارە KHM-261017-6975) لە لقی هەواری شار.",
    },
    details: {
      en: "The CSS print media queries and string alignment engine were tested against physical ESC/POS thermal printers, validating exact line wrapping and legible Kurdish Sorani typography on narrow paper.",
      ku: "کۆدی چاپی وەسڵ لەسەر چاپکەری ڕاستەقینەی دوکانەکە تاقیکراوەتەوە و دێڕەکان بە بێ تێکچوون لەسەر کاغەزەکە چاپ کراون.",
    },
    status: "verified",
  },
  {
    id: "bidirectional-rtl-standard",
    category: "accessibility",
    title: {
      en: "Complete Bidirectional Kurdish Sorani (RTL) & English (LTR)",
      ku: "گونجانی دوولایەنەی تەواو بۆ کوردی (RTL) و ئینگلیزی (LTR)",
    },
    metricOrStandard: {
      en: "Zero Layout Inversion Flaws & Instant Switching",
      ku: "گۆڕینی دەستبەجێی زمان بەبێ تێکچوونی ڕووکار",
    },
    verificationMethod: {
      en: "Tested across mobile and desktop viewports using CSS logical properties and Vazirmatn Kurdish typography.",
      ku: "پشکنینی هەردوو زمانەکە لەسەر شاشەی مۆبایل و کۆمپیوتەر بە فۆنتی ستانداردی وەزیرمەتن و ئینتەر.",
    },
    details: {
      en: "Navigation, modals, case study galleries, command palette, and contact forms adjust their alignment, margin flow, and icon orientations symmetrically without page reloads.",
      ku: "سەرجەم بەشەکان، مینیو، گالەری وێنەکان و فۆرمەکان لە کاتی گۆڕینی زماندا بە شێوازێکی سروشتی ئاراستەیان ڕێکدەخرێت.",
    },
    status: "verified",
  },
  {
    id: "turbopack-build-performance",
    category: "architecture",
    title: {
      en: "Optimized Static Bundling via Next.js & Turbopack",
      ku: "خێرایی بەرز لە کۆمپایل و بارکردن بە Turbopack",
    },
    metricOrStandard: {
      en: "Sub-2 Second Full Production Compilation",
      ku: "تەواوبوونی بیڵدی کۆتایی بە کەمتر لە ٢ چرکە",
    },
    verificationMethod: {
      en: "Verified using Next.js 16.4.2 Turbopack engine (`next build`) producing optimized prerendered static assets.",
      ku: "تاقیکراوەتەوە بە بزوێنەری خێرای Turbopack و پەڕەکان بە کەمترین قەبارەی مێگابایت ئامادە دەکرێن.",
    },
    details: {
      en: "Zero bloated JavaScript dependencies, tree-shaken SVG icon sets, and modular code splitting deliver fast Time-To-Interactive (TTI) for visitors on any device.",
      ku: "دوورکەوتنەوە لە فایلی گەورە و سوودوەرگرتن لە وێنە و ئایکۆنی ڕێکخراو بۆ ئەوەی ماڵپەڕەکە لە یەکەم چرکەوە دەستبەجێ بکرێتەوە.",
    },
    status: "verified",
  },
];
