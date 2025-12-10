"use client";

import { useState, useEffect } from "react";
import { Copy, Download } from "lucide-react";
import { Textarea } from "../../../components/ui";
import { Button } from "../../../components/ui";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "../../../components/ui/Select";


export default function CamelCaseUI() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"camel" | "pascal">("camel");

  useEffect(() => {
    if (!input.trim()) {
      setOutput("");
      return;
    }

    const words = input.trim().toLowerCase().replace(/[^a-z0-9]+/gi, " ").split(/\s+/);
    let result = "";

    if (mode === "camel") {
      result = words[0] + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
    } else {
      result = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
    }

    setOutput(result);
  }, [input, mode]);

  const copy = () => navigator.clipboard.writeText(output);
  const download = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${mode}Case.txt`;
    a.click();
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
      <div className="space-y-4">
        <Textarea
          placeholder="Enter text to convert..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-96 font-mono text-sm"
        />
        <Select value={mode} onValueChange={(v: "camel" | "pascal") => setMode(v)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="camel">camelCase</SelectItem>
            <SelectItem value="pascal">PascalCase</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <Textarea value={output} readOnly placeholder="Result..." className="min-h-96 font-mono bg-muted" />
        <div className="flex gap-3">
          <Button onClick={copy} disabled={!output} variant="secondary" className="flex-1">
            <Copy className="w-4 h-4 mr-2" /> Copy
          </Button>
          <Button onClick={download} disabled={!output} variant="outline" className="flex-1">
            <Download className="w-4 h-4 mr-2" /> Download
          </Button>
        </div>
        {output && <p className="text-sm text-muted-foreground">Length: {output.length}</p>}
      </div>
    </div>
  );
}