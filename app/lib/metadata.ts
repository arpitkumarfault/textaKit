import { Metadata } from "next";
import { generateMetadata } from "./seo";
import { Tool } from "../types/tools";
import { BlogPost } from "../types/blog";

export function createToolMetadata(tool: Tool): Metadata {
  return generateMetadata({
    title: tool.metaTitle || `${tool.title} - Free Online Tool`,
    description:
      tool.metaDescription ||
      tool.longDescription ||
      tool.description,
    keywords: tool.keywords,
    url: `/tools/${tool.slug}`,
  });
}

export function createBlogPostMetadata(post: BlogPost): Metadata {
  return generateMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    url: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
  });
}

export function createCategoryMetadata(category: string): Metadata {
  return generateMetadata({
    title: `${category} Tools`,
    description: `Browse all ${category.toLowerCase()} tools. Free online text editing and analysis tools.`,
    url: `/tools/category/${category.toLowerCase()}`,
  });
}