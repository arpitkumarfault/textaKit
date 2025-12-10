"use client";

import { useState, useEffect } from "react";

export default function AddLineNumbersUI() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [startNumber, setStartNumber] = useState(1);
    const [padding, setPadding] = useState(false);

    useEffect(() => {
        if (!input) {
            setOutput("");
            return;
        }

        const lines = input.split("\n");
        const maxDigits = String(startNumber + lines.length - 1).length;

        const numberedLines = lines.map((line, index) => {
            const lineNum = startNumber + index;
            const paddedNum = padding
                ? String(lineNum).padStart(maxDigits, "0")
                : String(lineNum);
            return `${paddedNum}. ${line}`;
        });

        setOutput(numberedLines.join("\n"));
    }, [input, startNumber, padding]);

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
            <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div>
                    <label htmlFor="start-number" className="mb-2 block font-semibold text-gray-900">
                        Starting Number
                    </label>
                    <input
                        type="number"
                        id="start-number"
                        min="0"
                        value={startNumber}
                        onChange={(e) => setStartNumber(Number(e.target.value))}
                        className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-end">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={padding}
                            onChange={(e) => setPadding(e.target.checked)}
                            className="mr-2 h-4 w-4"
                        />
                        <span className="text-gray-700">Add leading zeros (001, 002...)</span>
                    </label>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Input */}
                <div>
                    <label htmlFor="input-text" className="mb-2 block font-semibold text-gray-900">
                        Original Text
                    </label>
                    <textarea
                        id="input-text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Paste your text here...&#10;Each line will be numbered&#10;automatically"
                        className="min-h-[300px] w-full rounded-lg border border-gray-300 p-3 font-mono text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Output */}
                <div>
                    <label htmlFor="output-text" className="mb-2 block font-semibold text-gray-900">
                        Numbered Text
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
                    📋 Copy Numbered Text
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
                    <div className="text-sm text-blue-800">
                        • Total Lines: {input.split("\n").length}
                    </div>
                </div>
            )}
        </div>
    );
}