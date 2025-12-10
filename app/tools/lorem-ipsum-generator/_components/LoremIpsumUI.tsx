"use client";

import { useState } from "react";

const LOREM_WORDS = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
    "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
    "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
    "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
    "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
    "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
    "deserunt", "mollit", "anim", "id", "est", "laborum"
];

export default function LoremIpsumUI() {
    const [paragraphs, setParagraphs] = useState(3);
    const [sentencesPerParagraph, setSentencesPerParagraph] = useState(5);
    const [output, setOutput] = useState("");

    const generateWord = () => {
        return LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
    };

    const generateSentence = () => {
        const length = Math.floor(Math.random() * 10) + 5; // 5-15 words
        const words = [];
        for (let i = 0; i < length; i++) {
            words.push(i === 0 ? capitalize(generateWord()) : generateWord());
        }
        return words.join(" ") + ".";
    };

    const capitalize = (word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const generateParagraph = (sentences: number) => {
        const sentenceArray = [];
        for (let i = 0; i < sentences; i++) {
            sentenceArray.push(generateSentence());
        }
        return sentenceArray.join(" ");
    };

    const generateLorem = () => {
        const paragraphArray = [];
        for (let i = 0; i < paragraphs; i++) {
            paragraphArray.push(generateParagraph(sentencesPerParagraph));
        }
        setOutput(paragraphArray.join("\n\n"));
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
    };

    const handleClear = () => {
        setOutput("");
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            {/* Settings */}
            <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div>
                    <label htmlFor="paragraphs" className="mb-2 block font-semibold text-gray-900">
                        Number of Paragraphs
                    </label>
                    <input
                        type="number"
                        id="paragraphs"
                        min="1"
                        max="50"
                        value={paragraphs}
                        onChange={(e) => setParagraphs(Number(e.target.value))}
                        className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="sentences" className="mb-2 block font-semibold text-gray-900">
                        Sentences Per Paragraph
                    </label>
                    <input
                        type="number"
                        id="sentences"
                        min="1"
                        max="20"
                        value={sentencesPerParagraph}
                        onChange={(e) => setSentencesPerParagraph(Number(e.target.value))}
                        className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Generate Button */}
            <div className="mb-6">
                <button
                    onClick={generateLorem}
                    className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 md:w-auto"
                >
                    Generate Lorem Ipsum
                </button>
            </div>

            {/* Output */}
            {output && (
                <>
                    <div className="mb-4">
                        <label className="mb-2 block font-semibold text-gray-900">
                            Generated Text
                        </label>
                        <textarea
                            value={output}
                            readOnly
                            className="min-h-[300px] w-full rounded-lg border border-gray-300 bg-gray-50 p-3 font-mono text-sm"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={handleCopy}
                            className="rounded-lg bg-green-600 px-6 py-2 font-semibold text-white transition hover:bg-green-700"
                        >
                            📋 Copy to Clipboard
                        </button>
                        <button
                            onClick={handleClear}
                            className="rounded-lg border border-gray-300 bg-white px-6 py-2 font-semibold text-gray-700 transition hover:bg-gray-50"
                        >
                            🗑️ Clear
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-4 rounded-lg bg-blue-50 p-4">
                        <h3 className="mb-2 font-semibold text-blue-900">Statistics:</h3>
                        <div className="grid gap-2 text-sm text-blue-800 md:grid-cols-3">
                            <div>• Paragraphs: {paragraphs}</div>
                            <div>• Words: ~{output.split(/\s+/).length}</div>
                            <div>• Characters: {output.length}</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}