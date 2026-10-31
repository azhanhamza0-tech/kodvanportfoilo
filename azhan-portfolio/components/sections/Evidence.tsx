"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Printer,
  Globe,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { technicalEvidenceData, TechnicalEvidenceItem } from "@/data/evidence";

export function Evidence() {
  const { t, language } = useLanguage();

  const getCategoryIcon = (cat: TechnicalEvidenceItem["category"]) => {
    switch (cat) {
      case "type_safety":
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case "hardware":
        return <Printer className="w-5 h-5 text-emerald-400" />;
      case "accessibility":
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case "architecture":
        return <Zap className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="evidence" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-cyan-400 border border-cyan-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.evidence.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.evidence.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.evidence.subtitle}
          </p>
        </div>

        {/* Evidence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalEvidenceData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl glass-card bg-slate-950/60 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {item.category.replace("_", " ")}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.evidence.verifiedStatus}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {item.title[language]}
                </h3>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-xs font-mono font-semibold text-cyan-300">
                    {item.metricOrStandard[language]}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.details[language]}
                </p>
              </div>

              {/* Verification Method */}
              <div className="pt-3 border-t border-white/5 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  {t.evidence.methodLabel}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  {item.verificationMethod[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
