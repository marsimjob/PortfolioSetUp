import { createContext, useContext, useState } from "react";
import translations from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "sv";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "sv" ? "en" : "sv";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  const t = (key) => {
    return translations[language]?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
