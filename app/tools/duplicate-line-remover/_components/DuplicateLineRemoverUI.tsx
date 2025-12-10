"use client";

import { useState, useEffect } from "react";

export default function DuplicateLineRemoverUI() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [caseSensitive, setCaseSensitive] = useState(false);
    const [trimWhitespace, setTrimWhitespace] = useState(true);
    const [duplicatesCount, setDuplicatesCount] = useState(0);

    useEffect(() => {
        if (!input) {
            setOutput("");
            setDuplicatesCount(0);
            return;
        }

        const lines = input.split("\n");
        const seen = new Set<string>();
        const uniqueLines: string[] = [];
        let duplicates = 0;

        lines.forEach((line) => {
            let compareLine = line;

            // Trim whitespace if option is enabled
            if (trimWhitespace) {
                compareLine = line.trim();
            }

            // Handle case sensitivity
            const checkLine = caseSensitive ? compareLine : compareLine.toLowerCase();

            if (!seen.has(checkLine)) {
                seen.add(checkLine);
                uniqueLines.push(line); // Keep original line formatting
            } else {
                duplicates++;
            }
        });

        setOutput(uniqueLines.join("\n"));
        setDuplicatesCount(duplicates);
    }, [input, caseSensitive, trimWhitespace]);

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
    };

    const handleClear = () => {
        setInput("");
        setOutput("");
        setDuplicatesCount(0);
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            {/* Settings */}
            <div className="mb-6 space-y-2">
                <label className="mb-2 block font-semibold text-gray-900">
                    Options
                </label>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={caseSensitive}
                        onChange={(e) => setCaseSensitive(e.target.checked)}
                        className="mr-2 h-4 w-4"
                    />
                    <span className="text-gray-700">Case sensitive (treat "Apple" and "apple" as different)</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={trimWhitespace}
                        onChange={(e) => setTrimWhitespace(e.target.checked)}
                        className="mr-2 h-4 w-4"
                    />
                    <span className="text-gray-700">Trim leading/trailing whitespace when comparing</span>
                </label>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Input */}
                <div>
                    <label htmlFor="input-text" className="mb-2 block font-semibold text-gray-900">
                        Original Text (with duplicates)
                    </label>
                    <textarea
                        id="input-text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Paste your text here...&#10;Each line will be checked&#10;Duplicates will be removed"
                        className="min-h-[300px] w-full rounded-lg border border-gray-300 p-3 font-mono text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Output */}
                <div>
                    <label htmlFor="output-text" className="mb-2 block font-semibold text-gray-900">
                        Unique Lines Only
                    </label>
                    <textarea
                        id="output-text"
                        value={output}
                        readOnly
                        className="min-h-[300px] w-full rounded-lg border border-gray-300 bg-gray-50 p-3 font-mono text-sm"
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
                <button
                    onClick={handleCopy}
                    disabled={!output}
                    className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    📋 Copy Unique Lines
                </button>
                <button
                    onClick={handleClear}
                    disabled={!input}
                    className="rounded-lg border border-gray-300 bg-white px-6 py-2 font-semibold text-gray-700 transition hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    🗑️ Clear
                </button>
            </div>

            {/* Stats */}
            {output && (
                <div className="mt-4 rounded-lg bg-blue-50 p-4">
                    <h3 className="mb-2 font-semibold text-blue-900">Statistics:</h3>
                    <div className="grid gap-1 text-sm text-blue-800">
                        <div>• Original Lines: {input.split("\n").length}</div>
                        <div>• Unique Lines: {output.split("\n").length}</div>
                        <div className="font-semibold text-red-600">• Duplicates Removed: {duplicatesCount}</div>
                    </div>
                </div>
            )}
        </div>
    );
}