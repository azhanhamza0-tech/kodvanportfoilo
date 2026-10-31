"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  Download,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { profileData } from "@/data/profile";
import { TerminalPanel } from "@/components/ui/TerminalPanel";

export function Hero() {
  const { t, language, direction } = useLanguage();
  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const techBadges = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "TSX",
    "Python",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Lighting Gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-violet-600/15 via-indigo-500/15 to-cyan-400/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            {/* Status / Role Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs sm:text-sm font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {profileData.config.openToOpportunities
                  ? t.hero.statusAvailable
                  : t.hero.role}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-indigo-400 font-semibold">
                {profileData.nickname}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold tracking-wide text-indigo-400">
                {t.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                {profileData.name[language]}
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 gradient-text-primary">
                  {t.hero.headline}
                </span>
              </h1>
            </div>

            {/* Engaging Biography */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {t.hero.bio}
            </p>

            {/* Quick Tech Summary Pills */}
            <div className="space-y-2 pt-1">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                {t.hero.focusArea}
              </span>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900/80 text-slate-300 border border-white/10 hover:border-indigo-500/40 transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white shadow-lg shadow-indigo-600/25 transition-all hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm glass-card text-slate-200 hover:text-white border border-white/10 hover:border-indigo-500/40 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{t.hero.ctaContact}</span>
              </button>

              {/* Optional CV Download Button (conditional on profile config) */}
              {profileData.config.hasCvFile && (
                <a
                  href={`/${profileData.config.cvFileName}`}
                  download
                  className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm glass-card text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all"
                  aria-label={t.hero.ctaDownloadCv}
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>{t.hero.ctaDownloadCv}</span>
                </a>
              )}
            </div>

            {/* Engineering Performance Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 max-w-2xl">
              {profileData.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="block text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-indigo-300 to-cyan-300 font-mono">
                    {metric.value}
                  </span>
                  <span className="block text-xs font-medium text-slate-300 leading-tight">
                    {metric.label[language]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Stylized Interactive Terminal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Outer decorative glow ring */}
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600/30 via-indigo-600/20 to-cyan-500/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"
                aria-hidden="true"
              />
              <TerminalPanel />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
