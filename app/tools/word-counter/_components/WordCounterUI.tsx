"use client";

import { useState, useEffect } from "react";
import { Textarea } from "../../../components/ui";
import { Button } from "../../../components/ui";
import { calculateStats } from "../_lib/counting-logic";
import { ToolStats } from "../../../types/tools";
const WordCounterUI = () => {
  const [text, setText] = useState("");
  const [stats, setStats] = useState<ToolStats>({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0,
  });

  useEffect(() => {
    const newStats = calculateStats(text);
    setStats(newStats);
  }, [text]);

  const handleClear = () => {
    setText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <label
          htmlFor="word-counter-text"
          className="mb-2 block font-semibold text-gray-900"
        >
          Enter or Paste Your Text
        </label>
        <Textarea
          id="word-counter-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="min-h-[300px] w-full"
        />
      </div>

      {/* Statistics Grid */}
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        <StatCard label="Words" value={stats.words} />
        <StatCard label="Characters" value={stats.characters} />
        <StatCard label="Characters (no spaces)" value={stats.charactersNoSpaces} />
        <StatCard label="Sentences" value={stats.sentences} />
        <StatCard label="Paragraphs" value={stats.paragraphs} />
        <StatCard label="Reading Time" value={`${stats.readingTime} min`} />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button onClick={handleCopy} disabled={!text} variant="primary">
          Copy Text
        </Button>
        <Button onClick={handleClear} disabled={!text} variant="outline">
          Clear
        </Button>
      </div>

      {/* Additional Info */}
      {text && (
        <div className="mt-6 rounded-lg bg-blue-50 p-4">
          <h3 className="mb-2 font-semibold text-blue-900">Quick Stats:</h3>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>• Average word length: {(stats.characters / (stats.words || 1)).toFixed(1)} characters</li>
            <li>• Average sentence length: {(stats.words / (stats.sentences || 1)).toFixed(1)} words</li>
            <li>• Average paragraph length: {(stats.sentences / (stats.paragraphs || 1)).toFixed(1)} sentences</li>
          </ul>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value: number | string }) => (
  <div className="rounded-lg bg-gray-50 p-4 text-center">
    <div className="text-3xl font-bold text-gray-900">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default WordCounterUI;