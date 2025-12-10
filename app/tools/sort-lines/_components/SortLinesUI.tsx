"use client";

import { useState, useEffect } from "react";

type SortOrder = "asc" | "desc";
type SortType = "alphabetical" | "numerical";

export default function SortLinesUI() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
    const [sortType, setSortType] = useState<SortType>("alphabetical");
    const [caseSensitive, setCaseSensitive] = useState(false);
    const [removeDuplicates, setRemoveDuplicates] = useState(false);
    const [removeEmpty, setRemoveEmpty] = useState(false);

    useEffect(() => {
        if (!input) {
            setOutput("");
            return;
        }

        let lines = input.split("\n");

        // Remove empty lines if option is enabled
        if (removeEmpty) {
            lines = lines.filter(line => line.trim() !== "");
        }

        // Remove duplicates if option is enabled
        if (removeDuplicates) {
            lines = [...new Set(lines)];
        }

        // Sort the lines
        const sortedLines = [...lines].sort((a, b) => {
            let compareA = a;
            let compareB = b;

            // Handle case sensitivity
            if (!caseSensitive) {
                compareA = a.toLowerCase();
                compareB = b.toLowerCase();
            }

            // Handle sort type
            if (sortType === "numerical") {
                const numA = parseFloat(compareA);
                const numB = parseFloat(compareB);
                if (!isNaN(numA) && !isNaN(numB)) {
                    return sortOrder === "asc" ? numA - numB : numB - numA;
                }
            }

            // Alphabetical sort
            if (sortOrder === "asc") {
                return compareA.localeCompare(compareB);
            } else {
                return compareB.localeCompare(compareA);
            }
        });

        setOutput(sortedLines.join("\n"));
    }, [input, sortOrder, sortType, caseSensitive, removeDuplicates, removeEmpty]);

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
    };

    const handleClear = () => {
        setInput("");
        setOutput("");
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            {/* Settings */}
            <div className="mb-6 space-y-4">
                {/* Sort Order */}
                <div>
                    <label className="mb-2 block font-semibold text-gray-900">
                        Sort Order
                    </label>
                    <div className="flex gap-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="order"
                                value="asc"
                                checked={sortOrder === "asc"}
                                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                                className="mr-2"
                            />
                            <span className="text-gray-700">Ascending (A-Z, 0-9)</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="order"
                                value="desc"
                                checked={sortOrder === "desc"}
                                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                                className="mr-2"
                            />
                            <span className="text-gray-700">Descending (Z-A, 9-0)</span>
                        </label>
                    </div>
                </div>

                {/* Sort Type */}
                <div>
                    <label className="mb-2 block font-semibold text-gray-900">
                        Sort Type
                    </label>
                    <div className="flex gap-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="type"
                                value="alphabetical"
                                checked={sortType === "alphabetical"}
                                onChange={(e) => setSortType(e.target.value as SortType)}
                                className="mr-2"
                            />
                            <span className="text-gray-700">Alphabetical</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="type"
                                value="numerical"
                                checked={sortType === "numerical"}
                                onChange={(e) => setSortType(e.target.value as SortType)}
                                className="mr-2"
                            />
                            <span className="text-gray-700">Numerical</span>
                        </label>
                    </div>
                </div>

                {/* Options */}
                <div>
                    <label className="mb-2 block font-semibold text-gray-900">
                        Options
                    </label>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={caseSensitive}
                                onChange={(e) => setCaseSensitive(e.target.checked)}
                                className="mr-2 h-4 w-4"
                            />
                            <span className="text-gray-700">Case sensitive</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={removeDuplicates}
                                onChange={(e) => setRemoveDuplicates(e.target.checked)}
                                className="mr-2 h-4 w-4"
                            />
                            <span className="text-gray-700">Remove duplicate lines</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={removeEmpty}
                                onChange={(e) => setRemoveEmpty(e.target.checked)}
                                className="mr-2 h-4 w-4"
                            />
                            <span className="text-gray-700">Remove empty lines</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Input */}
                <div>
                    <label htmlFor="input-text" className="mb-2 block font-semibold text-gray-900">
                        Original Lines
                    </label>
                    <textarea
                        id="input-text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter each item on a new line...&#10;apple&#10;banana&#10;cherry"
                        className="min-h-[300px] w-full rounded-lg border border-gray-300 p-3 font-mono text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Output */}
                <div>
                    <label htmlFor="output-text" className="mb-2 block font-semibold text-gray-900">
                        Sorted Lines
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
                    📋 Copy Sorted Lines
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
                        <div>• Total Lines: {output.split("\n").length}</div>
                        {removeDuplicates && <div>• Duplicates Removed: {input.split("\n").length - output.split("\n").length}</div>}
                    </div>
                </div>
            )}
        </div>
    );
}