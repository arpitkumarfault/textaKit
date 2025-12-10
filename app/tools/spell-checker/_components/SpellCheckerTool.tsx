"use client";

import { useState } from "react";
import { Button } from "../../../components/ui";
import { Textarea } from "../../../components/ui";

export default function SpellCheckerTool() {
  const [text, setText] = useState("");
  const [errors, setErrors] = useState<Array<{ word: string; suggestions: string[] }>>([]);

  // Simple dictionary-based spell checker
  const dictionary = new Set([
    "the", "be", "to", "of", "and", "a", "in", "that", "have", "it", "for", "not", "on", "with", "he",
    "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
    "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out",
    "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no",
    "just", "him", "know", "take", "people", "into", "year", "your", "good", "some", "could", "them",
    // Add more common words as needed
  ]);

  const checkSpelling = () => {
    const words = text.toLowerCase().match(/\b(\w+)\b/g) || [];
    const foundErrors: Array<{ word: string; suggestions: string[] }> = [];

    words.forEach((word) => {
      if (!dictionary.has(word) && !foundErrors.find(e => e.word === word)) {
        // Simple suggestion: remove one character at a time
        const suggestions = [];
        for (let i = 0; i < word.length; i++) {
          const suggestion = word.slice(0, i) + word.slice(i + 1);
          if (dictionary.has(suggestion)) suggestions.push(suggestion);
        }
        if (suggestions.length > 0) {
          foundErrors.push({ word, suggestions });
        }
      }
    });

    setErrors(foundErrors);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <label className="mb-2 block text-lg font-semibold text-gray-900">
          Enter your text to check spelling:
        </label>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="min-h-96 text-lg"
        />
      </div>

      <div className="mb-6 flex gap-3">
        <Button onClick={checkSpelling}>
          Check Spelling
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setText("");
            setErrors([]);
          }}
        >
          Clear
        </Button>
      </div>

      {errors.length > 0 && (
        <div className="rounded-lg border border-orange-200 bg-orange-50 p-6">
          <h3 className="mb-4 text-xl font-bold text-orange-900">
            Found {errors.length} potential spelling mistake{errors.length > 1 ? "s" : ""}
          </h3>
          <div className="space-y-3">
            {errors.map((error, idx) => (
              <div key={idx} className="rounded bg-white p-4 shadow-sm">
                <div className="mb-2 font-semibold text-red-600">
                  "{error.word}" might be misspelled
                </div>
                {error.suggestions.length > 0 && (
                  <div className="text-sm">
                    <span className="font-medium">Did you mean:</span>{" "}
                    {error.suggestions.slice(0, 3).map((s, i) => (
                      <button
                        key={i}
                        onClick={() => setText(text.replace(new RegExp(error.word, "gi"), s))}
                        className="mr-2 rounded bg-blue-100 px-2 py-1 text-blue-700 hover:bg-blue-200"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {text && errors.length === 0 && (
        <div className="rounded-lg bg-green-50 p-6 text-center">
          <p className="text-2xl font-bold text-green-800">
            No spelling errors found!
          </p>
          <p className="mt-2 text-green-700">Your text looks perfect!</p>
        </div>
      )}
    </div>
  );
}