'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  FileSignature,
  Trash2,
  RefreshCw,
  Minimize2,
  Lock,
  ScanText,
  Split,
  FileEdit,
  PenTool,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';

interface InteractiveTreeShowcaseProps {
  locale: Locale;
}

interface TreeNode {
  id: string;
  name: string;
  category: string;
  href: string;
  color: string;
  badgeBg: string;
  badgeBorder: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export const InteractiveTreeShowcase: React.FC<InteractiveTreeShowcaseProps> = ({ locale }) => {
  const t = useTranslations();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const treeNodes: TreeNode[] = [
    {
      id: 'sign',
      name: 'Sign PDF',
      category: 'Signature',
      href: `/${locale}/tools/sign-pdf`,
      color: 'text-amber-400',
      badgeBg: 'bg-amber-500/10 hover:bg-amber-500/20',
      badgeBorder: 'border-amber-500/30 hover:border-amber-400',
      icon: FileSignature,
      description: 'Signatures électroniques sécurisées',
    },
    {
      id: 'delete-pages',
      name: 'Delete Pages',
      category: 'Organisation',
      href: `/${locale}/tools/delete-pages`,
      color: 'text-rose-400',
      badgeBg: 'bg-rose-500/10 hover:bg-rose-500/20',
      badgeBorder: 'border-rose-500/30 hover:border-rose-400',
      icon: Trash2,
      description: 'Suppression ciblée de pages',
    },
    {
      id: 'convert',
      name: 'Convert',
      category: 'Conversion',
      href: `/${locale}#studio-section`,
      color: 'text-sky-400',
      badgeBg: 'bg-sky-500/10 hover:bg-sky-500/20',
      badgeBorder: 'border-sky-500/30 hover:border-sky-400',
      icon: RefreshCw,
      description: 'Word, Excel, Images & HTML',
    },
    {
      id: 'compress',
      name: 'Compress',
      category: 'Optimisation',
      href: `/${locale}/tools/compress-pdf`,
      color: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 hover:bg-emerald-500/20',
      badgeBorder: 'border-emerald-500/30 hover:border-emerald-400',
      icon: Minimize2,
      description: 'Réduction de poids sans perte',
    },
    {
      id: 'encrypt',
      name: 'Encrypt',
      category: 'Sécurité',
      href: `/${locale}/tools/encrypt-pdf`,
      color: 'text-amber-300',
      badgeBg: 'bg-amber-400/10 hover:bg-amber-400/20',
      badgeBorder: 'border-amber-400/30 hover:border-amber-300',
      icon: Lock,
      description: 'Chiffrement AES 256-bit local',
    },
    {
      id: 'ocr',
      name: 'OCR',
      category: 'Reconnaissance',
      href: `/${locale}/tools/ocr-pdf`,
      color: 'text-indigo-400',
      badgeBg: 'bg-indigo-500/10 hover:bg-indigo-500/20',
      badgeBorder: 'border-indigo-500/30 hover:border-indigo-400',
      icon: ScanText,
      description: 'Extraction optique de texte',
    },
    {
      id: 'split-merge',
      name: 'Split / Merge',
      category: 'Structure',
      href: `/${locale}/tools/split-pdf`,
      color: 'text-teal-400',
      badgeBg: 'bg-teal-500/10 hover:bg-teal-500/20',
      badgeBorder: 'border-teal-500/30 hover:border-teal-400',
      icon: Split,
      description: 'Division & fusion instantanées',
    },
    {
      id: 'edit',
      name: 'Edit Text & Media',
      category: 'Édition',
      href: `/${locale}/tools/edit-pdf`,
      color: 'text-lime-400',
      badgeBg: 'bg-lime-500/10 hover:bg-lime-500/20',
      badgeBorder: 'border-lime-500/30 hover:border-lime-400',
      icon: FileEdit,
      description: 'Modification directe du contenu',
    },
    {
      id: 'annotate',
      name: 'Annotate',
      category: 'Création',
      href: `/${locale}/tools/pdf-annotate`,
      color: 'text-orange-400',
      badgeBg: 'bg-orange-500/10 hover:bg-orange-500/20',
      badgeBorder: 'border-orange-500/30 hover:border-orange-400',
      icon: PenTool,
      description: 'Surlignage, formes & notes',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 px-2 sm:px-4">
      {/* Centerpiece Panoramic Frame */}
      <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 bg-slate-950/70 shadow-[0_0_40px_rgba(16,185,129,0.2)] backdrop-blur-xl group">
        
        {/* Subtle Ambient Leaf Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

        {/* Master Panoramic Image */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[24/10] overflow-hidden">
          <Image
            src="/images/brand/pdfruche-hero-panoramic.jpg"
            alt="PDFRuche Living Ecosystem"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />

          {/* Gradient Overlay for bottom blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Top Live Badge */}
          <div className="absolute top-3 left-4 sm:top-5 sm:left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-emerald-500/40 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-semibold text-emerald-300">
              {t('home.v4.tree.badge') || 'L\'Écosystème Vivant PDFRuche'}
            </span>
          </div>
        </div>

        {/* 9 Interactive Capabilities Row (Tree Branches Navigation) */}
        <div className="relative z-10 p-4 sm:p-6 pt-2 bg-slate-950/90 border-t border-emerald-500/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('home.v4.tree.branchesTitle') || 'Accès Direct aux Branches Principales'}</span>
            </div>
            <Link
              href="#studio-section"
              className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>{t('home.v4.tree.allBranches') || 'Voir les 131 outils'}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {treeNodes.map((node) => {
              const Icon = node.icon;
              const isHovered = activeNode === node.id;

              return (
                <Link
                  key={node.id}
                  href={node.href}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`group/node flex items-center gap-2.5 p-2.5 rounded-xl border transition-all duration-300 backdrop-blur-sm ${
                    node.badgeBg
                  } ${node.badgeBorder} ${
                    isHovered ? 'scale-105 shadow-lg shadow-emerald-950/50' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-slate-900/80 border border-white/10 ${node.color} group-hover/node:rotate-6 transition-transform`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-100 truncate group-hover/node:text-emerald-300 transition-colors">
                      {node.name}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">
                      {node.description}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default InteractiveTreeShowcase;
