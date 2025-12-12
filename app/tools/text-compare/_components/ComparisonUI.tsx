"use client";

import { useState } from "react";
import { Button, Textarea } from "../../../components/ui";

type DiffSegment = {
  text: string;
  type: "same" | "added" | "removed";
};

type DiffLine = {
  lineNumber: number;
  left: DiffSegment[];
  right: DiffSegment[];
  hasDifference: boolean;
};

const tokenize = (value: string) => value.split(/(\s+)/).filter(Boolean);

const mergeSegment = (segments: DiffSegment[], next: DiffSegment) => {
  const last = segments[segments.length - 1];
  if (last && last.type === next.type) {
    last.text += next.text;
  } else {
    segments.push(next);
  }
};

const buildWordDiff = (leftText: string, rightText: string) => {
  const a = tokenize(leftText);
  const b = tokenize(rightText);

  if (a.length === 0 && b.length === 0) {
    return {
      left: [{ text: "", type: "same" as const }],
      right: [{ text: "", type: "same" as const }],
    };
  }

  const dp: number[][] = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  const leftSegments: DiffSegment[] = [];
  const rightSegments: DiffSegment[] = [];

  const backtrack = (i: number, j: number) => {
    if (i > 0 && j > 0 && a[i - 1] === b[j - 1]) {
      backtrack(i - 1, j - 1);
      mergeSegment(leftSegments, { text: a[i - 1], type: "same" });
      mergeSegment(rightSegments, { text: b[j - 1], type: "same" });
      return;
    }

    if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      backtrack(i, j - 1);
      mergeSegment(rightSegments, { text: b[j - 1], type: "added" });
      return;
    }

    if (i > 0) {
      backtrack(i - 1, j);
      mergeSegment(leftSegments, { text: a[i - 1], type: "removed" });
    }
  };

  backtrack(a.length, b.length);

  return { left: leftSegments, right: rightSegments };
};

const ComparisonUI = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diffLines, setDiffLines] = useState<DiffLine[]>([]);

  const handleCompare = () => {
    const leftLines = text1.split("\n");
    const rightLines = text2.split("\n");
    const maxLines = Math.max(leftLines.length, rightLines.length);

    const result: DiffLine[] = [];

    for (let i = 0; i < maxLines; i++) {
      const leftLine = leftLines[i] ?? "";
      const rightLine = rightLines[i] ?? "";
      const { left, right } = buildWordDiff(leftLine, rightLine);

      result.push({
        lineNumber: i + 1,
        left,
        right,
        hasDifference: leftLine !== rightLine,
      });
    }

    setDiffLines(result);
  };

  const handleClear = () => {
    setText1("");
    setText2("");
    setDiffLines([]);
  };

  const handleSwap = () => {
    setText1(text2);
    setText2(text1);
  };

  const renderSegments = (segments: DiffSegment[]) =>
    segments.map((segment, idx) => {
      const base = "rounded px-0.5";

      if (segment.type === "added") {
        return (
          <span
            key={`${segment.text}-${idx}`}
            className={`${base} bg-emerald-500/20 text-emerald-700 dark:text-emerald-300`}
          >
            {segment.text || "\u00A0"}
          </span>
        );
      }

      if (segment.type === "removed") {
        return (
          <span
            key={`${segment.text}-${idx}`}
            className={`${base} bg-rose-500/20 text-rose-700 dark:text-rose-300`}
          >
            {segment.text || "\u00A0"}
          </span>
        );
      }

      return (
        <span
          key={`${segment.text}-${idx}`}
          className={`${base} text-secondary`}
        >
          {segment.text || "\u00A0"}
        </span>
      );
    });

  const differingLineCount = diffLines.filter((line) => line.hasDifference).length;

  return (
    <div className="space-y-6 rounded-xl border border-border bg-surface p-6 shadow-sm transition-colors">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold text-primary">Text 1</label>
          <Textarea
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            className="min-h-[240px]"
            placeholder="Paste or type the first text..."
          />
        </div>
        <div>
          <label className="mb-2 block font-semibold text-primary">Text 2</label>
          <Textarea
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            className="min-h-[240px]"
            placeholder="Paste or type the second text..."
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button onClick={handleCompare} variant="primary" disabled={!text1 && !text2}>
          Highlight differences
        </Button>
        <Button onClick={handleSwap} variant="secondary" disabled={!text1 && !text2}>
          Swap texts
        </Button>
        <Button onClick={handleClear} variant="outline" disabled={!text1 && !text2}>
          Clear
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-xs text-secondary">
        <span className="rounded bg-emerald-500/20 px-2 py-1 text-emerald-700 dark:text-emerald-300">
          Added
        </span>
        <span className="rounded bg-rose-500/20 px-2 py-1 text-rose-700 dark:text-rose-300">
          Removed
        </span>
        <span className="rounded bg-surface-hover px-2 py-1">
          Unchanged
        </span>
        {diffLines.length > 0 && (
          <span className="text-sm font-semibold text-primary">
            {differingLineCount} of {diffLines.length} line(s) differ
          </span>
        )}
      </div>

      {diffLines.length > 0 && (
        <div className="space-y-3 rounded-lg border border-border bg-surface-hover/50 p-4">
          <h3 className="text-lg font-semibold text-primary">Highlighted differences</h3>
          <div className="space-y-4">
            {diffLines.map((line) => (
              <div
                key={line.lineNumber}
                className="grid gap-3 rounded-lg border border-border bg-surface p-3 shadow-sm sm:grid-cols-2"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wide text-secondary">
                    <span>Line {line.lineNumber}</span>
                    <span className={line.hasDifference ? "text-rose-600 dark:text-rose-300" : ""}>
                      Text 1
                    </span>
                  </div>
                  <div className="whitespace-pre-wrap rounded-md border border-border bg-surface-hover/60 p-3 text-sm leading-relaxed text-text-primary">
                    {renderSegments(line.left)}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wide text-secondary">
                    <span>Line {line.lineNumber}</span>
                    <span className={line.hasDifference ? "text-emerald-600 dark:text-emerald-300" : ""}>
                      Text 2
                    </span>
                  </div>
                  <div className="whitespace-pre-wrap rounded-md border border-border bg-surface-hover/60 p-3 text-sm leading-relaxed text-text-primary">
                    {renderSegments(line.right)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparisonUI;