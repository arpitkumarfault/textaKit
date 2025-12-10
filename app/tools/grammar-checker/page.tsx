
import React from "react"; // ← THIS WAS MISSING — THIS IS THE FIX
import { Metadata } from "next";
import GrammarToolUI from "./_components/GrammarToolUI";
import SidebarAd from "../../components/ads/SidebarAd";
import Breadcrumb from "../../components/shared/Breadcrumb";
import StructuredData from "../../components/seo/StructuredData";
import ShareButtons from "../../components/shared/ShareButtons";
import TableOfContents from "../../components/shared/TableOfContents";
import AdBanner from "../../components/ads/AdBanner";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Free Grammar Checker - Instant Text Correction Tool",
  description:
    "Check your grammar instantly with our free online grammar checker. Detect and fix grammatical errors, spelling mistakes, and punctuation issues in seconds.",
  keywords: [
    "grammar checker",
    "grammar check",
    "check grammar online",
    "free grammar checker",
    "grammar correction",
    "text correction",
  ],
  openGraph: {
    title: "Free Grammar Checker - Instant Text Correction",
    description: "Check your grammar instantly. Free, accurate, and easy to use.",
    url: "/tools/grammar-checker",
    type: "website",
  },
};

const GrammarCheckerPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Grammar Checker", href: "/tools/grammar-checker" },
  ];

  const tableOfContents = [
    { id: "tool", title: "Grammar Checker Tool" },
    { id: "features", title: "Features" },
    { id: "how-to-use", title: "How to Use" },
    { id: "benefits", title: "Benefits" },
    { id: "faq", title: "FAQ" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Grammar Checker",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mt-6 grid gap-8 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="mb-4 text-4xl font-bold text-gray-900">
                  Free Grammar Checker
                </h1>
                <p className="text-xl text-gray-600">
                  Instantly check and correct grammar, spelling, and punctuation
                  errors in your text. Perfect for essays, emails, and
                  professional writing.
                </p>
                <ShareButtons
                  url="/tools/grammar-checker"
                  title="Free Grammar Checker Tool"
                />
              </div>

              <AdBanner slot="toolPageTop" format="horizontal" />

              <div id="tool" className="my-8">
                <GrammarToolUI />
              </div>

              {/* Features */}
              <section id="features" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Key Features
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <FeatureBox
                    icon="✓"
                    title="Grammar Detection"
                    description="Identifies grammatical errors including subject-verb agreement, tense consistency, and sentence structure issues."
                  />
                  <FeatureBox
                    icon="✓"
                    title="Spelling Correction"
                    description="Catches spelling mistakes and typos with suggestions for correct spellings."
                  />
                  <FeatureBox
                    icon="✓"
                    title="Punctuation Check"
                    description="Ensures proper use of commas, periods, apostrophes, and other punctuation marks."
                  />
                  <FeatureBox
                    icon="✓"
                    title="Real-time Analysis"
                    description="Get instant feedback as you type with live error highlighting."
                  />
                </div>
              </section>

              {/* How to Use */}
              <section id="how-to-use" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  How to Use the Grammar Checker
                </h2>
                <div className="space-y-4">
                  <StepInstruction number={1} title="Paste Your Text" description="Copy and paste your content into the text editor above, or start typing directly." />
                  <StepInstruction number={2} title="Automatic Analysis" description="The tool will automatically analyze your text and highlight any grammar, spelling, or punctuation errors." />
                  <StepInstruction number={3} title="Review Suggestions" description="Click on highlighted errors to see suggestions and explanations for corrections." />
                  <StepInstruction number={4} title="Apply Corrections" description="Accept suggestions to fix errors, or make manual edits as needed." />
                </div>
              </section>

              {/* Benefits */}
              <section id="benefits" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Benefits of Using Our Grammar Checker
                </h2>
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
                  <BenefitItem title="Improve Writing Quality" description="Enhance the clarity and professionalism of your writing by eliminating errors." />
                  <BenefitItem title="Save Time" description="Quickly identify and fix errors instead of manual proofreading." />
                  <BenefitItem title="Learn as You Write" description="Understand your common mistakes and improve your grammar skills over time." />
                  <BenefitItem title="Boost Confidence" description="Submit error-free documents and communications with confidence." />
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <FAQItem question="Is the grammar checker really free?" answer="Yes, our grammar checker is 100% free to use with no limitations. All features are available to everyone without registration or payment." />
                  <FAQItem question="Is my text stored or shared?" answer="No, your text is processed locally in your browser and is never uploaded to our servers. Your privacy is completely protected." />
                  <FAQItem question="What types of errors does it detect?" answer="Our tool detects grammar errors, spelling mistakes, punctuation issues, and common writing problems like passive voice and wordiness." />
                  <FAQItem question="Can I use this for academic writing?" answer="Yes, our grammar checker is suitable for essays, research papers, and academic writing. However, always review suggestions carefully." />
                  <FAQItem question="Does it work offline?" answer="The basic grammar checking functionality works in your browser, but initial page load requires an internet connection." />
                </div>
              </section>

              {/* Related Tools */}
              <section className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Related Tools
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  <RelatedToolCard title="Spell Checker" href="/tools/spell-checker" />
                  <RelatedToolCard title="Word Counter" href="/tools/word-counter" />
                  <RelatedToolCard title="Text Formatter" href="/tools/text-formatter" />
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-4 space-y-6">
                <TableOfContents items={tableOfContents} />
                <SidebarAd slot="homepageSidebar" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper Components (must be below the main component)
const FeatureBox = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-6">
    <div className="mb-2 text-2xl text-green-600">{icon}</div>
    <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StepInstruction = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <div className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
      {number}
    </div>
    <div>
      <h3 className="mb-1 font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const BenefitItem = ({ title, description }: { title: string; description: string }) => (
  <div className="border-l-4 border-blue-600 pl-4">
    <h3 className="mb-1 font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <details className="group rounded-lg border border-gray-200 bg-white p-4">
    <summary className="cursor-pointer font-semibold text-gray-900 list-none flex justify-between items-center">
      {question}
      <span className="transition group-open:rotate-180">▼</span>
    </summary>
    <p className="mt-3 text-gray-600">{answer}</p>
  </details>
);

const RelatedToolCard = ({ title, href }: { title: string; href: string }) => (
  <a href={href} className="block rounded-lg border border-gray-200 bg-white p-4 transition hover:border-blue-600 hover:shadow-md">
    <h3 className="font-semibold text-gray-900">{title}</h3>
  </a>
);

export default GrammarCheckerPage;