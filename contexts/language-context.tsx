"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "mn";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (enText: string, mnText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("app_lang") as Language;
    if (savedLang) {
      setLangState(savedLang);
    } else {
      const userLang = navigator.language;
      if (userLang.startsWith("mn")) {
        setLangState("mn");
      }
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("app_lang", newLang);
  };

  const t = (enText: string, mnText: string) => {
    // Before mounting, prefer returning english or server rendered initial state 
    // to avoid hydration mismatch if server defaults to en.
    if (!mounted) return enText; 
    return lang === "en" ? enText : mnText;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
