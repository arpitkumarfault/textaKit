"use client";

import { useState, useEffect } from "react";
import { Card } from "../../../components/ui";
import { Textarea } from "../../../components/ui";

export default function LineCounterUI() {
  const [text, setText] = useState("");
  
  const lines = text.split("\n").filter(line => line.trim() !== "").length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim() !== "").length;
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim() !== "").length;
  const characters = text.length;
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="space-y-8">
      <Textarea
        placeholder="Paste your text or code here to count lines, sentences, and paragraphs..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-h-96 font-mono text-sm resize-none"
        spellCheck={false}
      />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="p-6 text-center bg-blue-50 border-blue-200">
          <div className="text-3xl font-bold text-blue-700">{lines}</div>
          <div className="text-sm text-blue-600 font-medium">Lines</div>
        </Card>
        <Card className="p-6 text-center bg-green-50 border-green-200">
          <div className="text-3xl font-bold text-green-700">{sentences}</div>
          <div className="text-sm text-green-600 font-medium">Sentences</div>
        </Card>
        <Card className="p-6 text-center bg-purple-50 border-purple-200">
          <div className="text-3xl font-bold text-purple-700">{paragraphs}</div>
          <div className="text-sm text-purple-600 font-medium">Paragraphs</div>
        </Card>
        <Card className="p-6 text-center bg-orange-50 border-orange-200">
          <div className="text-3xl font-bold text-orange-700">{words}</div>
          <div className="text-sm text-orange-600 font-medium">Words</div>
        </Card>
        <Card className="p-6 text-center bg-pink-50 border-pink-200">
          <div className="text-3xl font-bold text-pink-700">{characters}</div>
          <div className="text-sm text-pink-600 font-medium">Characters</div>
        </Card>
      </div>
    </div>
  );
}