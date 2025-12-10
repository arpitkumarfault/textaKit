"use client";

import  { useState } from "react";
import { Button } from "../../../components/ui";
import { Textarea } from "../../../components/ui";

const CaseConverterUI = () => {
  const [text, setText] = useState("");

  const convertCase = (type: string) => {
    switch (type) {
      case "upper":
        setText(text.toUpperCase());
        break;
      case "lower":
        setText(text.toLowerCase());
        break;
      case "title":
        setText(
          text.replace(/\w\S*/g, (txt) =>
            txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
          )
        );
        break;
      case "sentence":
        setText(
          text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) =>
            c.toUpperCase()
          )
        );
        break;
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to convert..."
        className="mb-4 min-h-[300px]"
      />

      <div className="flex flex-wrap gap-3">
        <Button onClick={() => convertCase("upper")} disabled={!text}>
          UPPERCASE
        </Button>
        <Button onClick={() => convertCase("lower")} disabled={!text}>
          lowercase
        </Button>
        <Button onClick={() => convertCase("title")} disabled={!text}>
          Title Case
        </Button>
        <Button onClick={() => convertCase("sentence")} disabled={!text}>
          Sentence case
        </Button>
      </div>
    </div>
  );
};

export default CaseConverterUI;