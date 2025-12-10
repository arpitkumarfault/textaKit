"use client";

import { useState } from "react";
import { Button } from "../../../components/ui";
import { Textarea } from "../../../components/ui";
const FormatterUI = () => {
  const [text, setText] = useState("");

  const format = (type: string) => {
    let formatted = text;
    switch (type) {
      case "spaces":
        formatted = text.replace(/\s+/g, " ").trim();
        break;
      case "lines":
        formatted = text.replace(/\n\s*\n/g, "\n\n");
        break;
      case "trim":
        formatted = text.split("\n").map(line => line.trim()).join("\n");
        break;
    }
    setText(formatted);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to format..."
        className="mb-4 min-h-[300px]"
      />
      <div className="flex gap-3">
        <Button onClick={() => format("spaces")}>Remove Extra Spaces</Button>
        <Button onClick={() => format("lines")}>Fix Line Breaks</Button>
        <Button onClick={() => format("trim")}>Trim Lines</Button>
      </div>
    </div>
  );
};

export default FormatterUI;