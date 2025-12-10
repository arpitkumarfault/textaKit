// src/app/tools/snake-case-converter/_components/SnakeCaseUI.tsx
"use client";

import { useState, useEffect } from "react";
import { Copy, Download, RefreshCw } from "lucide-react";
import { Textarea } from "../../../components/ui";
import { Button } from "../../../components/ui";
export default function SnakeCaseUI() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  // Real-time conversion
  useEffect(() => {
    if (!input.trim()) {
      setOutput("");
      return;
    }

    const result = input
      .trim()
      .replace(/[^a-zA-Z0-9]+/g, "_")    // Replace any non-alphanumeric with _
      .replace(/^_+|_+$/g, "")           // Remove leading/trailing underscores
      .toLowerCase();

    setOutput(result || "");
  }, [input]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  const downloadAsFile = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "snake_case.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
      {/* Input Side */}
      <div className="space-y-4">
        <Textarea
          placeholder="Paste or type your text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-96 font-mono text-sm resize-none"
          spellCheck={false}
        />
        <div className="flex gap-3">
          <Button onClick={() => setInput("")} variant="outline" className="flex-1">
            Clear
          </Button>
          <Button 
            onClick={() => setInput(output ? output.replace(/_/g, " ") : "")} 
            variant="outline" 
            className="flex-1"
            disabled={!output}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reverse
          </Button>
        </div>
      </div>

      {/* Output Side */}
      <div className="space-y-4">
        <Textarea
          value={output}
          readOnly
          placeholder="snake_case result appears here instantly..."
          className="min-h-96 font-mono text-sm bg-muted resize-none"
        />
        <div className="flex gap-3">
          <Button
            onClick={copyToClipboard}
            disabled={!output}
            variant="secondary"
            className="flex-1"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy
          </Button>
          <Button
            onClick={downloadAsFile}
            disabled={!output}
            variant="outline"
            className="flex-1"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>

        {/* Stats */}
        {output && (
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Characters: {output.length}</span>
            <span>Underscores: {output.split("_").length - 1}</span>
          </div>
        )}
      </div>
    </div>
  );
}