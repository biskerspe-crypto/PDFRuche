'use client';

import React, { useState } from 'react';
import { type Locale } from '@/lib/i18n/config';
import { Header } from '@/components/layout/Header';
import { FooterMinimal } from '@/components/layout/FooterMinimal';
import { Sidebar } from '@/components/layout/Sidebar';

export interface AppLayoutProps {
  locale: Locale;
  children: React.ReactNode;
  showSidebar?: boolean;
  showSearch?: boolean;
}

/**
 * Main application layout: Header + optional Sidebar + content + Footer.
 * On mobile the sidebar becomes a drawer; content area is always scrollable.
 */
export const AppLayout: React.FC<AppLayoutProps> = ({
  locale,
  children,
  showSidebar = true,
  showSearch = true,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--color-background))]">
      <Header locale={locale} showSearch={showSearch} />
      <div className="flex-1 flex pt-20">
        {showSidebar && (
          <Sidebar locale={locale} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        )}
        <main id="main-content" className="flex-1 min-w-0" tabIndex={-1}>
          {children}
        </main>
      </div>
      <FooterMinimal locale={locale} />
    </div>
  );
};

export default AppLayout;