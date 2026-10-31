"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  Code2,
  Target,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { profileData } from "@/data/profile";
import { timelineMilestones } from "@/data/experience";

export function About() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Decorative background glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-indigo-400 border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Biography Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-indigo-400" />
                <span>{profileData.name[language]}</span>
                <span className="text-sm font-normal text-slate-400">
                  ({profileData.nickname})
                </span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {profileData.bioFull[language].map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Verified Core Engineering Competencies */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Offline POS & State Machines</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict TypeScript & React 19</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ESC/POS Hardware Spooling</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kurdish Sorani RTL Symmetry</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Authentic Timeline Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span>{t.about.timelineTitle}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {t.about.timelineSubtitle}
                </p>
              </div>

              {/* Timeline Items */}
              <div className="relative pl-6 sm:pl-8 border-l border-white/15 space-y-8 my-2">
                {timelineMilestones.map((milestone, idx) => (
                  <div key={milestone.year} className="relative group">
                    {/* Node Dot */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                        idx === 0
                          ? "bg-slate-900 border-indigo-400 group-hover:scale-125"
                          : idx === 1
                          ? "bg-slate-900 border-blue-400 group-hover:scale-125"
                          : "bg-slate-900 border-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)] group-hover:scale-125"
                      }`}
                    />

                    {/* Milestone Year Badge */}
                    <div className="inline-block px-2.5 py-0.5 mb-1.5 rounded-full text-xs font-mono font-bold bg-white/10 text-indigo-300 border border-white/10">
                      {milestone.year}
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {milestone.title[language]}
                    </h4>
                    <p className="text-xs text-indigo-400/90 font-medium mb-2">
                      {milestone.subtitle[language]}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {milestone.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {milestone.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/40 text-slate-400 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
