"use client";

import { useState, useEffect } from "react";

export default function FindAndReplaceUI() {
    const [text, setText] = useState("");
    const [findText, setFindText] = useState("");
    const [replaceText, setReplaceText] = useState("");
    const [output, setOutput] = useState("");
    const [caseSensitive, setCaseSensitive] = useState(false);
    const [wholeWord, setWholeWord] = useState(false);
    const [matchCount, setMatchCount] = useState(0);

    useEffect(() => {
        if (!text || !findText) {
            setOutput(text);
            setMatchCount(0);
            return;
        }

        let result = text;
        let flags = caseSensitive ? "g" : "gi";
        let count = 0;

        try {
            if (wholeWord) {
                // Escape special regex characters in findText
                const escapedFind = findText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                const regex = new RegExp(`\\b${escapedFind}\\b`, flags);
                const matches = text.match(regex);
                count = matches ? matches.length : 0;
                // Don't auto-replace, just count
                setOutput(text);
            } else {
                const regex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), flags);
                const matches = text.match(regex);
                count = matches ? matches.length : 0;
                // Don't auto-replace, just count
                setOutput(text);
            }
        } catch (e) {
            setOutput(text);
            count = 0;
        }

        setMatchCount(count);
    }, [text, findText, caseSensitive, wholeWord]);

    const handleReplace = () => {
        if (!findText) return;

        let result = text;
        let flags = caseSensitive ? "g" : "gi";

        try {
            if (wholeWord) {
                const escapedFind = findText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                const regex = new RegExp(`\\b${escapedFind}\\b`, flags);
                result = text.replace(regex, replaceText);
            } else {
                const regex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), flags);
                result = text.replace(regex, replaceText);
            }
        } catch (e) {
            // If regex fails, use simple string replacement
            result = text;
        }

        setText(result);
        setOutput(result);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
    };

    const handleClear = () => {
        setText("");
        setFindText("");
        setReplaceText("");
        setOutput("");
        setMatchCount(0);
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            {/* Find and Replace Inputs */}
            <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div>
                    <label htmlFor="find-text" className="mb-2 block font-semibold text-gray-900">
                        Find
                    </label>
                    <input
                        type="text"
                        id="find-text"
                        value={findText}
                        onChange={(e) => setFindText(e.target.value)}
                        placeholder="Text to find..."
                        className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="replace-text" className="mb-2 block font-semibold text-gray-900">
                        Replace With
                    </label>
                    <input
                        type="text"
                        id="replace-text"
                        value={replaceText}
                        onChange={(e) => setReplaceText(e.target.value)}
                        placeholder="Replacement text..."
                        className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Options */}
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
                    <span className="text-gray-700">Case sensitive</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={wholeWord}
                        onChange={(e) => setWholeWord(e.target.checked)}
                        className="mr-2 h-4 w-4"
                    />
                    <span className="text-gray-700">Match whole words only</span>
                </label>
            </div>

            {/* Match Count */}
            {findText && (
                <div className="mb-4 rounded-lg bg-blue-50 p-3">
                    <span className="text-sm font-semibold text-blue-900">
                        {matchCount} {matchCount === 1 ? "match" : "matches"} found
                    </span>
                </div>
            )}

            {/* Text Area */}
            <div className="mb-6">
                <label htmlFor="main-text" className="mb-2 block font-semibold text-gray-900">
                    Your Text
                </label>
                <textarea
                    id="main-text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Paste or type your text here..."
                    className="min-h-[300px] w-full rounded-lg border border-gray-300 p-3 font-mono text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
                <button
                    onClick={handleReplace}
                    disabled={!findText || !text}
                    className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    🔄 Replace All
                </button>
                <button
                    onClick={handleCopy}
                    disabled={!text}
                    className="rounded-lg border border-gray-300 bg-white px-6 py-2 font-semibold text-gray-700 transition hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    📋 Copy Text
                </button>
                <button
                    onClick={handleClear}
                    disabled={!text && !findText && !replaceText}
                    className="rounded-lg border border-gray-300 bg-white px-6 py-2 font-semibold text-gray-700 transition hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    🗑️ Clear All
                </button>
            </div>
        </div>
    );
}