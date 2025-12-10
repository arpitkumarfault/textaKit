"use client";

import { useState, useEffect } from "react";
import { Card } from "../../../components/ui";
import { Textarea } from "../../../components/ui";

export default function SentenceCounterUI() {
  const [text, setText] = useState("");

  const sentenceCount = text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(s => s.trim() !== "").length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const avgSentenceLength = sentenceCount === 0 ? 0 : Math.round(wordCount / sentenceCount);

  return (
    <div className="space-y-8">
      <Textarea
        placeholder="Paste your essay, article, or any text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-h-96 font-serif text-base leading-relaxed resize-none"
        spellCheck={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="text-5xl font-bold text-blue-700">{sentenceCount}</div>
          <div className="text-lg font-medium text-blue-800 mt-2">Sentences</div>
        </Card>

        <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="text-5xl font-bold text-green-700">{wordCount}</div>
          <div className="text-lg font-medium text-green-800 mt-2">Words</div>
        </Card>

        <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="text-5xl font-bold text-purple-700">{avgSentenceLength}</div>
          <div className="text-lg font-medium text-purple-800 mt-2">Avg Words/Sentence</div>
          {avgSentenceLength > 25 && (
            <p className="text-xs text-purple-600 mt-3">Consider shorter sentences for better readability</p>
          )}
        </Card>
      </div>
    </div>
  );
}