// PDFRuche — Clear & Colorful Modern Flat Design Tool Icons (131 Tools)
// Style: Multi-tone Flat Design, shapes filled with vibrant semantic colors (Image 1 style)
// High contrast, clear readability, transparent background

import React from 'react';

export interface ToolIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

const baseProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
};

/** PDF Multi Tool — Clear & Colorful Flat Vector Icon */
export function PdfMultiToolIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-multi-tool"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#6366F1" fillOpacity="0.15" stroke="#6366F1" strokeWidth="1.5" />
      <rect x="6" y="6" width="7" height="9" rx="1.5" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <line x1="8" y1="9" x2="11" y2="9" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8" y1="11.5" x2="11" y2="11.5" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="16" cy="15" r="4.5" fill="#F59E0B" />
      <path d="M14.5 15l1 1 2-2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Merge PDF — Clear & Colorful Flat Vector Icon */
export function MergePdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="merge-pdf"
      {...props}
    >
      <rect x="3" y="3" width="10" height="13" rx="2" fill="#6366F1" fillOpacity="0.85" stroke="#4F46E5" strokeWidth="1" />
      <line x1="5.5" y1="6.5" x2="9.5" y2="6.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      <line x1="5.5" y1="9" x2="8.5" y2="9" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      
      <rect x="8" y="8" width="13" height="13" rx="2" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
      <line x1="11" y1="12" x2="18" y2="12" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11" y1="15" x2="16" y2="15" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      
      <circle cx="15.5" cy="7.5" r="3.5" fill="#10B981" />
      <path d="M14 7.5h3m-1.5-1.5l1.5 1.5-1.5 1.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Split PDF — Clear & Colorful Flat Vector Icon */
export function SplitPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="split-pdf"
      {...props}
    >
      {/* Document gauche (Indigo) */}
      <rect x="2.5" y="3" width="8" height="14" rx="1.8" fill="#6366F1" stroke="#4F46E5" strokeWidth="0.8" />
      <line x1="4.8" y1="6.5" x2="8.5" y2="6.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      <line x1="4.8" y1="9.5" x2="8.5" y2="9.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.8" />
      <line x1="4.8" y1="12.5" x2="7.5" y2="12.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6" />

      {/* Document droit (Sky Blue) */}
      <rect x="13.5" y="3" width="8" height="14" rx="1.8" fill="#38BDF8" stroke="#0284C7" strokeWidth="0.8" />
      <line x1="15.5" y1="6.5" x2="19.2" y2="6.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      <line x1="15.5" y1="9.5" x2="19.2" y2="9.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.8" />
      <line x1="15.5" y1="12.5" x2="18.2" y2="12.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6" />

      {/* Ligne verticale de coupe en pointillés */}
      <line x1="12" y1="2" x2="12" y2="13.5" stroke="#E2E8F0" strokeWidth="1.2" strokeDasharray="1.5 1.5" strokeLinecap="round" />

      {/* Ciseaux de découpe de précision */}
      {/* Lames croisées */}
      <path d="M9.5 14L12 16.5l2.5-2.5" stroke="#E2E8F0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 16.5L8.5 20.5" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 16.5l3.5 4" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />

      {/* Anneaux de ciseaux (Rose corail) */}
      <circle cx="7.5" cy="20.5" r="2.3" fill="#F43F5E" />
      <circle cx="7.5" cy="20.5" r="1" fill="#0F172A" />
      <circle cx="16.5" cy="20.5" r="2.3" fill="#F43F5E" />
      <circle cx="16.5" cy="20.5" r="1" fill="#0F172A" />

      {/* Pivot central doré */}
      <circle cx="12" cy="16.5" r="1" fill="#F59E0B" />
    </svg>
  );
}

/** Extract Pages — Clear & Colorful Flat Vector Icon */
export function ExtractPagesIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="extract-pages"
      {...props}
    >
      <rect x="3" y="6" width="11" height="14" rx="1.5" fill="#64748B" fillOpacity="0.4" />
      <rect x="5" y="4" width="11" height="14" rx="1.5" fill="#94A3B8" fillOpacity="0.7" />
      
      <rect x="8" y="7" width="12" height="14" rx="1.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />
      <line x1="11" y1="11" x2="17" y2="11" stroke="#0284C7" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11" y1="14" x2="15" y2="14" stroke="#0284C7" strokeWidth="1.2" strokeLinecap="round" />
      
      <circle cx="17" cy="4" r="3.5" fill="#10B981" />
      <path d="M17 6V2.5m-1.5 1.5l1.5-1.5 1.5 1.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Organize PDF — Clear & Colorful Flat Vector Icon */
export function OrganizePdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="organize-pdf"
      {...props}
    >
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v2H3V7z" fill="#D97706" />
      
      <rect x="5" y="7.5" width="14" height="9" rx="1" fill="#FFFFFF" />
      <line x1="8" y1="10.5" x2="14" y2="10.5" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8" y1="13" x2="12" y2="13" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
      
      <path d="M2.5 10.5h19l-1.8 8.5a2 2 0 0 1-2 1.5H6.3a2 2 0 0 1-2-1.5L2.5 10.5z" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
    </svg>
  );
}

/** Delete Pages — Clear & Colorful Flat Vector Icon */
export function DeletePagesIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="delete-pages"
      {...props}
    >
      <path d="M4 4a2 2 0 0 1 2-2h8l5 5v8a2 2 0 0 1-2 2h-3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M14 2v5h5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      <line x1="7" y1="10" x2="12" y2="10" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7" y1="13" x2="11" y2="13" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
      
      <circle cx="16" cy="16" r="5" fill="#F43F5E" />
      <line x1="13.5" y1="16" x2="18.5" y2="16" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

/** OCR PDF — Clear & Colorful Flat Vector Icon */
export function OcrPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="ocr-pdf"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <line x1="7" y1="7" x2="13" y2="7" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7" y1="10" x2="17" y2="10" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7" y1="13" x2="15" y2="13" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7" y1="16" x2="12" y2="16" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      
      <rect x="2" y="11" width="20" height="2" rx="1" fill="#06B6D4" opacity="0.9" />
      <path d="M3 8V5h3" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 8V5h-3" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 16v3h3" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 16v3h-3" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Alternate Merge — Clear & Colorful Flat Vector Icon */
export function AlternateMergeIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="alternate-merge"
      {...props}
    >
      <rect x="3" y="4" width="7" height="9" rx="1.5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#F43F5E" stroke="#E11D48" strokeWidth="1" />
      <rect x="13" y="4" width="8" height="17" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.2" />
      
      <rect x="15" y="7" width="4" height="2" rx="0.5" fill="#38BDF8" />
      <rect x="15" y="11" width="4" height="2" rx="0.5" fill="#F43F5E" />
      <rect x="15" y="15" width="4" height="2" rx="0.5" fill="#38BDF8" />
    </svg>
  );
}

/** Add Attachments — Clear & Colorful Flat Vector Icon */
export function AddAttachmentsIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="add-attachments"
      {...props}
    >
      <rect x="4" y="3" width="14" height="18" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <line x1="7" y1="7" x2="13" y2="7" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7" y1="10" x2="11" y2="10" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
      
      <path d="M12 15l2.5-2.5a2 2 0 0 1 2.8 2.8L13.5 19a3.5 3.5 0 0 1-5-5L12 10.5a5 5 0 0 1 7 7l-1 1" fill="none" stroke="#F43F5E" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="18" cy="6" r="3" fill="#10B981" />
      <path d="M18 4.5v3m-1.5-1.5h3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** Extract Attachments — Clear & Colorful Flat Vector Icon */
export function ExtractAttachmentsIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="extract-attachments"
      {...props}
    >
      <rect x="4" y="3" width="16" height="13" rx="2" fill="#6366F1" fillOpacity="0.1" stroke="#6366F1" strokeWidth="1" />
      <path d="M10 8.5l2-2a1.8 1.8 0 0 1 2.5 2.5L11 12.5a3 3 0 0 1-4.2-4.2l3-3" fill="none" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="18" r="4.5" fill="#10B981" />
      <path d="M12 15.5v5m-2-2l2 2 2-2" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Edit Attachments — Clear & Colorful Flat Vector Icon */
export function EditAttachmentsIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="edit-attachments"
      {...props}
    >
      <rect x="3" y="4" width="14" height="16" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M8 13l2-2a2 2 0 0 1 2.8 2.8L10 16.5a3 3 0 0 1-4.2-4.2l2.5-2.5" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
      
      <g transform="translate(10, 8)">
        <path d="M7 1l2 2-5.5 5.5-2.5.5.5-2.5z" fill="#FBBF24" stroke="#B45309" strokeWidth="0.8" />
        <path d="M1.5 6.5l2 2" stroke="#FFFFFF" strokeWidth="0.8" />
        <circle cx="8" cy="2" r="1" fill="#F43F5E" />
      </g>
    </svg>
  );
}

/** Divide Pages — Clear & Colorful Flat Vector Icon */
export function DividePagesIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="divide-pages"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <line x1="12" y1="3" x2="12" y2="21" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="3 1.5" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="3 1.5" />
      <rect x="5" y="5" width="5" height="5" rx="1" fill="#38BDF8" opacity="0.6" />
      <rect x="14" y="5" width="5" height="5" rx="1" fill="#F59E0B" opacity="0.6" />
      <rect x="5" y="14" width="5" height="5" rx="1" fill="#10B981" opacity="0.6" />
      <rect x="14" y="14" width="5" height="5" rx="1" fill="#6366F1" opacity="0.6" />
    </svg>
  );
}

/** Add Blank Page — Clear & Colorful Flat Vector Icon */
export function AddBlankPageIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="add-blank-page"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M15 2v5h5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      
      <circle cx="12" cy="14" r="4.5" fill="#10B981" />
      <path d="M12 11.5v5m-2.5-2.5h5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Reverse Pages — Clear & Colorful Flat Vector Icon */
export function ReversePagesIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="reverse-pages"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="9" cy="8" r="2.5" fill="#F43F5E" />
      <text x="9" y="9.2" fontSize="2.8" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">1</text>
      <circle cx="15" cy="16" r="2.5" fill="#0284C7" />
      <text x="15" y="17.2" fontSize="2.8" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">N</text>
      
      <path d="M9 12v3m-1.5-1.5L9 15l1.5-1.5" stroke="#F43F5E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 12V9m-1.5 1.5L15 9l1.5 1.5" stroke="#0284C7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Rotate Custom — Clear & Colorful Flat Vector Icon */
export function RotateCustomIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="rotate-custom"
      {...props}
    >
      <path d="M4 18a8 8 0 1 1 16 0" fill="none" stroke="#64748B" strokeWidth="1.5" strokeDasharray="2 1.5" />
      <line x1="12" y1="18" x2="19" y2="11" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="18" r="2.5" fill="#1E293B" stroke="#F59E0B" strokeWidth="1" />
      <circle cx="12" cy="18" r="1" fill="#FFFFFF" />
      
      <path d="M15 7a7.5 7.5 0 0 1 4 4" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
      <polyline points="18 12 19 11 20 12" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Rotate PDF — Clear & Colorful Flat Vector Icon */
export function RotatePdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="rotate-pdf"
      {...props}
    >
      <rect x="7" y="6" width="11" height="14" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <line x1="9.5" y1="10" x2="13.5" y2="10" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="9.5" y1="13" x2="15.5" y2="13" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
      
      <path d="M18 3.5A8.5 8.5 0 0 0 6.5 9" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
      <polyline points="6 5 6.5 9 10.5 9.5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

/** Overlay PDF — Clear & Colorful Flat Vector Icon */
export function OverlayPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="overlay-pdf"
      {...props}
    >
      <rect x="3" y="3" width="13" height="14" rx="2" fill="#8B5CF6" fillOpacity="0.4" stroke="#7C3AED" strokeWidth="1.2" />
      
      <rect x="8" y="7" width="13" height="14" rx="2" fill="#06B6D4" fillOpacity="0.45" stroke="#0284C7" strokeWidth="1.2" />
      <circle cx="14.5" cy="14" r="2.5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1" />
    </svg>
  );
}

/** Add Page Labels — Clear & Colorful Flat Vector Icon */
export function AddPageLabelsIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="add-page-labels"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M15 2v5h5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      
      <rect x="6" y="12" width="12" height="6" rx="1.5" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
      <text x="12" y="16.2" fontSize="3" textAnchor="middle" fill="#1E293B" fontWeight="bold">i, ii, iii</text>
    </svg>
  );
}

/** N-Up PDF — Clear & Colorful Flat Vector Icon */
export function NUpPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="n-up-pdf"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2.5" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.2" />
      
      <rect x="5.5" y="5.5" width="5.5" height="5.5" rx="1" fill="#38BDF8" />
      <rect x="13" y="5.5" width="5.5" height="5.5" rx="1" fill="#F43F5E" />
      <rect x="5.5" y="13" width="5.5" height="5.5" rx="1" fill="#FBBF24" />
      <rect x="13" y="13" width="5.5" height="5.5" rx="1" fill="#10B981" />
    </svg>
  );
}

/** Grid Combine — Clear & Colorful Flat Vector Icon */
export function GridCombineIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="grid-combine"
      {...props}
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#6366F1" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#6366F1" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#6366F1" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#6366F1" />
      <circle cx="12" cy="12" r="2.5" fill="#F59E0B" />
      <path d="M10 12h4m-2-2v4" stroke="#FFFFFF" strokeWidth="1" />
    </svg>
  );
}

/** Combine Single Page — Clear & Colorful Flat Vector Icon */
export function CombineSinglePageIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="combine-single-page"
      {...props}
    >
      <rect x="6" y="2" width="12" height="20" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.2" />
      <line x1="8.5" y1="6" x2="15.5" y2="6" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8.5" y1="10" x2="15.5" y2="10" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8.5" y1="14" x2="15.5" y2="14" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8.5" y1="18" x2="15.5" y2="18" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** View Metadata — Clear & Colorful Flat Vector Icon */
export function ViewMetadataIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="view-metadata"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M15 2v5h5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="12" cy="14" r="4.5" fill="#38BDF8" />
      <circle cx="12" cy="11.5" r="0.7" fill="#FFFFFF" />
      <line x1="12" y1="13.5" x2="12" y2="16.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Edit Metadata — Clear & Colorful Flat Vector Icon */
export function EditMetadataIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="edit-metadata"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M15 2v5h5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      
      <circle cx="12" cy="14" r="3.5" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
      <circle cx="12" cy="14" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

/** PDF to ZIP — Clear & Colorful Flat Vector Icon */
export function PdfToZipIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-zip"
      {...props}
    >
      <path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
      
      <line x1="12" y1="6" x2="12" y2="15" stroke="#64748B" strokeWidth="2" strokeDasharray="1 1" />
      <rect x="10.5" y="13" width="3" height="4" rx="0.8" fill="#F43F5E" />
    </svg>
  );
}

/** Compare PDFs — Clear & Colorful Flat Vector Icon */
export function ComparePdfsIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="compare-pdfs"
      {...props}
    >
      <rect x="3" y="4" width="8" height="15" rx="1.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />
      <line x1="5" y1="7" x2="9" y2="7" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="5" y1="10" x2="9" y2="10" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" />
      
      <rect x="13" y="4" width="8" height="15" rx="1.5" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.2" />
      <line x1="15" y1="7" x2="19" y2="7" stroke="#F43F5E" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="15" y1="10" x2="19" y2="10" stroke="#F43F5E" strokeWidth="1.2" strokeLinecap="round" />
      
      <circle cx="12" cy="15" r="3" fill="#10B981" />
      <path d="M10.5 15h3m-1-1l1 1-1 1" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Posterize PDF — Clear & Colorful Flat Vector Icon */
export function PosterizePdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="posterize-pdf"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <line x1="12" y1="3" x2="12" y2="21" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="7.5" cy="7.5" r="2.5" fill="#F43F5E" />
      <circle cx="16.5" cy="7.5" r="2.5" fill="#FBBF24" />
      <circle cx="7.5" cy="16.5" r="2.5" fill="#38BDF8" />
      <circle cx="16.5" cy="16.5" r="2.5" fill="#10B981" />
    </svg>
  );
}

/** PDF Booklet — Clear & Colorful Flat Vector Icon */
export function PdfBookletIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-booklet"
      {...props}
    >
      <path d="M3 19V5a2 2 0 0 1 2-2h7v18H5a2 2 0 0 1-2-2z" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
      <path d="M21 19V5a2 2 0 0 0-2-2h-7v18h7a2 2 0 0 0 2-2z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <line x1="12" y1="3" x2="12" y2="21" stroke="#64748B" strokeWidth="1.5" />
      <circle cx="12" cy="7" r="0.8" fill="#F59E0B" />
      <circle cx="12" cy="17" r="0.8" fill="#F59E0B" />
    </svg>
  );
}

/** Booklet Folding Simulator — Clear & Colorful Flat Vector Icon */
export function BookletFoldingSimulatorIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="booklet-folding-simulator"
      {...props}
    >
      <path d="M3 6l9-3 9 3v12l-9 3-9-3z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M3 6l9 3v12l-9-3z" fill="#6366F1" fillOpacity="0.2" />
      <path d="M12 9l9-3v12l-9 3z" fill="#38BDF8" fillOpacity="0.3" />
      <line x1="12" y1="3" x2="12" y2="21" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

/** Passport ID Composer — Clear & Colorful Flat Vector Icon */
export function PassportIdComposerIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="passport-id-composer"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2.5" fill="#1E293B" stroke="#F59E0B" strokeWidth="1" />
      <rect x="5.5" y="7" width="5.5" height="6.5" rx="1" fill="#38BDF8" />
      <circle cx="8.25" cy="9.5" r="1.5" fill="#FFFFFF" />
      <line x1="13" y1="8" x2="18" y2="8" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="13" y1="11" x2="17" y2="11" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="6" y1="16" x2="18" y2="16" stroke="#10B981" strokeWidth="1.2" strokeDasharray="1.5 1" />
    </svg>
  );
}

/** PDF Page Resizer Uniform — Clear & Colorful Flat Vector Icon */
export function PdfPageResizerUniformIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-page-resizer-uniform"
      {...props}
    >
      <rect x="6" y="6" width="12" height="12" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M3 3h5m-5 0v5m0-5 5 5" stroke="#F43F5E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 21h-5m5 0v-5m0 5-5-5" stroke="#F43F5E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** PDF Lossless Slicer — Clear & Colorful Flat Vector Icon */
export function PdfLosslessSlicerIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-lossless-slicer"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <line x1="4" y1="12" x2="20" y2="12" stroke="#F43F5E" strokeWidth="1.8" strokeDasharray="2 2" />
      
      <path d="M16 6l5 5-7 7-3-3z" fill="#94A3B8" stroke="#64748B" strokeWidth="0.8" />
      <circle cx="18" cy="8" r="1" fill="#F43F5E" />
    </svg>
  );
}

/** Photo Tiling Prepress — Clear & Colorful Flat Vector Icon */
export function PhotoTilingPrepressIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="photo-tiling-prepress"
      {...props}
    >
      <rect x="5" y="5" width="14" height="14" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <path d="M5 15l4-4 4 4" fill="#10B981" />
      <path d="M11 15l3-3 5 5H5v-2z" fill="#059669" />
      <circle cx="15" cy="8" r="1.5" fill="#FBBF24" />
      
      <path d="M2 5h3V2" stroke="#F43F5E" strokeWidth="1.2" />
      <path d="M22 5h-3V2" stroke="#F43F5E" strokeWidth="1.2" />
      <path d="M2 19h3v3" stroke="#F43F5E" strokeWidth="1.2" />
      <path d="M22 19h-3v3" stroke="#F43F5E" strokeWidth="1.2" />
    </svg>
  );
}

/** Compress PDF — Clear & Colorful Flat Vector Icon */
export function CompressPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="compress-pdf"
      {...props}
    >
      <rect x="6" y="7" width="12" height="10" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <line x1="9" y1="10" x2="15" y2="10" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="9" y1="13.5" x2="13" y2="13.5" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      
      <circle cx="12" cy="3.5" r="2.5" fill="#10B981" />
      <path d="M12 2v3m-1.5-1.5L12 5l1.5-1.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      
      <circle cx="12" cy="20.5" r="2.5" fill="#10B981" />
      <path d="M12 22v-3m-1.5 1.5L12 19l1.5 1.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Fix Page Size — Clear & Colorful Flat Vector Icon */
export function FixPageSizeIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="fix-page-size"
      {...props}
    >
      <rect x="5" y="4" width="14" height="16" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <rect x="2" y="8" width="3" height="8" rx="1" fill="#38BDF8" />
      <rect x="19" y="8" width="3" height="8" rx="1" fill="#38BDF8" />
      <line x1="9" y1="9" x2="15" y2="9" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="9" y1="13" x2="15" y2="13" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** Linearize PDF — Clear & Colorful Flat Vector Icon */
export function LinearizePdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="linearize-pdf"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M15 2v5h5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      
      <polygon points="12 9 8 15 12 15 11 20 17 13 13 13 14 9" fill="#FBBF24" stroke="#B45309" strokeWidth="0.8" />
    </svg>
  );
}

/** Page Dimensions — Clear & Colorful Flat Vector Icon */
export function PageDimensionsIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="page-dimensions"
      {...props}
    >
      <rect x="6" y="6" width="13" height="13" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <line x1="3" y1="6" x2="3" y2="19" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="1.5 8 3 6 4.5 8" stroke="#2563EB" strokeWidth="1.2" />
      <polyline points="1.5 17 3 19 4.5 17" stroke="#2563EB" strokeWidth="1.2" />
      <line x1="6" y1="3" x2="19" y2="3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="8 1.5 6 3 8 4.5" stroke="#2563EB" strokeWidth="1.2" />
      <polyline points="17 1.5 19 3 17 4.5" stroke="#2563EB" strokeWidth="1.2" />
    </svg>
  );
}

/** Remove Restrictions — Clear & Colorful Flat Vector Icon */
export function RemoveRestrictionsIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="remove-restrictions"
      {...props}
    >
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="2" x2="22" y2="22" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Repair PDF — Clear & Colorful Flat Vector Icon */
export function RepairPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="repair-pdf"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M15 2v5h5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      
      <circle cx="12" cy="14" r="5" fill="#F43F5E" />
      <path d="M12 11.5v5m-2.5-2.5h5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Deskew PDF — Clear & Colorful Flat Vector Icon */
export function DeskewPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="deskew-pdf"
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 2" />
      
      <path d="M6.5 7l11 1.5-2 10-11-1.5z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />
      <polyline points="14 20 16 19 15 17" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** PDF to PDF/A — Clear & Colorful Flat Vector Icon */
export function PdfToPdfaIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-pdfa"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M15 2v5h5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      
      <circle cx="12" cy="13" r="3.5" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
      <path d="M10.5 15.5l-1.5 4 3-1.5 3 1.5-1.5-4" fill="#F43F5E" />
      <text x="12" y="14.2" fontSize="2.8" textAnchor="middle" fill="#1E293B" fontWeight="bold">A</text>
    </svg>
  );
}

/** Font to Outline — Clear & Colorful Flat Vector Icon */
export function FontToOutlineIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="font-to-outline"
      {...props}
    >
      <path d="M7 19l4.5-13h1l4.5 13" fill="none" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8.5" y1="14" x2="15.5" y2="14" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      
      <rect x="6" y="17.5" width="2.5" height="2.5" fill="#F43F5E" />
      <rect x="15.5" y="17.5" width="2.5" height="2.5" fill="#F43F5E" />
      <rect x="10.8" y="4.5" width="2.5" height="2.5" fill="#F43F5E" />
    </svg>
  );
}

/** OCG Layers Manager — Clear & Colorful Flat Vector Icon */
export function OcgManagerIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="ocg-manager"
      {...props}
    >
      <path d="M12 3L2 8l10 5 10-5-10-5z" fill="#38BDF8" fillOpacity="0.8" stroke="#0284C7" strokeWidth="1" />
      <path d="M2 13l10 5 10-5" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 17l10 5 10-5" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Deep Sanitize — Clear & Colorful Flat Vector Icon */
export function DeepSanitizeIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="deep-sanitize"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#6366F1" fillOpacity="0.2" stroke="#6366F1" strokeWidth="1.5" />
      <polygon points="12 8 13.5 11.5 17 12 14.5 14.5 15 18 12 16.5 9 18 9.5 14.5 7 12 10.5 11.5 12 8" fill="#FBBF24" />
    </svg>
  );
}

/** E-Ink Optimizer — Clear & Colorful Flat Vector Icon */
export function EinkOptimizerIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="eink-optimizer"
      {...props}
    >
      <circle cx="12" cy="12" r="9" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.5" />
      <path d="M12 3a9 9 0 0 1 0 18z" fill="#1E293B" />
    </svg>
  );
}

/** Batch Watermark Remover — Clear & Colorful Flat Vector Icon */
export function BatchWatermarkRemoverIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="batch-watermark-remover"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <line x1="5" y1="16" x2="16" y2="5" stroke="#F43F5E" strokeWidth="2" strokeDasharray="3 2" />
      
      <path d="M15 13l-4 4h5l3-3-4-1z" fill="#EC4899" stroke="#E11D48" strokeWidth="0.8" />
    </svg>
  );
}

/** Dead Link Debugger — Clear & Colorful Flat Vector Icon */
export function DeadLinkDebuggerIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="dead-link-debugger"
      {...props}
    >
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" fill="none" stroke="#38BDF8" strokeWidth="1.8" />
      <circle cx="7" cy="17" r="4.5" fill="#F43F5E" />
      <path d="M5 15l4 4m0-4l-4 4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** PDF Deskew Aligner — Clear & Colorful Flat Vector Icon */
export function PdfDeskewAlignerIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-deskew-aligner"
      {...props}
    >
      <rect x="3" y="6" width="18" height="12" rx="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.5" fill="#10B981" />
    </svg>
  );
}

/** Handwriting Ink Contrast Booster — Clear & Colorful Flat Vector Icon */
export function HandwritingInkContrastBoosterIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="handwriting-ink-contrast-booster"
      {...props}
    >
      <path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
      <path d="M3 21c3-2 6 1 10-1s6 1 8-1" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/** Edit PDF — Clear & Colorful Flat Vector Icon */
export function EditPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="edit-pdf"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M15 2v5h5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      <line x1="8" y1="10" x2="13" y2="10" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="13" x2="12" y2="13" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      
      <g transform="translate(10, 8)">
        <path d="M8 2l2 2-6 6H1.5v-2.5L7.5 2z" fill="#FBBF24" stroke="#B45309" strokeWidth="0.8" />
        <path d="M1.5 9.5l2.5-0.5-2-2z" fill="#1E293B" />
        <circle cx="9" cy="3" r="1.2" fill="#F43F5E" />
      </g>
    </svg>
  );
}

/** Sign PDF — Clear & Colorful Flat Vector Icon */
export function SignPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="sign-pdf"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M15 2v5h5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      
      <path d="M6 18c2-2 4 1 6-1s3 1 4 0" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      
      <path d="M15 11l3-3 2 2-3 3-2 1z" fill="#FBBF24" stroke="#B45309" strokeWidth="0.8" />
      <circle cx="19" cy="9" r="1" fill="#F43F5E" />
    </svg>
  );
}

/** Crop PDF — Clear & Colorful Flat Vector Icon */
export function CropPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="crop-pdf"
      {...props}
    >
      <path d="M6 2v14a2 2 0 0 0 2 2h14" fill="none" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 22V8a2 2 0 0 0-2-2H2" fill="none" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="8" y="8" width="8" height="8" fill="#38BDF8" fillOpacity="0.4" />
    </svg>
  );
}

/** Bookmark PDF — Clear & Colorful Flat Vector Icon */
export function BookmarkIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="bookmark"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <path d="M15 2v5h5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      
      <path d="M10 2v12l3-2.5 3 2.5V2z" fill="#F43F5E" stroke="#E11D48" strokeWidth="0.8" />
    </svg>
  );
}

/** Table of Contents — Clear & Colorful Flat Vector Icon */
export function TableOfContentsIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="table-of-contents"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="8" cy="10" r="1.2" fill="#F43F5E" />
      <line x1="11" y1="10" x2="16" y2="10" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9.5" cy="13.5" r="1" fill="#38BDF8" />
      <line x1="12" y1="13.5" x2="16" y2="13.5" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="17" r="1.2" fill="#FBBF24" />
      <line x1="11" y1="17" x2="15" y2="17" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Page Numbers — Clear & Colorful Flat Vector Icon */
export function PageNumbersIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="page-numbers"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <rect x="6.5" y="13" width="11" height="6" rx="1.5" fill="#6366F1" />
      <text x="12" y="17.5" fontSize="4.2" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">1 2 3</text>
    </svg>
  );
}

/** Add Watermark — Clear & Colorful Flat Vector Icon */
export function AddWatermarkIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="add-watermark"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <path d="M4 16l12-12h4L8 20H4z" fill="#06B6D4" fillOpacity="0.35" />
      <text x="12" y="13" fontSize="2.8" textAnchor="middle" fill="#0284C7" fontWeight="bold" transform="rotate(-35 12 13)">DRAFT</text>
    </svg>
  );
}

/** Header and Footer — Clear & Colorful Flat Vector Icon */
export function HeaderFooterIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="header-footer"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <rect x="5" y="4" width="14" height="3" fill="#38BDF8" />
      
      <rect x="5" y="17" width="14" height="3" fill="#F43F5E" />
      <line x1="8" y1="10.5" x2="16" y2="10.5" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8" y1="13.5" x2="14" y2="13.5" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** Invert Colors — Clear & Colorful Flat Vector Icon */
export function InvertColorsIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="invert-colors"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="12" cy="14" r="5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1" />
      <path d="M12 9a5 5 0 0 1 0 10z" fill="#1E293B" />
    </svg>
  );
}

/** Background Color — Clear & Colorful Flat Vector Icon */
export function BackgroundColorIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="background-color"
      {...props}
    >
      <path d="M19 11l-7-7-1.5 1.5 2 2-6.5 6.5a2 2 0 0 0 0 2.8l3.7 3.7a2 2 0 0 0 2.8 0L19 14a2 2 0 0 0 0-2.8z" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="1" />
      
      <circle cx="20" cy="18" r="2.5" fill="#EC4899" />
      <path d="M3 21h18" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Text Color — Clear & Colorful Flat Vector Icon */
export function TextColorIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="text-color"
      {...props}
    >
      <path d="M7 16l4.5-11h1l4.5 11" fill="none" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8.5" y1="12" x2="15.5" y2="12" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
      
      <rect x="5" y="18" width="14" height="3" rx="1.5" fill="#F43F5E" />
    </svg>
  );
}

/** Add Stamps — Clear & Colorful Flat Vector Icon */
export function AddStampsIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="add-stamps"
      {...props}
    >
      <rect x="5" y="16" width="14" height="4" rx="1" fill="#F43F5E" />
      <path d="M8 16V12a4 4 0 0 1 8 0v4" fill="#FBBF24" />
      <circle cx="12" cy="5" r="2.5" fill="#B45309" />
      <line x1="12" y1="7" x2="12" y2="9" stroke="#B45309" strokeWidth="2" />
    </svg>
  );
}

/** Remove Annotations — Clear & Colorful Flat Vector Icon */
export function RemoveAnnotationsIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="remove-annotations"
      {...props}
    >
      <path d="M18 14L10 6 5 11l8 8h6l3-3-4-4z" fill="#EC4899" stroke="#E11D48" strokeWidth="1" />
      <path d="M5 11l4 4 4-4-4-4z" fill="#64748B" opacity="0.4" />
      <line x1="9" y1="15" x2="14" y2="10" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  );
}

/** Form Filler — Clear & Colorful Flat Vector Icon */
export function FormFillerIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="form-filler"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <rect x="7" y="7" width="4.5" height="4.5" rx="1" fill="#10B981" />
      <path d="M8 9.2l1 1 2-2" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="13.5" y1="9.5" x2="17" y2="9.5" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
      
      <rect x="7" y="13.5" width="4.5" height="4.5" rx="1" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
      <line x1="13.5" y1="16" x2="17" y2="16" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Form Creator — Clear & Colorful Flat Vector Icon */
export function FormCreatorIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="form-creator"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <circle cx="8" cy="8" r="2.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />
      <circle cx="8" cy="8" r="1.2" fill="#0284C7" />
      <rect x="12" y="6.5" width="6" height="3" rx="0.8" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.8" />
      
      <polygon points="14 13 19 18 17 19 16 22 14 13" fill="#F97316" />
    </svg>
  );
}

/** Remove Blank Pages — Clear & Colorful Flat Vector Icon */
export function RemoveBlankPagesIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="remove-blank-pages"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <circle cx="12" cy="14" r="5" fill="#FFFFFF" stroke="#F43F5E" strokeWidth="2" />
      <line x1="8.5" y1="10.5" x2="15.5" y2="17.5" stroke="#F43F5E" strokeWidth="2" />
    </svg>
  );
}

/** PDF Reader — Clear & Colorful Flat Vector Icon */
export function PdfReaderIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-reader"
      {...props}
    >
      <path d="M2 4a3 3 0 0 1 3-3h7v18H5a3 3 0 0 0-3 3V4z" fill="#6366F1" fillOpacity="0.85" />
      <path d="M22 4a3 3 0 0 0-3-3h-7v18h7a3 3 0 0 1 3 3V4z" fill="#38BDF8" />
      <line x1="12" y1="1" x2="12" y2="19" stroke="#1E293B" strokeWidth="1.5" />
    </svg>
  );
}

/** Citation Linker — Clear & Colorful Flat Vector Icon */
export function CitationLinkerIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="citation-linker"
      {...props}
    >
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" fill="none" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** Form Logic Designer — Clear & Colorful Flat Vector Icon */
export function FormLogicDesignerIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="form-logic-designer"
      {...props}
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#6366F1" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#10B981" />
      <path d="M10 6.5h4a2 2 0 0 1 2 2v5.5" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <polyline points="14 12 16 14 18 12" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Bookmarks Auto Generator — Clear & Colorful Flat Vector Icon */
export function BookmarksAutoGeneratorIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="bookmarks-auto-generator"
      {...props}
    >
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-4-7 4z" fill="#F43F5E" />
      
      <polygon points="12 7 13 9.5 15.5 10.5 13 11.5 12 14 11 11.5 8.5 10.5 11 9.5 12 7" fill="#FACC15" />
    </svg>
  );
}

/** Batch Barcode Injector — Clear & Colorful Flat Vector Icon */
export function BatchBarcodeInjectorIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="batch-barcode-injector"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <line x1="6" y1="7" x2="6" y2="17" stroke="#1E293B" strokeWidth="1.5" />
      <line x1="9" y1="7" x2="9" y2="17" stroke="#1E293B" strokeWidth="2.5" />
      <line x1="12" y1="7" x2="12" y2="17" stroke="#1E293B" strokeWidth="1" />
      <line x1="15" y1="7" x2="15" y2="17" stroke="#1E293B" strokeWidth="3" />
      <line x1="18" y1="7" x2="18" y2="17" stroke="#1E293B" strokeWidth="1.5" />
    </svg>
  );
}

/** Signature Ink Optimizer — Clear & Colorful Flat Vector Icon */
export function SignatureInkOptimizerIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="signature-ink-optimizer"
      {...props}
    >
      <path d="M19 11l-8-8a2.8 2.8 0 0 0-4 4l8 8" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
      <path d="M3 21c3-2 6 1 10-1s6 1 8-1" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/** Interactive TOC Generator — Clear & Colorful Flat Vector Icon */
export function InteractiveTocGeneratorIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="interactive-toc-generator"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="7" cy="7" r="1.5" fill="#F43F5E" />
      <line x1="11" y1="7" x2="17" y2="7" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7" cy="12" r="1.5" fill="#10B981" />
      <line x1="11" y1="12" x2="17" y2="12" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7" cy="17" r="1.5" fill="#FBBF24" />
      <line x1="11" y1="17" x2="17" y2="17" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** PDF Two Column Reflower — Clear & Colorful Flat Vector Icon */
export function PdfTwoColumnReflowerIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-two-column-reflower"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <rect x="6.5" y="6" width="4.5" height="12" rx="1" fill="#38BDF8" opacity="0.5" />
      <rect x="13" y="6" width="4.5" height="12" rx="1" fill="#6366F1" opacity="0.5" />
      <line x1="12" y1="4" x2="12" y2="20" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

/** PDF Spine Bookbinder — Clear & Colorful Flat Vector Icon */
export function PdfSpineBookbinderIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-spine-bookbinder"
      {...props}
    >
      <path d="M4 19V5a2 2 0 0 1 2-2h4v18H6a2 2 0 0 1-2-2z" fill="#B45309" stroke="#FBBF24" strokeWidth="1" />
      <path d="M10 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="7" cy="7" r="1" fill="#FACC15" />
      <circle cx="7" cy="17" r="1" fill="#FACC15" />
    </svg>
  );
}

/** PDF Scratchpad Canvas — Clear & Colorful Flat Vector Icon */
export function PdfScratchpadCanvasIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-scratchpad-canvas"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.2" />
      
      <path d="M6 15c2-4 5 1 8-2s3 1 4 0" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="8" cy="8" r="2" fill="#FBBF24" />
    </svg>
  );
}

/** JPG to PDF — Clear & Colorful Flat Vector Icon */
export function JpgToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="jpg-to-pdf"
      {...props}
    >
      <rect x="3" y="5" width="10" height="14" rx="2" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1" />
      <circle cx="6.5" cy="8.5" r="1.5" fill="#FBBF24" />
      <polygon points="4 16 7 12 9 14 11 11 13 16" fill="#10B981" />
      
      <circle cx="15.5" cy="12" r="3" fill="#10B981" />
      <path d="M14.5 12h2.5m-1-1l1 1-1 1" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      
      <rect x="14" y="5" width="7" height="14" rx="1.5" fill="#EF4444" />
      <text x="17.5" y="13.5" fontSize="2.5" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">PDF</text>
    </svg>
  );
}

/** Image to PDF — Clear & Colorful Flat Vector Icon */
export function ImageToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="image-to-pdf"
      {...props}
    >
      <rect x="3" y="5" width="11" height="14" rx="2" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="1" />
      <circle cx="7" cy="8.5" r="1.5" fill="#FBBF24" />
      <polygon points="4 16 8 11 11 14 12 13 14 16" fill="#8B5CF6" />
      
      <path d="M15 12h3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="14" y="5" width="7" height="14" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** PNG to PDF — Clear & Colorful Flat Vector Icon */
export function PngToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="png-to-pdf"
      {...props}
    >
      <rect x="3" y="5" width="10" height="14" rx="2" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1" />
      <rect x="4" y="6" width="3" height="3" fill="#94A3B8" opacity="0.3" />
      <rect x="7" y="9" width="3" height="3" fill="#94A3B8" opacity="0.3" />
      <rect x="4" y="12" width="3" height="3" fill="#94A3B8" opacity="0.3" />
      <circle cx="15.5" cy="12" r="3" fill="#10B981" />
      <rect x="14" y="5" width="7" height="14" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** WebP to PDF — Clear & Colorful Flat Vector Icon */
export function WebpToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="webp-to-pdf"
      {...props}
    >
      <rect x="3" y="5" width="10" height="14" rx="2" fill="#38BDF8" fillOpacity="0.2" stroke="#0284C7" strokeWidth="1" />
      <circle cx="8" cy="12" r="3.5" fill="#38BDF8" />
      <rect x="14" y="5" width="7" height="14" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** SVG to PDF — Clear & Colorful Flat Vector Icon */
export function SvgToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="svg-to-pdf"
      {...props}
    >
      <rect x="3" y="5" width="10" height="14" rx="2" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="1" />
      <path d="M5 16c2-6 4 2 6-4" stroke="#8B5CF6" strokeWidth="1.5" fill="none" />
      <circle cx="5" cy="16" r="1.2" fill="#F43F5E" />
      <circle cx="11" cy="12" r="1.2" fill="#F43F5E" />
      <rect x="14" y="5" width="7" height="14" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** BMP to PDF — Clear & Colorful Flat Vector Icon */
export function BmpToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="bmp-to-pdf"
      {...props}
    >
      <rect x="3" y="5" width="10" height="14" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="8" cy="12" r="2.5" fill="#F59E0B" />
      <rect x="14" y="5" width="7" height="14" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** HEIC to PDF — Clear & Colorful Flat Vector Icon */
export function HeicToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="heic-to-pdf"
      {...props}
    >
      <rect x="4" y="4" width="8" height="16" rx="2" fill="#1E293B" stroke="#94A3B8" strokeWidth="0.8" />
      <circle cx="8" cy="17.5" r="0.8" fill="#FFFFFF" />
      <circle cx="8" cy="10" r="2" fill="#38BDF8" />
      <rect x="14" y="5" width="7" height="14" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** TIFF to PDF — Clear & Colorful Flat Vector Icon */
export function TiffToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="tiff-to-pdf"
      {...props}
    >
      <rect x="3" y="4" width="9" height="11" rx="1" fill="#6366F1" opacity="0.6" />
      <rect x="5" y="7" width="9" height="11" rx="1" fill="#38BDF8" />
      <rect x="15" y="5" width="6" height="14" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** TXT to PDF — Clear & Colorful Flat Vector Icon */
export function TxtToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="txt-to-pdf"
      {...props}
    >
      <rect x="3" y="4" width="9" height="16" rx="1.5" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <line x1="5.5" y1="8" x2="9.5" y2="8" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="5.5" y1="11" x2="9.5" y2="11" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="5.5" y1="14" x2="8.5" y2="14" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
      <text x="17" y="13.5" fontSize="2.8" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">PDF</text>
    </svg>
  );
}

/** JSON to PDF — Clear & Colorful Flat Vector Icon */
export function JsonToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="json-to-pdf"
      {...props}
    >
      <rect x="3" y="4" width="9" height="16" rx="1.5" fill="#1E293B" />
      <text x="7.5" y="14" fontSize="4.5" textAnchor="middle" fill="#FBBF24" fontWeight="bold">{'{ }'}</text>
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
      <text x="17" y="13.5" fontSize="2.8" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">PDF</text>
    </svg>
  );
}

/** PSD to PDF — Clear & Colorful Flat Vector Icon */
export function PsdToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="psd-to-pdf"
      {...props}
    >
      <rect x="3" y="4" width="9" height="16" rx="1.5" fill="#1D4ED8" />
      <text x="7.5" y="14" fontSize="3.5" textAnchor="middle" fill="#38BDF8" fontWeight="bold">Ps</text>
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** Word to PDF — Clear & Colorful Flat Vector Icon */
export function WordToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="word-to-pdf"
      {...props}
    >
      <rect x="3" y="4" width="9" height="16" rx="1.5" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1" />
      <text x="7.5" y="14.5" fontSize="5" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">W</text>
      
      <path d="M12.5 12h2.5m-1-1l1 1-1 1" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
      <text x="17" y="13.5" fontSize="2.8" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">PDF</text>
    </svg>
  );
}

/** Excel to PDF — Clear & Colorful Flat Vector Icon */
export function ExcelToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="excel-to-pdf"
      {...props}
    >
      <rect x="3" y="4" width="9" height="16" rx="1.5" fill="#16A34A" stroke="#15803D" strokeWidth="1" />
      <text x="7.5" y="14.5" fontSize="5" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">X</text>
      
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
      <text x="17" y="13.5" fontSize="2.8" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">PDF</text>
    </svg>
  );
}

/** PPTX to PDF — Clear & Colorful Flat Vector Icon */
export function PptxToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pptx-to-pdf"
      {...props}
    >
      <rect x="3" y="4" width="9" height="16" rx="1.5" fill="#EA580C" />
      <text x="7.5" y="14.5" fontSize="5" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">P</text>
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
      <text x="17" y="13.5" fontSize="2.8" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">PDF</text>
    </svg>
  );
}

/** XPS to PDF — Clear & Colorful Flat Vector Icon */
export function XpsToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="xps-to-pdf"
      {...props}
    >
      <rect x="3" y="5" width="9" height="14" rx="1.5" fill="#6366F1" />
      <text x="7.5" y="14" fontSize="3" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">XPS</text>
      <rect x="13" y="5" width="8" height="14" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** RTF to PDF — Clear & Colorful Flat Vector Icon */
export function RtfToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="rtf-to-pdf"
      {...props}
    >
      <rect x="3" y="4" width="9" height="16" rx="1.5" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <text x="7.5" y="13.5" fontSize="3" textAnchor="middle" fill="#2563EB" fontWeight="bold">RTF</text>
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** EPUB to PDF — Clear & Colorful Flat Vector Icon */
export function EpubToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="epub-to-pdf"
      {...props}
    >
      <path d="M3 19V5a2 2 0 0 1 2-2h4a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" fill="#10B981" />
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** MOBI to PDF — Clear & Colorful Flat Vector Icon */
export function MobiToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="mobi-to-pdf"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="2" fill="#1E293B" />
      <rect x="4.5" y="6" width="5" height="10" rx="0.5" fill="#F8FAFC" />
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** DJVU to PDF — Clear & Colorful Flat Vector Icon */
export function DjvuToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="djvu-to-pdf"
      {...props}
    >
      <rect x="3" y="4" width="9" height="16" rx="1.5" fill="#8B5CF6" />
      <text x="7.5" y="13.5" fontSize="2.8" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">DJVU</text>
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** FB2 to PDF — Clear & Colorful Flat Vector Icon */
export function Fb2ToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="fb2-to-pdf"
      {...props}
    >
      <rect x="3" y="4" width="9" height="16" rx="1.5" fill="#14B8A6" />
      <text x="7.5" y="13.5" fontSize="3" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">FB2</text>
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** Markdown to PDF — Clear & Colorful Flat Vector Icon */
export function MarkdownToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="markdown-to-pdf"
      {...props}
    >
      <rect x="3" y="6" width="10" height="12" rx="1.5" fill="#1E293B" />
      <polyline points="5 13 6.5 10 8 13 9.5 10 11 13" stroke="#38BDF8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="14" y="4" width="7" height="16" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** Email to PDF — Clear & Colorful Flat Vector Icon */
export function EmailToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="email-to-pdf"
      {...props}
    >
      <rect x="2" y="6" width="11" height="12" rx="2" fill="#FBBF24" />
      <path d="M2 7l5.5 4 5.5-4" stroke="#B45309" strokeWidth="1.2" fill="none" />
      <rect x="14" y="4" width="7" height="16" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** CBZ to PDF — Clear & Colorful Flat Vector Icon */
export function CbzToPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="cbz-to-pdf"
      {...props}
    >
      <path d="M3 5h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6l-3 3V7a2 2 0 0 1 2-2z" fill="#FBBF24" stroke="#B45309" strokeWidth="0.8" />
      <rect x="14" y="4" width="7" height="16" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

/** PDF to JPG — Clear & Colorful Flat Vector Icon */
export function PdfToJpgIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-jpg"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
      <text x="7" y="13.5" fontSize="2.8" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">PDF</text>
      
      <circle cx="12" cy="12" r="2.5" fill="#10B981" />
      <rect x="11" y="5" width="10" height="14" rx="2" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1" />
      <circle cx="14" cy="8.5" r="1.2" fill="#FBBF24" />
      <polygon points="12 16 15 12 17 14 19 11 20 16" fill="#10B981" />
    </svg>
  );
}

/** PDF to PNG — Clear & Colorful Flat Vector Icon */
export function PdfToPngIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-png"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
      <text x="7" y="13.5" fontSize="2.8" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">PDF</text>
      <rect x="11" y="5" width="10" height="14" rx="2" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="1" />
      <rect x="12" y="6" width="3" height="3" fill="#94A3B8" opacity="0.3" />
      <rect x="15" y="9" width="3" height="3" fill="#94A3B8" opacity="0.3" />
    </svg>
  );
}

/** PDF to WebP — Clear & Colorful Flat Vector Icon */
export function PdfToWebpIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-webp"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
      <circle cx="16" cy="12" r="5" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="1.5" />
      <circle cx="16" cy="12" r="2.5" fill="#38BDF8" />
    </svg>
  );
}

/** PDF to BMP — Clear & Colorful Flat Vector Icon */
export function PdfToBmpIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-bmp"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
      <rect x="11" y="5" width="10" height="14" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="16" cy="12" r="2.5" fill="#F59E0B" />
    </svg>
  );
}

/** PDF to TIFF — Clear & Colorful Flat Vector Icon */
export function PdfToTiffIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-tiff"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
      <rect x="11" y="4" width="9" height="11" rx="1" fill="#6366F1" opacity="0.6" />
      <rect x="13" y="7" width="9" height="11" rx="1" fill="#38BDF8" />
    </svg>
  );
}

/** PDF to CBZ — Clear & Colorful Flat Vector Icon */
export function PdfToCbzIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-cbz"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
      <path d="M11 5h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-3 3V7a2 2 0 0 1 2-2z" fill="#FBBF24" stroke="#B45309" strokeWidth="0.8" />
    </svg>
  );
}

/** PDF to SVG — Clear & Colorful Flat Vector Icon */
export function PdfToSvgIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-svg"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
      <path d="M12 17c2-6 4 2 6-4" stroke="#8B5CF6" strokeWidth="1.8" fill="none" />
      <circle cx="12" cy="17" r="1.2" fill="#F43F5E" />
      <circle cx="18" cy="13" r="1.2" fill="#F43F5E" />
    </svg>
  );
}

/** PDF to Greyscale — Clear & Colorful Flat Vector Icon */
export function PdfToGreyscaleIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-greyscale"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1" />
      <circle cx="17" cy="12" r="3.5" fill="#64748B" />
    </svg>
  );
}

/** PDF to JSON — Clear & Colorful Flat Vector Icon */
export function PdfToJsonIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-json"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#1E293B" />
      <text x="17" y="14" fontSize="4.5" textAnchor="middle" fill="#FBBF24" fontWeight="bold">{'{ }'}</text>
    </svg>
  );
}

/** PDF to Word — Clear & Colorful Flat Vector Icon */
export function PdfToDocxIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-docx"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="1.5" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
      <text x="7" y="13.5" fontSize="2.8" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">PDF</text>
      
      <path d="M11.5 12h2.5m-1-1l1 1-1 1" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1" />
      <text x="17" y="14.5" fontSize="5" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">W</text>
    </svg>
  );
}

/** PDF to PPTX — Clear & Colorful Flat Vector Icon */
export function PdfToPptxIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-pptx"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="1.5" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
      <text x="7" y="13.5" fontSize="2.8" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">PDF</text>
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#EA580C" />
      <text x="17" y="14.5" fontSize="5" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">P</text>
    </svg>
  );
}

/** PDF to Excel — Clear & Colorful Flat Vector Icon */
export function PdfToExcelIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-excel"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="1.5" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
      <text x="7" y="13.5" fontSize="2.8" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">PDF</text>
      <rect x="13" y="4" width="8" height="16" rx="1.5" fill="#16A34A" stroke="#15803D" strokeWidth="1" />
      <text x="17" y="14.5" fontSize="5" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">X</text>
    </svg>
  );
}

/** PDF to Markdown — Clear & Colorful Flat Vector Icon */
export function PdfToMarkdownIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-markdown"
      {...props}
    >
      <rect x="3" y="4" width="8" height="16" rx="1.5" fill="#EF4444" />
      <rect x="13" y="6" width="9" height="12" rx="1.5" fill="#1E293B" />
      <polyline points="14.5 13 16 10 17.5 13 19 10 20.5 13" stroke="#38BDF8" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

/** Extract Images — Clear & Colorful Flat Vector Icon */
export function ExtractImagesIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="extract-images"
      {...props}
    >
      <rect x="3" y="3" width="13" height="13" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="7" cy="7" r="1.5" fill="#FBBF24" />
      <polygon points="4 14 7 10 9 12 11 9 13 14" fill="#10B981" />
      
      <circle cx="17" cy="17" r="4.5" fill="#10B981" />
      <path d="M17 14.5v5m-2-2l2 2 2-2" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Rasterize PDF — Clear & Colorful Flat Vector Icon */
export function RasterizePdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="rasterize-pdf"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <rect x="5" y="5" width="4" height="4" fill="#F43F5E" />
      <rect x="10" y="5" width="4" height="4" fill="#FBBF24" />
      <rect x="15" y="5" width="4" height="4" fill="#38BDF8" />
      <rect x="5" y="10" width="4" height="4" fill="#10B981" />
      <rect x="10" y="10" width="4" height="4" fill="#6366F1" />
      <rect x="15" y="10" width="4" height="4" fill="#EC4899" />
    </svg>
  );
}

/** Extract Tables — Clear & Colorful Flat Vector Icon */
export function ExtractTablesIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="extract-tables"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" fill="#FFFFFF" stroke="#16A34A" strokeWidth="1.5" />
      <rect x="3" y="4" width="18" height="5" rx="1" fill="#16A34A" />
      <line x1="9" y1="4" x2="9" y2="20" stroke="#94A3B8" strokeWidth="1" />
      <line x1="15" y1="4" x2="15" y2="20" stroke="#94A3B8" strokeWidth="1" />
      <line x1="3" y1="14" x2="21" y2="14" stroke="#94A3B8" strokeWidth="1" />
    </svg>
  );
}

/** AI PDF Reflower — Clear & Colorful Flat Vector Icon */
export function AiPdfReflowerIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="ai-pdf-reflower"
      {...props}
    >
      <rect x="3" y="3" width="8" height="18" rx="1.5" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <rect x="13" y="5" width="8" height="14" rx="2" fill="#1E293B" />
      <polygon points="17 9 17.8 11 20 11.5 18 13 18.5 15 17 14 15.5 15 16 13 14 11.5 16.2 11" fill="#FACC15" />
    </svg>
  );
}

/** Vector Extractor — Clear & Colorful Flat Vector Icon */
export function VectorExtractorIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="vector-extractor"
      {...props}
    >
      <circle cx="6" cy="6" r="3" fill="#F43F5E" />
      <circle cx="18" cy="18" r="3" fill="#38BDF8" />
      <path d="M8.5 6h7a2 2 0 0 1 2 2v7" fill="none" stroke="#6366F1" strokeWidth="2" />
      <line x1="8" y1="8" x2="16" y2="16" stroke="#64748B" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

/** PDF to Slide — Clear & Colorful Flat Vector Icon */
export function PdfToSlideIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-to-slide"
      {...props}
    >
      <rect x="2" y="4" width="16" height="11" rx="2" fill="#EA580C" />
      <circle cx="7" cy="8.5" r="1.5" fill="#FFFFFF" />
      <line x1="10" y1="8" x2="15" y2="8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="11" x2="13" y2="11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      
      <line x1="10" y1="15" x2="10" y2="19" stroke="#1E293B" strokeWidth="2" />
      <line x1="6" y1="19" x2="14" y2="19" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Annotation Exporter — Clear & Colorful Flat Vector Icon */
export function AnnotationExporterIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="annotation-exporter"
      {...props}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
      <circle cx="12" cy="17" r="4.5" fill="#10B981" />
      <path d="M12 14.5v5m-2-2l2 2 2-2" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Global Invoice Parser — Clear & Colorful Flat Vector Icon */
export function GlobalInvoiceParserIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="global-invoice-parser"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <rect x="4" y="3" width="16" height="4" rx="1" fill="#6366F1" />
      <line x1="7" y1="10" x2="14" y2="10" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7" y1="13" x2="11" y2="13" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      
      <circle cx="15.5" cy="15.5" r="3.5" fill="#10B981" />
      <text x="15.5" y="17" fontSize="3.5" textAnchor="middle" fill="#FFFFFF" fontWeight="bold">$</text>
    </svg>
  );
}

/** Timestamp PDF — Clear & Colorful Flat Vector Icon */
export function TimestampPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="timestamp-pdf"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <circle cx="12" cy="14" r="5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
      <polyline points="12 11.5 12 14 14 15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Encrypt PDF — Clear & Colorful Flat Vector Icon */
export function EncryptPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="encrypt-pdf"
      {...props}
    >
      <path d="M4 19V5a2 2 0 0 1 2-2h7l5 5v2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <path d="M11 12V9a3 3 0 0 1 6 0v3" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
      
      <rect x="8" y="12" width="12" height="9" rx="2" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
      <circle cx="14" cy="16" r="1.5" fill="#1E293B" />
      <line x1="14" y1="16.5" x2="14" y2="18.5" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Sanitize PDF — Clear & Colorful Flat Vector Icon */
export function SanitizePdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="sanitize-pdf"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <polygon points="12 10 13 12.5 15.5 13.5 13 14.5 12 17 11 14.5 8.5 13.5 11 12.5 12 10" fill="#06B6D4" />
      <circle cx="16" cy="17" r="1.5" fill="#F43F5E" />
    </svg>
  );
}

/** Find and Redact — Clear & Colorful Flat Vector Icon */
export function FindAndRedactIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="find-and-redact"
      {...props}
    >
      <circle cx="10" cy="10" r="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
      <line x1="14.5" y1="14.5" x2="20" y2="20" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      
      <rect x="6" y="9" width="8" height="2.8" rx="0.5" fill="#1E293B" />
    </svg>
  );
}

/** Decrypt PDF — Clear & Colorful Flat Vector Icon */
export function DecryptPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="decrypt-pdf"
      {...props}
    >
      <path d="M4 19V5a2 2 0 0 1 2-2h7l5 5v2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <path d="M11 9a3 3 0 0 1 6 0v0" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
      
      <rect x="8" y="12" width="12" height="9" rx="2" fill="#10B981" stroke="#059669" strokeWidth="1" />
      <circle cx="14" cy="16.5" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

/** Flatten PDF — Clear & Colorful Flat Vector Icon */
export function FlattenPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="flatten-pdf"
      {...props}
    >
      <path d="M4 8l8-4 8 4-8 4-8-4z" fill="#6366F1" opacity="0.6" />
      <path d="M4 13l8 4 8-4" stroke="#38BDF8" strokeWidth="2" fill="none" />
      <path d="M4 18l8 4 8-4" stroke="#10B981" strokeWidth="2" fill="none" />
      
      <circle cx="12" cy="3" r="2.5" fill="#F43F5E" />
      <path d="M12 1.5v3m-1-1l1 1 1-1" stroke="#FFFFFF" strokeWidth="1" />
    </svg>
  );
}

/** Remove Metadata — Clear & Colorful Flat Vector Icon */
export function RemoveMetadataIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="remove-metadata"
      {...props}
    >
      <path d="M5 4a2 2 0 0 1 2-2h8l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <circle cx="12" cy="14" r="5" fill="#F43F5E" />
      <path d="M10 12l4 4m0-4l-4 4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Change Permissions — Clear & Colorful Flat Vector Icon */
export function ChangePermissionsIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="change-permissions"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#6366F1" fillOpacity="0.85" />
      
      <rect x="9" y="8" width="6" height="3" rx="1.5" fill="#FFFFFF" />
      <circle cx="13.5" cy="9.5" r="1" fill="#10B981" />
      <rect x="9" y="13" width="6" height="3" rx="1.5" fill="#FFFFFF" />
      <circle cx="10.5" cy="14.5" r="1" fill="#F43F5E" />
    </svg>
  );
}

/** Digital Sign PDF — Clear & Colorful Flat Vector Icon */
export function DigitalSignPdfIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="digital-sign-pdf"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      
      <circle cx="12" cy="9" r="3.5" fill="#F43F5E" />
      <polyline points="10.5 9 11.5 10 13.5 8" stroke="#FFFFFF" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      
      <circle cx="10" cy="16" r="1.5" fill="#FBBF24" />
      <path d="M11.5 16h4v-1.5m-2 1.5v1.5" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Validate Signature — Clear & Colorful Flat Vector Icon */
export function ValidateSignatureIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="validate-signature"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#10B981" stroke="#059669" strokeWidth="1" />
      
      <polyline points="8.5 12 11 14.5 15.5 9.5" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Cert Cryptor — Clear & Colorful Flat Vector Icon */
export function CertCryptorIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="cert-cryptor"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2.5" fill="#1E293B" stroke="#38BDF8" strokeWidth="1" />
      <path d="M7 8h10" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 11h6" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="15.5" cy="14.5" r="3" fill="#FBBF24" />
      <path d="M17.5 16.5l2 2" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Smart Data Redactor — Clear & Colorful Flat Vector Icon */
export function SmartDataRedactorIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="smart-data-redactor"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#1E293B" stroke="#6366F1" strokeWidth="1" />
      <rect x="7" y="9" width="10" height="2.5" rx="0.5" fill="#F43F5E" />
      <rect x="8.5" y="13" width="7" height="2.5" rx="0.5" fill="#F43F5E" />
    </svg>
  );
}

/** PDF Signature Anchor Helper — Clear & Colorful Flat Vector Icon */
export function PdfSignatureAnchorHelperIcon({ size = 24, className = '', ...props }: ToolIconProps) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      className={className}
      data-icon="pdf-signature-anchor-helper"
      {...props}
    >
      <circle cx="12" cy="12" r="8" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="12" y1="2" x2="12" y2="22" stroke="#0284C7" strokeWidth="1.5" />
      <line x1="2" y1="12" x2="22" y2="12" stroke="#0284C7" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="#F43F5E" />
      <circle cx="12" cy="12" r="1" fill="#FFFFFF" />
    </svg>
  );
}

export const TOOL_VECTOR_ICONS: Record<string, React.FC<ToolIconProps>> = {
  'pdf-multi-tool': PdfMultiToolIcon,
  'merge-pdf': MergePdfIcon,
  'split-pdf': SplitPdfIcon,
  'extract-pages': ExtractPagesIcon,
  'organize-pdf': OrganizePdfIcon,
  'delete-pages': DeletePagesIcon,
  'ocr-pdf': OcrPdfIcon,
  'alternate-merge': AlternateMergeIcon,
  'add-attachments': AddAttachmentsIcon,
  'extract-attachments': ExtractAttachmentsIcon,
  'edit-attachments': EditAttachmentsIcon,
  'divide-pages': DividePagesIcon,
  'add-blank-page': AddBlankPageIcon,
  'reverse-pages': ReversePagesIcon,
  'rotate-custom': RotateCustomIcon,
  'rotate-pdf': RotatePdfIcon,
  'overlay-pdf': OverlayPdfIcon,
  'add-page-labels': AddPageLabelsIcon,
  'n-up-pdf': NUpPdfIcon,
  'grid-combine': GridCombineIcon,
  'combine-single-page': CombineSinglePageIcon,
  'view-metadata': ViewMetadataIcon,
  'edit-metadata': EditMetadataIcon,
  'pdf-to-zip': PdfToZipIcon,
  'compare-pdfs': ComparePdfsIcon,
  'posterize-pdf': PosterizePdfIcon,
  'pdf-booklet': PdfBookletIcon,
  'booklet-folding-simulator': BookletFoldingSimulatorIcon,
  'passport-id-composer': PassportIdComposerIcon,
  'pdf-page-resizer-uniform': PdfPageResizerUniformIcon,
  'pdf-lossless-slicer': PdfLosslessSlicerIcon,
  'photo-tiling-prepress': PhotoTilingPrepressIcon,
  'compress-pdf': CompressPdfIcon,
  'fix-page-size': FixPageSizeIcon,
  'linearize-pdf': LinearizePdfIcon,
  'page-dimensions': PageDimensionsIcon,
  'remove-restrictions': RemoveRestrictionsIcon,
  'repair-pdf': RepairPdfIcon,
  'deskew-pdf': DeskewPdfIcon,
  'pdf-to-pdfa': PdfToPdfaIcon,
  'font-to-outline': FontToOutlineIcon,
  'ocg-manager': OcgManagerIcon,
  'deep-sanitize': DeepSanitizeIcon,
  'eink-optimizer': EinkOptimizerIcon,
  'batch-watermark-remover': BatchWatermarkRemoverIcon,
  'dead-link-debugger': DeadLinkDebuggerIcon,
  'pdf-deskew-aligner': PdfDeskewAlignerIcon,
  'handwriting-ink-contrast-booster': HandwritingInkContrastBoosterIcon,
  'edit-pdf': EditPdfIcon,
  'sign-pdf': SignPdfIcon,
  'crop-pdf': CropPdfIcon,
  'bookmark': BookmarkIcon,
  'table-of-contents': TableOfContentsIcon,
  'page-numbers': PageNumbersIcon,
  'add-watermark': AddWatermarkIcon,
  'header-footer': HeaderFooterIcon,
  'invert-colors': InvertColorsIcon,
  'background-color': BackgroundColorIcon,
  'text-color': TextColorIcon,
  'add-stamps': AddStampsIcon,
  'remove-annotations': RemoveAnnotationsIcon,
  'form-filler': FormFillerIcon,
  'form-creator': FormCreatorIcon,
  'remove-blank-pages': RemoveBlankPagesIcon,
  'pdf-reader': PdfReaderIcon,
  'citation-linker': CitationLinkerIcon,
  'form-logic-designer': FormLogicDesignerIcon,
  'bookmarks-auto-generator': BookmarksAutoGeneratorIcon,
  'batch-barcode-injector': BatchBarcodeInjectorIcon,
  'signature-ink-optimizer': SignatureInkOptimizerIcon,
  'interactive-toc-generator': InteractiveTocGeneratorIcon,
  'pdf-two-column-reflower': PdfTwoColumnReflowerIcon,
  'pdf-spine-bookbinder': PdfSpineBookbinderIcon,
  'pdf-scratchpad-canvas': PdfScratchpadCanvasIcon,
  'jpg-to-pdf': JpgToPdfIcon,
  'image-to-pdf': ImageToPdfIcon,
  'png-to-pdf': PngToPdfIcon,
  'webp-to-pdf': WebpToPdfIcon,
  'svg-to-pdf': SvgToPdfIcon,
  'bmp-to-pdf': BmpToPdfIcon,
  'heic-to-pdf': HeicToPdfIcon,
  'tiff-to-pdf': TiffToPdfIcon,
  'txt-to-pdf': TxtToPdfIcon,
  'json-to-pdf': JsonToPdfIcon,
  'psd-to-pdf': PsdToPdfIcon,
  'word-to-pdf': WordToPdfIcon,
  'excel-to-pdf': ExcelToPdfIcon,
  'pptx-to-pdf': PptxToPdfIcon,
  'xps-to-pdf': XpsToPdfIcon,
  'rtf-to-pdf': RtfToPdfIcon,
  'epub-to-pdf': EpubToPdfIcon,
  'mobi-to-pdf': MobiToPdfIcon,
  'djvu-to-pdf': DjvuToPdfIcon,
  'fb2-to-pdf': Fb2ToPdfIcon,
  'markdown-to-pdf': MarkdownToPdfIcon,
  'email-to-pdf': EmailToPdfIcon,
  'cbz-to-pdf': CbzToPdfIcon,
  'pdf-to-jpg': PdfToJpgIcon,
  'pdf-to-png': PdfToPngIcon,
  'pdf-to-webp': PdfToWebpIcon,
  'pdf-to-bmp': PdfToBmpIcon,
  'pdf-to-tiff': PdfToTiffIcon,
  'pdf-to-cbz': PdfToCbzIcon,
  'pdf-to-svg': PdfToSvgIcon,
  'pdf-to-greyscale': PdfToGreyscaleIcon,
  'pdf-to-json': PdfToJsonIcon,
  'pdf-to-docx': PdfToDocxIcon,
  'pdf-to-pptx': PdfToPptxIcon,
  'pdf-to-excel': PdfToExcelIcon,
  'pdf-to-markdown': PdfToMarkdownIcon,
  'extract-images': ExtractImagesIcon,
  'rasterize-pdf': RasterizePdfIcon,
  'extract-tables': ExtractTablesIcon,
  'ai-pdf-reflower': AiPdfReflowerIcon,
  'vector-extractor': VectorExtractorIcon,
  'pdf-to-slide': PdfToSlideIcon,
  'annotation-exporter': AnnotationExporterIcon,
  'global-invoice-parser': GlobalInvoiceParserIcon,
  'timestamp-pdf': TimestampPdfIcon,
  'encrypt-pdf': EncryptPdfIcon,
  'sanitize-pdf': SanitizePdfIcon,
  'find-and-redact': FindAndRedactIcon,
  'decrypt-pdf': DecryptPdfIcon,
  'flatten-pdf': FlattenPdfIcon,
  'remove-metadata': RemoveMetadataIcon,
  'change-permissions': ChangePermissionsIcon,
  'digital-sign-pdf': DigitalSignPdfIcon,
  'validate-signature': ValidateSignatureIcon,
  'cert-cryptor': CertCryptorIcon,
  'smart-data-redactor': SmartDataRedactorIcon,
  'pdf-signature-anchor-helper': PdfSignatureAnchorHelperIcon,
};
