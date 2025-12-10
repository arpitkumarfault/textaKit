"use client";

import { useState, useEffect } from "react";
import { Copy, Download } from "lucide-react";
import { Textarea } from "../../../components/ui";
import { Button } from "../../../components/ui";

export default function ToggleCaseUI() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const result = input.split("").map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join("");
    setOutput(result);
  }, [input]);

  const copy = () => navigator.clipboard.writeText(output);
  const download = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "toggle_case.txt"; a.click();
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
      <Textarea placeholder="Type or paste text..." value={input} onChange={e => setInput(e.target.value)} className="min-h-96 font-mono" />
      <div>
        <Textarea value={output} readOnly className="min-h-96 font-mono bg-muted" />
        <div className="flex gap-3 mt-4">
          <Button onClick={copy} disabled={!output} variant="secondary" className="flex-1"><Copy className="w-4 h-4 mr-2" /> Copy</Button>
          <Button onClick={download} disabled={!output} variant="outline" className="flex-1"><Download className="w-4 h-4 mr-2" /> Download</Button>
        </div>
      </div>
    </div>
  );
}