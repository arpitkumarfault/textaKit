export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  {
    name: "Tools",
    href: "/tools",
    description: "Browse all text editing tools",
  },
  {
    name: "Blog",
    href: "/blog",
    description: "Writing tips and guides",
  },
  {
    name: "About",
    href: "/about",
    description: "Learn more about us",
  },
  {
    name: "Contact",
    href: "/contact",
    description: "Get in touch",
  },
];

export const footerNavigation = {
  tools: [
    { name: "Grammar Checker", href: "/tools/grammar-checker" },
    { name: "Word Counter", href: "/tools/word-counter" },
    { name: "Spell Checker", href: "/tools/spell-checker" },
    { name: "Text Formatter", href: "/tools/text-formatter" },
    { name: "Case Converter", href: "/tools/case-converter" },
    { name: "Character Counter", href: "/tools/character-counter" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
  resources: [
    { name: "Writing Tips", href: "/blog/category/writing-tips" },
    { name: "Grammar Guide", href: "/blog/category/grammar-guide" },
    { name: "SEO Writing", href: "/blog/category/seo-writing" },
  ],
};