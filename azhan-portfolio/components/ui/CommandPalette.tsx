"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  ArrowLeft,
  X,
  Layers,
  Code2,
  BookOpen,
  Compass,
  Cpu,
  Mail,
  Phone,
  Globe,
  Sun,
  Moon,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { projectsData, ProjectItem } from "@/data/projects";
import { profileData } from "@/data/profile";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProject?: (project: ProjectItem) => void;
}

interface PaletteAction {
  id: string;
  group: "navigation" | "projects" | "actions";
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  perform: () => void;
}

function CommandPaletteModal({
  onClose,
  onOpenProject,
}: {
  onClose: () => void;
  onOpenProject?: (project: ProjectItem) => void;
}) {
  const { t, language, toggleLanguage, direction } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const scrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Build command palette options
  const actions: PaletteAction[] = [
    // Navigation items
    {
      id: "nav-home",
      group: "navigation",
      title: t.nav.home,
      subtitle: "#home",
      icon: <Compass className="w-4 h-4 text-violet-400" />,
      perform: () => scrollTo("home"),
    },
    {
      id: "nav-about",
      group: "navigation",
      title: t.nav.about,
      subtitle: "#about",
      icon: <Compass className="w-4 h-4 text-violet-400" />,
      perform: () => scrollTo("about"),
    },
    {
      id: "nav-skills",
      group: "navigation",
      title: t.nav.skills,
      subtitle: "#skills",
      icon: <Code2 className="w-4 h-4 text-indigo-400" />,
      perform: () => scrollTo("skills"),
    },
    {
      id: "nav-projects",
      group: "navigation",
      title: t.nav.projects,
      subtitle: "#projects",
      icon: <Layers className="w-4 h-4 text-indigo-400" />,
      perform: () => scrollTo("projects"),
    },
    {
      id: "nav-architecture",
      group: "navigation",
      title: t.nav.architecture,
      subtitle: "#architecture",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      perform: () => scrollTo("architecture"),
    },
    {
      id: "nav-lab",
      group: "navigation",
      title: t.nav.codeLab,
      subtitle: "#lab",
      icon: <Code2 className="w-4 h-4 text-emerald-400" />,
      perform: () => scrollTo("lab"),
    },
    {
      id: "nav-principles",
      group: "navigation",
      title: t.nav.principles,
      subtitle: "#principles",
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      perform: () => scrollTo("principles"),
    },
    {
      id: "nav-journal",
      group: "navigation",
      title: t.nav.journal,
      subtitle: "#journal",
      icon: <BookOpen className="w-4 h-4 text-blue-400" />,
      perform: () => scrollTo("journal"),
    },
    {
      id: "nav-evidence",
      group: "navigation",
      title: t.nav.evidence,
      subtitle: "#evidence",
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      perform: () => scrollTo("evidence"),
    },
    {
      id: "nav-contact",
      group: "navigation",
      title: t.nav.contact,
      subtitle: "#contact",
      icon: <Mail className="w-4 h-4 text-indigo-400" />,
      perform: () => scrollTo("contact"),
    },

    // Projects direct access
    ...projectsData.map((project) => ({
      id: `proj-${project.id}`,
      group: "projects" as const,
      title: project.title[language],
      subtitle: `${project.typeLabel[language]} • ${project.technologies.slice(0, 3).join(", ")}`,
      icon: <Layers className="w-4 h-4 text-violet-400" />,
      perform: () => {
        onClose();
        if (onOpenProject) {
          onOpenProject(project);
        } else {
          scrollTo("projects");
        }
      },
    })),

    // Quick Actions
    {
      id: "action-lang",
      group: "actions",
      title: language === "en" ? "گۆڕینی زمان بۆ کوردی (RTL)" : "Switch language to English (LTR)",
      subtitle: language === "en" ? "Kurdish Sorani" : "English",
      icon: <Globe className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        toggleLanguage();
        onClose();
      },
    },
    {
      id: "action-theme",
      group: "actions",
      title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
      subtitle: "Toggle color appearance",
      icon: theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />,
      perform: () => {
        toggleTheme();
        onClose();
      },
    },
    {
      id: "action-copy-email",
      group: "actions",
      title: "Copy Email: azhanako1999@gmail.com",
      subtitle: "Direct communication",
      icon: <Mail className="w-4 h-4 text-indigo-400" />,
      perform: async () => {
        try {
          await navigator.clipboard.writeText("azhanako1999@gmail.com");
        } catch {
          // ignore
        }
        onClose();
      },
    },
    {
      id: "action-call",
      group: "actions",
      title: `Call: ${profileData.contact.phoneFormatted}`,
      subtitle: "07501151634",
      icon: <Phone className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        if (typeof window !== "undefined") {
          window.open(`tel:${profileData.contact.phone}`, "_self");
        }
        onClose();
      },
    },
  ];

  // Filter actions based on query
  const filteredActions = actions.filter((action) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      action.title.toLowerCase().includes(q) ||
      (action.subtitle && action.subtitle.toLowerCase().includes(q))
    );
  });

  // Keyboard navigation inside palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredActions.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredActions.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].perform();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredActions, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={t.nav.commandPalette}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
        aria-hidden="true"
      />

      {/* Palette Dialog Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative w-full max-w-xl rounded-2xl glass-panel bg-slate-950/95 border border-white/15 shadow-2xl overflow-hidden z-10"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-slate-900/60">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder={t.commandPalette.placeholder}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedIndex(0);
              }}
              className="p-1 text-slate-400 hover:text-white rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-white/5 scrollbar-thin">
          {filteredActions.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              {t.commandPalette.noResults}
            </div>
          ) : (
            <div className="space-y-1">
              {filteredActions.map((action, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={action.id}
                    type="button"
                    onClick={action.perform}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm transition-all ${
                      isSelected
                        ? "bg-gradient-to-r from-violet-600/30 to-indigo-600/30 text-white border border-indigo-500/40 shadow-sm"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`p-2 rounded-lg border shrink-0 ${
                          isSelected
                            ? "bg-indigo-600/30 border-indigo-400/50 text-white"
                            : "bg-white/5 border-white/5 text-slate-400"
                        }`}
                      >
                        {action.icon}
                      </div>
                      <div className="min-w-0 truncate">
                        <span className="font-medium block truncate text-slate-100">
                          {action.title}
                        </span>
                        {action.subtitle && (
                          <span className="text-[11px] text-slate-400 block truncate font-mono">
                            {action.subtitle}
                          </span>
                        )}
                      </div>
                    </div>

                    <ArrowIcon
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? "text-indigo-400 translate-x-1" : "text-slate-600 opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Palette Footer Keyboard Shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-t border-white/10 text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-black/50 border border-white/10 font-mono text-[10px]">
                {t.commandPalette.navigateHint}
              </kbd>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-black/50 border border-white/10 font-mono text-[10px]">
                {t.commandPalette.selectHint}
              </kbd>
            </span>
          </div>
          <div>
            <kbd className="px-1.5 py-0.5 rounded bg-black/50 border border-white/10 font-mono text-[10px]">
              {t.commandPalette.closeHint}
            </kbd>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function CommandPalette({ isOpen, onClose, onOpenProject }: CommandPaletteProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <CommandPaletteModal onClose={onClose} onOpenProject={onOpenProject} />
      )}
    </AnimatePresence>
  );
}
