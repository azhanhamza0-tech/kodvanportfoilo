"use client";

import React, { useState } from "react";
import {
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { engineeringPrinciplesData } from "@/data/principles";

export function Principles() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: { en: "All Principles", ku: "هەموو بنەماکان" } },
    { id: "quality", label: { en: "Code Quality & Types", ku: "کوالێتی کۆد و تایپ" } },
    { id: "architecture", label: { en: "Architecture & Offline", ku: "تەلارسازی و ئۆفلاین" } },
    { id: "ux", label: { en: "Ergonomics & RTL", ku: "ئاسانکاری و RTL" } },
    { id: "growth", label: { en: "Testing & Growth", ku: "تاقیکردنەوە و پێشکەوتن" } },
  ];

  const filteredPrinciples = engineeringPrinciplesData.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <section id="principles" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Glow Orb */}
      <div
        className="absolute top-1/2 right-1/3 w-[450px] h-[450px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-amber-400 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.principles.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.principles.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.principles.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-600/25 border border-amber-400/40"
                  : "glass-card text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrinciples.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl glass-card bg-slate-950/60 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-md text-[10px] font-semibold tracking-wider uppercase ${
                      item.status === "established"
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                        : "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                    }`}
                  >
                    {item.statusLabel[language]}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {item.title[language]}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  {item.summary[language]}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.details[language]}
                </p>
              </div>

              {/* Real World Application Box */}
              <div className="pt-3 border-t border-white/5 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                  {t.principles.applicationLabel}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {item.realWorldApplication[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
