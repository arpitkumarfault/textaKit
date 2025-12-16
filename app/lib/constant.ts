export const APP_NAME = "Textakit";
export const APP_DESCRIPTION = "Professional text editing tools for everyone";

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/texttoolshub",
  facebook: "https://facebook.com/texttoolshub",
  github: "https://github.com/texttoolshub",
  linkedin: "https://linkedin.com/company/texttoolshub",
};

export const CONTACT_EMAIL = "contact@texttoolshub.com";

export const ROUTES = {
  home: "/",
  tools: "/tools",
  blog: "/blog",
  about: "/about",
  contact: "/contact",
  privacyPolicy: "/privacy-policy",
  termsOfService: "/terms-of-service",
  disclaimer: "/disclaimer",
} as const;

export const TOOL_CATEGORIES = [
  "All Tools",
  "Writing",
  "Analysis",
  "Formatting",
  "Conversion",
  "SEO",
  "Productivity",
] as const;

export const BLOG_CATEGORIES = [
  "Writing Tips",
  "Grammar Guide",
  "SEO Writing",
  "Content Creation",
  "Productivity",
  "Tools & Resources",
] as const;

export const MAX_TEXT_LENGTH = 100000;
export const AUTO_SAVE_DELAY = 2000;
export const DEBOUNCE_DELAY = 300;

export const META_DEFAULTS = {
  title: "Free Online Text Tools | Textakit",
  description:
    "Professional text editing tools including grammar checker, word counter, spell checker, and more. 100% free, no registration required.",
  keywords:
    "text tools, grammar checker, word counter, spell checker, text editor, online tools",
};