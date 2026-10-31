"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  FileCode,
  ShieldCheck,
  Atom,
  Layers,
  Terminal,
  FileText,
  Sheet,
  Presentation,
  Info,
  Server,
  Database,
  Cpu,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { skillsData, skillCategories, SkillProficiency } from "@/data/skills";

export function Skills() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "programming" | "productivity">("all");

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="w-5 h-5 text-indigo-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-cyan-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-pink-400" />;
      case "FileCode":
        return <FileCode className="w-5 h-5 text-amber-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case "Atom":
        return <Atom className="w-5 h-5 text-cyan-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-violet-400" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case "FileText":
        return <FileText className="w-5 h-5 text-blue-400" />;
      case "Sheet":
        return <Sheet className="w-5 h-5 text-emerald-400" />;
      case "Presentation":
        return <Presentation className="w-5 h-5 text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getProficiencyBadgeStyle = (prof: SkillProficiency) => {
    switch (prof) {
      case "Current Focus":
        return "bg-violet-500/20 text-violet-300 border-violet-500/40";
      case "Working Knowledge":
        return "bg-blue-500/20 text-blue-300 border-blue-500/40";
      case "Learning and Improving":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
    }
  };

  const filteredSkills = skillsData.filter((skill) =>
    activeCategory === "all" ? true : skill.category === activeCategory
  );

  const activeCategoryMeta = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow orb */}
      <div
        className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-cyan-400 border border-cyan-500/30">
            <Code2 className="w-3.5 h-3.5" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.skills.subtitle}
          </p>

          {/* Transparent Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-300">
            <Info className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>{t.skills.proficiencyNotice}</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/25 border border-indigo-400/40"
                  : "glass-card text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {category.label[language]}
            </button>
          ))}
        </div>

        {/* Category Description Banner */}
        {activeCategoryMeta && (
          <div className="text-center mb-8">
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              {activeCategoryMeta.description[language]}
            </p>
          </div>
        )}

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between group hover:border-indigo-500/40"
            >
              <div className="space-y-4">
                {/* Top Row: Icon + Name + Honest Proficiency */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 group-hover:scale-110 transition-transform">
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base tracking-tight">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Honest Proficiency Badge */}
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide border ${getProficiencyBadgeStyle(
                      skill.proficiency.en
                    )}`}
                  >
                    {skill.proficiency[language]}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {skill.description[language]}
                </p>
              </div>

              {/* Core Topics / Capabilities */}
              <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                  {t.skills.keyTopicsTitle}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {skill.keyTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
