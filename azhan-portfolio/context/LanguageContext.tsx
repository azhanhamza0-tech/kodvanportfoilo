"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { Language, translations, Translations } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  direction: "ltr" | "rtl";
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

let langListeners: Array<() => void> = [];

function emitLangChange() {
  for (const listener of langListeners) {
    listener();
  }
}

const langStore = {
  subscribe(listener: () => void) {
    langListeners = [...langListeners, listener];
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "azhan_portfolio_lang") {
        emitLangChange();
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorage);
    }
    return () => {
      langListeners = langListeners.filter((l) => l !== listener);
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorage);
      }
    };
  },
  getSnapshot(): Language {
    if (typeof window === "undefined") return "en";
    try {
      const saved = localStorage.getItem("azhan_portfolio_lang");
      return saved === "ku" || saved === "en" ? (saved as Language) : "en";
    } catch {
      return "en";
    }
  },
  getServerSnapshot(): Language {
    return "en";
  },
  setLanguage(lang: Language) {
    try {
      localStorage.setItem("azhan_portfolio_lang", lang);
    } catch {
      // ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "ku" ? "ckb" : "en";
      document.documentElement.dir = lang === "ku" ? "rtl" : "ltr";
    }
    emitLangChange();
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    langStore.subscribe,
    langStore.getSnapshot,
    langStore.getServerSnapshot
  );

  const direction = language === "ku" ? "rtl" : "ltr";

  // Sync document lang and dir on change
  useEffect(() => {
    document.documentElement.lang = language === "ku" ? "ckb" : "en";
    document.documentElement.dir = direction;
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    langStore.setLanguage(lang);
  };

  const toggleLanguage = () => {
    langStore.setLanguage(language === "en" ? "ku" : "en");
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        t,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

