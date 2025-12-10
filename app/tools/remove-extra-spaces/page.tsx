import RemoveExtraSpacesUI from "./_components/RemoveExtraSpacesUI";
import { generateToolSchema } from "../../lib/seo";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import StructuredData from "../../components/seo/StructuredData";
import Breadcrumb from "../../components/shared/Breadcrumb";
import SidebarAd from "../../components/ads/SidebarAd";
import AdBanner from "../../components/ads/AdBanner";
import type { Metadata } from "next";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Remove Extra Spaces", href: "/tools/remove-extra-spaces" },
];

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Remove Extra Spaces - Clean Text Online",
};

const tableOfContents = [
  { id: "tool", title: "Remove Extra Spaces Tool" },
  { id: "features", title: "Features" },
  { id: "common-uses", title: "Common Use Cases" },
  { id: "faq", title: "FAQ" },
];

const structuredData = generateToolSchema({
  name: "Remove Extra Spaces",
  description: "Free online tool to remove multiple spaces, tabs, and clean messy text",
  url: "/tools/remove-extra-spaces",
});

export default function RemoveExtraSpacesPage() {
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
                  Remove Extra Spaces Online
                </h1>
                <p className="text-xl text-gray-600">
                  Clean up messy text instantly — remove multiple spaces, tabs, line breaks, and unwanted whitespace with one click.
                </p>
                <ShareButtons url="/tools/remove-extra-spaces" title="Free Remove Extra Spaces Tool" />
              </div>

              <AdBanner slot="toolPageTop" format="horizontal" />

              <div id="tool" className="my-8">
                <RemoveExtraSpacesUI />
              </div>

              <section id="features" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Key Features</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <Feature icon="✨" title="Real-Time Cleaning" desc="See results update instantly as you type" />
                  <Feature icon="🧹" title="Smart Cleanup" desc="Removes tabs, multiple spaces, and non-breaking spaces" />
                  <Feature icon="⚡" title="One-Click Fix" desc="Clean entire document with single button" />
                </div>
              </section>

              <section id="common-uses" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Common Use Cases</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <UseCase title="Copy-Paste from PDFs/Word" desc="Remove messy spacing when copying from documents" />
                  <UseCase title="Code & Data Cleaning" desc="Clean CSV, JSON, or log files before processing" />
                  <UseCase title="Email & Content Writing" desc="Fix formatting issues before publishing" />
                  <UseCase title="SEO Content" desc="Ensure clean text for better readability scores" />
                </div>
              </section>

              <section id="faq" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">FAQ</h2>
                <div className="space-y-4">
                  <FAQ question="Does it remove line breaks too?" answer="No — only extra spaces within lines. Use 'Remove Line Breaks' tool for that." />
                  <FAQ question="Are tabs removed?" answer="Yes! All tabs (\\t) and non-breaking spaces are converted to single spaces." />
                  <FAQ question="Is my text saved?" answer="Never. Everything happens in your browser — 100% private and secure." />
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

const Feature = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
  <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
    <div className="text-5xl mb-3">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-600 mt-2">{desc}</p>
  </div>
);

const UseCase = ({ title, desc }: { title: string; desc: string }) => (
  <div className="rounded-lg border bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
    <h3 className="font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-700 mt-2">{desc}</p>
  </div>
);

const FAQ = ({ question, answer }: { question: string; answer: string }) => (
  <details className="group rounded-lg border bg-white p-4">
    <summary className="flex cursor-pointer justify-between font-semibold list-none">
      {question}
      <span className="transition group-open:rotate-180">▼</span>
    </summary>
    <p className="mt-3 text-gray-600">{answer}</p>
  </details>
);