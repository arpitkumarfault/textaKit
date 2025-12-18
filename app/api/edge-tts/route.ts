// app/api/edge-tts/route.ts

import { NextResponse } from "next/server";
import {TTS} from "@andresaya/edge-tts";
export const POST = async (req: Request) => {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      );
    }

    if (text.trim().length > 5000) {
      return NextResponse.json(
        { error: "Text too long (max 5000 chars)" },
        { status: 400 }
      );
    }

    // CORRECT WAY — use the TTS class instance
    const tts = new TTS();
    
    const audioStream = await tts.speakStream({
      text: text.trim(),
      voice: "en-US-AriaNeural",  // Best voice
      // voice: "en-US-GuyNeural",
      // voice: "en-GB-SoniaNeural",
      rate: "+0%",
      volume: "+0%",
      pitch: "+0Hz",
    });

    const chunks: Uint8Array[] = [];
    for await (const chunk of audioStream) {
      chunks.push(chunk);
    }

    const buffer = Buffer.concat(chunks);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": buffer.length.toString(),
        "Content-Disposition": 'attachment; filename="speech.mp3"',
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error: any) {
    console.error("TTS Error:", error);
    return NextResponse.json(
      { error: "Failed to generate audio" },
      { status: 500 }
    );
  }
};

export const maxDuration = 60;
export const dynamic = "force-dynamic";