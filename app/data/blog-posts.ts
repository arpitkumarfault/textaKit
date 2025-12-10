import { BlogPost } from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "10-grammar-mistakes-to-avoid",
    title: "10 Common Grammar Mistakes to Avoid in Professional Writing",
    description: "Learn about the most common grammar mistakes that can hurt your professional writing and how to avoid them.",
    excerpt: "Discover the top 10 grammar mistakes that even experienced writers make and learn how to avoid them in your professional communication.",
    content: `
# 10 Common Grammar Mistakes to Avoid in Professional Writing

Professional writing requires attention to detail and proper grammar. Here are the most common mistakes to watch out for:

## 1. Your vs. You're
...
    `,
    author: {
      name: "Sarah Johnson",
      bio: "Professional editor with 10+ years of experience",
    },
    publishedAt: "2024-01-15",
    category: "Grammar Guide",
    tags: ["grammar", "writing tips", "professional writing"],
    featured: true,
    readingTime: 5,
    metaTitle: "10 Common Grammar Mistakes to Avoid | Writing Guide",
    metaDescription: "Learn about the most common grammar mistakes in professional writing and how to avoid them. Improve your writing skills with our comprehensive guide.",
  },
  {
    slug: "how-to-improve-writing-skills",
    title: "How to Improve Your Writing Skills: A Complete Guide",
    description: "Practical tips and strategies to enhance your writing skills for any purpose.",
    excerpt: "Whether you're writing emails, essays, or blog posts, these proven strategies will help you become a better writer.",
    content: `
# How to Improve Your Writing Skills: A Complete Guide

Writing is a skill that can be developed with practice and the right techniques...
    `,
    author: {
      name: "Michael Chen",
      bio: "Content strategist and writing coach",
    },
    publishedAt: "2024-01-10",
    category: "Writing Tips",
    tags: ["writing skills", "improvement", "tips"],
    featured: true,
    readingTime: 8,
  },
  {
    slug: "seo-writing-best-practices",
    title: "SEO Writing Best Practices for 2024",
    description: "Master SEO writing with these proven techniques and best practices.",
    excerpt: "Learn how to write content that ranks well in search engines while providing value to readers.",
    content: `
# SEO Writing Best Practices for 2024

Search engine optimization (SEO) writing is crucial for online visibility...
    `,
    author: {
      name: "Emily Rodriguez",
      bio: "SEO specialist and content marketer",
    },
    publishedAt: "2024-01-05",
    category: "SEO Writing",
    tags: ["SEO", "content writing", "search optimization"],
    featured: true,
    readingTime: 7,
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getFeaturedPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts.filter((post) => post.featured).slice(0, limit);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter((post) => post.category === category);
};

export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter((post) => 
      post.slug !== currentSlug && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};