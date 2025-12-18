// app/api/tts/route.ts
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { text, lang = "en" } = await req.json();

    if (!text || text.trim().length === 0) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    if (text.trim().length > 200) {
      return NextResponse.json({ error: "Max 200 characters (Google free limit)" }, { status: 400 });
    }

    const encodedText = encodeURIComponent(text.trim());
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=${lang}&client=tw-ob`;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("Google TTS request failed");
    }

    const arrayBuffer = await response.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": 'attachment; filename="speech.mp3"',
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("TTS Error:", error);
    return NextResponse.json({ error: "Failed to generate speech" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
export const maxDuration = 30;