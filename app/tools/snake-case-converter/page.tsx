// src/app/tools/snake-case-converter/page.tsx
import { Metadata } from "next";
import SnakeCaseUI from "./_components/SnakeCaseUI";
import { generateToolSchema } from "../../lib/seo";
import AdBanner from "../../components/ads/AdBanner";
import SidebarAd from "../../components/ads/SidebarAd";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import Breadcrumb from "../../components/shared/Breadcrumb";
import StructuredData from "../../components/seo/StructuredData";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Snake Case Converter - Free Online Tool",
  description: "Convert text to snake_case instantly. Perfect for Python variables, CSS classes, URLs, and database fields.",
  keywords: ["snake case converter", "snake_case", "python case", "css class name", "file name converter"],
};

const SnakeCaseConverterPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Snake Case Converter", href: "/tools/snake-case-converter" },
  ];

  const tableOfContents = [
    { id: "tool", title: "Snake Case Converter Tool" },
    { id: "what-is", title: "What is snake_case?" },
    { id: "how-to-use", title: "How to Use" },
    { id: "examples", title: "Examples" },
    { id: "faq", title: "FAQ" },
  ];

  const structuredData = generateToolSchema({
    name: "Snake Case Converter",
    description: "Free online tool to convert text to snake_case format",
    url: "/tools/snake-case-converter",
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
                  Snake Case Converter
                </h1>
                <p className="text-xl text-gray-600">
                  Convert any text to snake_case format instantly. Perfect for Python variables, CSS classes, file names, and database fields.
                </p>
                <ShareButtons
                  url="/tools/snake-case-converter"
                  title="Free Snake Case Converter Tool"
                />
              </div>

              <AdBanner slot="toolPageTop" format="horizontal" />

              <div id="tool" className="my-8">
                <SnakeCaseUI />
              </div>

              <section id="what-is" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  What is snake_case?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  snake_case is a naming convention where words are separated by underscores (_) and all letters are lowercase.
                  It's widely used in <strong>Python</strong>, <strong>Ruby</strong>, <strong>CSS class names</strong>, <strong>file names</strong>, and <strong>database column names</strong>.
                </p>
              </section>

              <section id="how-to-use" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  How to Use
                </h2>
                <div className="space-y-4">
                  <Step number={1} title="Paste Your Text" desc="Enter or paste the text you want to convert." />
                  <Step number={2} title="Click Convert" desc="Press the convert button to transform to snake_case." />
                  <Step number={3} title="Copy or Download" desc="Copy the result or download as .txt file." />
                </div>
              </section>

              <section id="examples" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Examples
                </h2>
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3">Original</th>
                        <th className="px-6 py-3">snake_case Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t"><td className="px-6 py-4">Hello World</td><td className="px-6 py-4 font-mono">hello_world</td></tr>
                      <tr className="border-t bg-gray-50"><td className="px-6 py-4">UserProfileImage</td><td className="px-6 py-4 font-mono">user_profile_image</td></tr>
                      <tr className="border-t"><td className="px-6 py-4">API-Key-2025!</td><td className="px-6 py-4 font-mono">api_key_2025</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="faq" className="my-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <FAQ question="Why use snake_case?" answer="It's the official style in Python (PEP 8), highly readable, and widely used in configuration files and databases." />
                  <FAQ question="Does it handle special characters?" answer="Yes! All non-alphanumeric characters are replaced with underscores." />
                  <FAQ question="Is my text saved?" answer="No. Everything happens in your browser. Your text is never sent to any server." />
                </div>
              </section>
            </div>

            {/* Sidebar */}
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
};

// Reusable Components
const Step = ({ number, title, desc }: { number: number; title: string; desc: string }) => (
  <div className="flex gap-4 rounded-lg border bg-white p-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
      {number}
    </div>
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
);

const FAQ = ({ question, answer }: { question: string; answer: string }) => (
  <details className="group rounded-lg border bg-white p-4">
    <summary className="flex cursor-pointer items-center justify-between font-semibold list-none">
      {question}
      <span className="transition group-open:rotate-180">▼</span>
    </summary>
    <p className="mt-3 text-gray-600">{answer}</p>
  </details>
);

export default SnakeCaseConverterPage;