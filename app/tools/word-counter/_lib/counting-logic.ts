import { ToolStats } from "../../../types/tools";

export function calculateStats(text: string): ToolStats {
  if (!text.trim()) {
    return {
      characters: 0,
      charactersNoSpaces: 0,
      words: 0,
      sentences: 0,
      paragraphs: 0,
      readingTime: 0,
    };
  }

  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim()).length;
  const readingTime = Math.ceil(words / 200); // 200 words per minute

  return {
    characters,
    charactersNoSpaces,
    words,
    sentences,
    paragraphs,
    readingTime,
  };
}