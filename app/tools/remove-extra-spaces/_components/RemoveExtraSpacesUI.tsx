"use client";

import { useState, useEffect } from "react";
import { Copy, Download, Sparkles } from "lucide-react";
import { Textarea } from "../../../components/ui";
import { Button } from "../../../components/ui";

export default function RemoveExtraSpacesUI() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [savedChars, setSavedChars] = useState(0);

  useEffect(() => {
    const cleaned = input
      .replace(/\s+/g, " ")      // Replace any whitespace (spaces, tabs, newlines) with single space
      .replace(/^\s+|\s+$/g, "") // Trim start/end
      .replace(/\s+([.!?])/g, "$1"); // Remove space before punctuation

    setOutput(cleaned);
    setSavedChars(input.length - cleaned.length);
  }, [input]);

  const copy = () => navigator.clipboard.writeText(output);
  const download = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cleaned_text.txt";
    a.click();
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Original Text (Messy)</label>
          <Textarea
            placeholder="Paste your messy text here... (with extra spaces, tabs, etc.)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-96 font-mono text-sm resize-none border-red-200 focus:border-red-400"
            spellCheck={false}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Clean Text</label>
          <Textarea
            value={output}
            readOnly
            placeholder="Cleaned text appears here instantly..."
            className="min-h-96 font-mono text-sm bg-green-50 border-green-300 resize-none"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6 text-lg">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-green-600" />
            <span className="font-semibold text-green-700">
              Saved {savedChars} characters
            </span>
          </div>
          {savedChars > 0 && (
            <span className="text-sm text-gray-600">
              ({Math.round((savedChars / input.length) * 100)}% reduction)
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <Button onClick={copy} disabled={!output}>
            <Copy className="w-5 h-5 mr-2" />
            Copy Clean Text
          </Button>
          <Button onClick={download} disabled={!output} variant="outline">
            <Download className="w-5 h-5 mr-2" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}