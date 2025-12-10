import { Metadata } from "next";
import StructuredData from "./components/seo/StructuredData";
import AdBanner from "./components/ads/AdBanner";
import { tools } from "./data/tools";
import { siteConfig } from "./config/site";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import FeaturedTools from "./components/sections/FeaturedTools";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
};

const HomePage = () => {
  const featuredTools = tools.filter(tool => tool.featured).slice(0, 6);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/tools?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />

      {/* Hero Section */}
      <Hero />

      {/* AdSense Banner */}
      <div className="container-custom py-8">
        <AdBanner slot="homepageTop" format="horizontal" />
      </div>

      {/* Features Section */}
      <Features />

      {/* Featured Tools */}
      <FeaturedTools tools={featuredTools} />

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-accent py-20 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Ready to Enhance Your Writing?
          </h2>
          <p className="mb-8 text-lg text-white/90 max-w-2xl mx-auto">
            Join thousands of users who trust our text tools for their daily writing needs.
            Start using our professional tools for free today.
          </p>
          <a
            href="/tools"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-primary shadow-xl transition hover:shadow-2xl hover:scale-105"
          >
            Get Started Now
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;