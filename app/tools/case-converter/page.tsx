import { Metadata } from "next";
import CaseConverterUI from "./_components/CaseConverterUI";
import AdBanner from "../../components/ads/AdBanner";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Case Converter - Change Text Case Online Free",
  description:
    "Convert text case online. Change to uppercase, lowercase, title case, sentence case instantly.",
};

const CaseConverterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Case Converter
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Convert text to different cases instantly.
        </p>

        <AdBanner slot="toolPageTop" format="horizontal" />

        <div className="mt-8">
          <CaseConverterUI />
        </div>
      </div>
    </div>
  );
};

export default CaseConverterPage;