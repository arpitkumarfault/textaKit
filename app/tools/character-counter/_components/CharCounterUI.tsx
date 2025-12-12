"use client";

import { useState } from "react";
import { Textarea } from "../../../components/ui";

const CharCounterUI = () => {
  const [text, setText] = useState("");

  const charCount = text.length;
  const charNoSpaces = text.replace(/\s/g, "").length;

  return (
    <div className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-colors">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        className="mb-4 min-h-[300px]"
      />
      
      <div className="grid grid-cols-2 gap-4">
        <StatCard
          value={charCount}
          label="Characters (with spaces)"
          accentClass="from-primary/10 to-secondary/10 text-primary"
        />
        <StatCard
          value={charNoSpaces}
          label="Characters (no spaces)"
          accentClass="from-success/15 to-primary/10 text-primary"
        />
      </div>
    </div>
  );
};

const StatCard = ({
  value,
  label,
  accentClass,
}: {
  value: number;
  label: string;
  accentClass: string;
}) => (
  <div className="rounded-lg border border-border bg-surface-hover/70 p-4 text-center shadow-sm">
    <div className={`text-3xl font-bold bg-gradient-to-r ${accentClass} bg-clip-text text-transparent`}>
      {value}
    </div>
    <div className="text-sm text-secondary">{label}</div>
  </div>
);

export default CharCounterUI;