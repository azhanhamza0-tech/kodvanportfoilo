export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface ProfileMetric {
  value: string;
  label: {
    en: string;
    ku: string;
  };
  description: {
    en: string;
    ku: string;
  };
}

export interface ProfileConfig {
  fullName: string;
  name: {
    en: string;
    ku: string;
  };
  preferredName: string;
  nickname: string;
  profession: {
    en: string;
    ku: string;
  };
  headline: {
    en: string;
    ku: string;
  };
  bioShort: {
    en: string;
    ku: string;
  };
  bioFull: {
    en: string[];
    ku: string[];
  };
  metrics: ProfileMetric[];
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    location: {
      en: string;
      ku: string;
    };
  };
  journey: {
    interestYear: number;
    codingYear: number;
  };
  config: {
    openToOpportunities: boolean;
    hasCvFile: boolean;
    cvFileName: string;
  };
  socials: SocialLink[];
}

export const profileData: ProfileConfig = {
  fullName: "Azhan Hamza Jaf",
  name: {
    en: "Azhan Hamza Jaf",
    ku: "ئاژان هەمزە جاف",
  },
  preferredName: "Azhan",
  nickname: "Jaf",
  profession: {
    en: "Full-Stack Software Engineer & Solutions Architect",
    ku: "ئەندازیاری نەرمەکاڵا و تەلارسازی سیستەمی وێب",
  },
  headline: {
    en: "Engineering high-concurrency web platforms, media streaming architectures, enterprise management systems & offline-first client engines.",
    ku: "تەلارسازی پلاتفۆرمی میدیا و ستریمینگ، سیستەمی گەورەی بازرگانی و کارگێڕی، و ئەپڵیکەیشنی وێبی خێرا بە بەرزترین تەکنەلۆژیا.",
  },
  bioShort: {
    en: "I am Azhan Hamza Jaf, a versatile software engineer and solutions architect. My engineering scope spans edge-rendered web platforms, multimedia streaming architectures, enterprise retail engines, offline data reconciliation, and Python automation.",
    ku: "من ئاژان هەمزە جاف (ناسراو بە جاف)، ئەندازیاری نەرمەکاڵا و پەرەپێدەری فول-ستاکم. لێهاتووییم بوارەکانی پلاتفۆرمی ستریمینگی میدیا، سیستەمی پێشکەوتووی بازرگانی و کارگێڕی، تەلارسازی داتابەیس و داتای ئۆفلاین، و بەرنامەسازیی لۆژیکی پایسۆن دەگرێتە خۆ.",
  },
  bioFull: {
    en: [
      "I am Azhan Hamza Jaf, a full-stack software engineer and systems architect passionate about building resilient, high-throughput digital platforms across diverse technical domains.",
      "Rather than limiting myself to a single vertical, my work encompasses the entire spectrum of modern software engineering: from high-concurrency media streaming catalogs (Rwanin Stream) with dynamic client buffering, to mission-critical retail ERP engines (Xizmat Market POS) featuring local ACID persistence, debt ledgering, and direct ESC/POS hardware control.",
      "I architect robust frontend systems using TypeScript 5.x, React 19, and Next.js App Router, while designing efficient local storage architectures with IndexedDB and SQLite. On the backend and systems side, I leverage Python for automated algorithmic pipelines, data validation (such as GS1 EAN-13 checksums), and workflow scripting.",
      "From crafting pixel-perfect, bidirectional Kurdish Sorani (RTL) & English (LTR) user experiences to orchestrating zero-downtime offline data synchronizations, I approach every challenge with architectural discipline, clean code, and relentless attention to engineering performance."
    ],
    ku: [
      "من ئاژان هەمزە جاف (ناسراو بە جاف)، ئەندازیاری نەرمەکاڵا و تەلارسازی سیستەمەکانی وێب، خاوەنی لێهاتوویی فرە-ڕەهەند و بەهێز لە بونیاتنانی نەرمەکاڵای ئاست-بەرز لە بوارە جیاوازەکاندا.",
      "کارەکانم تەنها لە یەک بواردا قەتیس نەماون؛ بەڵکو تەواوی زنجیرەی ئەندازیاریی مۆدێرن دەگرنەوە: لە دروستکردنی پلاتفۆرمی گەورەی ستریمینگی فیلم و زنجیرەکان (Rwanin Stream) بە خێرایی باڵا و پۆلێنکردنی داتا، تا بونیاتنانی سیستەمی بازرگانی و ژمێریاریی پێشکەوتوو (Xizmat Market POS) کە بەرگەی نەمانی ئینتەرنێت دەگرێت و پەیوەستە بە پرینتەری حەراری و خوێنەری بارکۆد.",
      "کۆدەکانم بە تایپسکریپتی پەتی و ڕیاکت ١٩ و نێکست جەی ئێس بە ستانداردی جیهانی دەنوسم. لە پاڵ ئەوەشدا پایسۆن بەکاردەهێنم بۆ ئەلگۆریتمە فەرمییەکان، ئۆتۆمەیشن و شیکردنەوەی داتا، شانبەشانی تەلارسازی داتابەیسی خۆجێیی وەک IndexedDB و SQLite.",
      "لە ڕێکخستنی دەقاودەقی ڕووکاری کوردی سۆرانی (RTL) و ئینگلیزی (LTR) تا گەیاندنی ئەپڵیکەیشن بە بەرزترین خێرایی و پارێزراوی لە هەڵە، ئامانجم هەمیشە پێشکەشکردنی چارەسەری ئەندازیاریی بەهێز و پڕ سوودە."
    ],
  },
  metrics: [
    {
      value: "Next.js & React 19",
      label: { en: "Full-Stack Architecture", ku: "تەلارسازی فول-ستاک" },
      description: { en: "High-performance edge rendering & reactive client state", ku: "ڕووکاری خێرا و کارلێککەر بە نێکست جەی ئێس" }
    },
    {
      value: "Dynamic Buffer",
      label: { en: "Media Streaming Engine", ku: "پلاتفۆرمی ستریمینگ و میدیا" },
      description: { en: "Adaptive video player & faceted catalog search", ku: "پەخشی خێرای ڤیدیۆ و پۆلێنکردنی زیرەکانەی فیلمەکان" }
    },
    {
      value: "Zero Data Loss",
      label: { en: "Offline Retail & ERP", ku: "سیستەمی بازرگانی و کارگێڕی" },
      description: { en: "ACID transactions, inventory ledgering & debt tracking", ku: "ژمێریاری، بەڕێوەبردنی کۆگا و قەرز بەبێ ئینتەرنێت" }
    },
    {
      value: "<50ms I/O",
      label: { en: "Hardware & Python Logic", ku: "ئامێرەکان و لۆژیکی پایسۆن" },
      description: { en: "GS1 checksums & ESC/POS raw thermal printing", ku: "خوێنەری بارکۆد، پرینتەری حەراری و ئەلگۆریتم" }
    }
  ],
  contact: {
    phone: "07501151634",
    phoneFormatted: "+964 750 115 1634",
    email: "azhanako1999@gmail.com",
    location: {
      en: "Kurdistan Region, Iraq",
      ku: "هەرێمی کوردستان، عێراق",
    },
  },
  journey: {
    interestYear: 2021,
    codingYear: 2023,
  },
  config: {
    openToOpportunities: false,
    hasCvFile: false,
    cvFileName: "Azhan_Hamza_Jaf_CV.pdf",
  },
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/azhan-hamza",
      icon: "github",
      ariaLabel: "Azhan Hamza Jaf GitHub Profile",
    },
    {
      platform: "Email",
      url: "mailto:azhanako1999@gmail.com",
      icon: "mail",
      ariaLabel: "Send email to Azhan Hamza Jaf",
    },
    {
      platform: "Phone",
      url: "tel:07501151634",
      icon: "phone",
      ariaLabel: "Call Azhan Hamza Jaf",
    },
  ],
};
