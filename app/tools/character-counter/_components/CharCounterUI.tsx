"use client";

import { useState } from "react";
import { Textarea } from "../../../components/ui";

const CharCounterUI = () => {
  const [text, setText] = useState("");

  const charCount = text.length;
  const charNoSpaces = text.replace(/\s/g, "").length;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        className="mb-4 min-h-[300px]"
      />
      
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-blue-50 p-4 text-center">
          <div className="text-3xl font-bold text-blue-900">{charCount}</div>
          <div className="text-sm text-blue-700">Characters (with spaces)</div>
        </div>
        <div className="rounded-lg bg-green-50 p-4 text-center">
          <div className="text-3xl font-bold text-green-900">{charNoSpaces}</div>
          <div className="text-sm text-green-700">Characters (no spaces)</div>
        </div>
      </div>
    </div>
  );
};

export default CharCounterUI;