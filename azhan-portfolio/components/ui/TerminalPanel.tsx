"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Copy,
  Check,
  Terminal as TerminalIcon,
  Play,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";

interface CliOutput {
  command: string;
  response: string | React.ReactNode;
}

export function TerminalPanel() {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<"profile" | "stack" | "status" | "cli">("profile");
  const [copied, setCopied] = useState(false);

  // Interactive CLI state
  const [cliInput, setCliInput] = useState("");
  const [cliHistory, setCliHistory] = useState<CliOutput[]>([
    {
      command: "welcome",
      response:
        language === "ku"
          ? "سڵاو! بەخێربێیت بۆ ژینگەی ئەندازیاریی ئاژان هەمزە جاف. بنووسە 'help' بۆ بینینی هەموو فەرمانە بەردەستەکان."
          : "Welcome to Azhan Hamza Jaf's engineering workspace. Type 'help' to see available demonstration commands.",
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const cliScrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll CLI to bottom
  useEffect(() => {
    if (activeTab === "cli" && cliScrollRef.current) {
      cliScrollRef.current.scrollTop = cliScrollRef.current.scrollHeight;
    }
  }, [cliHistory, activeTab]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandLog.length === 0) return;
      const nextIdx = historyIndex === -1 ? commandLog.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setCliInput(commandLog[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= commandLog.length) {
        setHistoryIndex(-1);
        setCliInput("");
      } else {
        setHistoryIndex(nextIdx);
        setCliInput(commandLog[nextIdx]);
      }
    }
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = cliInput.trim().toLowerCase();
    if (!trimmed) return;

    setCommandLog((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    let output: string | React.ReactNode = "";

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-indigo-400 font-semibold">Available Commands:</p>
            <p>• <span className="text-amber-300">whoami</span> — Display developer identity and background</p>
            <p>• <span className="text-amber-300">skills</span> — List primary languages, frameworks & tools</p>
            <p>• <span className="text-amber-300">projects</span> — Display active systems & applications</p>
            <p>• <span className="text-amber-300">contact</span> — Get direct communication channels</p>
            <p>• <span className="text-amber-300">theme</span> — Toggle dark/light interface mode</p>
            <p>• <span className="text-amber-300">lang</span> — Switch between Kurdish Sorani and English</p>
            <p>• <span className="text-amber-300">clear</span> — Reset terminal output history</p>
          </div>
        );
        break;

      case "whoami":
        output = `${profileData.name[language]} (${profileData.nickname}) — ${profileData.profession[language]}. Architect of resilient offline-first POS engines, transactional state machines, and modern Next.js systems.`;
        break;

      case "skills":
        output = "Primary Tools: TypeScript 5.x, React 19, Next.js App Router, Tailwind CSS, Python (GS1 Algorithms & Automation), IndexedDB ACID Caching, ESC/POS Hardware Printing.";
        break;

      case "projects":
        output = (
          <div className="space-y-1">
            <p className="text-emerald-400 font-semibold">Featured Real Systems:</p>
            {projectsData.slice(0, 3).map((p) => (
              <p key={p.id}>
                • <span className="text-white font-medium">{p.title[language]}</span>{" "}
                <span className="text-slate-500">[{p.technologies.slice(0, 3).join(", ")}]</span>
              </p>
            ))}
          </div>
        );
        break;

      case "contact":
        output = `Email: ${profileData.contact.email} | Phone: ${profileData.contact.phoneFormatted} | Location: ${profileData.contact.location[language]}`;
        break;

      case "theme":
        toggleTheme();
        output = `Theme switched to: ${theme === "dark" ? "Light" : "Dark"} mode.`;
        break;

      case "lang":
        toggleLanguage();
        output = `Language toggled to: ${language === "en" ? "Kurdish Sorani (RTL)" : "English (LTR)"}.`;
        break;

      case "clear":
        setCliHistory([]);
        setCliInput("");
        return;

      default:
        output = (
          <span className="text-rose-400">
            Command not recognized: &apos;{trimmed}&apos;. Type &apos;help&apos; for list of valid commands.
          </span>
        );
        break;
    }

    setCliHistory((prev) => [...prev, { command: trimmed, response: output }]);
    setCliInput("");
  };

  const getTabContent = () => {
    switch (activeTab) {
      case "profile":
        return `// Developer Profile Configuration
export const developer = {
  fullName: "${profileData.name[language]}",
  preferred: "${profileData.preferredName}",
  nickname: "${profileData.nickname}",
  role: "${profileData.profession[language]}",
  interestSparked: ${profileData.journey.interestYear},
  activeCodingSince: ${profileData.journey.codingYear},
  location: "${profileData.contact.location[language]}",
  corePhilosophy: "Resilient systems architecture, zero offline data loss & high-performance UI"
};`;

      case "stack":
        return `{
  "full_stack_architecture": {
    "web_platforms": ["Next.js 16 (App Router)", "React 19", "Turbopack", "TypeScript 5.x"],
    "media_streaming": ["Rwanin Stream (Adaptive Video Player, Faceted Catalog Engine, Edge Rendering)"],
    "enterprise_software": ["Xizmat Market POS/ERP (Offline PWA, Multi-Role Staff, Debt Ledger)"]
  },
  "data_and_systems": {
    "offline_persistence": ["IndexedDB ACID Queuing", "SQLite Storage", "Optimistic Reconciliation"],
    "algorithms_and_scripting": ["Python 3.x (GS1 Modulo-10 Barcode Checksums, Automation)"],
    "hardware_interfacing": ["ESC/POS Raw Thermal Printers", "USB/Serial Barcode Scanners"]
  },
  "engineering_standards": [
    "Strict Compile-Time Safety",
    "Sub-50ms Client State Transitions",
    "Bidirectional Kurdish Sorani RTL & English LTR UX"
  ]
}`;

      case "status":
        return `#!/bin/bash
# Engineering Environment & Systems Diagnostics
echo "== Full-Stack Systems Health =="
[✓] Core: Next.js 16.4.2 App Router & React 19 RSC
[✓] Type Contracts: 100% Strict TypeScript 5.x
[✓] Video Engine: Fluid Buffer Media & Faceted Streaming Catalog
[✓] Business Engine: Offline-First Transaction Durability (ACID Queue)
[✓] Hardware I/O: 80mm ESC/POS Thermal Printing & GS1 Checksums
[✓] Bidirectional UI: Kurdish Sorani (RTL) & English (LTR) Symmetrical Engine
[✓] Systems Engineer: Azhan Hamza Jaf (Ready for enterprise challenges)`;

      default:
        return "";
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getTabContent());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full rounded-2xl glass-panel bg-slate-950/85 border border-white/10 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Top Header / Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-400 font-sans hidden sm:inline-flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
            {t.hero.terminalTitle}
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("profile")}
            className={`px-2.5 py-1 rounded text-xs transition-colors font-sans whitespace-nowrap ${
              activeTab === "profile"
                ? "bg-indigo-600/30 text-indigo-300 font-medium border border-indigo-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {t.hero.terminalTabProfile}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("stack")}
            className={`px-2.5 py-1 rounded text-xs transition-colors font-sans whitespace-nowrap ${
              activeTab === "stack"
                ? "bg-indigo-600/30 text-indigo-300 font-medium border border-indigo-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {t.hero.terminalTabStack}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("status")}
            className={`px-2.5 py-1 rounded text-xs transition-colors font-sans whitespace-nowrap ${
              activeTab === "status"
                ? "bg-indigo-600/30 text-indigo-300 font-medium border border-indigo-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {t.hero.terminalTabStatus}
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("cli");
              setTimeout(() => inputRef.current?.focus(), 50);
            }}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors font-sans whitespace-nowrap ${
              activeTab === "cli"
                ? "bg-emerald-600/30 text-emerald-300 font-medium border border-emerald-500/30"
                : "text-emerald-400/80 hover:text-emerald-300"
            }`}
          >
            <Play className="w-2.5 h-2.5 fill-current" />
            <span>{t.hero.terminalTabCli}</span>
          </button>
        </div>

        {/* Copy Button (only for code tabs) */}
        {activeTab !== "cli" && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? t.hero.terminalCopied : t.hero.terminalCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-sans hidden sm:inline">
                  {t.hero.terminalCopied}
                </span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline font-sans">{t.hero.terminalCopy}</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Code Display or Interactive CLI */}
      {activeTab === "cli" ? (
        <div
          ref={cliScrollRef}
          onClick={() => inputRef.current?.focus()}
          className="p-4 sm:p-5 overflow-y-auto max-h-[300px] sm:max-h-[360px] space-y-3 bg-black/40 cursor-text select-text"
        >
          {cliHistory.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-indigo-400">
                <span className="text-emerald-400">azhan@portfolio:~$</span>
                <span className="text-slate-100 font-bold">{item.command}</span>
              </div>
              <div className="text-slate-300 leading-relaxed ps-4 border-s border-indigo-500/20">
                {item.response}
              </div>
            </div>
          ))}

          {/* Interactive Input Line */}
          <form onSubmit={handleCliSubmit} className="flex items-center gap-2 pt-1">
            <span className="text-emerald-400 font-semibold shrink-0">azhan@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={cliInput}
              onChange={(e) => setCliInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'skills', 'projects'..."
              className="w-full bg-transparent text-slate-100 focus:outline-none font-mono text-xs sm:text-sm placeholder:text-slate-600"
            />
          </form>
        </div>
      ) : (
        <div className="p-4 sm:p-5 overflow-x-auto text-slate-200 leading-relaxed max-h-[300px] sm:max-h-[360px] select-text">
          <pre className="text-xs sm:text-[13px] leading-relaxed font-mono">
            <code>{getTabContent()}</code>
          </pre>
        </div>
      )}

      {/* Footer bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-950/60 border-t border-white/5 text-[11px] text-slate-500 font-sans">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>TypeScript 5.x • Next.js App Router • Safe Predefined CLI</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span>UTF-8</span>
          <span>•</span>
          <span>TSX Mode</span>
        </div>
      </div>
    </div>
  );
}
