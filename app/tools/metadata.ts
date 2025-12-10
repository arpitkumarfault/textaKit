// src/app/tools/metadata.ts  (or directly in page.tsx)

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Online Text Tools - 30+ Powerful Writing & Editing Tools",
  description:
    "All-in-one free text tools hub: Grammar Checker, Word Counter, Spell Checker, Case Converter, Character Counter, Text Formatter, and 25+ more. No signup, 100% private, instant results.",
  
  keywords: [
    "text tools",
    "online text tools",
    "free text editor",
    "grammar checker",
    "word counter",
    "spell checker",
    "case converter",
    "character counter",
    "writing tools",
    "text formatter",
    "paragraph counter",
    "free online tools",
  ],

  authors: [{ name: "TextToolsHub" }],
  creator: "TextToolsHub",
  publisher: "TextToolsHub",

  openGraph: {
    title: "Free Online Text Tools - Grammar, Word Count, Spell Check & More",
    description:
      "30+ professional text editing tools. Completely free, no registration, works instantly in your browser.",
    url: "https://yourdomain.com/tools",
    siteName: "TextToolsHub",
    images: [
      {
        url: "https://yourdomain.com/images/og-tools-page.jpg",
        width: 1200,
        height: 630,
        alt: "TextToolsHub - Free Online Text Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Online Text Tools - Grammar Checker, Word Counter & More",
    description: "30+ powerful text tools. 100% free, no signup required.",
    images: ["https://yourdomain.com/images/og-tools-page.jpg"],
    creator: "@yourhandle",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://yourdomain.com/tools",
  },

  verification: {
    google: "your-google-site-verification-code",
  },
};