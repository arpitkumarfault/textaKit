export interface Tool {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  category: string;
  featured?: boolean;
  popularity?: number;        // ← This was missing → now added!
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  relatedTools?: string[];
}
export type ToolCategory = 
  | "Writing"
  | "Analysis"
  | "Formatting"
  | "Conversion"
  | "SEO"
  | "Productivity";

export interface ToolState {
  inputText: string;
  outputText: string;
  isProcessing: boolean;
  error: string | null;
}

export interface ToolStats {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  sentences: number;
  paragraphs: number;
  readingTime: number;
}