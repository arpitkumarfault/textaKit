"use client";

import { useState } from "react";
import { Textarea, Button } from "../../../components/ui";

type ErrorItem = { word: string; suggestions: string[] };

export default function SpellCheckerTool() {
  const [text, setText] = useState("");
  const [errors, setErrors] = useState<ErrorItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheck = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/spell-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to check spelling");
      }

      setErrors(data.errors || []);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setErrors([]);
    } finally {
      setLoading(false);
    }
  };

  const replaceWordEverywhere = (from: string, to: string) => {
    const regex = new RegExp(`\\b${from}\\b`, "gi");
    setText((prev) => prev.replace(regex, to));
    setErrors((prev) =>
      prev.filter((e) => e.word.toLowerCase() !== from.toLowerCase())
    );
  };

  const handleClear = () => {
    setText("");
    setErrors([]);
    setError(null);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text copied to clipboard!");
    } catch {
      alert("Failed to copy text");
    }
  };

  const stats = {
    characters: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    errors: errors.length,
  };

  return (
    <div className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-colors">
      {/* Stats Bar */}
      <div className="mb-4 grid grid-cols-3 gap-4 rounded-lg bg-surface-hover/70 p-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{stats.characters}</div>
          <div className="text-sm text-text-secondary">Characters</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{stats.words}</div>
          <div className="text-sm text-text-secondary">Words</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl font-bold ${stats.errors > 0 ? "text-error" : "text-primary"}`}>
            {stats.errors}
          </div>
          <div className="text-sm text-text-secondary">Errors</div>
        </div>
      </div>

      {/* Text Input */}
      <div className="mb-4">
        <label
          htmlFor="spell-text"
          className="mb-2 block text-lg font-semibold text-primary"
        >
          Enter your text to check spelling:
        </label>
        <Textarea
          id="spell-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="min-h-[300px] text-base"
        />
        <p className="mt-2 text-sm text-text-secondary">
          {text.length} / 10,000 characters
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex flex-wrap gap-3">
        <Button
          onClick={handleCheck}
          disabled={!text.trim() || loading || text.length > 10000}
          variant="primary"
        >
          {loading ? (
            <>
              <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Checking...
            </>
          ) : (
            "Check Spelling"
          )}
        </Button>
        <Button onClick={handleCopy} disabled={!text} variant="secondary">
          Copy Text
        </Button>
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

      {/* Spelling Errors */}
      {errors.length > 0 && (
        <div className="rounded-lg border border-orange-200 bg-orange-50 dark:bg-orange-950/30 p-6">
          <h3 className="mb-4 text-xl font-bold text-orange-900 dark:text-orange-100">
            Found {errors.length} potential spelling mistake
            {errors.length > 1 ? "s" : ""}
          </h3>
          <div className="space-y-3">
            {errors.map((error, idx) => (
              <div
                key={`${error.word}-${idx}`}
                className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm border border-border"
              >
                <div className="mb-2 font-semibold text-red-600 dark:text-red-400">
                  "{error.word}" might be misspelled
                </div>
                {error.suggestions.length > 0 ? (
                  <div className="text-sm">
                    <span className="font-medium text-text-primary">Did you mean:</span>{" "}
                    <div className="mt-2 flex flex-wrap gap-2">
                      {error.suggestions.map((s, i) => (
                        <button
                          key={i}
                          onClick={() => replaceWordEverywhere(error.word, s)}
                          className="rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 transition hover:bg-blue-200 dark:hover:bg-blue-900/50 active:scale-95"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-text-secondary">No suggestions available</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Success Message */}
      {text.trim() && errors.length === 0 && !loading && !error && (
        <div className="rounded-lg border border-success/20 bg-success/10 p-6 text-center">
          <p className="text-4xl">✅</p>
          <p className="mt-2 text-2xl font-bold text-green-800 dark:text-green-200">
            No spelling errors found!
          </p>
          <p className="mt-1 text-green-700 dark:text-green-300">
            Your text looks perfect!
          </p>
        </div>
      )}

      {/* Help Text */}
      {!text && (
        <div className="rounded-lg border border-border bg-surface-hover/80 p-6">
          <h4 className="mb-2 font-semibold text-primary">How to use:</h4>
          <ol className="list-decimal list-inside space-y-1 text-text-secondary">
            <li>Type or paste your text in the box above</li>
            <li>Click "Check Spelling" to analyze your text</li>
            <li>Click on suggestions to replace misspelled words</li>
            <li>Use "Copy Text" to copy the corrected text</li>
          </ol>
        </div>
      )}
    </div>
  );
}
