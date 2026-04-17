import React, { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "../contexts/LanguageContext";

const FLAG_EMOJIS: Record<Language, string> = {
  ru: "🇷🇺",
  en: "🇬🇧",
  ar: "🇸🇦",
  zh: "🇨🇳",
};

const LANG_LABELS: Record<Language, string> = {
  ru: "Русский",
  en: "English",
  ar: "العربية",
  zh: "中文",
};

const LANGUAGES: Language[] = ["en", "ru", "ar", "zh"];

interface LanguageSwitcherProps {
  variant?: "navbar" | "compact" | "full";
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = "navbar",
  className = "",
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setOpen(false);
  };

  if (variant === "compact") {
    return (
      <div className={`flex gap-1 ${className}`}>
        {LANGUAGES.map((lang) => (
          <button
            key={lang}
            onClick={() => handleSelect(lang)}
            title={LANG_LABELS[lang]}
            className={`
              w-8 h-8 rounded-lg text-sm font-medium transition-all duration-200
              ${language === lang
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
          >
            {FLAG_EMOJIS[lang]}
          </button>
        ))}
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className={`grid grid-cols-2 gap-3 ${className}`}>
        {LANGUAGES.map((lang) => (
          <button
            key={lang}
            onClick={() => handleSelect(lang)}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-200
              ${language === lang
                ? "border-blue-600 bg-blue-50 text-blue-700"
                : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50"
              }
            `}
          >
            <span className="text-2xl">{FLAG_EMOJIS[lang]}</span>
            <span className="font-medium text-sm">{LANG_LABELS[lang]}</span>
            {language === lang && (
              <span className="ml-auto text-blue-600">✓</span>
            )}
          </button>
        ))}
      </div>
    );
  }

  // Default: navbar dropdown
  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2 px-3 py-2 rounded-xl
          bg-white/10 hover:bg-white/20 backdrop-blur-sm
          border border-white/20 hover:border-white/40
          text-white transition-all duration-200
          font-medium text-sm
        "
        aria-label={t("ui_language")}
      >
        <span className="text-base">{FLAG_EMOJIS[language]}</span>
        <span className="hidden sm:inline">{LANG_LABELS[language]}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div
          className="
            absolute top-full mt-2 right-0 z-50
            bg-white rounded-2xl shadow-2xl border border-gray-100
            overflow-hidden min-w-[160px]
            animate-in fade-in slide-in-from-top-2 duration-200
          "
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className={`
                w-full flex items-center gap-3 px-4 py-3
                text-left transition-colors duration-150
                ${language === lang
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              <span className="text-lg">{FLAG_EMOJIS[lang]}</span>
              <span className="font-medium text-sm">{LANG_LABELS[lang]}</span>
              {language === lang && (
                <span className="ml-auto text-blue-600 text-xs font-bold">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
