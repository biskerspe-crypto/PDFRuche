'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  Search,
  Star,
  Sparkles,
  Edit,
  FolderOpen,
  FileImage,
  FileText,
  Settings,
  ShieldCheck,
  Flame,
  Filter,
} from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import { getDisplayTools, getDisplayToolsByCategory, getToolById, toV2Id } from '@/config/tools';
import { getToolIcon } from '@/config/icons';
import { useFavorites } from '@/hooks/useFavorites';
import { toolMatchesQuery } from '@/lib/utils/search';
import { type Tool, type ToolCategory } from '@/types/tool';

interface InteractiveToolsStudioProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

type CategoryTab = 'all' | 'popular' | 'favorites' | ToolCategory;

// Formats : mots-clés multilingues par filtre.
// Le filtre vérifie que le titre ou la description affichée (contenu localisé)
// contient le mot concerné, quelle que soit la langue de l'utilisateur
// (en, fr, es, de, pt, it, ar, ja, ko, zh, zh-TW, vi, id, ro).
// Comparaison insensible à la casse et aux accents (normalize NFD).
const FORMAT_KEYWORDS: Record<string, string[]> = {
  page: [
    'page', 'pages',
    'pagina', 'paginas', 'pagine',
    'seite', 'seiten',
    'pagini',
    'trang',
    'halaman',
    'ページ',
    '페이지',
    '页面', '页',
    '頁面', '頁',
    'صفحة', 'صفحات',
  ],
  word: ['word', 'docx'],
  excel: ['excel', 'xlsx', 'xls', 'エクセル', '엑셀', '表格'],
  image: [
    'image', 'images',
    'imagen', 'imagenes',
    'imagem', 'imagens',
    'immagine', 'immagini',
    'bild', 'bilder',
    'imagine', 'imagini',
    'gambar',
    'hinh',
    '画像', '写真',
    '이미지', '사진',
    '图像', '图片', '照片',
    '圖像', '圖片',
    'صورة', 'صور',
    'jpg', 'jpeg', 'png',
    'photo', 'foto',
  ],
  security: [
    'secur', 'protect', 'encrypt', 'decrypt', 'password', 'permission',
    'sign', 'signature', 'signatur', 'signing', 'signed', 'signer',
    'unlock', 'lock', 'watermark', 'redact',
    'chiffr', 'verrouill', 'deverrouill', 'filigrane', 'mot de passe',
    'seguridad', 'cifr', 'bloque', 'desbloque', 'firmar', 'firma', 'contrasena',
    'seguranca', 'criptograf', 'assinar', 'assinatura',
    'sicurezza', 'protez', 'crittograf', 'blocca', 'sblocca', 'firmare', 'filigrana',
    'sicherheit', 'schutz', 'schutzen', 'verschlussel', 'sperr', 'entsperr', 'signier', 'wasserzeichen', 'passwort',
    'securitate', 'protectie', 'cript', 'deblocare', 'semn', 'semnatur', 'filigran', 'parola',
    'bao mat', 'bao ve', 'ma hoa', 'mo khoa', 'chu ky', 'hinh mo', 'mat khau',
    'keamanan', 'perlindungan', 'melindungi', 'enkripsi', 'kunci', 'tanda tangan', 'tanda air', 'kata sandi',
    'セキュリティ', '保護', '暗号化', 'ロック', '署名', '透かし', 'パスワード',
    '보안', '보호', '암호화', '잠금', '서명', '워터마크', '비밀번호',
    '安全', '保护', '加密', '锁定', '解锁', '签名', '水印', '密码',
    '保護', '鎖定', '解鎖', '簽名', '浮水印', '密碼',
    'امان', 'حماية', 'تشفير', 'قفل', 'توقيع', 'علامة مائية', 'كلمة مرور',
    'unlock-pdf', 'protect-pdf', 'sign-pdf',
  ],
  ocr: [
    'ocr',
    '文字認識', '光学', '光學',
    '광학', '문자 인식',
    '光学字符', '文字识别',
    'reconnaissance optique',
    'texterkennung',
    'reconocimiento',
    '光學字元',
    'التعرف الضوئي',
  ],
};

const normalizeForMatch = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Vérifie que le mot-clé apparaît comme mot dans le texte affiché.
// - Préfixe en début de mot (\bkeyword) pour gérer pluriels et dérivés
//   (page -> pages, secur -> security/sécurité, protect -> protection).
// - Cas exact (\bkeyword\b) pour "excel" (évite "excellent")
//   et "sign" (évite "signets"/bookmarks en français, tout en gardant
//   "signature"/"signer" via leurs propres mots-clés).
// - Includes simple pour les écritures sans espaces (CJK, japonais, coréen, arabe).
// Évite les faux positifs de type "word" dans "password"/"keywords"
// ou "sign" dans "design".
const haystackContainsKeyword = (haystack: string, keyword: string): boolean => {
  if (!keyword) return false;
  const isLatin = /^[a-z0-9][a-z0-9 ']*$/i.test(keyword);
  if (!isLatin) {
    return haystack.includes(keyword);
  }
  try {
    if (keyword === 'excel' || keyword === 'excels' || keyword === 'sign' || keyword === 'signs') {
      return new RegExp(`\\b${escapeRegExp(keyword)}\\b`).test(haystack);
    }
    return new RegExp(`\\b${escapeRegExp(keyword)}`).test(haystack);
  } catch {
    return haystack.includes(keyword);
  }
};

// Exigence utilisateur : le filtre affiche uniquement les outils dont le titre
// ou la description (contenu localisé affiché sur la carte) contient le mot concerné.
const toolMatchesFormat = (
  tool: Tool,
  formatKey: string,
  localized?: { title: string; description: string }
): boolean => {
  const keywords = FORMAT_KEYWORDS[formatKey];
  if (!keywords) return true;
  const normalizedKeywords = keywords.map(normalizeForMatch);
  const title = localized?.title || tool.id;
  const desc = localized?.description || '';
  const haystack = normalizeForMatch(`${title} ${desc}`);
  return normalizedKeywords.some((kw) => haystackContainsKeyword(haystack, kw));
};

interface CategoryConfig {
  id: CategoryTab;
  label: string;
  icon: React.ElementType;
  gradient: string;
  textColor: string;
  badgeBg: string;
}

export const InteractiveToolsStudio: React.FC<InteractiveToolsStudioProps> = ({
  locale,
  localizedToolContent,
}) => {
  const t = useTranslations();
  // Listing V2 uniquement — les cartes d'anciennes versions sont cachées.
  const allTools = useMemo(() => getDisplayTools(), []);
  const { favorites, isLoaded: favoritesLoaded, isFavorite, toggleFavorite } = useFavorites();

  const openTool = useCallback(
    (slug: string) => window.open(`/${locale}/tools/${slug}`, '_blank', 'noopener,noreferrer'),
    [locale]
  );

  const [activeCategory, setActiveCategory] = useState<CategoryTab>('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');

  // Deep-link depuis le bouton Favoris du header : #studio-favorites
  // présélectionne l'onglet Favoris et fait défiler jusqu'au studio.
  // Écoute aussi l'événement 'show-studio-favorites' pour les clics
  // répétés sur la page d'accueil (le hash seul ne change pas).
  useEffect(() => {
    const applyFavorites = () => {
      setActiveCategory('favorites');
      setSelectedFormat('all');
      document.getElementById('studio-section')?.scrollIntoView({ behavior: 'smooth' });
    };
    const applyHash = () => {
      if (window.location.hash === '#studio-favorites') {
        applyFavorites();
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    window.addEventListener('show-studio-favorites', applyFavorites);
    return () => {
      window.removeEventListener('hashchange', applyHash);
      window.removeEventListener('show-studio-favorites', applyFavorites);
    };
  }, []);

  // Categories config with dynamic translations
  const categories: CategoryConfig[] = [
    {
      id: 'all',
      label: t('home.v4.studio.categories.all', { count: allTools.length }) || `Tous les Outils (${allTools.length})`,
      icon: Sparkles,
      gradient: 'from-indigo-500 to-cyan-500',
      textColor: 'text-indigo-400',
      badgeBg: 'bg-indigo-500/10 border-indigo-500/20',
    },
    {
      id: 'popular',
      label: t('home.v4.studio.categories.popular') || 'Popular',
      icon: Flame,
      gradient: 'from-red-500 to-rose-500',
      textColor: 'text-red-400',
      badgeBg: 'bg-red-500/10 border-red-500/20',
    },
    {
      id: 'favorites',
      label: t('home.v4.studio.categories.favorites', { count: favorites.length }) || `Favorites (${favorites.length})`,
      icon: Star,
      gradient: 'from-yellow-400 to-amber-500',
      textColor: 'text-yellow-400',
      badgeBg: 'bg-yellow-500/10 border-yellow-500/20',
    },
    {
      id: 'edit-annotate',
      label: t('home.v4.studio.categories.editAnnotate') || 'Edit & Annotate',
      icon: Edit,
      gradient: 'from-blue-500 to-indigo-500',
      textColor: 'text-blue-400',
      badgeBg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      id: 'organize-manage',
      label: t('home.v4.studio.categories.organizeManage') || 'Organize & Manage',
      icon: FolderOpen,
      gradient: 'from-purple-500 to-fuchsia-500',
      textColor: 'text-purple-400',
      badgeBg: 'bg-purple-500/10 border-purple-500/20',
    },
    {
      id: 'convert-to-pdf',
      label: t('home.v4.studio.categories.convertToPdf') || 'Convert to PDF',
      icon: FileImage,
      gradient: 'from-cyan-500 to-teal-500',
      textColor: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      id: 'convert-from-pdf',
      label: t('home.v4.studio.categories.convertFromPdf') || 'Convert from PDF',
      icon: FileText,
      gradient: 'from-emerald-500 to-green-500',
      textColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      id: 'optimize-repair',
      label: t('home.v4.studio.categories.optimizeRepair') || 'Optimize & Repair',
      icon: Settings,
      gradient: 'from-orange-500 to-amber-500',
      textColor: 'text-orange-400',
      badgeBg: 'bg-orange-500/10 border-orange-500/20',
    },
    {
      id: 'secure-pdf',
      label: t('home.v4.studio.categories.securePdf') || 'Security & Protect',
      icon: ShieldCheck,
      gradient: 'from-rose-500 to-red-500',
      textColor: 'text-rose-400',
      badgeBg: 'bg-rose-500/10 border-rose-500/20',
    },
  ];

  // Formats filter list — "PDF" renommé en "Page" (demande utilisateur).
  // Les chips restent identiques dans les 14 langues (en, fr, es, de, pt, it, ar, ja, ko, zh, zh-TW, vi, id, ro).
  const formatChips = ['all', 'Page', 'Word', 'Excel', 'Image', 'Security', 'OCR'];

  // Popular slugs (V2 uniquement)
  const popularSlugs = useMemo(
    () => [
      'merge-pdf-v2',
      'split-pdf-v2',
      'compress-pdf-v2',
      'sign-pdf-v2',
      'pdf-to-docx-v2',
      'word-to-pdf-v2',
      'encrypt-pdf-v2',
      'decrypt-pdf-v2',
      'organize-pdf-v2',
      'crop-pdf-v2',
      'add-watermark-v2',
      'flatten-pdf-v2',
    ],
    []
  );

  // Filter tools
  const filteredTools = useMemo(() => {
    let list = allTools;

    // Filter by Category
    if (activeCategory === 'popular') {
      list = list.filter((t) => popularSlugs.includes(t.slug));
    } else if (activeCategory === 'favorites') {
      list = favorites
        .map((id) => getToolById(toV2Id(id)))
        .filter((t): t is Tool => t !== undefined && !t.disabled);
    } else if (activeCategory !== 'all') {
      list = getDisplayToolsByCategory(activeCategory as ToolCategory);
    }

    // Filter by Format — affiche uniquement les outils dont le titre ou la
    // description contient le mot concerné (toutes langues). Ex. "Page" ->
    // "Extract Pages", "Supprimer les pages", "Seiten extrahieren", "ページ抽出".
    if (selectedFormat !== 'all') {
      const f = selectedFormat.toLowerCase();
      list = list.filter((t) => toolMatchesFormat(t, f, localizedToolContent?.[t.id]));
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      list = list.filter((t) =>
        toolMatchesQuery(t, searchQuery, localizedToolContent?.[t.id])
      );
    }

    return list;
  }, [allTools, activeCategory, popularSlugs, favorites, selectedFormat, searchQuery, localizedToolContent]);

  const getToolTitle = (tool: Tool) => localizedToolContent?.[tool.id]?.title || tool.id;
  const getToolDesc = (tool: Tool) => localizedToolContent?.[tool.id]?.description || '';

  return (
    <section id="studio-section" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header — parfaitement centré */}
        <div className="flex flex-col items-center text-center mb-12 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>{t('home.v4.studio.badge') || '131+ Outils Gratuits • Espace Interactif'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-center">
              {t('home.v4.studio.title') || 'Explore the Complete'} <span className="lv4-text-prism">{t('home.v4.studio.titleAccent') || 'Tools'}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 whitespace-nowrap text-center mx-auto">
              {t('home.v4.studio.subtitle', { count: allTools.length }) || `Instant access to ${allTools.length}+ free utilities. Click any card to launch its specialized workbench.`}
            </p>
          </div>

          {/* Quick inline search — centré sous le bloc */}
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('home.v4.studio.searchPlaceholder') || "Filter tools..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/60 transition-all text-left"
            />
          </div>
        </div>

        {/* Category Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedFormat('all');
                }}
                className={`lv4-tab-btn flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap border transition-all ${
                  isActive
                    ? 'active border-transparent'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : cat.textColor}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Format Sub-Filters */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8 pt-2 border-t border-white/5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium text-slate-400 mr-1 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" />
              <span>{t('home.v4.studio.formatLabel') || 'Format:'}</span>
            </span>
            {formatChips.map((chip) => (
              <button
                key={chip}
                onClick={() => setSelectedFormat(chip)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedFormat === chip
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white/[0.04] text-slate-400 hover:text-slate-200 hover:bg-white/[0.08]'
                }`}
              >
                {chip === 'all' ? (t('home.v4.studio.allFormats') || 'All Formats') : chip}
              </button>
            ))}
          </div>

          <div className="text-xs font-medium text-slate-400">
            {t('home.v4.studio.showingTools', { count: filteredTools.length }) || `Showing ${filteredTools.length} tools`}
          </div>
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredTools.map((tool) => {
              const Icon = getToolIcon(tool.icon);
              const isFav = isFavorite(tool.id);
              const isPopular = popularSlugs.includes(tool.slug);
              const title = getToolTitle(tool);
              const desc = getToolDesc(tool);

              return (
                <div
                  key={tool.id}
                  role="button"
                  tabIndex={0}
                  aria-label={t('home.v4.studio.openToolAria', { title }) || `Open ${title}`}
                  onClick={() => openTool(tool.slug)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openTool(tool.slug);
                    }
                  }}
                  className="lv4-studio-card group flex flex-col gap-3 p-5 border border-white/10 hover:border-sky-400 hover:shadow-[0_8px_30px_rgba(56,189,248,0.20)] hover:-translate-y-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 focus-visible:border-sky-400 transition-all duration-300"
                >
                  {/* Ligne 1 : icône à gauche + titre à droite, titre centré verticalement */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/25 transition-all duration-300 shadow-md shrink-0">
                      <Icon className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
                    </div>
                    <h3 className="flex-1 min-w-0 text-[15px] sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight truncate">
                      {title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {isPopular && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">
                          {t('home.v4.studio.hotBadge') || 'HOT'}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleFavorite(tool.id);
                        }}
                        onKeyDown={(e) => {
                          e.stopPropagation();
                        }}
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer relative z-10 ${
                          isFav
                            ? 'bg-yellow-500/20 border-yellow-500/40 text-yellow-400'
                            : 'bg-white/5 border-white/10 text-slate-500 hover:text-yellow-400 hover:bg-white/10'
                        }`}
                        aria-label={isFav ? (t('home.v4.studio.favRemove') || 'Remove from favorites') : (t('home.v4.studio.favAdd') || 'Add to favorites')}
                        tabIndex={0}
                      >
                        <Star className={`w-3.5 h-3.5 ${isFav ? 'fill-yellow-400' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Ligne 2 : description pleine largeur, de gauche à droite */}
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-light w-full">
                    {desc || (t('home.v4.studio.defaultDesc') || 'Fast, local browser-based PDF processing.')}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 lv4-glass-panel rounded-3xl p-8 border border-white/10 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{t('home.v4.studio.emptyTitle') || 'No tools matched your criteria'}</h3>
            <p className="text-xs text-slate-400 mb-6">
              {t('home.v4.studio.emptyDesc') || 'Try adjusting your search terms or clearing active filters.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('popular');
                setSelectedFormat('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-md"
            >
              {t('home.v4.studio.resetFilters') || 'Reset Filters'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default InteractiveToolsStudio;
