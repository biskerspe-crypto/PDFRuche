import type { Metadata } from 'next';
import '@/app/globals.css';
import { AdProvider } from '@/components/ads';
import { ToastProvider } from '@/components/ui/Toast';

export const metadata: Metadata = {
  title: 'PDFRuche - The Living Workspace for Everything PDF',
  description: 'PDFRuche — The Organic Powerhouse for Everything PDF. Free, secure and 100% browser-based PDF tools for merging, splitting, compressing, converting, signing, and editing PDF files with zero server uploads.',
  icons: {
    icon: '/icon.jpg',
    shortcut: '/icon.jpg',
    apple: '/icon.jpg',
  },
};

// Root layout - provides the basic HTML structure
// The actual layout with i18n is in [locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
        <style dangerouslySetInnerHTML={{ __html: 'html{scrollbar-gutter:stable}' }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased dark" suppressHydrationWarning>
        <AdProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </AdProvider>
      </body>
    </html>
  );
}
