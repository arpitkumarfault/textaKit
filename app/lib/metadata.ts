// app/lib/metadata.ts

import { Metadata } from "next";
import { generateMetadata } from "./seo";
import { siteConfig } from "../config/site";
import { Tool } from "../types/tools";
import { BlogPost } from "../types/blog";

/**
 * Tool Page Metadata
 */
export function createToolMetadata(tool: Tool): Metadata {
  return generateMetadata({
    title: tool.metaTitle || `${tool.title} - Free Online ${tool.title} | Textakit`,
    description:
      tool.metaDescription ||
      tool.longDescription ||
      tool.description ||
      `${tool.title} online free and instantly. No signup, no installation, 100% client-side.`,

    keywords: Array.isArray(tool.keywords)
      ? tool.keywords.join(", ")
      : typeof tool.keywords === "string"
      ? tool.keywords
      : siteConfig.keywords,

    image:
      // Safely access optional image fields
      (tool as any).ogImage ||
      (tool as any).image ||
      (tool as any).coverImage ||
      siteConfig.ogImage,

    url: `/tools/${tool.slug}`,
  });
}

/**
 * Blog Post Metadata
 */
export function createBlogPostMetadata(post: BlogPost): Metadata {
  return generateMetadata({
    title: post.metaTitle || `${post.title} | Textakit Blog`,
    description: post.metaDescription || post.excerpt || siteConfig.description,

    image:
      // Safely try all possible image fields
      (post as any).coverImage ||
      (post as any).ogImage ||
      (post as any).image ||
      (post as any).featuredImage ||
      siteConfig.ogImage,

    url: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,

    keywords: Array.isArray((post as any).keywords)
      ? (post as any).keywords.join(", ")
      : (post as any).keywords,
  });
}

/**
 * Category Page Metadata
 */
export function createCategoryMetadata(category: string): Metadata {
  const formatted = category
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return generateMetadata({
    title: `${formatted} Tools - Free Online Text Tools | Textakit`,
    description: `Best free ${formatted.toLowerCase()} tools: word counter, text formatter, case converter, JSON formatter, and more. All 100% client-side.`,
    keywords: `${formatted.toLowerCase()} tools, online text tools, free writing tools`,
    url: `/tools/category/${category}`,
  });
}

/**
 * Static Metadata Exports (optional but clean)
 */
export const homeMetadata: Metadata = generateMetadata();
export const privacyMetadata: Metadata = generateMetadata({
  title: "Privacy Policy | Textakit",
  description: "Your text never leaves your device. 100% client-side. No tracking. No cookies.",
});
export const termsMetadata: Metadata = generateMetadata({
  title: "Terms of Service | Textakit",
});
