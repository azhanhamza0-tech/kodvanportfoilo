# Azhan Hamza (Jaf) — Personal Developer Portfolio

An elegant, production-quality personal portfolio website for **Azhan Hamza** (professionally known as **Azhan**, nickname **Jaf**). Built with **Next.js App Router (v16)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Featuring a sophisticated dark-mode-first aesthetic, first-class bilingual support for **Kurdish Sorani (کوردیی سۆرانی)** and **English**, and honest presentation of verified skills and concept projects.

---

## 🌟 Highlights & Features

- **Verified Personal Story**: Transparent journey highlighting interest sparked in **2021** and active daily coding since **2023**. No manufactured credentials or fake client claims.
- **Bilingual Localization (Kurdish Sorani & English)**:
  - Full Right-to-Left (RTL) layout support using `dir="rtl"` with Google's `Vazirmatn` font.
  - Full Left-to-Right (LTR) layout with modern geometric typography.
  - Persistent language selection saved across page reloads via `localStorage`.
- **Interactive Terminal / Code Editor Panel**:
  - Live tab switcher (`Profile.ts`, `Stack.json`, `Status.sh`).
  - One-click "Copy Info" button with accessible visual confirmation.
- **Categorized Technical Skills**:
  - **Frontend**: HTML, CSS, JavaScript, TypeScript, React, TSX
  - **Additional Programming**: Python
  - **Productivity**: Microsoft Word, Microsoft Excel, Microsoft PowerPoint
  - Honest proficiency labels: *"Current Focus"*, *"Working Knowledge"*, and *"Learning & Improving"*.
- **Featured Projects & Case Studies**:
  - Typed project catalog in `data/projects.ts` labeled as *"Practice Project"* or *"Concept Project"*.
  - Accessible modal dialogs detailing problem statements, technical architecture, and key features.
  - Automatic graceful empty-state when projects are being prepared (`projectsData = []`).
- **Validated Contact System**:
  - Direct links for email (`mailto:azhanako1999@gmail.com`) and telephone (`tel:07501151634`).
  - One-click copy email button with feedback.
  - Full contact form with client and server-side validation (`/api/contact`), honeypot spam protection, and transparent mail client fallback.
- **Visual Design & Polish**:
  - Dark mode by default with smooth Light mode toggle.
  - Custom scrollbar, top scroll-progress indicator, desktop-only ambient cursor glow.
  - Fully responsive on all viewports without horizontal overflow.
  - Full compliance with `prefers-reduced-motion`.

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### 2. Installation
Open your terminal in the project directory:
```bash
cd C:\Users\pc\.gemini\antigravity-ide\scratch\azhan-portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### 4. Build for Production
To test TypeScript compilation and build the optimized static and server-rendered bundle:
```bash
npm run build
```

### 5. Start Production Server
```bash
npm run start
```

---

## 📁 Project Architecture

```
azhan-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Server-side validation & anti-spam honeypot
│   ├── globals.css               # Design tokens, RTL font rules, theme variables
│   ├── layout.tsx                # Fonts (Inter & Vazirmatn), SEO, Providers
│   ├── not-found.tsx             # Bilingual 404 error page
│   └── page.tsx                  # Single-page orchestration
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Navigation, language & theme toggles, mobile drawer
│   │   └── Footer.tsx            # Quick links, contacts, copyright, back-to-top
│   ├── sections/
│   │   ├── Hero.tsx              # Headline, bio, CTAs, interactive Terminal panel
│   │   ├── About.tsx             # Real story, 2021->2023->Today visual timeline
│   │   ├── Skills.tsx            # Categorized skills with honest proficiency badges
│   │   ├── Projects.tsx          # Filterable cards, case study modal dialog
│   │   ├── Experience.tsx        # 6 Work principles & career readiness slot
│   │   └── Contact.tsx           # Contact cards, copy email, validated form
│   └── ui/
│       ├── CursorGlow.tsx        # Subtle ambient light cursor follower
│       ├── Icons.tsx             # Custom SVG brand icons (GitHub, etc.)
│       ├── Modal.tsx             # Accessible animated modal component
│       ├── ScrollProgress.tsx    # Glowing top scrollbar
│       └── TerminalPanel.tsx     # Stylized code editor with tabs & copy
├── context/
│   ├── LanguageContext.tsx       # Bilingual state ('ku' | 'en'), RTL/LTR, localStorage
│   └── ThemeContext.tsx          # Theme state ('dark' | 'light'), localStorage
├── data/
│   ├── profile.ts                # Personal info, contact details, config flags
│   ├── skills.ts                 # Categorized skills data with honest labels
│   ├── projects.ts               # Project items, case study data, category filters
│   ├── experience.ts             # Work principles and timeline milestones
│   └── translations.ts           # Complete bilingual translation dictionaries
└── public/
    ├── favicon.svg               # Modern vector monogram favicon
    └── projects/                 # SVG project visual mockups (DevFlow, Lexicon, etc.)
```

---

## ⚙️ Customization Guide

### Updating Personal Information
Edit [`data/profile.ts`](file:///C:/Users/pc/.gemini/antigravity-ide/scratch/azhan-portfolio/data/profile.ts):
- Update phone, email, or social links.
- Toggle `openToOpportunities: true` when actively seeking new positions.
- Place a PDF in `/public/Azhan_Hamza_CV.pdf` and set `hasCvFile: true` to automatically display the CV download button in the Hero section.

### Adding New Projects
Edit [`data/projects.ts`](file:///C:/Users/pc/.gemini/antigravity-ide/scratch/azhan-portfolio/data/projects.ts):
- Add project objects with `title`, `type`, `shortDescription`, `problemSolved`, `mainFeatures`, `technologies`, and case study notes.
- Set `projectsData = []` at any time to automatically display the stylish *"Projects are being prepared"* empty state.

### Adding or Updating Skills
Edit [`data/skills.ts`](file:///C:/Users/pc/.gemini/antigravity-ide/scratch/azhan-portfolio/data/skills.ts):
- Choose category: `"frontend"`, `"programming"`, or `"productivity"`.
- Assign honest proficiency: `"Current Focus"`, `"Working Knowledge"`, or `"Learning and Improving"`.

---

## 🔒 Security & Privacy

- **No Secrets Exposed**: All public code is strictly client-safe.
- **Server API Route**: Form submissions are validated server-side on `/api/contact` with honeypot fields to protect against automated spam bots.
- **No False Claims**: The contact form never creates fake "sent successfully" messages. If no third-party email service (e.g. Resend) is configured, it transparently prepares a pre-composed message in the user's default email client.

---

## 📄 License & Attribution

Designed and built specifically for **Azhan Hamza**. All rights reserved.
