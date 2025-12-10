"use client";

import React from "react";
import { Card } from "../ui";

interface Result {
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  details?: string[];
}

interface ResultDisplayProps {
  results: Result[];
  onDismiss?: (index: number) => void;
}

const ResultDisplay = ({ results, onDismiss }: ResultDisplayProps) => {
  if (results.length === 0) return null;

  const getTypeStyles = (type: Result["type"]) => {
    switch (type) {
      case "success":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-800",
          icon: "✓",
        };
      case "error":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-800",
          icon: "✕",
        };
      case "warning":
        return {
          bg: "bg-yellow-50",
          border: "border-yellow-200",
          text: "text-yellow-800",
          icon: "⚠",
        };
      case "info":
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-800",
          icon: "ℹ",
        };
    }
  };

  return (
    <div className="space-y-3">
      {results.map((result, index) => {
        const styles = getTypeStyles(result.type);

        return (
          <div
            key={index}
            className={`rounded-lg border p-4 ${styles.bg} ${styles.border}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <span className="text-xl">{styles.icon}</span>
                <div className="flex-1">
                  <h3 className={`font-semibold ${styles.text}`}>
                    {result.title}
                  </h3>
                  <p className={`mt-1 text-sm ${styles.text}`}>
                    {result.message}
                  </p>
                  {result.details && result.details.length > 0 && (
                    <ul className={`mt-2 space-y-1 text-sm ${styles.text}`}>
                      {result.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span>•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              {onDismiss && (
                <button
                  onClick={() => onDismiss(index)}
                  className={`ml-4 ${styles.text} hover:opacity-70`}
                  aria-label="Dismiss"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultDisplay;

// Example usage component
export const ResultDisplayExample = () => {
  const [results, setResults] = React.useState<Result[]>([
    {
      type: "success",
      title: "Text Processed Successfully",
      message: "Your text has been analyzed and optimized.",
      details: ["0 spelling errors found", "3 grammar improvements made"],
    },
    {
      type: "warning",
      title: "Long Sentences Detected",
      message: "Some sentences are too long and may affect readability.",
      details: ["Sentence 1: 45 words", "Sentence 5: 52 words"],
    },
  ]);

  return (
    <ResultDisplay
      results={results}
      onDismiss={(index) =>
        setResults(results.filter((_, i) => i !== index))
      }
    />
  );
};