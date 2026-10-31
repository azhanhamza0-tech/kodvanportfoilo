"use client";

import React from "react";
import { ArrowUp, Mail, Phone, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { profileData } from "@/data/profile";

export function Footer() {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "architecture", label: t.nav.architecture },
    { id: "lab", label: t.nav.codeLab },
    { id: "principles", label: t.nav.principles },
    { id: "journal", label: t.nav.journal },
    { id: "evidence", label: t.nav.evidence },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950/90 pt-16 pb-12 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-violet-300 to-cyan-300 text-xs tracking-wider">
                    AH
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-white text-base tracking-tight block">
                  {profileData.name[language]}
                </span>
                <span className="text-xs text-indigo-400 font-medium">
                  {profileData.profession[language]}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>

            <p className="text-[11px] text-slate-500 font-mono">
              {t.footer.techStackNote}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {t.footer.quickLinks}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-slate-400 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Direct Contacts & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {t.footer.contacts}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profileData.contact.email}</span>
              </a>
              <a
                href={`tel:${profileData.contact.phone}`}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{profileData.contact.phone}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card text-xs font-medium text-slate-300 hover:text-white border border-white/10 hover:border-indigo-500/40 transition-colors"
                aria-label={t.footer.backToTop}
              >
                <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
                <span>{t.footer.backToTop}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {t.footer.copyright}</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with focus &amp; attention to detail</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
