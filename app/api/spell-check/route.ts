// app/api/spell-check/route.ts
import { NextResponse } from "next/server";
import { checkText } from "../../lib/spell";

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    // Validation
    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Invalid text provided" },
        { status: 400 }
      );
    }

    if (text.length > 10000) {
      return NextResponse.json(
        { error: "Text too long. Maximum 10,000 characters allowed." },
        { status: 400 }
      );
    }

    // Check spelling
    const errors = checkText(text);

    return NextResponse.json({ errors }, { status: 200 });
  } catch (error: any) {
    console.error("Spell check error:", error);
    return NextResponse.json(
      { error: "Failed to check spelling", details: error.message },
      { status: 500 }
    );
  }
}
