import SentenceCounterUI from "./_components/SentenceCounterUI";
import AdBanner from "../../components/ads/AdBanner";
import TableOfContents from "../../components/shared/TableOfContents";
import SidebarAd from "../../components/ads/SidebarAd";
import ShareButtons from "../../components/shared/ShareButtons";
import Breadcrumb from "../../components/shared/Breadcrumb";
import StructuredData from "../../components/seo/StructuredData";
import { generateToolSchema } from "../../lib/seo";
import { Metadata } from 'next';

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Sentence Counter", href: "/tools/sentence-counter" },
];

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Sentence Counter - Count Sentences Online",
};

const tableOfContents = [
  { id: "tool", title: "Sentence Counter Tool" },
  { id: "features", title: "Features" },
  { id: "faq", title: "FAQ" },
];

const structuredData = generateToolSchema({
  name: "Sentence Counter",
  description: "Free online tool to count sentences in any text",
  url: "/tools/sentence-counter",
});

export default function SentenceCounterPage() {
  return (
    <>
      <StructuredData data={structuredData} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mt-6 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-8">
                <h1 className="mb-4 text-4xl font-bold text-primary">
                  Free Sentence Counter
                </h1>
                <p className="text-xl text-secondary">
                  Count sentences instantly and improve your writing clarity. Perfect for essays, articles, and readability scoring.
                </p>
                <ShareButtons url="/tools/sentence-counter" title="Free Sentence Counter Tool" />
              </div>

              <AdBanner slot="toolPageTop" format="horizontal" />

              <div id="tool" className="my-8">
                <SentenceCounterUI />
              </div>

              <section id="features" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-primary">Key Features</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    { icon: "⚡", title: "Real-Time Counting", desc: "See sentence count update as you type" },
                    { icon: "📊", title: "Accurate Detection", desc: "Handles . ! ? and complex punctuation" },
                    { icon: "📝", title: "Readability Score", desc: "Average sentence length calculated" },
                  ].map((item,index) => (
                    <div key={index} className="rounded-lg border border-border bg-surface p-6 text-center shadow-sm">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <h3 className="font-semibold text-primary">{item.title}</h3>
                      <p className="text-sm text-secondary mt-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-primary">FAQ</h2>
                <div className="space-y-4">
                  <FAQ question="How does it detect sentences?" answer="It splits text by periods (.), exclamation marks (!), and question marks (?). Handles abbreviations and decimal numbers intelligently." />
                  <FAQ question="Does it work with quotes?" answer="Yes! Sentences inside quotation marks are counted correctly." />
                  <FAQ question="Is it accurate for academic writing?" answer="Absolutely. Used by students and writers worldwide for essays and research papers." />
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
  <details className="group rounded-lg border border-border bg-surface p-4 shadow-sm">
    <summary className="flex cursor-pointer justify-between font-semibold list-none text-primary">
      {question}
      <span className="transition group-open:rotate-180">▼</span>
    </summary>
    <p className="mt-3 text-secondary">{answer}</p>
  </details>
);