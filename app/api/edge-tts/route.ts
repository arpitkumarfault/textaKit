import { NextResponse } from "next/server";
import EdgeTTS from "edge-tts-node";

export const POST = async (req: Request) => {
  try {
    const { text } = await req.json();

    if (!text || text.trim().length === 0) {
      return NextResponse.json({ error: "Text required" }, { status: 400 });
    }

    if (text.length > 5000) {
      return NextResponse.json({ error: "Text too long" }, { status: 400 });
    }

    const stream = await EdgeTTS.speakStream({
      text: text.trim(),
      voice: "en-US-AriaNeural",   // ← Best voice
      // voice: "en-US-GuyNeural",
      // voice: "en-GB-SoniaNeural",
    });

    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }

    const buffer = Buffer.concat(chunks);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": 'attachment; filename="speech.mp3"',
      },
    });
  } catch (error: any) {
    console.error("TTS Error:", error);
    return NextResponse.json({ error: "Failed to generate audio" }, { status: 500 });
  }
};

export const maxDuration = 60;
export const dynamic = "force-dynamic";