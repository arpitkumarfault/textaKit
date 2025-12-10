import CamelCaseUI from "./_components/CamelCaseUI";
import AdBanner from "../../components/ads/AdBanner";

import { generateToolSchema } from "../../lib/seo";
import StructuredData from "../../components/seo/StructuredData";
import Breadcrumb from "../../components/shared/Breadcrumb";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import SidebarAd from "../../components/ads/SidebarAd";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Camel Case Converter - Free Online Tool",
  description: "Free online camelCase and PascalCase converter",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Camel Case Converter", href: "/tools/camel-case-converter" },
];

const tableOfContents = [
  { id: "tool", title: "Camel Case Converter" },
  { id: "examples", title: "Examples" },
  { id: "faq", title: "FAQ" },
];

const structuredData = generateToolSchema({
  name: "Camel Case Converter",
  description: "Free online camelCase and PascalCase converter",
  url: "/tools/camel-case-converter",
});

export default function Page() {
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
                  Camel Case Converter
                </h1>
                <p className="text-xl text-gray-600">
                  Convert any text to camelCase or PascalCase instantly. Perfect for JavaScript variables, Java classes, and C# properties.
                </p>
                <ShareButtons url="/tools/camel-case-converter" title="Free Camel Case Converter" />
              </div>

              <AdBanner slot="toolPageTop" format="horizontal" />

              <div id="tool" className="my-8">
                <CamelCaseUI />
              </div>

              <section id="examples" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Examples</h2>
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3">Original</th>
                        <th className="px-6 py-3">camelCase</th>
                        <th className="px-6 py-3">PascalCase</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t"><td className="px-6 py-4">hello world</td><td className="px-6 py-4 font-mono">helloWorld</td><td className="px-6 py-4 font-mono">HelloWorld</td></tr>
                      <tr className="border-t bg-gray-50"><td className="px-6 py-4">user profile image</td><td className="px-6 py-4 font-mono">userProfileImage</td><td className="px-6 py-4 font-mono">UserProfileImage</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="faq" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">FAQ</h2>
                <div className="space-y-4">
                  <FAQ question="What is camelCase?" answer="camelCase starts with lowercase, each new word starts with uppercase. Used in JavaScript." />
                  <FAQ question="What is PascalCase?" answer="PascalCase starts every word with uppercase. Used in C#, Java classes." />
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