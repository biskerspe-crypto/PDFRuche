'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';

export const QuickFaqV4: React.FC<{ locale: Locale }> = () => {
  const t = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: t('home.v4.faq.q1') || 'Are my documents safe, private, and truly never uploaded to any server?',
      a: t('home.v4.faq.a1') || 'Yes, 100%. PDFRuche runs completely in your browser via client-side WebAssembly. Your files are processed in local memory and are never transmitted over the internet or saved to any cloud server.',
    },
    {
      q: t('home.v4.faq.q2') || 'Are there any file size limitations or paywalls?',
      a: t('home.v4.faq.a2') || 'No artificial limits. You can process documents of virtually any size, merge dozens of PDFs at once, and use every single tool without subscriptions, paywalls, or hidden fees.',
    },
    {
      q: t('home.v4.faq.q3') || 'Can I use PDFRuche offline as a Progressive Web App (PWA)?',
      a: t('home.v4.faq.a3') || 'Absolutely. PDFRuche can be installed on macOS, Windows, Linux, Android, and iOS as a standalone PWA. Once loaded, the tools can work entirely offline without an internet connection.',
    },
    {
      q: t('home.v4.faq.q4') || 'What file formats are supported?',
      a: t('home.v4.faq.a4') || 'PDFRuche supports PDF, Microsoft Word (DOCX/DOC), Excel (XLSX/XLS), PowerPoint (PPTX/PPT), Images (JPG, PNG, WEBP, SVG, TIFF, BMP), Text (TXT, RTF), and EPUB.',
    },
    {
      q: t('home.v4.faq.q5') || 'How does client-side WebAssembly PDF processing work?',
      a: t('home.v4.faq.a5') || 'We compile high-performance C++ and Rust PDF rendering and transformation engines into WebAssembly (WASM). This allows your device CPU and GPU to execute complex operations directly within the browser tab at near-native speeds.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('home.v4.faq.badge') || 'Questions Fréquentes'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t('home.v4.faq.title') || 'Questions'} <span className="lv4-text-aurora">{t('home.v4.faq.titleAccent') || 'Fréquentes'}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 font-light">
            {t('home.v4.faq.subtitle') || 'Tout ce que vous devez savoir sur la confidentialité, la technologie et les capacités de PDFRuche.'}
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="lv4-glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-slate-300 group-hover:text-white transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-indigo-600/30 border-indigo-500/50 text-indigo-300' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 pt-4 animate-lv4-fade-up">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default QuickFaqV4;
