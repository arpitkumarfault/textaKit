"use client";

import { useState } from "react";
import { Button } from "../../../components/ui";
import { Textarea } from "../../../components/ui";

interface GrammarIssue {
  type: string;
  message: string;
  start: number;
  end: number;
  context: string;
  suggestions: string[];
  severity?: string;
}

const GrammarToolUI = () => {
  const [text, setText] = useState("");
  const [issues, setIssues] = useState<GrammarIssue[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const stats = {
    characters: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    sentences: text.split(/[.!?]+/).filter((s) => s.trim()).length,
    errors: issues.length,
  };

  const handleCheck = async () => {
    if (!text.trim()) return;

    setIsChecking(true);
    setError(null);

    try {
      const response = await fetch("/api/grammar-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, language: "en-US" }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to check grammar");
      }

      setIssues(data.issues || []);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setIssues([]);
    } finally {
      setIsChecking(false);
    }
  };

  const handleClear = () => {
    setText("");
    setIssues([]);
    setError(null);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text copied to clipboard!");
    } catch (err) {
      alert("Failed to copy text");
    }
  };

  const applySuggestion = (issue: GrammarIssue, suggestion: string) => {
    const newText =
      text.substring(0, issue.start) +
      suggestion +
      text.substring(issue.end);
    setText(newText);
    
    // Remove this issue from the list
    setIssues(issues.filter((i) => i.start !== issue.start));
  };

  const applyAllFixes = () => {
    if (issues.length === 0) return;

    let newText = text;
    let offset = 0;

    // Sort issues by position (start from beginning)
    const sortedIssues = [...issues].sort((a, b) => a.start - b.start);

    sortedIssues.forEach((issue) => {
      if (issue.suggestions.length > 0) {
        const suggestion = issue.suggestions[0];
        const start = issue.start + offset;
        const end = issue.end + offset;

        newText = newText.substring(0, start) + suggestion + newText.substring(end);
        offset += suggestion.length - (issue.end - issue.start);
      }
    });

    setText(newText);
    setIssues([]);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      {/* Text Input */}
      <div className="mb-4">
        <label
          htmlFor="grammar-text"
          className="mb-2 block font-semibold text-gray-900"
        >
          Enter or Paste Your Text
        </label>
        <Textarea
          id="grammar-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here to check grammar, spelling, and punctuation..."
          className="min-h-[300px] w-full text-base"
        />
        <p className="mt-2 text-sm text-gray-500">
          {text.length} / 10,000 characters
        </p>
      </div>

      {/* Stats Bar */}
      <div className="mb-4 grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-4">
        <StatItem label="Characters" value={stats.characters} />
        <StatItem label="Words" value={stats.words} />
        <StatItem label="Sentences" value={stats.sentences} />
        <StatItem
          label="Issues"
          value={stats.errors}
          error={stats.errors > 0}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex flex-wrap gap-3">
        <Button
          onClick={handleCheck}
          disabled={!text.trim() || isChecking || text.length > 10000}
          className="btn-primary"
        >
          {isChecking ? (
            <>
              <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Checking...
            </>
          ) : (
            "Check Grammar"
          )}
        </Button>
        <Button onClick={handleCopy} disabled={!text} className="btn-secondary">
          Copy Text
        </Button>
        {issues.length > 0 && (
          <Button onClick={applyAllFixes} className="bg-green-600 text-white hover:bg-green-700">
            Fix All ({issues.length})
          </Button>
        )}
        <Button onClick={handleClear} disabled={!text} className="btn-outline">
          Clear
        </Button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-red-800">❌ {error}</p>
        </div>
      )}

      {/* Issues List */}
      {issues.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">
            Found {issues.length} issue{issues.length !== 1 ? "s" : ""}
          </h3>
          {issues.map((issue, index) => (
            <IssueCard
              key={index}
              issue={issue}
              onApply={(suggestion) => applySuggestion(issue, suggestion)}
            />
          ))}
        </div>
      )}

      {/* Success Message */}
      {issues.length === 0 && text.trim() && !isChecking && !error && (
        <div className="rounded-lg bg-green-50 p-6 text-center">
          <p className="text-2xl">✅</p>
          <p className="mt-2 text-lg font-semibold text-green-800">
            Great! No issues found in your text.
          </p>
          <p className="text-green-700">Your writing looks perfect!</p>
        </div>
      )}

      {/* Help Text */}
      {!text && (
        <div className="rounded-lg bg-blue-50 p-6">
          <h4 className="mb-2 font-semibold text-blue-900">How to use:</h4>
          <ol className="list-decimal list-inside space-y-1 text-blue-800">
            <li>Paste or type your text in the box above</li>
            <li>Click "Check Grammar" to analyze your text</li>
            <li>Review suggestions and click to apply fixes</li>
            <li>Use "Fix All" to apply all corrections at once</li>
          </ol>
        </div>
      )}
    </div>
  );
};

// Helper Components
const StatItem = ({
  label,
  value,
  error = false,
}: {
  label: string;
  value: number;
  error?: boolean;
}) => (
  <div className="text-center">
    <div className={`text-2xl font-bold ${error ? "text-red-600" : "text-gray-900"}`}>
      {value}
    </div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

const IssueCard = ({
  issue,
  onApply,
}: {
  issue: GrammarIssue;
  onApply: (suggestion: string) => void;
}) => {
  const typeColors: { [key: string]: string } = {
    Spelling: "bg-red-100 text-red-800 border-red-200",
    Grammar: "bg-orange-100 text-orange-800 border-orange-200",
    Punctuation: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Style: "bg-blue-100 text-blue-800 border-blue-200",
  };

  const bgColor = typeColors[issue.type] || "bg-gray-100 text-gray-800 border-gray-200";

  return (
    <div className={`rounded-lg border p-4 ${bgColor}`}>
      <div className="mb-2 flex items-start justify-between">
        <span className="rounded bg-white px-2 py-1 text-xs font-semibold">
          {issue.type}
        </span>
        {issue.severity && (
          <span className="text-xs opacity-75">{issue.severity}</span>
        )}
      </div>
      <p className="mb-2 font-medium">{issue.message}</p>
      <p className="mb-3 text-sm opacity-90">
        Context: "...{issue.context}..."
      </p>
      {issue.suggestions.length > 0 && (
        <div>
          <p className="mb-2 text-sm font-semibold">Suggestions:</p>
          <div className="flex flex-wrap gap-2">
            {issue.suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => onApply(suggestion)}
                className="rounded bg-white px-3 py-1.5 text-sm font-medium shadow-sm hover:shadow transition"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GrammarToolUI;