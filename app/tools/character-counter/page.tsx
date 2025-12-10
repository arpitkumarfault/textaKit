import { Metadata } from "next";
import CharCounterUI from "./_components/CharCounterUI";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Character Counter - Count Characters & Letters Online",
  description: "Free character counter tool. Count characters with or without spaces.",
};

const CharacterCounterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-4 text-4xl font-bold">Character Counter</h1>
        <CharCounterUI />
      </div>
    </div>
  );
};

export default CharacterCounterPage;