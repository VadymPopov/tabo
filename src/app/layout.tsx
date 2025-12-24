import Footer from '@/components/Footer';
import Header from '@/components/Header';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TABO - Toronto Association of Basketball Officials',
  description:
    'Professional basketball officials serving Toronto since 1957. Book officials, membership applications, and event coverage.',
  authors: [{ name: 'TABO' }],
  creator: 'TABO',
  publisher: 'TABO',
  openGraph: {
    title: 'TABO - Toronto Association of Basketball Officials',
    description:
      'Professional basketball officials for your games and tournaments across Toronto.',
    url: 'https://torontobasketballofficials.ca',
    siteName: 'TABO',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TABO - Toronto Association of Basketball Officials',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TABO - Toronto Association of Basketball Officials',
    description:
      'Professional basketball officials for your games and tournaments.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen bg-black text-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
