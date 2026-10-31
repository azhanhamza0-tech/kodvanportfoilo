"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  Search,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { profileData } from "@/data/profile";
import { CommandPalette } from "@/components/ui/CommandPalette";

export function Navbar() {
  const { t, language, toggleLanguage, direction } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "architecture", label: t.nav.architecture },
    { id: "lab", label: t.nav.codeLab },
    { id: "principles", label: t.nav.principles },
    { id: "journal", label: t.nav.journal },
    { id: "evidence", label: t.nav.evidence },
    { id: "contact", label: t.nav.contact },
  ];

  // Scrollspy & scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = [
        "home",
        "about",
        "skills",
        "projects",
        "architecture",
        "lab",
        "principles",
        "journal",
        "evidence",
        "contact",
      ];
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global Ctrl+K / Cmd+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-panel py-2.5 shadow-lg shadow-black/10 border-b border-white/[0.08]"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand / Logo */}
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3 group text-left shrink-0"
            aria-label="Azhan Hamza Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-violet-300 to-cyan-300 text-sm tracking-wider">
                  AH
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-100 text-sm sm:text-base tracking-tight group-hover:text-indigo-300 transition-colors">
                  {profileData.name[language]}
                </span>
                <span className="text-[10px] font-medium px-1.5 py-0.2 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {profileData.nickname}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                {profileData.profession[language]}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full glass-panel bg-slate-900/40 border border-white/10"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/30 to-indigo-600/30 border border-indigo-500/40 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Global Controls & CTA */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Command Palette Trigger */}
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium glass-card text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
              title={t.nav.commandPalette}
              aria-label={t.nav.commandPalette}
            >
              <Search className="w-3.5 h-3.5 text-indigo-400" />
              <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded bg-black/40 text-[10px] font-mono border border-white/10 text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Language Toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium glass-card text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
              title={language === "en" ? "گۆڕین بۆ کوردی" : "Switch to English"}
              aria-label={language === "en" ? "گۆڕین بۆ کوردی" : "Switch to English"}
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>{t.nav.switchLang}</span>
            </button>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-300 hover:text-white glass-card hover:border-indigo-500/40 transition-colors"
              title={t.nav.switchTheme}
              aria-label={t.nav.switchTheme}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>

            {/* Contact CTA */}
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md shadow-violet-600/25 transition-all hover:shadow-violet-600/40 active:scale-95"
            >
              <span>{t.nav.contactCta}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Quick Controls */}
          <div className="flex xl:hidden items-center gap-2">
            {/* Mobile Search Button */}
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              className="p-2 rounded-lg glass-card text-slate-300"
              aria-label={t.nav.commandPalette}
            >
              <Search className="w-4 h-4 text-indigo-400" />
            </button>

            {/* Mobile Language Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="p-2 rounded-lg glass-card text-slate-300"
              aria-label={t.nav.switchLang}
            >
              <Globe className="w-4 h-4 text-indigo-400" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg glass-card text-slate-300 hover:text-white"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.toggleMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="xl:hidden glass-panel bg-slate-950/95 border-b border-white/10 px-5 pt-3 pb-6 mt-3 space-y-4 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollTo(item.id)}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg text-xs sm:text-sm font-medium transition-colors text-left ${
                        isActive
                          ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
                          : "text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg glass-card text-xs font-medium text-slate-200"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-4 h-4 text-amber-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-indigo-400" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                >
                  <span>{t.nav.contactCta}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
}
