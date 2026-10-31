export interface ApproachPrinciple {
  id: string;
  title: {
    en: string;
    ku: string;
  };
  description: {
    en: string;
    ku: string;
  };
  iconName: string;
}

export interface TimelineMilestone {
  year: string;
  title: {
    en: string;
    ku: string;
  };
  subtitle: {
    en: string;
    ku: string;
  };
  description: {
    en: string;
    ku: string;
  };
  tags: string[];
}

export const workPrinciples: ApproachPrinciple[] = [
  {
    id: "continuous-learning",
    title: {
      en: "Continuous Technical Learning",
      ku: "فێربوونی تەکنیکیی بەردەوام",
    },
    description: {
      en: "Technology evolves rapidly. I dedicate disciplined daily time to reading documentation, understanding core mechanics, and expanding my stack.",
      ku: "تەکنەلۆژیا بە خێرایی لە گۆڕاندایە؛ بە پابەندییەوە ڕۆژانە کات بۆ خوێندنەوەی دۆکیومێنت، تێگەیشتن لە بنەماکان و بەرزکردنەوەی ئاستم تەرخان دەکەم.",
    },
    iconName: "BookOpen",
  },
  {
    id: "practical-projects",
    title: {
      en: "Building Practical Projects",
      ku: "دروستکردنی پڕۆژەی کرداری",
    },
    description: {
      en: "Theory solidifies through implementation. I focus on building real, usable interfaces rather than getting stuck in tutorial loops.",
      ku: "تیۆری لە ڕێگەی کارپێکردنەوە دەچەسپێت. سەرنجم لەسەر دروستکردنی ڕووکاری بەسوود و ڕاستەقینەیە لەبری مانەوە لە بازنەی سەیری ڤیدیۆدا.",
    },
    iconName: "Hammer",
  },
  {
    id: "responsive-design",
    title: {
      en: "Responsive Web Design",
      ku: "دیزاینی گونجاو لەگەڵ هەموو شاشەیەک",
    },
    description: {
      en: "Interfaces must perform smoothly on every screen size—from small mobile phones to expansive 4K desktop displays.",
      ku: "ماڵپەڕ پێویستە لەسەر هەموو شاشەیەک بە بێ کێشە و جوان دەربکەوێت—لە مۆبایلە بچووکەکانەوە تا کۆمپیوتەرە گەورەکان.",
    },
    iconName: "Smartphone",
  },
  {
    id: "maintainable-code",
    title: {
      en: "Writing Maintainable Code",
      ku: "نووسینی کۆدی خاوێن و بەردەوام",
    },
    description: {
      en: "Prioritizing clear naming, structured component hierarchies, and strict TypeScript types so that code is easy to read, refactor, and maintain.",
      ku: "ناو لێنانی ڕوون، ڕێکخستنی مۆدیوڵەکان و تایپکردنی توندوتۆڵ، تا کۆدەکە بۆ خوێندنەوە، چاکسازی و نوێکردنەوە لە ئایندەدا ئاسان بێت.",
    },
    iconName: "Code",
  },
  {
    id: "usability-accessibility",
    title: {
      en: "Usability & Accessibility (a11y)",
      ku: "ئاسانکاریی بەکارهێنان و دەستڕاگەیشتوویی",
    },
    description: {
      en: "A website is only good if people can use it. I care deeply about color contrast, keyboard navigation, clear feedback states, and RTL legibility.",
      ku: "ماڵپەڕ کاتێک سەرکەوتووە کە هەموو کەس بتوانێت بە ئاسانی بەکاریبهێنێت؛ گرنگی دەدەم بە کۆنتراستی ڕەنگەکان، کۆنترۆڵ بە کیبۆرد و خوێندنەوەی کوردی.",
    },
    iconName: "Eye",
  },
  {
    id: "problem-solving",
    title: {
      en: "Analytical Problem Solving",
      ku: "شیکاری و چارەسەرکردنی کێشەکان",
    },
    description: {
      en: "Approaching challenges methodically: breaking complex requirements into bite-sized components, testing hypotheses, and iterating patiently.",
      ku: "ڕووبەڕووبوونەوەی کێشەکان بە شێوازی هەنگاو بە هەنگاو: دابەشکردنی داواکارییە گەورەکان بۆ بەشی بچووک و دۆزینەوەی باشترین ڕێگەچارە.",
    },
    iconName: "Cpu",
  },
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2021",
    title: {
      en: "Spark of Curiosity & Coding Interest",
      ku: "سەرەتای خولیا و گرنگیدان بە پرۆگرامسازی",
    },
    subtitle: {
      en: "The beginning of the journey",
      ku: "دەستپێکی گەشتەکە",
    },
    description: {
      en: "Became deeply interested in programming, software architecture, and the mechanics behind modern internet technologies. Began exploring how the web functions and what makes great digital software.",
      ku: "سەرنجم بەلای زانستی کۆمپیوتەر، تەلارسازیی نەرمەکاڵا و چۆنیەتی کارکردنی ئینتەرنێت و ماڵپەڕە مۆدێرنەکاندا ڕاکێشرا و دەستم کرد بە لێکۆڵینەوە لە چەمکە بنەڕەتییەکان.",
    },
    tags: ["Curiosity", "Web Concepts", "Programming Logic"],
  },
  {
    year: "2023",
    title: {
      en: "Active Coding & Frontend Foundation",
      ku: "دەستپێکردنی کرداریی نووسینی کۆد و فرۆنتێند",
    },
    subtitle: {
      en: "From interest to active implementation",
      ku: "گۆڕینی خولیا بۆ کرداری ڕۆژانە",
    },
    description: {
      en: "Commenced actively writing code daily. Built strong foundations in HTML5 semantics, modern CSS layouts (Flexbox/Grid), and ECMAScript JavaScript. Transitioned towards TypeScript and React to build modular interactive web interfaces.",
      ku: "بە کردار دەستم بە نووسینی کۆدی ڕۆژانە کرد. بنەمایەکی بەهێزم لە HTML و CSS و زمانی جاڤاسکریپت داڕشت، پاشان بەرەو تایپسکریپت و ڕیاکت چووم بۆ دروستکردنی ڕووکاری بەکارهێنەری کارلێککەر.",
    },
    tags: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Python Basics"],
  },
  {
    year: "Today",
    title: {
      en: "Modern Web Engineering & Practical Craft",
      ku: "ئەندازیاریی نوێی وێب و پڕۆژەی کرداری",
    },
    subtitle: {
      en: "Continuous growth and refinement",
      ku: "پێشکەوتنی بەردەوام بەرەو ئایندە",
    },
    description: {
      en: "Continues actively mastering modern web development workflows, refining component patterns in React and TSX, experimenting with Python for scripting, and building accessible, bilingual web solutions.",
      ku: "بە شێوەیەکی بەردەوام خەریکی قوڵبوونەوەم لە تەکنەلۆژیا مۆدێرنەکان، باشترکردنی شێوازی نووسینی پێکهاتەکان لە React و TSX، بەکارهێنانی پایسۆن بۆ لۆژیک، و دروستکردنی ماڵپەڕی تەواو بەهێز و دووزمانە.",
    },
    tags: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX", "Continuous Growth"],
  },
];
