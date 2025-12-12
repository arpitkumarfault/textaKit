"use client";

import { useMemo, useRef, useState } from "react";
import { Button } from "../../../components/ui";

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
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const highlightRef = useRef<HTMLDivElement | null>(null);

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

    // Remove this issue from the list (keep others)
    setIssues((prev) => prev.filter((i) => i !== issue));
  };

  const applyAllFixes = () => {
    const actionable = issues.filter((issue) => issue.suggestions?.length > 0);
    if (actionable.length === 0) return;

    let updated = text;
    let shift = 0;

    actionable
      .sort((a, b) => a.start - b.start)
      .forEach((issue) => {
        const replacement = issue.suggestions[0];
        const start = issue.start + shift;
        const end = issue.end + shift;
        updated = updated.slice(0, start) + replacement + updated.slice(end);
        shift += replacement.length - (issue.end - issue.start);
      });

    setText(updated);
    // Drop only issues that had actionable suggestions; keep others visible
    const actionableSet = new Set(actionable);
    setIssues((prev) => prev.filter((issue) => !actionableSet.has(issue)));
  };

  const highlightHtml = useMemo(() => renderHighlighted(text, issues), [text, issues]);

  const syncScroll = () => {
    if (textareaRef.current && highlightRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop;
      highlightRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };

  return (
    <div className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-colors">
      {/* Text Input */}
      <div className="mb-4">
        <label
          htmlFor="grammar-text"
          className="mb-2 block font-semibold text-primary"
        >
          Enter or Paste Your Text
        </label>
        <div className="relative">
          {/* Highlight layer */}
          <div
            ref={highlightRef}
            className="pointer-events-none absolute inset-0 overflow-auto rounded-lg border border-border bg-surface px-3 py-3 font-mono text-base leading-relaxed whitespace-pre-wrap text-transparent"
            dangerouslySetInnerHTML={{ __html: highlightHtml }}
            aria-hidden="true"
          />
          {/* Editable layer */}
          <textarea
            id="grammar-text"
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onScroll={syncScroll}
            placeholder="Start typing or paste your text here to check grammar, spelling, and punctuation..."
            className="relative z-10 w-full min-h-[300px] resize-y rounded-lg border border-border bg-transparent px-3 py-3 font-mono text-base leading-relaxed text-primary outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <p className="mt-2 text-sm text-secondary">
          {text.length} / 10,000 characters
        </p>
      </div>

      {/* Stats Bar */}
      <div className="mb-4 grid grid-cols-2 gap-4 rounded-lg bg-surface-hover/70 p-4 md:grid-cols-4">
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
          variant="primary"
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
        <Button onClick={handleCopy} disabled={!text} variant="secondary">
          Copy Text
        </Button>
        {issues.length > 0 && (
          <Button onClick={applyAllFixes} variant="success">
            Fix All ({issues.length})
          </Button>
        )}
        <Button onClick={handleClear} disabled={!text} variant="outline">
          Clear
        </Button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 rounded-lg border border-error/30 bg-error/10 p-4">
          <p className="text-error-foreground">❌ {error}</p>
        </div>
      )}

      {/* Issues List */}
      {issues.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-primary">
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
        <div className="rounded-lg border border-success/20 bg-success/10 p-6 text-center">
          <p className="text-2xl">✅</p>
          <p className="mt-2 text-lg font-semibold text-primary">
            Great! No issues found in your text.
          </p>
          <p className="text-secondary">Your writing looks perfect!</p>
        </div>
      )}

      {/* Help Text */}
      {!text && (
        <div className="rounded-lg border border-border bg-surface-hover/80 p-6">
          <h4 className="mb-2 font-semibold text-primary">How to use:</h4>
          <ol className="list-decimal list-inside space-y-1 text-secondary">
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
    <div className={`text-2xl font-bold ${error ? "text-error-foreground" : "text-primary"}`}>
      {value}
    </div>
    <div className="text-sm text-secondary">{label}</div>
  </div>
);

const IssueCard = ({
  issue,
  onApply,
}: {
  issue: GrammarIssue;
  onApply: (suggestion: string) => void;
}) => {
  const typeClasses: { [key: string]: string } = {
    Spelling: "border-error/40 bg-error/10 text-primary",
    Grammar: "border-warning/40 bg-warning/10 text-primary",
    Punctuation: "border-primary/30 bg-primary/10 text-primary",
    Style: "border-secondary/30 bg-surface-hover text-primary",
  };

  const cardClass = typeClasses[issue.type] || "border-border bg-surface-hover text-primary";

  return (
    <div className={`rounded-lg border p-4 shadow-sm ${cardClass}`}>
      <div className="mb-2 flex items-start justify-between">
        <span className="rounded bg-surface px-2 py-1 text-xs font-semibold">
          {issue.type}
        </span>
        {issue.severity && (
          <span className="text-xs opacity-75">{issue.severity}</span>
        )}
      </div>
      <p className="mb-2 font-medium text-primary">{issue.message}</p>
      <p className="mb-3 text-sm text-secondary">
        Context: "...{issue.context}..."
      </p>
      {issue.suggestions.length > 0 && (
        <div>
          <p className="mb-2 text-sm font-semibold text-primary">Suggestions:</p>
          <div className="flex flex-wrap gap-2">
            {issue.suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => onApply(suggestion)}
                className="rounded border border-border bg-surface px-3 py-1.5 text-sm font-medium shadow-sm transition hover:border-primary/50 hover:shadow-md"
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

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderHighlighted(text: string, issues: GrammarIssue[]) {
  if (!text) return "";
  if (!issues || issues.length === 0) return escapeHtml(text);

  const sorted = [...issues].sort((a, b) => a.start - b.start);
  const parts: string[] = [];
  let cursor = 0;

  const typeClass: Record<string, string> = {
    Spelling: "bg-error/30 text-primary",
    Grammar: "bg-warning/30 text-primary",
    Punctuation: "bg-primary/20 text-primary",
    Style: "bg-secondary/20 text-primary",
  };

  sorted.forEach((issue) => {
    const safeStart = Math.max(0, Math.min(text.length, issue.start));
    const safeEnd = Math.max(safeStart, Math.min(text.length, issue.end));

    if (cursor < safeStart) {
      parts.push(escapeHtml(text.slice(cursor, safeStart)));
    }

    const highlight = escapeHtml(text.slice(safeStart, safeEnd));
    const cls = typeClass[issue.type] || "bg-primary/15 text-primary";
    parts.push(`<mark class="rounded-sm px-0.5 ${cls}">${highlight}</mark>`);
    cursor = safeEnd;
  });

  if (cursor < text.length) {
    parts.push(escapeHtml(text.slice(cursor)));
  }

  return parts.join("");
}

export default GrammarToolUI;