import { Metadata } from "next";
import FormatterUI from "./_components/FormatterUI";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Text Formatter - Clean & Format Text Online Free",
  description: "Format text online with our free text formatter. Remove extra spaces, fix line breaks.",
};

const TextFormatterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-4 text-4xl font-bold">Text Formatter</h1>
        <FormatterUI />
      </div>
    </div>
  );
};

export default TextFormatterPage;