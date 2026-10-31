"use client";

import React, { useState } from "react";
import {
  Cpu,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Zap,
  WifiOff,
  Film,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { architectureData } from "@/data/architecture";

export function Architecture() {
  const { t, language, direction } = useLanguage();
  const [selectedSystemId, setSelectedSystemId] = useState(architectureData[0].id);

  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  const activeSystem =
    architectureData.find((sys) => sys.id === selectedSystemId) || architectureData[0];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background Accent Orb */}
      <div
        className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-cyan-400 border border-cyan-500/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.architecture.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.architecture.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.architecture.subtitle}
          </p>
        </div>

        {/* System Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {architectureData.map((sys) => {
            const isSelected = sys.id === selectedSystemId;
            return (
              <button
                key={sys.id}
                type="button"
                onClick={() => setSelectedSystemId(sys.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/25 border border-cyan-400/40"
                    : "glass-card text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {sys.id.includes("pos") ? (
                  <WifiOff className="w-4 h-4 text-cyan-300" />
                ) : (
                  <Film className="w-4 h-4 text-blue-300" />
                )}
                <span>{sys.title[language]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Architecture System Showcase */}
        <div className="space-y-10">
          {/* System Overview Card */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel bg-slate-950/80 border border-white/10 shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                  {activeSystem.systemType[language]}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {activeSystem.title[language]}
                </h3>
              </div>
              <div className="px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-xs font-medium text-cyan-300">
                Production Architecture
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {activeSystem.overview[language]}
            </p>

            {/* Interactive Data Flow Pipeline */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>{t.architecture.dataFlowTitle}</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeSystem.dataFlowSteps.map((step, idx) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-2xl glass-card bg-slate-900/60 border border-white/10 relative flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold font-mono flex items-center justify-center">
                          {step.step}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                          {step.layer}
                        </span>
                      </div>
                      <h5 className="font-semibold text-sm text-slate-100">
                        {step.title[language]}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.description[language]}
                      </p>
                    </div>

                    {idx < activeSystem.dataFlowSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                        <div className="p-1 rounded-full bg-slate-900 border border-white/15 text-slate-400">
                          <ArrowIcon className="w-3 h-3" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Decisions & Trade-Offs Grid */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>{t.architecture.decisionsTitle}</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeSystem.keyDecisions.map((decision, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/50 border border-white/10 space-y-3"
                  >
                    <h5 className="font-bold text-white text-sm sm:text-base text-cyan-200">
                      {decision.title[language]}
                    </h5>

                    {/* Rationale */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                        {t.architecture.rationaleLabel}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {decision.rationale[language]}
                      </p>
                    </div>

                    {/* Alternatives Considered */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        {t.architecture.alternativesLabel}
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed font-mono">
                        {decision.alternativesConsidered[language]}
                      </p>
                    </div>

                    {/* Trade-Off */}
                    <div className="space-y-1 pt-1 border-t border-white/5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                        {t.architecture.tradeOffLabel}
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {decision.tradeOff[language]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reliability & Security Boundaries */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-white/10 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t.architecture.securityTitle}</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                {activeSystem.securityAndReliability.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item[language]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
