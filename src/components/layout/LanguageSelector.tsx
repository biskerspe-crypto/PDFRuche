'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ChevronDown, Check } from 'lucide-react';
import { type Locale, locales, localeConfig, getLocalizedPath } from '@/lib/i18n/config';

export interface LanguageSelectorProps {
  currentLocale: Locale;
}

// Storage key for language preference
const LANGUAGE_PREFERENCE_KEY = 'pdfcraft-language-preference';

/**
 * Save language preference to localStorage
 */
export function saveLanguagePreference(locale: Locale): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LANGUAGE_PREFERENCE_KEY, locale);
  }
}

/**
 * Get language preference from localStorage
 */
export function getLanguagePreference(): Locale | null {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(LANGUAGE_PREFERENCE_KEY);
    if (stored && locales.includes(stored as Locale)) {
      return stored as Locale;
    }
  }
  return null;
}

/**
 * Crisp SVG Country Flags for all supported locales
 */
function FlagIcon({ locale }: { locale: Locale }) {
  switch (locale) {
    case 'en':
      return (
        <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
          <clipPath id="uk-clip"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
          <clipPath id="uk-diag"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
          <g clipPath="url(#uk-clip)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-diag)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
          </g>
        </svg>
      );
    case 'fr':
      return (
        <svg viewBox="0 0 3 2" className="w-full h-full object-cover">
          <rect width="1" height="2" fill="#002395"/>
          <rect x="1" width="1" height="2" fill="#fff"/>
          <rect x="2" width="1" height="2" fill="#ED2939"/>
        </svg>
      );
    case 'de':
      return (
        <svg viewBox="0 0 5 3" className="w-full h-full object-cover">
          <rect width="5" height="1" fill="#000"/>
          <rect y="1" width="5" height="1" fill="#DD0000"/>
          <rect y="2" width="5" height="1" fill="#FFCE00"/>
        </svg>
      );
    case 'es':
      return (
        <svg viewBox="0 0 3 2" className="w-full h-full object-cover">
          <rect width="3" height="2" fill="#AA151B"/>
          <rect y="0.5" width="3" height="1" fill="#F1BF00"/>
        </svg>
      );
    case 'it':
      return (
        <svg viewBox="0 0 3 2" className="w-full h-full object-cover">
          <rect width="1" height="2" fill="#009246"/>
          <rect x="1" width="1" height="2" fill="#fff"/>
          <rect x="2" width="1" height="2" fill="#CE2B37"/>
        </svg>
      );
    case 'pt':
      return (
        <svg viewBox="0 0 3 2" className="w-full h-full object-cover">
          <rect width="1.2" height="2" fill="#046A38"/>
          <rect x="1.2" width="1.8" height="2" fill="#DA291C"/>
          <circle cx="1.2" cy="1" r="0.35" fill="#FFC72C"/>
          <circle cx="1.2" cy="1" r="0.22" fill="#002B49"/>
        </svg>
      );
    case 'ro':
      return (
        <svg viewBox="0 0 3 2" className="w-full h-full object-cover">
          <rect width="1" height="2" fill="#002B7F"/>
          <rect x="1" width="1" height="2" fill="#FCD116"/>
          <rect x="2" width="1" height="2" fill="#CE1126"/>
        </svg>
      );
    case 'ja':
      return (
        <svg viewBox="0 0 3 2" className="w-full h-full object-cover">
          <rect width="3" height="2" fill="#fff"/>
          <circle cx="1.5" cy="1" r="0.6" fill="#BC002D"/>
        </svg>
      );
    case 'ko':
      return (
        <svg viewBox="0 0 3 2" className="w-full h-full object-cover">
          <rect width="3" height="2" fill="#fff"/>
          <circle cx="1.5" cy="1" r="0.5" fill="#CD2E3A"/>
          <path d="M 1.5 0.5 A 0.5 0.5 0 0 0 1.5 1.5 A 0.25 0.25 0 0 1 1.5 1 A 0.25 0.25 0 0 0 1.5 0.5" fill="#0047A0"/>
        </svg>
      );
    case 'zh':
      return (
        <svg viewBox="0 0 3 2" className="w-full h-full object-cover">
          <rect width="3" height="2" fill="#DE2910"/>
          <polygon points="0.5,0.2 0.56,0.38 0.75,0.38 0.6,0.5 0.65,0.68 0.5,0.56 0.35,0.68 0.4,0.5 0.25,0.38 0.44,0.38" fill="#FFDE00"/>
        </svg>
      );
    case 'zh-TW':
      return (
        <svg viewBox="0 0 3 2" className="w-full h-full object-cover">
          <rect width="3" height="2" fill="#FE0000"/>
          <rect width="1.5" height="1" fill="#000095"/>
          <circle cx="0.75" cy="0.5" r="0.25" fill="#fff"/>
          <circle cx="0.75" cy="0.5" r="0.2" fill="#000095"/>
          <circle cx="0.75" cy="0.5" r="0.1" fill="#fff"/>
        </svg>
      );
    case 'id':
      return (
        <svg viewBox="0 0 3 2" className="w-full h-full object-cover">
          <rect width="3" height="1" fill="#CE1126"/>
          <rect y="1" width="3" height="1" fill="#fff"/>
        </svg>
      );
    case 'vi':
      return (
        <svg viewBox="0 0 3 2" className="w-full h-full object-cover">
          <rect width="3" height="2" fill="#DA251D"/>
          <polygon points="1.5,0.35 1.63,0.75 2.05,0.75 1.71,1.0 1.84,1.4 1.5,1.15 1.16,1.4 1.29,1.0 0.95,0.75 1.37,0.75" fill="#FFFF00"/>
        </svg>
      );
    case 'ar':
      return (
        <svg viewBox="0 0 3 2" className="w-full h-full object-cover">
          <rect width="3" height="2" fill="#006C35"/>
          <rect x="0.6" y="0.8" width="1.8" height="0.15" fill="#fff" rx="0.05"/>
          <circle cx="1.5" cy="0.55" r="0.16" fill="#fff"/>
          <circle cx="1.5" cy="0.55" r="0.1" fill="#006C35"/>
        </svg>
      );
    default:
      return <span>🌐</span>;
  }
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLocale }) => {
  const t = useTranslations('common.buttons');
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentConfig = localeConfig[currentLocale] || localeConfig.en;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Focus option when focusedIndex changes
  useEffect(() => {
    if (focusedIndex >= 0 && optionRefs.current[focusedIndex]) {
      optionRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => {
      if (!prev) {
        const currentIndex = locales.indexOf(currentLocale);
        setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
      } else {
        setFocusedIndex(-1);
      }
      return !prev;
    });
  }, [currentLocale]);

  const handleButtonKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      }
      const currentIndex = locales.indexOf(currentLocale);
      setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
    }
  }, [isOpen, currentLocale]);

  const handleLanguageSelect = useCallback((locale: Locale) => {
    saveLanguagePreference(locale);
    const newPath = getLocalizedPath(pathname, locale);
    router.push(newPath);
    setIsOpen(false);
    setFocusedIndex(-1);
  }, [pathname, router]);

  const handleOptionKeyDown = useCallback((event: React.KeyboardEvent, locale: Locale, index: number) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleLanguageSelect(locale);
        break;
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex((prev) => (prev < locales.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : locales.length - 1));
        break;
      case 'Home':
        event.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setFocusedIndex(locales.length - 1);
        break;
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      case 'Tab':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
    }
  }, [handleLanguageSelect]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Bouton de sélection dans la Topbar : [ Drapeau ] [ Nom de la langue ] */}
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleButtonKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t('selectLanguage') || 'Select Language'}
        className={`
          inline-flex items-center gap-2 px-3 py-1.5 h-9 rounded-xl
          border transition-all duration-200 select-none
          backdrop-blur-md shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50
          ${isOpen
            ? 'border-cyan-500/40 bg-white/[0.12] text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]'
            : 'border-white/10 hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white'
          }
        `}
      >
        {/* Drapeau clairement visible avec bords arrondis */}
        <span className="inline-flex shrink-0 w-5 h-3.5 rounded-[3px] overflow-hidden shadow-xs border border-white/20" aria-hidden="true">
          <FlagIcon locale={currentLocale} />
        </span>

        {/* Nom de la langue actuellement sélectionnée */}
        <span className="text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap">
          {currentConfig.nativeName}
        </span>

        {/* Flèche d'ouverture */}
        <ChevronDown 
          className={`h-3.5 w-3.5 text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-cyan-400' : 'group-hover:text-slate-200'
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Menu déroulant : Drapeau + Nom de la langue avec espacement harmonieux */}
      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-56 max-h-[min(75vh,380px)] overflow-y-auto p-1.5 bg-slate-900/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150"
          role="listbox"
          aria-label={t('selectLanguage') || 'Select Language'}
          aria-activedescendant={focusedIndex >= 0 ? `language-option-${locales[focusedIndex]}` : undefined}
        >
          <div className="px-2.5 py-1.5 mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-white/5 flex items-center justify-between">
            <span>{t('selectLanguage') || 'Language'}</span>
            <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-white/5 text-slate-400 font-mono">14</span>
          </div>

          <div className="flex flex-col gap-0.5">
            {locales.map((locale, index) => {
              const config = localeConfig[locale];
              const isSelected = locale === currentLocale;

              return (
                <button
                  key={locale}
                  id={`language-option-${locale}`}
                  ref={(el) => { optionRefs.current[index] = el; }}
                  onClick={() => handleLanguageSelect(locale)}
                  onKeyDown={(e) => handleOptionKeyDown(e, locale, index)}
                  className={`
                    flex items-center justify-between w-full px-2.5 py-2 rounded-xl text-xs sm:text-sm text-left
                    transition-all duration-150 focus:outline-none
                    ${isSelected 
                      ? 'bg-gradient-to-r from-indigo-500/20 to-cyan-500/10 text-cyan-300 font-semibold border border-cyan-500/30 shadow-xs' 
                      : 'text-slate-300 hover:bg-white/[0.08] hover:text-white border border-transparent'
                    }
                  `}
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={focusedIndex === index ? 0 : -1}
                  dir="ltr"
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    <span className="inline-flex shrink-0 w-5 h-3.5 rounded-[3px] overflow-hidden shadow-xs border border-white/20" aria-hidden="true">
                      <FlagIcon locale={locale} />
                    </span>
                    <span className="truncate">{config.nativeName}</span>
                  </span>

                  {isSelected && (
                    <Check className="h-3.5 w-3.5 shrink-0 text-cyan-400 ml-2" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
