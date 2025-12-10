import { Metadata } from "next";
import ComparisonUI from "./_components/ComparisonUI";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Text Compare - Compare Two Texts Online Free",
  description: "Compare two texts online and see differences highlighted.",
};

const TextComparePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-4 text-4xl font-bold">Text Compare</h1>
        <ComparisonUI />
      </div>
    </div>
  );
};

export default TextComparePage;