export interface JournalArticle {
  id: string;
  slug: string;
  title: {
    en: string;
    ku: string;
  };
  summary: {
    en: string;
    ku: string;
  };
  publishedDate: string;
  readTimeMinutes: number;
  category: "architecture" | "frontend" | "performance";
  categoryLabel: {
    en: string;
    ku: string;
  };
  tags: string[];
  content: {
    en: {
      introduction: string;
      sections: {
        heading: string;
        body: string;
        codeSnippet?: string;
      }[];
      keyTakeaway: string;
    };
    ku: {
      introduction: string;
      sections: {
        heading: string;
        body: string;
        codeSnippet?: string;
      }[];
      keyTakeaway: string;
    };
  };
}

export const journalArticlesData: JournalArticle[] = [
  {
    id: "offline-first-pos-guide",
    slug: "offline-first-retail-pos",
    title: {
      en: "Engineering an Offline-First Retail POS with React & IndexedDB",
      ku: "تەلارسازیی سیستەمێکی کاشێری Offline-First بە بەکارهێنانی ڕیاکت و IndexedDB",
    },
    summary: {
      en: "Why retail checkout systems must treat network drops as a normal condition rather than an exception, and how to build a reliable local persistence layer.",
      ku: "بۆچی سیستەمی فرۆشتنی مارکێت دەبێت پچڕانی هێڵی ئینتەرنێت وەک بارودۆخێکی ئاسایی ببینێت و چۆن داتاکان لە ناوخۆدا بە مسۆگەری بپارێزرێن.",
    },
    publishedDate: "2025",
    readTimeMinutes: 5,
    category: "architecture",
    categoryLabel: {
      en: "Architecture & Systems",
      ku: "تەلارسازی و سیستەم",
    },
    tags: ["IndexedDB", "Offline PWA", "TypeScript", "POS"],
    content: {
      en: {
        introduction:
          "In supermarket environments, connectivity outages happen without warning. If the checkout software relies directly on remote APIs for every barcode scanned, queues form, customers get frustrated, and business stops. When building the Xizmat Market system, the foundational decision was to reverse the data flow: the browser's local database is the source of truth during the shift, while the cloud server acts as an asynchronous backup mirror.",
        sections: [
          {
            heading: "1. The Inadequacy of LocalStorage for Retail Catalogs",
            body: "Many web tutorials suggest using LocalStorage for offline data. In practice, LocalStorage has a strict 5MB quota, is synchronous, and blocks the main thread during JSON serialization. For a grocery market with 5,000 products, searching by barcode in LocalStorage creates visible frame drops. We chose IndexedDB because it operates asynchronously and supports indexed key queries.",
            codeSnippet: `// Opening a transactional object store in IndexedDB
const request = indexedDB.open("MarketDB", 2);
request.onupgradeneeded = (event) => {
  const db = (event.target as IDBOpenDBRequest).result;
  if (!db.objectStoreNames.contains("products")) {
    const store = db.createObjectStore("products", { keyPath: "barcode" });
    store.createIndex("category", "category", { unique: false });
  }
};`,
          },
          {
            heading: "2. Keyboard Shortcuts: Designing for Cashier Ergonomics",
            body: "A desktop mouse is the enemy of checkout velocity. Cashiers can ring up 40 items in under two minutes if their hands never leave the number pad. We mapped key operations to function keys (F2 for instant search, F4 to finalize payment, and Enter to trigger receipt printing), ensuring preventDefault() cleanly suppresses browser default behaviors.",
          },
          {
            heading: "3. Conflict-Free Sync When Reconnecting",
            body: "When the network returns, an online event fires. Instead of sending an unorganized batch, transactions are pulled from a local pending queue with monotonic IDs and synced one by one with exponential backoff to handle flaky Wi-Fi seamlessly.",
          },
        ],
        keyTakeaway:
          "Designing for offline resilience is not an afterthought; it fundamentally dictates how state, errors, and user feedback must be engineered from day one.",
      },
      ku: {
        introduction:
          "لە سوپەرمارکێتەکاندا، پچڕانی هێڵی ئینتەرنێت بەبێ ئاگاداری ڕوودەدات. ئەگەر بەرنامەی کاشێر بۆ هەر بارکۆدێک چاوەڕوانی ئینتەرنێت بێت، سەرەی دوورودرێژ دروست دەبێت و کار دەوەستێت. لە کاتی دروستکردنی مارکێتی خزمەتدا، بڕیاری بنەڕەتیمان ئەوە بوو کە داتابەیسی ناوخۆیی براوزەر مەرجەع و کۆگای سەرەکی بێت، و سێرڤەری سەر هێڵ وەک ئەرشیفێکی یەدەگ کار بکات.",
        sections: [
          {
            heading: "١. بۆچی LocalStorage بۆ مارکێت گونجاو نییە؟",
            body: "کۆگای LocalStorage سنوردارە بۆ ٥ مێگابایت و کارکردنی هاوکات دەبێتە هۆی وەستانی شاشە لە کاتی گەڕان بەناو ٥٠٠٠ کاڵادا. بەڵام IndexedDB تەواو جیاوازە؛ ناهاوکاتە و توانای هەیە بە چەند میلیچرکەیەک بارکۆد بدۆزێتەوە بەبێ ئەوەی کەمترین سستی دروست بکات.",
            codeSnippet: `// کردنەوەی کۆگای داتای ناوخۆ بە شێوازی ناهاوکات
const request = indexedDB.open("MarketDB", 2);
request.onupgradeneeded = (event) => {
  const db = (event.target as IDBOpenDBRequest).result;
  if (!db.objectStoreNames.contains("products")) {
    const store = db.createObjectStore("products", { keyPath: "barcode" });
    store.createIndex("category", "category", { unique: false });
  }
};`,
          },
          {
            heading: "٢. خێرایی کاشێر بە کلیلەکانی کیبۆرد",
            body: "ماوسی کۆمپیوتەر خێرایی فرۆشتن کەم دەکاتەوە. کاشێر دەتوانێت بە کەمتر لە دوو خولەک ٤٠ کاڵا بفرۆشێت ئەگەر دەستی تەنها لەسەر کیبۆرد بێت. بۆیە کلیلەکانی F2 بۆ گەڕان و F4 بۆ کۆتاییهێنان بە فرۆشتن دیاریکران تا کارەکە بەرزترین خێرایی هەبێت.",
          },
          {
            heading: "٣. یەکخستنی داتا لە کاتی گەڕانەوەی ئینتەرنێت",
            body: "پاش پەیوەستبوونەوەی هێڵ، بەرنامەکە بە شێوازی ڕێکخراو و بەبێ دروستبوونی هیچ کێشەیەک یان وەسڵی دووبارە، داتای فرۆشراوەکانی ناوخۆ دەنێرێتە سێرڤەری ئۆنلاین.",
          },
        ],
        keyTakeaway:
          "داڕشتنی سیستەمی خۆڕاگر بۆ نەمانی ئینتەرنێت شتێکی زیادە نییە، بەڵکو دەبێت لە یەکەم ساتەوە بنەمای نووسینی کۆدەکان بێت.",
      },
    },
  },
  {
    id: "rtl-typography-engineering",
    slug: "rtl-kurdish-sorani-engineering",
    title: {
      en: "RTL Engineering: Perfecting Kurdish Sorani Interfaces in React & Tailwind",
      ku: "ئەندازیاریی ڕاستەقینەی ڕووکاری کوردی لە ڕیاکت و تەیلوینددا",
    },
    summary: {
      en: "Beyond setting dir='rtl': handling font baseline differences, directional icon mirroring, and logical CSS properties in bilingual web apps.",
      ku: "لە دەرەوەی تەنها گۆڕینی ئاراستەی نوسین: چۆنیەتی ڕێکخستنی بەرزیی فۆنتە کوردییەکان و ئاوێنەکردنی هێماکان بەبێ تێکچوونی ڕووکار.",
    },
    publishedDate: "2024",
    readTimeMinutes: 4,
    category: "frontend",
    categoryLabel: {
      en: "Frontend & RTL",
      ku: "فرۆنتێند و RTL",
    },
    tags: ["CSS", "RTL", "Kurdish", "React", "Accessibility"],
    content: {
      en: {
        introduction:
          "Many developers assume Right-to-Left (RTL) support is as simple as flipping the document `dir` attribute to `rtl`. In reality, Arabic script languages like Kurdish Sorani possess fundamentally different typographic baselines, ascender/descender heights, and directional expectations for interface navigation.",
        sections: [
          {
            heading: "1. The Fallacy of Physical CSS Margins",
            body: "Using `ml-4` or `mr-auto` inevitably breaks when the user toggles languages. Modern CSS logical properties—like `margin-inline-start`, `padding-inline-end`, and Tailwind's `ms-` / `me-` utilities—allow a single component to adapt seamlessly regardless of writing direction.",
            codeSnippet: `/* CSS Logical Properties ensure symmetric spacing in both LTR and RTL */
.interactive-card {
  padding-inline-start: 1.5rem; /* Left in English, Right in Kurdish */
  padding-inline-end: 1rem;
  border-inline-start: 3px solid #8B5CF6;
}`,
          },
          {
            heading: "2. Line Heights & Kurdish Letterforms",
            body: "Latin typefaces usually balance well with a line-height of 1.4 or 1.5. Kurdish Sorani characters with vowel markers and diacritics (like ێ, ۆ, ڕ, ڵ) require a minimum line-height of 1.7 to prevent vertical clipping.",
          },
        ],
        keyTakeaway:
          "Respecting linguistic nuance makes software feel like a first-class product rather than a poorly translated afterthought.",
      },
      ku: {
        introduction:
          "زۆرێک پێیان وایە سازکردنی ماڵپەڕ بۆ زمانی کوردی تەنها گۆڕینی `dir='rtl'`یە. لە ڕاستیدا پیتی کوردی لە ڕووی بەرزی و هاوسەنگییەوە جیاوازە و پێویستی بە تێگەیشتنی ئەندازیاری هەیە بۆ ئەوەی دەقەکان بە جوانی و بێ تێکچوون دەربکەون.",
        sections: [
          {
            heading: "١. دوورکەوتنەوە لە مارجینی چەپ و ڕاستی جێگیر",
            body: "بەکارهێنانی مارجینی جێگیر وا دەکات لە کاتی گۆڕینی زمان بۆ ئینگلیزی ڕووکارەکە تێکبچێت. بەکارهێنانی تایبەتمەندییە لۆژیکییەکانی CSS وەک `ms-` و `me-` وا دەکات هەمان کۆد لە هەردوو زماندا بە دروستی جێگیر بێت.",
            codeSnippet: `/* تایبەتمەندییە لۆژیکییەکانی CSS ڕێگری لە تێکچوونی ڕیزبەندی دەکەن */
.interactive-card {
  padding-inline-start: 1.5rem; /* چەپ لە ئینگلیزیدا، ڕاست لە کوردیدا */
  padding-inline-end: 1rem;
  border-inline-start: 3px solid #8B5CF6;
}`,
          },
          {
            heading: "٢. بەرزیی دێڕەکان (Line Height) بۆ پیتی کوردی",
            body: "فۆنتە ئینگلیزییەکان بە بەرزیی ١.٤ یان ١.٥ جوان دەردەکەون، بەڵام پیتە کوردییەکان بەهۆی سەر و ژێر و جەختەوە پێویستیان بە کەمترین بەرزیی ١.٧ هەیە تا پیتەکان بەسەر یەکدا نەکەون.",
          },
        ],
        keyTakeaway:
          "ڕێزگرتن لە زمانی کوردی وا دەکات پرۆژەکەت لە بەرهەمێکی جیهانیی نایاب بچێت نەک ماڵپەڕێکی سەرپێیی.",
      },
    },
  },
  {
    id: "media-performance-lessons",
    slug: "media-streaming-performance",
    title: {
      en: "Performance Optimization in Media Web Apps: Lessons from Rwanin Stream",
      ku: "بەرزکردنەوەی خێرایی لە ماڵپەڕەکانی بینینی فیلم: ئەزموونی ڕوانین ستریم",
    },
    summary: {
      en: "How to avoid layout shifts, manage progressive image loading, and isolate heavy video player dependencies for sub-second page loads.",
      ku: "چۆن ڕێگری لە جوڵەی لاپەڕە بکرێت، پۆستەرەکان بە کەمترین قەبارە باربکرێن و پەخشی ڤیدیۆ بە خێرایی کەمتر لە چرکەیەک دەستپێبکات.",
    },
    publishedDate: "2024",
    readTimeMinutes: 4,
    category: "performance",
    categoryLabel: {
      en: "Web Performance",
      ku: "خێرایی کارکردنی وێب",
    },
    tags: ["Next.js", "Performance", "Media", "Lazy Loading"],
    content: {
      en: {
        introduction:
          "Media portals are image-dense. A single catalog grid can feature 40 poster images, hero video backdrops, and trailer embeds. Without strict asset budgeting, initial page weight quickly balloons past 15MB, severely harming mobile users on 4G networks.",
        sections: [
          {
            heading: "1. Aspect-Ratio Reservation and Zero Layout Shift",
            body: "To achieve a Cumulative Layout Shift (CLS) of 0, every movie card must reserve an exact 2:3 aspect ratio container before the image bytes arrive over the wire. This eliminates the annoying UI jump common on streaming portals.",
          },
          {
            heading: "2. Lazy Video Player Initialization",
            body: "Never load the full video playback engine or YouTube iframe until the user explicitly clicks 'Watch' or 'Trailer'. Replacing inactive video players with a static poster and SVG play icon saves hundreds of kilobytes of upfront JavaScript execution.",
          },
        ],
        keyTakeaway:
          "Perceived speed is driven by what you delay loading just as much as what you optimize.",
      },
      ku: {
        introduction:
          "ماڵپەڕەکانی فیلم زۆرترین وێنەیان تێدایە. کەتەلۆگێک ڕەنگە ٤٠ پۆستەر و چەندین ترەیلەر لەخۆبگرێت. ئەگەر بە وریاییەوە قەبارەی وێنەکان کۆنترۆڵ نەکرێت، ماڵپەڕەکە زۆر قورس دەبێت و لەسەر مۆبایل زۆر سست دەبێتەوە.",
        sections: [
          {
            heading: "١. دیاریکردنی پێشوەختەی قەبارەی وێنە بۆ ڕێگری لە جوڵەی پەڕە",
            body: "بۆ ئەوەی پەڕەکە تێک نەچێت پێش ئەوەی وێنەکان دەربکەون، دەبێت بۆشایی هەر وێنەیەک بە شێوەی ڕێکخراو (ڕێژەی ٢ بە ٣) دیاری بکرێت تا لاپەڕەکە بە جێگیری بمێنێتەوە.",
          },
          {
            heading: "٢. دواخستنی بارکردنی پەخشکەری ڤیدیۆ",
            body: "پەخشکەری ڤیدیۆ نابێت پێشوەختە باربکرێت هەتاوەکو بینەر کلیکی 'سەیرکردن' نەکات. دانانی وێنەی سادە لە جیاتی بارکردنی یوتوب یان پەخشکەر سەدان کیلۆبایت لە هێڵی ئینتەرنێت دەپارێزێت.",
          },
        ],
        keyTakeaway:
          "خێرایی ڕاستەقینە لەوەدایە کام بەش دوادەخەیت تا کاتی پێویستبوون، نەک بارکردنی هەموو شتێک پێکەوە.",
      },
    },
  },
];
