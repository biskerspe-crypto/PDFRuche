/**
 * Site configuration
 */
export const siteConfig = {
  name: 'PDFRuche',
  description: 'PDFRuche — The Organic Powerhouse for Everything PDF. 100% private, client-side & browser-based PDF tools. Merge, split, compress, convert, sign and edit PDF files online without uploading to servers.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mypdftree.app',
  ogImage: '/images/brand/PDFRuche-logo.png',
  links: {
    github: 'https://github.com/biskerspe-crypto/PDFRuche',
    githubFork: 'https://github.com/biskerspe-crypto/PDFRuche',
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  },
  creator: 'PDFRuche Team',
  keywords: [
    'PDFRuche',
    'PDF tree',
    'PDF tools',
    'PDF editor',
    'merge PDF',
    'split PDF',
    'compress PDF',
    'convert PDF',
    'free PDF tools',
    'online PDF editor',
    'browser-based PDF',
    'private PDF processing',
    'eco PDF studio',
  ],
  // SEO-related settings
  seo: {
    titleTemplate: '%s | PDFRuche',
    defaultTitle: 'PDFRuche — The Living Workspace for Everything PDF',
    twitterHandle: '@mypdftree',
    locale: 'en_US',
  },
};

/**
 * Navigation configuration
 */
export const navConfig = {
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Tools', href: '/#studio-section' },
    { title: 'About', href: '/about' },
    { title: 'FAQ', href: '/faq' },
  ],
  footerNav: [
    { title: 'Privacy', href: '/privacy' },
    { title: 'Contact', href: '/contact' },
  ],
};
