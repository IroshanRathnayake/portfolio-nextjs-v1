import { seoData } from '@/lib/content/portfolio';
import ThemeProvider from '@/lib/hooks/use-theme';
import fontVariables from '@/lib/utils/fonts';
import Cursor from '@/components/ui/Cursor';
import '../styles/globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: seoData.title,
  authors: [
    {
      name: seoData.author,
    },
  ],
  description: seoData.description,
  keywords: seoData.keywords.join(','),
  metadataBase: new URL(seoData.url),
  alternates: {
    canonical: seoData.url,
  },
  openGraph: {
    type: 'website',
    url: seoData.url,
    title: seoData.title,
    description: seoData.description,
    images: seoData.image,
    siteName: seoData.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.title,
    description: seoData.description,
    images: seoData.image,
    site: seoData.url,
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      url: '/favicons/web-favicon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/favicons/web-favicon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/favicons/web-favicon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicons/favicon-web.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicons/favicon-web.png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`text-text bg-bg ${fontVariables}`}>
        <ThemeProvider>
          <Cursor className="hidden dark:lg:block" />
          {children}
        </ThemeProvider>
        <Script src="/scripts/no-flash.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}