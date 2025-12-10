import ParagraphCounterUI from "./_components/ParagraphCounterUI";
import AdBanner from "../../components/ads/AdBanner";

import { generateToolSchema } from "../../lib/seo";
import StructuredData from "../../components/seo/StructuredData";
import Breadcrumb from "../../components/shared/Breadcrumb";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import SidebarAd from "../../components/ads/SidebarAd";

import { Metadata } from 'next';

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Paragraph Counter", href: "/tools/paragraph-counter" },
];

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Paragraph Counter - Free Online Tool",
  description: "Count paragraphs instantly with our free online tool. Improve readability, SEO, and content structure for your articles, essays, and documents.",
  keywords: [
    "paragraph counter",
    "count paragraphs",
    "online paragraph counter",
    "free paragraph counter",
    "paragraph count tool",
    "text analysis",
    "content optimization",
    "readability tool",
  ],
  openGraph: {
    title: "Paragraph Counter - Free Online Tool",
    description: "Count paragraphs instantly with our free online tool. Improve readability, SEO, and content structure for your articles, essays, and documents.",
    url: "https://www.toolsver.com/tools/paragraph-counter",
    type: "website",
  },
};

const tableOfContents = [
  { id: "tool", title: "Paragraph Counter Tool" },
  { id: "features", title: "Features" },
  { id: "ideal-length", title: "Ideal Paragraph Length" },
  { id: "faq", title: "FAQ" },
];

const structuredData = generateToolSchema({
  name: "Paragraph Counter",
  description: "Free online tool to count paragraphs in any text",
  url: "/tools/paragraph-counter",
});

export default function ParagraphCounterPage() {
  return (
    <>
      <StructuredData data={structuredData} />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mt-6 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-8">
                <h1 className="mb-4 text-4xl font-bold text-gray-900">
                  Free Paragraph Counter
                </h1>
                <p className="text-xl text-gray-600">
                  Count paragraphs instantly and improve your content structure. Ideal for writers, bloggers, students, and SEO professionals.
                </p>
                <ShareButtons url="/tools/paragraph-counter" title="Free Paragraph Counter Tool" />
              </div>

              <AdBanner slot="toolPageTop" format="horizontal" />

              <div id="tool" className="my-8">
                <ParagraphCounterUI />
              </div>

              <section id="features" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Key Features</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-lg border bg-white p-6 text-center">
                    <div className="text-5xl mb-2">⚡</div>
                    <h3 className="font-semibold">Real-Time Count</h3>
                    <p className="text-sm text-gray-600 mt-2">Updates instantly as you type or paste</p>
                  </div>
                  <div className="rounded-lg border bg-white p-6 text-center">
                    <div className="text-5xl mb-2">📏</div>
                    <h3 className="font-semibold">Smart Detection</h3>
                    <p className="text-sm text-gray-600 mt-2">Detects paragraphs by blank lines</p>
                  </div>
                  <div className="rounded-lg border bg-white p-6 text-center">
                    <div className="text-5xl mb-2">📊</div>
                    <h3 className="font-semibold">Average Length</h3>
                    <p className="text-sm text-gray-600 mt-2">Shows average words per paragraph</p>
                  </div>
                </div>
              </section>

              <section id="ideal-length" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Ideal Paragraph Length</h2>
                <div className="rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 p-8">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-4xl font-bold text-green-600">3–5 sentences</div>
                      <p className="text-lg font-medium mt-2">Best for web content</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-blue-600">100–200 words</div>
                      <p className="text-lg font-medium mt-2">Optimal for readability</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-purple-600">&lt; 150 words</div>
                      <p className="text-lg font-medium mt-2">Recommended for SEO</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="faq" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">FAQ</h2>
                <div className="space-y-4">
                  <FAQ question="How are paragraphs detected?" answer="By empty lines (\\n\\n). Standard formatting used in most text editors and word processors." />
                  <FAQ question="Why is paragraph count important?" answer="It affects readability, SEO, and content structure. Shorter paragraphs improve user engagement." />
                  <FAQ question="Is single-line spacing considered one paragraph?" answer="Yes! Each block separated by a blank line counts as one paragraph." />
                </div>
              </section>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <TableOfContents items={tableOfContents} />
                <SidebarAd slot="toolPageSidebar" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

const FAQ = ({ question, answer }: { question: string; answer: string }) => (
  <details className="group rounded-lg border bg-white p-4">
    <summary className="flex cursor-pointer justify-between font-semibold list-none">
      {question}
      <span className="transition group-open:rotate-180">▼</span>
    </summary>
    <p className="mt-3 text-gray-600">{answer}</p>
  </details>
);