"use client";

import React, { useState } from "react";
import {
  Code2,
  Copy,
  Check,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { codeExamplesData } from "@/data/codeLab";

export function CodeLab() {
  const { t, language } = useLanguage();
  const [selectedExampleId, setSelectedExampleId] = useState(codeExamplesData[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: { en: "All Snippets", ku: "هەموو کۆدەکان" } },
    { id: "react", label: { en: "React Hooks", ku: "هووکی ڕیاکت" } },
    { id: "hardware", label: { en: "ESC/POS Printing", ku: "چاپی گەرمی" } },
    { id: "typescript", label: { en: "TypeScript Types", ku: "تایپسکریپت" } },
    { id: "python", label: { en: "Python Logic", ku: "پایسۆن" } },
  ];

  const filteredExamples = codeExamplesData.filter((ex) => {
    if (activeCategory === "all") return true;
    return ex.category === activeCategory;
  });

  const activeExample =
    codeExamplesData.find((ex) => ex.id === selectedExampleId) || codeExamplesData[0];

  const handleCopy = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section id="lab" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-emerald-400 border border-emerald-500/30">
            <Code2 className="w-3.5 h-3.5" />
            <span>{t.codeLab.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.codeLab.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.codeLab.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/25 border border-emerald-400/40"
                  : "glass-card text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Main Code Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Snippet Selector List */}
          <div className="lg:col-span-4 space-y-3">
            {filteredExamples.map((item) => {
              const isSelected = item.id === activeExample.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedExampleId(item.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border block ${
                    isSelected
                      ? "glass-panel bg-slate-900/90 border-emerald-500/50 shadow-lg shadow-emerald-950/40"
                      : "glass-card bg-slate-950/50 border-white/10 hover:border-white/25"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-emerald-300 border border-white/10">
                      {item.filename}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {item.language}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-white line-clamp-1">
                    {item.title[language]}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {item.problemSolved[language]}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Code Editor & Explanation Container */}
          <div className="lg:col-span-8 space-y-6">
            {/* Code Box */}
            <div className="rounded-2xl glass-panel bg-slate-950/95 border border-white/15 shadow-2xl overflow-hidden font-mono">
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ms-2 text-xs font-sans text-slate-300 font-medium">
                    {activeExample.filename}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(activeExample.code, activeExample.id)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-sans bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors"
                >
                  {copiedId === activeExample.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.codeLab.copiedCode}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.codeLab.copyCode}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Pre container */}
              <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-[13px] leading-relaxed text-slate-200 max-h-[420px] select-text">
                <pre>
                  <code>{activeExample.code}</code>
                </pre>
              </div>

              {/* Footer Bar */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-white/5 flex items-center justify-between text-[11px] font-sans text-slate-500">
                <span>Production Implementation Sample</span>
                <span className="font-mono text-emerald-400">Validated Logic</span>
              </div>
            </div>

            {/* Explanation & Trade-Offs Detail */}
            <div className="p-6 rounded-2xl glass-card bg-slate-950/60 border border-white/10 space-y-4">
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  <span>{t.codeLab.problemTitle}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeExample.problemSolved[language]}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t.codeLab.tradeOffsTitle}
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeExample.tradeOffs[language].map((to, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0">•</span>
                      <span>{to}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
