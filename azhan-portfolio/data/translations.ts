export type Language = "en" | "ku";

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    architecture: string;
    codeLab: string;
    principles: string;
    journal: string;
    evidence: string;
    experience: string;
    contact: string;
    switchLang: string;
    switchTheme: string;
    toggleMenu: string;
    closeMenu: string;
    contactCta: string;
    commandPalette: string;
  };
  hero: {
    greeting: string;
    role: string;
    headline: string;
    bio: string;
    ctaProjects: string;
    ctaContact: string;
    ctaDownloadCv: string;
    statusAvailable: string;
    statusLearning: string;
    yearsActive: string;
    focusArea: string;
    terminalTitle: string;
    terminalTabProfile: string;
    terminalTabStack: string;
    terminalTabStatus: string;
    terminalTabCli: string;
    terminalCopy: string;
    terminalCopied: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    timelineTitle: string;
    timelineSubtitle: string;
    cardValuesTitle: string;
    statsInterest: string;
    statsCoding: string;
    statsToday: string;
    statInterestLabel: string;
    statCodingLabel: string;
    statTodayLabel: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    categoryAll: string;
    categoryFrontend: string;
    categoryProgramming: string;
    categoryProductivity: string;
    proficiencyNotice: string;
    proficiencyCurrentFocus: string;
    proficiencyWorkingKnowledge: string;
    proficiencyLearning: string;
    keyTopicsTitle: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptyMessage: string;
    filterAll: string;
    filterFrontend: string;
    filterConcept: string;
    filterTools: string;
    viewDetails: string;
    closeDetails: string;
    problemSolved: string;
    keyFeatures: string;
    techStack: string;
    architectureTitle: string;
    liveDemo: string;
    sourceCode: string;
    conceptNote: string;
    modalReturn: string;
    galleryTitle: string;
    screenshotsCount: string;
    previousImage: string;
    nextImage: string;
  };
  architecture: {
    badge: string;
    title: string;
    subtitle: string;
    decisionsTitle: string;
    dataFlowTitle: string;
    securityTitle: string;
    rationaleLabel: string;
    tradeOffLabel: string;
    alternativesLabel: string;
  };
  codeLab: {
    badge: string;
    title: string;
    subtitle: string;
    copyCode: string;
    copiedCode: string;
    problemTitle: string;
    tradeOffsTitle: string;
    filterAll: string;
  };
  principles: {
    badge: string;
    title: string;
    subtitle: string;
    applicationLabel: string;
    filterAll: string;
  };
  journal: {
    badge: string;
    title: string;
    subtitle: string;
    readArticle: string;
    readTime: string;
    keyTakeaway: string;
    backToJournal: string;
  };
  evidence: {
    badge: string;
    title: string;
    subtitle: string;
    verifiedStatus: string;
    methodLabel: string;
  };
  commandPalette: {
    placeholder: string;
    noResults: string;
    navigationGroup: string;
    projectsGroup: string;
    actionsGroup: string;
    closeHint: string;
    selectHint: string;
    navigateHint: string;
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    approachTitle: string;
    approachSubtitle: string;
    learningTitle: string;
    learningSubtitle: string;
    futureTitle: string;
    futureSubtitle: string;
    futureDescription: string;
    futureBadge: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    directTitle: string;
    directSubtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    copyEmail: string;
    copiedEmail: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submittingButton: string;
    successMessage: string;
    errorMessage: string;
    validationErrors: {
      nameRequired: string;
      emailInvalid: string;
      subjectRequired: string;
      messageShort: string;
    };
    fallbackNotice: string;
    openEmailClient: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contacts: string;
    backToTop: string;
    copyright: string;
    techStackNote: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      architecture: "Architecture",
      codeLab: "Code Lab",
      principles: "Principles",
      journal: "Journal",
      evidence: "Evidence & QA",
      experience: "Learning Journey",
      contact: "Contact",
      switchLang: "کوردی",
      switchTheme: "Toggle theme",
      toggleMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      contactCta: "Get in Touch",
      commandPalette: "Command Menu (Ctrl+K)",
    },
    hero: {
      greeting: "Hello, I am",
      role: "Full-Stack Software Engineer & Solutions Architect",
      headline: "Engineering scalable web platforms, streaming architectures, and enterprise business systems.",
      bio: "I am Azhan Hamza Jaf, a versatile software engineer building high-impact digital products across the full stack. From media streaming catalogs and enterprise management engines to responsive bidirectional web applications and Python automation, I deliver resilient, production-grade software.",
      ctaProjects: "Explore My Projects",
      ctaContact: "Contact Me",
      ctaDownloadCv: "Download CV",
      statusAvailable: "Available for new opportunities",
      statusLearning: "Continuously building & refining skills",
      yearsActive: "Writing code since 2023",
      focusArea: "Next.js, React 19, TypeScript, Python & Systems Architecture",
      terminalTitle: "developer-environment.ts",
      terminalTabProfile: "Profile.ts",
      terminalTabStack: "Stack.json",
      terminalTabStatus: "Status.sh",
      terminalTabCli: "Interactive CLI",
      terminalCopy: "Copy Info",
      terminalCopied: "Copied!",
    },
    about: {
      badge: "Real Story & Background",
      title: "Authentic Path, Driven by Craft",
      subtitle: "A genuine look into my development journey, personal values, and practical approach to technology.",
      timelineTitle: "The Learning Journey",
      timelineSubtitle: "Milestones marking the transition from curiosity to active implementation.",
      cardValuesTitle: "What Drives My Work",
      statsInterest: "2021",
      statsCoding: "2023",
      statsToday: "Now",
      statInterestLabel: "Interest in Coding",
      statCodingLabel: "Began Writing Code",
      statTodayLabel: "Continuous Growth",
    },
    skills: {
      badge: "Technical Foundation",
      title: "Skills & Development Tools",
      subtitle: "Categorized overview of the technologies, languages, and tools I use with transparent proficiency labels.",
      categoryAll: "All Skills",
      categoryFrontend: "Frontend",
      categoryProgramming: "Programming",
      categoryProductivity: "Productivity",
      proficiencyNotice: "Skills are presented transparently without manufactured percentage ratings or unverified credentials.",
      proficiencyCurrentFocus: "Current Focus",
      proficiencyWorkingKnowledge: "Working Knowledge",
      proficiencyLearning: "Learning & Improving",
      keyTopicsTitle: "Core Areas",
    },
    projects: {
      badge: "Real Systems & Applications",
      title: "Featured Projects & Systems",
      subtitle: "Production-ready enterprise software, movie streaming web apps, and modern frontend concepts built with clean architecture.",
      emptyTitle: "Projects are being prepared",
      emptyMessage: "New verified projects are currently in development and will appear here shortly. Stay tuned!",
      filterAll: "All Projects",
      filterFrontend: "Frontend Apps",
      filterConcept: "Concepts",
      filterTools: "Tools",
      viewDetails: "View Case Study & Gallery",
      closeDetails: "Close Details",
      problemSolved: "Problem Being Solved",
      keyFeatures: "Key Architectural Features",
      techStack: "Technologies Used",
      architectureTitle: "Technical Implementation Notes",
      liveDemo: "Live Preview",
      sourceCode: "View Code",
      conceptNote: "Featuring commercial production systems (POS & Inventory), video streaming platforms, and architectural concepts.",
      modalReturn: "Back to all projects",
      galleryTitle: "Interface Showcase & Screenshots",
      screenshotsCount: "Screenshots",
      previousImage: "Previous Screen",
      nextImage: "Next Screen",
    },
    architecture: {
      badge: "System Architecture & Design",
      title: "How I Engineer Software Systems",
      subtitle: "Real architectural explanations, trade-off analysis, and data flows from mission-critical retail POS and media streaming applications.",
      decisionsTitle: "Key Engineering Decisions & Trade-Offs",
      dataFlowTitle: "End-to-End Execution Flow",
      securityTitle: "Reliability & Security Boundaries",
      rationaleLabel: "Why This Was Chosen",
      tradeOffLabel: "Engineering Trade-Off",
      alternativesLabel: "Alternatives Considered",
    },
    codeLab: {
      badge: "Interactive Code Laboratory",
      title: "Explore Production Code Snippets",
      subtitle: "Real-world TypeScript types, React state hooks, ESC/POS receipt generation, and Python barcode algorithms with contextual trade-offs.",
      copyCode: "Copy Snippet",
      copiedCode: "Copied to Clipboard!",
      problemTitle: "Problem Solved",
      tradeOffsTitle: "Engineering Insights & Trade-Offs",
      filterAll: "All Snippets",
    },
    principles: {
      badge: "Engineering Philosophy",
      title: "Core Principles Guiding My Work",
      subtitle: "Practical, transparent values centered on type safety, offline durability, user ergonomics, and disciplined daily craft.",
      applicationLabel: "Applied In Practice",
      filterAll: "All Principles",
    },
    journal: {
      badge: "Technical Journal & Notes",
      title: "Engineering Articles & Deep Dives",
      subtitle: "Transparent technical writing examining offline-first architectures, RTL typography challenges, and frontend asset budgeting.",
      readArticle: "Read Article",
      readTime: "min read",
      keyTakeaway: "Key Engineering Takeaway",
      backToJournal: "Back to all articles",
    },
    evidence: {
      badge: "Verifiable Standards & QA",
      title: "Demonstrating Engineering Rigor",
      subtitle: "Transparent metrics, hardware verifications, and compile-time proofs without fabricated stars or imaginary stats.",
      verifiedStatus: "Verified",
      methodLabel: "Verification Method",
    },
    commandPalette: {
      placeholder: "Type a command or search sections, projects, code...",
      noResults: "No matching results found.",
      navigationGroup: "Navigation",
      projectsGroup: "Projects & Case Studies",
      actionsGroup: "Quick Actions",
      closeHint: "Esc to close",
      selectHint: "↵ to select",
      navigateHint: "↑↓ to navigate",
    },
    experience: {
      badge: "Approach & Principles",
      title: "How I Learn & Build",
      subtitle: "The engineering principles, problem-solving mindset, and daily work discipline that shape my projects.",
      approachTitle: "Engineering Philosophy",
      approachSubtitle: "Core principles guiding every line of code and interface decision.",
      learningTitle: "Growth Timeline",
      learningSubtitle: "A transparent account of my progression in software development.",
      futureTitle: "Looking Ahead",
      futureSubtitle: "Ready for team collaboration and professional challenges",
      futureDescription: "I am actively seeking opportunities to contribute to dynamic software teams where I can solve real problems, learn from seasoned engineers, and build impactful digital products.",
      futureBadge: "Career Readiness",
    },
    contact: {
      badge: "Get In Touch",
      title: "Let's Connect",
      subtitle: "Whether you have an inquiry, feedback, or a potential opportunity, I would be delighted to hear from you.",
      directTitle: "Direct Channels",
      directSubtitle: "Reach out directly via phone or email for prompt replies.",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      locationLabel: "Location",
      copyEmail: "Copy Email",
      copiedEmail: "Email Copied to Clipboard!",
      formTitle: "Send a Message",
      formSubtitle: "Fill out the fields below to reach me directly.",
      nameLabel: "Your Name",
      namePlaceholder: "Azhan Hamza Jaf",
      emailInputLabel: "Your Email Address",
      emailPlaceholder: "you@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Project inquiry or opportunity",
      messageLabel: "Message Content",
      messagePlaceholder: "Write your message here...",
      submitButton: "Send Message",
      submittingButton: "Sending...",
      successMessage: "Thank you! Your message has been prepared.",
      errorMessage: "An error occurred. Please reach out directly via email or phone.",
      validationErrors: {
        nameRequired: "Please enter your name.",
        emailInvalid: "Please enter a valid email address.",
        subjectRequired: "Please enter a subject.",
        messageShort: "Message should be at least 10 characters long.",
      },
      fallbackNotice: "No backend service needed: clicking submit prepares your email draft directly.",
      openEmailClient: "Open in Mail Client",
    },
    footer: {
      tagline: "Software Engineer & Full-Stack Systems Developer • Production-grade architecture with Next.js & TypeScript",
      quickLinks: "Quick Navigation",
      contacts: "Contact Channels",
      backToTop: "Return to Top",
      copyright: "Azhan Hamza Jaf. All rights reserved.",
      techStackNote: "Engineered with Next.js App Router, React 19, Strict TypeScript & Tailwind CSS.",
    },
  },
  ku: {
    nav: {
      home: "سەرەتا",
      about: "دەربارەی من",
      skills: "لێهاتووییەکان",
      projects: "پڕۆژەکان",
      architecture: "تەلارسازی",
      codeLab: "تاقیگەی کۆد",
      principles: "بنەماکان",
      journal: "نووسینەکان",
      evidence: "بەڵگەنامە و پشکنین",
      experience: "گەشتی فێربوون",
      contact: "پەیوەندی",
      switchLang: "English",
      switchTheme: "گۆڕینی ڕەنگ",
      toggleMenu: "کردنەوەی مێنیو",
      closeMenu: "داخستنی مێنیو",
      contactCta: "پەیوەندیم پێوە بکە",
      commandPalette: "پەڕەی فەرمانەکان (Ctrl+K)",
    },
    hero: {
      greeting: "سڵاو، من",
      role: "ئەندازیاری نەرمەکاڵا و تەلارسازی سیستەمی وێب",
      headline: "تەلارسازی پلاتفۆرمی میدیا، سیستەمی بازرگانی و کارگێڕیی پێشکەوتوو، و ئەپڵیکەیشنی وێبی ئاست-بەرز.",
      bio: "من ئاژان هەمزە جاف (ناسراو بە جاف)، ئەندازیاری نەرمەکاڵا و پەرەپێدەری فرە-لێهاتووی فول-ستاکم. خاوەنی ئەزموونی دەوڵەمەند لە دروستکردنی پلاتفۆرمی ستریمینگی فیلم و میدیا، سیستەمی گەورەی کارگێڕیی و ژمێریاری (POS/ERP)، وێبی مۆدێرن بە تایپسکریپت و ڕیاکت، و بەرنامەسازیی لۆژیکی پایسۆن بە ستانداردی جیهانی.",
      ctaProjects: "پڕۆژەکانم ببینە",
      ctaContact: "پەیوەندیم پێوە بکە",
      ctaDownloadCv: "داگرتنی سیڤی",
      statusAvailable: "ئامادەم بۆ هەلی کاری گونجاو",
      statusLearning: "بەردەوامم لە فێربوون و بەرزکردنەوەی ئاستم",
      yearsActive: "کۆدنوسین لە ٢٠٢٣ـەوە",
      focusArea: "نێکست جەی ئێس، ڕیاکت ١٩، تایپسکریپت، پایسۆن و تەلارسازی سیستەم",
      terminalTitle: "developer-environment.ts",
      terminalTabProfile: "Profile.ts",
      terminalTabStack: "Stack.json",
      terminalTabStatus: "Status.sh",
      terminalTabCli: "تێرمیناڵی کارلێککەر",
      terminalCopy: "کۆپیکردنی زانیاری",
      terminalCopied: "کۆپی کرا!",
    },
    about: {
      badge: "چیرۆکی ڕاستەقینە و پاشخان",
      title: "ڕێگایەکی ڕاستەقینە، پاڵنراو بە خولیای کار",
      subtitle: "تێڕوانینێکی ڕوون بۆ گەشتەکەم لە پرۆگرامسازی، بەها کەسییەکانم و شێوازی کارکردنی پراکتیکی لە بواری تەکنەلۆژیادا.",
      timelineTitle: "گەشتی فێربوون و پێشکەوتن",
      timelineSubtitle: "قۆناغە گرنگەکانی گۆڕینی خولیا بۆ کارکردن و نووسینی کۆدی ڕۆژانە.",
      cardValuesTitle: "بنەماکانی کارکردنم",
      statsInterest: "٢٠٢١",
      statsCoding: "٢٠٢٣",
      statsToday: "ئێستا",
      statInterestLabel: "سەرەتای خولیا",
      statCodingLabel: "دەستپێکردنی کۆدنوسین",
      statTodayLabel: "پێشکەوتنی بەردەوام",
    },
    skills: {
      badge: "بنەمای تەکنیکی",
      title: "لێهاتوویی و ئامرازەکان",
      subtitle: "پۆلێنبەندیی ئەو تەکنەلۆژیا و زمان و ئامرازانەی ڕۆژانە بەکاریاندەهێنم، بە نمرەدانانی ڕاستەقینە و بێ دەستکاریکردن.",
      categoryAll: "هەموو لێهاتووییەکان",
      categoryFrontend: "فرۆنتێند",
      categoryProgramming: "بەرنامەسازی",
      categoryProductivity: "بەرهەمهێنان",
      proficiencyNotice: "لێهاتووییەکان بە شێوازێکی ڕاستەقینە خراونەتەڕوو بەبێ ڕێژەی لەسەدی دروستکراو یان بڕوانامەی ناڕاست.",
      proficiencyCurrentFocus: "سەرنجی ئێستا",
      proficiencyWorkingKnowledge: "زانیاریی کرداری",
      proficiencyLearning: "لە فێربوون و پێشکەوتندا",
      keyTopicsTitle: "تەوەرە سەرەکییەکان",
    },
    projects: {
      badge: "پڕۆژە و سیستەمە کردارییەکان",
      title: "پڕۆژە دیارەکان و سیستەمەکان",
      subtitle: "سیستەمی بازرگانی بەرهەمهێندراو، پلاتفۆرمی ستریمینگی فیلم، و بەرنامەی پێشکەوتووی وێب بە تەلارسازیی خاوێن.",
      emptyTitle: "پڕۆژەکان لە ئامادەکردندان",
      emptyMessage: "پڕۆژەی نوێی کرداری لە ژێر کارپێکردندان و بەم زووانە لێرەدا دەردەکەون. چاوەڕوان بن!",
      filterAll: "هەموو پڕۆژەکان",
      filterFrontend: "ئەپی فرۆنتێند",
      filterConcept: "بیرۆکەی دیزاین",
      filterTools: "ئامرازەکان",
      viewDetails: "بینینی کەیس ستەدی و گالەری",
      closeDetails: "داخستنی وردەکاری",
      problemSolved: "ئەو کێشەیەی چارەسەری دەکات",
      keyFeatures: "تایبەتمەندییە سەرەکییەکان",
      techStack: "تەکنەلۆژیا بەکارهاتووەکان",
      architectureTitle: "تێبینییە تەکنیکی و تەلارسازییەکان",
      liveDemo: "پێشبینینی ڕاستەوخۆ",
      sourceCode: "کۆدی سەرچاوە",
      conceptNote: "لەخۆگری سیستەمی بازرگانی بەرهەمهێندراو (کاشێر و کۆگا)، پلاتفۆرمی ستریمینگی سینەمایی و چەمکە تەکنیکییەکان.",
      modalReturn: "گەڕانەوە بۆ هەموو پڕۆژەکان",
      galleryTitle: "دیمەنەکانی سیستەم و گالەری وێنەکان",
      screenshotsCount: "دیمەن",
      previousImage: "دیمەنی پێشوو",
      nextImage: "دیمەنی دواتر",
    },
    architecture: {
      badge: "تەلارسازی و دیزاینی سیستەم",
      title: "چۆن تەلارسازیی نەرمەکاڵا دەکەم",
      subtitle: "شیکاریی تەلارسازیی ڕاستەقینە، لێکۆڵینەوەی قازانج و زیان و هێڵی جوڵەی داتا لە سیستەمە بازرگانییەکاندا.",
      decisionsTitle: "بڕیارە ئەندازیارییەکان و لێکۆڵینەوەی تایبەتمەندییەکان",
      dataFlowTitle: "هێڵی جێبەجێکردنی قۆناغ بە قۆناغ",
      securityTitle: "سەلامەتی و پاراستنی داتا",
      rationaleLabel: "بۆچی ئەمە هەڵبژێردرا",
      tradeOffLabel: "قازانج و لایەنی ئاڵۆزی",
      alternativesLabel: "ئەو شێوازانەی تر کە تاقیکرانەوە",
    },
    codeLab: {
      badge: "تاقیگەی کارلێککەری کۆد",
      title: "پشکنینی پارچە کۆدە ڕاستەقینەکان",
      subtitle: "کۆدی ڕاستەقینەی تایپسکریپت، هووکی ڕیاکت بۆ ئۆفلاین، چاپی وەسڵ، و ئەلگۆریتمی پایسۆن بە شیکاریی کرداری.",
      copyCode: "کۆپیکردنی کۆد",
      copiedCode: "کۆپی کرا!",
      problemTitle: "ئەو کێشەیەی چارەسەری دەکات",
      tradeOffsTitle: "تێبینییە ئەندازیارییەکان",
      filterAll: "هەموو کۆدەکان",
    },
    principles: {
      badge: "فەلسەفەی ئەندازیاری",
      title: "ئەو بنەمایانەی ڕێبەریم دەکەن لە نووسینی کۆددا",
      subtitle: "بەها کردارییەکان بە سەرنجدان لەسەر سەلامەتیی کۆد، خۆڕاگری لە کاتی نەمانی هێڵ، ئاسانکاری بۆ بەکارهێنەر و فێربوونی بەردەوام.",
      applicationLabel: "جێبەجێکردنی کرداری",
      filterAll: "هەموو بنەماکان",
    },
    journal: {
      badge: "نووسین و تێبینییە تەکنیکییەکان",
      title: "وتار و لێکۆڵینەوە ئەندازیارییەکان",
      subtitle: "نووسینی تەکنیکی لەسەر چارەسەرکردنی کێشەی نەمانی ئینتەرنێت، فۆنتە کوردییەکان و بەرزکردنەوەی خێرایی وێب.",
      readArticle: "خوێندنەوەی وتار",
      readTime: "خولەک خوێندنەوە",
      keyTakeaway: "پوختەی ئەندازیاری",
      backToJournal: "گەڕانەوە بۆ وتارەکان",
    },
    evidence: {
      badge: "ستانداردە سەلمێنراوەکان و پشکنین",
      title: "بەڵگەی کوالێتی و شێوازی کارکردن",
      subtitle: "پشکنینی ڕاستەقینە، سەلماندنی چاپی ڕاستەقینە و پشکنینی خۆکار بەبێ دەستکاریکردن یان ژمارەی دروستکراو.",
      verifiedStatus: "پشکنراو",
      methodLabel: "شێوازی پشکنین",
    },
    commandPalette: {
      placeholder: "فەرمانێک بنووسە یان بگەڕێ لە پڕۆژە، کۆد، بەشەکان...",
      noResults: "هیچ ئەنجامێک نەدۆزرایەوە.",
      navigationGroup: "بەشەکانی ماڵپەڕ",
      projectsGroup: "پڕۆژەکان و کەیس ستەدی",
      actionsGroup: "کردارە خێراکان",
      closeHint: "Esc بۆ داخستن",
      selectHint: "↵ بۆ هەڵبژاردن",
      navigateHint: "↑↓ بۆ ڕۆیشتن",
    },
    experience: {
      badge: "شێواز و بنەماکانی کارکردن",
      title: "چۆن فێردەبم و دروست دەکەم",
      subtitle: "ئەو بنەما ئەندازیارییانە و شێوازی چارەسەرکردنی کێشەکان کە ڕێبەریم دەکەن لە کاتی نووسینی کۆد و دیزاینکردندا.",
      approachTitle: "فەلسەفەی ئەندازیاریی من",
      approachSubtitle: "ئەو یاسا بنەڕەتییانەی لە هەموو بەشێکی کۆددا ڕەچاویان دەکەم.",
      learningTitle: "هێڵی کاتیی فێربوون",
      learningSubtitle: "تۆمارێکی ڕاستگۆیانە لەسەر قۆناغەکانی پێشکەوتنم لە جیهانی نەرمەکاڵادا.",
      futureTitle: "ڕوانین بەرەو داهاتوو",
      futureSubtitle: "ئامادەم بۆ کارکردنی بەکۆمەڵ و ئاڵنگارییە پیشەییەکان",
      futureDescription: "بە تامەزرۆییەوە بەدوای هەلی کارکردندا دەگەڕێم لەگەڵ تیمە پێشکەوتووەکانی نەرمەکاڵا، کە بتوانم کێشە ڕاستەقینەکان چارەسەر بکەم، لە ئەندازیارە بەئەزموونەکانەوە فێربم و بەرهەمی کاریگەر دروست بکەم.",
      futureBadge: "ئامادەیی پیشەیی",
    },
    contact: {
      badge: "پەیوەندیم پێوە بکە",
      title: "با پێکەوە گفتوگۆ بکەین",
      subtitle: "ئەگەر پرسیارێک، ڕەخنەیەک یان دەرفەتێکی کارکردنت پێیە، بە دڵخۆشییەوە پێشوازی لە نامەکەت دەکەم.",
      directTitle: "کەناڵە ڕاستەوخۆکان",
      directSubtitle: "دەتوانیت ڕاستەوخۆ لە ڕێگەی تەلەفۆن یان ئیمەیڵەوە پەیوەندیم پێوە بکەیت.",
      emailLabel: "ناونیشانی ئیمەیڵ",
      phoneLabel: "ژمارەی مۆبایل",
      locationLabel: "شوێن",
      copyEmail: "کۆپیکردنی ئیمەیڵ",
      copiedEmail: "ئیمەیڵ کۆپی کرا بۆ کلیپبۆرد!",
      formTitle: "ناردنی پەیام",
      formSubtitle: "خانەکانی خوارەوە پڕبکەرەوە بۆ ناردنی پەیامێکی ڕاستەوخۆ.",
      nameLabel: "ناوی بەڕێزت",
      namePlaceholder: "ئاژان هەمزە جاف",
      emailInputLabel: "ئیمەیڵی بەڕێزت",
      emailPlaceholder: "you@example.com",
      subjectLabel: "بابەت",
      subjectPlaceholder: "پرسیار دەربارەی پڕۆژە یان هەلی کار",
      messageLabel: "ناوەڕۆکی پەیام",
      messagePlaceholder: "پەیامەکەت لێرە بنووسە...",
      submitButton: "ناردنی پەیام",
      submittingButton: "لە ناردندایە...",
      successMessage: "سوپاس! پەیامەکەت ئامادەکرا.",
      errorMessage: "هەڵەیەک ڕوویدا، تکایە ڕاستەوخۆ پەیوەندی بە ئیمەیڵ یان تەلەفۆن بکە.",
      validationErrors: {
        nameRequired: "تکایە ناوت بنووسە.",
        emailInvalid: "تکایە ئیمەیڵێکی دروست بنووسە.",
        subjectRequired: "تکایە بابەتی پەیامەکە بنووسە.",
        messageShort: "پەیامەکە پێویستە لانیکەم لە ١٠ پیت پێکبێت.",
      },
      fallbackNotice: "پێویست بە داتابەیس ناکات: کلیک لەسەر ناردن ڕاستەوخۆ ڕەشنووسی ئیمەیڵەکەت ئامادە دەکات.",
      openEmailClient: "کردنەوە لە بەرنامەی ئیمەیڵ",
    },
    footer: {
      tagline: "ئەندازیاری نەرمەکاڵا و پەرەپێدەری سیستەم • بونیاتنراو بە Next.js و TypeScript بە بەرزترین ستاندارد",
      quickLinks: "ڕێبەری خێرا",
      contacts: "کەناڵەکانی پەیوەندی",
      backToTop: "گەڕانەوە بۆ سەرەوە",
      copyright: "ئاژان هەمزە جاف. هەموو مافەکان پارێزراون.",
      techStackNote: "داڕێژراو بە Next.js App Router، ڕیاکت ١٩، تایپسکریپتی توندوتۆڵ و Tailwind CSS.",
    },
  },
};
