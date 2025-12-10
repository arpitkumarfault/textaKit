import { siteConfig } from "../config/site";

export const defaultSEO = {
  title: siteConfig.title,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    handle: siteConfig.social.twitter,
    site: siteConfig.social.twitter,
    cardType: "summary_large_image",
  },
};

export const toolPageSEO = (toolName: string, description: string) => ({
  title: `${toolName} - Free Online Tool | ${siteConfig.name}`,
  description,
  canonical: `${siteConfig.url}/tools/${toolName.toLowerCase().replace(/\s+/g, "-")}`,
});

export const blogPostSEO = (title: string, description: string, slug: string) => ({
  title: `${title} | ${siteConfig.name} Blog`,
  description,
  canonical: `${siteConfig.url}/blog/${slug}`,
  openGraph: {
    type: "article",
    article: {
      publishedTime: new Date().toISOString(),
      authors: [siteConfig.author.name],
    },
  },
});