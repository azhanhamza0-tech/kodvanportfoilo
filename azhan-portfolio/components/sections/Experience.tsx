"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Hammer,
  Smartphone,
  Code,
  Eye,
  Cpu,
  Briefcase,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { workPrinciples } from "@/data/experience";

export function Experience() {
  const { t, language } = useLanguage();

  const getPrincipleIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-indigo-400" />;
      case "Hammer":
        return <Hammer className="w-5 h-5 text-amber-400" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case "Code":
        return <Code className="w-5 h-5 text-violet-400" />;
      case "Eye":
        return <Eye className="w-5 h-5 text-pink-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-blue-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Glow */}
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-blue-400 border border-blue-500/30">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.experience.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.experience.subtitle}
          </p>
        </div>

        {/* 6 Engineering Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {workPrinciples.map((principle, index) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 group hover:border-indigo-500/40"
            >
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 w-fit group-hover:scale-110 transition-transform">
                {getPrincipleIcon(principle.iconName)}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {principle.title[language]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {principle.description[language]}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Career Readiness & Future Opportunity Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.experience.futureBadge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.experience.futureSubtitle}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.experience.futureDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Responsive Web Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Type-Safe Frontend Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Eager to Learn &amp; Adapt</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
