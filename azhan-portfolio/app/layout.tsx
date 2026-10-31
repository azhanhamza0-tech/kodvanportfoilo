import type { Metadata, Viewport } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azhan Hamza Jaf | Software Engineer & Systems Architect",
  description:
    "Professional engineering portfolio of Azhan Hamza Jaf (ئاژان هەمزە جاف), a software engineer specializing in offline-first POS engines, resilient client-side state machines, and modern Next.js platforms.",
  keywords: [
    "Azhan Hamza Jaf",
    "ئاژان هەمزە جاف",
    "Azhan Hamza",
    "Azhan",
    "Jaf",
    "Software Engineer",
    "Full-Stack Developer",
    "Offline POS Architecture",
    "React 19",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Kurdistan",
  ],
  authors: [{ name: "Azhan Hamza Jaf", url: "https://github.com/azhan-hamza" }],
  creator: "Azhan Hamza Jaf",
  openGraph: {
    title: "Azhan Hamza Jaf | Software Engineer & Systems Architect",
    description:
      "Architecting resilient offline-first POS engines, dynamic streaming web platforms, and modern TypeScript systems.",
    url: "https://azhanhamza.dev",
    siteName: "Azhan Hamza Jaf Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${vazirmatn.variable} min-h-screen antialiased selection:bg-indigo-500/30 selection:text-indigo-200 relative`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
