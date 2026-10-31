"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Clock,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { journalArticlesData, JournalArticle } from "@/data/journal";
import { Modal } from "@/components/ui/Modal";

export function Journal() {
  const { t, language, direction } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  const categories = [
    { id: "all", label: { en: "All Articles", ku: "هەموو وتارەکان" } },
    { id: "architecture", label: { en: "Architecture", ku: "تەلارسازی" } },
    { id: "frontend", label: { en: "Frontend & RTL", ku: "فرۆنتێند و RTL" } },
    { id: "performance", label: { en: "Performance", ku: "خێرایی وێب" } },
  ];

  const filteredArticles = journalArticlesData.filter((art) => {
    if (activeFilter === "all") return true;
    return art.category === activeFilter;
  });

  return (
    <section id="journal" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background Lighting */}
      <div
        className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-blue-400 border border-blue-500/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.journal.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.journal.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.journal.subtitle}
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
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 border border-blue-400/40"
                  : "glass-card text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="p-6 rounded-2xl glass-card bg-slate-950/60 border border-white/10 hover:border-blue-500/40 transition-all cursor-pointer flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30">
                    {article.categoryLabel[language]}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {article.readTimeMinutes} {t.journal.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                  {article.title[language]}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {article.summary[language]}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                <span>{t.journal.readArticle}</span>
                <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Reading Article Modal */}
        <Modal
          isOpen={selectedArticle !== null}
          onClose={() => setSelectedArticle(null)}
          title={selectedArticle ? selectedArticle.title[language] : ""}
          maxWidth="max-w-4xl"
        >
          {selectedArticle && (
            <div className="space-y-6 text-slate-300 text-sm sm:text-base">
              {/* Meta header */}
              <div className="flex flex-wrap items-center gap-3 pb-3 border-b border-white/10 text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                  {selectedArticle.categoryLabel[language]}
                </span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {selectedArticle.readTimeMinutes} {t.journal.readTime}
                </span>
                <span>• {selectedArticle.publishedDate}</span>
              </div>

              {/* Introduction */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-white/10 leading-relaxed text-slate-200">
                {selectedArticle.content[language].introduction}
              </div>

              {/* Body Sections */}
              <div className="space-y-6">
                {selectedArticle.content[language].sections.map(
                  (sec: { heading: string; body: string; codeSnippet?: string }, idx: number) => (
                    <div key={idx} className="space-y-3">
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {sec.heading}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {sec.body}
                    </p>

                    {sec.codeSnippet && (
                      <div className="p-4 rounded-xl bg-slate-950 border border-white/10 overflow-x-auto font-mono text-xs text-slate-200">
                        <pre>
                          <code>{sec.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Takeaway Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-950/40 border border-blue-500/30 space-y-1.5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{t.journal.keyTakeaway}</span>
                </h5>
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  {selectedArticle.content[language].keyTakeaway}
                </p>
              </div>

              {/* Close / Return Button */}
              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium glass-card text-slate-300 hover:text-white border border-white/10"
                >
                  {t.journal.backToJournal}
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
