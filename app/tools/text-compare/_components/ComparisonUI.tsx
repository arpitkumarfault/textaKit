"use client";

import { useState } from "react";
import { Button } from "../../../components/ui";
import { Textarea } from "../../../components/ui";

const ComparisonUI = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [differences, setDifferences] = useState<string[]>([]);

  const compare = () => {
    const lines1 = text1.split("\n");
    const lines2 = text2.split("\n");
    const diffs: string[] = [];

    const maxLength = Math.max(lines1.length, lines2.length);
    for (let i = 0; i < maxLength; i++) {
      if (lines1[i] !== lines2[i]) {
        diffs.push(`Line ${i + 1}: Different`);
      }
    }
    
    setDifferences(diffs);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold">Text 1</label>
          <Textarea
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            className="min-h-[300px]"
          />
        </div>
        <div>
          <label className="mb-2 block font-semibold">Text 2</label>
          <Textarea
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            className="min-h-[300px]"
          />
        </div>
      </div>

      <Button onClick={compare}>Compare Texts</Button>

      {differences.length > 0 && (
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <h3 className="mb-2 font-semibold">Differences Found:</h3>
          {differences.map((diff, idx) => (
            <div key={idx} className="text-sm">{diff}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComparisonUI;