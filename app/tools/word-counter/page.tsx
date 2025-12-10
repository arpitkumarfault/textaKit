import { Metadata } from "next";
import WordCounterUI from "./_components/WordCounterUI";
import { generateToolSchema } from "../../lib/seo";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import StructuredData from "../../components/seo/StructuredData";
import Breadcrumb from "../../components/shared/Breadcrumb";
import SidebarAd from "../../components/ads/SidebarAd";
import AdBanner from "../../components/ads/AdBanner";


export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Word Counter - Free Online Character & Word Count Tool",
  description:
    "Count words, characters, sentences, and paragraphs instantly. Free word counter tool with reading time calculator. Perfect for essays, articles, and content writing.",
  keywords: [
    "word counter",
    "character counter",
    "word count",
    "text statistics",
    "reading time calculator",
  ],
};

const WordCounterPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Word Counter", href: "/tools/word-counter" },
  ];

  const tableOfContents = [
    { id: "tool", title: "Word Counter Tool" },
    { id: "features", title: "Features" },
    { id: "how-to-use", title: "How to Use" },
    { id: "benefits", title: "Benefits" },
    { id: "faq", title: "FAQ" },
  ];

  const structuredData = generateToolSchema({
    name: "Word Counter",
    description: "Free online word and character counter tool",
    url: "/tools/word-counter",
  });

  return (
    <>
      <StructuredData data={structuredData} />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mt-6 grid gap-8 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="mb-8">
                <h1 className="mb-4 text-4xl font-bold text-gray-900">
                  Free Word Counter
                </h1>
                <p className="text-xl text-gray-600">
                  Count words, characters, sentences, and paragraphs instantly.
                  Perfect for essays, blog posts, and professional writing.
                </p>
                <ShareButtons
                  url="/tools/word-counter"
                  title="Free Word Counter Tool"
                />
              </div>

              <AdBanner slot="toolPageTop" format="horizontal" />

              <div id="tool" className="my-8">
                <WordCounterUI />
              </div>

              {/* Features */}
              <section id="features" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Key Features
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <FeatureBox
                    icon="📊"
                    title="Detailed Statistics"
                    description="Get comprehensive text statistics including words, characters, sentences, paragraphs, and reading time."
                  />
                  <FeatureBox
                    icon="⚡"
                    title="Real-Time Counting"
                    description="See word and character counts update instantly as you type."
                  />
                  <FeatureBox
                    icon="⏱️"
                    title="Reading Time"
                    description="Calculate estimated reading time based on average reading speed."
                  />
                  <FeatureBox
                    icon="🎯"
                    title="Keyword Density"
                    description="Track keyword frequency and density for SEO optimization."
                  />
                </div>
              </section>

              {/* How to Use */}
              <section id="how-to-use" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  How to Use
                </h2>
                <div className="space-y-4">
                  <StepCard
                    number={1}
                    title="Paste or Type Text"
                    description="Copy and paste your content into the text area, or start typing directly."
                  />
                  <StepCard
                    number={2}
                    title="View Statistics"
                    description="Word and character counts update automatically as you type."
                  />
                  <StepCard
                    number={3}
                    title="Analyze Results"
                    description="Review detailed statistics including reading time and keyword density."
                  />
                </div>
              </section>

              {/* Benefits */}
              <section id="benefits" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Benefits
                </h2>
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
                  <BenefitItem
                    title="Meet Word Limits"
                    description="Ensure your content meets specific word count requirements for essays, articles, or assignments."
                  />
                  <BenefitItem
                    title="Optimize Content"
                    description="Monitor keyword density and optimize your content for SEO."
                  />
                  <BenefitItem
                    title="Improve Readability"
                    description="Use statistics to adjust sentence and paragraph length for better readability."
                  />
                  <BenefitItem
                    title="Track Progress"
                    description="Monitor your writing progress and stay on target with word count goals."
                  />
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <FAQItem
                    question="How accurate is the word counter?"
                    answer="Our word counter is highly accurate and follows standard word counting rules. It counts words separated by spaces and handles multiple languages."
                  />
                  <FAQItem
                    question="Does it count characters with or without spaces?"
                    answer="Both! We display character count with spaces and without spaces, giving you complete flexibility."
                  />
                  <FAQItem
                    question="How is reading time calculated?"
                    answer="Reading time is calculated based on an average reading speed of 200 words per minute, which is the standard for adult readers."
                  />
                  <FAQItem
                    question="Can I use this for academic papers?"
                    answer="Yes! Our word counter is perfect for academic writing, essays, research papers, and meeting assignment word count requirements."
                  />
                  <FAQItem
                    question="Is my text stored or shared?"
                    answer="No, all processing happens locally in your browser. Your text is never uploaded to our servers or shared."
                  />
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-4 space-y-6">
                <TableOfContents items={tableOfContents} />
                <SidebarAd slot="toolPageSidebar" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper Components
const FeatureBox = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="rounded-lg border border-gray-200 bg-white p-6">
    <div className="mb-2 text-3xl">{icon}</div>
    <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StepCard = ({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) => (
  <div className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
      {number}
    </div>
    <div>
      <h3 className="mb-1 font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const BenefitItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="border-l-4 border-blue-600 pl-4">
    <h3 className="mb-1 font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <details className="group rounded-lg border border-gray-200 bg-white p-4">
    <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 list-none">
      {question}
      <span className="transition group-open:rotate-180">▼</span>
    </summary>
    <p className="mt-3 text-gray-600">{answer}</p>
  </details>
);

export default WordCounterPage;