'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Tool, ToolCategory } from '@/types/tool';
import { Card } from '@/components/ui/Card';
import { ArrowUpRight } from 'lucide-react';
import { getToolIcon } from '@/config/icons';
import { FavoriteButton } from '@/components/ui/FavoriteButton';

export interface ToolCardProps {
  /** Tool data to display */
  tool: Tool;
  /** Current locale for URL generation */
  locale: string;
  /** Optional additional CSS classes */
  className?: string;
  /** Localized content */
  localizedContent?: { title: string; description: string };
}

const categoryTranslationKeys: Record<ToolCategory, string> = {
  'edit-annotate': 'editAnnotate',
  'convert-to-pdf': 'convertToPdf',
  'convert-from-pdf': 'convertFromPdf',
  'organize-manage': 'organizeManage',
  'optimize-repair': 'optimizeRepair',
  'secure-pdf': 'securePdf',
};

/**
 * ToolCard component displays a single PDF tool with a sleek, compact layout
 * inspired by Niveau 2 (Version B) for optimal display of 131 tools with reduced height.
 */
export function ToolCard({ tool, locale, className = '', localizedContent }: ToolCardProps) {
  const t = useTranslations();
  const toolUrl = `/${locale}/tools/${tool.slug}`;

  // Get a human-readable name from the tool ID
  // Use localized title if available, otherwise fallback to formatting the ID
  const toolName = localizedContent?.title || tool.id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Generate a description from features
  // Use localized description (metaDescription) if available
  const description = localizedContent?.description || tool.features
    .slice(0, 3)
    .map(f => f.replace(/-/g, ' '))
    .join(', ');

  const IconComponent = getToolIcon(tool.icon);

  return (
    <Link
      href={toolUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] focus-visible:ring-offset-2 rounded-2xl ${className}`}
      data-testid="tool-card"
    >
      <Card
        size="sm"
        className="h-full p-3.5 sm:p-4 rounded-2xl glass-card hover:bg-[hsl(var(--color-card))/0.9] border border-[hsl(var(--color-border)/0.7)] hover:border-[hsl(var(--color-primary)/0.4)] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 relative overflow-hidden flex items-start gap-3.5"
        data-testid="tool-card-container"
      >
        {/* Favorite Star Button at top-right */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <FavoriteButton toolId={tool.id} size="sm" />
        </div>

        {/* Tool Icon (Pastille badge like Image 1) */}
        <div
          className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-900/60 border border-white/10 shadow-sm flex items-center justify-center group-hover:scale-105 group-hover:border-white/20 transition-all duration-200"
          data-testid="tool-card-icon"
          aria-hidden="true"
        >
          <IconComponent className="w-5.5 h-5.5 sm:w-6 sm:h-6" data-icon={tool.icon} />
        </div>

        {/* Tool Info (Compact Title & Description) */}
        <div className="flex-1 min-w-0 pr-6">
          <div className="flex items-center gap-1">
            <h3
              className="text-sm sm:text-base font-bold text-[hsl(var(--color-card-foreground))] truncate group-hover:text-[hsl(var(--color-primary))] transition-colors"
              data-testid="tool-card-name"
              title={toolName}
            >
              {toolName}
            </h3>
            <ArrowUpRight className="w-3.5 h-3.5 text-[hsl(var(--color-muted-foreground))] opacity-0 group-hover:opacity-100 group-hover:text-[hsl(var(--color-primary))] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </div>

          <p
            className="text-xs text-[hsl(var(--color-muted-foreground))] line-clamp-2 mt-0.5 leading-relaxed"
            data-testid="tool-card-description"
            title={description}
          >
            {description}
          </p>
        </div>
      </Card>
    </Link>
  );
}

export default ToolCard;
