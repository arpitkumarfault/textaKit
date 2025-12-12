"use client";

import { useState } from "react";
import { Card } from "../../../components/ui";
import { Textarea } from "../../../components/ui";

export default function SentenceCounterUI() {
  const [text, setText] = useState("");

  const sentenceCount = text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(s => s.trim() !== "").length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const avgSentenceLength = sentenceCount === 0 ? 0 : Math.round(wordCount / sentenceCount);

  return (
    <div className="space-y-8 rounded-xl border border-border bg-surface p-6 shadow-sm transition-colors">
      <Textarea
        placeholder="Paste your essay, article, or any text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-h-96 font-serif text-base leading-relaxed resize-none"
        spellCheck={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-8 text-center border-border bg-surface-hover/70">
          <div className="text-5xl font-bold text-primary">{sentenceCount}</div>
          <div className="text-lg font-medium text-secondary mt-2">Sentences</div>
        </Card>

        <Card className="p-8 text-center border-border bg-surface-hover/70">
          <div className="text-5xl font-bold text-primary">{wordCount}</div>
          <div className="text-lg font-medium text-secondary mt-2">Words</div>
        </Card>

        <Card className="p-8 text-center border-border bg-surface-hover/70">
          <div className="text-5xl font-bold text-primary">{avgSentenceLength}</div>
          <div className="text-lg font-medium text-secondary mt-2">Avg Words/Sentence</div>
          {avgSentenceLength > 25 && (
            <p className="text-xs text-secondary mt-3">Consider shorter sentences for better readability</p>
          )}
        </Card>
      </div>
    </div>
  );
}