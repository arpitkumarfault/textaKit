import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Grammar Checker - Instant Text Correction Tool",
  description:
    "Check your grammar instantly with our free online grammar checker. Detect and fix grammatical errors, spelling mistakes, and punctuation issues in seconds. No registration required.",
  keywords: [
    "grammar checker",
    "grammar check",
    "check grammar online",
    "free grammar checker",
    "grammar correction",
    "text correction",
    "grammar tool",
    "spelling and grammar check",
  ],
  openGraph: {
    title: "Free Grammar Checker - Instant Text Correction",
    description:
      "Check your grammar instantly. Free, accurate, and easy to use. No sign-up required.",
    type: "website",
    images: [
      {
        url: "/images/tools/grammar-checker-og.jpg",
        width: 1200,
        height: 630,
        alt: "Grammar Checker Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Grammar Checker - Instant Text Correction",
    description: "Check your grammar instantly. Free and accurate.",
  },
  alternates: {
    canonical: "/tools/grammar-checker",
  },
};