"use client";

import { useState, useEffect } from "react";

export default function RemoveLineBreaksUI() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [addSpaces, setAddSpaces] = useState(true);
    const [preserveParagraphs, setPreserveParagraphs] = useState(false);
    const [cleanExtraSpaces, setCleanExtraSpaces] = useState(true);

    useEffect(() => {
        if (!input) {
            setOutput("");
            return;
        }

        let result = input;

        if (preserveParagraphs) {
            // Replace single line breaks with spaces (or nothing), keep double line breaks as paragraph separators
            if (addSpaces) {
                result = result.replace(/([^\n])\n([^\n])/g, "$1 $2");
            } else {
                result = result.replace(/([^\n])\n([^\n])/g, "$1$2");
            }
        } else {
            // Remove all line breaks
            if (addSpaces) {
                result = result.replace(/\n/g, " ");
            } else {
                result = result.replace(/\n/g, "");
            }
        }

        // Clean extra spaces if option is enabled
        if (cleanExtraSpaces) {
            result = result.replace(/\s+/g, " ");
        }

        // Trim leading/trailing spaces
        result = result.trim();

        setOutput(result);
    }, [input, addSpaces, preserveParagraphs, cleanExtraSpaces]);

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
    };

    const handleClear = () => {
        setInput("");
        setOutput("");
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            {/* Options */}
            <div className="mb-6 space-y-2">
                <label className="mb-2 block font-semibold text-gray-900">
                    Options
                </label>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={addSpaces}
                        onChange={(e) => setAddSpaces(e.target.checked)}
                        className="mr-2 h-4 w-4"
                    />
                    <span className="text-gray-700">Add spaces where line breaks are removed</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={preserveParagraphs}
                        onChange={(e) => setPreserveParagraphs(e.target.checked)}
                        className="mr-2 h-4 w-4"
                    />
                    <span className="text-gray-700">Preserve paragraph breaks (double line breaks)</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={cleanExtraSpaces}
                        onChange={(e) => setCleanExtraSpaces(e.target.checked)}
                        className="mr-2 h-4 w-4"
                    />
                    <span className="text-gray-700">Remove extra spaces (multiple spaces become one)</span>
                </label>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Input */}
                <div>
                    <label htmlFor="input-text" className="mb-2 block font-semibold text-gray-900">
                        Multi-Line Text
                    </label>
                    <textarea
                        id="input-text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Paste your multi-line text here...&#10;&#10;Each line will be merged&#10;into a single line."
                        className="min-h-[300px] w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Output */}
                <div>
                    <label htmlFor="output-text" className="mb-2 block font-semibold text-gray-900">
                        Single Line Text
                    </label>
                    <textarea
                        id="output-text"
                        value={output}
                        readOnly
                        className="min-h-[300px] w-full rounded-lg border border-gray-300 bg-gray-50 p-3"
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
                    📋 Copy Single Line Text
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
                        <div>• Characters (before): {input.length}</div>
                        <div>• Characters (after): {output.length}</div>
                    </div>
                </div>
            )}

            {/* Example */}
            {!input && (
                <div className="mt-6 rounded-lg bg-yellow-50 p-4">
                    <h3 className="mb-2 font-semibold text-yellow-900">💡 Use Case:</h3>
                    <p className="text-sm text-yellow-800">
                        Perfect for cleaning text copied from PDFs where unwanted line breaks split sentences.
                    </p>
                </div>
            )}
        </div>
    );
}