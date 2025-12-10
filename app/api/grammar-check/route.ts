import { NextRequest, NextResponse } from "next/server";

// LanguageTool Free API (no API key needed!)
const LANGUAGETOOL_API = "https://api.languagetool.org/v2/check";

export async function POST(request: NextRequest) {
  try {
    const { text, language = "en-US" } = await request.json();

    // Validate input
    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      );
    }

    if (text.length > 10000) {
      return NextResponse.json(
        { error: "Text is too long (max 10,000 characters)" },
        { status: 400 }
      );
    }

    // Call LanguageTool API
    const response = await fetch(LANGUAGETOOL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
      },
      body: new URLSearchParams({
        text: text,
        language: language,
        enabledOnly: "false",
      }),
    });

    if (!response.ok) {
      throw new Error("Grammar check API failed");
    }

    const data = await response.json();

    // Transform response to our format
    const issues = data.matches.map((match: any) => ({
      type: getIssueType(match.rule.category.id),
      message: match.message,
      start: match.offset,
      end: match.offset + match.length,
      context: match.context.text,
      suggestions: match.replacements.slice(0, 3).map((r: any) => r.value),
      severity: match.rule.issueType || "style",
    }));

    return NextResponse.json({
      success: true,
      issues,
      totalIssues: issues.length,
      language: data.language.name,
    });

  } catch (error) {
    console.error("Grammar check error:", error);
    return NextResponse.json(
      { error: "Failed to check grammar. Please try again." },
      { status: 500 }
    );
  }
}

// Map LanguageTool categories to our types
function getIssueType(categoryId: string): string {
  const mapping: { [key: string]: string } = {
    TYPOS: "Spelling",
    GRAMMAR: "Grammar",
    PUNCTUATION: "Punctuation",
    CASING: "Grammar",
    REDUNDANCY: "Style",
    STYLE: "Style",
    CONFUSED_WORDS: "Grammar",
  };
  return mapping[categoryId] || "Style";
}