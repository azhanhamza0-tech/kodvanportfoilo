"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertCircle,
  Images,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/context/LanguageContext";
import {
  projectsData,
  projectCategoryFilters,
  ProjectItem,
} from "@/data/projects";
import { Modal } from "@/components/ui/Modal";

export function Projects() {
  const { t, language, direction } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  // Reset screenshot index when modal opens with a project
  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
    setActiveScreenshotIdx(0);
  };

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === "all") return true;
    return proj.category === activeFilter;
  });

  const currentScreenshots = selectedProject?.screenshots || [];

  const handleNextScreenshot = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (currentScreenshots.length <= 1) return;
    setActiveScreenshotIdx((prev) => (prev + 1) % currentScreenshots.length);
  }, [currentScreenshots.length]);

  const handlePrevScreenshot = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (currentScreenshots.length <= 1) return;
    setActiveScreenshotIdx((prev) =>
      prev === 0 ? currentScreenshots.length - 1 : prev - 1
    );
  }, [currentScreenshots.length]);

  // Keyboard navigation for screenshots
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject || currentScreenshots.length <= 1) return;
      if (e.key === "ArrowRight") {
        if (direction === "rtl") {
          handlePrevScreenshot();
        } else {
          handleNextScreenshot();
        }
      } else if (e.key === "ArrowLeft") {
        if (direction === "rtl") {
          handleNextScreenshot();
        } else {
          handlePrevScreenshot();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, currentScreenshots.length, direction, handleNextScreenshot, handlePrevScreenshot]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Glow Orbs */}
      <div
        className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-violet-400 border border-violet-500/30">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.projects.subtitle}
          </p>

          {/* Practical Systems Note */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
            <span>{t.projects.conceptNote}</span>
          </div>
        </div>

        {/* Filter Tabs */}
        {projectsData.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {projectCategoryFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/25 border border-indigo-400/40"
                    : "glass-card text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {filter.label[language]}
              </button>
            ))}
          </div>
        )}

        {/* Empty State Handler */}
        {projectsData.length === 0 ? (
          <div className="text-center py-20 px-4 glass-panel max-w-lg mx-auto rounded-3xl border border-white/10 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-indigo-400 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {t.projects.emptyTitle}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.projects.emptyMessage}
            </p>
          </div>
        ) : (
          /* Projects Grid */
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => {
              const hasScreenshots = project.screenshots && project.screenshots.length > 0;

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`glass-card rounded-2xl overflow-hidden border flex flex-col justify-between group transition-all duration-300 ${
                    project.featured
                      ? "border-violet-500/30 hover:border-violet-400/70 shadow-lg shadow-violet-950/30"
                      : "border-white/10 hover:border-indigo-500/40"
                  }`}
                >
                  <div>
                    {/* Thumbnail Banner */}
                    <div
                      onClick={() => handleOpenProject(project)}
                      className="relative h-52 w-full bg-slate-900 overflow-hidden border-b border-white/10 cursor-pointer"
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title[language]}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Type Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/90 backdrop-blur-md text-indigo-300 border border-indigo-500/40 shadow-sm">
                          {project.typeLabel[language]}
                        </span>
                        {project.featured && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                            <span>{language === "ku" ? "سەرەکی" : "Featured"}</span>
                          </span>
                        )}
                      </div>

                      {/* Date Badge */}
                      {project.completionDate && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-slate-300 border border-white/10">
                            {project.completionDate}
                          </span>
                        </div>
                      )}

                      {/* Screenshots Gallery Counter Badge */}
                      {hasScreenshots && (
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-950/85 backdrop-blur-md text-slate-200 border border-white/15 flex items-center gap-1.5 shadow-md">
                          <Images className="w-3.5 h-3.5 text-violet-400" />
                          <span>
                            {project.screenshots?.length} {t.projects.screenshotsCount}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Body Content */}
                    <div className="p-6 space-y-4">
                      <h3
                        onClick={() => handleOpenProject(project)}
                        className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors cursor-pointer"
                      >
                        {project.title[language]}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {project.shortDescription[language]}
                      </p>

                      {/* Problem Solved Snippet */}
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block">
                          {t.projects.problemSolved}
                        </span>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {project.problemSolved[language]}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-6 pt-0 border-t border-white/10 mt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleOpenProject(project)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/btn pt-3"
                    >
                      <span>{t.projects.viewDetails}</span>
                      <ArrowIcon className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2 pt-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                          title={t.projects.sourceCode}
                          aria-label={t.projects.sourceCode}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                          title={t.projects.liveDemo}
                          aria-label={t.projects.liveDemo}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}

        {/* Detailed Case Study & Screenshot Gallery Modal */}
        <Modal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          title={selectedProject ? selectedProject.title[language] : ""}
          maxWidth="max-w-4xl lg:max-w-5xl"
        >
          {selectedProject && (
            <div className="space-y-6">
              {/* Type Badge & Meta */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                    {selectedProject.typeLabel[language]}
                  </span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                    {selectedProject.category}
                  </span>
                  {selectedProject.completionDate && (
                    <span className="text-xs text-slate-400 font-mono">
                      • {selectedProject.completionDate}
                    </span>
                  )}
                </div>

                {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                  <div className="flex items-center gap-1.5 text-xs text-violet-300 bg-violet-950/50 px-3 py-1 rounded-lg border border-violet-500/30">
                    <Images className="w-3.5 h-3.5" />
                    <span>
                      {activeScreenshotIdx + 1} / {selectedProject.screenshots.length}{" "}
                      {t.projects.screenshotsCount}
                    </span>
                  </div>
                )}
              </div>

              {/* Interactive Screenshot Showcase Gallery */}
              {selectedProject.screenshots && selectedProject.screenshots.length > 0 ? (
                <div className="space-y-3">
                  {/* Main Active Image Display */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl group">
                    <img
                      src={selectedProject.screenshots[activeScreenshotIdx].url}
                      alt={
                        selectedProject.screenshots[activeScreenshotIdx].caption[language]
                      }
                      className="w-full h-full object-contain bg-black/60 transition-all duration-300"
                    />

                    {/* Navigation Arrows */}
                    {selectedProject.screenshots.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={handlePrevScreenshot}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/80 hover:bg-violet-600 text-white border border-white/20 transition-all shadow-lg backdrop-blur-sm focus:outline-none"
                          aria-label={t.projects.previousImage}
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextScreenshot}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/80 hover:bg-violet-600 text-white border border-white/20 transition-all shadow-lg backdrop-blur-sm focus:outline-none"
                          aria-label={t.projects.nextImage}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {/* Caption Bar Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent p-4 sm:p-5 pt-8">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed drop-shadow-md">
                          {
                            selectedProject.screenshots[activeScreenshotIdx].caption[
                              language
                            ]
                          }
                        </p>
                        <a
                          href={selectedProject.screenshots[activeScreenshotIdx].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
                          title={language === "ku" ? "بینین بە قەبارەی تەواو" : "View Fullscreen"}
                          aria-label="View Fullscreen"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Previews Strip */}
                  {selectedProject.screenshots.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-white/10">
                      {selectedProject.screenshots.map((screen, idx) => (
                        <button
                          key={screen.url}
                          type="button"
                          onClick={() => setActiveScreenshotIdx(idx)}
                          className={`relative shrink-0 w-20 sm:w-24 h-12 sm:h-14 rounded-lg overflow-hidden border transition-all ${
                            idx === activeScreenshotIdx
                              ? "ring-2 ring-violet-500 border-violet-400 scale-105 shadow-md shadow-violet-500/20"
                              : "border-white/15 opacity-60 hover:opacity-100 hover:border-white/40"
                          }`}
                        >
                          <img
                            src={screen.url}
                            alt={screen.caption[language]}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-1 left-1 px-1 rounded text-[9px] font-mono bg-black/80 text-white">
                            {idx + 1}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Fallback Image Banner */
                <div className="relative h-56 sm:h-72 w-full rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title[language]}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Full Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedProject.shortDescription[language]}
              </p>

              {/* Problem Solved Detail */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-indigo-400" />
                  <span>{t.projects.problemSolved}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.problemSolved[language]}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{t.projects.keyFeatures}</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {selectedProject.mainFeatures[language].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-violet-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Notes */}
              {selectedProject.architectureNotes && (
                <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    {t.projects.architectureTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.architectureNotes[language]}
                  </p>
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t.projects.techStack}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Return CTA */}
              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium glass-card text-slate-300 hover:text-white border border-white/10 transition-colors"
                >
                  {t.projects.modalReturn}
                </button>

                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium glass-card text-slate-300 hover:text-white"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>{t.projects.sourceCode}</span>
                    </a>
                  )}
                  {selectedProject.liveDemoUrl && (
                    <a
                      href={selectedProject.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-500"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.projects.liveDemo}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
