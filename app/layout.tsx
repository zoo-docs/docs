import './global.css';
import type { Viewport, Metadata } from 'next';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { RootProvider } from '@hanzo/docs/ui/provider/next';

export const metadata: Metadata = {
  title: {
    template: '%s | Zoo Docs',
    default: 'Zoo Docs',
  },
  description: 'Documentation for Zoo Labs Foundation - Democratizing AI through decentralized training.',
  openGraph: {
    title: 'Zoo Docs',
    description: 'Documentation for Zoo Labs Foundation - Democratizing AI through decentralized training.',
    url: 'https://docs.zoo.ngo',
    siteName: 'Zoo Docs',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@zoolabs',
  },
};

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a1208' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
