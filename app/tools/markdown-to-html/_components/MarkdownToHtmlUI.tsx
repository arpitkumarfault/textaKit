"use client";

import { useState, useEffect } from "react";

export default function MarkdownToHtmlUI() {
    const [markdown, setMarkdown] = useState("");
    const [html, setHtml] = useState("");

    useEffect(() => {
        const convertedHtml = convertMarkdownToHtml(markdown);
        setHtml(convertedHtml);
    }, [markdown]);

    const convertMarkdownToHtml = (md: string): string => {
        let result = md;

        // Headers
        result = result.replace(/^### (.+)$/gm, "<h3>$1</h3>");
        result = result.replace(/^## (.+)$/gm, "<h2>$1</h2>");
        result = result.replace(/^# (.+)$/gm, "<h1>$1</h1>");

        // Bold
        result = result.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
        result = result.replace(/__(.+?)__/g, "<strong>$1</strong>");

        // Italic
        result = result.replace(/\*(.+?)\*/g, "<em>$1</em>");
        result = result.replace(/_(.+?)_/g, "<em>$1</em>");

        // Strikethrough
        result = result.replace(/~~(.+?)~~/g, "<del>$1</del>");

        // Code (inline)
        result = result.replace(/`(.+?)`/g, "<code>$1</code>");

        // Links
        result = result.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

        // Images
        result = result.replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1" />');

        // Unordered lists
        result = result.replace(/^\* (.+)$/gm, "<li>$1</li>");
        result = result.replace(/^- (.+)$/gm, "<li>$1</li>");
        result = result.replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>");

        // Ordered lists
        result = result.replace(/^\d+\. (.+)$/gm, "<li>$1</li>");

        // Blockquotes
        result = result.replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>");

        // Horizontal rule
        result = result.replace(/^---$/gm, "<hr />");
        result = result.replace(/^\*\*\*$/gm, "<hr />");

        // Line breaks
        result = result.replace(/\n\n/g, "</p><p>");
        result = "<p>" + result + "</p>";
        result = result.replace(/<p><\/p>/g, "");
        result = result.replace(/<p>(<h[1-6]>)/g, "$1");
        result = result.replace(/(<\/h[1-6]>)<\/p>/g, "$1");
        result = result.replace(/<p>(<ul>)/g, "$1");
        result = result.replace(/(<\/ul>)<\/p>/g, "$1");
        result = result.replace(/<p>(<hr \/>)<\/p>/g, "$1");
        result = result.replace(/<p>(<blockquote>)/g, "$1");
        result = result.replace(/(<\/blockquote>)<\/p>/g, "$1");

        return result;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(html);
    };

    const handleClear = () => {
        setMarkdown("");
        setHtml("");
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Markdown Input */}
                <div>
                    <label htmlFor="markdown-input" className="mb-2 block font-semibold text-gray-900">
                        Markdown Input
                    </label>
                    <textarea
                        id="markdown-input"
                        value={markdown}
                        onChange={(e) => setMarkdown(e.target.value)}
                        placeholder="# Enter your Markdown here...&#10;&#10;## Features&#10;- **Bold text**&#10;- *Italic text*&#10;- [Links](https://example.com)&#10;- `code`"
                        className="min-h-[400px] w-full rounded-lg border border-gray-300 p-3 font-mono text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* HTML Output */}
                <div>
                    <label htmlFor="html-output" className="mb-2 block font-semibold text-gray-900">
                        HTML Output
                    </label>
                    <textarea
                        id="html-output"
                        value={html}
                        readOnly
                        className="min-h-[400px] w-full rounded-lg border border-gray-300 bg-gray-50 p-3 font-mono text-sm"
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
                <button
                    onClick={handleCopy}
                    disabled={!html}
                    className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    📋 Copy HTML
                </button>
                <button
                    onClick={handleClear}
                    disabled={!markdown}
                    className="rounded-lg border border-gray-300 bg-white px-6 py-2 font-semibold text-gray-700 transition hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    🗑️ Clear
                </button>
            </div>

            {/* Preview */}
            {html && (
                <div className="mt-6">
                    <h3 className="mb-2 font-semibold text-gray-900">HTML Preview:</h3>
                    <div
                        className="rounded-lg border border-gray-200 bg-white p-4"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            )}
        </div>
    );
}