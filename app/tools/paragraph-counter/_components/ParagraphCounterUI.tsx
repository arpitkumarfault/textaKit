"use client";

import { useState, useEffect } from "react";
import { Card } from "../../../components/ui";
import { Textarea } from "../../../components/ui";

export default function ParagraphCounterUI() {
  const [text, setText] = useState("");

  const paragraphs = text.trim() === "" ? 0 : text.split(/\n\s*\n/).filter(p => p.trim() !== "").length;
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const avgWordsPerParagraph = paragraphs === 0 ? 0 : Math.round(words / paragraphs);

  return (
    <div className="space-y-8">
      <Textarea
        placeholder="Paste your article, essay, or blog post here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-h-96 font-serif text-base leading-relaxed resize-none"
        spellCheck={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-10 text-center bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
          <div className="text-6xl font-bold text-indigo-700">{paragraphs}</div>
          <div className="text-xl font-semibold text-indigo-800 mt-3">Paragraphs</div>
        </Card>

        <Card className="p-10 text-center bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
          <div className="text-6xl font-bold text-emerald-700">{words}</div>
          <div className="text-xl font-semibold text-emerald-800 mt-3">Total Words</div>
        </Card>

        <Card className="p-10 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="text-6xl font-bold text-purple-700">{avgWordsPerParagraph}</div>
          <div className="text-xl font-semibold text-purple-800 mt-3">Avg Words/Paragraph</div>
          {avgWordsPerParagraph > 150 && (
            <p className="text-sm text-purple-600 mt-4 font-medium">
              Consider breaking into shorter paragraphs for better readability
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}