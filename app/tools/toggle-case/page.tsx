import ToggleCaseUI from "./_components/ToggleCaseUI";
import { generateToolSchema } from "../../lib/seo";
import StructuredData from "../../components/seo/StructuredData";
import SidebarAd from "../../components/ads/SidebarAd";
import Breadcrumb from "../../components/shared/Breadcrumb";
import ShareButtons from "../../components/shared/ShareButtons";
import AdBanner from "../../components/ads/AdBanner";
import TableOfContents from "../../components/shared/TableOfContents";

import { Metadata } from 'next';

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Toggle Case", href: "/tools/toggle-case" },
];

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Toggle Case - Switch Text Case Online",
};

const tableOfContents = [
  { id: "tool", title: "Toggle Case Tool" },
  { id: "examples", title: "Examples" },
  { id: "faq", title: "FAQ" },
];

const structuredData = generateToolSchema({
  name: "Toggle Case Converter",
  description: "Free online tool to flip text case instantly",
  url: "/tools/toggle-case",
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
                <h1 className="mb-4 text-4xl font-bold text-gray-900">Toggle Case Converter</h1>
                <p className="text-xl text-gray-600">Flip every letter's case instantly — UPPER becomes lower and lower becomes UPPER.</p>
                <ShareButtons url="/tools/toggle-case" title="Free Toggle Case Tool" />
              </div>
              <AdBanner slot="toolPageTop" format="horizontal" />
              <div id="tool" className="my-8"><ToggleCaseUI /></div>
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