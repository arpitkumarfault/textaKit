// src/config/site.ts
export const siteConfig = {
  name: "Textakit",
  title: "Free Online Text Tools - Grammar, Word Counter & More | Textakit",
  description:
    "Professional text editing tools including grammar checker, word counter, spell checker, and text formatter. 100% free, no registration required. Improve your writing instantly.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://textakit.com",
  ogImage: "/images/og-image.jpg",

  // STRING ONLY → This fixed all key warnings
  keywords:
    "text tools, grammar checker, word counter, spell checker, text editor online, character counter, case converter, text formatter, writing tools, free text tools, online text editor, text analysis, json formatter, base64 encoder, markdown preview, regex tester, lorem ipsum",

  author: {
    name: "Textakit Team",
    email: "karpit757@gmail.com",
    url: "https://textakit.com",
  },
  creator: "@textakit",
  publisher: "Textakit",
  social: {
    twitter: "@textakit",
    facebook: "textakit",
    instagram: "textakit",
    linkedin: "company/textakit",
  },
} as const;

export const toolsConfig = {
  maxTextLength: 100_000,
  autosaveDelay: 2000,
  defaultLanguage: "en-US",
  enableSpellCheck: true,
  enableGrammarCheck: true,
};

export const features = {
  enableBlog: true,
  enableNewsletter: false,
  enableComments: false,
  enableSearch: true,
  enableDarkMode: true,
};