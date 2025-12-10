"use client";

import { useState, useEffect } from "react";

type ReverseMode = "all" | "words";

export default function TextReverserUI() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [mode, setMode] = useState<ReverseMode>("all");

    useEffect(() => {
        if (mode === "all") {
            setOutput(input.split("").reverse().join(""));
        } else {
            // Reverse each word individually
            const words = input.split(" ");
            const reversedWords = words.map(word => word.split("").reverse().join(""));
            setOutput(reversedWords.join(" "));
        }
    }, [input, mode]);

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
    };

    const handleClear = () => {
        setInput("");
        setOutput("");
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            {/* Mode Selection */}
            <div className="mb-6">
                <label className="mb-2 block font-semibold text-gray-900">
                    Reverse Mode
                </label>
                <div className="flex gap-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="mode"
                            value="all"
                            checked={mode === "all"}
                            onChange={(e) => setMode(e.target.value as ReverseMode)}
                            className="mr-2"
                        />
                        <span className="text-gray-700">Reverse Entire Text</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="mode"
                            value="words"
                            checked={mode === "words"}
                            onChange={(e) => setMode(e.target.value as ReverseMode)}
                            className="mr-2"
                        />
                        <span className="text-gray-700">Reverse Words Only</span>
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
                        placeholder="Type your text here to reverse..."
                        className="min-h-[300px] w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Output */}
                <div>
                    <label htmlFor="output-text" className="mb-2 block font-semibold text-gray-900">
                        Reversed Text
                    </label>
                    <textarea
                        id="output-text"
                        value={output}
                        readOnly
                        className="min-h-[300px] w-full rounded-lg border border-gray-300 bg-gray-50 p-3 font-mono"
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
                    📋 Copy Reversed Text
                </button>
                <button
                    onClick={handleClear}
                    disabled={!input}
                    className="rounded-lg border border-gray-300 bg-white px-6 py-2 font-semibold text-gray-700 transition hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    🗑️ Clear
                </button>
            </div>

            {/* Example */}
            {!input && (
                <div className="mt-6 rounded-lg bg-blue-50 p-4">
                    <h3 className="mb-2 font-semibold text-blue-900">Example:</h3>
                    <p className="text-sm text-blue-800">
                        <strong>Reverse Entire Text:</strong> "Hello World" → "dlroW olleH"
                    </p>
                    <p className="text-sm text-blue-800">
                        <strong>Reverse Words Only:</strong> "Hello World" → "olleH dlroW"
                    </p>
                </div>
            )}
        </div>
    );
}
